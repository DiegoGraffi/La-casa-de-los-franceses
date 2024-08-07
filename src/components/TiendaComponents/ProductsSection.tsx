"use client";

import { useSearchParamsAppend } from "@/hooks";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export default function ProductsSection({
  children,
  pageInfo,
  endCursor,
  startCursor,
}: {
  children: ReactNode;
  pageInfo: any;
  endCursor: string;
  startCursor: string;
}) {
  const { hasNextPage, hasPreviousPage } = pageInfo;
  const t = useTranslations("Tienda");
  const createUrl = useSearchParamsAppend(["after", "before"]);

  return (
    <div className="w-full flex flex-col">
      {children}

      <div className="flex flex-col gap-[25px] justify-center items-center my-[25px]">
        <div className="flex gap-[10px]">
          {hasPreviousPage && (
            <Link href={createUrl({ before: startCursor })}>
              <p className="uppercase text-gris3 text-[20px]/[24px] font-normal font-bricolage hover:bg-gris6 transition-all ease-in-out duration-200 p-2 rounded-md border-[.5px] border-gris5">
                {t("paginacionTienda1")}
              </p>
            </Link>
          )}

          {hasNextPage && (
            <Link href={createUrl({ after: endCursor })}>
              <p className="uppercase text-gris3 text-[20px]/[24px] font-normal font-bricolage hover:bg-gris6 transition-all ease-in-out duration-200 p-2 rounded-md border-[.5px] border-gris5">
                {t("paginacionTienda2")}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
