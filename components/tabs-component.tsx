'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = [
  {
    id: 'image-generate',
    label: 'Image Generate',
    title: 'Bring Your Vision',
    description: 'Generate stunning visuals in seconds with real-time, AI-powered guidance. Whether you\'re designing, illustrating, or imagining from scratch—our insights help you create with clarity and precision.',
    image: '/firefighter.jpg',
    cta: 'Generate Thumbnail'
  },
  {
    id: 'text-generate',
    label: 'Text Generate',
    title: 'Craft Perfect Content',
    description: 'Transform your ideas into compelling text with advanced AI assistance. From articles to creative writing, generate polished content that resonates with your audience and captures your unique voice.',
    image: '/sensor.jpg',
    cta: 'Create Content'
  },
  {
    id: 'ask-advice',
    label: 'Ask Advice',
    title: 'Expert Guidance',
    description: 'Get intelligent recommendations and strategic insights powered by AI. Whether you need creative direction, technical advice, or strategic planning—receive personalized guidance tailored to your goals.',
    image: '/firefighter.jpg',
    cta: 'Get Insights'
  }
];

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
        
            <div className="flex gap-4 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-[#d7f448] bg-[#d7f448]/10 text-[#d7f448]'
                      : 'border-gray-700 bg-gray-900/50 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

   
            <div className="space-y-6" key={activeTab}>
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d7f448] to-[#b8d636] animate-fadeInUp">
                {activeContent?.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed animate-fadeInUp animation-delay-100">
                {activeContent?.description}
              </p>
            </div>
          </div>

     
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800 shadow-2xl">
     
              <div className="flex flex-col items-center gap-6 mb-8">
                <button className="w-full bg-gray-800/50 hover:bg-gray-800 text-gray-300 rounded-2xl py-4 px-6 transition-all duration-300 border border-gray-700">
                  Ask to AI
                </button>
                
                <button className="w-full bg-gradient-to-r from-[#d7f448] to-[#c8e83f] hover:from-[#c8e83f] hover:to-[#d7f448] text-gray-950 font-semibold rounded-2xl py-4 px-6 transition-all duration-300 shadow-lg shadow-[#d7f448]/20">
                  {activeContent?.cta}
                </button>

   
                <div className="w-14 h-14 bg-gray-800/50 rounded-full flex items-center justify-center border border-gray-700">
                  <svg className="w-6 h-6 text-[#d7f448]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>


              <div className="space-y-4">
                <h3 className="text-gray-400 text-center text-lg">Your Thumbnail</h3>
                <div 
                  key={activeTab}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800 shadow-xl animate-scaleIn"
                >
                  <Image
                    src={activeContent?.image || '/placeholder.jpg'}
                    alt="Generated thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}