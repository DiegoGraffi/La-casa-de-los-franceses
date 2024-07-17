import { Link } from "@/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold font-vangeda text-gris1 text-center">
        Página <br />
        no escontrada
      </h2>
      <p className="font-bricolage text-gris2 mt-5">
        No encontramos la página que estabas buscando
      </p>
      <Link
        href="/"
        className="mt-5 bg-terciarioClaro text-primarioClaro p-5 rounded-[5px] rounded-tr-[20px] rounded-bl-[20px] hover:bg-terciarioPrincipal cursor-pointer transition-all ease-in-out duration-200 font-bricolage"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
