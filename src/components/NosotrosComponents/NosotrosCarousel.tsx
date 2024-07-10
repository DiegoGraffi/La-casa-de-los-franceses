"use client";

import Image from "next/image";
import item1 from "../../../public/images/nosotros/item1.png";
import item2 from "../../../public/images/nosotros/item2.jpg";
import item3 from "../../../public/images/nosotros/item3.jpg";
import { useState } from "react";
import deslizarIzq from "../../../public/images/nosotros/deslizarIzq.svg";
import deslizarDer from "../../../public/images/nosotros/deslizarDer.svg";
import NosotrosArrow from "./NosotrosArrow";
import { useTranslations } from "next-intl";

export default function NosotrosCarousel() {
  const t = useTranslations("Nosotros");

  const items = [
    {
      foto: item1,
      text: t("carouselText1"),
      textColor: "#3A4A09",
      bgColor: "#E1E8C6",
    },
    {
      foto: item2,
      text: t("carouselText2"),
      textColor: "#F3EDC8",
      bgColor: "#BA7B61",
    },
    {
      foto: item3,
      text: t("carouselText3"),
      textColor: "#F3EDC8",
      bgColor: "#3A4A09",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  const handlePrev = () => {
    setSelectedItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  const handleNext = () => {
    setSelectedItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  const currentTextColor = items[selectedItem].textColor;

  return (
    <div className="w-full lg:max-w-[1600px] lg:mx-auto p-0 md:flex overflow-hidden md:h-[430px] rounded-bl-[30px] rounded-tr-[30px] mb-[50px] lg:mb-0">
      <div
        className="aspect-video w-full md:h-full md:aspect-[575/430] relative overflow-hidden"
        style={{ backgroundColor: items[selectedItem].bgColor }}
      >
        <Image
          src={items[selectedItem].foto}
          alt="mapa san juan"
          fill
          className="w-full object-cover h-full"
        />
      </div>

      <div
        style={{ backgroundColor: items[selectedItem].bgColor }}
        className={`bg-[${items[selectedItem].bgColor}] flex flex-col justify-center items-start flex-1 h-auto p-[40px] shrink`}
      >
        <div className="h-[250px] flex justify-center items-center overflow-hidden">
          <p
            className={`font-bricolage font-regular text-center text-[16px]/[24px] md:text-start lg:text-[18px]/[23px] lg:font-light text-[${items[selectedItem].textColor}]`}
          >
            {items[selectedItem].text}
          </p>
        </div>
        <div className="lg:h-[20%] flex justify-center items-center mt-6 lg:m-0 w-full">
          <div className="flex items-center lg:gap-[50px] border z-50 justify-between w-full">
            <div
              onClick={handlePrev}
              className="rounded-full bg-transparent hover:bg-[#c4b19d] transition-all ease-in-out duration-200 cursor-pointer"
            >
              <NosotrosArrow color={items[selectedItem].textColor} />
            </div>

            <div className="flex items-center mx-[20px] lg:mx-[60px] lg:m-0">
              <div
                style={
                  selectedItem === 0
                    ? {
                        backgroundColor: items[selectedItem].textColor,
                        border: "2px solid " + items[selectedItem].textColor,
                      }
                    : {
                        backgroundColor:
                          selectedItem === 0
                            ? items[0].textColor
                            : "transparent",
                        border: "2px solid " + items[selectedItem].textColor,
                      }
                }
                className={`w-[10px] h-[10px] rounded-full`}
              ></div>
              <hr
                className={`w-[30px] md:w-[50px] lg:w-[100px] border-[${currentTextColor}] z-50`}
              />
              <div
                style={
                  selectedItem === 1
                    ? {
                        backgroundColor: items[selectedItem].textColor,
                        border: "2px solid " + items[selectedItem].textColor,
                      }
                    : {
                        backgroundColor:
                          selectedItem === 1
                            ? items[1].textColor
                            : "transparent",
                        border: "2px solid " + items[selectedItem].textColor,
                      }
                }
                className={`w-[10px] h-[10px] rounded-full`}
              ></div>
              <hr
                className={`w-[30px] md:w-[50px] lg:w-[100px] border-[${currentTextColor}] z-50`}
              />
              <div
                style={
                  selectedItem === 2
                    ? {
                        backgroundColor: items[selectedItem].textColor,
                        border: "1px solid " + items[selectedItem].textColor,
                      }
                    : {
                        backgroundColor:
                          selectedItem === 2
                            ? items[2].textColor
                            : "transparent",
                        border: "2px solid " + items[selectedItem].textColor,
                      }
                }
                className={`w-[10px] h-[10px] rounded-full`}
              ></div>
            </div>

            <div
              onClick={handleNext}
              className="transform rotate-180 bg-transparent hover:bg-[#c4b19d] transition-all ease-in-out duration-200 rounded-full cursor-pointer"
            >
              <NosotrosArrow color={items[selectedItem].textColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
