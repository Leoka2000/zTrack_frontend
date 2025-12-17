"use client";

import React from "react";
import { Card } from "./ui/card";

export default function GreenFutureHero() {
  return (
    <div className="relative py-24">
      <div className="mx-auto ">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=900&fit=crop"
                alt="Wind turbines on green hills"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="mb-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2  grotesk text-neutral-100 ">
                <span className="text-lime-900 grotesk font-bold">Advancing Green</span>
              </h1>
              <h2
                className="text-5xl md:text-6xl lg:text-7xl leading-12 grotesk font-bold"
                style={{ color: "#7fa008" }}
              >
                For Our Future
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-1"
                  style={{ backgroundColor: "#7fa008" }}
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
                  Expanding smart EV infrastructure.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-1"
                  style={{ backgroundColor: "#7fa008" }}
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
                  Lowering emissions with clean energy.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-1"
                  style={{ backgroundColor: "#7a9b2e" }}
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
                  Solutions that serve both people and planet.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              We aim to create a world where electric vehicles are seamlessly
              integrated into everyday life paving the way for a cleaner,
              smarter, and more efficient future driven by sustainable energy
              and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
