"use client";

import React, { useState } from "react";
import { Navbar } from "../page";
import Footer2 from "../components/Footer";
import Hero from "../components/Hero";
import { useGetTeamsQuery } from "../redux/strapiApi";

// ---- TYPES ----
interface TeamMember {
  name: string;
  role: string;
  section: string;
  image?: {
    url?: string;
  };
}

// ---- MODAL ----
const ImageModal = ({
  image,
  onClose,
}: {
  image: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <img
          src={image}
          alt="preview"
          className="w-full max-h-[90vh] object-contain rounded-xl"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// ---- CARD ----
const TeamCard = ({
  name,
  role,
  image,
  onClick,
}: any) => {
  const imageUrl = image?.url || "/placeholder.jpg";

  return (
    <div className="bg-[#FFBF0024] rounded-2xl p-4 text-center shadow-md hover:scale-105 transition">
      <div
        className="w-full h-60 rounded-xl overflow-hidden mb-4 bg-gray-200 cursor-pointer"
        onClick={() => onClick(imageUrl)}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="font-semibold text-black my-5">{name}</h3>
      <p className="text-sm text-black/70 mb-3">{role}</p>
    </div>
  );
};

// ---- SECTION ----
const TeamSection = ({
  title,
  members,
  onImageClick,
}: {
  title: string;
  members: TeamMember[];
  onImageClick: (img: string) => void;
}) => {
  if (!members.length) return null;

  return (
    <section className="px-6 md:px-12 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 ">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <TeamCard
            key={index}
            {...member}
            onClick={onImageClick}
          />
        ))}
      </div>
    </section>
  );
};

// ---- PAGE ----
const Page = () => {
  const { data, isLoading, isError } = useGetTeamsQuery();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 🔥 Normalize API response
  const team: TeamMember[] =
    data?.data?.map((item: any) => ({
      name: item.name,
      role: item.role,
      section: item.section,
      image: item.image,
    })) || [];

  // 🧩 Group by section
  const grouped = {
    board: team.filter((m) => m.section === "board"),
    chief: team.filter((m) => m.section === "chief"),
    executive: team.filter((m) => m.section === "executives"),
    officers: team.filter((m) => m.section === "officers"),
    volunteers: team.filter((m) => m.section === "volunteers"),
  };

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@200;300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { font-family: 'DM Sans', sans-serif; }

        h1,h2,h3,h4 {
          font-family: 'Bricolage Grotesque', sans-serif;
        }
      `}</style>

      <Navbar />

      <Hero
        imageSrc="/homeDard1.jpg"
        title="Meet Our Team"
        description="The minds, builders, and dreamers powering Purpose Drive Global."
      />

      {isLoading ? (
        <div className="px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl overflow-hidden shadow-md"
              >
                <div className="w-full h-48 bg-gray-300" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center py-20 text-center px-6">
          <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
            ⚠️
          </div>

          <h2 className="text-2xl font-semibold mb-2">
            Something went wrong
          </h2>

          <p className="text-gray-600 max-w-md mb-6">
            We couldn’t load our team right now. It might be a network hiccup or server issue.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Retry
          </button>
        </div>
      ) :  (
        <>
          <TeamSection title="Board of Directors" members={grouped.board} onImageClick={setSelectedImage} />
          <TeamSection title="Chief of Staff" members={grouped.chief} onImageClick={setSelectedImage} />
          <TeamSection title="Executive Team" members={grouped.executive} onImageClick={setSelectedImage} />
          <TeamSection title="Project Officers" members={grouped.officers} onImageClick={setSelectedImage} />
          <TeamSection title="Volunteers" members={grouped.volunteers} onImageClick={setSelectedImage} />
        </>
      )}

      {/* 🔥 MODAL RENDER */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <Footer2 />
    </div>
  );
};

export default Page;