import AccordionQuestion from "@/components/PreguntasFrecuentesComponents/AccordionQuestion";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";

function page() {
  const t = useTranslations("Preguntas Frecuentes");
  return (
    <div className="min-h-screen mb-20 pt-[150px] flex flex-col gap-[10px] lg:gap-[40px]">
      <div className="mx-[100px] lg:m-0">
        <SectionTitle title={t("titulo")}/>
      </div>
      
<div className="flex justify-center">
   <h3 className="w-[315px] lg:w-full font-bricolage font-semibold text-center text-[40px]/[48px] lg:text-[48px]/[58px] text-terciarioPrincipal mt-[50px] lg:mt-[93px]">
        {t("seccion1")}
      </h3>
</div>
     

<div className="flex flex-col gap-[11px]">
<AccordionQuestion
        question={t("pregunta1")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta2")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta3")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta4")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta5")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta6")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
</div>
      <div className="flex justify-center">
        <h3 className="w-[315px] lg:w-full font-bricolage font-semibold text-[40px]/[48px] lg:text-[48px]/[58px] text-center text-terciarioPrincipal mt-8 lg:mt-20">
       {t("seccion2")}
      </h3>
      </div>
      

<div className="flex flex-col gap-[11px]">
    <AccordionQuestion
        question={t("pregunta7")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta8")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta9")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta10")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta11")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta12")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
</div>
      
    <div className="flex justify-center">
      <h3 className="w-[315px] lg:w-full font-bricolage font-semibold text-[40px]/[48px] lg:text-[48px]/[58px] text-center text-terciarioPrincipal mt-8 lg:mt-20">
        {t("seccion3")}
      </h3>

    </div>
      
<div className="flex flex-col gap-[11px]">
    <AccordionQuestion
        question={t("pregunta13")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta14")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta15")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
      <AccordionQuestion
        question={t("pregunta16")}
        answer="En el valle de las sombras fugaces, donde el tiempo parece deslizarse con la sutileza de una brisa suave, vivía una pequeña aldea conocida por sus coloridas casas y sus aún más coloridos habitantes. Cada mañana, los pájaros entonaban melodías que resonaban entre las colinas circundantes, anunciando el comienzo de un nuevo día lleno de promesas y pequeñas aventuras."
      />
</div>
      
    </div>
  );
}

export default page;
