import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import Image from "next/image";
import verifiedBadge from "../../../public/images/verifiedbadge.png"

export default function Membresia() {
  return (
    <div className="flex flex-wrap lg:justify-between items-start lg:h-auto relative w-full">
      <div className="flex flex-col justify-center items-center lg:items-start lg:flex-1 w-full lg:w-[909px] mx-auto lg:mx-0 relative min-w-[909px]">
        <Image
          src="/images/portadamembresia.jpg"
          alt="membresia"
          width={909}
          height={743}
          layout="responsive"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 lg:left-[calc(100%-77px)] z-20 h-[154px] w-[154px] transform -translate-x-1/2 lg:-translate-x-0">
          <Image src='/images/estrella.png' alt="estrella" layout="fill" objectFit="contain"/>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start pl-[5%] lg:pl-[0] mt-5 lg:mt-0 h-[762.28px] ml-[200px]">
        <h1 className="font-vangeda font-normal text-4xl lg:text-7xl text-primarioMuyOscuro mb-10">
          Sé parte de la casa
        </h1>
        <p className="font-vangeda font-light text-xl lg:text-2xl text-primarioOscuro mb-10">
          ¡Sumate a nuestra membresía y recibí en tu casa,
          <br/>
          mes a mes, una caja con los mejores vinos! Desde
          <br/>
          tintos con toda la fuerza hasta blancos súper
          <br/>
          delicados, cada botella es un viaje en sí misma.
        </p>
        <BotonXL text="Mirá nuestros planes" bgColor="bg-black" textColor="text-white" icon={verifiedBadge} link="/"/>
      </div>
    </div>
  );
}