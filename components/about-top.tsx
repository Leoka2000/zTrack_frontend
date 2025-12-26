import * as React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import BackgroundShades from "./utils/background-shades";
import BgBelowShade from "./utils/bg-below-shade";
import LanguageButton from "./language-btn";

export default function AboutTop() {
  return (
    // 1️⃣ OUTER WRAPPER — allows visual overflow
    <section id="about" className="relative w-full py-24 isolate overflow-hidden">
      {/* 2️⃣ GLOW LAYER — NOT CLIPPED */}
      <BgBelowShade />

      {/* 3️⃣ CONTENT CONTAINER — layout only */}
      <div className="relative mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 overflow-hidden z-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            <span className="text-green-950 grotesk">Nature's Rhythm</span>
            <br />
            <span
              className="grotesk font-medium md:text-6xl text-4xl
             text-[#428354]
             [background-image:linear-gradient(90deg,#428354,#defe3e)]
             [-webkit-background-clip:text]
             background-clip:text
             [-webkit-text-fill-color:transparent]"
            >
              Smart Tracking
            </span>{" "}
          </h1>
        </div>

        <div className="flex-1 flex flex-col items-start md:items-end gap-6">
          <p className="text-gray-600 text-left md:text-right max-w-md leading-relaxed">
            Bridging the gap between ancient traditions and modern electronics.
            We design hardware that supports grazing, free-range farming, and
            true harmony with the land.
          </p>
<LanguageButton />
          <Button
            variant="outline"
            className="text-lg h-12 font-semibold rounded-full transition-colors group"
          >
            <span className="mx-6">Our Mission</span>

            <span className="p-1 rounded-full bg-neutral-900 flex items-center justify-center">
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
