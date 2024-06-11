import Image, { StaticImageData } from "next/image";
import BotonNoFillLG from "./GeneralComponents/BotonesNoFill/BotonNoFillLG";
import cartIcon from "../../public/images/cartIconButton.svg";
import vino from "../../public/images/vinoImagenProducto.png";
import BotonNoFillSM from "./GeneralComponents/BotonesNoFill/BotonNoFillSM";
import BotonNoFillMD from "./GeneralComponents/BotonesNoFill/BotonNoFillMD";
import BotonNoFillXS from "./GeneralComponents/BotonesNoFill/BotonNoFillXS";

type ProductCardProps = {
  image?: string;
  title: string;
  price: string;
};

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="flex flex-col p-[15px] justify-center items-center rounded-tl-[5px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[5px] bg-white hover:bg-gris6 transition-all ease-in-out duration-200 h-full gap-[20px]">
      <div className="flex-1 relative w-full aspect-square basis-1/2 max-w-[190px] max-h-[190px] rounded-[5px] overflow-hidden">
        <Image
          src={image!}
          alt="imagen producto"
          fill
          className="object-contain p-1"
        />
      </div>
      <div className="flex-1 flex flex-col basis-1/2 h-full px-[20px] justify-between items-center w-full gap-[20px]">
        <p className="uppercase lg:font-light text-[14px]/[20px] lg:text-[20px]/[24px] text-gris2 text-center line-clamp-2">
          {title}
        </p>
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <p className="text-[24px]/[28px] lg:text-[28px]/[34px] font-bricolage font-semibold text-gris2 text-center">
            ${price}
          </p>
          <div className="hidden lg:block">
             <BotonNoFillMD link="#" text="Agregar al carrito" icon={cartIcon} />
          </div>
          <div className="block lg:hidden">
            <BotonNoFillXS link="#" text="Agregar al carrito" icon={cartIcon} />
          </div>
         
        </div>
      </div>
    </div>
  );
}
