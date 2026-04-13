"use client";

import React from "react";
import { Navbar } from "../page";
import Footer2 from "../components/Footer";
import Hero from "../components/Hero";
import { MembershipCards, MembershipItem } from "../components/Card";
import { useGetEventsQuery } from "../redux/strapiApi";

const Page = () => {
  const { data, isLoading, isError } = useGetEventsQuery()
  console.log(data);



  const memberships: MembershipItem[] = data?.data?.map((event) => {
    const descriptionText = event.description
      .map((block) => block.children.map((c) => c.text).join(" "))
      .join("\n");

    const imageUrl =
      event.coverImage?.formats.medium?.url || event.coverImage?.url || "/placeholder.jpg";

    return {
      title: event.Title,
      slug: event.slug,
      description: descriptionText,
      image: imageUrl,
    };
  });

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
        imageSrc="/homeDard1.jpg"
        title="Our Impact"
        description="A growing record of programs, events, and initiatives empowering Africa’s next generation of leaders."
      />
      {
        isLoading ? (
          <div className="px-6 md:px-12 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-xl overflow-hidden shadow-md"
                >
                  {/* Image skeleton */}
                  <div className="w-full h-48 bg-gray-300" />

                  {/* Text skeleton */}
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
         : 
          isError ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-6">
              <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
                ⚠️
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                Something went wrong
              </h2>

              <p className="text-gray-600 max-w-md mb-6">
                We couldn’t load the events right now. It might be a network hiccup or server issue.
              </p>

              <button
                onClick={() => window.location.reload()}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Retry
              </button>
            </div>
          )
         :
        <MembershipCards items={memberships} />}
      <Footer2 />
    </div>
  );
};

export default Page;