import React from 'react'
import Image from 'next/image'

const FinalcialPartnership = () => {
 return (
    <section className="bg-[#efe8d7] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-5 items-center">
        <Image
                                  src="/coin.svg"
                                  alt="Logo"
                                  className="w-full"
                                  width={80}
                                  height={48}
                                  priority
                                />

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Financial Partnership
          </h2>

          <p className="text-yellow-600 font-bold mb-6">
            Invest directly in youth leadership development.
          </p>
          <h3 className='text-gray-700 my-4'>
            If you would like to partner financially, you can support our initiatives through the account details below:
          </h3>

          <div className="text-gray-700 space-y-2">
            <p><strong>Bank Name:</strong> Moniepoint Microfinance Bank</p>
            <p><strong>Account Name:</strong> Purpose-Drive Educational Foundation – Purpose-Drive Global</p>
            <p className='text-blue-500'><strong className='text-gray-700'>Account Number:</strong> 6570507049</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default FinalcialPartnership


