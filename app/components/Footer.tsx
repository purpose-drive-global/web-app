import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer2: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-14 pb-6">
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
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Left */}
        <div className="space-y-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
                      src="/8747f582c9e681594f027831c0ac1db3309cf1a5.png"
                      alt="Logo"
                      width={90}
                      height={40}
                      priority
                    />
            <h2 className="text-xl font-semibold">Purpose Drive Global</h2>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Programs</a>
            <a href="#" className="hover:text-white">Membership</a>
            <a href="#" className="hover:text-white">Impact</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 text-gray-300">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-xl w-full">
          <h3 className="text-xl font-semibold mb-2">
            Join Our Newsletter
          </h3>

          <p className="text-gray-400 text-sm mb-5">
            Receive the latest opportunities and insights for Africa’s Gen Z
            leaders
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
            />

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
        <p>Powered by Purpose-Drive Educational Foundation</p>

        <p>© 2026 PDG. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer2;