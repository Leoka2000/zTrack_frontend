"use client";

import React from "react";
import Image from "next/image";

const PhoneMockup = () => {
  return (
    <div className="flex items-center justify-center gap-4 lg:gap-8 relative transform scale-90 sm:scale-100">
      
      {/* --- PHONE 1: BRAND SPLASH SCREEN (LEFT) --- */}
      <div className="relative z-10 w-[280px] h-[580px] bg-neutral-900 rounded-[3.5rem] p-3 shadow-2xl border-4 border-neutral-800">
        {/* Screen Container */}
        <div className="w-full h-full bg-[#CDFF4D] rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 flex items-center justify-center">
            <div className="w-16 h-16 bg-black rounded-full absolute -top-6 -right-6 blur-md opacity-20"></div>
          </div>

          {/* Logo Section */}
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            {/* Logo Icon */}
            <div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center shadow-lg">
               {/* Abstract Z or Location Pin Logo */}
               <svg className="w-10 h-10 text-[#CDFF4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
            </div>
            
            {/* Brand Name */}
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">
              ztrackmap
            </h1>
          </div>
        </div>
        
        {/* Side Buttons (Volume/Power) - Cosmetic */}
        <div className="absolute top-24 -left-[2px] w-[2px] h-8 bg-neutral-700 rounded-l-md" />
        <div className="absolute top-36 -left-[2px] w-[2px] h-14 bg-neutral-700 rounded-l-md" />
        <div className="absolute top-28 -right-[2px] w-[2px] h-20 bg-neutral-700 rounded-r-md" />
      </div>


      {/* --- PHONE 2: MAP INTERFACE (RIGHT) --- */}
      <div className="relative z-0 -ml-12 lg:-ml-16 mt-12 w-[280px] h-[580px] bg-neutral-900 rounded-[3.5rem] p-3 shadow-2xl border-4 border-neutral-800">
        
        {/* Screen Container */}
        <div className="w-full h-full bg-[#f0f0f0] rounded-[3rem] relative overflow-hidden flex flex-col">
          
           {/* Dynamic Island / Notch */}
           <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-30" />
           
           {/* Status Bar Time */}
           <div className="absolute top-5 left-8 text-[10px] font-semibold text-black z-30">9:41</div>
           <div className="absolute top-5 right-8 flex gap-1 z-30">
              <div className="w-4 h-3 bg-black rounded-sm opacity-20"></div>
              <div className="w-4 h-3 bg-black rounded-sm"></div>
           </div>

          {/* APP UI: Header */}
          <div className="pt-14 px-4 pb-4 bg-white/90 backdrop-blur-sm z-20 shadow-sm">
            {/* Search Bar */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2.5 mb-3 shadow-inner">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-xs text-gray-400 font-medium">Search Ear Tag ID...</span>
              <div className="ml-auto flex items-center gap-1 bg-white px-2 py-0.5 rounded-md shadow-sm border border-gray-100">
                 <span className="text-[10px] font-bold text-neutral-800">Herds</span>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
               <div className="flex items-center gap-1 bg-[#CDFF4D] px-3 py-1.5 rounded-lg border border-[#bce646]">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-neutral-900">Live</span>
               </div>
               <div className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white">
                  <span className="text-[10px] font-medium text-gray-600">Grazing</span>
               </div>
               <div className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white">
                  <span className="text-[10px] font-medium text-gray-600">Resting</span>
               </div>
            </div>
          </div>

          {/* APP UI: Map Area */}
          <div className="flex-1 relative bg-[#e5e5e5] w-full">
            {/* Fake Map Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-30" 
                 style={{backgroundImage: 'linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
            </div>
            
            {/* River/Road Curve */}
            <svg className="absolute inset-0 w-full h-full text-white opacity-60 pointer-events-none" viewBox="0 0 280 400" preserveAspectRatio="none">
               <path d="M-10,100 C50,150 100,50 180,200 C220,280 200,350 290,380" stroke="currentColor" strokeWidth="15" fill="none" />
            </svg>

            {/* Geofence Zone (Polygon) */}
            <svg className="absolute top-20 left-10 w-48 h-48 opacity-20 pointer-events-none" viewBox="0 0 100 100">
               <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="#CDFF4D" stroke="#a3c936" strokeWidth="2" />
            </svg>

            {/* MAP PIN 1: Main Herd */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer">
              <div className="relative">
                 <div className="w-16 h-16 rounded-full bg-[#CDFF4D]/30 absolute -top-4 -left-4 animate-ping"></div>
                 <div className="bg-white px-3 py-1.5 rounded-xl shadow-lg border border-[#CDFF4D] flex items-center gap-2 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-[#CDFF4D]"></div>
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold leading-none text-neutral-900">Herd A</span>
                       <span className="text-[8px] text-gray-500 leading-none">42 Sheep</span>
                    </div>
                 </div>
                 {/* Pin Triangle */}
                 <div className="w-3 h-3 bg-white border-r border-b border-[#CDFF4D] transform rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-10"></div>
              </div>
            </div>

            {/* MAP PIN 2: Specific Cow */}
            <div className="absolute top-60 left-16 flex flex-col items-center">
               <div className="bg-neutral-900 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                  <div className="text-[10px] font-bold text-white">#104</div>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
               </div>
               <div className="w-2 h-2 bg-neutral-900 transform rotate-45 -mt-1"></div>
            </div>

            {/* MAP PIN 3: Far Cow */}
            <div className="absolute bottom-24 right-12 flex flex-col items-center">
               <div className="bg-white px-2 py-1 rounded-lg shadow-sm border border-gray-200 flex items-center gap-1.5">
                  <div className="text-[9px] font-bold text-gray-700">#29</div>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
               </div>
               <div className="w-2 h-2 bg-white transform rotate-45 -mt-1 border-b border-r border-gray-200"></div>
            </div>

          </div>

          {/* APP UI: Bottom Nav */}
          <div className="bg-white px-6 py-4 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)] relative z-20">
             <div className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" /></svg>
             </div>
             <div className="flex flex-col items-center gap-1 opacity-40">
                <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
             </div>
             <div className="flex flex-col items-center gap-1 opacity-40">
                <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
             </div>
          </div>

        </div>
        
        {/* Side Buttons (Volume/Power) - Cosmetic */}
        <div className="absolute top-24 -left-[2px] w-[2px] h-8 bg-neutral-700 rounded-l-md" />
        <div className="absolute top-36 -left-[2px] w-[2px] h-14 bg-neutral-700 rounded-l-md" />
        <div className="absolute top-28 -right-[2px] w-[2px] h-20 bg-neutral-700 rounded-r-md" />
      </div>

    </div>
  );
};

export default PhoneMockup;