import { UserRound, Search, Store } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-black w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white font-black">LCDLF</p>
        <ul className="text-white flex gap-5 font-light">
          <li>Tienda</li>
          <li>Nosotros</li>
          <li>Membresia</li>
          <li>Agenda</li>
          <li>Blog</li>
        </ul>

        <div className="flex gap-5">
          <UserRound color="white" />
          <Search color="white" />
          <Store color="white" />
        </div>
      </div>
    </div>
  );
}
