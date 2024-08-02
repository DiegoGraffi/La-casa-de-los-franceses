type PasosCardProps = {
  number: number;
  title: string;
  description: string;
};

function PasosCard({ number, title, description }: PasosCardProps) {
  return (
    <div className="w-full lg:w-auto xl:max-w-[250px] flex-1 text-center p-2 h-min flex flex-col gap-4">
      <div className="flex flex-row-reverse lg:flex-col gap-4 items-start justify-end lg:items-center">
        <h3 className="font-bricolage text-[28px]/[34px] text-secundarioClaro text-start lg:text-center text-pretty">
          {title}
        </h3>
        <div className="group relative flex justify-center items-center h-[52px]">
          <div className="w-[52px] h-[52px] border rounded-full bg-transparent border-secundarioClaro"></div>
          <div className="font-bold font-bricolage text-secundarioClaro text-[28px]/[34px] absolute z-10 p-4">
            {number}
          </div>
        </div>
      </div>
      <p className="font-bricolage text-[14px]/[20px] text-secundarioClaro text-start text-pretty lg:text-center">
        {description}
      </p>
    </div>
  );
}

export default PasosCard;
