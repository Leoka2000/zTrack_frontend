'use client'

import React from "react";
import { Atom, UserCircle, MapPin } from "lucide-react";
import DotPatternBackground from "./utils/dot-pattern";
import BackgroundShades from "./utils/background-shades";

const GoalsSection: React.FC = () => {
  const cardContainerStyle = "relative rounded-3xl p-8 flex flex-col items-center text-center shadow-md overflow-hidden bg-[#CDFF4D]";

  const dotOverlay = (
    <>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,0,0,0.05) 0.5px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.03) 0.5px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
          imageRendering: "pixelated",
        }}
      />
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />
    </>
  );

  return (
    <section className="min-h-screen relative flex items-center">
      <DotPatternBackground />
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        
        <div className="mb-16 relative isolate  flex flex-col leading-14 items-center justify-center text-center text-4xl md:text-6xl">
          <BackgroundShades/>
          <h2 className=" font-medium leading-10 text-lime-950 mb-4 grotesk">
            Core Of Everything
          </h2>

               <h3 className="grotesk bg-gradient-to-r from-[#45ae89] to-[#d7f448] bg-clip-text font-medium text-transparent mb-2 md:text-6xl text-4xl">

          
            Our Goals
          </h3>

          <p className="text-muted-foreground  text-lg md:text-xl max-w-3xl mx-auto">
            ZTrack integrates rugged electronics with a land-first mindset
            to deliver livestock tracking that's precise, reliable, and built to 
            endure the toughest grazing seasons.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          <div className={cardContainerStyle}>
            {dotOverlay}
            <div className="relative z-10 flex flex-col items-center">
              <Atom className="w-16 h-16 text-gray-900 mb-6" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Investing in Innovation
              </h4>
              <p className="text-gray-800 text-base">
                We prioritize R&D to create smarter, power-efficient tracking solutions for remote pastures.
              </p>
            </div>
          </div>

          <div className={cardContainerStyle}>
            {dotOverlay}
            <div className="relative z-10 flex flex-col items-center">
              <UserCircle className="w-16 h-16 text-gray-900 mb-6" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Seamless Herd Visibility
              </h4>
              <p className="text-gray-800 text-base">
                We design intuitive map interfaces for effortless management of individual animals or whole herds.
              </p>
            </div>
          </div>

          <div className={cardContainerStyle}>
            {dotOverlay}
            <div className="relative z-10 flex flex-col items-center">
              <MapPin className="w-16 h-16 text-gray-900 mb-6" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Smart Range Safety
              </h4>
              <p className="text-gray-800 text-base">
                Transforming vast grazing lands into secure, monitored ranges through geo-fencing and alerts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoalsSection;