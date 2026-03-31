import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/metric-card";
import { Cloud, DollarSign, AlertTriangle, Shield } from "lucide-react";

export default function ClimateResiliencePage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-sky-100 text-sky-700 border-sky-300 mb-3">NATIONAL SECURITY THREAT</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Climate Resilience</h1>
        <p className="text-muted-foreground mt-2">4th most climate-vulnerable nation. 20 typhoons/year. $2.8B average annual damage. Manila sinking 10cm/decade. Climate is not an environmental issue — it is a survival issue.</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <MetricCard label="Annual Typhoons" value="20" subtitle="8-9 make landfall" icon={Cloud} />
        <MetricCard label="Annual Damage" value="$2.8B" subtitle="1-2% of GDP" icon={DollarSign} />
        <MetricCard label="Manila Sea Rise" value="2.6cm/yr" subtitle="+ land subsidence" icon={AlertTriangle} />
        <MetricCard label="Insurance Gap" value="98%" subtitle="vs 58% global avg" icon={Shield} />
      </div>
      <Card><CardHeader><CardTitle>Typhoon Damage by Year</CardTitle></CardHeader><CardContent>
        <div className="space-y-1">
          {[
            {y:"2024",d:"PHP 43B+",e:"Typhoon Kristine (PHP 6.2B agri damage); unprecedented season"},
            {y:"2021",d:"PHP 33B+",e:"Typhoon Rai/Odette (PHP 28.6B combined)"},
            {y:"2020",d:"PHP 45B+",e:"Typhoon Rolly (PHP 17.8B) + Ulysses"},
            {y:"2018",d:"PHP 18B+",e:"Typhoon Ompong/Mangkhut"},
            {y:"2013",d:"PHP 95B+",e:"Super Typhoon Haiyan/Yolanda — 6,300+ deaths, $12.9B damage"},
          ].map(t=>(<div key={t.y} className="flex items-center justify-between text-xs border-b border-border/50 py-2"><span className="font-mono w-12">{t.y}</span><span className="font-mono w-20 text-right text-red-600">{t.d}</span><span className="text-muted-foreground flex-1 ml-4">{t.e}</span></div>))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">2010-2020 cumulative agricultural losses from typhoons: <span className="font-mono font-semibold">PHP 268 billion</span>. Average $3.5B in assets at risk annually.</p>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Sea Level Rise — Manila is Sinking</CardTitle></CardHeader><CardContent className="space-y-2 text-xs text-muted-foreground">
        <p>Manila sea levels rising <span className="font-mono font-semibold">2.6cm/year</span> — dramatically above global average (3-4mm/year). Parts of Manila sinking 4-6cm/year from groundwater extraction.</p>
        <p>National average: 5.7-7.0mm/year. By 2050: 0.5-1.2m rise. By 2100: up to 2.5m (pessimistic).</p>
        <p><span className="font-semibold text-foreground">1-meter rise impact:</span> 7,000 sq km, 1.8M people, 2,490 barangays affected. 60% of Philippine cities are coastal.</p>
      </CardContent></Card>
      <Card className="border-primary bg-primary/5"><CardContent className="p-5">
        <h3 className="font-bold mb-2">Climate-Health Technology Nexus</h3>
        <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground">
          <div><h4 className="font-semibold text-foreground mb-1">Post-Disaster Health Surveillance</h4><p>Dengue, leptospirosis, waterborne diseases surge after typhoons. AI surveillance from health evaluations detects outbreaks within 72 hours vs weeks with traditional methods.</p></div>
          <div><h4 className="font-semibold text-foreground mb-1">Offline-Capable Health Platforms</h4><p>During typhoons, connectivity fails. Health platforms that work offline (mobile-first, satellite sync) are critical infrastructure — not nice-to-have but life-saving.</p></div>
          <div><h4 className="font-semibold text-foreground mb-1">Parametric Insurance</h4><p>AI-triggered insurance: when wind speed exceeds threshold, payout is automatic. No claims process. No delay. 98% of typhoon damage is currently uninsured.</p></div>
        </div>
      </CardContent></Card>
    </div>
  );
}
