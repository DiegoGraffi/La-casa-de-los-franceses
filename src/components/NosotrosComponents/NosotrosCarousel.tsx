"use client";

import Image from "next/image";
import item1 from "@/assets/images/nosotros/item1.png";
import item2 from "@/assets/images/nosotros/item2.jpg";
import item3 from "@/assets/images/nosotros/item3.jpg";
import React, { useEffect, useState } from "react";
import deslizarIzq from "@/assets/images/nosotros/deslizarIzq.svg";
import deslizarDer from "@/assets/images/nosotros/deslizarDer.svg";
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
  const [transitioning, setTransitioning] = useState(false);

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setSelectedItem((prevItem) =>
        prevItem === 0 ? items.length - 1 : prevItem - 1
      );
    }, 200);
  };

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setSelectedItem((prevItem) =>
        prevItem === items.length - 1 ? 0 : prevItem + 1
      );
    }, 200);
  };

  useEffect(() => {
    setTransitioning(false);
  }, [selectedItem]);

  const currentTextColor = items[selectedItem].textColor;
  const currentBgColor = items[selectedItem].bgColor;
  return (
    <div className="w-full lg:max-w-[1600px] lg:mx-auto p-0 md:flex overflow-hidden md:h-[430px] rounded-bl-[30px] rounded-tr-[30px] mb-[50px] lg:mb-0">
      <div
        className="aspect-video w-full md:h-full md:w-[45%] relative overflow-hidden"
        style={{ backgroundColor: currentBgColor }}
      >
        <Image
          src={items[selectedItem].foto}
          alt={t("altMapa")}
          fill
          className={`w-full object-cover h-full transition-opacity ease-in-out duration-200 ${
            transitioning ? "opacity-50" : "opacity-100"
          }`}
        />
      </div>

      <div
        style={{ backgroundColor: currentBgColor }}
        className="flex flex-col justify-center items-start flex-1 h-auto p-[40px] shrink md:w-[60%]"
      >
        <div className="h-[250px] flex justify-center items-center overflow-hidden">
          <p
            className={`font-bricolage font-regular text-center text-[16px]/[24px] md:text-start lg:text-[18px]/[23px] lg:font-light transition-all ease-in-out duration-200 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{ color: currentTextColor }}
          >
            {items[selectedItem].text}
          </p>
        </div>
        <div className="lg:h-[20%] flex justify-center items-center mt-6 lg:m-0 w-full">
          <div className="flex items-center lg:gap-[50px] z-50 justify-between w-full">
            <div
              onClick={handlePrev}
              className="rounded-full bg-transparent hover:bg-[#c4b19d] transition-all ease-in-out duration-200 cursor-pointer"
            >
              <NosotrosArrow color={currentTextColor} />
            </div>

            <div className="flex items-center mx-[20px] lg:mx-[60px] lg:m-0">
              {items.map((_, index) => (
                <React.Fragment key={index}>
                  <div
                    style={{
                      backgroundColor:
                        selectedItem === index
                          ? currentTextColor
                          : "transparent",
                      border: "2px solid " + currentTextColor,
                    }}
                    className="w-[10px] h-[10px] rounded-full"
                  ></div>
                  {index < items.length - 1 && (
                    <hr
                      className="w-[30px] md:w-[50px] lg:w-[100px]"
                      style={{ borderColor: currentTextColor }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div
              onClick={handleNext}
              className="transform rotate-180 bg-transparent hover:bg-[#c4b19d] transition-all ease-in-out duration-200 rounded-full cursor-pointer"
            >
              <NosotrosArrow color={currentTextColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
