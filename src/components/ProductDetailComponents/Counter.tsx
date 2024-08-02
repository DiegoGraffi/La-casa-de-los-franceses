"use client";

type CounterProps = {
  stock: number | undefined;
  quantity: number;
  setQuantity: (v: number) => void;
};

export default function Counter({
  stock,
  quantity,
  setQuantity,
}: CounterProps) {
  const availableStock = stock ?? 0;

  const addOne = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    }
  };

  const removeOne = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex h-full max-h-[44px]">
      <button
        onClick={removeOne}
        className="px-[15px] py-[2px] text-gris6 bg-gris4 flex justify-center items-center rounded-l-full md:hover:bg-gris2 md:hover:text-gris4"
      >
        <p className="text-[24px] font-bricolage font-semibold">-</p>
      </button>

      <div className="px-[15px] py-[5px] bg-gris6 flex justify-center items-center w-[50px]">
        <p className="text-[24px]/[28px] text-gris2 font-bricolage font-semibold">
          {quantity}
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
