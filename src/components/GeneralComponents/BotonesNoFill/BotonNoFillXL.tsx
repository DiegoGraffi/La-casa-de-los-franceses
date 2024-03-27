import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  textColor: string;
  borderColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillXL({
  text,
  textColor,
  borderColor,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`border border-solid border-${borderColor} px-[28px] py-[10px] rounded-full justify-center items-center flex w-max`}
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
      <p className={`text-${textColor} text-[18px] font-semibold leading-[24px]`}>
        {text}
      </p>
    </Link>
  );
}
