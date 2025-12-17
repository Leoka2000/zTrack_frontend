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
          alt="Hero background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container  py-12 px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="text-6xl md:text-7xl grotesk lg:text-8xl font-bold text-white mb-6 leading-24">
            POWER UP
            <br />
            WITH SMART
            <br />
            <div className="flex items-center ms-5 gap-3">
              <div className="flex gap-2 mt-2">
                <div className="w-16 h-16 md:w-18 md:h-18  -ms-4 bg-neutral-600 rounded-2xl overflow-hidden relative border-3 border-neutral-200 shadow-lg transform -rotate-8">
                  <Image
                    src="/card-img1.jpg"
                    alt="EV Charging"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 md:w-18 md:h-18  -ms-4  bg-slate-600 rounded-2xl overflow-hidden relative border-3 border-neutral-200 shadow-lg transform rotate-24">
                  <Image
                    src="/card-img2.jpg"
                    alt="Solar Panels"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 md:w-18  md:h-18 -ms-5 bg-slate-600 rounded-2xl overflow-hidden relative border-3 border-neutral-200 shadow-lg transform -rotate-16">
                  <Image
                    src="/card-img3.jpg"
                    alt="Smart Energy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-[#d7f448] grotesk ">ENERGY</span>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Charge smarter and drive further with seamless, intelligent EV
            solutions designed for modern living powering your journey toward a
            cleaner, more connected future.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <Button className=" text-lg  h-11 w-44 font-semibold rounded-full transition-colors">
              <span className="mx-6">Contact</span>

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
                <div className="font-semibold">Trusted by 30,000+</div>
                <div className="text-gray-400">worldwide users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-10">
        <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full px-6 py-2 transition-colors flex items-center gap-2">
          Stations
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          FREE REMIX
        </button>
      </div>
    </section>
  );
}
