import Image from "next/image";

type PerfilProps = {
  persona: {
    image: string;
    name: string;
    role: string;
  };
  index: number;
  zIndex: number;
};

export default function Perfil({ persona, index, zIndex }: PerfilProps) {
  return (
    <div
      key={index}
      style={{
        zIndex: zIndex,
        marginLeft: index === 0 ? 0 : "-35px",
        position: "relative",
      }}
      className="flex flex-col h-full justify-center group-hover:justify-start"
    >
      <div className="w-full flex justify-center items-center aspect-square mt-0 z-10">
        <Image
          src={persona.image}
          alt="imagen"
          className="object-cover mx-auto w-[85px] h-[85px] min-w-[85px] min-h-[85px] xl:w-[100px] xl:h-[100px] xl:min-w-[100px] xl:min-h-[100px] border-white border-4 rounded-full aspect-square "
        />
      </div>
      <div className="flex flex-col absolute z-0 w-full h-full translate-y-0 group-hover:translate-y-[70%] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700">
        <p className="text-terciarioPrincipal text-[16px]/[20px] font-vangeda z-50 hidden group-hover:flex transition-all ease-in-out duration-700 text-center w-min justify-center mt-[12px] mx-auto">
          {persona.name}
        </p>
        <p className="text-terciarioPrincipal text-[12px]/[16px] font-regular font-bricolage z-50 hidden group-hover:flex transition-all ease-in-out duration-700 text-center w-min justify-center mt-[6px] mx-auto">
          {persona.role}
        </p>
      </div>
    </div>
  );
}
