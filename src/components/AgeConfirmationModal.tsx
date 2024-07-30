"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/images/logoblanco.svg";
import divider from "@/assets/images/whiteDivider.svg";
import { useTranslations } from "next-intl";
const Cookies = require("js-cookie");

export default function AgeConfirmationModal() {
  const [showModal, setShowModal] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const t = useTranslations("Modal Edad")
  const handleConfirm = () => {
    const ageInfo = { confirmed: true, timestamp: new Date().toISOString() };
    Cookies.set("ageInfo", JSON.stringify(ageInfo), { expires: 1 });
    setShowModal(false);
    setShowMessage(false);
  };

  const handleDeny = () => {
    setShowMessage(true);
  };
  
  useEffect(() => {
    const storedData = Cookies.get("ageInfo");
    const ageData = storedData ? JSON.parse(storedData) : null;

    if (ageData && ageData.confirmed) {
      setShowModal(false);
    } else if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  if (!showModal) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000] px-[15px]">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="bg-terciarioClaro p-8 rounded-tr-[55px] rounded-bl-[55px] shadow-lg z-0 w-[603px] h-[490px] flex flex-col items-center justify-around">
        <Image src={logo} alt="logo" width={239} height={150} />
        <Image src={divider} alt="linea" width={406} height={2} />
        <h3 className="font-bricolage font-semibold text-[32px]/[38px] text-white text-center">
          {t("preguntaMayor")}
        </h3>
        {showMessage && (
          <p className="font-bricolage text-white text-center mt-4">
            {t("noMayor")}
          </p>
        )}
        <div className="flex flex-col items-center gap-3">
          <div>
            <button
              onClick={handleConfirm}
              className="font-bricolage font-semibold bg-white text-red-500 px-[38px] py-[10px] rounded-full justify-center items-center flex w-max transition-all ease-out duration-100 text-[18px]/[24px] hover:bg-primarioOscuro"
            >
              {t("confirmar")}
            </button>
          </div>
          <div>
            <button
              onClick={handleDeny}
              className="border border-solid border-white text-white px-[28px] py-[6px] rounded-full justify-center items-center flex w-max bg-transparent hover:bg-primarioOscuro active:bg-primarioClaro active:text-white disabled:border-primarioMuyClaro disabled:bg-transparent transition-all ease-out duration-300 focus:bg-primarioClaro focus:text-white font-bricolage font-light text-[14px]/[22px]"
            >
              {t("aunNo")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
