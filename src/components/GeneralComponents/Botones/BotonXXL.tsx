import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonXXL({
  text,
  bgColor,
  textColor,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`${bgColor} px-[28px] py-[10px] rounded-full justify-center items-center flex`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={32}
          height={32}
          className={`mr-[10px]`}
        />
      )}
      <p className={`${textColor} text-[30px] font-semibold leading-[32px]`}>
        {text}
      </p>
    </Link>
  );
}
