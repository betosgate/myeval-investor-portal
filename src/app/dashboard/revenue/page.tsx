import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { DollarSign, TrendingUp, Percent } from "lucide-react";
import { revenueStreams, totalYear1, totalYear2 } from "@/lib/data/financials";
import { fmt } from "@/lib/format";
import { RevenueCharts } from "./revenue-charts";

export default function RevenuePage() {
  const avgMargin = Math.round(
    revenueStreams.reduce((s, r) => s + r.margin, 0) / revenueStreams.length
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Revenue Model</h1>
        <p className="text-muted-foreground mt-2">
          9 distinct revenue streams across B2C, B2B, and B2G channels.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="Year 1 Revenue" value={fmt(totalYear1)} icon={DollarSign} />
        <MetricCard label="Year 2 Revenue" value={fmt(totalYear2)} icon={TrendingUp} trend={`+${Math.round(((totalYear2 - totalYear1) / totalYear1) * 100)}% YoY`} />
        <MetricCard label="Revenue Streams" value="9" subtitle="Diversified income" icon={DollarSign} />
        <MetricCard label="Avg Gross Margin" value={`${avgMargin}%`} icon={Percent} />
      </div>

      <RevenueCharts />

      <Separator />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Revenue Stream Details</h2>
        <div className="grid grid-cols-1 gap-4">
          {revenueStreams.map((stream, i) => (
            <Card key={stream.name}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground w-4">{i + 1}.</span>
                      <h3 className="font-semibold">{stream.name}</h3>
                      <Badge variant="outline" className="text-xs font-mono">
                        {stream.margin}% margin
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 ml-7">
                      {stream.description}
                    </p>
                  </div>
                  <div className="text-right ml-6 shrink-0">
                    <div className="space-y-1">
                      <div>
                        <p className="text-xs text-muted-foreground">Year 1</p>
                        <p className="font-mono font-medium text-blue-400">{fmt(stream.year1)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Year 2</p>
                        <p className="font-mono font-medium text-green-400">{fmt(stream.year2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
