"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimelineChart } from "@/components/charts";
import { monthlyProjections } from "@/lib/data/financials";
import { CalendarClock } from "lucide-react";

export function TimelineCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <CalendarClock className="h-4 w-4" />
          Revenue & Headcount Growth Over 24 Months
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TimelineChart data={monthlyProjections} />
      </CardContent>
    </Card>
  );
}
