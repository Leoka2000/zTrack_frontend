"use client";

import Image from "next/image";
import React from "react";
import { TransitionLink } from "./utils/TransitionLink";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function ProductBlog() {
  return (

    <div className="bg-gray-50 flex items-center justify-center mt-3 ">
      <div className=" w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
   
        <div className="md:w-5/6 relative">
          <div className="absolute top-6 z-10 left-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Dec 20, 2025
          </div>
          <Image
            fill
            src="/sensor.jpg"
            alt="ZTrack Smart Grazing Sensor"
            className="w-full h-full object-left object-cover min-h-[300px]"
          />
        </div>

   
        <div className="md:w-1/2 p-8 md:p-12  flex flex-col justify-between">
       
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-3">
              
                <Image
                  src="/zanelogo.png"
                  alt="ZTrack Logo"
                  width={90}
                height={90}
                  className="mr-0.5m brightness-0 "
                  priority
                />
       
              <div>
                <h3 className="font-semibold text-gray-900"> ZTrack G-100</h3>
                <p className="text-sm text-gray-500">
                  Solar-powered with rugged mounting
                </p>
              </div>
            </div>
            <span className="bg-black text-[#c3e13f] px-4 py-2 rounded-full text-sm font-medium">
              In stock
            </span>
          </div>

  
          <div className="flex-grow">
            <h1 className="text-3xl grotesk md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How does the ZTrack Smart Monitoring System help?
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed ">
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


          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <Button className=" text-lg mt-2  h-12  font-semibold rounded-full transition-colors">
              <span className="mx-6 ">Add to cart</span>

              <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowRight
                  size={48}
                  strokeWidth={1.75}
                  className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                />
              </span>
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="  rounded-full flex items-center justify-center">
                <Image
                  src="/megosz.jpg"
                  alt="Farming Association Partner"
                  width={130}
                  height={135}
                  className="mr-0.5"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}