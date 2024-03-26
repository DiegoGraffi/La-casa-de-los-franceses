import CategoryCard from "@/components/CategoryCard";
import vinosTintos from "../../../public/images/vinoTintoCategory.png";
import vinosBlancos from "../../../public/images/vinoBlancoCategory.png";
import vinosEspumantes from "../../../public/images/vinoEspumanteCategory.png";
import carnes from "../../../public/images/carnesCategory.png";
import arrow from "../../../public/images/arrow.svg";
import Image from "next/image";
import estrella from "../../../public/images/estrellaCategoria.svg";

export default function Categoria() {
  return (
    <div className="min-h-screen container mx-auto flex flex-col">
      <div className="flex justify-between">
        <h2 className="text-[150px] font-vangeda text-secundarioOscuro leading-[116px]">
          Todo esto <br />
          solo para vos
        </h2>
        <div className="">
          <Image src={arrow} alt="arrow" />
          <Image src={arrow} alt="arrow" className="-translate-y-[70px]" />
        </div>
      </div>
      <div className=" flex gap-x-[60px] mt-[136px] relative">
        <div className="flex flex-col gap-[60px]">
          <CategoryCard
            title="Vinos Tintos"
            textButton="Catálogo de tintos"
            description="¡Che, date una vuelta por nuestro catálogo de tintos y descubrí lo que te estás perdiendo! ¡No te lo podés perder!"
            image={vinosTintos}
            link="#"
          />

          <CategoryCard
            title="Vinos Espumantes"
            textButton="Catálogo de espumantes"
            description="¡Ey, no te pierdas nuestra selección de espumantes que te va a dejar sin aliento! ¡Son puro sabor y burbujas de felicidad! ¡Animate a descubrir la magia de nuestros espumantes y brindá con estilo!"
            image={vinosEspumantes}
            link="#"
          />
        </div>
        <div className="absolute w-full flex flex-col items-center gap-[970px] mt-[335px] z-[60]">
          <Image src={estrella} alt="estrella" width={254} height={254} />
          <Image src={estrella} alt="estrella" width={254} height={254} />
        </div>
        <div className="flex flex-col gap-[60px] mt-[270px]">
          <CategoryCard
            title="Vinos Blancos"
            textButton="Catálogo de blancos"
            description="¡Ey, no te olvides de echarle un vistazo a nuestra selección de blancos! Vas a alucinar con lo que tenemos para ofrecerte. ¡Animate a descubrir la frescura y la sofisticación de nuestros blancos!"
            image={vinosBlancos}
            link="#"
          />

          <CategoryCard
            title="Carnes"
            textButton="Catálogo de carnes"
            description="¡Conoce nuestras carnes argentinas y preparate para un festín inolvidable! Tenemos cortes que te van a hacer agua la boca, directo del corazón de Argentina. ¡No te podés perder el sabor auténtico de nuestras carnes! ¡Animate a disfrutar de un asado como nunca antes!"
            image={carnes}
            link="#"
          />
        </div>
      </div>
    </div>
  );
}
