"use client"
import React from "react";

export default function LetsConnect() {
  return (
    <div className="min-h-screen bg-transparent px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
     
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium flex flex-col ">
            <span className="text-gray-900 grotesk ">Let's Connect And</span>
            <span className="grotesk bg-gradient-to-r from-[#428354] to-[#defe3e] bg-clip-text font-medium pb-2 text-transparent md:text-6xl text-4xl">Map Your Herd</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            Our team is here to help you deploy the ZTrackMap ecosystem. Reach out 
            to start monitoring your livestock with real-time GPS and activity insights.
          </p>
        </div>

        <div className="space-y-0 mt-20">
 
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 py-10">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 md:mb-0">
              Address
            </h2>
            <p className="text-gray-500 text-lg md:text-xl md:text-right">
              ZANE systems Ltd., Hungary
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 py-10">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 md:mb-0">
              E-Mail
            </h2>
            <a 
              href="mailto:info@zanesystems.com"
              className="text-gray-500 text-lg md:text-xl underline hover:text-gray-700 transition-colors"
            >
              info@zanesystems.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 py-10">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 md:mb-0">
              Phone
            </h2>
            <a 
              href="tel:+36302997777"
              className="text-gray-500 text-lg md:text-xl underline hover:text-gray-700 transition-colors"
            >
              +36 30 299 7777
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}