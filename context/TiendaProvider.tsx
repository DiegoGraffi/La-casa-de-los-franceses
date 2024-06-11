"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface TiendaContextProps {
  selectedItemCategory: string;
  setSelectedItemCategory?: React.Dispatch<React.SetStateAction<string>> | null;
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export const TiendaContext = createContext<TiendaContextProps | undefined>(
  undefined
);

export default function TiendaProvider({ children }: { children: ReactNode }) {
  const [selectedItemCategory, setSelectedItemCategory] = useState("");
  const [order, setOrder] = useState("");

  return (
    <TiendaContext.Provider
      value={{ selectedItemCategory, setSelectedItemCategory, order, setOrder }}
    >
      {children}
    </TiendaContext.Provider>
  );
}
