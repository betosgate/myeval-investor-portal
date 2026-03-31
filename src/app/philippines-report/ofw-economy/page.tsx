import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/metric-card";
import { Plane, DollarSign, Users, Heart, Globe } from "lucide-react";

export default function OFWPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-cyan-100 text-cyan-700 border-cyan-300 mb-3">ECONOMIC PILLAR</Badge>
        <h1 className="text-3xl font-bold tracking-tight">OFW & Remittances Economy</h1>
        <p className="text-muted-foreground mt-2">10M+ overseas workers. $36.1B/year in remittances (9.4% of GDP). The human engine that keeps the Philippine economy running — and the human cost it extracts.</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <MetricCard label="OFWs Deployed" value="2.19M" subtitle="Annual (2024 PSA)" icon={Plane} />
        <MetricCard label="Remittances" value="$36.1B" subtitle="9.4% of GDP" icon={DollarSign} />
        <MetricCard label="Total Diaspora" value="10M+" subtitle="Across 200+ countries" icon={Globe} />
        <MetricCard label="Children Left" value="3M+" subtitle="UNICEF estimate" icon={Heart} />
      </div>
      <Card><CardHeader><CardTitle>Top Destinations (2024)</CardTitle></CardHeader><CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div><h4 className="text-sm font-semibold mb-2">By OFW Count</h4>
            {[{c:"Saudi Arabia",p:"21.9%",n:"~480K"},{c:"UAE",p:"12.4%",n:"~272K"},{c:"Kuwait",p:"~5%",n:"~100K"},{c:"Hong Kong",p:"~5%",n:"~95K"},{c:"Singapore",p:"~4%",n:"~88K"},{c:"Qatar",p:"~4%",n:"~80K"},{c:"Taiwan",p:"~3%",n:"~65K"},{c:"Japan",p:"~3%",n:"~60K"}].map(d=>(<div key={d.c} className="flex justify-between text-xs border-b border-border/50 py-1"><span>{d.c}</span><span className="font-mono">{d.p} ({d.n})</span></div>))}
          </div>
          <div><h4 className="text-sm font-semibold mb-2">By Remittance Source</h4>
            {[{c:"United States",p:"40.2%",a:"~$14.3B"},{c:"Singapore",p:"7.6%",a:"~$2.7B"},{c:"Saudi Arabia",p:"6.7%",a:"~$2.4B"},{c:"Japan",p:"5.8%",a:"~$2.1B"},{c:"United Kingdom",p:"4.6%",a:"~$1.6B"},{c:"UAE",p:"~5%",a:"~$1.5B"},{c:"Canada",p:"~4%",a:"~$1.2B"},{c:"Qatar",p:"~3%",a:"~$0.9B"}].map(d=>(<div key={d.c} className="flex justify-between text-xs border-b border-border/50 py-1"><span>{d.c}</span><span className="font-mono">{d.a} ({d.p})</span></div>))}
          </div>
        </div>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Demographics & Social Cost</CardTitle></CardHeader><CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1 text-xs text-muted-foreground">
            <p><span className="font-semibold text-foreground">Gender:</span> 57.2% female, 42.8% male</p>
            <p><span className="font-semibold text-foreground">Age:</span> 25.8% are 45+ (largest group); 21.3% are 30-34</p>
            <p><span className="font-semibold text-foreground">Occupation:</span> 43.6% elementary (domestic work), 15.4% machine operators, 12.7% service/sales, ~8% professionals</p>
            <p><span className="font-semibold text-foreground">Female OFWs:</span> 68.4% in elementary occupations (domestic helpers)</p>
            <p><span className="font-semibold text-foreground">Average remittance:</span> PHP 129,000/year (~$2,300)</p>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p className="font-semibold text-red-600">The Human Cost:</p>
            <p>&bull; 3M+ children left behind (UNICEF), many experiencing depression and anxiety</p>
            <p>&bull; 7% of all Filipino households have an OFW member separated from family</p>
            <p>&bull; Higher rates of behavioral issues in children of OFWs</p>
            <p>&bull; Family rupture beginning in early childhood affects lifelong outcomes</p>
            <p>&bull; DMW mandate: &ldquo;make overseas employment a choice, not a necessity&rdquo;</p>
          </div>
        </div>
      </CardContent></Card>
      <Card className="border-green-200 bg-green-50/30"><CardContent className="p-5">
        <h3 className="font-bold mb-2">The OFW Health Technology Opportunity</h3>
        <p className="text-sm text-muted-foreground">10M OFWs have 30M+ family members in the Philippines who lack health monitoring while the breadwinner is abroad. AI-powered family health monitoring lets an OFW in Saudi Arabia track their parents&apos; health evaluations in Pampanga in real-time. OFW remittances include $5B+ in health spending — AI health platforms optimize how that money is spent. This is a <span className="font-semibold text-foreground">largely unserved market segment</span> with strong emotional and economic drivers.</p>
      </CardContent></Card>
    </div>
  );
}
