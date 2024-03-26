import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonXS({
  text,
  bgColor,
  textColor,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`${bgColor} px-[13px] py-[5px] rounded-full justify-center items-center flex w-max`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={12}
          height={12}
          className="mr-[5px]"
        />
      )}
      <p className={`${textColor} text-[10px] font-semibold leading-[12px]`}>
        {text}
      </p>
    </Link>
  );
}
