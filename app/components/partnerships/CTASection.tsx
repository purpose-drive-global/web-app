import React from 'react'
import Image from 'next/image'

const CTASection = () => {
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

          <h2 className="text-3xl font-semibold mb-4">
            Let's Build the Future Together
          </h2>

          <p className="text-gray-300 mb-6">
            Ready to co-create meaningful impact?
          </p>

          <p className='my-10'>
            Together, we don’t just support young people.
            <br />
              We build Africa’s leadership future.
              <br />
              
          </p>

          <p className="text-sm">
            Send an email to us: 
            <br />
             <a href='mailto:partnerships@purposedriveglobal.org' className='text-blue-500'>partnerships@purposedriveglobal.org</a>
          </p>

        </div>
      </div>

    </section>
  )
}

export default CTASection

