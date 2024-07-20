"use client";

import Lottie from "lottie-react";
import FlechaAnimation from "@/assets/animations/local/FlechaLocal.json";

export default function FlechaAbajo() {
  return (
    <div className="w-[62px] h-[52px] hidden lg:flex">
      <Lottie animationData={FlechaAnimation} />
    </div>
  );
}
