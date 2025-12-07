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
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
            alt="Forest landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              SUSTAINABLE ENERGY GOAL
            </h2>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Aiming for a fully renewable-powered network for a cleaner planet.
            </p>
          </div>
        </Card>

        <div className="lg:col-span-1 shadow-md bg-[#d7f448] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center h-[400px] lg:h-[500px]">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
            POWERING A CLEANER TOMORROW
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-800">
            We're committed to delivering sustainable energy solutions that
            drive a greener, more connected world.
          </p>
          <div className="mt-auto">
            <Image
              src="/farm-tractor-bro.svg"
              alt="Sustainable Energy Icon"
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
