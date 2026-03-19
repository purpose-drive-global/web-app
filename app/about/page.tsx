'use client'
import React from 'react'
import Hero from '../components/Hero'
import { Navbar } from '../page'
import CTASection from '../components/programs/CTA'
import Footer2 from '../components/Footer'
import { Objectives  } from '../components/programs/ResusableOblectives'
import OurBeginning from '../components/about/Beginning'
import PotentialToPathways from '../components/about/PotentilsToPathways'
import AboutSection from '../components/about/Other'
import MovementInMotion from '../components/about/MovementInMotion'

const page = () => {

    const objectives = [
  {
    image: "/frame.png",
    title: "Gen Z Summit Africa",
    description:
      "Flagship leadership, media, tech & entrepreneurship summit.",
  },
  {
    image: "/frame.png",
    title: "PDG Leadership Institute",
    description: "Structured leadership development programs",
  },
  {
    image: "/frame.png",
    title: "Gen Z Shapers",
    description:
      "Leadership pipeline for underserved communities",
  },
  {
    image: "/frame.png",
    title: "Leadership Tours",
    description: "Real-world exposure to institutions & changemakers",
  },
]
const objectives3 = [
  {
    image: "/frame.png",
    title: "Gen Z Happy Hour Show",
    description:
      "Monthly conversations on Gen Z’s lifestyle and more",
  },
  {
    image: "/frame.png",
    title: "Gen Z Nation",
    description: "Community of 1,000+ Gen Z leaders across Media, Tech & Entrepreneurship",
  },
  {
    image: "/frame.png",
    title: "Gen Z Nation magazine",
    description:
      "Celebrating young African leaders",
  },
  {
    image: "/frame.png",
    title: "ZLC Members Club",
    description: "Inner circle for high-potential leaders",
  },
]


const objectives2 = [
  {
    image: "/frame.png",
    title: "PDG Talent Accelerator",
    description:
      "Skills, career & entrepreneurship tracks",
  },
  {
    image: "/frame.png",
    title: "Career Readiness & Innovation Labs",
    description: "Hands-on learning and industry exposure",
  }
]


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
        imageSrc="/d0fe74a2dbe9cbc5fbcf3844022826447f010ba9.png"
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
