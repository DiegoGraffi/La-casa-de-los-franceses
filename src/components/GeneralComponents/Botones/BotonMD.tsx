import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
};

export default function BotonMD({ text, bgColor, textColor, icon }: Props) {
  return (
    <div
      className={`${bgColor} px-[21px] py-[6px] rounded-full justify-center items-center flex`}
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
      <p className={`${textColor} text-[14px] font-semibold leading-[22px]`}>
        {text}
      </p>
    </div>
  );
}
