import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  textColor: string;
  borderColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillSM({
  text,
  textColor,
  borderColor,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`border border-solid border-${borderColor} px-[13px] py-[5px] rounded-full justify-center items-center flex w-max`}
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
      <p className={`text-${textColor} text-[12px] font-semibold leading-[16px]`}>
        {text}
      </p>
    </Link>
  );
}
