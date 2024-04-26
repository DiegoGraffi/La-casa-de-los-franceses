type EventoCardProps = {
  date: string;
  title: string;
  description: string;
};

export default function EventoCard({
  date,
  title,
  description,
}: EventoCardProps) {
  return (
    <div className="flex flex-none flex-col py-[50px] px-[15px] bg-white shadow-md shadow-terciarioOscuro shadow- rounded-[23px] w-[250px] h-max hover:bg-gris5 transition-all ease-in-out duration-200 hover:scale-105">
      <p className="text-secundarioPrincipal font-bricolage text-[28px]/[34px] font-semibold text-center">
        {date}
      </p>
      <hr className="my-[10px] border-[#1e1e1e]" />
      <div className="flex flex-col gap-[15px]">
        <p className="text-gris2 font-bricolage text-[18px]/[28px] font-semibold text-center">
          {title}
        </p>
        <p className="text-gris2 font-bricolage text-[14px]/[20px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
