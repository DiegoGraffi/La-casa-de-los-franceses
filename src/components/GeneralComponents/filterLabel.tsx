import { useSearchParams } from "next/navigation";
import { CustomCheckbox } from "../customCheckbox";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type FilterLabelProps = {
  label: string;
  name: string;
};

const translations = {
  Rojo: "Rouge",
  Blanco: "Blanc",
  Rosado: "Rosé",
  Carnes: "Viandes",
  Vinos: "Vins",
  "Champagnes y espirituosos": "Champagnes et spiritueux",
  Especiales: "Spéciales",
};

type TranslationKey = keyof typeof translations;

export default function FilterLabel({ label, name }: FilterLabelProps) {
  const [checked, setChecked] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const isChecked = searchParams.getAll(name).includes(label);
    setChecked(isChecked);
  }, [searchParams]);

  const locale = usePathname()?.split("/")[1];
  const isSpanish = locale === "es";

  const displayLabel = isSpanish
    ? label
    : translations[label as TranslationKey] || label;

  return (
    <div className="p-2 hover:bg-gris6 rounded-md w-full">
      <div className="relative flex gap-[10px] items-start">
        <CustomCheckbox
          name={name}
          value={label}
          checked={checked}
          // @ts-ignore esto es por que puede devolver indetermiate pero solo queremos bool
          onCheckedChange={setChecked}
        />
        <p className="text-[20px]/[24px] font-bricolage text-gris3 font-light">
          {displayLabel}
        </p>
      </div>
    </div>
  );
}
