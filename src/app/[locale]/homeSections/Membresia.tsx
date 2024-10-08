import Image from "next/image";
import fondoMembresia from "@/assets/images/portadaMembresia.jpg";
import estrella from "@/assets/images/estrella.png";
import membresiaIcon from "@/assets/images/inicio/verified-badge.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Membresia() {
  const t = useTranslations("Home");
  return (
    <div className="max-w-[1600px] mx-auto flex h-[550px] relative mt-[25px] md:mt-[50px] lg:mt-[110px] lg:px-[100px]">
      <div className="flex-1 h-full relative shrink-0 basis-1/2 hidden lg:flex">
        <Image
          src={fondoMembresia}
          alt="fondo mebresia"
          fill
          className="object-cover "
        />
      </div>
      <div className="absolute w-full h-full hidden lg:flex justify-center items-center bottom-0 top-0 left-0">
        <div className="w-[110px] h-[110px] relative">
          <Image src={estrella} alt="estrella" fill />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center basis-1 lg:basis-1/2 bg-secundarioPrincipal bg-opacity-85 lg:bg-transparent">
        <div className="w-full h-full px-[50px] lg:px-[100px] flex flex-col justify-center items-center lg:items-start gap-[30px] z-40">
          <h3 className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal text-center lg:text-start">
            {t("tituloMembresia")}
          </h3>
          <p className="text-terciarioPrincipal text-[20px]/[25px] font-light font-bricolage text-center lg:text-start">
            {t("descripcionMembresia")}
          </p>

          {/* <Link
            href={"/membresia"}
            className={`group border border-solid border-terciarioPrincipal px-[28px] py-[10px] rounded-full justify-center items-center flex w-max bg-transparent hover:bg-primarioOscuro hover:border-primarioMuyOscuro active:bg-primarioClaro disabled:border-primarioMuyClaro disabled:text-primarioClaro transition-all ease-out duration-300`}
          >
            <Image
              src={membresiaIcon}
              alt="icon"
              width={24}
              height={24}
              className="mr-[10px]"
            />

            <p
              className={`text-terciarioPrincipal group-hover:text-primarioClaro group-disabled:text-primarioClaro group-active:text-primarioOscuro group-focus:text-primarioOscuro text-[18px] font-semibold leading-[24px]`}
            >
              {t("botonMembresia")}
            </p>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
