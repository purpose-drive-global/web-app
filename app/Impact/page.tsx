import React from 'react'
import { MembershipCards, MembershipItem } from '../components/Card'
import { Navbar } from '../page'
import Footer2 from '../components/Footer'
import Hero from '../components/Hero'


const page = () => {

  const memberships: MembershipItem[] = [
  {
    title: "Gen Z Summit 1.0",
    image: "/Image (3).svg",
    description: "The inaugural Gen Z Summit brought together young leaders, innovators, and creators to explore leadership, media, technology, and entrepreneurship across Africa.",
  },
  {
    title: "Gen Z Summit 2.0",
    image: "/Image (3).svg",
    description: "Building on the momentum of the first summit, Gen Z Summit 2.0 expanded conversations around opportunity, collaboration, and the growing influence of Africa’s next generation.",
  },
  {
    title: "Gen Z Summit 3.0",
    image: "/Image (2).svg",
    description: "Gen Z Summit 3.0 continued the movement, convening emerging leaders, entrepreneurs, and changemakers for powerful conversations, networking, and future-focused collaboration.",
  },{
    title: "Gen Z Shapers — Mushin Edition",
    image: "/Image (2).svg",
    description: "The Gen Z Shapers program in Mushin empowered young people from underserved communities through leadership development, mentorship, and exposure to new opportunities.",
  },
  {
    title: "Gen Z Shapers — Lagos Edition",
    image: "/Image (2).svg",
    description: "This Lagos edition of Gen Z Shapers brought together aspiring young leaders for hands-on sessions focused on leadership, personal growth, and community impact.",
  },
  {
    title: "Gen Z Shapers — Ikorodu",
    image: "/Image (2).svg",
    description: "In Ikorodu, the Gen Z Shapers initiative engaged youth with leadership training, mentorship, and conversations designed to unlock their potential and inspire community change.",
  },
  {
    title: "Gen Z Shapers — Abuja (Durumi IDP Camp)",
    image: "/Image (2).svg",
    description: "At the Durumi IDP Camp in Abuja, Gen Z Shapers created a powerful space for displaced youth to engage in leadership development, empowerment sessions, and future-focused learning.",
  },
];

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
        title="Our Impact"
        description="A growing record of programs, events, and initiatives empowering Africa’s next generation of leaders."
      />
      <MembershipCards items={memberships} />
      <Footer2/>
    </div>
  )
}

export default page
