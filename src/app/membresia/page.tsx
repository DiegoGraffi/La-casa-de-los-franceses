"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import MembresiaCard from "@/components/MembresiaComponents/MembresiaCard";
import PasosCard from "@/components/MembresiaComponents/PasosCard";
import SectionTitle from '@/components/SectionTitle';
import portada from '../../../public/images/membresiaPage/sillas.jpg'
import CartComponent from '@/components/TiendaComponents/CartComponent';
import AgeConfirmationModal from '@/components/AgeConfirmationModal';


function Membresia() {
  const [isHovering, setIsHovering] = useState(false);
  const [isSpecialHovering, setIsSpecialHovering] = useState(false);

  return (
    <div className="min-h-screen mb-20 pt-[124px]">
      <div className='relative w-full h-[753px]'>
        <div className='w-full h-full absolute z-20 bg-[#492415] opacity-70'></div>
        <div className="w-full h-full">
        <Image
          src="/images/membresiaPage/portadaMembresia.png"
          alt="portada"
          width={1910} 
          height={500}
          className="object-contain"
        />
      </div>
      </div>
      

      <div className="w-full relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={`bg-secundarioOscuro h-[349px] w-full flex items-center justify-center transition-opacity duration-300 ${
          isHovering ? 'opacity-0' : 'opacity-100'}`}>
          <h3 className="font-vangeda text-[55px] text-secundarioClaro relative">
            ¿Cómo funciona nuestra membresía?
          </h3>
        </div>

        <div className={`bg-secundarioOscuro absolute top-0 left-0 w-full h-[349px] flex justify-center items-center transition-opacity duration-300 gap-[40px] ${
          isHovering ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex gap-[40px] items-start '>
              <PasosCard
            title="Elegí tu membresía"
            description="Tienes cuatro opciones. En todas te ofrecemos vinos seleccionados, pero en los mix,  puedes ampliar la propuesta y conseguir felicidad extra."
            image="/images/membresiaPage/circulo.svg"
            number={1}
          />
          <PasosCard
            title="Seleccionamos tu mejor vino"
            description="Nosotros nos encargamos de que obtengas los mejores vinos y algo más ;)"
            image="/images/membresiaPage/circulo.svg"
            number={2}
          />
          <PasosCard
            title="Te enviamos tu caja"
            description="Solo tienes que esperar hasta que tu paquete llegue a la puerta de tu casa. Nosotros te lo llevamos."
            image="/images/membresiaPage/circulo.svg"
            number={3}
          />
          <PasosCard
            title="Momento de ser feliz"
            description="Es hora de abrir el paquete y disfrutar tus vinos seleccionados. Una vez que se te acabe lo pedido te esperamos para enviarte nuevamente eso que tanto te gusta."
            image="/images/membresiaPage/circulo.svg"
            number={4}
          />
            </div>
          
        </div>
        <Image
          src="/images/estrella.png"
          alt="estrella"
          width={102}
          height={102}
          className="absolute right-[5%] top-[17.69%] translate-y-[-110%] z-30"
        />
      </div>
  
              
    

      <div className="flex flex-col mt-[53px] justify-center align-center">

        <SectionTitle title='Elegí tu membresía'/>

        <div className="flex flex-row justify-center align-center mt-[37px]">
          <MembresiaCard
            image="/images/membresiaPage/membresia1.avif"
            name="SIMPLE BOX"
            description="Caja de 3 vinos seleccionados. Descuentos exclusivos en nuestra tienda online y física."
            precio={50}
          />
          <MembresiaCard
            image="/images/membresiaPage/membresia2.avif"
            name="LARGE BOX"
            description="Caja de 5 vinos seleccionados. Descuentos exclusivos en nuestra tienda online y física."
            precio={70}
          />
          <MembresiaCard
            image="/images/membresiaPage/membresia3.avif"
            name="SIMPLE BOX MIX"
            description="Caja de 3 vinos seleccionados con 1 extra seleccionado. Descuentos exclusivos en nuestra tienda online y física."
            precio={85}
          />
          <MembresiaCard
            image="/images/membresiaPage/membresia4.avif"
            name="LARGE BOX MIX"
            description="Caja de 5 vinos seleccionados con 2 extras seleccionados. Descuentos exclusivos en nuestra tienda online y física"
            precio={97}
          />
        </div>
        <div className="flex align-center justify-center">
          <div className="h-[172px] w-[1570px] bg-secundarioOscuro rounded-tr-[55px] rounded-bl-[55px] mt-[122px] flex items-center justify-center relative">
            <Image
              src="/images/membresiaPage/estrellaMembresia.svg"
              alt="estrella"
              width={84}
              height={84}
              className="right-[3%] -top-[25%] absolute"
            />
            <h3 className="text-[55px] font-vangeda font-regular leading-[62px] text-secundarioClaro text-center">
              PREGUNTAS FRECUENTES
            </h3>
          </div>
        </div>
        <div className="flex align-center justify-center">
          <div className="h-[172px] w-[1570px] bg-secundarioClaro rounded-tr-[55px] rounded-bl-[55px] mt-[50px] flex items-center justify-center">
            <h3 className="text-[55px] font-vangeda font-regular leading-[62px] text-secundarioOscuro text-center">
              Bases y condiciones de nuestra membresía
            </h3>
          </div>
        </div>
        <section className="w-full py-[60px] px-[100px]">
        <div className="group h-[420px] max-w-[1600px] w-full px-[100px] rounded-tr-[45px] rounded-bl-[75px] relative mx-auto overflow-hidden">
          <div className="w-full h-full px-[100] flex flex-col justify-center absolute z-[100] group-hover:hidden">
            <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal">
            Disfruta un momento <br/> especial en nuestra casa
            </p>
            <p className="font-bricolage text-[20px]/[25px] text-terciarioPrincipal">
            Contamos con un local, donde podrás disfrutar solo <br /> o
                           con quien quieras de los mejores vinos.
            </p>
          </div>
          <div className="w-full h-full hidden justify-center items-center absolute z-[100] group-hover:flex left-0 transition-all ease-in-out duration-200">
            <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal">
              Quiero conocer el local
            </p>
          </div>
          <div className="group-hover:bg-[#96AC60] absolute w-full h-full bg-gradient-to-r from-[#96AC60] from-[27%] to-transparent z-30 left-0 transition-all ease-in-out duration-200"></div>
          <Image src={portada} alt="portada" fill className="object-cover" />
        </div>
      </section>
      <section>
        <div>
          <CartComponent/>
        </div>
      </section>
        {/* <div className="w-full flex align-center justify-center mt-[50px]">
          <div className="relative h-[418px] w-[1551px] rounded-tr-[55px] rounded-bl-[55px] overflow-hidden flex items-center justify-center"
               onMouseEnter={() => setIsSpecialHovering(true)}
               onMouseLeave={() => setIsSpecialHovering(false)}
               >
                 <Image
                   src="/images/membresiaPage/sillas.png"
                   alt="portada"
                   layout="fill"
                   objectFit="cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-secundarioPrincipal to-transparent flex items-center justify-start text-left">
                   <div className='left-0'>
                     {isSpecialHovering ? (
                       <div className='bg-secundarioPrincipal relative h-[418px] w-[1551px] rounded-tr-[55px] rounded-bl-[55px] overflow-hidden flex items-center justify-center text-center'>
                         <h3 className="font-vangeda font-regular text-[55px] leading-[62px] text-terciarioPrincipal text-center">
                           Quiero conocer el local
                         </h3>
                       </div>
                     ) : (
                       <div className='ps-[150px]'>
                         <h3 className="font-vangeda font-regular text-[55px] leading-[62px] text-terciarioPrincipal">
                           Disfruta un momento <br /> especial en nuestra casa
                         </h3>
                         <p className="font-bricolage font-light text-[20px] leading-[25px] text-terciarioPrincipal">
                           Contamos con un local, donde podrás disfrutar solo <br /> o
                           con quien quieras de los mejores vinos.
                         </p>
                       </div>
                     )}
                   </div>
                 </div>
               </div>
             </div> */}
           </div>
         </div>
       );
     }
     
     export default Membresia;
