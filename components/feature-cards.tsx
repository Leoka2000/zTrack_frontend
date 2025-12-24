"use client";

import React from "react";
import { 
  Flame, 
  BarChart3, 
  Wrench, 
  Shield, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Database,
  MapPin
} from "lucide-react";

/* --- SUB-COMPONENT: FEATURE CARD (LIGHT MODE) --- */
const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <div className="relative w-full h-full">
      {/* Light Mode Container: Neutral colors, no dark backgrounds */}
      <div className="relative bg-white border border-neutral-200 rounded-[1.5rem] p-4 shadow-sm flex flex-col h-full min-h-[200px]">
        
        {/* Simplified Icon Area */}
        <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-neutral-800" strokeWidth={2} />
        </div>

        {/* Text Content - Smaller font sizes for a pro look */}
        <div className="space-y-1.5">
          <h3 className="text-sm font-bold text-neutral-900 tracking-tight">
            {title}
          </h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Subtle accent corner */}
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#d7f448] opacity-40" />
      </div>
    </div>
  );
};

/* --- MAIN COMPONENT: CommandCenterMockupWrapper --- */
const CommandCenterMockupWrapper = () => {
  const features = [
    { 
      icon: Flame, 
      title: "Fire Protection", 
      description: "Prevent agricultural machine fires with constant sensory monitoring and real-time alerts." 
    },
    { 
      icon: BarChart3, 
      title: "Production Supervision", 
      description: "Monitor productivity in real time. Analyze your statistics easily via the mobile app." 
    },
    { 
      icon: Wrench, 
      title: "Maintenance", 
      description: "Immediate notifications when machines need servicing to prevent expensive repairs." 
    },
    { 
      icon: Shield, 
      title: "Property Protection", 
      description: "Motion sensors and cloud communication prevent the theft of agricultural machinery." 
    }
  ];

  return (
    /* Outermost layer is transparent, no background */
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT SIDE: FEATURE CARDS (2 per row) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* RIGHT SIDE: THE MOCKUP */}
        <div className="lg:col-span-6 flex justify-end">
          <div className="relative w-full max-w-xl aspect-[4/3] bg-neutral-200 rounded-[2rem] p-2 shadow-lg border-[6px] border-neutral-100 flex flex-col transform lg:scale-95 origin-right">
            
            {/* Inner Screen Container */}
            <div className="w-full flex-1 bg-white rounded-[1.4rem] overflow-hidden flex flex-col text-neutral-800 font-sans border border-neutral-200">
              
              {/* Header Bar */}
              <div className="h-9 border-b border-neutral-100 flex items-center justify-between px-5 bg-neutral-50/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase font-bold tracking-tighter">Fleet_Manager_v2</span>
                </div>
                <div className="text-[9px] font-mono text-neutral-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  SYSTEM_READY
                </div>
              </div>

              <div className="flex-1 flex gap-2 p-2">
                {/* Mockup Mini-Sidebar */}
                <div className="w-24 space-y-2">
                  <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                    <div className="h-6 flex items-end gap-0.5">
                      {[40, 70, 45, 90, 60].map((h, i) => (
                        <div key={i} style={{height: `${h}%`}} className="flex-1 bg-neutral-200 rounded-t-sm"></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-100 flex items-center gap-2">
                    <Activity size={12} className="text-neutral-400" />
                    <span className="text-[9px] font-bold">99%</span>
                  </div>
                </div>

                {/* Mockup Map Grid */}
                <div className="flex-1 relative bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden">
                   <div className="absolute inset-0 opacity-20" 
                        style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '12px 12px'}} />
                   
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border border-[#d7f448] opacity-20 animate-ping" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-2 h-2 bg-[#d7f448] rounded-full border border-white shadow-sm" />
                        </div>
                      </div>
                   </div>
                </div>

                {/* Mockup Right Icons */}
                <div className="w-10 flex flex-col gap-1.5">
                  {[Globe, Zap, Database, ShieldCheck].map((Icon, i) => (
                    <div key={i} className={`w-full aspect-square rounded-lg flex items-center justify-center border transition-all ${i===1 ? 'bg-[#d7f448] border-[#d7f448] text-black shadow-sm' : 'bg-white border-neutral-100 text-neutral-400'}`}>
                      <Icon size={14} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommandCenterMockupWrapper;