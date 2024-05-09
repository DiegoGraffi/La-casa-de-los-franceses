import Image from "next/image";
import fondoMembresia from "../../../public/images/portadaMembresia.jpg";
import estrella from "../../../public/images/estrella.png";
import BotonNoFillXXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXXL";
import membresiaIcon from "../../../public/images/membresiaIconButton.svg";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";

export default function Membresia() {
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
        <div className="w-[150px] h-[150px] relative">
          <Image src={estrella} alt="estrella" fill />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center basis-1 lg:basis-1/2 bg-secundarioPrincipal bg-opacity-85 lg:bg-transparent">
        <div className="w-full h-full px-[50px] lg:px-[100px] flex flex-col justify-center items-center lg:items-start gap-[30px]">
          <h3 className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal text-center lg:text-start">
            Unite a la membresia
          </h3>
          <p className="text-terciarioPrincipal text-[20px]/[25px] font-light font-bricolage text-center lg:text-start">
            ¡Sumate a nuestra membresía y recibí en tu casa, mes a mes, una caja
            con los mejores vinos! Desde tintos con toda la fuerza hasta blancos
            súper delicados, cada botella es un viaje en sí misma. ¡Animate a
            vivir esta experiencia única y dejá que el vino te sorprenda!
          </p>
          <BotonNoFillXL
            text="Mira nuestros planes"
            link="#"
            icon={membresiaIcon}
          />
        </div>
      </div>
    </div>
  );
}
