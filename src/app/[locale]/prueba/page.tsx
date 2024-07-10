export default function PruebaPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const user = searchParams?.user;
  return (
    <div className="min-h-screen justify-center items-center flex">
      <h1>Que onda {user ? user : "pa"}</h1>
    </div>
  );
}

// /prueba?user=Diego&name=JuanCarlos&age=24&age=15
