"use client";

import React from "react";
import Image from "next/image";
import WebDashboardMockup from "../mockups/web-dashboard-mockup";
import { Instagram, Link, Youtube } from "lucide-react";

export default function Footer() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "faq", label: "FAQ" },
    { id: "team", label: "Team" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const NAVBAR_HEIGHT = 80;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - NAVBAR_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      {/* Mockup Section */}
      <div className="p-4 md:p-8">
        <div className="bg-[#CDFF4D] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Side: Content */}
            <div className="flex-1 w-full z-10">
              <h1 className="text-3xl lg:text-3xl font-bold text-black leading-tight mb-6 grotesk">
                Power Up Your Farm Experience with ZTrack
              </h1>
              <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                Monitor your agricultural machines, track sensor data in
                real-time, and access smart diagnostics all in one app. Download
                now and take control of your farm operations.
              </p>

              <div className="flex items-center gap-8 mb-8 md:gap-12">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-black">
                    4.8
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Rating on stores
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-black">
                    500k+
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Active users
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Mockup */}
            <div className="flex-1 w-full flex justify-center lg:justify-end items-center overflow-visible">
              <div className="w-full scale-125 md:mt-0 mt-10 md:scale-120 lg:max-w-none">
                <WebDashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 md:py-16">
        <div className="flex justify-center w-full mb-20">
          <Image
            src="/zanelogo.png"
            alt="Logo"
            width={300}
            height={80}
            className="object-contain invert brightness-0 opacity-50"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Navigation */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">
                Navigation
              </h3>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">
                Legal & Policies
              </h3>
              <nav className="flex flex-col gap-3">
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Terms & Conditions
                </p>
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </p>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">Social</h3>
              <nav className="flex flex-col gap-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/zanesystems/posts/?feedView=all"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Link size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@zanesystemskft5905"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Youtube size={18} />
                  YouTube
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t flex flex-col gap-4 justify-center border-gray-800 pt-8 items-center">
            <p className="text-gray-100 grotesk text-sm tracking-wide">
              2025 © All rights reserved
            </p>
            <a
              href="https://www.linkedin.com/in/leoreus"
              target="_blank"
              className="grotesk text-[#CDFF4D] text-sm font-medium hover:underline transition-all"
            >
              Developed by Leo Reus
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
