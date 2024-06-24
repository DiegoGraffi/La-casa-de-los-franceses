import React from "react";
import BotonLG from "../GeneralComponents/Botones/BotonLG";
import Image from "next/image";

type MembresiaCardProps = {
  image?: string;
  name: string;
  description: string;
  precio: string;
};

function MembresiaCard({
  image,
  name,
  description,
  precio,
}: MembresiaCardProps) {
  return (
    <div className="flex flex-col items-center hover:bg-gris6 rounded-tl-3xl rounded-br-3xl flex-1 p-[15px] lg:p-[25px] w-full max-w-[350px] h-auto">
      <div className="flex justify-center items-center relative w-full h-[110px] lg:h-[150px] rounded-tl-[10px] rounded-br-[10px] lg:rounded-tl-[25px] lg:rounded-br-[25px] overflow-hidden mb-[21px]">
        {image && (
          <Image
            src={image}
            alt="imagen producto"
            fill
            className="object-cover w-full h-full rounded-tl-2xl rounded-br-2xl"
          />
        )}
      </div>
      <h3 className="text-primarioMuyOscuro font-bricolage font-light text-[32px] mb-[10px] text-center">
        {name}
      </h3>
      <Image
        src="images/membresiaPage/separador.svg"
        alt="separador"
        width={316}
        height={0}
      />
      <div className="flex flex-col justify-between items-center mt-[10px] h-max grow">
        <div>
          <p className="font-bricolage font-light text-[16px]/[24px] text-gris3 text-center">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-[25px] mt-[20px]">
          <p className="font-bricolage font-semibold text-[48px] text-gris2 text-center leading-[28px]">
            ${precio}
            <span className="font-light text-[24px] text-gris3">/mes</span>
          </p>
          <BotonLG text="Comprar ahora" link="#" />
        </div>
      </div>
    </div>
  );
}

export default MembresiaCard;
