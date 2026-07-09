export default function Wordmark({ dark = false, big = false }: { dark?: boolean; big?: boolean }) {
  return (
    <span className={`inline-block whitespace-nowrap ${big ? "text-[44px]" : "text-xl"} lowercase tracking-tight leading-none`}>
      <span className={`font-bold ${dark ? "text-[#f4f2f0]" : "text-[#1e2126]"}`}>bright</span><span className={`font-normal ${dark ? "text-[#ff9a82]" : "text-[#e85d47]"}`}>mere</span>
    </span>
  );
}
