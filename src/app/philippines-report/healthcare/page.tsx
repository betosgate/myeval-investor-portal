import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Heart, DollarSign, AlertTriangle, Brain, Plane, Cpu, Shield, Users, CheckCircle, Building2 } from "lucide-react";
import { healthcareDeepDive } from "@/lib/data/philippines-economy";
import { fmt, fmtNum } from "@/lib/format";

export default function HealthcarePage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-red-100 text-red-700 border-red-300 mb-3">SECTOR DEEP DIVE</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Healthcare Deep Dive</h1>
        <p className="text-muted-foreground mt-2">The most comprehensive analysis of Philippine healthcare challenges and AI-powered solutions. Data from DOH, PhilHealth, COA, WHO, and PSA.</p>
      </div>

      <div className="grid grid-cols-5 gap-3">
        <MetricCard label="Market Size" value={fmt(healthcareDeepDive.totalMarketSize)} icon={DollarSign} subtitle={`${healthcareDeepDive.outOfPocketPct}% OOP`} />
        <MetricCard label="Doctors/10K" value={healthcareDeepDive.physiciansPerK.toString()} icon={Heart} subtitle="WHO min: 10" />
        <MetricCard label="Maternal Mortality" value={`${healthcareDeepDive.maternalMortality}/100K`} icon={Heart} />
        <MetricCard label="PhilHealth Reserve" value="PHP 500B" icon={DollarSign} subtitle="Sitting unused while claims denied" />
        <MetricCard label="Annual Emigration" value="35-50K" icon={Plane} subtitle="Nurses leaving/year" />
      </div>

      {/* PhilHealth Section */}
      <Card className="border-red-300 bg-red-50/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600" /> PhilHealth — The Broken Machine</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-red-600">PHP 154B</p>
              <p className="text-xs text-muted-foreground">Estimated fraud (Senate 2020 investigation)</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-red-600">90-120 days</p>
              <p className="text-xs text-muted-foreground">Actual claims processing time (COA audit)</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-red-600">~3,000</p>
              <p className="text-xs text-muted-foreground">Konsulta providers (target: 20,000+)</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">The 2020 Senate investigation under Sen. Lacson estimated <span className="font-semibold text-red-700">PHP 154 billion</span> in fraudulent claims. Schemes included ghost dialysis patients, cataract surgery mills, and inflated pneumonia case rates. COA flagged PHP 136B in deficiencies in 2019 alone. PhilHealth sits on PHP 500B in reserves while covering only 30-40% of actual hospital costs.</p>

          <div>
            <h4 className="text-sm font-semibold mb-2">Why Konsulta Is Failing (5 Root Causes)</h4>
            <div className="grid grid-cols-1 gap-1">
              {[
                "Accreditation bureaucracy: onerous documentation requirements deter small clinics and solo practitioners",
                "Capitation payment distrust: PHP 1,800-2,500/patient/year viewed as insufficient by providers",
                "IT system failures: PhilHealth electronic claims unreliable; many RHUs lack stable internet",
                "Low patient awareness: most Filipinos don't know Konsulta exists or which providers offer it",
                "LGU capacity gaps: province-wide health systems required by UHC but most LGUs lack administrative capacity",
              ].map((r) => (
                <p key={r} className="text-xs text-muted-foreground flex items-start gap-2 bg-white rounded p-2 border">
                  <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-red-500" />{r}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="text-sm font-semibold text-blue-700 mb-2">Taiwan Model — How to Fix It (12 Years to Universal Coverage)</h4>
            <p className="text-xs text-muted-foreground mb-2">Taiwan went from 57% coverage to 99%+ in under 2 years of implementation (after 10 years of planning). The Philippines should copy this exact sequence:</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "1. Merge all fragmented enrollment categories into automatic universal enrollment",
                "2. Deploy national health smart card system (integrate PhilSys with PhilHealth)",
                "3. Move to electronic real-time claims adjudication (target: 14 days, not 90-120)",
                "4. Implement global budgets by region to control costs",
                "5. Create independent board: 11 members from labor, employers, patients, LGUs, economists",
                "6. PhilHealth CEO via competitive merit-based search (6-year fixed term, removable only for cause)",
              ].map((s) => (
                <p key={s} className="text-xs text-muted-foreground flex items-start gap-1">
                  <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-blue-600" />{s}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Causes of Death */}
      <Card>
        <CardHeader><CardTitle>Top 10 Causes of Death</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {healthcareDeepDive.topCauses.map((c) => (
            <div key={c.cause} className="flex items-center gap-3">
              <span className="text-sm w-52 shrink-0">{c.cause}</span>
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full" style={{ width: `${c.pctTotal * 5.5}%` }} />
              </div>
              <span className="font-mono text-xs w-24 text-right">{fmtNum(c.deaths)} deaths</span>
              <span className="font-mono text-xs text-muted-foreground w-10 text-right">{c.pctTotal}%</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Regional Disparities */}
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600" /> Regional Healthcare Disparities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                {["Region", "Est. Active Physicians", "Docs/10K", "Beds/10K", "Poverty %"].map((h) => (
                  <th key={h} className="py-2 text-xs text-muted-foreground text-right first:text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { region: "NCR (Metro Manila)", docs: "15,000-17,000", per10k: "10-12", beds: "18", poverty: "2.5%" },
                { region: "CALABARZON", docs: "4,000-5,000", per10k: "2.5-3.5", beds: "12", poverty: "8.2%" },
                { region: "Central Visayas", docs: "3,000-3,500", per10k: "3.5-4.5", beds: "11", poverty: "18.5%" },
                { region: "Davao Region", docs: "1,500-2,000", per10k: "2.5-3.5", beds: "9", poverty: "16.8%" },
                { region: "Eastern Visayas", docs: "500-700", per10k: "1.0-1.5", beds: "5", poverty: "28.1%" },
                { region: "BARMM", docs: "300-500", per10k: "0.7-1.2", beds: "3", poverty: "37.2%" },
              ].map((r) => (
                <tr key={r.region} className="border-b border-border/50">
                  <td className="py-2 text-xs font-medium">{r.region}</td>
                  <td className="py-2 text-right font-mono text-xs">{r.docs}</td>
                  <td className="py-2 text-right font-mono text-xs">{r.per10k}</td>
                  <td className="py-2 text-right font-mono text-xs">{r.beds}</td>
                  <td className="py-2 text-right font-mono text-xs">{r.poverty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-red-600">Sulu province (BARMM)</span> may have physician density as low as <span className="font-mono font-semibold text-red-600">0.2 per 10,000</span> — roughly 1/50th of Metro Manila. This is among the worst health access disparities in Southeast Asia.
          </p>
        </CardContent>
      </Card>

      {/* BARMM Detail */}
      <Card className="border-orange-200 bg-orange-50/30">
        <CardHeader><CardTitle>BARMM Health — Province-Level Crisis</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <table className="w-full text-xs">
            <thead><tr className="border-b">
              {["Province", "Est. Physicians", "Hospitals", "Est. Beds", "Immunization %", "Key Threats"].map((h) => (
                <th key={h} className="py-2 text-muted-foreground text-right first:text-left">{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                { prov: "Lanao del Sur (incl. Marawi)", docs: "80-120", hosp: "5-7", beds: "400-500", imm: "30-45%", threat: "Post-siege rebuilding, TB" },
                { prov: "Maguindanao del Norte", docs: "40-60", hosp: "3-5", beds: "200-300", imm: "35-50%", threat: "Malnutrition (40%+ stunting)" },
                { prov: "Maguindanao del Sur", docs: "30-50", hosp: "2-3", beds: "100-200", imm: "35-50%", threat: "Maternal mortality 2-3x national" },
                { prov: "Basilan", docs: "20-40", hosp: "2-3", beds: "150-200", imm: "25-40%", threat: "Malaria endemic, security" },
                { prov: "Sulu", docs: "20-35", hosp: "1-2", beds: "100-150", imm: "15-30%", threat: "WORST in PH. Measles outbreaks." },
                { prov: "Tawi-Tawi", docs: "15-25", hosp: "1", beds: "50-75", imm: "20-35%", threat: "Island isolation, zero specialists" },
              ].map((p) => (
                <tr key={p.prov} className="border-b border-border/50">
                  <td className="py-1.5 font-medium">{p.prov}</td>
                  <td className="py-1.5 text-right font-mono">{p.docs}</td>
                  <td className="py-1.5 text-right font-mono">{p.hosp}</td>
                  <td className="py-1.5 text-right font-mono">{p.beds}</td>
                  <td className="py-1.5 text-right font-mono text-red-600">{p.imm}</td>
                  <td className="py-1.5 text-right text-red-600">{p.threat}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground">
            Total BARMM: ~12-15 hospitals with ~1,000-1,400 beds for 4.4 million people. DOH standard: 1 bed/1,000 = need 4,400 beds. <span className="font-semibold">Sulu&apos;s immunization rate (15-30%) is among the lowest in Southeast Asia</span> — a measles and polio outbreak waiting to happen.
          </p>
          <div className="bg-white rounded-lg p-3 border">
            <h4 className="text-xs font-semibold mb-1">Development Partners Spending in BARMM Health: $45-85M/year</h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { org: "USAID", amt: "$15-25M/yr", focus: "Maternal/child, TB, family planning" },
                { org: "JICA", amt: "$10-20M/yr", focus: "Hospital infrastructure (Marawi rebuild)" },
                { org: "ADB", amt: "$5-15M/yr", focus: "Health facilities, UHC support" },
                { org: "World Bank", amt: "$5-10M/yr", focus: "Nutrition, community health" },
                { org: "UNICEF", amt: "$5-10M/yr", focus: "Immunization, nutrition, WASH" },
                { org: "WHO", amt: "$3-5M/yr", focus: "Surveillance, health workforce" },
              ].map((d) => (
                <div key={d.org} className="text-xs bg-muted/30 rounded p-1.5">
                  <span className="font-semibold">{d.org}</span> <span className="font-mono">{d.amt}</span>
                  <p className="text-muted-foreground">{d.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brain Drain */}
      <Card className="border-orange-200 bg-orange-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><Plane className="h-4 w-4" /> Healthcare Worker Emigration — By the Numbers</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Annual Nurse Deployments by Destination</h4>
              {[
                { dest: "United States", num: "10,000-15,000", note: "Largest single destination" },
                { dest: "Saudi Arabia", num: "8,000-12,000", note: "" },
                { dest: "United Kingdom", num: "5,000-10,000", note: "Surged post-Brexit" },
                { dest: "UAE", num: "3,000-5,000", note: "" },
                { dest: "Canada", num: "2,000-4,000", note: "" },
                { dest: "Australia", num: "1,000-3,000", note: "" },
                { dest: "Other (Japan, Germany, Singapore)", num: "3,000-5,000", note: "" },
              ].map((d) => (
                <div key={d.dest} className="flex justify-between text-xs border-b border-border/50 py-1">
                  <span>{d.dest} {d.note && <span className="text-muted-foreground">({d.note})</span>}</span>
                  <span className="font-mono">{d.num}</span>
                </div>
              ))}
              <p className="text-xs font-mono font-semibold mt-2 text-red-600">Total: 35,000-50,000 nurses/year + 3,000-5,000 doctors/year</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">The Salary Gap — Why They Leave</h4>
              <div className="space-y-2">
                {[
                  { role: "Government nurse (PH)", salary: "PHP 27-30K/mo", usd: "~$500" },
                  { role: "Private hospital nurse (Manila)", salary: "PHP 15-25K/mo", usd: "~$350" },
                  { role: "Nurse in Saudi Arabia", salary: "PHP 60-100K equiv", usd: "~$1,200" },
                  { role: "Nurse in UK (NHS)", salary: "PHP 150-250K equiv", usd: "~$3,500" },
                  { role: "Nurse in US", salary: "PHP 200-400K equiv", usd: "~$5,500" },
                ].map((s) => (
                  <div key={s.role} className="flex justify-between text-xs bg-white rounded p-1.5 border">
                    <span>{s.role}</span>
                    <span className="font-mono">{s.salary} ({s.usd})</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
                <h4 className="text-xs font-semibold text-green-700 mb-1">Cost to Make Government Salaries Competitive</h4>
                <p className="text-xs text-muted-foreground">Target: PHP 50-60K/mo entry level. 45,000 nurses x PHP 27,500/mo increase x 12 = <span className="font-mono font-semibold">PHP 14.85B/year ($270M)</span>. This is 5-7% of DOH budget. PhilHealth&apos;s PHP 500B reserve fund could cover this for 30+ years.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mental Health */}
      <Card className="border-purple-200 bg-purple-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><Brain className="h-4 w-4" /> Mental Health Crisis</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-5 gap-3">
            {[
              { v: "500-600", l: "Psychiatrists nationally" },
              { v: "0.5/100K", l: "Psychiatrist ratio (WHO: 1/10K)" },
              { v: "~70%", l: "Of psychiatrists in NCR only" },
              { v: "3.6M", l: "Filipinos with depression" },
              { v: "97%", l: "Treatment gap (no treatment)" },
            ].map((m) => (
              <div key={m.l} className="bg-white rounded-lg p-3 border text-center">
                <p className="text-lg font-mono font-bold">{m.v}</p>
                <p className="text-[10px] text-muted-foreground">{m.l}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">Many provinces have <span className="font-semibold text-red-600">zero psychiatrists</span>. The National Center for Mental Health (Mandaluyong) has 4,200 beds — the country&apos;s only major psychiatric facility, chronically overcrowded. Suicide is rising among ages 15-29.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-3 border">
              <h4 className="text-xs font-semibold mb-1">Cost of 50 Community Mental Health Centers</h4>
              <p className="text-xs text-muted-foreground">Capital: PHP 600M-1.25B ($11-23M). Annual operations: PHP 250-350M/yr ($4.5-6.4M). Staff per center: 1 psychiatrist, 2 psychologists, 3 psych nurses, 2 social workers. <span className="font-semibold text-foreground">This is remarkably affordable</span> — the constraint is workforce, not money.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <h4 className="text-xs font-semibold mb-1">AI Mental Health Solution</h4>
              <p className="text-xs text-muted-foreground"><span className="font-semibold">Wysa</span> (AI mental health app): CE marked, deployed in India/LMICs, ~$1-3/user/month at scale. Localize to Filipino/Cebuano, integrate with PhilHealth. School deployment via FRIENDS CBT program (WHO-endorsed, 50-60% anxiety reduction). Digital can partially bridge the psychiatrist gap.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Deployment Plan */}
      <Card className="border-primary bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5" /> AI Health Deployment — Specific Implementation Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Exact tools, costs, and hardware requirements for deploying AI diagnostics across 2,500 Rural Health Units.</p>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">FDA-Cleared AI Tools Ready to Deploy NOW</h4>
            {[
              { tool: "Qure.ai qXR", purpose: "Chest X-ray / TB detection", perf: "Sensitivity 95-98%, Specificity 75-85%", cost: "$2-5/screening", req: "Digital X-ray + computer. Works OFFLINE with edge deployment.", status: "WHO prequalified. Already piloted in PH." },
              { tool: "EyeArt (Eyenuk)", purpose: "Diabetic retinopathy screening", perf: "Autonomous AI, results in <60 seconds", cost: "$15-30/screening", req: "Standard retinal camera (e.g., Remidio $3-5K)", status: "FDA-cleared." },
              { tool: "Butterfly iQ+", purpose: "Handheld ultrasound with AI guidance", perf: "AI-guided imaging for non-specialists", cost: "$2,500-3,000 per device", req: "Smartphone or tablet. Portable.", status: "FDA-cleared. Deployable to midwives." },
              { tool: "Wysa", purpose: "AI mental health (CBT chatbot)", perf: "Published studies: efficacy for mild-moderate depression", cost: "$1-3/user/month", req: "Smartphone only. Works on basic Android.", status: "CE marked. Deployed in LMICs." },
            ].map((t) => (
              <div key={t.tool} className="bg-white rounded-lg p-3 border">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold">{t.tool}</span>
                  <Badge variant="outline" className="text-[10px]">{t.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{t.purpose}</p>
                <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                  <div><span className="text-muted-foreground">Performance: </span>{t.perf}</div>
                  <div><span className="text-muted-foreground">Cost: </span><span className="font-mono">{t.cost}</span></div>
                  <div><span className="text-muted-foreground">Requires: </span>{t.req}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="text-sm font-semibold text-blue-700 mb-2">Cost Per Rural Health Unit — AI Diagnostic Station</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { item: "Portable digital X-ray", cost: "$25,000-50,000" },
                { item: "Computer/workstation for AI", cost: "$1,000-1,500" },
                { item: "Qure.ai license (annual)", cost: "$3,000-8,000/yr" },
                { item: "Retinal camera (Remidio)", cost: "$3,000-5,000" },
                { item: "EyeArt AI license (annual)", cost: "$2,000-5,000/yr" },
                { item: "Butterfly iQ+ ultrasound", cost: "$2,500-3,000" },
                { item: "Solar power backup", cost: "$2,000-5,000" },
                { item: "Starlink satellite internet", cost: "$500 + $50-100/mo" },
                { item: "Installation + training", cost: "$5,000-10,000" },
              ].map((c) => (
                <div key={c.item} className="flex justify-between bg-white rounded p-1.5 border">
                  <span>{c.item}</span>
                  <span className="font-mono">{c.cost}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 bg-white rounded p-2 border">
              <p className="text-xs"><span className="font-semibold">Total per RHU (Year 1):</span> <span className="font-mono">$45,000-90,000</span></p>
              <p className="text-xs"><span className="font-semibold">For 2,500 priority RHUs:</span> <span className="font-mono">$112-225M (PHP 6-12B)</span></p>
              <p className="text-xs text-muted-foreground mt-1">Fundable through DOH budget + PhilHealth reserves + ODA (JICA, ADB, World Bank). Training: 3-5 days for community health workers on TB AI, 5-10 days for midwives on ultrasound AI.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pharmaceutical */}
      <Card>
        <CardHeader><CardTitle>Pharmaceutical Industry — Why Drugs Are So Expensive</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Root Causes of High Drug Prices</h4>
              {[
                "Market concentration: Unilab controls ~20-25%, top 5 companies control 50-60%",
                "Import dependency: 60-70% of finished drugs imported, almost all APIs from India/China",
                "Weak price regulation: Maximum Drug Retail Prices used sparingly, enforcement limited",
                "Distribution markups: 3-4 layer chain, each adding 10-30% margins",
                "Brand loyalty: physician prescribing driven by pharma marketing, low generic substitution",
              ].map((c) => (
                <p key={c} className="text-xs text-muted-foreground">&bull; {c}</p>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Immediate Solutions</h4>
              {[
                "Expand MDRP to top 100 essential medicines (currently limited list)",
                "Government-to-government procurement from Indian generic manufacturers",
                "Parallel importation (authorized under RA 9502)",
                "Compulsory licensing for critical medicines (TRIPS flexibilities)",
                "Long-term: $500M-1B investment over 10 years for domestic API manufacturing",
              ].map((s) => (
                <p key={s} className="text-xs text-muted-foreground flex items-start gap-1">
                  <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-green-600" />{s}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical Tourism */}
      <Card>
        <CardHeader><CardTitle>Medical Tourism — $500M Today, $3-5B Potential</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <table className="w-full text-xs">
            <thead><tr className="border-b">
              {["Procedure", "Philippines", "Thailand", "Singapore", "USA"].map((h) => (
                <th key={h} className="py-2 text-muted-foreground text-right first:text-left">{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                { proc: "Coronary bypass (CABG)", ph: "$12-18K", th: "$15-25K", sg: "$25-40K", us: "$70-200K" },
                { proc: "Hip replacement", ph: "$8-12K", th: "$12-18K", sg: "$15-25K", us: "$30-50K" },
                { proc: "Dental implant (per tooth)", ph: "$1-2K", th: "$1.5-3K", sg: "$2.5-4K", us: "$3-6K" },
                { proc: "Rhinoplasty", ph: "$2-4K", th: "$3-6K", sg: "$5-10K", us: "$5-15K" },
              ].map((r) => (
                <tr key={r.proc} className="border-b border-border/50">
                  <td className="py-1.5">{r.proc}</td>
                  <td className="py-1.5 text-right font-mono text-green-700">{r.ph}</td>
                  <td className="py-1.5 text-right font-mono">{r.th}</td>
                  <td className="py-1.5 text-right font-mono">{r.sg}</td>
                  <td className="py-1.5 text-right font-mono">{r.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground">Philippines is 20-40% cheaper than Thailand, 40-60% cheaper than Singapore. JCI-accredited hospitals: St. Luke&apos;s, Makati Medical Center, The Medical City, Asian Hospital, Chong Hua (Cebu). Growth plan: medical tourism visa, 20 JCI accreditations in 3 years, 3 hubs (Manila, Cebu, Clark), target $3-5B in 10 years.</p>
        </CardContent>
      </Card>

      {/* First 100 Days */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-5">
          <h3 className="font-bold mb-3">Healthcare — First 100 Days Action Plan</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "EO: Reconstitute PhilHealth board with independent governance. Freeze reserve fund pending actuarial audit.",
              "EO: Mandate automatic PhilHealth enrollment via PhilSys national ID for all citizens.",
              "Budget: PHP 15B for government nurse salary increase to PHP 50,000+ entry level.",
              "DOH: Launch AI diagnostic station pilot in 100 RHUs (BARMM, Eastern Visayas, CARAGA).",
              "BARMM: Deploy 200 doctors through Doctors to the Barrios with 3x salary premium.",
              "Mental Health: Fund 10 Community Mental Health Centers in regions with zero psychiatrists.",
              "Pharma: Expand Maximum Drug Retail Prices to top 100 essential medicines.",
              "Medical Tourism: Create inter-agency task force (DOH, DOT, BOI, PEZA) for roadmap.",
            ].map((a, i) => (
              <div key={a} className="text-xs bg-white border rounded p-2 flex items-start gap-2">
                <span className="font-mono text-primary font-bold shrink-0">{i + 1}.</span>
                <span className="text-muted-foreground">{a}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
