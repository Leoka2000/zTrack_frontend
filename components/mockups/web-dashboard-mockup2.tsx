// components/WebDashboardMockup_DualScreen.jsx
"use client";

import React from "react";
import {
  Bell,
  MapPin,
  Target,
  Thermometer,
  Wind,
  Droplet,
  BatteryCharging,
  Zap,
  Cpu,
  RefreshCw,
  Wifi,
  MoreVertical,
  Globe,
  Maximize2
} from "lucide-react";

const WebDashboardMockup_DualScreen = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-transparent w-full h-full">
      {/* Outer Hardware Frame */}
      <div className="relative w-full max-w-4xl min-h-[500px] bg-neutral-900 rounded-3xl p-3 shadow-2xl border-[10px] border-neutral-800 flex flex-col">
        
        {/* Browser Top Bar Decoration */}
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-md border border-white/5 w-1/2 justify-center">
            <Globe size={10} className="text-gray-500" />
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">admin.ztrackpro.cloud/monitor</span>
          </div>
          <div className="flex gap-3">
             <RefreshCw size={12} className="text-gray-600" />
             <Maximize2 size={12} className="text-gray-600" />
          </div>
        </div>

        {/* Inner Screen - Dual Panel Layout */}
        <div className="flex-1 bg-neutral-950 rounded-b-2xl overflow-hidden flex flex-col lg:flex-row text-white font-sans border border-white/5">
          
          {/* Left Panel: Map & Alerts */}
          <div className="flex-1 flex flex-col border-r border-white/5 bg-neutral-900">
            <div className="flex-1 relative bg-[#1e1e1e] rounded-tl-[1.2rem] overflow-hidden min-h-[250px] lg:min-h-0">
               {/* Map Grid Background */}
               <div className="absolute inset-0 opacity-[0.03]" 
                    style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
               
               {/* Map Pins */}
               <div className="absolute top-1/4 left-1/3 group cursor-pointer">
                 <div className="relative">
                   <div className="absolute -inset-4 bg-[#d7f448]/20 rounded-full animate-ping"></div>
                   <div className="relative bg-[#d7f448] p-2 rounded-xl text-black shadow-lg">
                     <MapPin size={16} />
                   </div>
                 </div>
               </div>
               <div className="absolute bottom-1/3 right-1/4 group cursor-pointer">
                 <div className="bg-white/10 p-2 rounded-xl text-white shadow-md">
                   <MapPin size={16} />
                 </div>
               </div>

               <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10 text-[9px] font-bold flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#d7f448] animate-pulse"></div>
                 ACTIVE FLEET
               </div>
            </div>

            {/* Alerts Section */}
            <div className="h-40 bg-neutral-950 border-t border-white/5 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase text-white/50">Alerts & Notifications</span>
                <Bell size={14} className="text-orange-400" />
              </div>
              <ul className="space-y-1 text-[10px] font-mono">
                <li className="text-orange-400">UNIT-404: Low Fuel Warning</li>
                <li className="text-white/60">SYSTEM: Telemetry Sync Complete</li>
                <li className="text-red-500">ENGINE-101: Overheat Detected!</li>
              </ul>
            </div>
          </div>

          {/* Right Panel: Sensor Data & Diagnostics */}
          <div className="w-64 bg-neutral-900 p-4 flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase text-white/50 tracking-widest mb-2">Live Sensors</h3>
            <SensorData icon={<Thermometer size={16} />} label="Temperature" value="32°C" color="text-red-400" />
            <SensorData icon={<Wind size={16} />} label="Wind Speed" value="15 km/h" color="text-blue-400" />
            <SensorData icon={<Droplet size={16} />} label="Humidity" value="65%" color="text-teal-400" />
            <SensorData icon={<BatteryCharging size={16} />} label="Battery" value="88%" color="text-[#d7f448]" />
            
            <div className="mt-auto pt-4 border-t border-white/5">
              <h3 className="text-[10px] font-bold uppercase text-white/50 tracking-widest mb-3">System Health</h3>
              <SystemHealthBar label="CPU Load" value={75} icon={<Cpu size={12} />} />
              <SystemHealthBar label="Network" value={90} icon={<Wifi size={12} />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components for the Dual Screen Mockup
function SensorData({ icon, label, value, color }) {
  return (
    <div className="flex items-center justify-between bg-neutral-800/50 p-3 rounded-lg border border-white/5">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[11px] font-medium text-white/80">{label}</span>
      </div>
      <span className={`text-[11px] font-bold ${color}`}>{value}</span>
    </div>
  );
}

function SystemHealthBar({ label, value, icon }) {
  const barColor = value > 80 ? "bg-emerald-500" : value > 50 ? "bg-orange-400" : "bg-red-500";
  return (
    <div className="mb-2">
      <div className="flex items-center justify-between text-[10px] text-white/70 mb-1">
        <div className="flex items-center gap-1">
          {icon}
          <span>{label}</span>
        </div>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-1.5">
        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

export default WebDashboardMockup_DualScreen;