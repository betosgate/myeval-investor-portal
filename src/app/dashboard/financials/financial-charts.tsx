"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueAreaChart, CashFlowChart } from "@/components/charts";
import { monthlyProjections } from "@/lib/data/financials";
import { TrendingUp, DollarSign } from "lucide-react";

export function FinancialCharts() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4" />
            Revenue vs. Expenses (24 Months)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RevenueAreaChart data={monthlyProjections} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <DollarSign className="h-4 w-4" />
            Monthly Cash Flow & Cumulative Position
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CashFlowChart data={monthlyProjections} />
        </CardContent>
      </Card>
    </div>
  );
}
