import { UserRound, Search, Store } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white w-full p-4 absolute border">
      <div className="container mx-auto flex justify-between items-center py-[5px]">
        <Image
          src={logo}
          alt="Logo La Casa de los Franceses"
          className="h-[80px] object-contain"
        />
        <ul className="flex gap-5 font-light">
          <Link href={"#"} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro">Tienda</p>
            <hr className="w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
          <Link href={"#"} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro">Nosotros</p>
            <hr className="w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
          <Link href={"#"} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro">Membresia</p>
            <hr className="w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
          <Link href={"#"} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro">Local</p>
            <hr className="w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
          <Link href={"#"} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro">Blog</p>
            <hr className="w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
        </ul>

        <div className="flex gap-5"></div>
      </div>
    </div>
  );
}
