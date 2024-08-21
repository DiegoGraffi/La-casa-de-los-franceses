"use client";

import Image from "next/image";
import eventosImg from "@/assets/images/inicio/eventos.jpg";
import degustacionImg from "@/assets/images/inicio/degustacion.jpg";
import Lottie from "lottie-react";
import FlechaIzq from "@/assets/animations/inicio/FlechaIzq.json";
import FlechaRed from "@/assets/animations/inicio/FlechaRed.json";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Eventos() {
  const t = useTranslations("Home");
  return (
    <div className="max-w-[1600px] w-full md:px-[15px] lg:px-[50px] xl:px-[100px] flex flex-col md:flex-row justify-center items-center gap-0 md:gap-[15px] lg:gap-[68px] mt-[25px] md:mt-[50px] lg:mt-[110px]">
      <Link
        href={"/local"}
        className="group relative overflow-hidden h-[250px] md:h-[350px] lg:h-[600px] w-full lg:w-auto lg:aspect-[750/610] p-[40px]"
      >
        <Image
          src={eventosImg}
          alt="imagen eventos"
          fill
          className="object-cover -z-20"
        />
        <div className="w-full h-full flex items-end">
          <p className="text-secundarioClaro text-[40px]/[39px] lg:text-[64px]/[80px] font-vangeda z-[180]">
            {t("eventosTitle")}
          </p>
          <div className="left-0 bottom-0 bg-gradient-to-t from-black to-transparent to-[67%] w-full h-full z-50 absolute"></div>
        </div>
        <div className="hidden h-full w-full absolute top-0 left-0 lg:flex flex-col gap-[25px] justify-center items-center opacity-0 group-hover:opacity-100 ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all z-[300]">
          <p className="font-bricolage text-[48px]/[58px] text-secundarioClaro text-center z-[100]">
            {t("eventosTitle2")}
            <br />
            {t("eventosTitle3")}
          </p>
          <div className="w-[104px] origin-center rotate-[270deg]">
            <Lottie animationData={FlechaIzq} />
          </div>
        </div>
        <div className="hidden z-[200] lg:flex w-full h-full bg-terciarioClaro absolute top-[100%] left-0 group-hover:-top-[0] ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all"></div>
      </Link>

      <Link
        href={"#"}
        className="group relative overflow-hidden h-[250px] md:h-[350px] lg:h-[600px] w-full lg:w-auto lg:aspect-[750/610] p-[40px]"
      >
        <Image
          src={degustacionImg}
          alt="imagen eventos"
          fill
          className="object-cover -z-20"
        />

        <div className="w-full h-full flex items-end ">
          <p className="text-terciarioClaro text-[40px]/[39px] lg:text-[64px]/[80px] font-vangeda z-[180]">
            {t("opinionTitle1")}
          </p>
          <div className="left-0 bottom-0 bg-gradient-to-t from-black to-transparent to-[67%] w-full h-full z-50 absolute"></div>
        </div>

        <div className="w-full h-full z-[200]">
          <div className="hidden h-full w-full absolute top-0 left-0 lg:flex flex-col gap-[25px] justify-center items-center opacity-0 group-hover:opacity-100 ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all z-[300]">
            <p className="font-bricolage text-[48px]/[58px] text-terciarioClaro text-center z-[100]">
              {t("opinionTitle2")}
            </p>
            <div className="w-[104px] origin-center rotate-[270deg]">
              <Lottie animationData={FlechaRed} />
            </div>
          </div>

          <div className="hidden z-[200] lg:flex w-full h-full bg-secundarioClaro absolute top-[100%] left-0 group-hover:-top-[0] ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all"></div>
        </div>
      </Link>
    </div>
  );
}
