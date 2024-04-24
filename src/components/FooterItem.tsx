import Image, { StaticImageData } from "next/image";

type FooterItemProps = {
  icon: StaticImageData;
  label: string;
};

export default function FooterItem({ icon, label }: FooterItemProps) {
  return (
    <div className="group p-[10px] flex gap-[10px] items-start hover:gap-[15px] transition-all ease-in-out duration-150 cursor-pointer">
      <Image src={icon} alt="icon" className="black" />
      <p className="text-primarioClaro font-bricolage no-underline font-light text-[20px]/[25px] group-hover:underline group-hover:text-[#ead196] transition-all ease-in-out duration-150">
        {label}
      </p>
    </div>
  );
}
