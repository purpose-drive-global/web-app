"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

const images = [
  "/carousel1.png",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel4.png",
  "/carousel5.jpg",
  "/carousel6.jpg",
  "/carousel7.png",
];

export default function FilmCarousel() {
  const middle = Math.floor(images.length / 2);
  const [index, setIndex] = useState(middle);
  const scrollX = useRef(0);
  const threshold = 50; // pixels to move one image

  const containerRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(0);

  // Update image width to fill container
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setImageWidth(containerRef.current.offsetWidth * 0.25); // each image takes 25% of container width
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      scrollX.current += e.deltaX;
      if (scrollX.current > threshold) {
        setIndex((prev) => (prev + 1) % images.length);
        scrollX.current = 0;
      } else if (scrollX.current < -threshold) {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
        scrollX.current = 0;
      }
    }
  };

  return (
    <div
      ref={containerRef}
    className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] flex items-center justify-center overflow-hidden"
      onWheel={handleWheel}
    >
      <div className="relative w-full h-full perspective-[2000px]">
        {images.map((src, i) => {
          const position = ((i - index) % images.length + images.length) % images.length;
          const offset = position > images.length / 2 ? position - images.length : position;
          const distance = Math.abs(offset);

          let scale = 0.7;
          let yOffset = 0;

          if (distance === 0) {
            scale = 0.78;
            yOffset = 0;
          } else if (distance === 1) {
            scale = 0.85;
            yOffset = -10;
          } else if (distance === 2) {
            scale = 0.9;
            yOffset = -20;
          } else if (distance === 3) {
            scale = 0.95;
            yOffset = -30;
          }

          const opacity = distance > 4 ? 0 : 1;

          return (
            <motion.div
              key={i}
              animate={{
                x: offset * (imageWidth * 0.8), // horizontal spacing scales with image width
                y: yOffset,
                scale,
                rotateY: offset * -25,
                opacity,
                zIndex: 100 - distance,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 30 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 md:px-2 -translate-y-1/2 flex items-center justify-center"
              style={{ width: `${imageWidth}px`, height: "80%" }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
                <Image src={src} alt="carousel image" fill className="object-cover" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}