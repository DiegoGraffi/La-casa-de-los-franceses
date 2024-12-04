import { Link } from "@/navigation";
import Image, { StaticImageData } from "next/image";

type FooterItemProps = {
  icon: StaticImageData;
  label: string;
  link?: string;
};

export default function FooterItem({ icon, label, link }: FooterItemProps) {
  const Etiqueta = link ? Link : "div";
  const linkFooter = link || "#";
  return (
    <Etiqueta
      href={linkFooter}
      target={link ? "_blank" : undefined}
      className="group p-[10px] gap-[10px] hover:gap-[15px] flex items-start transition-all ease-in-out duration-150 cursor-pointer max-w-full "
    >
      <Image src={icon} alt="icon" width={20} className="shrink-0" />
      <p className="text-primarioClaro font-bricolage no-underline font-light text-[16px]/[22px] group-hover:underline group-hover:text-[#ead196] transition-all ease-in-out duration-150 overflow-hidden text-ellipsis max-w-[calc(100% - 45px)] hover:max-w-full hover:overflow-visible">
        {label}
      </p>
    </Etiqueta>
  );
}
