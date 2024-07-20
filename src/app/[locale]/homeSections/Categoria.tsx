import CategoryCard from "@/components/CategoryCard";
import vinos from "@/assets/images/inicio/vinos.png";
import carnes from "@/assets/images/inicio/carnes.png";
import champagnes from "@/assets/images/inicio/champagnes.png";
import especiales from "@/assets/images/inicio/especiales.png";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";

export default function Categoria() {
  const t = useTranslations("Home");
  return (
    <div className="px-[15px] lg:px-[100px] mx-auto flex flex-col justify-center w-full max-w-[1600px] gap-[50px] mt-[50px] lg:mt-[110px]">
      <div className="hidden lg:flex justify-center">
        <SectionTitle title={t("categoria")} />
      </div>
      <div className="lg:hidden flex justify-center">
        <SectionTitle title={t("titulo1")} title2={t("titulo2")} />
      </div>
      <div className="flex gap-x-[60px] relative self-center mt-[30px]">
        <div className="flex flex-col gap-[25px] lg:gap-0">
          <CategoryCard
            title={t("nombreCategoria1")}
            textButton={t("botonVinos")}
            description={t("descripcionVinos")}
            image={vinos}
            link="Vinos"
            reverse={false}
            color="verde"
          />

          <CategoryCard
            title={t("nombreCategoria2")}
            textButton={t("botonCarnes")}
            description={t("descripcionCarnes")}
            image={carnes}
            link="Carnes"
            reverse={true}
            color="rojo"
          />
          <CategoryCard
            title={t("nombreCategoria3")}
            textButton={t("botonChampagne")}
            description={t("descripcionChampagne")}
            image={champagnes}
            link="Champagnes y espirituosos"
            reverse={false}
            color="verde"
          />

          <CategoryCard
            title={t("nombreCategoria4")}
            textButton={t("botonEspeciales")}
            description={t("descripcionEspeciales")}
            image={especiales}
            link="Especiales"
            reverse={true}
            color="rojo"
          />
        </div>
      </div>
    </div>
  );
}
