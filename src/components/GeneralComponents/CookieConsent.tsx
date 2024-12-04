"use client";

import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { usePathname } from "next/navigation";

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const checkCookie = async () => {
      const consent = await hasCookie("localConsent");
      setShowConsent(!consent);
    };
    checkCookie();
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "true", {});
  };

  if (!showConsent) {
    return null;
  }

  let consentText = "This website uses cookies to improve user experience.";
  let acceptText = "Accept";

  if (pathname.includes("/es")) {
    consentText =
      "Este sitio utiliza cookies para mejorar la experiencia del usuario.";
    acceptText = "Aceptar";
  } else if (pathname.includes("/fr")) {
    consentText =
      "Ce site utilise des cookies pour améliorer l'expérience utilisateur.";
    acceptText = "Accepter";
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[999] pointer-events-auto flex items-center justify-center">
      <div className="fixed bottom-0 left-0 right-0 w-full flex flex-col items-center justify-center px-4 py-8 bg-white shadow-lg z-50 md:flex-row md:justify-between md:px-8">
        <span className="text-dark text-base mb-4 md:mb-0 md:mr-4 text-center">
          {consentText}
        </span>
        <button
          className="bg-green-500 py-2 px-8 rounded text-white hover:bg-green-600 transition duration-300"
          onClick={acceptCookie}
        >
          {acceptText}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
