import Image, { StaticImageData } from "next/image";
import { Link } from "@/navigation";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillSM({ text, icon, link }: Props) {
  return (
    <Link
      href={link}
      className={`group border border-solid border-primarioOscuro px-[13px] py-[5px] rounded-full justify-center items-center flex w-max bg-transparen hover:bg-primarioOscuro hover:border-primarioMuyOscuro active:bg-primarioClaro disabled:border-primarioMuyClaro disabled:text-primarioClaro transition-all ease-out duration-300`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={16}
          height={16}
          className="mr-[6px]"
        />
      )}
      <p
        className={`text-primarioOscuro group-hover:text-primarioClaro group-disabled:text-primarioClaro group-active:text-primarioOscuro group-focus:text-primarioOscuro text-[12px] font-semibold leading-[16px]`}
      >
        {text}
      </p>
    </Link>
  );
}
