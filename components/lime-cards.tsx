'use client'

import React from "react";
import { Atom, UserCircle, MapPin } from "lucide-react";
import DotPatternBackground from "./utils/dot-pattern";

const GoalsSection: React.FC = () => {
  const cardStyle = {
    backgroundColor: "#CDFF4D",
  };

  return (
    <section className="min-h-screen relative bg-gray-50 flex items-center">
      <DotPatternBackground/>
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        
       
        <div className="mb-16  flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-lime-900 mb-4 grotesk">
            Core Of Everything
          </h2>

          <h3
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 grotesk"
            style={{ color: "#8BC34A" }}
          >
            Our Goals
          </h3>

          <p className="text-gray-600  text-lg md:text-xl max-w-3xl mx-auto">
            Volthaus combines cutting-edge technology with a sustainability-first mindset
            to deliver EV charging that's fast, flexible, and built to grow with your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div style={cardStyle} className="rounded-3xl p-8 flex flex-col items-center text-center  shadow-md">
            <Atom className="w-16 h-16 text-gray-900 mb-6" strokeWidth={1.5} />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Investing in Innovation
            </h4>
            <p className="text-gray-800 text-base">
              We prioritize R&D to create smarter, efficient EV solutions.
            </p>
          </div>

          <div style={cardStyle} className="rounded-3xl p-8 flex flex-col items-center text-center shadow-md">
            <UserCircle className="w-16 h-16 text-gray-900 mb-6" strokeWidth={1.5} />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Seamless User Experience
            </h4>
            <p className="text-gray-800 text-base">
              We design intuitive, customizable interfaces for effortless charging.
            </p>
          </div>

          <div style={cardStyle} className="rounded-3xl p-8 flex flex-col items-center text-center shadow-md">
            <MapPin className="w-16 h-16 text-gray-900 mb-6" strokeWidth={1.5} />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Charging Hubs
            </h4>
            <p className="text-gray-800 text-base">
              Transforming parking into efficient service hubs for EV drivers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
