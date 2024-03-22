export default function Bodega({ params }: { params: { handle: string } }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-5xl">pagina Bodega {params.handle}</h1>
    </div>
  );
}
