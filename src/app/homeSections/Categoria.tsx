import CategoryCard from "@/components/CategoryCard";
import vinos from "../../../public/images/inicio/vinos.png";
import carnes from "../../../public/images/inicio/carnes.png";
import champagnes from "../../../public/images/inicio/champagnes.png";
import especiales from "../../../public/images/inicio/especiales.png";
import SectionTitle from "@/components/SectionTitle";

export default function Categoria() {
  return (
    <div className="px-[15px] lg:px-[100px] mx-auto flex flex-col justify-center w-full max-w-[1600px] gap-[90px]">
      <SectionTitle title="Todo lo que tenemos para vos" />
      <div className="flex gap-x-[60px] relative self-center ">
        <div className="flex flex-col gap-[25px] lg:gap-0">
          <CategoryCard
            title="Vinos"
            textButton="Catálogo de vinos"
            description="¡¡Che, date una vuelta por nuestro catálogo de tintos y descubrí lo que te estás perdiendo! ¡No te lo podés perder!"
            image={vinos}
            link="#"
            reverse={false}
            color="verde"
          />

          <CategoryCard
            title="Carnes"
            textButton="Catálogo de carnes"
            description="¡Ey, no te pierdas nuestra selección de espumantes que te va a dejar sin aliento! ¡Son puro sabor y burbujas de felicidad! ¡Animate a descubrir la magia de nuestros espumantes y brindá con estilo!"
            image={carnes}
            link="#"
            reverse={true}
            color="rojo"
          />
          <CategoryCard
            title="Champagne y espirituosos"
            textButton="Catálogo completo"
            description="¡Che, date una vuelta por nuestro catálogo de tintos y descubrí lo que te estás perdiendo! ¡No te lo podés perder!"
            image={champagnes}
            link="#"
            reverse={false}
            color="verde"
          />

          <CategoryCard
            title="Especiales"
            textButton="Catálogo de especiales"
            description="¡Ey, no te pierdas nuestra selección de espumantes que te va a dejar sin aliento! ¡Son puro sabor y burbujas de felicidad! ¡Animate a descubrir la magia de nuestros espumantes y brindá con estilo!"
            image={especiales}
            link="#"
            reverse={true}
            color="rojo"
          />
        </div>
      </div>
    </div>
  );
}
