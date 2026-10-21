"use client";

import { useEffect, useRef, useState } from "react";
import HeroScene from "./HeroScene";

// Live hero render (Oct 2026), the WebGL answer to HaysMac's 3D hero video. The emblem as a
// scene: a liquid-gold sun over the mere, its reflection broken into the emblem's water lines,
// faint ledger lines drifting under the surface. The cursor ripples the water and nudges the
// light; scrolling sets the sun. Picks up the --color-ink token, so the palette switcher works.
// Server-renders the SVG scene as a fallback (no JS, no WebGL); reduced motion gets one still frame.

const VERT = `
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseOn;
uniform float uRise;
uniform float uScroll;
uniform vec3 uInk;
uniform float uSunX;
uniform float uHorizon;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

const vec3 GOLD_HI = vec3(0.957, 0.882, 0.533);
const vec3 GOLD = vec3(0.890, 0.698, 0.235);
const vec3 CORAL = vec3(0.949, 0.639, 0.561);
const vec3 PAPER = vec3(0.984, 0.976, 0.965);

// liquid-gold disc: banded sheen that slowly flows, like molten metal
vec3 sunColor(vec2 q, vec2 c, float r, float t) {
  float y = (q.y - (c.y - r)) / r;
  vec3 col = mix(GOLD_HI, GOLD, clamp(y, 0.0, 1.0));
  float flow = sin(q.y * 46.0 + sin(q.x * 7.0 + t * 0.5) * 2.2 + t * 0.9);
  float flow2 = sin(q.y * 23.0 - q.x * 4.0 - t * 0.6);
  col *= 1.0 + 0.07 * flow + 0.045 * flow2;          // molten sheen, stays gold
  float d = length(q - c) / r;
  col = mix(col, GOLD_HI * 1.08, 0.35 * smoothstep(0.78, 1.0, d)); // rim light
  col *= 1.0 - 0.16 * smoothstep(-0.2, 1.0, (q.x - c.x) / r);      // soft shading
  return col;
}

void main() {
  float aspect = uRes.x / uRes.y;
  vec2 p = gl_FragCoord.xy / uRes;
  vec2 q = vec2(p.x * aspect, 1.0 - p.y);   // y grows downward, units = screen height
  float t = uTime;
  float H = uHorizon;

  vec2 m = vec2(uMouse.x * aspect, uMouse.y);
  float r = min(0.22, 0.15 * aspect);
  float cx = min(uSunX * aspect, aspect - r - 0.05);
  vec2 c = vec2(cx + (uMouse.x - 0.5) * 0.04 * uMouseOn, H + (1.0 - uRise) * 0.42 + uScroll * 0.32);

  vec3 col = uInk;

  if (q.y < H) {
    // sky: ink, lifting towards the horizon and around the sun
    col = mix(uInk, uInk * 1.35 + 0.02, smoothstep(H - 0.5, H, q.y) * 0.6);
    float g = exp(-length(q - c) * 3.2) * (0.55 - uScroll * 0.3);
    col += GOLD * g * 0.55;
    float d = length(q - c);
    float disc = smoothstep(r, r - 0.0025, d);
    col = mix(col, sunColor(q, c, r, t), disc);
  } else {
    float depth = q.y - H;
    // water base, darker with depth
    col = mix(uInk * 1.15, uInk * 0.8, smoothstep(0.0, 0.5, depth));

    // waves + cursor ripples
    float wave = sin(depth * 70.0 - t * 1.6 + q.x * 2.5) * 0.010 * (depth * 5.0 + 0.3)
               + (noise(vec2(q.x * 6.0, depth * 30.0 - t * 0.7)) - 0.5) * 0.03 * (depth * 3.0 + 0.2);
    float md = length(q - m);
    float ripple = sin(md * 70.0 - t * 5.0) * exp(-md * 5.0) * 0.014 * uMouseOn;
    float x = q.x + wave + ripple;

    // reflection tapers like the emblem's bars
    float taper = 1.0 - clamp(depth * 1.25, 0.0, 0.85);
    float rx = c.x + (x - c.x) / taper;
    float ry = 2.0 * H - q.y;
    float refl = smoothstep(r, r - 0.01, length(vec2(rx, ry) - c)) * step(ry, H);
    refl += smoothstep(r * 1.2, r * 0.2, abs(rx - c.x)) * smoothstep(0.35, 0.0, depth) * 0.25 * step(c.y - r, H);

    // break it into the emblem's water lines
    float s = pow(depth, 0.62) * 26.0 - t * 0.18;
    float fs = fract(s);
    float thick = 0.32 + depth * 0.9;
    float band = smoothstep(0.0, 0.06, fs) * (1.0 - smoothstep(thick, thick + 0.06, fs));
    float idx = mod(floor(s), 3.0);
    vec3 lineCol = idx < 0.5 ? GOLD : CORAL;
    float fade = (1.0 - smoothstep(0.0, 0.55, depth)) * (1.0 - uScroll * 0.6);
    col = mix(col, lineCol, clamp(refl * band * fade * 0.95, 0.0, 1.0));

    // ledger lines drifting under the surface
    float row = floor(depth * 70.0);
    float rowOn = step(0.55, hash(vec2(row, 3.0)));
    float speed = 0.02 + hash(vec2(row, 7.0)) * 0.05;
    float dash = step(0.82, fract(q.x * (3.0 + hash(vec2(row, 11.0)) * 6.0) - t * speed));
    float thin = 1.0 - smoothstep(0.0, 0.18, abs(fract(depth * 70.0) - 0.5));
    col += CORAL * dash * thin * rowOn * 0.07 * smoothstep(0.02, 0.2, depth);

    // horizon line: the trial balance
    col = mix(col, PAPER, (1.0 - smoothstep(0.0, 1.5 / uRes.y, depth)) * 0.4);
  }

  col += (hash(gl_FragCoord.xy + t) - 0.5) * 0.025; // film grain
  gl_FragColor = vec4(col, 1.0);
}
`;

