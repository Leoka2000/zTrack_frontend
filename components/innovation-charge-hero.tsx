import { Card } from "./ui/card";
import DotPatternBackground from "./utils/dot-pattern"
import React from 'react'

export default function InnovationChargeHero() {
  return (
    <div className="relative bg-traparent py-16">

      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
  
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl  lg:text-7xl font-bold leading-20 mb-2">
                <span className="text-lime-900 grotesk">Innovation Fuels</span>
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-[#7fa008] font-semibold grotesk leading-12" style={{ color: '#8b9d3a' }}>
                Every Charge
              </h2>
            </div>

      
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Innovation at Volthaus means creating smart solutions that make life easier, businesses stronger, and our planet cleaner. We're not just building chargers we're building a better future.
            </p>
 
            <div className="pt-4">
              <p className="text-4xl md:text-5xl font-['Dancing_Script',cursive] mb-2" style={{ color: '#8b9d3a' }}>
                Charles Leclerc
              </p>
              <p className="text-gray-500 text-base">
                CEO of VoltHaus
              </p>
            </div>
          </div>

          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=900&fit=crop"
                alt="Hand holding illuminated lightbulb"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}