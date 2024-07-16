import Image from "next/image";
import heroImg from "../../../../public/images/local/heroImg.png";
import estrella from "../../../../public/images/local/estrella.svg";
import menu from "../../../../public/images/local/menu.png";
import ubicacion from "../../../../public/images/local/ubicacion.png";
import wines from "../../../../public/images/local/wines.png";
import "react-indiana-drag-scroll/dist/style.css";
import EventsSection from "@/components/LocalComponents/EventsSection";
import GallerySection from "@/components/LocalComponents/GallerySection";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Local() {
  const t = useTranslations("Local");
  return (
    <div className="flex flex-col items-center">
      <section className="w-full h-[70vh] lg:h-[750px] relative flex justify-center">
        <Image
          src={estrella}
          alt="estrella"
          className="absolute bottom-0 z-[100] translate-y-[50%] lg:left-[80%]"
        />
        <div className="w-full h-full bg-[#492415] absolute z-10 opacity-70"></div>
        <Image src={heroImg} alt="Hero Img" fill className="object-cover" />
        <div className="w-full h-full absolute flex items-end z-20 px-[100px] py-[50px] max-w-[1600px] mx-auto">
          <p className="text-[#F3EDC8] font-vangeda text-[40px]/[39px] mx-auto md:mx-0 md:text-[100px]/[95px] text-center md:text-start">
            {t("tituloLocal1")} <br />
            {t("tituloLocal2")}
          </p>
        </div>
      </section>

      <section className="flex my-[80px] w-[100%] px-[15px] justify-center">
        <div className="group relative flex justify-center items-center w-[50%] lg:w-[600px] h-[150px] lg:h-[250px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden ">
          <div className="bg-[#7D0A0A] w-full h-full absolute opacity-70 z-10  group-hover:opacity-100 transition-all ease-in-out duration-200"></div>
          <Image src={menu} alt="Menu Image" fill className="object-cover" />
          <p className="font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#D3DDA8] text-center absolute z-20 group-hover:hidden">
            {t("cardIzq")}
          </p>
          <p className="hidden font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#D3DDA8] text-center absolute z-20 group-hover:flex">
            {t("cardIzq2")}
          </p>
        </div>

        <div className="group relative flex justify-center items-center w-[50%] lg:w-[600px] h-[150px] lg:h-[250px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden ">
          <div className="bg-[#D3DDA8] w-full h-full absolute opacity-70 z-10 group-hover:opacity-100 transition-all ease-in-out duration-200"></div>
          <Image
            src={ubicacion}
            alt="Ubicación Image"
            fill
            className="object-cover"
          />
          <p className="font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#7D0A0A] text-center absolute z-20 group-hover:hidden">
            {t("cardDer")}
          </p>
          <p className="hidden font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#7D0A0A] text-center absolute z-20 group-hover:flex">
            {t("cardDer2")}
          </p>
        </div>
      </section>

      <section className="bg-terciarioClaro flex flex-col justify-center items-center py-[40px] w-full overflow-hidden">
        <div className="max-w-[1600px] px-[100px] flex flex-col items-center gap-[50px] lg:container">
          <h4 className="uppercase font-vangeda text-[#D3DDA8] text-[40px]/[39px] lg:text-[55px]/[62px]">
            {t("tituloCalendario")}
          </h4>

          <EventsSection />
        </div>
      </section>

      <section className="w-full p-[45px] lg:py-[50px] lg:px-[200px] flex justify-center items-center bg-terciarioPrincipal">
        <p className="text-[14px]/[20px] lg:text-[20px]/[25px] font-bricolage font-light text-[#D3DDA8] max-w-[950px]">
          {t("textoCalendario")}
        </p>
      </section>

      <GallerySection />

      <Link href="/tienda" className="w-full pb-[60px] px-[15px] lg:px-[100px]">
        <div className="group h-[420px] max-w-[1600px] w-full xl:px-[100px] rounded-tr-[10px] lg:rounded-tr-[45px] rounded-bl-[10px] lg:rounded-bl-[45px] relative mx-auto overflow-hidden">
          <div className="w-full h-full p-[50px] lg:px-[100] flex flex-col justify-end lg:justify-center absolute z-[100] group-hover:hidden">
            <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal hidden lg:flex">
              {t("textoBanner")} <br /> {t("textoBanner2")}
            </p>
            <p className="font-bricolage text-[20px]/[25px] text-terciarioPrincipal hidden lg:flex">
              {t("textoBanner3")} <br /> {t("textoBanner4")}
            </p>

            <p className="text-[40px]/[39px] text-terciarioPrincipal lg:hidden font-vangeda text-center md:text-start">
              Mirá nuestra tienda online
            </p>
          </div>
          <div className="w-full h-full hidden justify-center items-center absolute z-[100] xl:flex left-0 transition-all ease-in-out duration-200">
            <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal hidden group-hover:flex">
              {t("textoBanner5")}
            </p>
          </div>
          <div className="group-hover:bg-[#96AC60] absolute w-full h-full bg-gradient-to-t lg:bg-gradient-to-r from-[#96AC60] from-[27%] md:from-[57%] xl:from-[27%] to-transparent z-30 left-0 transition-all ease-in-out duration-200"></div>
          <Image src={wines} alt="wines" fill className="object-cover" />
        </div>
      </Link>
    </div>
  );
}
