import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Home");
  return (
    <div className="w-[100%] h-[70vh] md:h-[750px] relative">
      <div className="z-10 max-w-[1600px] px-[40px] mx-auto flex justify-center">
        <h1 className="absolute mt-[200px] font-vangeda text-[40px]/[39px] md:text-[55px]/[62px] text-primarioClaro text-center bottom-[75px] px-[20px]">
          {t("heroHome")}
        </h1>
      </div>
      <div className="h-full">
        <div className="w-full h-full flex justify-center">
          <div className="h-[72px] md:h-[112px] aspect-square bottom-0 absolute translate-y-[50%] ">

          <Image
            src="/images/estrella.png"
            alt="logo"
            fill
            loading="eager"
            decoding="async"
            className="object-contain"
            />
            </div>
        </div>
        <Image
          src="/images/portada.jpg"
          alt="imagen hero"
          quality={100}
          loading="eager"
          decoding="async"
          className="object-cover -z-10"
          fill
        />
      </div>
    </div>
  );
}
