import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#E7E0CF] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center">

          {/* Rays */}
          <div className="absolute -top-6 right-28 flex gap-2 rotate-12">
            <span className="w-[3px] h-8 bg-yellow-500 rounded"></span>
            <span className="w-[3px] h-10 bg-yellow-500 rounded"></span>
            <span className="w-[3px] h-7 bg-yellow-500 rounded"></span>
            <span className="w-[3px] h-9 bg-yellow-500 rounded"></span>
            <span className="w-[3px] h-6 bg-yellow-500 rounded"></span>
          </div>

          {/* Blob container */}
          <div className="p-3 bg-yellow-500 rounded-[60%_40%_55%_45%/55%_60%_40%_45%]">
            <div className="overflow-hidden rounded-[60%_40%_55%_45%/55%_60%_40%_45%]">
            lol
              <Image
                src="/images/Frame 1.png"
                alt="students"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* TEXT SIDE */}
        <div className="max-w-xl">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Potential to Pathways
          </h2>

          <p className="text-[#C69214] text-lg font-medium mb-6">
            We don’t just host programs — we build ecosystems for growth.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            At PDG, we don’t just host programmes, initiatives, and events. We
            build pathways. Through leadership development, real-world exposure,
            community experiences, digital learning, and access to opportunity,
            we help Gen Z move from potential to purpose.
          </p>

          <p className="font-semibold text-gray-900 mb-3">
            Our work cuts across:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Leadership formation and civic impact</li>
            <li>Skills for the future economy</li>
            <li>Lifestyle experiences that inspire growth and belonging</li>
            <li>Access to networks, capital, and global opportunities</li>
          </ul>

        </div>
      </div>
    </section>
  );
}