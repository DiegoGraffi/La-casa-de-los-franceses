import { Suspense } from "react";
import Search from "../GeneralComponents/search";
import DropdownMenu from "./DropdownMenu";
import ProductsSection from "./ProductsSection";
import { ProductsList } from "@/lib/types";
import Products from "./Products";
import { Sidebar } from "@/app/[locale]/tienda/Sidebar";
import { useTranslations } from "next-intl";

export default function TiendaSection({
  products,
  pageInfo,
  endCursor,
  startCursor,
  listaTipos,
  listaBodegas,
  listaVarietal,
  listaTipoVino,
  cantidadProd,
}: ProductsList & {
  pageInfo: any;
  endCursor: string;
  startCursor: string;
  listaTipos: string[];
  listaBodegas: string[];
  listaVarietal: string[];
  listaTipoVino: string[];
  cantidadProd: number;
}) {
  const t = useTranslations("Tienda");

  return (
    <div className="flex flex-col pt-[86px] lg:pt-[120px]">
      <div className="w-full h-[250px] flex justify-center items-center bg-terciarioPrincipal">
        <p className="text-[40px]/[39px] lg:text-[100px]/[173px] lg:mt-0 font-vangeda text-secundarioClaro">
          {t("titulo")}
        </p>
      </div>

      <div className="w-full container mx-auto flex flex-col lg:gap-[30px]">
        <div className="flex flex-col lg:flex-row order-2 lg:order-1 justify-between items-start lg:items-center gap-[30px] lg:gap-[50px]">
          <div className="w-full lg:w-[60%] flex flex-col lg:flex-row lg:gap-[50px] items-center lg:py-[50px]">
            <p className="uppercase text-gris2 font-semibold text-[24px]/[38px] font-bricolage">
              {t("buscar")}
            </p>
            <Suspense fallback={null}>
              <Search />
            </Suspense>
          </div>

          <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[40px] items-start w-full lg:w-[40%]">
            <p className="uppercase text-gris4 font-light lg:font-semibold text-[12px]/[16px] lg:text-[18px]/[28px] lg:font-bricolage font-gibson min-w-max top-0 p-2 mx-auto">
              {t("mostrar1")} {cantidadProd} {t("mostrar2")}
            </p>
            <div className="relative w-full top-0 h-[50px] flex justify-center">
              <DropdownMenu />
            </div>
          </div>
        </div>

        <div className="flex flex-col order-1 lg:order-2 lg:flex-row">
          <Suspense fallback={null}>
            <Sidebar
              listaTipos={listaTipos}
              listaBodegas={listaBodegas}
              listaVarietal={listaVarietal}
              listaTipoVino={listaTipoVino}
            />
          </Suspense>
          <div className="w-full lg:w-[80%] hidden lg:flex lg:flex-col">
            <ProductsSection
              pageInfo={pageInfo}
              endCursor={endCursor}
              startCursor={pageInfo.startCursor}
            >
              <Products products={products} />
            </ProductsSection>
          </div>
        </div>
      </div>
      <div className="w-full container mx-auto flex flex-col lg:w-[80%] lg:hidden pt-[20px]">
        <ProductsSection
          pageInfo={pageInfo}
          endCursor={endCursor}
          startCursor={startCursor}
        >
          <Products products={products} />
        </ProductsSection>
      </div>
    </div>
  );
}
