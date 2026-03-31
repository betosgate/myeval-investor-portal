"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ComposedChart, Line,
} from "recharts";
import { gdpTimeline } from "@/lib/data/philippines-economy";
import { TrendingUp } from "lucide-react";

export function PhilippinesCharts() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4" /> GDP Growth (2018-2026)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={gdpTimeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,88%)" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(0,0%,40%)" }} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "hsl(0,0%,40%)" }} tickFormatter={(v) => `$${v}B`} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "hsl(0,0%,40%)" }} tickFormatter={(v) => `${v}%`} />
              <Tooltip contentStyle={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: 8 }} />
              <Legend />
              <Bar yAxisId="left" dataKey="gdpBn" fill="hsl(175,70%,40%)" name="GDP ($B)" radius={[4,4,0,0]} />
              <Line yAxisId="right" type="monotone" dataKey="growthPct" stroke="hsl(210,70%,50%)" strokeWidth={2} name="Growth %" dot />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4" /> Growth Trajectory — V-Shaped Recovery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={gdpTimeline}>
              <defs>
                <linearGradient id="gdpGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(175,70%,40%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(175,70%,40%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,88%)" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(0,0%,40%)" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(0,0%,40%)" }} tickFormatter={(v) => `$${v}B`} />
              <Tooltip contentStyle={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: 8 }} />
              <Area type="monotone" dataKey="gdpBn" stroke="hsl(175,70%,40%)" fill="url(#gdpGrad)" strokeWidth={2} name="GDP ($B)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
