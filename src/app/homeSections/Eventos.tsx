import Image from "next/image";
import eventosImg from "../../../public/images/eventos.png";
import degustacionImg from "../../../public/images/degustacion.png";
import arrowEventos from "../../../public/images/arrowEventos.svg";
import arrowDegustaciones from "../../../public/images/arrowDegustaciones.svg";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import ProductCard from "@/components/ProductCard";

export default function Eventos() {
  return (
    <div className="min-h-screen mx-auto flex justify-center items-center gap-[68px]">
      <div className="group relative overflow-hidden h-[752px] aspect-square p-[74px]">
        <Image
          src={eventosImg}
          alt="imagen eventos"
          fill
          className="object-cover -z-20"
        />
        <div className="w-full h-full flex flex-col justify-end z-10">
          <p className="text-secundarioClaro text-[150px] font-vangeda leading-[80px] mb-[40px]">
            Even
          </p>
          <p className="text-secundarioClaro text-[150px] font-vangeda leading-[80px]">
            tos
          </p>
        </div>
        <div className="border h-full w-full absolute top-0 left-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all z-[150]">
          <p className="font-bricolage text-[48px] leading-[58px] text-secundarioClaro text-center z-[100]">
            Ver
            <br />
            Eventos
          </p>
        </div>
        <div className="w-full h-full bg-terciarioClaro absolute top-[100%] left-0 group-hover:-top-[0] ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all"></div>
      </div>

      <div className="group relative overflow-hidden h-[752px] aspect-square p-[74px]">
        <Image
          src={degustacionImg}
          alt="imagen eventos"
          fill
          className="object-cover -z-20"
        />
        <div className="w-full h-full flex flex-col justify-end z-10">
          <p className="text-terciarioClaro text-[150px] font-vangeda leading-[80px] mb-[40px]">
            Degusta
          </p>
          <p className="text-terciarioClaro text-[150px] font-vangeda leading-[80px]">
            ción
          </p>
        </div>
        <div className="border h-full w-full absolute top-0 left-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all z-[150]">
          <p className="font-bricolage text-[48px] leading-[58px] text-terciarioClaro text-center z-[100]">
            ¿Cuándo hay
            <br />
            Degustaciones?
          </p>
        </div>
        <div className="w-full h-full bg-secundarioClaro absolute top-[100%] left-0 group-hover:-top-[0] ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all"></div>
      </div>
    </div>
  );
}
