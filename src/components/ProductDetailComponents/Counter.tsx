"use client";

import { useState } from "react";

type CounterProps = {
  stock: number | undefined;
};

export default function Counter({ stock }: CounterProps) {
  const [amount, setAmount] = useState(1);
  const availableStock = stock ?? 0;

  const addOne = () => {
    if (amount < availableStock) {
      setAmount(amount + 1);
    }
  };

  const removeOne = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  console.log(stock);
  return (
    <div className="flex h-full">
      <button
        onClick={removeOne}
        className="px-[15px] py-[2px] text-gris6 bg-gris4 flex justify-center items-center rounded-l-full md:hover:bg-gris2 md:hover:text-gris4"
      >
        <p className="text-[24px] font-bricolage font-semibold">-</p>
      </button>

      <div className="px-[15px] py-[5px] bg-gris6 flex justify-center items-center w-[50px]">
        <p className="text-[24px]/[28px] text-gris2 font-bricolage font-semibold">
          {amount}
        </p>
      </div>

      <button
        onClick={addOne}
        className="px-[15px] py-[2px] text-gris6 bg-gris4 flex justify-center items-center rounded-r-full md:hover:bg-gris2 md:hover:text-gris4 "
      >
        <p className="text-[24px] font-bricolage font-semibold">+</p>
      </button>
    </div>
  );
}
