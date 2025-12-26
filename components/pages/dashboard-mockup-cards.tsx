"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WebDashboardMockup_DualScreen from "../../components/mockups/web-dashboard-mockup2";
import BackgroundShades from "@/components/utils/background-shades";

// Lucide Icons
import { Truck, Activity, Bell, Cpu } from "lucide-react";

export default function DashboardWithCardsAndMockup() {
  const cards = [
    {
      icon: Truck,
      title: "Fleet Overview",
      description: "Active units and status",
      content: "Real-time visibility into all connected vehicles.",
    },
    {
      icon: Activity,
      title: "Live Monitoring",
      description: "Sensor & telemetry data",
      content: "Temperature, battery, network, and system health.",
    },
    {
      icon: Bell,
      title: "Alerts",
      description: "Critical notifications",
      content: "Immediate warnings for anomalies and failures.",
    },
    {
      icon: Cpu,
      title: "Diagnostics",
      description: "System performance",
      content: "CPU load, network stability, and uptime metrics.",
    },
  ];

  return (
    <section className="w-full py-12 bg-neutral-50 relative isolate">
      <BackgroundShades />

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-x-hidden relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Card key={idx} className="bg-white border-neutral-200 shadow-sm">
                <CardHeader className="flex items-center gap-3">
                   <div className="relative bg-[#d7f448] p-2 rounded-xl text-neutral-900 shadow-md border border-[#d7f448]/20">
                 <Icon size={20} className="text-lg h- text-neutral-900" />
                  </div>

                   
             
                  
                  <div>
                    <CardTitle className="text-neutral-900 grotesk">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-neutral-500">
                      {card.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600">
                  {card.content}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <WebDashboardMockup_DualScreen />
        </div>
      </div>
    </section>
  );
}
