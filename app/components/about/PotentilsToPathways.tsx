"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

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

// Burst stroke angles around the top-right of the blob
const BURST_STROKES = [
  { angle: -20, length: 28, x: 62, y: 4 },
  { angle: -10, length: 34, x: 68, y: 2 },
  { angle:   2, length: 30, x: 73, y: 3 },
  { angle:  14, length: 26, x: 77, y: 7 },
  { angle:  26, length: 22, x: 80, y: 13 },
];

export default function PotentialToPathways() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FFFBEA" }}
    >
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >

        {/* ── Left: Blob image + burst ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className=" "
        >
            <Image
                                  src="/thinkingBoy1.jpg"
                                  alt=""
                                  className=" w-full"
                                  width={480}
                                  height={48}
                                  priority
            />
        </motion.div>

        {/* ── Right: Text ── */}
        <div className="max-w-lg">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight"
          >
            From Potential to Pathways
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="text-base sm:text-lg font-bold leading-snug mb-7"
            style={{ color: "#c8860a" }}
          >
            We don't just host programs — we build ecosystems for growth.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2"
          >
            At PDG, we don't just host programmes, initiatives, and events. We build pathways.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
            className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8"
          >
            Through leadership development, real-world exposure, community experiences, digital learning, and access to opportunity, we help Gen Z move from potential to purpose.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={5}
          >
            <p className="font-bold text-gray-900 text-sm sm:text-base mb-3">
              Our work cuts across:
            </p>
            <ul className="space-y-2">
              {[
                "Leadership formation and civic impact",
                "Skills for the future economy",
                "Lifestyle experiences that inspire growth and belonging",
                "Access to networks, capital, and global opportunities",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.7 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}