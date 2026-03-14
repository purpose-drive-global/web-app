"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-black text-white">
      
      <Image
        src="/8747f582c9e681594f027831c0ac1db3309cf1a5.png"
        alt="Logo"
        width={120}
        height={40}
        priority
      />

      <ul className="hidden md:flex gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Initiatives</li>
        <li>Programs</li>
      </ul>

      <button className="bg-yellow-500 px-4 py-2 rounded-full text-black font-semibold">
        Become a Member
      </button>
    </nav>
  );
}