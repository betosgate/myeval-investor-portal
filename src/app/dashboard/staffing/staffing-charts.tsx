"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadcountChart } from "@/components/charts";
import { headcountTimeline } from "@/lib/data/staffing";
import { Users } from "lucide-react";

export function StaffingCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Users className="h-4 w-4" />
          Headcount Growth by Phase
        </CardTitle>
      </CardHeader>
      <CardContent>
        <HeadcountChart data={headcountTimeline} />
      </CardContent>
    </Card>
  );
}
