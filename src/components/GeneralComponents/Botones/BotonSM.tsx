import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
};

export default function BotonSM({ text, bgColor, textColor, icon }: Props) {
  return (
    <div
      className={`${bgColor} px-[13px] py-[5px] rounded-full justify-center items-center flex`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={16}
          height={16}
          className={`${textColor} mr-[6px]`}
        />
      )}
      <p className={`${textColor} text-[12px] font-semibold leading-[16px]`}>
        {text}
      </p>
    </div>
  );
}
