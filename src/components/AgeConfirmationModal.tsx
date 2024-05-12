import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AgeConfirmationModal() {
  const [showModal, setShowModal] = useState(true);

  const handleConfirm = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="bg-terciarioClaro p-8 rounded-tr-[55px] rounded-bl-[55px] shadow-lg z-0 w-[603px] h-[490px] flex flex-col items-center justify-around">
            <Image src="/images/logoblanco.svg" alt="logo" width={239} height={150} />
            <Image
              src="/images/whiteDivider.svg"
              alt="linea"
              width={406}
              height={2}
            />
            <h3 className="font-bricolage font-semibold text-[32px]/[38px] text-white">
              ¿Eres mayor de 18 años?
            </h3>
            <div className="flex flex-col items-center gap-3">
              <div>
                <button
                  onClick={handleConfirm}
                  className="font-bricolage font-semibold bg-white text-red-500 px-[38px] py-[10px] rounded-full justify-center items-center flex w-max transition-all ease-out duration-100 text-[18px]/[24px] hover:bg-primarioOscuro"
                >
                  Confirmar
                </button>
              </div>
              <div>
                <Link href="/exit">
                  <button className="border border-solid border-white text-white px-[28px] py-[6px] rounded-full justify-center items-center flex w-max bg-transparent hover:bg-primarioOscuro active:bg-primarioClaro active:text-white disabled:border-primarioMuyClaro disabled:bg-transparent transition-all ease-out duration-300 focus:bg-primarioClaro focus:text-white font-bricolage font-light text-[14px]/[22px]">
                    Aún no
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
