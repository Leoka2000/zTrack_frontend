import PhoneMockup from "@/components/PhoneMockup";
import Image from "next/image";
import WebDashboardMockup from "../mockups/web-dashboard-mockup";

const Index = () => {
  return (
    <div className="min-h-screen rounded-4xl bg-[#1a1a1a]">
      <div className="p-4 md:p-8">
        <div className="bg-[#CDFF4D] rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="flex-1 max-w-lg">
              <h1 className="text-3xl grotesk md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
                Power Up Your Farm Experience with ZTrack
              </h1>
              <p className="text-gray-700 text-base md:text-lg mb-8">
                Monitor your agricultural machines, track sensor data in
                real-time, and access smart diagnostics all in one app. Download
                now and take control of your farm operations.
              </p>

              <div className="flex items-center gap-8 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-black">
                    4.8
                  </div>
                  <div className="text-sm text-gray-600">Rating on stores</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-black">
                    500k+
                  </div>
                  <div className="text-sm text-gray-600">Active users</div>
                </div>
              </div>

              
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
             <WebDashboardMockup/>
            </div>
          </div>
        </div>
      </div>

      <footer className="px-4 md:px-8 py-12 md:py-16">
        <div className=" flex justify-around w-full h-auto mb-20">
          <Image
            src="/zanelogo.png"
            alt="Logo"
            width={300}
            height={350}
            className="mr-0.5 object-cover filter  invert brightness-0"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <h3 className="text-white text-lg font-medium mb-6">
                Navigation
              </h3>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Dashboard</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </nav>
            </div>

            <div>
              <h3 className="text-white text-lg font-medium mb-6">
                Legal & Policies
              </h3>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </nav>
            </div>

            <div>
              <h3 className="text-white text-lg font-medium mb-6">Social</h3>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6Z" />
                  </svg>
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19Z" />
                  </svg>
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10,15L15.19,12L10,9V15Z" />
                  </svg>
                  YouTube
                </a>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500 text-sm">
              2025 © All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
