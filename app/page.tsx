"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion" 
import Image from "next/image";
import Footer2 from "./components/Footer";
import Curvedcarousel from "./components/PhotoCarousel";
import { usePathname } from "next/navigation";
import Link from "next/link";



// ─── Types ────────────────────────────────────────────────────────────────────
interface StatItem { value: string; label: string; }
interface PillarItem { title: string; color: string; textColor: string; }
interface ObjectiveItem { icon: string; title: string; description: string; }
interface MembershipItem { title: string; image: string; description: string; cta: string; ctaColor: string; }
interface RoleItem { title: string; description: string; cta: string; color: string; }

// ─── Animation Variants ───────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: EASE,
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

 const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
};

// ─── Reusable Section Wrapper ─────────────────────────────────────────────────
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker() {
  const items = ["Access", "Influence", "Vision", "Access", "Influence", "Vision", "Access", "Influence", "Vision", "Access", "Influence", "Vision"];
  return (
    <div className="bg-[#FFBF00] py-3 overflow-hidden border-y border-yellow-400/20">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase">
            <span className="text-[#1a1a1a] font-bold">{item}</span>
        
              <Image
                src="/Frame(2).png"
                alt="Logo"
                width={60}
                height={60}
                priority
              />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const pathname = usePathname();


  const link =[
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Partnership",
      href: "/partnerships"
    },
    {
      title: "Programs",
      href: "/programs"
    },
    {
      title: "Impact",
      href: "/Impact"
    }
]
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"}`}
    >
      <div className="w-full  bg-black flex px-4 sm:px-6 lg:px-8 items-center justify-between h-16">
        <div className="flex items-center  gap-2">
        <Link href="/">
          <Image
            src="/8747f582c9e681594f027831c0ac1db3309cf1a5.png"
            alt="Logo"
            width={90}
            height={40}
            priority
          />
        </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {link.map((item) => (
            <Link key={item.title} href={item.href} className={`text-sm font-medium  hover:text-yellow-500 ${pathname === item.href ? 'text-yellow-500' : 'text-white'}  transition-colors duration-200`}>{item.title}</Link>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors"
        >
          Become a Member
        </motion.button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-white my-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {link.map((item) => (
                <a key={item.title} href={item.href} className="text-sm font-medium  text-white hover:text-yellow-500 transition-colors duration-200">{item.title}</a>
              ))}
              <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold w-full">Discover Who We Are</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 mt-16 text-center relative overflow-hidden bg-white">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-yellow-100/60 rounded-full blur-3xl" />
      </div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight max-w-3xl mx-auto relative z-10"
      >
        Our{" "}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-yellow-400 relative  font-black "
        >
          Vision
            <Image
            src="/Vector433.svg"
            alt="Logo"
            className="absolute bottom-0 w-full left-0"
            width={120}
            height={100}
            priority
          />
          
        </motion.span>{" "}
        Fuels 2030,
        <br />Our Actions Build 2050
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto"
      >
        We are a youth-led movement for the next generation in leadership, entrepreneurship and lifestyle.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="mt-7 flex justify-center gap-3 flex-wrap"
      >
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#facc15" }}
          whileTap={{ scale: 0.97 }}
          className="bg-yellow-400 text-black px-7 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-yellow-200 transition-shadow"
        >
          Patner with us
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="border-2 border-gray-900 text-gray-900 px-7 py-3 rounded-full font-bold text-sm hover:bg-gray-900 hover:text-white transition-colors"
        >
          Apply for ZLC
        </motion.button>
      </motion.div>

     
    </section>
  );
}

// ─── Mission ──────────────────────────────────────────────────────────────────
function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <Section className="py-16 px-4 bg-white text-center">
      <motion.div ref={ref} variants={scaleIn} custom={0} className=" mx-auto mb-5 flex items-center justify-center">
       <Image
          src="/16bbf6db9cb6aacac1ebf479354966370898d6af.png"
          alt="Logo"
          width={120}
          height={100}
          priority
        />
      </motion.div>
      <motion.h2 variants={fadeUp} custom={1} className="text-2xl sm:text-3xl font-black text-gray-900 max-w-xl mx-auto">
        Raising The Pan-African Gen Z Leaders.
      </motion.h2>
      <motion.div variants={fadeUp} custom={2} className="mt-2 text-yellow-500 font-bold text-sm tracking-wide">
         To Innovate, Thrive and Lead with Excellence.
      </motion.div>
      <motion.p variants={fadeUp} custom={3} className="mt-5 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        Purpose-Drive Global (PDG) is a Nigeria-based Pan-African NGO creating pathways for GenZ leadership, learning, and lifestyle.       </motion.p>
      <motion.p variants={fadeUp} custom={3} className="mt-5 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        Half of the world’s population will be under 30 by 2030. PDG ensures young people are equipped to lead, innovate, and build Africa’s future today.
      </motion.p>
      <motion.button
        variants={fadeUp}
        custom={4}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors"
      >
        Learn More About PDG
      </motion.button>
    </Section>
  );
}

