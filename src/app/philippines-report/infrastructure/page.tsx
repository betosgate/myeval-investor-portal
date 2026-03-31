import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/metric-card";
import { Building2, DollarSign, AlertTriangle, Train } from "lucide-react";

const flagshipProjects = [
  { name: "New Manila International Airport (Bulacan)", cost: "PHP 740B ($13B)", status: "Under construction", note: "San Miguel Corp. Phase 1: 35M passengers (2027-28). Ultimate: 100M." },
  { name: "Metro Manila Subway (Line 9)", cost: "PHP 488B ($8.5B)", status: "Under construction", note: "First underground metro. 36km, 17 stations. JICA-funded. Target: 2028-29." },
  { name: "North-South Commuter Railway", cost: "PHP 777B ($13.5B)", status: "Under construction", note: "147km Clark to Calamba. JICA-funded. Transformational for Greater Manila." },
  { name: "MRT-7", cost: "PHP 62.7B ($1.1B)", status: "Under construction", note: "22km QC to Bulacan. San Miguel." },
  { name: "Subic-Clark Railway", cost: "PHP 50B ($870M)", status: "Under construction", note: "Connecting economic zones." },
  { name: "Cebu-Mactan Bridge & Road", cost: "PHP 30B ($520M)", status: "Under construction", note: "China-funded." },
  { name: "Mindanao Railway (Phase 1)", cost: "PHP 82B ($1.4B)", status: "Pre-construction", note: "Long-awaited Mindanao connectivity." },
  { name: "Panay-Guimaras-Negros Bridge", cost: "PHP 199B ($3.5B)", status: "Feasibility", note: "Would connect 3 Visayan islands." },
];

export default function InfrastructurePage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-yellow-100 text-yellow-700 border-yellow-300 mb-3">INFRASTRUCTURE ANALYSIS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Infrastructure</h1>
        <p className="text-muted-foreground mt-2">$67M/day lost to Manila traffic. NAIA at 150% capacity. 79km of rail for 14M people. But $173B in the pipeline — the largest infrastructure program in Philippine history.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <MetricCard label="Daily Traffic Loss" value="$67M" subtitle="$24.5B/year (5% GDP)" icon={AlertTriangle} />
        <MetricCard label="Build Better More" value="185 projects" subtitle="PHP 9.14 trillion total" icon={Building2} />
        <MetricCard label="PPP Pipeline" value="230 projects" subtitle="PHP 2.86 trillion" icon={DollarSign} />
        <MetricCard label="Rail Network" value="79km" subtitle="Tokyo: 300km for same pop" icon={Train} />
      </div>

      <Card className="border-red-200 bg-red-50/30">
        <CardContent className="p-5">
          <h3 className="font-bold text-red-700 mb-2">The Manila Traffic Crisis</h3>
          <p className="text-sm text-muted-foreground">Metro Manila traffic costs <span className="font-mono font-bold">PHP 3.5 billion PER DAY</span> in lost productivity (JICA). Average commute: 1.5-2 hours ONE WAY. The city has 79km of rail for 14 million people. Tokyo has 300+ km for the same population. MRT-3 carries 500K passengers daily on infrastructure designed for 350K. Solutions underway but won&apos;t be complete until 2028-2030.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Flagship Infrastructure Projects</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-2">
            {flagshipProjects.map(p => (
              <div key={p.name} className="flex items-start justify-between bg-muted/20 rounded-lg p-3 border">
                <div><p className="text-sm font-medium">{p.name}</p><p className="text-xs text-muted-foreground">{p.note}</p></div>
                <div className="text-right shrink-0 ml-4"><Badge variant="outline" className="font-mono text-xs">{p.cost}</Badge><p className="text-[10px] text-muted-foreground mt-1">{p.status}</p></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card><CardHeader><CardTitle className="text-base">Power — Highest Costs in ASEAN</CardTitle></CardHeader><CardContent className="text-xs text-muted-foreground space-y-1">
          <p>&bull; Electricity: $0.18-0.22/kWh (vs Vietnam $0.07-0.08, Indonesia $0.08-0.10)</p>
          <p>&bull; Coal: 47% of generation. Malampaya gas depleting by 2027</p>
          <p>&bull; Renewables: 22% (geothermal 11%, hydro 6%, solar 3%). Target: 35% by 2030</p>
          <p>&bull; Philippines is world&apos;s 3rd largest geothermal producer (1,928 MW)</p>
          <p>&bull; 178 GW offshore wind potential (enormous untapped)</p>
          <p className="font-semibold text-foreground mt-2">This is the #1 FDI deterrent. Fix power costs = unlock billions in manufacturing investment.</p>
        </CardContent></Card>
        <Card><CardHeader><CardTitle className="text-base">Digital Connectivity Gaps</CardTitle></CardHeader><CardContent className="text-xs text-muted-foreground space-y-1">
          <p>&bull; Fixed broadband: 30-35% penetration (vs 80%+ in Malaysia/Thailand)</p>
          <p>&bull; NCR: 92% internet vs BARMM: 38%</p>
          <p>&bull; 5G: 72% population coverage, DITO has 7,000+ towers</p>
          <p>&bull; Starlink operational since 2024 (game-changer for islands)</p>
          <p>&bull; 8 trans-Pacific submarine cables landing by 2025</p>
          <p className="font-semibold text-foreground mt-2">Archipelago geography makes last-mile expensive. Satellite + submarine cables are the answer.</p>
        </CardContent></Card>
      </div>
    </div>
  );
}
