export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-5xl">pagina principal</h1>
    </div>
  );
}
