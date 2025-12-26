"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BackgroundShades from "../utils/background-shades";

export default function SocialConnect() {
  return (
    <section className="w-full py-16">
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Content */}
        <div className="flex-1 space-y-6 isolate relative text-left">
          <BackgroundShades />
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 grotesk">
              Connect with Us
            </h2>
            <span
              className="grotesk font-medium md:text-6xl text-4xl
             text-[#428354]
             [background-image:linear-gradient(90deg,#428354,#defe3e)]
             [-webkit-background-clip:text]
             background-clip:text
             [-webkit-text-fill-color:transparent]"
            >
              Stay Updated!
            </span>
          </div>

          <p className="text-neutral-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Follow our social media channels to get the latest news, updates,
            and community highlights.
          </p>

          <div className="flex flex-col gap-4 pt-4">
            {/* Facebook Button */}
            <a href="https://www.facebook.com/ZaneSystems" target="_blank">
              <Button className=" grotesk text-black px-40 py-6 h-16 transition-all duration-300 flex items-center gap-3 text-lg">
                Follow on Facebook
                <div className="w-24 h-24 relative">
                  <Image
                    src="/facebook-logo.png"
                    alt="Facebook"
                    width={60}
                    height={60}
                    className="object-cover absolute top-4 right-[1.4rem]"
                  />
                </div>
              </Button>
            </a>

            {/* Website Button */}
            <a href="https://zane.hu/" target="_blank" >
              <Button
                variant="outline"
                className="group h-16 text-lg transition-colors flex items-center px-[172px] grotesk"
              >
                <span className="grotesk">Zane Systems Website</span>
                <span className="ml-4 p-2 rounded-full bg-neutral-900 flex items-center justify-center">
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                  />
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Image */}
        <div className="flex-1 w-full md:h-[590px] h-[400px] relative isolate rounded-[2.5rem] overflow-hidden">
          <Image
            src="/facebook-undraw.svg"
            alt="Workspace setup"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
