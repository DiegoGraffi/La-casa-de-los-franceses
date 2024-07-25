"use client";

import ImageZoom from "react-image-zooom";

interface Props {
  image: string;
}

export default function ImageZoomComponent({ image }: Props) {
  return (
    <div className="group border flex justify-center h-full relative p-2">
      <ImageZoom
        src={image}
        alt="A image to apply the ImageZoom plugin"
        width="100%"
        height="100%"
        zoom="150"
        className=" group-hover:aspect-square "
      />
    </div>
  );
}
