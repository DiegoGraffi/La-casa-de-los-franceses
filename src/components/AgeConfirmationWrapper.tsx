"use client";

import { useEffect, useState } from "react";
import AgeConfirmationModal from "./AgeConfirmationModal";
const Cookies = require("js-cookie");

export default function AgeConfirmationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(true);

  useEffect(() => {
    const ageConfirmed = Cookies.get("ageConfirmed");
    if (!ageConfirmed) {
      setIsAgeConfirmed(false);
    }
  }, []);

  return <>{isAgeConfirmed ? children : <AgeConfirmationModal />}</>;
}