// ─── Three Pillars ────────────────────────────────────────────────────────────
const pillars: PillarItem[] = [
  { title: "Leadership", color: "bg-[#DDD4C2]", textColor: "text-black" },
  { title: "Learning", color: "bg-[#FFC805]", textColor: "text-black" },
  { title: "Lifestyle", color: "bg-[#007BFF38]", textColor: "text-gray-900" },
];

function Pillars() {
  return (
    <Section className="py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl sm:text-3xl font-black text-gray-900">Three Pillars, One Pathway</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-1 text-gray-500 text-sm max-w-md">A holistic framework designed to shape purpose-driven leaders across Africa.</motion.p>
          </div>
          <motion.button
            variants={fadeUp}
            custom={2}
            whileHover={{ scale: 1.04 }}
            className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold self-start sm:self-auto whitespace-nowrap"
          >
            Explore Programs
          </motion.button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  lg:w-[65%]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`${p.color} rounded-2xl p-6 gap-8 flex flex-col cursor-pointer transition-shadow hover:shadow-xl`}
            >
              <span className={`text-xl font-extrabold  ${p.textColor}`}>{p.title}</span>
              <Image
                src="/Frame.png"
                alt="Logo"
                width={120}
                height={100}
                priority
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Objectives ───────────────────────────────────────────────────────────────
const objectives: ObjectiveItem[] = [
  { icon: "⬆", title: "Raise", description: "We raise visionary Gen Z leaders across Africa by equipping them with the skills, mindset, and exposure needed to emerge as change agents in Media, Technology, and Entrepreneurship." },
  { icon: "🏆", title: "Lead", description: "We nurture the leadership capacity of young people, guiding them to take initiative, influence their communities, and lead with integrity and innovation." },
  { icon: "💡", title: "Empower", description: "We drive personal and collective transformation by fostering environments that unlock potential, inspire growth, and create lasting impact in underserved communities." },
  { icon: "📣", title: "Advocate", description: "We amplify the voices of young Africans by advocating for inclusive policies, systems, and opportunities that empower youth leadership and participation across sectors." },
];

function Objectives() {
  return (
    <Section className="py-16 px-4 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Our<br />Objectives
          </motion.h2>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ x: 4 }}
              className="group"
            >
              <div className="flex flex-col gap-3 mb-2">
                <Image
                  src="/Frame(1).png"
                  alt="Logo"
                  width={48}
                  height={48}
                  priority
                />
                <h3 className="text-white font-black text-lg">{obj.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{obj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Membership ───────────────────────────────────────────────────────────────
const memberships: MembershipItem[] = [
  {
    title: "General Membership",
    image: "/homeDard2.jpg",
    description: "Open to all youth; gain access to programs, events, mentorship, and opportunities. Connect with like-minded peers, develop your skills, and start building your path as a future Gen Z leader.",
    cta: "Become a Member",
    ctaColor: "bg-yellow-400 text-black",
  },
  {
    title: "ZLC – Leadership Club",
    image: "/homeDard1.jpg",
    description: "Invite-only members gain exclusive mentorship, early funding, and premium events. Connect with top leaders and innovators shaping Africa. Grow your skills, visibility, and impact in the Gen Z leadership ecosystem.",
    cta: "Apply for ZLC",
    ctaColor: "bg-yellow-400 text-black",
  },
];

 function Membership() {
  return (
    <Section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <motion.div variants={fadeUp} custom={0} className="text-yellow-500 font-bold text-xs tracking-widest uppercase mb-2">Get Involved</motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-2xl sm:text-3xl font-black text-gray-900">Join the Movement</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
            Take your place in shaping Africa’s Gen Z future. Become a member, support programs, or partner with us to create real impact.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-5">
          {memberships.map((m, i) => (
            <motion.div
              key={m.title}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden border bg-[#FFBF0024] p-5 border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <Image
                  src={m.image}
                  alt="Logo"
                  className="w-full h-48 object-cover"
                  width={300}
                  height={48}
                  priority
                />
              <div className="p-6">
                <h3 className="font-black text-gray-900 text-lg mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 h-24">{m.description}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`${m.ctaColor} px-5 py-2 rounded-full font-bold text-sm`}
                >
                  {m.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatCard({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#111] border border-gray-800 rounded-2xl p-5 text-center"
    >
      <div className="text-2xl sm:text-3xl font-black text-white">{value}</div>
      <div className="text-gray-500 text-xs mt-1">{label}</div>
    </motion.div>
  );
}

const reachStats: StatItem[] = [
  { value: "1k+", label: "Youth Impacted" },
  { value: "30.5M+", label: "Digital Reach" },
  { value: "25", label: "Active Partners" },
  { value: "8", label: "African Countries" },
];
const programStats: StatItem[] = [
  { value: "3", label: "Core Programs" },
  { value: "7", label: "Active in School" },
  { value: "10+", label: "Learning Events" },
  { value: "85%", label: "Satisfaction Rate" },
];
const ecosystemStats: StatItem[] = [
  { value: "40+", label: "Strategic Partners" },
  { value: "30+", label: "Collaborating NGOs" },
  { value: "60+", label: "Future Talent Hub" },
];

function Impact() {
  return (
    <Section className="py-16 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <motion.div variants={fadeUp} custom={0} className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-2">Our Impact</motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-2xl sm:text-3xl font-black text-white">From Potential to Transformation</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
             Our programs have transformed youth across Africa by creating leaders, unlocking skills, and providing opportunities.
          </motion.p>
          <motion.button
            variants={fadeUp}
            custom={3}
            whileHover={{ scale: 1.04 }}
            className="mt-4 bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold text-sm"
          >
            Read Our Impact Report
          </motion.button>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Reach &amp; Representation</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {reachStats.map((s, i) => <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.08} />)}
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Programs &amp; Engagement</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {programStats.map((s, i) => <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.08} />)}
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Network &amp; Ecosystem</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ecosystemStats.map((s, i) => <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.08} />)}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Africa Map / Role Section ────────────────────────────────────────────────
const roles: RoleItem[] = [
  { title: "Join", description: "Become part of our membership community or ZLC. ", cta: "Join Now", color: "bg-[#FFEFC9] text-black" },
  { title: "Support", description: "Help fund leadership development, skills training, and opportunities that expand impact across Africa.", cta: "Support PDG", color: "bg-yellow-400 text-black" },
  { title: "Partner", description: "Co-create initiatives, talent pipelines, and experiences that empower Africa’s next generation.", cta: "Partner With Us", color: "bg-gray-900 text-white" },
];

function AfricaRole() {
  return (
    <Section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* subtle africa map watermark */}
      <Image
                src="/Map.svg"
                alt="Logo"
                className="w-full"
                width={60}
                height={60}
                priority
              />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.h2 variants={fadeUp} custom={0} className="text-2xl sm:text-3xl font-black text-gray-900">Your Role in Africa's Gen Z Future</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
            Every leader needs a community. Every movement needs supporters. Find your place in ours.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${r.color} rounded-2xl p-6 flex gap-20 relative flex-col justify-between min-h-[180px] cursor-pointer`}
            >
              <div>
                <h3 className="font-black text-xl mb-2">{r.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed">{r.description}</p>
              </div>
              <h3>{r.cta}</h3>
              {/* <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-4 self-start px-4 py-1.5 rounded-full text-xs font-bold border ${r.color.includes("yellow") ? "border-black/20 bg-black/10 text-black" : "border-yellow-400/40 bg-yellow-400/10 text-yellow-400"}`}
              >
                {r.cta} →
              </motion.button> */}
              <div className="bg-white h-16 flex items-center justify-center rounded-full w-16 absolute -bottom-1 -right-3">
                <div className="bg-yellow-400 rounded-full h-10 w-10 flex items-center justify-center text-xs font-bold text-black">
                    <Image
                      src="/arrow-right.svg"
                      alt="Logo"
                      className=""
                      width={20}
                      height={20}
                      priority
                    />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Partners ─────────────────────────────────────────────────────────────────
const partnerNames = ["/Frame161.svg", "/Frame168.svg", "/Frame299.svg", "/Frame301.svg", "/Frame166.svg"];

function Partners() {
  return (
    <Section className="py-14 px-4 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.h2 variants={fadeUp} custom={0} className="text-xl sm:text-2xl font-black text-gray-900 text-center mb-2">
          Working Together for Scalable Impact
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="text-center text-gray-500 text-sm mb-8 max-w-lg mx-auto">
          We collaborate with visionary organisations to build the leadership, innovators, and opportunity for Africa's next generation.
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partnerNames.map((p, i) => (
            <motion.div
              key={p}
              variants={fadeIn}
              custom={i}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="text-gray-400 font-black text-lg sm:text-2xl tracking-tight hover:text-gray-800 transition-colors cursor-pointer opacity-60"
            >
               <Image
                      src={p}
                      alt="Logo"
                      className=""
                      width={120}
                      height={20}
                      priority
                    />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Newsletter / Footer ──────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      {/* Newsletter bar */}
      <Section className="py-10 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <motion.h3 variants={fadeUp} custom={0} className="font-black text-lg">Join Our Newsletter</motion.h3>
            <motion.p variants={fadeUp} custom={1} className="text-gray-400 text-sm mt-1">Subscribe to get updates with visionary insights for Africa's Gen Z.</motion.p>
          </div>
          <motion.div variants={fadeUp} custom={2} className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 sm:w-64 bg-gray-800 border border-gray-700 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow-400 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 text-black px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </Section>

      {/* Footer links */}
      <div className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-black text-black text-xs">PD</div>
              <span className="font-bold text-sm">Purpose Drive Global</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">Raising Pan-African Gen Z Leaders for 2030 and beyond.</p>
            <div className="flex gap-3 mt-4">
              {["𝕏", "in", "f", "▶"].map((s, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.2, color: "#facc15" }} className="text-gray-500 text-sm transition-colors">{s}</motion.a>
              ))}
            </div>
          </div>
          {[
            { title: "Organization", links: ["About PDG", "Our Team", "Impact Report", "Media"] },
            { title: "Programs", links: ["Leadership", "Learning", "Lifestyle", "ZLC Club"] },
            { title: "Connect", links: ["Membership", "Partner With Us", "Support Us", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-gray-500 text-xs hover:text-yellow-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-600 text-xs">
          <span>© 2024 Purpose Drive Global. All rights reserved.</span>
          <span>Typeset with ♥ for Africa's future.</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
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
      <Hero />
      <Curvedcarousel />
      {/* <InfinitePhotoCarousel
        images={[
          { src: "/img/photo1.jpg", alt: "Youth Summit",  rotate: -8, yOffset: 28 },
          { src: "/img/photo2.jpg", alt: "Two women",     rotate: -4, yOffset: 10 },
          { src: "/img/photo3.jpg", alt: "Speaker",        rotate: 0,  yOffset: 0  },
          { src: "/img/photo4.jpg", alt: "Student",        rotate: 4,  yOffset: 10 },
          { src: "/img/photo5.jpg", alt: "School kids",    rotate: 7,  yOffset: 22 },
          { src: "/img/photo6.jpg", alt: "Smiling girl",   rotate: 10, yOffset: 34 },
        ]}
        speed={55}
        cardWidth={260}
        cardHeight={380}
        pauseOnHover
      />
      <PhotoCarousel/> */}
      <Mission />
      <Pillars />
      <Objectives />
      <Ticker />
      <Membership />
      <Impact />
      <AfricaRole />
      <Partners />
      {/* <Footer /> */}
      <Footer2 />
    </main>
  );
}