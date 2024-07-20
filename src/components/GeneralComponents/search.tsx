"use client";

import { createUrl } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/navigation";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/tienda", newParams));
  }

  return (
    <form onSubmit={onSubmit} className="w-full lg:max-w-[550px] relative">
      <input
        key={searchParams?.get("q")}
        type="text"
        name="search"
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="rounded-lg border border-gris5 bg-transparent px-4 py-2 text-sm text-black placeholder:text-black w-full"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center"></div>
    </form>
  );
}
