"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

type MarqueeProps = {
  images: string[];
};

export default function MarqueeComponent({ images }: MarqueeProps) {
  return (
    <div className="h-[300px]">
      <Marquee
        gradient
        pauseOnHover={false}
        className="overflow-hidden grid z-50"
      >
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="flex lg:pr-[100px] flex-col justify-center items-center h-[350px] mx-5 relative"
            >
              <div className="hidden lg:block">
                <Image
                  src={image}
                  className="object-contain lg:w-[200px] hover:scale-110 transition-all ease-in-out duration-200 saturate-0 opacity-60 hover:saturate-100 hover:opacity-100"
                  alt="logo"
                  width={200}
                  height={150}
                />
              </div>
              <div className="block lg:hidden">
                <Image
                  src={image}
                  className="object-contain w-[150px] hover:scale-110 transition-all ease-in-out duration-200 saturate-0 opacity-60 hover:saturate-100 hover:opacity-100"
                  alt="logo"
                  width={150}
                  height={100}
                />
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
