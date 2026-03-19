"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function MovementInMotion() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full  overflow-hidden">
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start"
      >

        {/* ── Left: Text ── */}
        <div className="max-w-md">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="text-3xl sm:text-4xl lg:text-5xl font-black  mb-4 leading-tight "
          >
            A Movement in Motion
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-base sm:text-lg font-bold leading-snug mb-10"
            style={{ color: "#f5c200" }}
          >
            Driven by volunteers, partners, and a bold continental vision.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className=" text-sm sm:text-base leading-relaxed mb-8"
          >
            We are a registered NGO powered by a volunteer-driven workforce, strategic partners, and a bold vision:
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className=" text-sm sm:text-base leading-relaxed mb-8"
          >
            To raise Africa's most influential generation of purpose-driven leaders.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
            className="mb-8"
          >
            <p className=" text-sm sm:text-base leading-relaxed">
              This is more than a community.
            </p>
            <p className=" text-sm sm:text-base leading-relaxed">
              This is a movement.
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={5}
            className=" text-sm sm:text-base leading-relaxed"
          >
            Powered by Purpose-Drive Educational Foundation.
          </motion.p>
        </div>

        {/* ── Right: Overlapping images ── */}
        <div className="relative h-[480px] sm:h-[520px]">

          {/* Top-right: large auditorium photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="absolute top-0 right-0 rounded-2xl overflow-hidden shadow-2xl"
            style={{ width: "75%", aspectRatio: "16/10" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Rectangle 102 (1).svg"
              alt="Large auditorium event"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                (e.currentTarget.nextSibling as HTMLElement).style.display = "block";
              }}
            />
            <div
              style={{
                display: "none",
                background: "linear-gradient(135deg,#1a0a00,#5c2e00)",
                width: "100%",
                height: "100%",
              }}
            />
          </motion.div>

          {/* Center-left: group photo with white border */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="absolute rounded-2xl overflow-hidden border-6 border-white"
            style={{
              
              width: "58%",
              aspectRatio: "4/5",
              bottom: "0",
              left: "4%",
              zIndex: 20,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Rectangle 103 (1).svg"
              style={{ scale: 1.25, }}
              alt="Group of young leaders at PDG event"
              className="w-full h-full rounded-2xl object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                (e.currentTarget.nextSibling as HTMLElement).style.display = "block";
              }}
            />
            <div
              style={{
                display: "none",
                background: "linear-gradient(135deg,#1a1500,#7a6000)",
                width: "100%",
                height: "100%",
              }}
            />
          </motion.div>

          {/* Bottom-right: PDG globe badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute  overflow-hidden"
            style={{
              width: 200,
              height: 200,
              bottom: "4%",
              right: "2%",
              zIndex: 30,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Mask group.svg"
              alt="PDG Globe Badge"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                (e.currentTarget.nextSibling as HTMLElement).style.display = "flex";
              }}
            />
            {/* Fallback text badge */}
            <div
              className="w-full h-full items-center justify-center flex-col gap-0.5"
              style={{ display: "none" }}
            >
              <span className=" text-[8px] font-bold tracking-widest uppercase">PDG</span>
              <span className="text-gray-500 text-[18px]">🌍</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}