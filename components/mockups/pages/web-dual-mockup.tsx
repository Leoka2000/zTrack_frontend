// components/CardsAndMockupSection.jsx
"use client";

import React from "react";
// Import your new dashboard mockup
import WebDashboardMockup_DualScreen from "./../web-dashboard-mockup2";

// --- Shadcn-style Card Component (simplified for demonstration) ---
const ShadcnCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col space-y-1.5 p-6">
        <Icon className="mb-4 h-6 w-6 text-neutral-600" />
        <h3 className="text-lg font-semibold leading-none tracking-tight text-neutral-900">{title}</h3>
      </div>
      <div className="p-6 pt-0">
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

// --- Main Layout Component ---
const CardsAndMockupSection = () => {
  const cardData = [
    {
      icon: LayoutDashboard,
      title: "Real-time Monitoring",
      description: "Keep track of all your essential metrics with live data feeds."
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Receive immediate notifications for critical events and system changes."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Dive deep into performance data with comprehensive reporting tools."
    },
    {
      icon: Settings,
      title: "Customizable Settings",
      description: "Tailor your dashboard experience to fit your specific operational needs."
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Container: Four Shadcn Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <ShadcnCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Right Container: The New Dashboard Mockup */}
        <div className="flex justify-center lg:justify-end">
          <WebDashboardMockup_DualScreen />
        </div>
      </div>
    </div>
  );
};

export default CardsAndMockupSection;