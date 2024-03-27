import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-[100%] lg:h-[842px] relative">
      <div className="z-10 container mx-auto flex">
        <div>
          <Image
            src="/images/logoportada.png"
            alt="logo"
            width={182}
            height={148}
            loading="eager"
            decoding="async"
            className="mt-[41px]"
          />
          <h1 className="absolute h-[348px] mt-[200px] font-vangeda text-[150px]/[117px] text-white">
            Elegí el vino,
            <br /> nosotros te lo
            <br /> llevamos
          </h1>
        </div>
      </div>
      <div className="h-full">
        <div className="w-full h-full container mx-auto">
          <Image
            src="/images/estrella.png"
            alt="logo"
            width={280}
            height={280}
            loading="eager"
            decoding="async"
            className="bottom-0 right-[20%] absolute translate-y-[50%]"
          />
        </div>
        <Image
          src="/images/portada.jpg"
          alt="imagen hero"
          quality={100}
          loading="eager"
          decoding="async"
          className="object-cover -z-10 border-border-red-500"
          fill
        />
      </div>
    </div>
  );
}
