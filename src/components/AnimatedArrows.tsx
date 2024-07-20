import Image from "next/image";
import arrow from "@/assets/images/arrowEventos.svg";

export default function AnimatedArrows() {
  return (
    <div className="flex flex-col space-y-[-35px] mt-[87px]">
      <div className="border border-green-500">
        <Arrow />
      </div>
      <div className="border border-red-500">
        <Arrow />
      </div>
    </div>
  );
}

export function Arrow() {
  return (
    <div className="">
      <Image src={arrow} alt="flecha" className="object-contain" />
    </div>
  );
}
