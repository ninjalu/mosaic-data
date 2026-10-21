import Image from "next/image";
import SunStripes from "./SunStripes";

// A photo with the brand corner: clipped bottom-left, the sun-in-water-lines rising out of it.
export default function BrandPhoto({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative group chamfer-bl overflow-hidden ${className}`}>
      <Image src={src} alt={alt} width={640} height={640} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      <SunStripes className="absolute left-[7%] bottom-0 w-[38%] h-auto translate-y-[2px]" />
    </div>
  );
}
