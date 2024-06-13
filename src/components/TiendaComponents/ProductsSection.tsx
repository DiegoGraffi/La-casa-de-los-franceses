import { ReactNode } from "react";

export default function ProductsSection({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col">
      {children}

      <div className="flex flex-col gap-[25px] justify-center items-center my-[25px]">
        <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
          Páginas
        </p>
        <div className="flex gap-[10px]">
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            1
          </p>
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            2
          </p>
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            3
          </p>
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            4
          </p>
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            5
          </p>
        </div>
      </div>
    </div>
  );
}
