"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LenguajeIcon from "@/assets/images/navbar/lenguaje.svg";
import { useRouter, usePathname } from "next/navigation";

export default function BotonIdioma() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [newPathname, setNewPathname] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLanguage = (lang: "es" | "fr") => {
    const currentLocale = pathname.split("/")[1];

    console.log(`Current locale: ${currentLocale}, New locale: ${lang}`);

    if (currentLocale === lang) {
      console.log("El idioma seleccionado ya está activo");
      return;
    }

    const newPathname = `/${lang}${pathname.substring(
      currentLocale.length + 1
    )}`;
    console.log(`New pathname: ${newPathname}`);

    setNewPathname(newPathname);
    setMenuVisible(false);
  };

  useEffect(() => {
    if (newPathname) {
      console.log(`Navigating to: ${newPathname}`);
      router.push(newPathname);
      setNewPathname(null);
    }
  }, [newPathname, router]);

  const currentLocale = pathname.split("/")[1];

  return (
    <div className="relative">
      <Image
        src={LenguajeIcon}
        alt="lenguaje icon"
        onClick={toggleMenu}
        className="cursor-pointer scale-110"
      />
      {menuVisible && (
        <div className="absolute mt-2 bg-white border border-secundarioOscuro rounded-lg">
          <div className="p-2">
            <p
              className={`text-gris3 p-2 uppercase rounded-md hover:bg-gris5 cursor-pointer font-light ${
                currentLocale === "es" ? "bg-gris5" : ""
              }`}
              onClick={() => changeLanguage("es")}
            >
              Español
            </p>
          </div>
          <div className="p-2 pt-0">
            <p
              className={`text-gris3 p-2 uppercase rounded-md hover:bg-gris5 cursor-pointer font-light ${
                currentLocale === "fr" ? "bg-gris5" : ""
              }`}
              onClick={() => changeLanguage("fr")}
            >
              Français
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
