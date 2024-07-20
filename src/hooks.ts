import { createUrl } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { usePathname } from "@/navigation";

export function useSearchParamsAppend(exceptions?: string[]) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createNewUrl(queries: Record<string, string>) {
    const params = new URLSearchParams(searchParams.toString());

    // borra los search params que no nos interesa mantener en el url
    for (const exception of exceptions ?? []) {
      params.delete(exception);
    }

    // agrega nuevos search params
    for (const [key, value] of Object.entries(queries)) {
      params.set(key, value);
    }

    return createUrl(pathname, params);
  }

  return createNewUrl;
}
