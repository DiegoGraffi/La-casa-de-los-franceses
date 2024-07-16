"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LenguajeIcon from "../../../public/images/navbar/lenguaje.svg";
import { useRouter, usePathname } from 'next/navigation';

export default function BotonIdioma() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [newPathname, setNewPathname] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLanguage = (lang: 'es' | 'fr') => {
    const currentLocale = pathname.split('/')[1];

    console.log(`Current locale: ${currentLocale}, New locale: ${lang}`);

    if (currentLocale === lang) {
      console.log("El idioma seleccionado ya está activo");
      return;
    }

    const newPathname = `/${lang}${pathname.substring(currentLocale.length + 1)}`;
    console.log(`New pathname: ${newPathname}`);

    setNewPathname(newPathname);
    setMenuVisible(false);
  };

  useEffect(() => {
    if (newPathname) {
      console.log(`Navigating to: ${newPathname}`);
      router.push(newPathname);
      setNewPathname(null); // Reset the state after navigating
    }
  }, [newPathname, router]);

  const currentLocale = pathname.split('/')[1];

  return (
    <div className="relative">
      <Image
        src={LenguajeIcon}
        alt="lenguaje icon"
        onClick={toggleMenu}
        className="cursor-pointer"
      />
      {menuVisible && (
        <div className="absolute mt-2 bg-white border border-secundarioOscuro rounded-lg shadow-lg">
          <div className="px-2 py-1">
            <p
            className={`text-gris2 px-2 py-1 uppercase hover:bg-gray-100 cursor-pointer font-light ${currentLocale === 'es' ? 'bg-gray-100' : ''}`}
            onClick={() => changeLanguage('es')}
          >
            Español
          </p>
          </div>
          <div className="px-2 py-1">
             <p
            className={`text-gris2 px-2 py-1 uppercase hover:bg-gray-100 cursor-pointer font-light ${currentLocale === 'fr' ? 'bg-gray-100' : ''}`}
            onClick={() => changeLanguage('fr')}
          >
            Français
          </p>
          </div>
         
        </div>
      )}
    </div>
  );
}
