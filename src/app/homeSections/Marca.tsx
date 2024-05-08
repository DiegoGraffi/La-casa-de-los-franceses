import SectionTitle from "@/components/SectionTitle";
import logo01 from "../../../public/images/marcas/CatenaZapata.svg";
import logo02 from "../../../public/images/marcas/Salentein.svg";
import logo03 from "../../../public/images/marcas/Zuccardi.svg";
import logo04 from "../../../public/images/marcas/Trapiche.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const slides = [
  { image: logo01 },
  { image: logo02 },
  { image: logo03 },
  { image: logo04 },
  { image: logo03 },
];

export default function Marca() {
  return (
    <div className="max-w-[1920px] mx-auto flex justify-center items-center flex-col pb-[160px]">
      <SectionTitle title="nuestra familia" />
      <div className="h-[300px]">
        <Marquee gradient pauseOnHover={false} className="overflow-hidden grid">
          {slides.map((image, index) => {
            return (
              <div
                key={index}
                className="flex pr-[100px] flex-col justify-center items-center h-[350px] mx-5 relative"
              >
                <Image
                  src={image.image}
                  className="object-contain w-[200px] hover:scale-110 transition-all ease-in-out duration-200"
                  alt="logo"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
