"use client";
import React from "react";
import PhoneMockup from "./PhoneMockup";
import DotPatternBackground from "./utils/dot-pattern";
import Image from "next/image";

export default function InnovationChargeHero() {
  return (
    <div className="relative isolate overflow-clip bg-transparent py-16">
      <DotPatternBackground />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-20">
            <div className="mb-12 ">
              <h1 className="text-lime-950 text-4xl md:text-6xl font-medium leading-tight mb-2">
                <span className="text-lime-950 grotesk">Innovation Fuels</span>
              </h1>
              <h2
                className="  text-4xl md:text-6xl font-medium grotesk leading-10"
                style={{ color: "#7fa008" }}
              >
                Every Herd
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              At ztrack, innovation means creating smart GPS solutions that
              respect the earth and empower shepherds. We are not just building
              trackers; we are bridging the gap between ancient traditions and
              the future of sustainable grazing.
            </p>

            <div className="pt-6">
              <p
                className="text-4xl md:text-5xl font-['Dancing_Script',cursive] mb-2"
                style={{ color: "#8b9d3a" }}
              >
                Erdei Zoltán
              </p>
              <p className="text-gray-500 text-base font-medium uppercase tracking-wider">
                Founder of ztrack
              </p>
            </div>
          </div>

        <div className="relative flex justify-center lg:justify-end items-center py-12">
  <div className="relative transform lg:scale-110 rounded-3xl overflow-hidden">

    <Image
      alt="imgmockup"
      src="/phone-mockup.png"
      width={400}
      height={400}
      className="w-full h-96 object-cover"
    />
    

    <div className="absolute inset-0 bg-black/30 pointer-events-none" />
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
