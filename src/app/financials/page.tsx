import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { DollarSign, TrendingUp, CalendarClock, Users } from "lucide-react";
import { monthlyProjections, keyMetrics } from "@/lib/data/financials";
import { fmt } from "@/lib/format";
import { FinancialCharts } from "./financial-charts";

export default function FinancialsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Financial Projections</h1>
        <p className="text-muted-foreground mt-2">
          24-month financial model with monthly projections, key metrics, and break-even analysis.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="Break-Even" value={`Month ${keyMetrics.breakEvenMonth}`} subtitle="Sep 2026" icon={CalendarClock} />
        <MetricCard label="Runway" value={`${keyMetrics.runwayMonths} months`} subtitle="At peak burn rate" icon={DollarSign} />
        <MetricCard label="Yr 2 Gross Margin" value={`${keyMetrics.grossMargin.year2}%`} icon={TrendingUp} />
        <MetricCard label="Yr 2 LTV:CAC" value={`${keyMetrics.ltvCacRatio.year2}x`} subtitle="Best-in-class" icon={TrendingUp} />
      </div>

      <FinancialCharts />

      {/* Key Metrics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              {[
                { label: keyMetrics.cac.label, y1: `$${keyMetrics.cac.year1}`, y2: `$${keyMetrics.cac.year2}` },
                { label: keyMetrics.ltv.label, y1: `$${keyMetrics.ltv.year1}`, y2: `$${keyMetrics.ltv.year2}` },
                { label: keyMetrics.ltvCacRatio.label, y1: `${keyMetrics.ltvCacRatio.year1}x`, y2: `${keyMetrics.ltvCacRatio.year2}x` },
                { label: keyMetrics.churnRate.label, y1: `${keyMetrics.churnRate.year1}%`, y2: `${keyMetrics.churnRate.year2}%` },
              ].map((m) => (
                <div key={m.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{m.label}</span>
                  <div className="flex gap-4">
                    <span className="font-mono text-blue-400 w-16 text-right">Yr1: {m.y1}</span>
                    <span className="font-mono text-green-400 w-16 text-right">Yr2: {m.y2}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                { label: keyMetrics.arpu.label, y1: `$${keyMetrics.arpu.year1}`, y2: `$${keyMetrics.arpu.year2}` },
                { label: keyMetrics.grossMargin.label, y1: `${keyMetrics.grossMargin.year1}%`, y2: `${keyMetrics.grossMargin.year2}%` },
                { label: "Monthly Burn (M3)", value: fmt(keyMetrics.burnRate.month3) },
                { label: "Monthly Burn (M12)", value: fmt(keyMetrics.burnRate.month12) },
              ].map((m) => (
                <div key={m.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{m.label}</span>
                  {"value" in m ? (
                    <span className="font-mono">{m.value}</span>
                  ) : (
                    <div className="flex gap-4">
                      <span className="font-mono text-blue-400 w-16 text-right">Yr1: {m.y1}</span>
                      <span className="font-mono text-green-400 w-16 text-right">Yr2: {m.y2}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Monthly Projection Table */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Projections (24 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 px-2 text-left text-muted-foreground font-medium">Month</th>
                  <th className="py-2 px-2 text-right text-muted-foreground font-medium">Revenue</th>
                  <th className="py-2 px-2 text-right text-muted-foreground font-medium">Expenses</th>
                  <th className="py-2 px-2 text-right text-muted-foreground font-medium">Cash Flow</th>
                  <th className="py-2 px-2 text-right text-muted-foreground font-medium">Cumulative</th>
                  <th className="py-2 px-2 text-right text-muted-foreground font-medium">Headcount</th>
                  <th className="py-2 px-2 text-right text-muted-foreground font-medium">Users</th>
                  <th className="py-2 px-2 text-right text-muted-foreground font-medium">B2B</th>
                </tr>
              </thead>
              <tbody>
                {monthlyProjections.map((m) => (
                  <tr key={m.month} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-2 px-2 font-mono">{m.label}</td>
                    <td className="py-2 px-2 text-right font-mono text-green-400">{fmt(m.revenue)}</td>
                    <td className="py-2 px-2 text-right font-mono text-red-400">{fmt(m.expenses)}</td>
                    <td className={`py-2 px-2 text-right font-mono ${m.cashFlow >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {fmt(m.cashFlow)}
                    </td>
                    <td className="py-2 px-2 text-right font-mono">{fmt(m.cumulativeCashFlow)}</td>
                    <td className="py-2 px-2 text-right font-mono">{m.headcount}</td>
                    <td className="py-2 px-2 text-right font-mono">{m.users >= 1_000_000 ? `${(m.users / 1_000_000).toFixed(1)}M` : m.users >= 1000 ? `${(m.users / 1000).toFixed(0)}K` : m.users}</td>
                    <td className="py-2 px-2 text-right font-mono">{m.b2bClients}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
