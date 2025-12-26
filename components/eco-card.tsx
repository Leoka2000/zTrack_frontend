"use client";

import React from "react";
import { Card } from "./ui/card";
import BackgroundShades from "./utils/background-shades";
import LanguageButton from "./language-btn";


export default function GreenFutureHero() {
  return (
    <div className="relative py-24">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=900&fit=crop"
                alt="Herd of sheep grazing on green hills"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 isolate relative">
            <BackgroundShades />
            <div className="mb-10">
              <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-2 grotesk ">
                <span className="text-lime-950 grotesk font-medium">Preserving Nature</span>
              </h1>
            
              <span
                className="grotesk bg-gradient-to-r from-[#45ae89] to-[#d7f448] bg-clip-text font-medium text-transparent md:text-6xl text-4xl"
              >
                With Precision
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-1 grotesk bg-gradient-to-r from-[#45ae89] to-[#d7f448]"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">
                  Real-time livestock location and health monitoring.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-1 grotesk bg-gradient-to-r from-[#45ae89] to-[#d7f448]"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">
                  Advanced geofencing to protect against theft and straying.
                </p>
           
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-1 grotesk bg-gradient-to-r from-[#45ae89] to-[#d7f448]"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">
                  Eco-friendly hardware powered by smart solar charging.
                </p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Our dream is that technology does not pull us away from the earth, 
              but gently guides us back to it. Through ztrack, we help farmers 
              reconnect with the rhythm of the land and the natural life of 
              their animals, ensuring a harmonious future for free-range farming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}