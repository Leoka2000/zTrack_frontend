"use client"
import React from "react";
export default function LetsConnect() {
  return (
    <div className="min-h-screen bg-transparent py-16 px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl  md:text-6xl lg:text-7xl font-bold leading-18">
            <span className="text-gray-900 grotesk">Let's Connect And</span>
            <br />
            <span style={{ color: '#82a816' }} className="grotesk">Power What's Next</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            Our team is here to help you charge forward with the right solutions reach out
            and let's start the conversation.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-0 mt-20">
          {/* Address */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 py-10">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 md:mb-0">
              Address
            </h2>
            <p className="text-gray-500 text-lg md:text-xl md:text-right">
              1425 Maple Street, 1425 Maple Street
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 py-10">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 md:mb-0">
              E Mail
            </h2>
            <a 
              href="mailto:hello@volthaus.com"
              className="text-gray-500 text-lg md:text-xl underline hover:text-gray-700 transition-colors"
            >
              hello@volthaus.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 py-10">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 md:mb-0">
              Phone
            </h2>
            <a 
              href="tel:+12548612190"
              className="text-gray-500 text-lg md:text-xl underline hover:text-gray-700 transition-colors"
            >
              +1 254 861 2190
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}