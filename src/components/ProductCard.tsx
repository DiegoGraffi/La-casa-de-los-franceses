import Image from "next/image";
import BotonNoFillLG from "./GeneralComponents/BotonesNoFill/BotonNoFillLG";
import cartIcon from "../../public/images/cartIconButton.svg";
import vino from "../../public/images/vinoImagenProducto.png";

export default function ProductCard() {
  return (
    <div className="p-[30px] flex flex-col justify-center items-center hover:bg-gris6 rounded-tl-[5px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[5px] w-full  transition-all ease-out duration-300">
      <div className="p-2 flex justify-center items-center relative">
        <Image
          src={vino}
          alt="imagen producto"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-[20px] justify-center items-center mt-[20px] mb-[12px]">
        <p className="uppercase font-light text-[20px] text-gris2 leading-[24px] text-center">
          Achaval ferrer cabernet franc
        </p>
        <p className="font-bricolage font-semibold text-[28px] leading-[34px] text-center text-gris2">
          $18.500
        </p>
      </div>
      <BotonNoFillLG text="Agregar al carrito" link="#" icon={cartIcon} />
    </div>
  );
}
