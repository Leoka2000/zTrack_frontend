"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end">
      <div className="absolute inset-0 z-0">
        <Image
          src="/harvester.webp"
          alt="Herd grazing in harmony"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container py-12 px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="text-6xl md:text-7xl grotesk lg:text-8xl font-bold text-white mb-6 leading-24">
            GUIDED BY
            <br />
            NATURE &
            <br />
            <div className="flex items-center ms-5 gap-3">
              <div className="flex gap-2 mt-2">
                <div className="w-16 h-16 md:w-18 md:h-18 -ms-4 bg-neutral-600 rounded-2xl overflow-hidden relative border-3 border-neutral-200 shadow-lg transform -rotate-8">
                  <Image
                    src="/cube-photo1.avif"
                    alt="Livestock monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 md:w-18 md:h-18 -ms-4 bg-slate-600 rounded-2xl overflow-hidden relative border-3 border-neutral-200 shadow-lg transform rotate-24">
                  <Image
                    src="/cube-photo2.avif"
                    alt="Sheep on pasture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 md:w-18 md:h-18 -ms-5 bg-slate-600 rounded-2xl overflow-hidden relative border-3 border-neutral-200 shadow-lg transform -rotate-16">
                  <Image
                    src="/cube-photo3.avif"
                    alt="GPS activity sensor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-[#d7f448] grotesk">LIGHT</span>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Technology shouldn't pull us away from the earth it should lead us
            back. Protect your livestock and simplify your work with smart
            trackers designed for the rhythm of the land.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <Button className="text-lg h-11 w-44 font-semibold rounded-full transition-colors">
              <span className="mx-3">Get Started</span>
              <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowRight
                  size={48}
                  strokeWidth={1.75}
                  className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                />
              </span>
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-slate-800" />
                <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-slate-800" />
                <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-slate-800" />
              </div>
              <div className="text-sm text-gray-300">
                <div className="font-semibold">Securing 30,000+</div>
                <div className="text-gray-400">animals worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-10">
        <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full px-6 py-2 transition-colors flex items-center gap-2">
          Live Map
          <div className="w-3 h-3 bg-lime-400 rounded-full" />
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 transition-colors flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          VIEW DASHBOARD
        </button>
      </div>
    </section>
  );
}
