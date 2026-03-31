import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Building2, DollarSign, AlertTriangle, Train, Zap, CheckCircle, Globe } from "lucide-react";

const flagshipProjects = [
  { name: "New Manila International Airport (Bulacan)", cost: "PHP 740B ($13B)", status: "Phase 1 under construction", completion: "2027-2028 (partial)", builder: "San Miguel Corp", note: "35M passengers Phase 1. Ultimate: 100M. Financing not fully secured. Game-changer for tourism and trade." },
  { name: "Metro Manila Subway (Line 9)", cost: "PHP 488B ($8.5B)", status: "Under construction", completion: "2029-2031 (realistic)", builder: "JICA-funded", note: "First underground metro. 36km, 17 stations. Only 3 of 17 stations under active construction as of 2025. Cost revised upward from PHP 357B." },
  { name: "North-South Commuter Railway", cost: "PHP 777B ($13.5B)", status: "Under construction", completion: "2030-2032 (realistic)", builder: "JICA-funded", note: "147km Clark to Calamba through Manila. Malolos-Clark and Malolos-Tutuban at different rates. Transformational for Greater Manila." },
  { name: "MRT-7", cost: "PHP 62.7B ($1.1B)", status: "Most advanced", completion: "2028-2029", builder: "San Miguel Corp", note: "22km QC to Bulacan. Elevated guideway largely complete. Systems installation underway. Bulacan ROW issues." },
  { name: "Subic-Clark Railway", cost: "PHP 50B ($870M)", status: "Under construction", builder: "Government", completion: "2029-2030", note: "Connecting economic zones. Critical for Clark-Subic corridor development." },
  { name: "Cebu-Mactan Bridge & Road", cost: "PHP 30B ($520M)", status: "Under construction", completion: "2028", builder: "China-funded", note: "Inter-island connectivity. Visayas infrastructure improvement." },
  { name: "Mindanao Railway (Phase 1)", cost: "PHP 82B ($1.4B)", status: "Pre-construction", completion: "2032+", builder: "TBD", note: "Long-awaited Mindanao connectivity. Feasibility complete. Funding being arranged." },
  { name: "Panay-Guimaras-Negros Bridge", cost: "PHP 199B ($3.5B)", status: "Feasibility", completion: "2035+", builder: "TBD", note: "Would connect 3 Visayan islands. Ambitious but transformational." },
];

const executionData = [
  { year: "2022", programmed: "PHP 1,180B", actual: "PHP ~980B", rate: "~83%" },
  { year: "2023", programmed: "PHP 1,295B", actual: "PHP ~1,050B", rate: "~81%" },
  { year: "2024", programmed: "PHP 1,430B", actual: "PHP ~1,100-1,150B", rate: "~78-80%" },
  { year: "2025", programmed: "PHP 1,510B", actual: "Ongoing", rate: "TBD" },
];

