import React from "react";
import BotonLG from "../GeneralComponents/Botones/BotonLG";
import Image from "next/image";

type MembresiaCardProps = {
  image?: string;
  name: string;
  description: string;
  precio: number;
};

function MembresiaCard({
  image,
  name,
  description,
  precio,
}: MembresiaCardProps) {
  return (
    <div className="flex flex-col justify-center items-center hover:bg-gris6 rounded-tl-3xl rounded-br-3xl w-[384px]">
      <div className="mt-[21px] flex justify-center items-center relative w-[304px] h-[150px] rounded-tl-3xl rounded-br-3xl overflow-hidden mb-[21px]">
        {image && (
          <Image
            src={image}
            alt="imagen producto"
            width={304}
            height={150}
            className="object-cover w-full h-full rounded-tl-2xl rounded-br-2xl"
          />
        )}
      </div>
      <h3 className="text-primarioMuyOscuro font-bricolage font-light text-[32px] mb-[10px]">
        {name}
      </h3>
      <Image
        src="images/membresiaPage/separador.svg"
        alt="separador"
        width={316}
        height={0}
      />
      <div className="flex flex-col gap-5 justify-center items-center mb-[29px] mt-[10px]">
        <div className="mb-[15px]">
          <p className="font-bricolage font-light text-[16px] text-gris3 text-center leading-[24px]">
            {description}
          </p>
        </div>
        <p className="font-bricolage font-semibold text-[48px] text-gris2 text-center leading-[28px] mb-[25px]">
          ${precio}
          <span className="font-light text-[24px] text-gris3">/mes</span>
        </p>
        <BotonLG text="Comprar ahora" link="#" />
      </div>
    </div>
  );
}

export default MembresiaCard;
