import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
};

export default function BotonXL({ text, bgColor, textColor, icon }: Props) {
  return (
    <div
      className={`${bgColor} px-[28px] py-[10px] rounded-full justify-center items-center flex`}
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
    </div>
  );
}
