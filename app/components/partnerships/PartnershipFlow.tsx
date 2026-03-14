import Image from "next/image"


export default function PartnershipFlow() {
  return (
    <section className="bg-[#f5f1e6] py-28 text-black    text-center">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12">
          How to Partner with Us
        </h2>

        <div className="w-full">

        <Image
                          src="/Group (1).svg"
                          alt="Logo"
                          className="w-full"
                          width={100}
                          height={48}
                          priority
                        />
        </div>


        <button className="mt-24 bg-yellow-400 px-8 font-semibold py-3 rounded-full">
          Contact Us
        </button>

      </div>
    </section>
  )
}