import Image from "next/image";
import fondoMembresia from "../../../public/images/portadaMembresia.jpg";
import estrella from "../../../public/images/estrella.png";
import BotonNoFillXXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXXL";

export default function Membresia() {
  return (
        <div className="max-w-[1920px] mx-auto flex h-[743px] relative">
      <div className="flex-1 h-[743px] relative shrink-0">
        <Image
          src={fondoMembresia}
          alt="fondo mebresia"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute w-full h-full flex justify-center items-center left-0">
        <div className="w-[154px] h-[154px] relative">
          <Image src={estrella} alt="estrella" fill />
        </div>
      </div>
      <div className="flex flex-col flex-1  justify-center shrink-0">
        <div className="w-full h-full p-[144px] flex flex-col justify-center items-start gap-[43px]">
          <h3 className="font-vangeda text-[75px] leading-[80px] text-primarioMuyOscuro">
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
          />
        </div>
      </div>
    </div>
  );
}
