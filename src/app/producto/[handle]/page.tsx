export default function Producto({params}:{params: {handle: string}}) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-5xl">pagina Producto {params.handle}</h1>
    </div>
  );
}
