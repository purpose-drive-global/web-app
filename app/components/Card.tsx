"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

export interface MembershipItem {
  title: string;
  image: string;
  description: string;
  ctaColor?: string;
}


// ─── Animation Variants ─────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
};

// ─── Section Wrapper ────────────────────────────────────────────────
function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Card Component ─────────────────────────────────────────────────
function MembershipCard({
    item,
    index,
    isLast,
  }: {
    item: MembershipItem;
    index: number;
    isLast: boolean;
  }) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      whileHover={{ y: -6 }}
      className={`rounded-2xl overflow-hidden border bg-[#FFBF0024] p-5 border-gray-100 shadow-sm hover:shadow-xl transition-shadow ${
        isLast ? "flex  mt-10 mx-5 " : ""
      }`}
    >
      <Image
        src={item.image}
        alt={item.title}
        className="w-full"
        width={400}
        height={200}
      />

      <div className="p-6">
        <h3 className="font-black text-gray-900 text-lg mb-2">
          {item.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 h-24">
          {item.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`${
            item.ctaColor || "bg-yellow-400 text-black"
          } px-5 py-2 rounded-full font-bold text-sm`}
        >
          View Gallery
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Main Reusable Component ────────────────────────────────────────
export function MembershipCards({
  items,
  className = "",
}: {
  items: MembershipItem[];
  className?: string;
}) {
  return (
    <Section className={`py-16 px-4 bg-white mt-16 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-10 px-5`}>
          {items.slice(0,6).map((item, i) => (
            <MembershipCard
              key={item.title}
              item={item}
              index={i}
              isLast={i === items.length - 1}
            />
          ))}


        </div>
            {items[6] && (<MembershipCard
              key={items[6].title}
              item={items[6]}
              index={6}
              isLast={6 === items.length - 1}
             
            />)}
      </div>
    </Section>
  );
}