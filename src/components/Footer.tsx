export default function Footer() {
  return (
    <div className="bg-black w-full p-5">
      <div className="container mx-auto flex flex-col text-white">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold mb-5 border-b">Redes</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>YouTube</p>
          </div>

          <div>
            <h3 className="font-bold mb-5 border-b">Contacto</h3>
            <p>Mail</p>
            <p>Telefono</p>
            <p>Whatsapp</p>
            <p>Ubicacion</p>
          </div>

          <div>
            <h3 className="font-bold mb-5 border-b">Atencion al cliente</h3>
            <p>Horarios</p>
          </div>

          <div>
            <h3 className="font-bold mb-5 border-b">Nosotros</h3>
            <h3>Blog</h3>
          </div>

          <div>
            <h3 className="font-bold mb-5 border-b">Horarios local</h3>
          </div>

          <div>
            <h3 className="font-bold mb-5 border-b">Otras</h3>
          </div>
        </div>

        <div className="flex gap-5 items-center py-5">
          <div>
            <h3 className="font-bold border-b">Medios de pago</h3>
          </div>
          <div>
            <p>Tarjetas</p>
            <p>Transferencia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
