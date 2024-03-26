import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonSM({
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
          width={16}
          height={16}
          className="mr-[6px]"
        />
      )}
      <p className={`${textColor} text-[12px] font-semibold leading-[16px]`}>
        {text}
      </p>
    </Link>
  );
}
