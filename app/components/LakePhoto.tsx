import Image from "next/image";

// The hero photo (Lake Jasna, Slovenia; Adam Vradenburg, Unsplash Licence), reused as cropped
// imagery: the peaks, the waterline, or the stones visible beneath the surface. `src` swaps in
// the story photo (cracked ice on Lake Baikal; Sergey Pesterev, Unsplash Licence): solid on top,
// breaking underneath.
const CROPS = {
  peaks: "object-[50%_30%]",
  shore: "object-[50%_55%]",
  below: "object-[50%_92%]",
} as const;

export default function LakePhoto({
  src = "/hero-lake.jpg",
  crop = "shore",
  className = "",
  priority = false,
}: {
  src?: string;
  crop?: keyof typeof CROPS;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      fill
      priority={priority}
      sizes="100vw"
      className={`object-cover ${CROPS[crop]} ${className}`}
    />
  );
}
