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

export default function ProductBlog() {
  return (
    <section  className="bg-gray-50 flex items-center justify-center my-5 mt-3">
      <div className="w-full bg-neutral-100 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="md:w-5/6 relative flex items-center justify-center min-h-[300px]">
          <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
            Dec 20, 2025
          </div>

          <Image
            src="/cow-eartag.png"
            alt="ZTrack Smart Grazing Sensor"
            width={400}
            height={400}
            priority
            className="object-contain max-w-[50%] h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-5/4 p-8 md:p-12 flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center md:gap-3 gap-14">
              <div className="ms-10">
                <Image
                  src="/zanelogo.png"
                  alt="ZTrack Logo"
                  width={50}
                  height={50}
                  className="brightness-0 w-24 "
                  priority
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900">ZTrack G-100</h3>
                <p className="text-xs text-gray-500">
                  Solar-powered with rugged mounting
                </p>
              </div>
            </div>

            <span className="bg-black text-[#c3e13f] md:flex hidden px-4 py-2 rounded-full text-sm font-medium">
              In stock
            </span>
          </div>

          {/* Description */}
          <div className="flex-grow">
            <h1 className="text-3xl grotesk md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How does the ZTrack Smart Monitoring System help?
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              The core of the ZTrack system is a smart activity sensor designed to
              bring harmony to modern grazing. It continuously monitors the location
              and behavior of your livestock, sending immediate alerts if it detects
              theft, straying, or abnormal inactivity. Using ultra-low power NB-IoT
              technology and integrated solar charging, the sensor operates for
              months without maintenance. Every data point is saved to the cloud,
              allowing you to review herd movements and pasture pressure through our
              dedicated map application. Housed in a robust IP6X casing, it withstands
              the harshest field conditions while keeping you connected to the rhythm
              of your land.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="text-lg h-12 font-semibold rounded-full transition-colors">
                    <span className="mx-6">Add to cart</span>
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
                  Product under construction
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

           
          </div>
        </div>
      </div>
    </section>
  );
}
