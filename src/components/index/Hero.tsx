'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const Hero = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Modern Marketplace for <span className="text-yellow-500">Unique Treasures</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              An online pawnshop platform connecting sellers and buyers. Sell faster, earn more, and discover one-of-a-kind items — all in one place.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-yellow-400 hover:bg-yellow-300 text-black text-lg px-8 py-4 rounded-xl shadow transition">
                Browse Items
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-400 text-white text-lg px-8 py-4 rounded-xl shadow transition">
                Start Selling
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-semibold">S</div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-semibold">B</div>
                <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs font-semibold">P</div>
              </div>
              <p className="text-sm text-gray-500">
                Trusted by hundreds of sellers, buyers & pawnshops
              </p>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-xl p-6 relative z-10 transform rotate-1">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/time.jpg"
                  alt="Vintage Watch"
                  width={280}
                  height={280}
                  className="rounded object-cover"
                />
                <Image
                  src="/clock.jpg"
                  alt="Antique Clock"
                  width={280}
                  height={280}
                  className="rounded object-cover"
                />
                <Image
                  src="/time.jpg"
                  alt="Vintage Watch 2"
                  width={280}
                  height={280}
                  className="rounded object-cover"
                />
                <Image
                  src="/clock.jpg"
                  alt="Antique Clock 2"
                  width={280}
                  height={280}
                  className="rounded object-cover"
                />
              </div>

              <div className="mt-4 bg-emerald-100 text-emerald-800 p-3 rounded flex justify-between items-center font-medium text-sm">
                <span>Vintage Watch</span>
                <span className="font-bold">$275.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-100/40 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
    </section>
  )
}

export default Hero
