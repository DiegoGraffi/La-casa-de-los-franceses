"use client";

import Link from "next/link";
import AgeConfirmationModal from "@/components/AgeConfirmationModal";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <AgeConfirmationModal />
      <h1 className="text-5xl">pagina principal</h1>
    </div>
  );
}
