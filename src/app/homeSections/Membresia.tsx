import Image from "next/image";
import fondoMembresia from "../../../public/images/portadaMembresia.jpg";
import estrella from "../../../public/images/estrella.png";
import BotonNoFillXXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXXL";
import membresiaIcon from "../../../public/images/membresiaIconButton.svg";

export default function Membresia() {
  return (
    <div className="max-w-[1920px] mx-auto grid h-[1200px] lg:h-[743px] relative  grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
      <div className="flex-1 h-full relative shrink-0 basis-1">
        <Image
          src={fondoMembresia}
          alt="fondo mebresia"
          fill
          className="object-cover rounded-r-[50px] maxScreen:rounded-[50px]"
        />
      </div>
      <div className="absolute w-full h-full flex justify-center items-center bottom-0 top-0 left-0">
        <div className="w-[154px] h-[154px] relative">
          <Image src={estrella} alt="estrella" fill />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <div className="w-full h-full px-[50px] lg:px-[100px] flex flex-col justify-center items-start gap-[43px]">
          <h3 className="font-vangeda text-[75px] leading-[80px] text-primarioMuyOscuro ">
            Se parte de la casa
          </h3>
          <p className="text-primarioOscuro text-[28px] leading-[35px] font-light font-bricolage ">
            ¡Sumate a nuestra membresía y recibí en tu casa, mes a mes, una caja
            con los mejores vinos! Desde tintos con toda la fuerza hasta blancos
            súper delicados, cada botella es un viaje en sí misma.
          </p>
          <BotonNoFillXXL
            text="Mira nuestros planes"
            link="#"
            icon={membresiaIcon}
          />
        </div>
      </div>
    </div>
  );
}
