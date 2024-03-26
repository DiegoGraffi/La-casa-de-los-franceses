import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
};

export default function BotonLG({ text, bgColor, textColor, icon }: Props) {
  return (
    <div
      className={`${bgColor} px-[21px] py-[8px] rounded-full justify-center items-center flex`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={22}
          height={22}
          className={`${textColor} mr-[10px]`}
        />
      )}
      <p className={`${textColor} text-[16px] font-semibold leading-[25px]`}>
        {text}
      </p>
    </div>
  );
}
