import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/metric-card";
import { Heart, DollarSign, AlertTriangle, Brain, Plane } from "lucide-react";
import { healthcareDeepDive } from "@/lib/data/philippines-economy";
import { fmt, fmtNum } from "@/lib/format";

export default function HealthcarePage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-red-100 text-red-700 border-red-300 mb-3">SECTOR DEEP DIVE</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Healthcare Deep Dive</h1>
        <p className="text-muted-foreground mt-2">1.2 doctors per 10K, 54% out-of-pocket, 97% mental health treatment gap, 60K workers leaving annually.</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <MetricCard label="Market Size" value={fmt(healthcareDeepDive.totalMarketSize)} icon={DollarSign} subtitle={`${healthcareDeepDive.outOfPocketPct}% OOP`} />
        <MetricCard label="Doctors/10K" value={healthcareDeepDive.physiciansPerK.toString()} icon={Heart} subtitle="WHO min: 10" />
        <MetricCard label="Maternal Mortality" value={`${healthcareDeepDive.maternalMortality}/100K`} icon={Heart} subtitle="High for ASEAN" />
        <MetricCard label="Worker Emigration" value={`${(healthcareDeepDive.workerEmigration.annualDepartures/1000).toFixed(0)}K/yr`} icon={Plane} />
      </div>
      <Card><CardHeader><CardTitle>Top 10 Causes of Death</CardTitle></CardHeader><CardContent className="space-y-2">{healthcareDeepDive.topCauses.map(c=>(<div key={c.cause} className="flex items-center gap-3"><span className="text-sm w-52 shrink-0">{c.cause}</span><div className="flex-1 h-3 bg-muted rounded-full overflow-hidden"><div className="h-full bg-red-400 rounded-full" style={{width:`${c.pctTotal*5.5}%`}}/></div><span className="font-mono text-xs w-24 text-right">{fmtNum(c.deaths)}</span><span className="font-mono text-xs text-muted-foreground w-10 text-right">{c.pctTotal}%</span></div>))}</CardContent></Card>
      <Card className="border-red-200 bg-red-50/30"><CardHeader><CardTitle><AlertTriangle className="h-5 w-5 inline mr-2 text-red-600"/>Regional Disparities</CardTitle></CardHeader><CardContent><table className="w-full text-sm"><thead><tr className="border-b">{["Region","Docs/10K","Beds/10K","Poverty","Gap vs NCR"].map(h=><th key={h} className="py-2 text-xs text-muted-foreground text-right first:text-left">{h}</th>)}</tr></thead><tbody>{healthcareDeepDive.regionalDisparities.map(r=>(<tr key={r.region} className="border-b border-border/50"><td className="py-2 text-xs font-medium">{r.region}</td><td className="py-2 text-right font-mono text-xs">{r.physPer10K}</td><td className="py-2 text-right font-mono text-xs">{r.bedsPer10K}</td><td className="py-2 text-right font-mono text-xs">{r.povertyPct}%</td><td className="py-2 text-right font-mono text-xs text-red-600">{r.region.includes("NCR")?"—":`${(3.5/r.physPer10K).toFixed(1)}x fewer`}</td></tr>))}</tbody></table><p className="text-xs text-muted-foreground mt-3">BARMM: <span className="font-semibold text-red-600">11.7x fewer doctors</span> than Manila. This is where AI health screening transforms outcomes.</p></CardContent></Card>
      <Card className="border-purple-200 bg-purple-50/30"><CardHeader><CardTitle><Brain className="h-4 w-4 inline mr-2"/>Mental Health Crisis</CardTitle></CardHeader><CardContent><div className="grid grid-cols-4 gap-4">{[{v:healthcareDeepDive.mentalHealth.psychiatrists,l:"Psychiatrists"},{v:healthcareDeepDive.mentalHealth.ratio,l:"Ratio"},{v:healthcareDeepDive.mentalHealth.treatmentGap,l:"Treatment gap"},{v:`${(healthcareDeepDive.mentalHealth.affectedPopulation/1e6).toFixed(1)}M`,l:"Affected"}].map(m=>(<div key={m.l} className="bg-white rounded-lg p-3 border text-center"><p className="text-2xl font-mono font-bold">{m.v}</p><p className="text-xs text-muted-foreground">{m.l}</p></div>))}</div></CardContent></Card>
      <Card className="border-primary bg-primary/5"><CardContent className="p-5"><h3 className="font-bold mb-2">Where AI Health Technology Fits</h3><div className="grid grid-cols-3 gap-4">{[{t:"AI Diagnostics",d:"TB screening (4th highest burden globally), diabetic retinopathy, cervical cancer. AI reads where no specialist exists."},{t:"Telemedicine for 7,641 Islands",d:"1,000+ AI hubs connecting isolated communities. Saves patients $150-300/referral trip."},{t:"AI Force Multiplier",d:"One doctor with AI = 5 doctors without. Equivalent of adding 6,000 virtual doctors."}].map(i=>(<div key={i.t} className="space-y-1"><h4 className="text-sm font-semibold">{i.t}</h4><p className="text-xs text-muted-foreground">{i.d}</p></div>))}</div></CardContent></Card>
    </div>
  );
}
