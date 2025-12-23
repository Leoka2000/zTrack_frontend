"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function ProductBlog() {
  return (
    <div className="bg-gray-50 flex items-center justify-center mt-3">
      <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        

        <div className="md:w-5/6 relative">
          <div className="absolute top-6 z-10 left-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Dec 23, 2025
          </div>
          
          <Image
            fill
            src="/elveszett-borju.png"
            alt="Finding lost livestock with ZTrack"
            className="w-full h-full object-center object-cover min-h-[400px]"
          />
        </div>


        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/zanelogo.png"
                alt="ZANE Systems Logo"
                width={90}
                height={90}
                className="brightness-0"
                priority
              />
              <div>
                <h3 className="font-semibold text-gray-900">Success Stories</h3>
                <p className="text-sm text-gray-500">
                  Real stories from the pasture
                </p>
              </div>
            </div>
            <span className="bg-[#45ae89]/10 text-[#45ae89] border border-[#45ae89]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Field Case
            </span>
          </div>

          <div className="flex-grow">
            <h1 className="text-3xl grotesk md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Finding the Needle in the Grass: Locating Lost Calves
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              When a newborn calf wanders off or a member of the herd gets trapped in 
              rugged terrain, every minute counts. Traditional searching can take hours 
              of physical labor and guesswork.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              ZTrack G-100 changes the narrative. By utilizing real-time GPS coordinates 
              and Geofencing alerts, herders can now pinpoint an animal's exact 
              location instantly on their smartphone. This technology doesn't just 
              save time; it saves lives by ensuring that vulnerable animals are 
              brought back to the safety of the herd before nightfall.
            </p>
          </div>


          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
            <Button className="bg-transparent hover:bg-gray-50 text-gray-900 border border-gray-200 text-lg h-12 font-semibold rounded-full transition-all group px-2">
              <span className="mx-6">Read full story</span>
              <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowRight
                  size={48}
                  strokeWidth={1.75}
                  className=" text-neutral-200 transition-transform duration-300 w-3 h-4 group-hover:-rotate-45"
                />
              </span>
            </Button>
            
            <div className="flex items-center gap-2">
               <Image
                  src="/megosz.jpg"
                  alt="Agricultural Partner"
                  width={110}
                  height={110}
                  className="opacity-80 grayscale hover:grayscale-0 transition-all"
                  priority
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}