export default function Wordmark({ dark = false, big = false }: { dark?: boolean; big?: boolean }) {
  return (
    <span className={`${big ? "text-[44px]" : "text-xl"} lowercase tracking-tight leading-none`}>
      <span className={`font-bold ${dark ? "text-offwhite" : "text-oxblood"}`}>bright</span>
      <span className={`font-normal text-pink ${big ? "[text-shadow:0_0_30px_rgba(255,61,126,0.4)]" : ""}`}>mere</span>
    </span>
  );
}
