import Image from "next/image";
import { useTranslations } from "next-intl";
import estrella from "@/assets/images/estrella.png";
import banner from "@/assets/images/portada.jpg";

export default function Hero() {
  const t = useTranslations("Home");
  return (
    <div className="w-[100%] h-[70vh] md:h-[750px] relative">
      <div className="max-w-[1600px] px-[40px] mx-auto flex justify-center">
        <h1 className="absolute mt-[200px] font-vangeda text-[40px]/[39px] md:text-[55px]/[62px] text-primarioClaro text-center bottom-[75px] px-[20px] z-[30]">
          {t("heroHome")}
        </h1>
      </div>
      <div className="h-full">
        <div className="w-full h-full bg-[#492415] opacity-70"></div>
        <div className="w-full h-full flex justify-center">
          <div className="h-[72px] md:h-[112px] aspect-square bottom-0 absolute translate-y-[50%] ">
            <Image
              src={estrella}
              alt="estrella"
              fill
              loading="eager"
              decoding="async"
              className="object-contain "
            />
          </div>
        </div>
        <Image
          src={banner}
          alt="imagen hero"
          quality={100}
          loading="eager"
          decoding="async"
          className="object-cover -z-10 object-top"
          fill
        />
      </div>
    </div>
  );
}
