import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AgeConfirmationModal() {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

  const handleAccept = () => {
    // Acepta la edad y redirige a la página principal
    setShowModal(false);
    router.push("/home");
  };

  const handleDecline = () => {
    // No acepta la edad y redirige a una página de advertencia o de salida
    setShowModal(false);
    router.push("/exit");
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <h2>Confirmación de edad</h2>
        <p>¿Eres mayor de 18 años?</p>
        <div className="modal-actions">
          <button onClick={handleAccept}>Sí</button>
          <button onClick={handleDecline}>No</button>
        </div>
      </div>
    </div>
  );
}
