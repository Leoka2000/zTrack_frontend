"use client";

import Image from "next/image";
import React from "react";

import { ArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

export default function ElveszettBorju() {
  return (
    <section className="bg-gray-50 flex items-center justify-center my-5 mt-3">
      <div className="w-full bg-neutral-50 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="md:w-5/6 relative flex items-center justify-center min-h-[300px]">
          <div className="absolute top-6 left-3 z-10 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
            Oct 26, 2023
          </div>

          <Image
            src="/elveszett-borju.png"
            alt="Lost Calf Found with ZTrack"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="md:w-5/6 p-8 md:p-12 flex flex-col justify-between">
          
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-10">
              <div className="ms-10">
                <Image
                  src="/zanelogo.png"
                  alt="ZaneSystems Logo"
                  width={50}
                  height={50}
                  className="brightness-0 md:w-24 w-44"
                  priority
                />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">ZTrack Stories</h3>
                <p className="text-sm text-gray-500">Real impact from our users</p>
              </div>
            </div>

            <span className="bg-[#d7f448] md:flex hidden text-black px-4 py-2 rounded-full text-sm font-medium">
              Case Study
            </span>
          </div>

          <div className="flex-grow">
            <h1 className="text-3xl grotesk md:text-4xl  text-neutral-800 mb-4 leading-tight">
              A Lost Calf, a Farmer's Fear, and the ZTrack Rescue
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              ...content...
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button type="button" className="h-12">
                    <span className="mx-6 text-lg">Read More Stories</span>
                    <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                      <ArrowRight
                        size={48}
                        strokeWidth={1.75}
                        className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                      />
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Explore other ZTrack success stories
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
