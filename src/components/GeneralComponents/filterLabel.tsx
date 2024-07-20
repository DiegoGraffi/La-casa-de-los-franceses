import { useSearchParams } from "next/navigation";
import { CustomCheckbox } from "../customCheckbox";

type FilterLabelProps = {
  label: string;
  name: string;
};

export default function FilterLabel({ label, name }: FilterLabelProps) {
  const searchParams = useSearchParams();
  const isChecked = searchParams.getAll(name).includes(label);

  return (
    <div className="p-2 hover:bg-gris6 rounded-md w-max">
      <div className="relative flex gap-[10px] items-center">
        <CustomCheckbox name={name} value={label} isChecked={isChecked} />
        <p className="text-[20px] font-bricolage text-gris3 font-light">
          {label}
        </p>
      </div>
    </div>
  );
}
