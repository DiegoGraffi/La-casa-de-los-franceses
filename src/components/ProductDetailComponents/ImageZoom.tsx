"use client";

import InnerImageZoom from "react-inner-image-zoom";

type ImageZoomProps = {
  imageUrl: string;
};

export default function ImageZoom({ imageUrl }: ImageZoomProps) {
  return <InnerImageZoom src={imageUrl} zoomSrc={imageUrl} />;
}
