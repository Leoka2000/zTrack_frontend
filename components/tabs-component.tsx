"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Flame, Cog, Helicopter } from "lucide-react";

function AnimatedText({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.015 } },
      }}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: `0.4em` },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

const tabs = [
  {
    id: "problem",
    label: "Problem",
    title: "Machines Fail Without Warning",
    description: `
      Agricultural and industrial machinery frequently overheats without any visible
      external signs. Bearings, belts, pulleys, and mechanical connections can reach
      dangerous temperatures long before operators notice anything is wrong.
      
      When a critical component overheats unnoticed, the consequences can be severe:
      expensive machine damage, downtime, halted production, and even complete fires.
      Companies lose millions every year due to preventable overheating incidents.
      
      Without early detection, you are reacting after damage happens — not preventing it.
    `,
    image: "/card-img1.jpg",
  },
  {
    id: "solution",
    label: "Solution",
    title: "Smart Monitoring in Real Time",
    description: `
      Agrosentinels is a smart, real-time diagnostic sensor system that continuously
      monitors the heat signatures of critical machine components. It provides
      immediate visual and digital alerts when temperatures reach dangerous thresholds.
      
      Using wireless BLE communication, the sensors send instant alerts to the main
      unit, giving operators time to react before failures occur.
      
      The system transforms traditional machinery into intelligent, self-monitoring equipment.
    `,
    image: "/card-img2.jpg",
  },
  {
    id: "how-it-works",
    label: "Functioning",
    title: "Smart Monitoring in Real Time",
    description: `
      Each Agrosentinels sensor monitors a specific machine component. When heat
      rises beyond safe parameters, it sends an alert via Bluetooth Low Energy
      directly to the master controller.
      
      The master unit can:
      • warn the operator instantly  
      • log the event in the cloud  
      • automatically shut down the machine if required  
      
      This provides a seamless, automated protection layer that prevents mechanical
      failure and fire risk before they escalate.
    `,
    image: "/card-img3.jpg",
  },
  {
    id: "why-buy",
    label: "Why",
    title: "Protection That Pays Off",
    description: `
      Agrosentinels delivers measurable savings by preventing damage that could cost
      millions. It protects your equipment, workers, and operations.
      
      • Saves money by preventing mechanical failures  
      • Reduces downtime and production loss  
      • Easy magnetic installation — no special tools needed  
      • Cloud-based history and incident tracking  
      • Makes your machinery safer and more reliable  
      
      It's a simple, effective upgrade that pays for itself many times over.
    `,
    image: "/card-img4.jpg",
  },
];

const iconPatterns = [[Cog], [Flame], [Helicopter], [ShieldCheck]];

export default function DarkTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab);
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
               
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
          
         
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
         
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex justify-center gap-2 p-2 border rounded-full border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={` w-full py-2 rounded-full border transition-all duration-300 ${
                      activeTab === tab.id
                        ? "border-[#d7f448] bg-[#d7f448]/10 text-[#d7f448]"
                        : "border-gray-700 bg-gray-900/50 text-gray-400 hover:border-gray-600 hover:text-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div
                className="space-y-6 min-h-[420px] transition-all duration-300"
                key={activeTab}
              >
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d7f448] to-[#b8d636] animate-fadeInUp">
                  {activeContent?.title}
                </h1>
                <motion.p
                  key={activeTab}
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedText text={activeContent?.description || ""} />
                </motion.p>
              </div>
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
                      src="/zane-partner.jpg"
                      alt="Generated thumbnail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="w-0.5 h-5 animate-glow-top rounded-full"></div>

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

                  <div className="w-0.5 h-6 animate-glow-bottom rounded-full"></div>
                  <div
                    key={activeTab}
                    className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-950 shadow-xl animate-scaleIn"
                  >
                    <Image
                      src={activeContent?.image || "/placeholder.jpg"}
                      alt="Generated thumbnail"
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

      {/* Global Styles */}
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
        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
