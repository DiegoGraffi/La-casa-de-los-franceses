import Image from 'next/image';
import React from 'react';

type PasosCardProps = {
    image: string;
    number: number;
    title: string;
    description: string;
};

function PasosCard({
    image,
    number,
    title,
    description,
}: PasosCardProps) {
    return (
        <div className='w-[250px] text-center p-2 h-min flex flex-col gap-4'>
            <h3 className='font-bricolage text-[28px]/[34px] text-secundarioClaro'>{title}</h3>
            <div className='relative flex justify-center items-center h-[52px]'>
                <Image src={image} alt={title} width={52} height={52} className="z-0" />
                <div className='font-bold font-bricolage text-secundarioClaro text-[28px]/[34px] absolute z-10'>
                    {number}
                </div>
            </div>
            <p className='font-bricolage text-[14px]/[20px] text-secundarioClaro text-justify'>{description}</p>
        </div>
    );
}

export default PasosCard;