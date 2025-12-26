import * as React from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";
import BackgroundShades from "../utils/background-shades";

export default function ProductBlogTop() {
  return (
    <section  className="w-full py-24">
      <div className=" mx-auto flex flex-col lg:flex-row md:justify-between items-start lg:items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl   font-medium leading-12 md:leading-20">
            <span className="text-green-950 grotesk">Introducing</span>
            <br />
            <span
              className="grotesk font-medium md:text-6xl text-4xl
             text-[#428354]
             [background-image:linear-gradient(90deg,#428354,#defe3e)]
             [-webkit-background-clip:text]
             background-clip:text
             [-webkit-text-fill-color:transparent]"
            >
                ZTrack G-100
            </span>               
                                
                                
                                
                                
                             
         
          </h1>
        </div>

        <div className="flex-1 flex flex-col isolate relative items-start md:items-end gap-6">
          <BackgroundShades />
          <p className="text-gray-600 md:text-right text-left max-w-md leading-relaxed">
            Smart grazing hardware designed to bridge the gap between tradition
            and technology, ensuring herd safety while reconnecting us with the
            natural rhythm of the land.
          </p>

          <Button
            variant={"outline"}
            className=" text-lg   h-12 font-semibold rounded-full transition-colors"
          >
            <span className="mx-6 ">Get a quote</span>

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
    </section>
  );
}
