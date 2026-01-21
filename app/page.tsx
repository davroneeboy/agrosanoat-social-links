'use client'

import { useState, useEffect } from 'react'
import SocialLinks from '@/components/SocialLinks'
import Image from 'next/image'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-3 sm:px-4 py-6 sm:py-8">
      <div className="w-full max-w-2xl text-center space-y-8 sm:space-y-10 md:space-y-12">
        <header className="space-y-4 sm:space-y-5 md:space-y-6">
          <div
            className={`flex justify-center transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <Image
              src="/uzb-gerb.png"
              alt="O'zbekiston Respublikasi gerbi"
              width={200}
              height={200}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              priority
            />
          </div>
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
              Agrosanoatni rivojlantirish agentligi
            </h1>
          </div>
        </header>

        <SocialLinks />
      </div>
    </main>
  )
}

export default Home
