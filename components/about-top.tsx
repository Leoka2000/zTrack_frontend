import * as React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
export default function AboutTop() {
  return (
    <div className="w-full py-24">
      <div className=" mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
  
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl  font-medium leading-16">
            <span className="text-green-950 grotesk">Smart Tech</span>
            <br />
            <span className="text-[#7fa008] grotesk ">Faster Charging</span>
          </h1>
        </div>


        <div className="flex-1 flex flex-col items-end gap-6">
          <p className="text-gray-600 text-right max-w-md leading-relaxed">
            Intelligent EV charging systems powered by AI and renewables
            building a cleaner, more connected future with every charge.
          </p>

          <Button
            variant={"outline"}
            className=" text-lg   h-12 font-semibold rounded-full transition-colors"
          >
            <span className="mx-6 ">Contact</span>

            <span className="p-1 rounded-full bg-neutral-900  flex items-center justify-center">
              <ArrowRight
                size={48}
                strokeWidth={1.75}
                className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
              />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
