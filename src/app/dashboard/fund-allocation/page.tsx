import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { DollarSign, Building2, Globe } from "lucide-react";
import { fundAllocation } from "@/lib/data/financials";
import { countries } from "@/lib/data/countries";
import { operatingCosts } from "@/lib/data/staffing";
import { fmt } from "@/lib/format";
import { FundCharts } from "./fund-charts";

export default function FundAllocationPage() {
  const totalCountryInvestment = countries.reduce(
    (s, c) => s + c.investmentAllocation,
    0
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">$50M Fund Allocation</h1>
        <p className="text-muted-foreground mt-2">
          How every dollar of the fund is deployed across technology, operations, markets, and reserves.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard label="Total Fund" value="$50M" icon={DollarSign} />
        <MetricCard label="Country Investment" value={fmt(totalCountryInvestment)} icon={Globe} subtitle="Across 8 markets" />
        <MetricCard label="Reserve" value="$7.5M" icon={Building2} subtitle="Working capital + contingency" />
      </div>

      <FundCharts />

      {/* Allocation Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Fund Allocation Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fundAllocation.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <div className="flex items-center gap-4">
                    <span className="font-mono font-medium">{fmt(item.amount)}</span>
                    <span className="text-muted-foreground font-mono w-10 text-right">{item.pct}%</span>
                  </div>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${item.pct * 4}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Country Investment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Investment by Country
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {countries
              .sort((a, b) => b.investmentAllocation - a.investmentAllocation)
              .map((c) => {
                const pct = Math.round(
                  (c.investmentAllocation / totalCountryInvestment) * 100
                );
                const roi = Math.round(
                  (c.revenueProjection.year2 / c.investmentAllocation) * 100
                );
                return (
                  <div key={c.slug} className="flex items-center gap-4">
                    <span className="text-sm font-medium w-24">{c.name}</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{
                          width: `${(c.investmentAllocation / 6_000_000) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="font-mono text-sm w-16 text-right">
                      {fmt(c.investmentAllocation)}
                    </span>
                    <span className="text-xs text-muted-foreground w-10 text-right">
                      {pct}%
                    </span>
                    <span className="text-xs text-green-400 font-mono w-16 text-right">
                      {roi}% ROI
                    </span>
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>

      {/* Operating Costs */}
      <Card>
        <CardHeader>
          <CardTitle>Annual Operating Costs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {Object.values(operatingCosts).map((cost) => (
              <div
                key={cost.description}
                className="flex items-center justify-between bg-muted/30 rounded-lg p-3"
              >
                <div>
                  <p className="text-sm font-medium">{cost.description}</p>
                </div>
                <span className="font-mono text-sm">
                  {"annual" in cost
                    ? fmt(cost.annual)
                    : "total" in cost
                    ? fmt(cost.total)
                    : ""}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
