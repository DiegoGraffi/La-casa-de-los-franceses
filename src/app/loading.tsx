import React from 'react';
import Image from 'next/image';

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Image 
        src="/images/loader.gif" 
        alt="Cargando..." 
        width='150'
        height='150'
        priority 
        quality={100} 
      />
    </div>
  );
}

export default Loading;
