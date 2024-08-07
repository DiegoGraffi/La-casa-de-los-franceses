"use client";
import { ReactNode, useEffect, useState } from "react";

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient === false) {
    return null;
  }

  return children;
}
