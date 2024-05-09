import Image, { StaticImageData } from "next/image";
import BotonNoFillLG from "./GeneralComponents/BotonesNoFill/BotonNoFillLG";
import cartIcon from "../../public/images/cartIconButton.svg";
import vino from "../../public/images/vinoImagenProducto.png";

type ProductCardProps = {
  image?: string;
  title: string;
  price: string;
};

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="p-[30px] flex flex-col justify-center items-center hover:bg-gris6 rounded-tl-[5px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[5px] w-full transition-all ease-out duration-300">
      <div className="p-2 flex justify-center items-center relative  w-[150px] aspect-square border">
        <Image
          src={image!}
          alt="imagen producto"
          fill
          className="object-contain p-2 h-[150px] w-[150px]"
        />
      </div>
      <div className="flex flex-col gap-[20px] justify-center items-center mt-[20px] mb-[12px] h-full">
        <div className="flex-1">
          <p className="uppercase font-light text-[20px] text-gris2 leading-[24px] text-center line-clamp-2">
            {title}
          </p>
        </div>
        <p className="font-bricolage font-semibold text-[28px] leading-[34px] text-center text-gris2">
          ${price}
        </p>
      </div>

      <BotonNoFillLG text="Agregar al carrito" link="#" icon={cartIcon} />
    </div>
  );
}
