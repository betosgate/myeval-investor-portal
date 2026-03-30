"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MarketRadar } from "@/components/charts";
import { BarChart3 } from "lucide-react";
import type { CountryData } from "@/lib/data/countries";

export function CountryCharts({ country }: { country: CountryData }) {
  const radarData = [
    { metric: "Internet", value: country.internetPenetration, fullMark: 100 },
    { metric: "Smartphone", value: country.smartphonePenetration, fullMark: 100 },
    { metric: "GDP/Cap ($K)", value: Math.min(country.gdpPerCapita / 150, 100), fullMark: 100 },
    { metric: "Health Spend", value: Math.min(country.healthSpendPerCapita / 12, 100), fullMark: 100 },
    { metric: "Market Size", value: Math.min(country.marketSizeEstimate / 32_000_000, 100), fullMark: 100 },
    { metric: "Team Size", value: Math.min(Object.values(country.staffing).reduce((a, b) => a + b, 0) * 8, 100), fullMark: 100 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <BarChart3 className="h-4 w-4" />
          Market Readiness Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <MarketRadar data={radarData} />
      </CardContent>
    </Card>
  );
}
