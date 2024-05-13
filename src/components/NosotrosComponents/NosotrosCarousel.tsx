import Image from "next/image";
import item1 from "../../../public/images/nosotros/item1.png";
import item2 from "../../../public/images/nosotros/item2.png";
import item3 from "../../../public/images/nosotros/item3.png";

export default function NosotrosCarousel() {
  return (
    <div className="w-full max-w-[1600px] mx-auto flex overflow-hidden h-[430px] rounded-bl-[30px] rounded-tr-[30px]">
      <div className="h-full aspect-[575/430] relative overflow-hidden border">
        <Image
          src={item1}
          alt="mapa san juan"
          fill
          className="object-cover h-full"
        />
      </div>

      <div className="bg-[#E1E8C6] flex flex-col justify-center items-start flex-1 h-auto p-[40px]">
        <div className="h-[80%] top-0 flex justify-center items-center">
          <p className="font-bricolage text-[18px]/[23px] font-light text-secundarioOscuro">
            Nuestra historia comienza en San Juan, Argentina, donde un grupo de
            amigos se unió en torno al amor por el vino, el asado, las risas y
            la camaradería. Inspirados por nuestra amistad y la pasión por
            compartir buenos momentos, decidimos llevar nuestra experiencia
            única a tierras francesas.
          </p>
        </div>
        <div className="h-[20%] flex justify-center items-center w-full">
          <p>controles</p>
        </div>
      </div>
    </div>
  );
}
