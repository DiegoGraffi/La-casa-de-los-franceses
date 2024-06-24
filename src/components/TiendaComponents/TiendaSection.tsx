import { Suspense } from "react";
import Search from "../GeneralComponents/search";
import DropdownMenu from "./DropdownMenu";
import { Sidebar } from "@/app/tienda/Sidebar";
import ProductsSection from "./ProductsSection";
import { ProductsList } from "@/lib/types";
import Products from "./Products";

export default function TiendaSection({ products }: ProductsList) {
  const listaProductos = products.filter((product) => product.productType);

  const listaTipos: string[] = [];
  listaProductos.forEach((producto) => {
    if (!listaTipos.includes(producto.productType)) {
      listaTipos.push(producto.productType);
    }
  });

  const listaBodegas: string[] = [];
  listaProductos.forEach((producto) => {
    const bodega = producto.vendor;
    if (!listaBodegas.includes(bodega)) {
      listaBodegas.push(bodega);
    }
  });

  const listaVarietal: string[] = [];
  listaProductos.forEach((producto) => {
    const varietales = producto.tags;
    if (varietales && varietales.length > 0) {
      varietales.forEach((varietal) => {
        if (varietal && varietal !== "" && !listaVarietal.includes(varietal)) {
          listaVarietal.push(varietal);
        }
      });
    }
  });

  return (
    <div className="min-h-screen flex flex-col pt-[122px] pb-[50px]">
      <div className="w-full h-[250px] flex justify-center items-center bg-terciarioPrincipal">
        <p className="text-[40px]/[39px] lg:text-[100px]/[173px] mt-12 lg:mt-0 font-vangeda text-secundarioClaro">
          ¿Estas listo?
        </p>
      </div>

      <div className="w-full container mx-auto flex flex-col lg:gap-[30px]">
        <div className="flex flex-col lg:flex-row order-2 lg:order-1 justify-between items-start lg:items-center gap-[30px] lg:gap-[50px]">
          <div className="w-full lg:w-[60%] flex flex-col lg:flex-row lg:gap-[50px] items-center lg:py-[50px]">
            <p className="uppercase text-gris2 font-semibold text-[24px]/[38px] font-bricolage">
              Buscar
            </p>
            <Suspense fallback={null}>
              <Search />
            </Suspense>
          </div>

          <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[40px] items-center w-full lg:w-[40%]">
            <p className="uppercase text-gris4 font-light lg:font-semibold text-[12px]/[16px] lg:text-[18px]/[28px] lg:font-bricolage font-gibson min-w-max">
              Mostrando {products.length} resultados
            </p>
            <DropdownMenu />
          </div>
        </div>

        <div className="flex flex-col order-1 lg:order-2 lg:flex-row">
          <Suspense fallback={null}>
            <Sidebar
              listaTipos={listaTipos}
              listaBodegas={listaBodegas}
              listaVarietal={listaVarietal}
            />
          </Suspense>
          <div className="w-full lg:w-[80%] hidden lg:flex lg:flex-col">
            <ProductsSection>
              <Products products={products} />
            </ProductsSection>
          </div>
        </div>
      </div>
      <div className="w-full container mx-auto flex flex-col lg:w-[80%] lg:hidden pt-[20px]">
        <ProductsSection>
          <Products products={products} />
        </ProductsSection>
      </div>
    </div>
  );
}
