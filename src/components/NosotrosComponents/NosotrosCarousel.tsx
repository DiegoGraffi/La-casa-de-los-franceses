import Image from "next/image";
import item1 from "../../../public/images/nosotros/item1.png";
import item2 from "../../../public/images/nosotros/item2.jpg";
import item3 from "../../../public/images/nosotros/item3.jpg";
import { useState } from "react";
import deslizarIzq from "../../../public/images/nosotros/deslizarIzq.svg";
import deslizarDer from "../../../public/images/nosotros/deslizarDer.svg";

const items = [
  {
    foto: item1,
    text: "Nuestra historia comienza en San Juan, Argentina, donde un grupo de amigos se unió en torno al amor por el vino, el asado, las risas y la camaradería. Inspirados por nuestra amistad y la pasión por compartir buenos momentos, decidimos llevar nuestra experiencia única a tierras francesas.",
    textColor: "#3A4A09",
    bgColor: "#E1E8C6",
  },
  {
    foto: item2,
    text: "En nuestros espacios celebramos la calidez y cercanía que nos caracteriza como amigos. Cada rincón está impregnado con el espíritu de nuestra amistad, creando un ambiente acogedor donde todos se sienten como en casa. Nuestra selección de vinos argentinos y productos franceses refleja la diversidad de nuestras experiencias y la riqueza de nuestras culturas combinadas.",
    textColor: "#F3EDC8",
    bgColor: "#BA7B61",
  },
  {
    foto: item3,
    text: "Te invitamos a unirte a nosotros en este espacio de amistad y disfrutar de la alegría de compartir con amigos un buen vino.¡Bienvenido a nuestro hogar lejos de casa, donde cada encuentro es una celebración de la vida y la amistad!",
    textColor: "#F3EDC8",
    bgColor: "#3A4A09",
  },
];

export default function NosotrosCarousel() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handlePrev = () => {
    setSelectedItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  const handleNext = () => {
    setSelectedItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto flex overflow-hidden h-[430px] rounded-bl-[30px] rounded-tr-[30px]">
      <div className="h-full aspect-[575/430] relative overflow-hidden border">
        <Image
          src={items[selectedItem].foto}
          alt="mapa san juan"
          fill
          className="object-cover h-full"
        />
      </div>

      <div className="bg-[#E1E8C6] flex flex-col justify-center items-start flex-1 h-auto p-[40px]">
        <div className="h-[80%] top-0 flex justify-center items-center">
          <p className="font-bricolage text-[18px]/[23px] font-light text-secundarioOscuro">
            {items[selectedItem].text}
          </p>
        </div>
        <div className="h-[20%] flex justify-center items-center w-full">
          <div className="flex items-center gap-[50px]">
            <Image src={deslizarIzq} alt="deslizarIzq" onClick={handlePrev} />
            <div className="flex items-center">
              <div className="w-[10px] h-[10px] rounded-full bg-transparent border-black border"></div>
              <hr className="w-[100px] border-black" />
              <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
              <hr className="w-[100px] border-black" />
              <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            </div>
            <Image src={deslizarDer} alt="deslizarDer" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