export default function InfrastructurePage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-yellow-100 text-yellow-700 border-yellow-300 mb-3">INFRASTRUCTURE ANALYSIS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Infrastructure</h1>
        <p className="text-muted-foreground mt-2">$67M/day lost to Manila traffic. 78-83% execution rate on a $173B pipeline. The Philippines doesn&apos;t lack plans — it lacks execution. This section identifies exactly why and what to do about it.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <MetricCard label="Daily Traffic Loss" value="$67M" subtitle="$24.5B/year (5% GDP)" icon={AlertTriangle} />
        <MetricCard label="Build Better More" value="185 projects" subtitle="PHP 9.14T pipeline" icon={Building2} />
        <MetricCard label="Execution Rate" value="78-83%" subtitle="vs Vietnam 88-92%" icon={AlertTriangle} />
        <MetricCard label="Rail for 14M people" value="79km" subtitle="Tokyo: 300+ km" icon={Train} />
      </div>

      {/* The Execution Problem */}
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600" /> The Execution Problem — Why Projects Don&apos;t Get Built</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Of 185 flagship projects, only <span className="font-semibold text-red-600">40-45 have been completed</span>. ~60-70 are under construction with significant delays. ~50-60 remain in pre-construction. ~15-20 have been dropped or deferred.</p>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Top 5 Reasons for Delays (Ranked by Impact)</h4>
            {[
              { reason: "Right-of-Way / Land Acquisition (#1 killer)", detail: "Multiple agencies involved (DPWH, LGUs, courts). Requires cadastral surveys and faces legal challenges. NSCR alone: ROW took years longer than planned. Typical delay: 1-3 YEARS per project.", fix: "Create a dedicated ROW fast-track authority with eminent domain powers and pre-funded compensation." },
              { reason: "Procurement Bottlenecks & Corruption", detail: "RA 9184 mandates competitive bidding but process is slow. Failed biddings common. Some projects experience 3-4 failed biddings before award. ODA-funded projects face dual procurement rules (Philippine + donor).", fix: "Streamline procurement for projects above PHP 10B. Allow international competitive bidding by default. AI-powered bid evaluation." },
              { reason: "Budget Release Delays", detail: "DBM releases funds through SARO/NCA. Agencies regularly complain about slow releases. Infrastructure spending consistently falls short of programmed amounts.", fix: "Auto-release mechanism for flagship projects: once approved, funds flow on schedule without annual re-approval." },
              { reason: "Contractor Capacity Constraints", detail: "Limited pool of contractors for mega-projects. Chinese and Japanese contractors handle larger projects. Genuine capacity constraints in skilled labor and equipment.", fix: "TESDA fast-track construction skills program. Allow international contractor participation without local JV requirement for projects above PHP 50B." },
              { reason: "Design Changes & Scope Revisions", detail: "Projects frequently undergo redesign after contract award. Metro Manila Subway has had multiple alignment revisions. Political requests change scope mid-construction.", fix: "Design freeze after contract award. Change orders above 10% require presidential approval." },
            ].map((d) => (
              <div key={d.reason} className="bg-white rounded-lg p-3 border">
                <h5 className="text-sm font-semibold text-red-700">{d.reason}</h5>
                <p className="text-xs text-muted-foreground mt-1">{d.detail}</p>
                <p className="text-xs mt-1"><span className="font-semibold text-green-700">Fix: </span><span className="text-muted-foreground">{d.fix}</span></p>
              </div>
            ))}
          </div>

          <h4 className="text-sm font-semibold">Spending Execution Rate (Programmed vs Actual)</h4>
          <table className="w-full text-xs">
            <thead><tr className="border-b">{["Year", "Programmed", "Actual Disbursed", "Rate"].map((h) => <th key={h} className="py-2 text-muted-foreground text-right first:text-left">{h}</th>)}</tr></thead>
            <tbody>
              {executionData.map((d) => (
                <tr key={d.year} className="border-b border-border/50">
                  <td className="py-1.5 font-mono">{d.year}</td>
                  <td className="py-1.5 text-right font-mono">{d.programmed}</td>
                  <td className="py-1.5 text-right font-mono">{d.actual}</td>
                  <td className="py-1.5 text-right font-mono text-red-600">{d.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground">ASEAN comparison: Vietnam 88-92% execution, Indonesia 85-88%, <span className="font-semibold text-red-600">Philippines 78-83%</span>. The gap is not in allocation — it&apos;s in execution capacity.</p>
        </CardContent>
      </Card>

      {/* Flagship Projects */}
      <Card>
        <CardHeader><CardTitle>Flagship Projects — Status & Realistic Timelines</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {flagshipProjects.map((p) => (
            <div key={p.name} className="bg-muted/20 rounded-lg p-3 border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{p.name}</h4>
                  <p className="text-xs text-muted-foreground">{p.note}</p>
                </div>
                <div className="text-right shrink-0 ml-4 space-y-1">
                  <Badge variant="outline" className="font-mono text-[10px]">{p.cost}</Badge>
                  <p className="text-[10px] text-muted-foreground">{p.builder}</p>
                  <Badge className={p.status.includes("construction") ? "bg-yellow-100 text-yellow-800 text-[10px]" : p.status.includes("advanced") ? "bg-green-100 text-green-800 text-[10px]" : "bg-blue-100 text-blue-800 text-[10px]"}>{p.status}</Badge>
                  <p className="text-[10px] font-mono font-semibold">{p.completion}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Separator />

      {/* Energy — The #1 FDI Killer */}
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-red-600" /> Energy — The #1 FDI Killer</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">The Philippines has the <span className="font-semibold text-red-600">highest electricity costs in ASEAN</span>. This single factor deters more manufacturing FDI than any other issue.</p>

          <h4 className="text-sm font-semibold">Electricity Rate Comparison (USD/kWh)</h4>
          <table className="w-full text-xs">
            <thead><tr className="border-b">{["Customer Type", "Philippines", "Vietnam", "Indonesia", "Thailand"].map((h) => <th key={h} className="py-2 text-muted-foreground text-right first:text-left">{h}</th>)}</tr></thead>
            <tbody>
              {[
                { type: "Industrial", ph: "$0.16-0.20", vn: "$0.07-0.08", id: "$0.08-0.10", th: "$0.10-0.12" },
                { type: "Commercial", ph: "$0.18-0.22", vn: "$0.08-0.10", id: "$0.10-0.12", th: "$0.11-0.13" },
                { type: "Residential", ph: "$0.19-0.24", vn: "$0.06-0.08", id: "$0.04-0.07", th: "$0.09-0.12" },
              ].map((r) => (
                <tr key={r.type} className="border-b border-border/50">
                  <td className="py-1.5 font-medium">{r.type}</td>
                  <td className="py-1.5 text-right font-mono text-red-600 font-semibold">{r.ph}</td>
                  <td className="py-1.5 text-right font-mono">{r.vn}</td>
                  <td className="py-1.5 text-right font-mono">{r.id}</td>
                  <td className="py-1.5 text-right font-mono">{r.th}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="text-sm font-semibold">Why So Expensive? (Bill Breakdown)</h4>
          <div className="space-y-2">
            {[
              { component: "Generation charge", share: "50-55%", issue: "Legacy PPAs with coal plants guarantee IPPs 12-15% ROE. Take-or-pay: consumers pay even if power unused. This is the CORE PROBLEM." },
              { component: "Distribution (Meralco)", share: "15-20%", issue: "MVP/Pangilinan group earns regulated returns. 'Systems loss' charge adds 8-9% to bills." },
              { component: "Taxes & universal charges", share: "15-20%", issue: "12% VAT on electricity (regressive). Universal charges for missionary electrification, NPC stranded costs." },
              { component: "Transmission (NGCP)", share: "8-10%", issue: "Single private concessionaire (40% owned by State Grid Corp of China). Transmission losses 4-5%." },
              { component: "FIT-All (feed-in tariff)", share: "2-3%", issue: "Supports renewable energy development." },
            ].map((c) => (
              <div key={c.component} className="flex items-start gap-3 bg-white rounded p-2 border">
                <div className="w-32 shrink-0">
                  <p className="text-xs font-semibold">{c.component}</p>
                  <p className="text-xs font-mono text-primary">{c.share}</p>
                </div>
                <p className="text-xs text-muted-foreground">{c.issue}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="text-sm font-semibold text-green-700 mb-2">5 Policies to Cut Rates 20-30%</h4>
            {[
              "Let legacy PPAs expire without renewal on similar terms. Transition to competitive spot market pricing. Savings: 10-15% on generation.",
              "Accelerate renewable energy deployment via expanded GEAP auctions. Solar/wind now cheapest new generation. Savings: 5-10%.",
              "Reform systems loss charges from 8.5% to 5% cap. Savings: PHP 0.30-0.50/kWh.",
              "Exempt industrial users from 12% VAT on electricity (as competitors do). Rate reduction: ~12%.",
              "Open retail competition (RCOA): lower the threshold from 750kW so more customers can choose suppliers.",
            ].map((p, i) => (
              <p key={p} className="text-xs text-muted-foreground flex items-start gap-2 mb-1"><CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-green-600" /><span><span className="font-semibold">{i + 1}.</span> {p}</span></p>
            ))}
            <p className="text-xs font-semibold text-green-700 mt-2">Combined target: $0.18/kWh → $0.12-0.14/kWh (competitive with Thailand, still above Vietnam but investable).</p>
          </div>

          <h4 className="text-sm font-semibold">Malampaya Gas Depletion Crisis</h4>
          <p className="text-xs text-muted-foreground">Malampaya has supplied ~30% of Luzon power since 2001. <span className="font-semibold text-red-600">Expected depletion: 2027-2029.</span> Replacement: LNG imports at $12-18/MMBtu (vs Malampaya $6-8/MMBtu) = 30-50% generation cost increase for affected plants. First Gen FSRU (Batangas) is the most advanced LNG terminal — expected 2025. AG&P PHLNG (Batangas) follows 2025-2026. SMC Vires Energy (Bataan) by 2027+.</p>

          <h4 className="text-sm font-semibold">Renewable Energy Pipeline</h4>
          <table className="w-full text-xs">
            <thead><tr className="border-b">{["Technology", "Installed (MW)", "Pipeline (MW)", "Notes"].map((h) => <th key={h} className="py-2 text-muted-foreground text-right first:text-left">{h}</th>)}</tr></thead>
            <tbody>
              {[
                { tech: "Solar", installed: "3,500-4,000", pipeline: "25,000-30,000", note: "Massive pipeline but grid integration is bottleneck" },
                { tech: "Wind (onshore)", installed: "~500", pipeline: "5,000-7,000", note: "Good resources in Northern Luzon, Visayas" },
                { tech: "Wind (offshore)", installed: "0", pipeline: "20,000-40,000", note: "70+ service contracts awarded. First projects 2029-2030+" },
                { tech: "Geothermal", installed: "~1,900", pipeline: "500-1,000", note: "World's #3 producer. Brownfield expansion" },
                { tech: "Hydro", installed: "~3,700", pipeline: "~1,000", note: "Limited new large sites. Pumped storage planned" },
              ].map((r) => (
                <tr key={r.tech} className="border-b border-border/50">
                  <td className="py-1.5 font-medium">{r.tech}</td>
                  <td className="py-1.5 text-right font-mono">{r.installed}</td>
                  <td className="py-1.5 text-right font-mono text-green-700">{r.pipeline}</td>
                  <td className="py-1.5 text-right text-muted-foreground">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2"><span className="font-semibold">ACEN (Ayala Group)</span> is the most aggressive: targeting 20 GW renewables by 2030 from 4.2 GW today. Operating across Philippines, Vietnam, India, Indonesia, Australia. The Philippines has <span className="font-semibold">178 GW of offshore wind potential</span> — enormous and untapped.</p>
        </CardContent>
      </Card>

      {/* Digital Connectivity */}
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5" /> Digital Connectivity Gaps</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-xs text-muted-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <h4 className="font-semibold text-foreground">Current State</h4>
              <p>&bull; Fixed broadband: 30-35% penetration (vs 80%+ Malaysia/Thailand)</p>
              <p>&bull; NCR: 92% internet vs BARMM: 38%</p>
              <p>&bull; 5G: 72% population coverage. DITO: 7,000+ towers, 14M subscribers</p>
              <p>&bull; 8 trans-Pacific submarine cables landing by 2025</p>
              <p>&bull; International capacity: 60 Tbps → 130+ Tbps</p>
              <p>&bull; Data center market: $633M → $1.97B by 2030 (20.9% CAGR)</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-foreground">Solutions</h4>
              <p>&bull; Starlink operational since 2024 (game-changer for islands, $500 terminal)</p>
              <p>&bull; DICT Free WiFi: 21,000+ hotspots deployed (reliability poor)</p>
              <p>&bull; Universal Service Fund (1% telco levy) for rural connectivity</p>
              <p>&bull; Open access mandate for tower/fiber sharing (reduce costs 30-50%)</p>
              <p>&bull; Municipal broadband for areas without private sector incentive</p>
              <p>&bull; 5 additional inter-island submarine fiber cables needed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manila Traffic Deep Dive */}
      <Card className="border-orange-200 bg-orange-50/30">
        <CardContent className="p-5">
          <h3 className="font-bold mb-2">Manila Traffic — The $24.5 Billion Emergency</h3>
          <p className="text-sm text-muted-foreground">Average commute: 1.5-2 hours ONE WAY. MRT-3 carries 500K passengers/day on infrastructure designed for 350K. 300,000+ new vehicles registered in Metro Manila annually. EDSA Busway helps but is band-aid.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <div className="bg-white rounded-lg p-3 border">
              <h4 className="text-xs font-semibold text-primary mb-1">Quick Wins (Year 1)</h4>
              <p className="text-xs text-muted-foreground">&bull; Convert EDSA Busway to full BRT (12-18 months, PHP 5-8B)</p>
              <p className="text-xs text-muted-foreground">&bull; Congestion pricing for CBD entry: PHP 100-300 peak hours</p>
              <p className="text-xs text-muted-foreground">&bull; 100km protected bike lanes connecting to transit</p>
              <p className="text-xs text-muted-foreground">&bull; Create Metro Manila Transport Authority (unified command)</p>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <h4 className="text-xs font-semibold text-primary mb-1">Medium Term (Year 3-6)</h4>
              <p className="text-xs text-muted-foreground">&bull; MRT-7 operational (2028-2029, most advanced rail project)</p>
              <p className="text-xs text-muted-foreground">&bull; Subway Line 9 partial opening (2029-2031)</p>
              <p className="text-xs text-muted-foreground">&bull; NSCR phases connecting Clark-Manila-Calamba</p>
              <p className="text-xs text-muted-foreground">&bull; Transit-oriented development around all stations</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PPP Pipeline */}
      <Card>
        <CardContent className="p-5">
          <h3 className="font-bold mb-2">PPP Pipeline — PHP 2.86 Trillion</h3>
          <p className="text-sm text-muted-foreground"><span className="font-mono font-semibold">230 PPP projects</span> valued at PHP 2.86 trillion as of July 2025. 124 new projects approved in 2025 alone (nearly doubling from 127 in Dec 2024). 166 national, 85 local. New PPP Code adopted 2023. This is the largest PPP pipeline in Philippine history — the opportunity for private sector infrastructure investment has never been greater.</p>
        </CardContent>
      </Card>
    </div>
  );
}
