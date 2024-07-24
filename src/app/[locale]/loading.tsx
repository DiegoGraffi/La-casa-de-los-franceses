import React from "react";
import Image from "next/image";
import Loader from "@/assets/images/loader.gif";

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Image
        src={Loader}
        alt="Cargando..."
        width="150"
        height="150"
        priority
        quality={100}
      />
    </div>
  );
}

export default Loading;
