import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonXL({
  text,
  bgColor,
  textColor,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`${bgColor} px-[28px] py-[10px] rounded-full justify-center items-center flex w-max`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={24}
          height={24}
          className="mr-[10px]"
        />
      )}
      <p className={`${textColor} text-[18px] font-semibold leading-[24px]`}>
        {text}
      </p>
    </Link>
  );
}
