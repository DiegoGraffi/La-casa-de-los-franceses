import Image from "next/image";
import sectionLine from "../../public/images/sectionTitleLine.svg";

type TitleProps = {
  title: string;
  title2?: string;
};

export default function SectionTitle({ title, title2 }: TitleProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-[17px]">
      <p className="font-bricolage uppercase text-primarioOscuro text-center font-extralight md:font-light text-[24px]/[28px] md:text-[32px]/[38px]">
        {title}
        <br />
        {title2}
      </p>
      <Image
        src={sectionLine}
        alt="line"
        className="h-[4px] w-[90vw] md:w-[650px]"
      />
    </div>
  );
}
