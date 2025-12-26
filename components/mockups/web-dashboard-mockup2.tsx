"use client";

import React from "react";
import {
  Bell,
  MapPin,
  Thermometer,
  Wind,
  Droplet,
  BatteryCharging,
  Cpu,
  RefreshCw,
  Wifi,
  Globe,
  Maximize2,
} from "lucide-react";

const WebDashboardMockup_DualScreen = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-transparent w-full h-full">
      {/* Outer Frame */}
      <div className="relative w-full max-w-4xl min-h-[500px] bg-neutral-100 rounded-3xl p-3 shadow-md my-1 border border-neutral-200 flex flex-col">
        
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-neutral-200 rounded-t-2xl">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>

          <div className="flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-md border border-neutral-200 w-1/2 justify-center">
            <Globe size={10} className="text-neutral-500" />
            <span className="text-[10px] text-neutral-500 font-mono tracking-tight">
              admin.ztrackpro.cloud/monitor
            </span>
          </div>

          <div className="flex gap-3">
            <RefreshCw size={12} className="text-neutral-500" />
            <Maximize2 size={12} className="text-neutral-500" />
          </div>
        </div>

        {/* Inner Screen */}
        <div className="flex-1 bg-neutral-50 rounded-b-2xl overflow-hidden flex flex-col lg:flex-row text-neutral-800 font-sans border border-neutral-200">
          
          {/* Left Panel */}
          <div className="flex-1 flex flex-col border-r border-neutral-200 bg-white">
            
            {/* Map Area */}
            <div className="flex-1 relative bg-neutral-100 rounded-tl-[1.2rem] overflow-hidden min-h-[250px] lg:min-h-0">
              
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Active Pin - Updated with Brand Color */}
              <div className="absolute top-1/4 left-1/3 cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#d7f448]/40 rounded-full animate-ping" />
                  <div className="relative bg-[#d7f448] p-2 rounded-xl text-neutral-900 shadow-md border border-[#d7f448]/20">
                    <MapPin size={16} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Secondary Pin */}
              <div className="absolute bottom-1/3 right-1/4 cursor-pointer">
                <div className="bg-white p-2 rounded-xl text-neutral-700 shadow-md border border-neutral-200">
                  <MapPin size={16} />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-neutral-200 text-[9px] font-bold flex items-center gap-2 text-neutral-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d7f448] animate-pulse" />
                ACTIVE FLEET
              </div>
            </div>

            {/* Alerts */}
            <div className="h-40 bg-neutral-50 border-t border-neutral-200 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase text-neutral-500">
                  Alerts & Notifications
                </span>
                <Bell size={14} className="text-orange-500" />
              </div>

              <ul className="space-y-1 text-[10px] font-mono">
                <li className="text-orange-600">
                  UNIT-404: Low Fuel Warning
                </li>
                <li className="text-neutral-500">
                  SYSTEM: Telemetry Sync Complete
                </li>
                <li className="text-red-600">
                  ENGINE-101: Overheat Detected!
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-64 bg-white p-4 flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest mb-2">
              Live Sensors
            </h3>

            <SensorData icon={<Thermometer size={16} />} label="Temperature" value="32°C" />
            <SensorData icon={<Wind size={16} />} label="Wind Speed" value="15 km/h" />
            <SensorData icon={<Droplet size={16} />} label="Humidity" value="65%" />
            {/* Brand Accent for Battery */}
            <SensorData icon={<BatteryCharging size={16} className="text-[#d7f448]" />} label="Battery" value="88%" active />

            <div className="mt-auto pt-4 border-t border-neutral-200">
              <h3 className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest mb-3">
                System Health
              </h3>
              <SystemHealthBar label="CPU Load" value={75} icon={<Cpu size={12} />} />
              <SystemHealthBar label="Network" value={90} icon={<Wifi size={12} />} useBrand />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Helpers */

function SensorData({ icon, label, value, active = false }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border ${active ? 'bg-[#d7f448]/10 border-[#d7f448]/30' : 'bg-neutral-50 border-neutral-200'}`}>
      <div className="flex items-center gap-2 text-neutral-600">
        {icon}
        <span className="text-[11px] font-medium">{label}</span>
      </div>
      <span className={`text-[11px] font-bold ${active ? 'text-neutral-900' : 'text-neutral-800'}`}>{value}</span>
    </div>
  );
}

function SystemHealthBar({ label, value, icon, useBrand = false }) {
  const barColor = useBrand 
    ? "bg-[#d7f448]" 
    : (value > 80 ? "bg-emerald-500" : value > 50 ? "bg-orange-400" : "bg-red-500");

  return (
    <div className="mb-2">
      <div className="flex items-center justify-between text-[10px] text-neutral-600 mb-1">
        <div className="flex items-center gap-1">
          {icon}
          <span>{label}</span>
        </div>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-1.5">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default WebDashboardMockup_DualScreen;