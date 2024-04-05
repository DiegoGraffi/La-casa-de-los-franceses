import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillLG({
  text,
  icon,
  link,
}: Props) {
  return (
    <Link href={link} className={`border border-solid border-primarioOscuro px-[13px] py-[5px] rounded-full justify-center items-center flex w-max bg-transparent hover:bg-gradient-to-t from-primarioClaro to-transparent active:bg-primarioClaro disabled:border-primarioMuyClaro transition-all ease-out duration-300`}>
      {icon && (
        <Image src={icon} alt="icon" width={12} height={12} className="mr-[5px]" />
      )}
      <p className={`text-primarioOscuro disabled:text-primarioClaro text-[10px] font-semibold leading-[12px]`}>
        {text}
      </p>
    </Link>
  );
}
