"use client";
import { useState } from "react";
import Image from "next/image";
import { ScrollContainer } from "../../components/ScrollContainerClient";
import FsLightbox from "fslightbox-react";

type PhotoListProps = { photos: string[] };

export default function LightBox({ photos }: PhotoListProps) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const firstRow = photos.slice(0, Math.ceil(photos.length / 2));
  const secondRow = photos.slice(Math.ceil(photos.length / 2));

  function openLightboxOnSlide(index: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  }
  return (
    <div className="w-screen h-auto">
      <div className="flex max-w-[1600px] mx-auto space-x-3 overflow-x-scroll scrollbar-hide cursor-grab relative h-auto">
        <div className="h-full hidden lg:flex w-[300px] bg-gradient-to-r from-white to-transparent absolute z-50 touch-disabled left-0"></div>
        <div className="h-full hidden lg:flex w-[300px] bg-gradient-to-l from-white to-transparent absolute top-0 right-0 z-50 touch-disabled"></div>
        <ScrollContainer>
          <div className="w-max flex flex-col gap-[10px] left-0 border">
            <div className="flex gap-[10px] w-full">
              {firstRow.map((photo, index) => {
                return (
                  <div
                    key={index}
                    className="w-[200px] h-[200px] relative grid grid-rows-2 overflow-hidden"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => openLightboxOnSlide(index)}
                  >
                    <Image
                      src={photo}
                      alt="photo"
                      fill
                      className="object-cover hover:scale-110 transition-all ease-in-out duration-200"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex gap-[10px]">
              {secondRow.map((photo, index) => {
                const adjustedIndex = index + firstRow.length;
                return (
                  <div
                    key={index}
                    className="w-[200px] h-[200px] relative grid grid-rows-2 overflow-hidden"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => openLightboxOnSlide(adjustedIndex)}
                  >
                    <Image
                      src={photo}
                      alt="photo"
                      fill
                      className="object-cover hover:scale-110 transition-all ease-in-out duration-200"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={photos}
            slide={lightboxController.slide}
          />
        </ScrollContainer>
      </div>
    </div>
  );
}
