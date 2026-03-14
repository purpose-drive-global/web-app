'use client'
import React from 'react'
import Hero from '../components/Hero'
import { Navbar } from '../page'
import CoCreation from '../components/partnerships/Co-creation'
import { Objectives } from '../components/partnerships/Objectives'
import PartnershipFlow from '../components/partnerships/PartnershipFlow'
import FinalcialPartnership from '../components/partnerships/FinalcialPartnership'
import CTASection from '../components/partnerships/CTASection'
import Footer2 from '../components/Footer'

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
}
      `}</style>
      <Navbar />
      <Hero
        imageSrc="/partnershipHero.jpg"
        title="Partner with PDG"
        description="Built on the belief that Africa's future belongs to bold, purpose-driven Gen Z leaders."
      />
        <CoCreation />
        <Objectives />
        <PartnershipFlow/>
        <FinalcialPartnership/>
        <CTASection/>
        <Footer2/>
    </div>
  )
}

export default page
