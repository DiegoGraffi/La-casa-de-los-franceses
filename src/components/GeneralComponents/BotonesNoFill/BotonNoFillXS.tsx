import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  textColor: string;
  borderColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillXS({
  text,
  textColor,
  borderColor,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`bg-transparent border border-solid border-${borderColor} px-[13px] py-[5px] rounded-full justify-center items-center flex w-max`}
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
      <p className={`text-${textColor} text-[10px] font-semibold leading-[12px]`}>
        {text}
      </p>
    </Link>
  );
}
