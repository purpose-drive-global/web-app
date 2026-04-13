'use client'
import React from 'react'
import Hero from '../components/Hero'
import { Navbar } from '../page'
import CTASection from '../components/programs/CTA'
import Footer2 from '../components/Footer'
import { Objectives  } from '../components/programs/ResusableOblectives'
import CurvedCarousel from '../components/PhotoCarousel'

const page = () => {

    const objectives = [
  {
    image: "/Frame.png",
    title: "Gen Z Summit Africa",
    description:
      "Flagship leadership, media, tech & entrepreneurship summit.",
  },
  {
    image: "/Frame.png",
    title: "PDG Leadership Institute",
    description: "Structured leadership development programs",
  },
  {
    image: "/Frame.png",
    title: "Gen Z Shapers",
    description:
      "Leadership pipeline for underserved communities",
  },
  {
    image: "/Frame.png",
    title: "Leadership Tours",
    description: "Real-world exposure to institutions & changemakers",
  },
]
const objectives3 = [
  {
    image: "/Frame.png",
    title: "Gen Z Happy Hour Show",
    description:
      "Monthly conversations on Gen Z’s lifestyle and more",
  },
  {
    image: "Frame.png",
    title: "Gen Z Nation",
    description: "Community of 1,000+ Gen Z leaders across Media, Tech & Entrepreneurship",
  },
  {
    image: "/Frame.png",
    title: "Gen Z Nation magazine",
    description:
      "Celebrating young African leaders",
  },
  {
    image: "/Frame.png",
    title: "ZLC Members Club",
    description: "Inner circle for high-potential leaders",
  },
]


const objectives2 = [
  {
    image: "/Frame.png",
    title: "PDG Talent Accelerator",
    description:
      "Skills, career & entrepreneurship tracks",
  },
  {
    image: "/Frame.png",
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
}
      `}</style>
      <Navbar />
      <Hero
        imageSrc="/carousel5.jpg"
        title="Programs & Initiatives"
        description="Leadership. Learning. Lifestyle. All PDG initiatives are designed around four core pillars that shape how we raise, lead, empower and advocate for Africa’s Gen Z leaders."
      />
        <Objectives
            heading="Leadership"
            subheading="Raising bold, ethical, and capable leaders for Africa."
            text="Through structured exposure, mentorship, and civic engagement, we develop young leaders prepared to shape institutions, industries, and communities."
            items={objectives}
            image='/Frame(1).png'
        />
        <Objectives
            heading="Learning"
            subheading="Equipping Gen Z with skills for the future economy."
            text="We provide practical, future-ready learning experiences that strengthen career readiness, innovation, and entrepreneurship."
            items={objectives2}
            image='/Frame.svg'
        />
        <Objectives
            heading="Lifestyle & Community"
            subheading="Building belonging, inspiration, and high-impact networks."
            text="Beyond skills and leadership, we create experiences that inspire growth, connection, and visibility for young African leaders."
            items={objectives3}
            image='/Clippathgroup(3).svg'
        />
        {/* <Objectives /><Objectives /><Objectives /> */}
        <CTASection/>
        <Footer2/>
    </div>
  )
}

export default page
