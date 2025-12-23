import * as React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutTop() {
  return (
    <div className="w-full py-24">
      <div className=" mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
  
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl  font-medium leading-16">
            <span className="text-green-950 grotesk">Nature's Rhythm</span>
            <br />
            <span className="text-[#7fa008] grotesk ">Smart Tracking</span>
          </h1>
        </div>

        <div className="flex-1 flex flex-col items-end gap-6">
          <p className="text-gray-600 text-right max-w-md leading-relaxed">
            Bridging the gap between ancient traditions and modern electronics. 
            We design hardware that supports grazing, free-range farming, and 
            true harmony with the land.
          </p>

          <Button
            variant={"outline"}
            className=" text-lg   h-12 font-semibold rounded-full transition-colors"
          >
            <span className="mx-6 ">Our Mission</span>

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

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export function AboutIcons2() {
  return (
    <div className="w-full pt-3 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto">
        <Card className="lg:col-span-2 relative overflow-hidden rounded-3xl h-[400px] lg:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
            alt="Grazing pasture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              HARMONIOUS GRAZING GOAL
            </h2>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Transforming exhausting labor into effortless management through 
              intelligent activity sensors and GPS tracking.
            </p>
          </div>
        </Card>

        <div className="lg:col-span-1 shadow-md bg-[#d7f448] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center h-[400px] lg:h-[500px]">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
            THE LIGHT OF YAKAMOZ
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-800">
            Our technology doesn't pull you away from the earth; it gently 
            guides you back to the natural life of your animals.
          </p>
          <div className="mt-auto">
            <Image
              src="/tracker-model.png"
              alt="Smart Tracker Icon"
              width={170}
              height={170}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutIcons() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      <Card className="flex-1  rounded-3xl bg-gray-50">
        <CardHeader className="items-center space-y-4">
          <div className="relative w-full  h-52">
            <Image
              src="/solar-icon.avif"
              alt="solar-charging-icon"
              fill
              className="w-full px-32"
            />
          </div>
        </CardHeader>
        <CardContent className="text-start flex flex-col items-start">
       <div className="space-y-2 text-start">
            <div className="text-7xl font-bold text-neutral-900">+2 MO</div>
            <CardTitle className="text-4xl text-neutral-900">
              SOLAR ENDURANCE
            </CardTitle>
          </div>
          <CardDescription className=" text-lg w-[25rem]">
            Advanced NB-IoT communication coupled with solar charging for 
            extended, worry-free pasture seasons.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="flex-1  rounded-3xl bg-gray-50">
        <CardHeader className="items-center ">
          <div className="relative w-full  h-52">
            <Image
              src="/safety-icon.avif"
              alt="herd-safety-icon"
              fill
              className="w-full px-32"
            />
          </div>
        </CardHeader>
        <CardContent className="text-start flex flex-col mb-6 ml-6 items-start">
          <div className="space-y-2 text-start">
            <div className="text-7xl font-bold text-neutral-900">100%</div>
            <CardTitle className="text-4xl text-neutral-900">
              FLOCK SECURITY
            </CardTitle>
          </div>
          <CardDescription className=" text-lg w-[25rem]">
            Real-time alerts for straying or theft, ensuring every cow, sheep, 
            and goat is exactly where they belong.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}