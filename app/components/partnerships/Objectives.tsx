import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion" 
import Image from "next/image";
import { useRef } from "react";


interface ObjectiveItem { icon: string; title: string; description: string; }

export function Objectives() {

    const objectives: ObjectiveItem[] = [
  { icon: "⬆", title: "Deep Gen Z Access", description: "A fast-growing community, members club (ZLC), and youth ecosystem across Africa." },
  { icon: "🏆", title: "Impact With Scale", description: "Programs designed to reach millions, not hundreds." },
  { icon: "💡", title: "Proven Engagement", description: "From summits and leadership programs to digital learning and community experiences." },
  { icon: "📣", title: "Authentic Trust", description: "Built from within the Gen Z community we serve." },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({ opacity: 1, transition: { duration: 0.5, delay: i * 0.1 } }),
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
};

// ─── Reusable Section Wrapper ─────────────────────────────────────────────────
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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


  return (
    <Section className="py-16 px-4 bg-[#FFFBEA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-black text-black  leading-tight">
            Why Partners Work With Us
          </motion.h2>
          <motion.p variants={fadeUp} custom={0} className="text-lg sm:text-xl  text-[#BE7F00] leading-tight">
            Access. Engagement. Scale. Trust.
          </motion.p>

        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ x: 4 }}
              className="group"
            >
              <div className="flex flex-col gap-3 mb-2">
                <Image
                  src="/frame (1).png"
                  alt="Logo"
                  width={48}
                  height={48}
                  priority
                />
                <h3 className="text-black font-black text-lg">{obj.title}</h3>
              </div>
              <p className="text-black text-sm leading-relaxed">{obj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}