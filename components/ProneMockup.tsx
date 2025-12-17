"use client" 
import Image from 'next/image';
import  React from 'react'

const PhoneMockup = () => {
  return (
    <div className="flex items-center justify-center gap-[-2rem] relative">
      
      <div className="relative z-10">
        <div className="w-[280px] h-[560px] bg-black rounded-[3rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-[#CDFF4D] rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
       
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
            
     
            <div className="flex items-center gap-0">
              
              <div className="w-10 h-10  text-neutral-900 rounded-full flex items-center justify-center">
                            <Image
                              src="/as-logo-small.png"
                              alt="Logo"
                              width={32}
                              height={32}
                              className="mr-0.5"
                              priority
                            />
                          </div>
         
              <span className="text-2xl grotesk font-bold text-neutral-900 tracking-tight">
                Agrosentinels
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Phone - Dashboard Screen */}
      <div className="relative -ml-8">
        <div className="w-[280px] h-[560px] bg-black rounded-[3rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-[#1a1a1a] rounded-[2.5rem] relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
            
            {/* Status Bar */}
            <div className="absolute top-6 right-6 text-xs font-medium text-gray-400 z-10">
              10:00
            </div>
            
            {/* Header */}
            <div className="pt-14 px-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-white font-semibold text-lg">My Machines</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-[#CDFF4D]/20 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-[#CDFF4D] animate-pulse" />
                    <span className="text-[10px] text-[#CDFF4D] font-medium">3 Online</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 bg-[#2a2a2a] rounded-lg p-2">
                  <div className="text-[10px] text-gray-500">Sensors</div>
                  <div className="text-white font-semibold text-sm">12 Active</div>
                </div>
                <div className="flex-1 bg-[#2a2a2a] rounded-lg p-2">
                  <div className="text-[10px] text-gray-500">Alerts</div>
                  <div className="text-orange-400 font-semibold text-sm">2 Warning</div>
                </div>
              </div>
            </div>
            
            {/* Machine Cards */}
            <div className="px-4 space-y-2 overflow-hidden">
              {/* Machine Card 1 */}
              <div className="bg-[#2a2a2a] rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#CDFF4D]/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#CDFF4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v4m-6 0h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Tractor #1</div>
                      <div className="text-[10px] text-gray-500">Updated 2 min ago</div>
                    </div>
                  </div>
                  <div className="bg-green-500/20 px-2 py-0.5 rounded-full">
                    <span className="text-[10px] text-green-400 font-medium">Online</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  <div className="bg-[#1a1a1a] rounded-lg p-1.5 text-center">
                    <div className="text-[8px] text-gray-500">TEMP</div>
                    <div className="text-[#CDFF4D] font-semibold text-xs">42°C</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-1.5 text-center">
                    <div className="text-[8px] text-gray-500">VIBR</div>
                    <div className="text-green-400 font-semibold text-xs">Low</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-1.5 text-center">
                    <div className="text-[8px] text-gray-500">ACCEL</div>
                    <div className="text-white font-semibold text-xs">1.2g</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-1.5 text-center">
                    <div className="text-[8px] text-gray-500">BAT</div>
                    <div className="text-[#CDFF4D] font-semibold text-xs">87%</div>
                  </div>
                </div>
              </div>

              {/* Machine Card 2 */}
              <div className="bg-[#2a2a2a] rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Harvester #3</div>
                      <div className="text-[10px] text-gray-500">Updated 5 min ago</div>
                    </div>
                  </div>
                  <div className="bg-orange-500/20 px-2 py-0.5 rounded-full">
                    <span className="text-[10px] text-orange-400 font-medium">Warning</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  <div className="bg-[#1a1a1a] rounded-lg p-1.5 text-center">
                    <div className="text-[8px] text-gray-500">TEMP</div>
                    <div className="text-orange-400 font-semibold text-xs">78°C</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-1.5 text-center">
                    <div className="text-[8px] text-gray-500">VIBR</div>
                    <div className="text-orange-400 font-semibold text-xs">High</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-1.5 text-center">
                    <div className="text-[8px] text-gray-500">ACCEL</div>
                    <div className="text-white font-semibold text-xs">2.8g</div>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-lg p-1.5 text-center">
                    <div className="text-[8px] text-gray-500">BAT</div>
                    <div className="text-white font-semibold text-xs">64%</div>
                  </div>
                </div>
              </div>

              {/* Machine Card 3 - Partial */}
              <div className="bg-[#2a2a2a] rounded-xl p-3 opacity-70">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-600/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 font-medium text-sm">Sprayer #2</div>
                      <div className="text-[10px] text-gray-600">Last seen 2h ago</div>
                    </div>
                  </div>
                  <div className="bg-gray-600/20 px-2 py-0.5 rounded-full">
                    <span className="text-[10px] text-gray-500 font-medium">Offline</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-[#2a2a2a] rounded-2xl p-2 flex items-center justify-around">
                <div className="flex flex-col items-center gap-0.5">
                  <svg className="w-5 h-5 text-[#CDFF4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="text-[8px] text-[#CDFF4D]">Dashboard</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-[8px] text-gray-500">Analytics</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="text-[8px] text-gray-500">Alerts</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[8px] text-gray-500">Settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default PhoneMockup;
