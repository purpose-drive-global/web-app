import React from 'react'
import Image from 'next/image'
import { Globe, LineChart, BadgeCheck, Building2, Lightbulb } from "lucide-react";

const CTASection = () => {

    type ImpactItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const impactItems: ImpactItem[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "1,000,000+ Active Members",
    description: "Building Africa’s largest youth-led leadership ecosystem.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "5M+ Youth Database",
    description:
      "Expanding access to learning and opportunity across the continent.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: "Thousands Trained Annually",
    description:
      "Scaling leadership development year after year.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Global Talent Pipelines",
    description:
      "Connecting African youth to world-class organizations.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Youth-Led Enterprises",
    description:
      "Fueling ventures that drive economic and social impact.",
  },
];


  return (
    <section className="bg-[#212121] py-28 relative"    >
      
    <Image
     src="/Clip path group (1).svg"
     alt="Logo"
     className="w-1/2 h-full absolute bottom-0 right-0"
     width={80}
     height={48}
     priority
    />
    <Image
     src="/Clip path group (2).svg"
     alt="Logo"
     className="w-1/2 h-full absolute top-0 -left-10"
     width={80}
     height={48}
     priority
    />

      <div className="max-w-4xl mx-auto px-6">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 text-center text-white">

          <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Our Impact Vision
        </h2>

        <p className="text-lg text-zinc-300 mb-2">
          Building Africa’s largest youth leadership ecosystem by 2030.
        </p>

        <p className="text-zinc-400 mb-16">
          By 2030, PDG is building:
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 max-w-4xl mx-auto">
          {impactItems.slice(0, 4).map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 text-white">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-sm max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom single item */}
        <div className="mt-16 flex justify-center">
          <div className="max-w-sm flex flex-col items-center text-center">
            <div className="mb-4 text-white">
              {impactItems[4].icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {impactItems[4].title}
            </h3>

            <p className="text-zinc-400 text-sm">
              {impactItems[4].description}
            </p>
          </div>
        </div>
      </div>
        </div>
      </div>

    </section>
  )
}

export default CTASection

