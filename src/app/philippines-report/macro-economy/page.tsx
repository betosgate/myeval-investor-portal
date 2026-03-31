import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/metric-card";
import { TrendingUp, DollarSign, Globe } from "lucide-react";
import { macroIndicators, gdpTimeline, gdpBySector, aseanComparison } from "@/lib/data/philippines-economy";
import { PhilippinesCharts } from "@/app/philippines-economic-overview/charts";

export default function MacroEconomyPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-blue-100 text-blue-700 border-blue-300 mb-3">MACROECONOMIC FUNDAMENTALS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Macro Economy</h1>
        <p className="text-muted-foreground mt-2">GDP trajectory, inflation, fiscal position, credit ratings, and ASEAN benchmarking.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">{macroIndicators.slice(0, 5).map((m) => <MetricCard key={m.indicator} label={m.indicator} value={m.value} subtitle={m.detail} icon={DollarSign} />)}</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">{macroIndicators.slice(5).map((m) => <MetricCard key={m.indicator} label={m.indicator} value={m.value} subtitle={m.detail} icon={TrendingUp} />)}</div>
      <PhilippinesCharts />
      <Card><CardHeader><CardTitle>GDP by Sector</CardTitle></CardHeader><CardContent className="space-y-4">{gdpBySector.map((s) => (<div key={s.sector} className="space-y-2"><div className="flex justify-between"><span className="font-medium">{s.sector}</span><span className="font-mono font-bold">{s.pct}%</span></div><div className="h-4 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} /></div><p className="text-xs text-muted-foreground">{s.details}</p></div>))}</CardContent></Card>
      <Card><CardHeader><CardTitle>GDP Timeline</CardTitle></CardHeader><CardContent><table className="w-full text-sm"><thead><tr className="border-b"><th className="py-2 text-left text-xs text-muted-foreground">Year</th><th className="py-2 text-right text-xs text-muted-foreground">GDP ($B)</th><th className="py-2 text-right text-xs text-muted-foreground">Growth</th></tr></thead><tbody>{gdpTimeline.map((y) => (<tr key={y.year} className="border-b border-border/50"><td className="py-1.5 font-mono text-xs">{y.year}</td><td className="py-1.5 text-right font-mono text-xs">${y.gdpBn}B</td><td className={`py-1.5 text-right font-mono text-xs ${y.growthPct < 0 ? "text-red-600" : "text-green-700"}`}>{y.growthPct}%</td></tr>))}</tbody></table></CardContent></Card>
      <Card><CardHeader><CardTitle>Credit Ratings</CardTitle></CardHeader><CardContent><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{[{a:"S&P",r:"BBB+",o:"Stable"},{a:"Moody's",r:"Baa2",o:"Stable"},{a:"Fitch",r:"BBB",o:"Stable"}].map((c)=>(<div key={c.a} className="bg-primary/5 rounded-lg p-3 border text-center"><p className="text-xs text-muted-foreground">{c.a}</p><p className="text-xl font-mono font-bold">{c.r}</p><p className="text-xs text-muted-foreground">{c.o}</p></div>))}</div></CardContent></Card>
      <Card><CardHeader><CardTitle><Globe className="h-5 w-5 inline mr-2" />ASEAN Comparison</CardTitle></CardHeader><CardContent><table className="w-full text-xs"><thead><tr className="border-b">{["Country","GDP/Cap","Growth","FDI","Internet","Health$","HDI","CPI"].map(h=><th key={h} className="py-2 text-muted-foreground text-right first:text-left">{h}</th>)}</tr></thead><tbody>{aseanComparison.map(c=>(<tr key={c.country} className={`border-b border-border/50 ${c.country==="Philippines"?"bg-blue-50 font-medium":""}`}><td className="py-1.5">{c.country}</td><td className="py-1.5 text-right font-mono">${c.gdpPerCapita.toLocaleString()}</td><td className="py-1.5 text-right font-mono">{c.growth}%</td><td className="py-1.5 text-right font-mono">${c.fdi}B</td><td className="py-1.5 text-right font-mono">{c.internet}%</td><td className="py-1.5 text-right font-mono">${c.healthSpend}</td><td className="py-1.5 text-right font-mono">{c.hdi}</td><td className="py-1.5 text-right font-mono">{c.corruption}</td></tr>))}</tbody></table></CardContent></Card>
    </div>
  );
}
