"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueStreamBar } from "@/components/charts";
import { revenueStreams } from "@/lib/data/financials";
import { BarChart3 } from "lucide-react";

export function RevenueCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <BarChart3 className="h-4 w-4" />
          Revenue by Stream — Year 1 vs Year 2
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RevenueStreamBar data={revenueStreams} />
      </CardContent>
    </Card>
  );
}
