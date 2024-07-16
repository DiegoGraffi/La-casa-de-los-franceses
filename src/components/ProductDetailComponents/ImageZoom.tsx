"use client";

import InnerImageZoom from "react-inner-image-zoom";

type ImageZoomProps = {
  imageUrl: string;
};

export default function ImageZoom({ imageUrl }: ImageZoomProps) {
  return (
    <InnerImageZoom
      src={imageUrl}
      zoomSrc={imageUrl}
      zoomType="hover"
      zoomPreload={true}
      zoomScale={2}
      className="border w-full h-full flex justify-center items-center"
    />
  );
}
