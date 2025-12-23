'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Flame, BarChart3, Wrench, Shield } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, iconColor = '#d7f448', visible, index }) => {
  return (
    <div
      className={`
        relative w-full transition-all duration-700 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-neutral-950 rounded-3xl blur-3xl" />

      <div className="relative bg-neutral-950 h-[80vh] rounded-3xl p-8 backdrop-blur-xl border border-neutral-900 shadow-2xl">
        
        <div className="relative rounded-2xl mb-12 overflow-hidden" style={{ height: '300px' }}>
          
    
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundColor: "#0a0a0a",
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
                radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
              `,
              backgroundSize: "10px 10px",
              imageRendering: "pixelated",
            }}
          />


          <div className="absolute inset-0 z-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
          <div className="absolute inset-0 z-0" style={{
            backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="absolute w-56 h-56 rounded-full animate-pulse" style={{ backgroundColor: 'rgba(215, 244, 72, 0.05)' }} />
            <div className="absolute w-44 h-44 rounded-full" style={{ backgroundColor: 'rgba(215, 244, 72, 0.1)' }} />
            
            <div className="relative w-20 h-20 rounded-full bg-neutral-950 border-4 shadow-2xl flex items-center justify-center" style={{ borderColor: iconColor }}>
              <div className="absolute inset-2 rounded-full bg-neutral-950 shadow-inner" />
              <div className="relative z-10">
                <Icon className="w-12 h-12" style={{ color: iconColor }} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

  
        <div className="text-center space-y-4">
          <h2 className="text-3xl grotesk font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function AgrosentinelsFeatures() {
  const features = [
    {
      icon: Flame,
      title: "Fire Protection",
      description: "You can save significant amounts of money by preventing agricultural machine fires. Keep your machines, workers and farmland safe with constant sensory monitoring!"
    },
    {
      icon: BarChart3,
      title: "Production Supervision",
      description: "Monitor machine productivity in real time with an easy-to-use mobile app. Analyze your statistics easily and take your productivity to the next level!"
    },
    {
      icon: Wrench,
      title: "Machine Maintenance Management",
      description: "Failure to perform maintenance may result in unexpected errors that may be multiplied by subsequent repairs. The Agrosentinels System will immediately notify you if your machines need maintenance."
    },
    {
      icon: Shield,
      title: "Property Protection",
      description: "Our system's technology with its built-in motion sensors and continuous cloud-based communication can prevent the theft of agricultural machinery."
    }
  ];


  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const i = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, i])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              data-index={index}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                visible={visibleCards.includes(index)}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
