import SectionTitle from "@/components/SectionTitle";
import logo01 from "../../../public/images/marcas/CatenaZapata.svg";
import logo02 from "../../../public/images/marcas/Salentein.svg";
import logo03 from "../../../public/images/marcas/Zuccardi.svg";
import logo04 from "../../../public/images/marcas/Trapiche.svg";
import Image from "next/image";

export default function Marca() {
  return (
    <div className="max-w-[1920px] mx-auto flex justify-center items-center flex-col py-[160px]">
      <SectionTitle title="nuestra familia" />
      <div className="flex flex-wrap justify-around gap-[195px] mt-[100px] ">
        <Image
          src={logo01}
          alt="marca"
          className="object-contain"
          width={270}
        />
        <Image
          src={logo02}
          alt="marca"
          className="object-contain"
          width={270}
        />
        <Image
          src={logo03}
          alt="marca"
          className="object-contain"
          width={270}
        />
        <Image
          src={logo04}
          alt="marca"
          className="object-contain"
          width={270}
        />
      </div>
    </div>
  );
}
