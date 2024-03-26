import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: StaticImageData;
};

export default function BotonXS({ text, bgColor, textColor, icon }: Props) {
  return (
    <div
      className={`${bgColor} px-[13px] py-[5px] rounded-full justify-center items-center flex`}
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
      <p className={`${textColor} text-[10px] font-semibold leading-[12px]`}>
        {text}
      </p>
    </div>
  );
}
