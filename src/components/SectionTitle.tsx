import Image from "next/image";
import sectionLine from "../../public/images/sectionTitleLine.svg";

type TitleProps = {
  title: string;
};

export default function SectionTitle({ title }: TitleProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-[17px]">
      <p className="font-bricolage uppercase text-primarioOscuro font-light text-[40px]">
        {title}
      </p>
      <Image src={sectionLine} alt="line" width={860} />
    </div>
  );
}
