"use client";

import { usePathname } from "next/navigation";

type Props = {
  description: string | undefined;
  translatedDescription: string | undefined;
};

export default function ProductDetailDescription({
  description,
  translatedDescription,
}: Props) {
  const locale = usePathname()?.split("/")[1];
  const isSpanish = locale === "es";

  return (
    <p className="font-bricolage text-balance text-[14px]/[22px] lg:text-[20px]/[25px] font-light text-gris1 max-w-[650px] mx-auto text-center lg:text-start w-full">
      {isSpanish ? description : translatedDescription}
    </p>
  );
}
