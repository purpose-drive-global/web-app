"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: EASE,
    },
  }),
};

export default function OurBeginning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FFFEF5" }}
    >
      {/* Bottom-right yellow corner accent */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none"
        style={{
          background: "#f5c200",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* ── Left: Text ── */}
        <div className="max-w-lg">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Our Beginning
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-base sm:text-lg font-bold leading-snug mb-8"
            style={{ color: "#c8860a" }}
          >
            A belief that Africa's future must be intentionally built.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6"
          >
            Purpose-Drive Global (PDG) was born from a simple but powerful
            belief: Africa's future will be built by empowered Gen Z leaders
            who are equipped, values-driven, and opportunity-ready.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="text-gray-700 text-sm sm:text-base leading-relaxed"
          >
            We exist to close the leadership, lifestyle, and learning gap
            amongst Gen Z leaders of African descent. What started as small
            community initiatives has evolved into a growing pan-African
            ecosystem shaping the next generation of innovators, entrepreneurs,
            creatives, and change makers.
          </motion.p>
        </div>

        {/* ── Right: Two photos ── */}
        <div className="relative flex items-start justify-center gap-10">
          {/* Photo 1 — taller, left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="relative shrink-0 rounded-2xl mt-10 overflow-hidden"
            style={{ width: "40%", aspectRatio: "3/4" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-1.jpg"
              alt="Two young women at the Gen Z Summit"
              className="w-full h-full object-cover mt-10"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
              }}
            />
            {/* placeholder */}
            <div
              className="absolute inset-0 items-end p-4 hidden"
              style={{ background: "linear-gradient(135deg,#2d1b00,#c86400)", display: "none" }}
            />
          </motion.div>

          {/* Photo 2 — shorter, right, offset down */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="relative shrink-0 rounded-2xl overflow-hidden  "
            style={{ width: "40%", aspectRatio: "3/4" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-2.jpg"
              alt="Speaker at the Gen Z Summit stage"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
              }}
            />
            {/* placeholder */}
            <div
              className="absolute inset-0 items-end p-4 hidden"
              style={{ background: "linear-gradient(135deg,#1a1a2e,#0f3460)", display: "none" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}