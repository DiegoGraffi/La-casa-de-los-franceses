import Checkbox from "react-custom-checkbox";
import checkImg from "../../../public/images/tiendaPage/check.svg";
import Image from "next/image";
import { TiendaContext } from "../../../context/TiendaProvider";
import { useContext } from "react";

type FilterLabelProps = {
  label: string;
};

export default function FilterLabel({ label }: FilterLabelProps) {
  const context = useContext(TiendaContext);

  if (!context) {
    throw new Error("useContext must be used within a TiendaProvider");
  }
  const { selectedItemCategory, setSelectedItemCategory } = context;

  return (
    <div
      className="p-2 hover:bg-gris6 rounded-md w-max"
      onClick={() => setSelectedItemCategory && setSelectedItemCategory(label)}
    >
      <div className="relative flex gap-[10px] items-center">
        <Checkbox
          checked={false}
          icon={
            <Image
              src={checkImg}
              alt="checkImg"
              className="object-contain absolute -top-[2px] left-[2px]"
              width={27}
            />
          }
          borderColor="#9E958F"
          borderRadius={6}
          size={23}
        />
        <p className="text-[20px] font-bricolage text-gris3 font-light">
          {label}
        </p>
      </div>
    </div>
  );
}