function inkRGB(): [number, number, number] {
  const v = getComputedStyle(document.documentElement).getPropertyValue("--color-ink").trim() || "#162d27";
  const hex = v.startsWith("#") ? v.slice(1) : "162d27";
  const n = parseInt(hex.length === 3 ? hex.split("").map((h) => h + h).join("") : hex, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export default function HeroCanvas({ horizon = 0.56, sunX = 0.8 }: { horizon?: number; sunX?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || "shader");
      return s;
    };
    let prog: WebGLProgram;
    try {
      prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    } catch {
      return;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = (n: string) => gl.getUniformLocation(prog, n);
    const u = {
      res: U("uRes"), time: U("uTime"), mouse: U("uMouse"), mouseOn: U("uMouseOn"), rise: U("uRise"),
      scroll: U("uScroll"), ink: U("uInk"), sunX: U("uSunX"), horizon: U("uHorizon"),
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0.5, y: 0.7, tx: 0.5, ty: 0.7, on: 0, ton: 0 };
    let ink = inkRGB();
    let frame = 0;
    let visible = true;
    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = (e.clientY - r.top) / r.height;
      mouse.ton = mouse.ty >= 0 && mouse.ty <= 1 ? 1 : 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf && !reduced) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);

    function draw(now: number) {
      raf = 0;
      const t = reduced ? 8 : (now - start) / 1000;
      if (frame++ % 30 === 0) ink = inkRGB();
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      mouse.on += (mouse.ton - mouse.on) * 0.04;
      const rise = reduced ? 1 : 1 - Math.pow(1 - Math.min(t / 2.8, 1), 3);
      const rect = canvas!.getBoundingClientRect();
      const scroll = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      const narrow = canvas!.clientWidth < 700;
      gl!.uniform2f(u.res, canvas!.width, canvas!.height);
      gl!.uniform1f(u.time, t);
      gl!.uniform2f(u.mouse, mouse.x, mouse.y);
      gl!.uniform1f(u.mouseOn, mouse.on);
      gl!.uniform1f(u.rise, rise);
      gl!.uniform1f(u.scroll, scroll);
      gl!.uniform3f(u.ink, ink[0], ink[1], ink[2]);
      gl!.uniform1f(u.sunX, narrow ? 0.78 : sunX);
      gl!.uniform1f(u.horizon, narrow ? 0.62 : horizon);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      if (frame === 2) setLive(true);
      if (!reduced && visible && !document.hidden) raf = requestAnimationFrame(draw);
    }
    const onVis = () => {
      if (!document.hidden && visible && !raf && !reduced) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(draw);
    if (reduced) requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [horizon, sunX]);

  return (
    <>
      <div className={`absolute inset-0 transition-opacity duration-700 ${live ? "opacity-0" : "opacity-100"}`}>
        <HeroScene />
      </div>
      <canvas ref={ref} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${live ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
    </>
  );
}
