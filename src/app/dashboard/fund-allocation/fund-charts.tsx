"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FundPieChart } from "@/components/charts";
import { fundAllocation } from "@/lib/data/financials";
import { DollarSign } from "lucide-react";

export function FundCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <DollarSign className="h-4 w-4" />
          $50M Fund Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FundPieChart data={fundAllocation} />
      </CardContent>
    </Card>
  );
}
