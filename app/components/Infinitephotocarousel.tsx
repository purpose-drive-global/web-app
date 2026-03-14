"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface CarouselImage {
  src: string;
  alt: string;
  /** How much this card rotates (deg) — mimics the fanned-out look */
  rotate?: number;
  /** Vertical offset in px to create the arc/fan */
  yOffset?: number;
}

interface InfinitePhotoCarouselProps {
  images?: CarouselImage[];
  speed?: number;           // px per second, default 60
  gap?: number;             // px gap between cards, default 16
  cardWidth?: number;       // px, default 260
  cardHeight?: number;      // px, default 380
  pauseOnHover?: boolean;
  className?: string;
}

// ─── Default images (replace src with real paths) ────────────────────────────
const DEFAULT_IMAGES: CarouselImage[] = [
  { src: "/images/photo-1.jpg", alt: "Youth audience in colourful hijabs", rotate: -8,  yOffset: 28 },
  { src: "/images/photo-2.jpg", alt: "Two young women at conference",       rotate: -4,  yOffset: 10 },
  { src: "/images/photo-3.jpg", alt: "Speaker in orange dress",             rotate: 0,   yOffset: 0  },
  { src: "/images/photo-4.jpg", alt: "Engaged student in auditorium",       rotate: 4,   yOffset: 10 },
  { src: "/images/photo-5.jpg", alt: "School students in uniforms",         rotate: 7,   yOffset: 22 },
  { src: "/images/photo-6.jpg", alt: "Smiling girl at Gen Z Summit",        rotate: 10,  yOffset: 34 },
];

// ─── Gradient placeholder (shown when no real image src is available) ─────────
const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)",
  "linear-gradient(135deg,#2d1b00 0%,#7a3e00 50%,#c86400 100%)",
  "linear-gradient(135deg,#0a0a0a 0%,#2a2a2a 50%,#1a1a1a 100%)",
  "linear-gradient(135deg,#1a0030 0%,#4a0060 50%,#2a0040 100%)",
  "linear-gradient(135deg,#002a1a 0%,#005a30 50%,#004020 100%)",
  "linear-gradient(135deg,#1a1500 0%,#4a3c00 50%,#7a6000 100%)",
];

// ─── Single Card ──────────────────────────────────────────────────────────────
function PhotoCard({
  image,
  index,
  cardWidth,
  cardHeight,
}: {
  image: CarouselImage;
  index: number;
  cardWidth: number;
  cardHeight: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const rotate = image.rotate ?? 0;
  const yOffset = image.yOffset ?? 0;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        rotate: hovered ? 0 : rotate,
        y: hovered ? -16 : yOffset,
        scale: hovered ? 1.06 : 1,
        zIndex: hovered ? 30 : 10 - Math.abs(Math.round(rotate)),
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative flex-shrink-0 cursor-pointer"
      style={{ width: cardWidth, height: cardHeight }}
    >
      {/* Card shell */}
      <div
        className="w-full h-full rounded-[28px] overflow-hidden shadow-2xl"
        style={{
          boxShadow: hovered
            ? "0 32px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)"
            : "0 16px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Image */}
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.src}
            alt={image.alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          /* Placeholder when image fails / is a stub path */
          <div
            className="w-full h-full flex items-end p-4"
            style={{ background: PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length] }}
          >
            <span className="text-white/40 text-xs font-medium leading-snug select-none">
              {image.alt}
            </span>
          </div>
        )}

        {/* Subtle dark vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.45) 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

// ─── Infinite Track ───────────────────────────────────────────────────────────
export function InfinitePhotoCarousel({
  images = DEFAULT_IMAGES,
  speed = 60,
  gap = 20,
  cardWidth = 260,
  cardHeight = 380,
  pauseOnHover = true,
  className = "",
}: InfinitePhotoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isPaused = useRef(false);

  // Total width of one set of cards
  const setWidth = images.length * (cardWidth + gap);

  useAnimationFrame((_, delta) => {
    if (isPaused.current) return;
    const pxPerFrame = (speed * delta) / 1000;
    const current = x.get();
    // Seamless loop: when we've scrolled one full set, reset
    const next = current - pxPerFrame;
    x.set(next <= -setWidth ? next + setWidth : next);
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) isPaused.current = true;
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    isPaused.current = false;
  }, []);

  // Duplicate images enough times to fill + loop seamlessly
  const repeated = [...images, ...images, ...images];

  return (
    <div
      className={`relative w-full overflow-hidden bg-black select-none ${className}`}
      style={{ paddingTop: 48, paddingBottom: 48 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left / right edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #000000 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #000000 0%, transparent 100%)",
        }}
      />

      {/* Scrolling track */}
      <motion.div
        ref={trackRef}
        className="flex items-center"
        style={{ x, gap, paddingLeft: gap }}
      >
        {repeated.map((image, i) => (
          <PhotoCard
            key={`${image.alt}-${i}`}
            image={image}
            index={i % images.length}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Demo wrapper (remove in production) ─────────────────────────────────────
export default function InfinitePhotoCarouselDemo() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 py-16 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        h1 { font-family: 'Syne', sans-serif; }
      `}</style>

      <h1 className="text-white text-3xl sm:text-5xl font-black text-center max-w-xl leading-tight">
        Raising Pan-African{" "}
        <span className="text-yellow-400 italic">Gen Z</span> Leaders.
      </h1>
      <p className="text-gray-500 text-sm text-center max-w-sm">
        Hover over a card to pause. The carousel loops seamlessly.
      </p>

      <div className="w-full max-w-none">
        <InfinitePhotoCarousel
          speed={55}
          gap={20}
          cardWidth={260}
          cardHeight={380}
          pauseOnHover
        />
      </div>

      {/* Usage note */}
      <div className="mt-6 bg-gray-900 border border-gray-800 rounded-2xl p-5 max-w-lg w-full">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">Usage</p>
        <pre className="text-gray-300 text-xs leading-relaxed overflow-x-auto">{`import { InfinitePhotoCarousel } from "@/components/InfinitePhotoCarousel";

// Minimal — uses default placeholder images
<InfinitePhotoCarousel />

// With your real images
<InfinitePhotoCarousel
  images={[
    { src: "/img/photo1.jpg", alt: "Youth Summit", rotate: -6, yOffset: 20 },
    { src: "/img/photo2.jpg", alt: "Speaker",      rotate: 0,  yOffset: 0  },
    { src: "/img/photo3.jpg", alt: "Students",     rotate: 6,  yOffset: 20 },
  ]}
  speed={60}        // px/sec
  gap={20}          // px between cards
  cardWidth={260}   // px
  cardHeight={380}  // px
  pauseOnHover      // boolean
/>`}</pre>
      </div>
    </main>
  );
}