import React from 'react'
import Image from 'next/image';
import ItemCart from './ItemCart';
import BotonXXL from '../GeneralComponents/Botones/BotonXXL';

function CartComponent() {
  return (
    <div className='bg-terciarioPrincipal w-[600px] h-screen flex flex-col justify-between items-center gap-5'>
      <div className='bg-terciarioClaro w-[600px] h-[84px] flex items-center pl-[25px] justify-between'>
        <h3 className='font-bricolage font-semibold text-[24px]/[28px] text-white'>
          Carro de compras (3)
        </h3>
        <div className='pr-[27px]'>
          <Image src='/images/tiendaPage/cruzcarrito.svg' alt='producto' width={38} height={38}/>
        </div>
      </div>
      <div className='flex flex-col items-center my-[30px] gap-3 max-h-[calc(100vh - 84px - 80px)] overflow-y-auto'>
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
      </div>
      <div className='flex flex-col'>
        <h3 className='font-bricolage font-extralight text-white text-[24px]/[28px] text-center'>Total:</h3>
        <h3 className='font-bricolage font-semibold text-white text-[24px]/[28px] text-center'>$55.50</h3>
      </div>
      <div className='flex flex-col items-center gap-3 mb-[80px]'>
        <BotonXXL text='Comprar' color='rojo' link='#'/>
        <h3 className='font-bricolage font-light text-[20px]/[25px] text-primarioClaro hover:text-primarioOscuro hover:underline cursor-pointer'>Seguir viendo</h3>
      </div>
    </div>
  )
}

export default CartComponent;
