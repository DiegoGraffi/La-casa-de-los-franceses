import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import Image from "next/image";
import fondoMembresia from "../../../public/images/portadaMembresia.jpg";
import estrella from "../../../public/images/estrella.png";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";

export default function Membresia() {
  return (
    // <div className="flex lg:justify-between items-start lg:h-auto relative w-full container mx-auto">
    //   <div className="flex flex-1 flex-col justify-center items-center lg:items-start lg:flex-1 w-full lg:w-[909px] mx-auto lg:mx-0 relative min-w-[909px]">
    //     <Image
    //       src="/images/portadamembresia.jpg"
    //       alt="membresia"
    //       width={909}
    //       height={743}
    //       layout="responsive"
    //     />
    //     <div className="absolute top-1/2 -translate-y-1/2 left-1/2 lg:left-[calc(100%-77px)] z-20 h-[154px] w-[154px] transform -translate-x-1/2 lg:-translate-x-0">
    //       <Image
    //         src="/images/estrella.png"
    //         alt="estrella"
    //         layout="fill"
    //         objectFit="contain"
    //       />
    //     </div>
    //   </div>
    //   <div className="flex flex-1 flex-col justify-center items-center lg:items-start pl-[5%] lg:pl-[0] mt-5 lg:mt-0 h-[762.28px] ml-[200px]">
    //     <h1 className="font-vangeda font-normal text-4xl lg:text-7xl text-primarioMuyOscuro mb-10">
    //       Sé parte de la casa
    //     </h1>
    //     <p className="font-vangeda font-light text-xl lg:text-2xl text-primarioOscuro mb-10">
    //       ¡Sumate a nuestra membresía y recibí en tu casa,
    //       <br />
    //       mes a mes, una caja con los mejores vinos! Desde
    //       <br />
    //       tintos con toda la fuerza hasta blancos súper
    //       <br />
    //       delicados, cada botella es un viaje en sí misma.
    //     </p>
    //     <BotonNoFillXL
    //       text="Mirá nuestros planes"
    //       textColor="primarioOscuro"
    //       borderColor="primarioOscuro"
    //       link="/"
    //     />
    //   </div>
    // </div>

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
          <BotonNoFillXL
            text="Mira nuestros planes"
            link="#"
            textColor="primarioOscuro"
          />
        </div>
      </div>
    </div>
  );
}
