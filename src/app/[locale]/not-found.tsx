import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound")
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold font-vangeda text-gris1 text-center">
        {t("notFound1")} <br />
        {t("notFound2")}
      </h2>
      <p className="font-bricolage text-gris2 mt-5">
       {t("notFound3")}
      </p>
      <Link
        href="/"
        className="mt-5 bg-terciarioClaro text-primarioClaro p-5 rounded-[5px] rounded-tr-[20px] rounded-bl-[20px] hover:bg-terciarioPrincipal cursor-pointer transition-all ease-in-out duration-200 font-bricolage"
      >
        {t("notFound4")}
      </Link>
    </div>
  );
}
