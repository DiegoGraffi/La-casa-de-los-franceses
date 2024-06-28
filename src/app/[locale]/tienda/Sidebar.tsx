"use client";

import AccordionComponent from "@/components/TiendaComponents/AccordionComponent";
import { createUrl } from "@/lib/utils";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type Props = {
  listaTipos: string[];
  listaBodegas: string[];
  listaVarietal: string[];
};

export function Sidebar({ listaTipos, listaBodegas, listaVarietal }: Props) {
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
    //@ts-ignore
    for (const [key, value] of searchParams.entries()) {
      if (!newParams.has(key)) {
        newParams.set(key, value);
      }
    }

    router.push(createUrl(pathname, newParams));
  }
  
  return (
    <form
      onSubmit={onSubmit}
      className="lg:w-[25%] h-max lg:border-r-primarioMuyOscuro lg:border-r py-[25px] lg:pr-[25px]"
    >
      <AccordionComponent
        listaTipos={listaTipos}
        listaBodegas={listaBodegas}
        listaVarietal={listaVarietal}
      />
      <button
        type="submit"
        className="w-full flex justify-center items-center p-2 rounded-md mt-5 bg-terciarioPrincipal hover:bg-terciarioOscuro text-secundarioClaro transition-all ease-in-out duration-200 cursor-pointer font-bricolage"
      >
        Aplicar filtros
      </button>
      <button
        type="button"
        onClick={() => router.push("/tienda")}
        className="w-full flex justify-center items-center p-2 rounded-md bg-terciarioPrincipal hover:bg-terciarioOscuro text-secundarioClaro transition-all ease-in-out duration-200 cursor-pointer font-bricolage mt-2"
      >
        Eliminar filtros
      </button>
    </form>
  );
}
