"use client";

import AccordionComponent from "@/components/TiendaComponents/AccordionComponent";
import { createUrl } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

type Props = {
  listaTipos: string[];
  listaBodegas: string[];
  listaVarietal: string[];
  listaTipoVino: string[];
};

export function Sidebar({
  listaTipos,
  listaBodegas,
  listaVarietal,
  listaTipoVino,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // @ts-ignore
    const data = new FormData(e.target);

    // @ts-ignore
    const entries: string[][] = Array.from(data.entries());

    const newParams = new URLSearchParams(entries);

    newParams.delete("after");
    newParams.delete("before");
    //@ts-ignore
    for (const [key, value] of searchParams.entries()) {
      if (!newParams.has(key) && key !== "after" && key !== "before") {
        newParams.set(key, value);
      }
    }

    router.push(createUrl(pathname, newParams));
  }
  const t = useTranslations("Tienda");
  return (
    <form
      onSubmit={onSubmit}
      className="lg:w-[25%] h-max lg:border-r-primarioMuyOscuro lg:border-r py-[25px] lg:pr-[20px] shrink-0"
    >
      <AccordionComponent
        listaTipos={listaTipos}
        listaBodegas={listaBodegas}
        listaVarietal={listaVarietal}
        listaTipoVino={listaTipoVino}
      />
      <button
        type="submit"
        className="w-full flex justify-center items-center p-2 rounded-md mt-5 bg-terciarioPrincipal hover:bg-terciarioOscuro text-secundarioClaro transition-all ease-in-out duration-200 cursor-pointer font-bricolage"
      >
        {t("botonSidebar1")}
      </button>
      <button
        type="button"
        onClick={() => router.push("/tienda")}
        className="w-full flex justify-center items-center p-2 rounded-md bg-terciarioPrincipal hover:bg-terciarioOscuro text-secundarioClaro transition-all ease-in-out duration-200 cursor-pointer font-bricolage mt-2"
      >
        {t("botonSidebar2")}
      </button>
    </form>
  );
}
