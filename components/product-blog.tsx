"use client";

import Image from "next/image";
import React from "react";
import { TransitionLink } from "./utils/TransitionLink";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function ProductBlog() {
  return (
    <div className="bg-gray-50 flex items-center justify-center mt-3">
      <div className=" w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
   
        <div className="md:w-5/6 relative">
          <div className="absolute top-6 z-10 left-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Feb 13, 2025
          </div>
          <Image
            fill
            src="/sensor.jpg"
            alt="EV Charging"
            className="w-full h-full object-left object-cover min-h-[300px]"
          />
        </div>

   
        <div className="md:w-1/2 p-8 md:p-12  flex flex-col justify-between">
       
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/as-logo-small.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="mr-0.5"
                  priority
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900"> AS-3086</h3>
                <p className="text-sm text-gray-500">
                  Mounted on strong neodymium magnets
                </p>
              </div>
            </div>
            <span className="bg-black text-[#c3e13f] px-4 py-2 rounded-full text-sm font-medium">
              In stock
            </span>
          </div>

  
          <div className="flex-grow">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How does Agrosentinels Diagnostic Measuring System help?
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              The element of the Agrosentinels Diagnostic Measuring System is a
              smart sensor that continuously monitors the critical points of the
              machines. If it detects abnormal operation, it will immediately
              send you an alert and/or perform immediate automatic intervention
              on the machine. The sensor communicates with the master unit via a
              BLE connection, which can even intervene in the control of the
              agricultural machine in the event of a problem. The sensor not
              only sends the data to the phone, but also saves them immediately
              in the cloud, so they can be reviewed and evaluated at any time
              later. Thanks to the magnetic fastening, the installation of the
              sensors is extremely easy.
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
                  alt="Logo"
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
