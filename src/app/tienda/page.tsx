import TiendaFetchSection from "@/components/TiendaComponents/TiendaFetchSection";
import TiendaProvider from "../../../context/TiendaProvider";

export const runtime = "edge";

export default async function Tienda({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };

  return (
    <TiendaProvider>
      <TiendaFetchSection searchValue={searchValue} />;
    </TiendaProvider>
  );
}
