import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[842px] relative">
      <div className="z-10 container mx-auto flex">
        <div className="">
          <Image
            src="/images/logoportada.png"
            alt="logo"
            width={182}
            height={148}
            loading="eager"
            decoding="async"
            className="mt-[41px]"
          />
          <h1 className="absolute w-[1260px] h-[348px] mt-[200px] font-vangeda text-[150px]/[117px] text-white">
            Elegí el vino, nosotros te lo llevamos
          </h1>
          <Image
            src="/images/estrella.png"
            alt="logo"
            width={280}
            height={280}
            loading="eager"
            decoding="async"
            className="mt-[513.2px] ms-[1120px]"
          />
        </div>
      </div>
      <Image
        src="/images/portada.jpg"
        alt="imagen hero"
        quality={100}
        loading="eager"
        decoding="async"
        className="object-cover -z-10"
        fill
      />
    </div>
  );
}
