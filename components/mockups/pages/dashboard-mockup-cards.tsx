"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import WebDashboardMockup_DualScreen from "./../web-dashboard-mockup2";

export default function DashboardWithCardsAndMockup() {
  return (
    <section className="w-full px-6 py-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left side: 4 shadcn cards (2x2 grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="bg-neutral-900 border-white/10">
            <CardHeader>
              <CardTitle>Fleet Overview</CardTitle>
              <CardDescription>Active units and status</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-white/70">
              Real-time visibility into all connected vehicles.
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border-white/10">
            <CardHeader>
              <CardTitle>Live Monitoring</CardTitle>
              <CardDescription>Sensor & telemetry data</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-white/70">
              Temperature, battery, network, and system health.
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border-white/10">
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>Critical notifications</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-white/70">
              Immediate warnings for anomalies and failures.
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border-white/10">
            <CardHeader>
              <CardTitle>Diagnostics</CardTitle>
              <CardDescription>System performance</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-white/70">
              CPU load, network stability, and uptime metrics.
            </CardContent>
          </Card>
        </div>

        {/* Right side: existing mockup component */}
        <div className="w-full flex justify-center lg:justify-end">
          <WebDashboardMockup_DualScreen />
        </div>
      </div>
    </section>
  );
}
