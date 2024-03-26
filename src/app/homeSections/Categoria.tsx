import BotonXS from "@/components/GeneralComponents/Botones/BotonXS";
import cardIcon from "../../../public/images/mastercard-card.png";
import cardIconSVG from "../../../public/images/mastercard-card.svg";
import BotonSM from "@/components/GeneralComponents/Botones/BotonSM";
import BotonMD from "@/components/GeneralComponents/Botones/BotonMD";
import BotonLG from "@/components/GeneralComponents/Botones/BotonLG";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import BotonXXL from "@/components/GeneralComponents/Botones/BotonXXL";

export default function Categoria() {
  return (
    <div className="min-h-screen container mx-auto flex justify-center items-center flex-col ">
      <p>Categoria Section</p>

      <BotonXS
        bgColor="bg-secundarioPrincipal"
        text="camion"
        textColor="text-primarioClaro"
        icon={cardIconSVG}
      />

      <BotonSM
        bgColor="bg-secundarioPrincipal"
        text="camion"
        textColor="text-primarioClaro"
        icon={cardIconSVG}
      />

      <BotonMD
        bgColor="bg-secundarioPrincipal"
        text="camion"
        textColor="text-primarioClaro"
        icon={cardIconSVG}
      />

      <BotonLG
        bgColor="bg-secundarioPrincipal"
        text="camion"
        textColor="text-primarioClaro"
        icon={cardIconSVG}
      />

      <BotonXL
        bgColor="bg-secundarioPrincipal"
        text="camion"
        textColor="text-primarioClaro"
        icon={cardIconSVG}
      />

      <BotonXXL
        bgColor="bg-secundarioPrincipal"
        text="camion"
        textColor="text-primarioClaro"
        icon={cardIconSVG}
        link="#"
      />
      <BotonSM
        bgColor="bg-primarioOscuro"
        text="camionardo"
        textColor="text-primarioClaro"
        icon={cardIconSVG}
      />
    </div>
  );
}
