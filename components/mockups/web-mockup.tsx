"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Users, 
  Bell, 
  BarChart3, 
  Settings, 
  Search, 
  MapPin, 
  MoreVertical,
  Plus
} from "lucide-react";

const WebDashboardMockup = () => {
  return (
    /* justify-start and ml-20 to keep it positioned left as requested */
    <div className="flex items-center justify-start lg:ml-20 p-4 lg:p-10 bg-transparent w-full overflow-hidden">
      
      {/* Reduced the hardware frame padding and rounded corners for a tighter look */}
      <div className="relative w-[90%] lg:w-full max-w-4xl min-h-[700px] bg-[#1a1a1a] rounded-[2rem] p-3 shadow-2xl border-[10px] border-[#2a2a2a] flex flex-col transform lg:scale-90 origin-left">
        
        {/* Inner Screen Container */}
        <div className="w-full flex-1 bg-[#121212] rounded-[1.2rem] overflow-hidden flex flex-col md:flex-row text-white font-sans border border-white/5">
          
          {/* SIDEBAR - Reduced width and padding */}
          <aside className="w-16 md:w-52 bg-[#1e1e1e] border-r border-white/5 flex flex-col p-5">
            <div className="flex items-center gap-2 mb-8 px-1">
              <div className="w-7 h-7 bg-[#d7f448] rounded-lg flex items-center justify-center shrink-0">
                 <div className="w-3 h-3 bg-black rounded-sm rotate-45"></div>
              </div>
              <span className="hidden md:block text-lg font-bold tracking-tight">ZtrackMap</span>
            </div>

            <nav className="flex-1 space-y-1.5">
              <NavItem icon={<LayoutDashboard size={18}/>} label="Dashboard" active />
              <NavItem icon={<Users size={18}/>} label="My Herds" count="+" />
              <NavItem icon={<Bell size={18}/>} label="Alerts" />
              <NavItem icon={<BarChart3 size={18}/>} label="Reports" />
              <div className="pt-6 mt-6 border-t border-white/5">
                <NavItem icon={<Settings size={18}/>} label="Settings" />
              </div>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 flex flex-col">
            
            {/* TOP HEADER - Slimmer height */}
            <header className="h-14 border-b border-white/5 bg-[#121212] flex items-center justify-between px-6">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 w-56 xl:w-72">
                <Search size={14} className="text-gray-400" />
                <span className="text-[11px] text-gray-400 font-medium truncate">Search ear tag...</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="hidden xl:block text-[10px] font-bold px-4 py-1.5 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors uppercase tracking-widest text-gray-400">
                  Last Sync: 2m ago
                </button>
                <div className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center border border-white/10 cursor-pointer">
                  <MoreVertical size={16} className="text-gray-400" />
                </div>
              </div>
            </header>

            {/* DASHBOARD GRID - Tighter padding */}
            <div className="flex-1 p-6 space-y-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* MAP AREA - Tighter corners */}
                <div className="lg:col-span-2 relative bg-[#1e1e1e] rounded-[1.5rem] overflow-hidden min-h-[400px] border border-white/5 shadow-inner">
                  <div className="absolute inset-0 opacity-[0.02]" 
                       style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
                  
                  {/* Scaled down Pins */}
                  <div className="absolute top-1/4 left-1/3 group cursor-pointer">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-[#d7f448]/20 rounded-full animate-ping"></div>
                      <div className="relative bg-[#d7f448] p-2 rounded-xl text-black shadow-lg">
                        <MapPin size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 right-1/4 group cursor-pointer">
                    <div className="bg-white p-2 rounded-xl text-black shadow-md">
                      <MapPin size={18} />
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10 text-[10px] font-bold flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d7f448] animate-pulse"></div>
                    Live Telemetry
                  </div>
                </div>

                {/* RIGHT STATS PANEL - Smaller text and spacing */}
                <div className="flex flex-col gap-6">
                  <div className="bg-[#d7f448] rounded-[1.5rem] p-6 text-black flex flex-col justify-between flex-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] opacity-60">Total Livestock</span>
                    <h2 className="text-4xl font-bold tracking-tighter">2,959</h2>
                    <div className="flex justify-between items-center pt-4 border-t border-black/10">
                       <span className="text-[11px] font-bold">↑ 12.4% yield</span>
                    </div>
                  </div>

                  <div className="bg-[#1e1e1e] rounded-[1.5rem] p-6 border border-white/5 flex-1 flex flex-col justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">Active Alerts</span>
                    <div className="flex items-center justify-between">
                      <h2 className="text-4xl font-bold tracking-tighter text-orange-500">08</h2>
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 border border-orange-500/10">
                        <Bell size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LOWER STATUS ROW - Compact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatusCard label="Solar Charge" value="98%" color="text-[#d7f448]" />
                <StatusCard label="Signal" value="Ultra" color="text-blue-400" />
                <StatusCard label="Gateway" value="Online" color="text-green-400" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

function NavItem({ icon, label, active = false, count = null }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${active ? 'bg-[#d7f448] text-black shadow-lg' : 'text-gray-400 hover:bg-white/5'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="hidden md:block text-[13px] font-bold">{label}</span>
      </div>
      {count && <Plus size={14} className="hidden md:block opacity-40" />}
    </div>
  );
}

function StatusCard({ label, value, color }) {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-[1.5rem] border border-white/5 flex flex-col gap-1">
      <span className="text-gray-500 text-[9px] font-black uppercase tracking-[0.15em]">{label}</span>
      <span className={`text-xl font-bold tracking-tight ${color}`}>{value}</span>
    </div>
  );
}

export default WebDashboardMockup;