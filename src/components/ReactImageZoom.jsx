"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Figure = styled.figure`
  position: relative;
  display: inline-block;
  width: auto;
  background-position: 50% 50%;
  background-color: #fff;
  margin: 0;
  overflow: hidden;
  cursor: zoom-in;
  background-repeat: no-repeat;
  img {
    opacity: 0;
    transition: opacity 0s ease-in-out;
  }
  &:before {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0s ease-in-out;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #333;
    border-right-color: #333;
    border-bottom-color: #333;
    animation: ${rotate} 0s linear infinite;
    opacity: 1;
    transition: opacity 0s ease-in-out;
    z-index: 2;
  }
  &.loaded {
    min-height: auto;
    img {
      opacity: 1;
      transition: opacity 0s ease-in-out;
    }
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 0;
    }
  }
`;

const ErrorText = styled.p`
  width: 100%;
  text-align: center;
  border: 1px solid #f8f8f8;
  padding: 8px 16px;
  border-radius: 8px;
  color: #555;
`;

const Img = styled.img`
  transition: opacity 0s;
  display: block;
`;

export default function ReactImageZoom({
  zoom = "200",
  alt = "This is an imageZoom image",
  width = "100%",
  height = "auto",
  src,
  id,
  className,
  onError,
  errorContent = <ErrorText>There was a problem loading your image</ErrorText>,
}) {
  const [zoomed, setZoomed] = useState("1");
  const [position, setPosition] = useState("50% 50%");
  const [imgData, setImgData] = useState(null);
  const [error, setError] = useState(false);
  const figureClass = imgData ? "loaded" : "loading";
  const figureZoomed = zoomed === "0" ? "zoomed" : "fullView";
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  const zoomInPosition = (e) => {
    const zoomer = e.currentTarget.getBoundingClientRect();
    let x, y;
    if (e.type === "touchmove") {
      if (!isOverflowHidden) {
        setIsOverflowHidden(true);
        document.body.style.overflow = "hidden";
      }
      const touch = e.touches[0];
      x = ((touch.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((touch.clientY - zoomer.y) / zoomer.height) * 100;
    } else {
      x = ((e.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((e.clientY - zoomer.y) / zoomer.height) * 100;
    }
    setPosition(
      `${Math.max(0, Math.min(x, 100))}% ${Math.max(0, Math.min(y, 100))}%`
    );
  };

  const toggleZoomImage = (e) => {
    if (zoomed === "0") {
      setZoomed("1");
    } else {
      setZoomed("0");
      zoomInPosition(e);
    }
  };

  const handleClick = (e) => {
    toggleZoomImage(e);
  };

  const handleMove = (e) => {
    if (zoomed === "0") {
      zoomInPosition(e);
    }
  };

  const handleLeave = () => {
    setZoomed("1");
    setPosition("50% 50%");

    if (isOverflowHidden) {
      setIsOverflowHidden(false);
      document.body.style.overflow = "initial";
    }
  };

  useEffect(() => {
    setImgData(null);
    if (src === "" || src === null) {
      throw new Error(
        "Prop src must be defined when using ImageZoom component!"
      );
    }

    setZoomed("0");
    let img = new Image();
    img.addEventListener("load", () => {
      setTimeout(() => {
        setZoomed("1");
        setImgData(img.src);
      }, 0);
    });
    img.addEventListener("error", (error) => {
      setError(true);
      onError(error);
    });
    img.src = src;
  }, [onError, src]);

  if (error) {
    return <>{errorContent}</>;
  } else {
    return (
      <Figure
        id={id}
        className={[figureClass, figureZoomed, className].join(" ")}
        style={{
          backgroundImage: `url( ${zoomed === "0" && imgData ? imgData : ""} )`,
          backgroundSize: `auto ${zoom}%`,

          backgroundPosition: position,
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onMouseEnter={handleClick}
        onTouchMove={handleMove}
        onTouchEnd={handleLeave}
      >
        {imgData && (
          <Img
            id="imageZoom"
            src={imgData}
            alt={alt}
            style={{ opacity: zoomed }}
            width={width}
            height={height}
            className="h-full object-contain hover:aspect-square rounded-[10px] overflow-hidden"
          />
        )}
      </Figure>
    );
  }
}
