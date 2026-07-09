export default function Wordmark({ dark = false, big = false }: { dark?: boolean; big?: boolean }) {
  return (
    <span className={`${big ? "text-[44px]" : "text-xl"} lowercase tracking-tight leading-none`}>
      <span className={`font-bold ${dark ? "text-offwhite" : "text-green"}`}>bright</span>
      <span className={`font-normal ${dark ? "text-sage" : "text-[#4e8c6f]"}`}>mere</span>
    </span>
  );
}
