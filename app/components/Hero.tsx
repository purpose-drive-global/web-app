import React from "react";
import Image from "next/image";

type HeroProps = {
  imageSrc: string;
  title: string;
  description: string;
  height?: string;
};

const Hero: React.FC<HeroProps> = ({
  imageSrc,
  title,
  description,
  height = "h-[85vh]",
}) => {
  return (
    <section className={`relative ${height} w-full`}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="absolute inset-0 top-16 w-full h-full object-cover"
      />

      <div className="absolute inset-0 top-16 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>

          <p className="text-lg text-gray-200">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;