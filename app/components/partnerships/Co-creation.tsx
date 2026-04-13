import Image from "next/image";

export default function CoCreation() {
  return (
    <section className="bg-[#FFFEF5] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Co-creation. Not sponsorship.
          </h2>

          <p className="text-yellow-600 mb-4">
            At PDG, partnerships are not sponsorships. They are co-creation for real impact.
          </p>

        <h3 className="text-gray-600 mb-2">We collaborate with forward-thinking organizations to:</h3>
        
          <ul className="space-y-2 text-gray-600 mx-3">
            <li>• Build leadership pipelines for Africa's youth</li>
            <li>• Drive innovation, entrepreneurship, and social impact</li>
            <li>• Drive innovation and entrepreneurship</li>
            <li>• Expand access to opportunity across underserved communities</li>
          </ul>
        </div>

        <div className="relative mt-24">
          
          {/* <img
            src="/partners-meeting.jpg"
            className="relative rounded-xl shadow-xl"
          /> */}
           <Image
                    src="/Rectangle 102.svg"
                    className="absolute right-0 rounded-xl "
                    alt="Logo"
                    width={300}
                    height={200}
                    priority
                  />
          <Image
                    src="/manwithboys.jpg"
                    className="relative rounded-xl h-[300px] mt-10"
                    alt="Logo"
                    width={450}
                    height={200}
                    priority
                  />
                 
        </div>

      </div>
    </section>
  );
}