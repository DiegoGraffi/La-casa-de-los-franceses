import Image, { StaticImageData } from "next/image";
import BotonNoFillLG from "./GeneralComponents/BotonesNoFill/BotonNoFillLG";
import cartIcon from "../../public/images/cartIconButton.svg";
import vino from "../../public/images/vinoImagenProducto.png";
import BotonNoFillSM from "./GeneralComponents/BotonesNoFill/BotonNoFillSM";

type ProductCardProps = {
  image?: string;
  title: string;
  price: string;
};

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="p-[15px] lg:p-[30px] flex flex-col items-center hover:bg-gris6 rounded-tl-[5px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[5px] w-[157px] lg:w-full transition-all ease-out duration-300">
      <div className="p-2 flex justify-center items-center relative w-[150px] aspect-square border">
        <Image
          src={image!}
          alt="imagen producto"
          fill
          className="object-contain p-2"
        />
      </div>
      <div className="flex flex-col lg:gap-[20px] justify-center items-center lg:mt-[20px] lg:mb-[12px] h-full">
        <div className="mb-2 lg:mb-0">
          <p className="uppercase font-regular lg:font-light text-[14px]/[20px] lg:text-[20px] text-gris2 leading-[24px] text-center line-clamp-2">
            {title}
          </p>
        </div>
        <p className="font-bricolage font-semibold text-[24px]/[28px] lg:text-[28px]/[34px] text-center text-gris2">
          ${price}
        </p>
      </div>
      <div className="hidden lg:block">
        <BotonNoFillLG text="Agregar al carrito" link="#" icon={cartIcon} />
      </div>
      <div className="block lg:hidden pt-[10px] lg:p-0">
        <BotonNoFillSM text="Agregar al carrito" link="#" icon={cartIcon} />
      </div>
    </div>
  );
}
