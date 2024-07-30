import Image from "next/image";
import CloseIcon from "@/assets/images/tiendaPage/cruzcarrito.svg";
import { useTranslations } from "next-intl";

export default function CloseCart() {
  const t = useTranslations("Varios")
  return (
    <div className="relative flex items-center justify-center w-[30px] h-[30px] cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
      <Image src={CloseIcon} alt={t("cerrarCarro")} />
    </div>
  );
}
