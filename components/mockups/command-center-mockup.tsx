"use client";

import React from "react";
import { Activity, ShieldCheck, Zap, Wifi, ArrowUpRight, Globe, Database } from "lucide-react";

const CommandCenterMockup = () => {
  return (
    <div className="flex items-center justify-start lg:ml-10 p-2 bg-transparent w-full overflow-hidden">
      {/* Ultra-Wide Command Frame */}
      <div className="relative w-full max-w-4xl min-h-[500px] bg-[#0a0a0a] rounded-[2rem] p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[8px] border-neutral-900 flex flex-col transform lg:scale-95 origin-left">
        
        {/* Main Interface */}
        <div className="w-full flex-1 bg-[#111] rounded-[1.5rem] overflow-hidden flex flex-col text-white font-sans">
          
          {/* Top Integrated Bar */}
          <div className="h-10 border-b border-white/5 flex items-center justify-between px-6 bg-black/40">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System::Global_Fleet_v2.0</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-[#d7f448]">
              <span className="animate-pulse">● LIVE ENCRYPTED</span>
              <span className="text-gray-600">UTC 14:22:01</span>
            </div>
          </div>

          <div className="flex-1 flex gap-2 p-2">
            {/* Left Panel: Telemetry */}
            <div className="w-48 space-y-2">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[9px] text-gray-500 uppercase mb-2">Network Load</p>
                <div className="h-12 flex items-end gap-1">
                  {[40, 70, 45, 90, 65, 80, 30].map((h, i) => (
                    <div key={i} style={{height: `${h}%`}} className="flex-1 bg-[#d7f448]/40 rounded-t-sm"></div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <Activity size={16} className="text-[#d7f448] mb-2" />
                <p className="text-xs font-bold">Health Index</p>
                <p className="text-[10px] text-emerald-400">99.2% Nominal</p>
              </div>
            </div>

            {/* Center Panel: The Grid Map */}
            <div className="flex-1 relative bg-[#050505] rounded-xl border border-white/10 overflow-hidden">
               {/* Radar/Scan effect */}
               <div className="absolute inset-0 opacity-10" 
                    style={{backgroundImage: 'radial-gradient(circle, #d7f448 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
               
               {/* Visual Tracking Path */}
               <svg className="absolute inset-0 w-full h-full text-[#d7f448]/20" viewBox="0 0 400 300">
                  <path d="M50,250 Q150,50 350,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
               </svg>

               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full border border-[#d7f448]/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-[#d7f448]/40 animate-ping"></div>
                    <div className="absolute w-2 h-2 bg-[#d7f448] rounded-full shadow-[0_0_15px_#d7f448]"></div>
                  </div>
               </div>

               <div className="absolute bottom-4 right-4 text-right">
                  <p className="text-[10px] font-mono text-gray-500">LAT: 47.4979</p>
                  <p className="text-[10px] font-mono text-gray-500">LNG: 19.0402</p>
               </div>
            </div>

            {/* Right Panel: Quick Actions */}
            <div className="w-16 flex flex-col gap-2">
              <IconButton icon={<Globe size={18}/>} />
              <IconButton icon={<Zap size={18}/>} active />
              <IconButton icon={<Database size={18}/>} />
              <IconButton icon={<ShieldCheck size={18}/>} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function IconButton({ icon, active = false }) {
  return (
    <div className={`w-full aspect-square rounded-xl flex items-center justify-center cursor-pointer border transition-all ${active ? 'bg-[#d7f448] text-black border-[#d7f448]' : 'bg-white/5 text-gray-500 border-white/5 hover:bg-white/10'}`}>
      {icon}
    </div>
  );
}

export default CommandCenterMockup;