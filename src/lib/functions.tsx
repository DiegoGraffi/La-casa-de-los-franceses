export function handlePrice(price: string | number): {
  integerPart: string;
  decimalPart: string;
} {
  const priceString =
    typeof price === "number" ? price.toFixed(2) : parseFloat(price).toFixed(2);
  const [integerPart, decimalPart = "00"] = priceString.split(".");
  return { integerPart, decimalPart };
}
