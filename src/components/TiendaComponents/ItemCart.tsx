import React from 'react'
import Image from 'next/image';

function ItemCart() {
  return (
    <div className='w-[470px] h-[134px] flex items-center justify-around bg-white hover:cursor-pointer'>
      <div>
        <Image src='/images/vinoejemplo.png' alt='producto' width={116} height={116}/>
      </div>
      
      <div className='flex flex-col  gap-2 w-[167px]'>
        <h3 className='font-bricolage font-light text-[20px]/[25px] text-black'>
          Achavall Ferrer
          Cabernet Franc
        </h3>
        <h3 className='font-bricolage font-semibold text-[24px]/[28px]'>
          $18.50
        </h3>
      </div>
      <div className='flex flex-col items-center gap-1 justify-center w-[50px]'>
        <div className='relative w-[27px] h-[32px] group'>
          <Image src='/images/tiendaPage/botonmas.png' alt='agregar' width={27} height={32} layout='fixed' className='group-hover:hidden'/>
          <Image src='/images/tiendaPage/botonmashover.png' alt='agregar hover' width={27} height={32} layout='fixed' className='hidden group-hover:block'/>
        </div>
        
        <h3 className='font-bricolage font-semibold text-[24px]/[28px] text-gris2'>1</h3>
        <Image src='/images/tiendaPage/botonmenos.png' alt='restar' width={27} height={32} className='hover:bg-gris2'/>
      </div>
    </div>
  )
}

export default ItemCart;
