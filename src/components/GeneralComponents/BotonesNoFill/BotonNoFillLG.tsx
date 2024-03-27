import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  textColor: string;
  borderColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillLG({
  text,
  textColor,
  borderColor,
  icon,
  link,
}: Props) {
  return (
    <Link href={link} className={`border border-solid border-${borderColor} px-[21px] py-[8px] rounded-full justify-center items-center flex w-max`}>
      {icon && (
        <Image src={icon} alt="icon" width={22} height={22} className="mr-[10px]" />
      )}
      <p className={`text-${textColor} text-[16px] font-semibold leading-[25px]`}>
        {text}
      </p>
    </Link>
  );
}
