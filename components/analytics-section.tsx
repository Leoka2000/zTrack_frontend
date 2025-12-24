"use client";

import React from "react";
import {
  Activity,
  ShieldCheck,
  Zap,
  Wifi,
  ArrowUpRight,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



const features = [
  {
    title: "Real-time Tracking",
    description: "Monitor livestock movement with live GPS telemetry.",
    icon: Activity,
  },
  {
    title: "Secure Infrastructure",
    description: "Enterprise-grade encryption and device authentication.",
    icon: ShieldCheck,
  },
  {
    title: "Low Power Devices",
    description: "Ultra-efficient hardware designed for long field life.",
    icon: Zap,
  },
  {
    title: "Always Connected",
    description: "Reliable signal coverage across remote locations.",
    icon: Wifi,
  },
];

const CommandCenterMockupWrapper = () => {
  return (

    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT: Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden border-muted/40 bg-background/60 backdrop-blur"
            >
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <CardTitle className="text-base font-semibold">
                  {feature.title}
                </CardTitle>
                <feature.icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>

                <div className="flex items-center text-xs font-medium text-primary">
                  Learn more
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* RIGHT: Dashboard Mockup */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <CommandCenterMockupWrapper/>
        </div>

      </div>
    </section>
  );
};

export default CommandCenterMockupWrapper;
