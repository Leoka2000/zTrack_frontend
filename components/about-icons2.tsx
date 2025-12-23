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
          <Image
            src="/grazing-image.jpg"
            alt="Smart farming illustration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
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
              src="/farm-tractor-bro.svg"
              alt="Smart Tracker Icon"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}