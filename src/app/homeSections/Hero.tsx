import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-[100%] h-[750px] relative">
      <div className="z-10 max-w-[1600px] px-[40px] mx-auto flex justify-center">
        <h1 className="absolute mt-[200px] font-vangeda text-[55px]/[62px] text-primarioClaro text-center bottom-[75px]">
          Elegí el vino, nosotros te lo llevamos
        </h1>
      </div>
      <div className="h-full">
        <div className="w-full h-full flex justify-center">
          <Image
            src="/images/estrella.png"
            alt="logo"
            width={112}
            height={112}
            loading="eager"
            decoding="async"
            className="bottom-0 absolute translate-y-[50%]"
          />
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
    </div>
  );
}
