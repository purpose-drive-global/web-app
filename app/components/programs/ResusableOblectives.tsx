import { motion, useInView, Variants } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

interface ObjectiveItem {
  icon?: string
  image?: string
  title: string
  description: string
}

interface ObjectivesProps {
  heading: string
  subheading?: string
  text?: string
  image?: string
  items: ObjectiveItem[]
  bgColor?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function Objectives({
  heading,
  subheading,
  text,
  image,
  items,
  bgColor = "bg-[#FFFBEA]",
}: ObjectivesProps) {
  return (
    <Section className={` mt-10 py-16 px-4 ${bgColor}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

        {/* Heading */}
        <div className="lg:col-span-2 px-5">
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-black text-black leading-tight"
          >
            {heading}
          </motion.h2>

          {subheading && (
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-[#BE7F00] my-5"
            >
              {subheading}
            </motion.p>
          )}
          {text && (
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-sm "
            >
              {text}
            </motion.p>
          )}
        </div>

        {/* Items */}
        <div className="lg:col-span-3 grid grid-cols-1 px-5 sm:grid-cols-2 gap-6">
          {items.map((obj, i) => (
            <motion.div
              key={obj.title}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ x: 4 }}
              className="group"
            >
              <div className="flex flex-col gap-3 mb-2">

                {/* Image or Icon */}
                {image ? (
                  <Image
                    src={image}
                    alt={'icon'}
                    width={48}
                    height={48}
                  />
                ) : (
                  <span className="text-2xl">{obj.icon}</span>
                )}

                <h3 className="text-black font-black text-lg">
                  {obj.title}
                </h3>
              </div>

              <p className="text-black text-sm leading-relaxed">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  )
}