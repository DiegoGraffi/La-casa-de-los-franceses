"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
  title: string;
  onAccept: () => void;
  onDecline: () => void;
  children: React.ReactNode;
};

export default function Modal() {
  return (
    <div>
      <p>Modal</p>
    </div>
  );
}
