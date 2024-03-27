import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  textColor: string;
  borderColor: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillMD({
  text,
  textColor,
  borderColor,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`border border-solid border-${borderColor} px-[21px] py-[6px] rounded-full justify-center items-center flex w-max`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={22}
          height={22}
          className="mr-[10px]"
        />
      )}
      <p className={`text-${textColor} text-[14px] font-semibold leading-[22px]`}>
        {text}
      </p>
    </Link>
  );
}
