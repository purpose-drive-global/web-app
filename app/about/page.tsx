'use client'
import React from 'react'
import Hero from '../components/Hero'
import { Navbar } from '../page'
import Footer2 from '../components/Footer'
import OurBeginning from '../components/about/Beginning'
import PotentialToPathways from '../components/about/PotentilsToPathways'
import MovementInMotion from '../components/about/MovementInMotion'

const page = () => {



  return (
    <div>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200;300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { font-family: 'DM Sans', sans-serif; }

        h1,h2,h3,h4 {
        font-family: 'Bricolage Grotesque', sans-serif;
        }

        html {
        scroll-behavior: smooth;
        }`}</style>
      <Navbar />
      <Hero
        imageSrc="/compressed-balanced-3.jpg"
        title="Our Story"
        description="Built on the belief that Africa’s future belongs to bold, purpose-driven Gen Z leaders."
      />
      <OurBeginning/>
      <PotentialToPathways/>
      <MovementInMotion/>
      <Footer2/>
    </div>
  )
}

export default page
