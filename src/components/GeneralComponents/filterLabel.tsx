import { useSearchParams } from "next/navigation";
import { CustomCheckbox } from "../customCheckbox";
import { useEffect, useState } from "react";

type FilterLabelProps = {
  label: string;
  name: string;
};

export default function FilterLabel({ label, name }: FilterLabelProps) {
  const [checked, setChecked] = useState(false);
  const searchParams = useSearchParams();

  // si los search params cambia hay que sincronizarlos con el state de si esta
  // marcado o no
  useEffect(() => {
    const isChecked = searchParams.getAll(name).includes(label);
    setChecked(isChecked);
  }, [searchParams]);

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
          {label}
        </p>
      </div>
    </div>
  );
}
