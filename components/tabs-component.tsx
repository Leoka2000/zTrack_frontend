"use client";

import { useState, useMemo, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Map, Sun, Activity } from "lucide-react";

const tabs = [
  {
    id: "problem",
    label: "Problem",
    title: "Grazing is Exhausting and Risky",
    description: `
Grazing is hard and monotonous work. Keeping an eye on animals across vast 
pastures is difficult, leading to animals wandering off or being stolen. 

Every lost calf or sheep is a direct hit to a farmer's livelihood. Without 
constant visibility, the risk of theft and the challenge of managing 
large herds often lead to time and labor inefficiency.

Without smart monitoring, you are reacting after the loss happens — not 
securing your herd's future.
    `,
    image: "/sheep-pasture.jpg",
  },
  {
    id: "solution",
    label: "Solution",
    title: "Harmony Through Smart Sensors",
    description: `
ZTrack is a smart, real-time GPS and activity sensor system designed to 
make grazing easier and more secure. We believe technology should lead 
us back to the rhythm of the land and the animals.

Using advanced tracking, our devices monitor the location and health 
signatures of your livestock, giving you peace of mind whether they 
are on the pasture or in the mountains.

The system transforms traditional herding into a modern, harmonious 
relationship between nature and data.
    `,
    image: "/herd-view.jpg",
  },
  {
    id: "technology",
    label: "Tech",
    title: "Low Power, Maximum Reach",
    description: `
Each ZTrack sensor monitors an animal's specific behavior. Using 
ultra-low power NB-IoT communication, the device sends updates 
directly to your dashboard every 15 minutes.

The system features:
• Solar-assisted charging for 2+ months of battery life  
• Real-time alerts for theft or abnormal inactivity  
• Robust IP6X casing for harsh field conditions  

This provides a seamless, automated protection layer that helps 
you reconnect with the natural life of your animals.
    `,
    image: "/smart-sensor.jpg",
  },
  {
    id: "value",
    label: "Value",
    title: "The Light of Yakamoz",
    description: `
ZTrack delivers measurable savings by preventing theft and loss that 
could cost your business thousands. It protects your livestock and 
your legacy.

• Pays for itself by preventing the loss of even one animal  
• Solar endurance ensures maintenance-free operation  
• Group-level visualization for entire herd oversight  
• Rugged hardware built for long grazing seasons  
• Bridging the past and future through smart electronics  

It is a quiet, pure reminder of why we build: to guide you back to the land.
    `,
    image: "/grazing-bg.webp",
  },
];

const iconPatterns = [[Sun], [Map], [Activity], [ShieldCheck]];

const AnimatedText = memo(({ text }: { text: string }) => (
  <motion.p
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-lg text-gray-300 leading-relaxed"
  >
    {text}
  </motion.p>
));

export default function DarkTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = useMemo(
    () => tabs.find((tab) => tab.id === activeTab),
    [activeTab]
  );
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const iconsToShow = iconPatterns[activeIndex % iconPatterns.length];

  return (
    <div className="min-h-screen bg-neural-950 text-white p-8 flex items-center justify-center">
      <div className="w-full border rounded-4xl p-24 border-neutral-950 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundColor: "#0a0a0a",
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
              radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
            `,
            backgroundSize: "10px 10px",
            imageRendering: "pixelated",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(215, 244, 72, 0.12) 0%,
                rgba(215, 244, 72, 0.06) 20%,
                rgba(0, 0, 0, 0) 60%
              )
            `,
          }}
        />

        <div className="relative min-h-[420px] z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex justify-center gap-2 p-2 border rounded-full border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full py-2 rounded-full border transition-all duration-300 ${
                      activeTab === tab.id
                        ? "border-[#d7f448] cursor-pointer bg-[#d7f448]/10 grotesk bg-gradient-to-r  from-[#45ae89] to-[#d7f448] bg-clip-text font-medium text-transparent p-6  px-20 "
                        : "border-gray-700   bg-gray-900/50 text-gray-400 hover:border-gray-600 hover:text-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 min-h-[420px]"
              >
                <h1 className="grotesk font-medium bg-gradient-to-r from-[#45ae89] to-[#d7f448] bg-clip-text text-transparent md:text-6xl text-4xl ">
                  {activeContent?.title}
                </h1>
                <AnimatedText text={activeContent?.description || ""} />
              </motion.div>
            </div>

            <div className="relative">
              <div className="relative p-8 border border-gray-950 bg-neutral-950 rounded-2xl shadow-2xl overflow-hidden">
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(
                        circle at center,
                        rgba(215, 244, 72, 0.12) 0%,
                        rgba(215, 244, 72, 0.06) 20%,
                        rgba(0, 0, 0, 0) 60%
                      )
                    `,
                  }}
                />
                <div className="flex flex-col items-center mb-8 relative">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-950 shadow-xl animate-scaleIn">
                    <Image
                      src="/pasture-wide.jpg"
                      alt="Pasture overview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="w-0.5 h-5 animate-glow-top rounded-full" />

                  <div className="flex gap-2">
                    {iconsToShow.map((IconComponent, i) => (
                      <div
                        key={i}
                        className="w-14 h-14 bg-gray-950 rounded-full flex items-center justify-center border border-[#d7f448]"
                      >
                        <IconComponent className="w-6 h-6 text-[#d7f448]" />
                      </div>
                    ))}
                  </div>

                  <div className="w-0.5 h-6 animate-glow-bottom rounded-full" />

                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-950 shadow-xl animate-scaleIn mt-4">
                    <Image
                      src={activeContent?.image || "/placeholder.jpg"}
                      alt="Livestock management"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes glowPulseTop {
          0% {
            background-color: #d7f448;
            box-shadow: 0 0 20px rgba(215, 244, 72, 0.8),
              0 0 40px rgba(215, 244, 72, 0.6);
          }
          50% {
            background-color: #d7f44822;
            box-shadow: 0 0 5px rgba(215, 244, 72, 0.2),
              0 0 10px rgba(215, 244, 72, 0.1);
          }
          100% {
            background-color: #d7f448;
            box-shadow: 0 0 20px rgba(215, 244, 72, 0.8),
              0 0 40px rgba(215, 244, 72, 0.6);
          }
        }
        @keyframes glowPulseBottom {
          0% {
            background-color: #d7f44822;
            box-shadow: 0 0 5px rgba(215, 244, 72, 0.2),
              0 0 10px rgba(215, 244, 72, 0.1);
          }
          50% {
            background-color: #d7f448;
            box-shadow: 0 0 20px rgba(215, 244, 72, 0.8),
              0 0 40px rgba(215, 244, 72, 0.6);
          }
          100% {
            background-color: #d7f44822;
            box-shadow: 0 0 5px rgba(215, 244, 72, 0.2),
              0 0 10px rgba(215, 244, 72, 0.1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }
        .animate-glow-top {
          animation: glowPulseTop 4s ease-in-out infinite;
        }
        .animate-glow-bottom {
          animation: glowPulseBottom 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}