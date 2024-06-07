import AccordionComponent from "@/components/TiendaComponents/AccordionComponent";

type Props = {
  listaTipos: string[];
  listaBodegas: string[];
  listaVarietal: string[];
};

export function Sidebar({ listaTipos, listaBodegas, listaVarietal }: Props) {
  return (
    <div className="lg:w-[25%] h-max lg:border-r-primarioMuyOscuro lg:border-r py-[25px] ">
      <AccordionComponent
        listaTipos={listaTipos}
        listaBodegas={listaBodegas}
        listaVarietal={listaVarietal}
      />
    </div>
  );
}
