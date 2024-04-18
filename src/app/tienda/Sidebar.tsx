import AccordionComponent from "@/components/TiendaComponents/AccordionComponent";
import Image from "next/image";
import arrow from "../../../public/images/tiendaPage/accordionArrow.svg";
import divider from "../../../public/images/tiendaPage/divider.svg";

export function Sidebar() {
  return (
    <div className="w-[20%] h-max border border-r-primarioMuyOscuro border-r py-[25px] ">
      <AccordionComponent />
      <ul className="flex flex-col ">
        <li className="flex flex-col gap-[18px] pt-[18px]">
          <div className="flex justify-between">
            <p className="uppercase text-primarioMuyOscuro font-light text-[20px]/[38px]">
              Categoria
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="object-contain"
            />
          </div>
          <Image src={divider} alt="divider" className="w-full" height={2} />
        </li>

        <li className="flex flex-col gap-[18px] pt-[18px]">
          <div className="flex justify-between">
            <p className="uppercase text-primarioMuyOscuro font-light text-[20px]/[38px]">
              Categoria
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="object-contain"
            />
          </div>
          <Image src={divider} alt="divider" className="w-full" height={2} />
        </li>

        <li className="flex flex-col gap-[18px] pt-[18px]">
          <div className="flex justify-between">
            <p className="uppercase text-primarioMuyOscuro font-light text-[20px]/[38px]">
              Categoria
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="object-contain"
            />
          </div>
          <Image src={divider} alt="divider" className="w-full" height={2} />
        </li>

        <li className="flex flex-col gap-[18px] pt-[18px]">
          <div className="flex justify-between">
            <p className="uppercase text-primarioMuyOscuro font-light text-[20px]/[38px]">
              Categoria
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="object-contain"
            />
          </div>
          <Image src={divider} alt="divider" className="w-full" height={2} />
        </li>
      </ul>
    </div>
  );
}
