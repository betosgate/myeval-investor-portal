"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueAreaChart, CountryRevenueBar, UserGrowthChart } from "@/components/charts";
import { monthlyProjections } from "@/lib/data/financials";
import { countries } from "@/lib/data/countries";
import { TrendingUp, Globe, Users } from "lucide-react";

export function ExecutiveDashboardCharts() {
  const countryRevData = countries.map((c) => ({
    name: c.name,
    year1: c.revenueProjection.year1,
    year2: c.revenueProjection.year2,
  }));

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4" />
            24-Month Revenue vs. Expenses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RevenueAreaChart data={monthlyProjections} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Globe className="h-4 w-4" />
            Revenue by Country
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CountryRevenueBar data={countryRevData} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Users className="h-4 w-4" />
            User & B2B Client Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <UserGrowthChart data={monthlyProjections} />
        </CardContent>
      </Card>
    </div>
  );
}
