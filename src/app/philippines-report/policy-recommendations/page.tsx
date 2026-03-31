import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Heart, DollarSign, GraduationCap, Building2, Shield, CalendarClock, Scale, Landmark, Users, Cpu, Globe } from "lucide-react";

const recommendations = [
  {
    id: 1,
    category: "STRUCTURAL",
    icon: Landmark,
    title: "Sovereign Wealth Fund as the 60/40 Solution",
    problem: "The 60/40 foreign ownership restriction blocks $10-15B/year in potential FDI. Constitutional amendment (Cha-Cha) has failed repeatedly because of term extension fears. Meanwhile, the Philippines' $1T+ in mineral reserves and gas fields remain underdeveloped.",
    solution: "Reform the Maharlika Investment Fund into a proper Norwegian-model SWF that BECOMES the Filipino majority partner in all major resource and infrastructure deals. The SWF holds the 60% Filipino stake, partnering with international oil companies, mining companies, tech companies, and health companies. Foreign expertise and capital enter, the SWF retains Filipino majority ownership, and profits accumulate in the fund for future generations. This solves the 60/40 problem WITHOUT constitutional amendment.",
    mechanism: [
      "Reform Maharlika (RA 11954): shift from pension fund capital to resource revenues (mining royalties, gas, PAGCOR, geothermal)",
      "SWF holds 51-60% stake in all new major resource JVs — becomes the 'Filipino partner' that international companies need",
      "International partners bring capital, technology, and expertise — the 'technology transfer' condition of every JV",
      "Revenue flows: JV profits → SWF → National Health Endowment (5-10%) + Education Fund (5-10%) + Infrastructure Fund (5-10%) + reinvestment (70-80%)",
      "Example: Reed Bank gas development — SWF holds 55%, Shell/TotalEnergies holds 45%, technology transfer builds Filipino deepwater engineering capacity",
      "Example: Nickel processing — SWF holds 52%, international battery manufacturer holds 48%, downstream processing stays in Philippines",
      "Example: Health technology — SWF invests alongside companies like MyEval.ai, retaining Filipino ownership while gaining world-class AI health infrastructure",
    ],
    projection: "At $8-10B/year in contributions (resource revenues + JV dividends), the fund reaches $100-140B in 10 years, $400B+ in 20 years. The 3% spending rule generates $3-4B/year for health, education, and infrastructure — PERMANENTLY.",
    timeline: "Year 1: Reform Maharlika Act. Year 2: First JV deals structured. Year 3-6: $30-50B accumulated. Year 10: $100B+. Year 30: $400-900B — larger than Philippine GDP.",
    budget: "No net cost — the SWF generates revenue. Initial operational cost: PHP 2-3B/year for fund management.",
    kpis: ["Fund size growth vs target", "Number of JV partnerships signed", "Technology transfer milestones met", "Annual fund returns vs benchmark", "% of resource revenue captured vs historical baseline"],
  },
  {
    id: 2,
    category: "HEALTHCARE",
    icon: Heart,
    title: "PhilHealth Emergency Reset + AI Claims System",
    problem: "PhilHealth covers only 30-40% of actual hospital costs. Out-of-pocket spending at 54%. $2B+/year in estimated fraud. Claims take 60+ days to process.",
    solution: "180-day Presidential Oversight Commission with forensic audit. Convert PhilHealth to independent body with professional board. Deploy AI-powered claims adjudication (same technology as MyEval.ai) to replace manual fraud-prone process. Mandate 80% cost coverage for bottom 60% of households.",
    mechanism: [
      "Executive Order Day 1: PhilHealth under oversight commission, board suspended",
      "Forensic audit by COA + Big Four firm within 120 days",
      "0.5% Health Premium Tax earmarked to ring-fenced National Health Fund",
      "AI claims system: processes claims in hours not months, catches 3x more fraud",
      "Unified EHR standard across all government facilities within 3 years",
    ],
    projection: "Out-of-pocket spending drops from 54% to below 30%. Claims processing: 60+ days → under 14 days. Fraud savings: PHP 15-25B/year. GDP impact: +0.3-0.5% from healthier workforce.",
    timeline: "Day 1: EO signed. 6 months: Audit complete. Year 1: New board seated. Year 3: AI claims national rollout. Year 6: 80% cost coverage achieved.",
    budget: "PHP 85-110B/year additional by Year 3 (funded by Health Premium Tax + sin tax reallocation + fraud savings)",
    kpis: ["Out-of-pocket % of health spending", "Claims processing time", "Fraud detection rate", "PhilHealth benefit utilization rate"],
  },
  {
    id: 3,
    category: "HEALTHCARE",
    icon: Users,
    title: "Stop the Brain Drain — Health Workforce Retention",
    problem: "60,000+ nurses and doctors leave annually. Government nurses earn PHP 33K/month vs PHP 250K/month equivalent in the UK. 40-60% vacancy rates in public hospitals.",
    solution: "Triple health worker salaries for underserved areas. 'Return to Serve' program for OFW health workers (PHP 500K bonus + housing + fast-track specialization). 50 Regional Centers of Health Excellence. Mandatory 3-year government service for publicly-funded medical graduates.",
    mechanism: [
      "Emergency Health Professional Allowance: PHP 15-25K/month on top of base salary",
      "New salary scale: nurses SG 19-22 (from SG 11-15), physicians SG 24-26",
      "Return to Serve: 5-year commitment = PHP 500K bonus + PHP 1.5M housing + specialty training",
      "50 upgraded hospitals with modern equipment become ATTRACTIVE workplaces",
      "Mandatory 3-year service before international licensure processing",
    ],
    projection: "Net outflow reduced by 40%. Vacancy rates from 40-60% to below 20%. Physician ratio improves from 1:33,000 toward 1:20,000.",
    timeline: "Day 1: Emergency allowance EO. Year 1: Salary Act passed. Year 2: Return to Serve launched. Year 3-6: 50 Centers operational.",
    budget: "PHP 50-60B/year (salary adjustments are the largest line item — the only intervention that works)",
    kpis: ["Annual healthcare worker emigration", "Government hospital vacancy rate", "Return to Serve participants", "Patient satisfaction at Centers of Excellence"],
  },
  {
    id: 4,
    category: "HEALTHCARE",
    icon: Cpu,
    title: "Project Lunas — National AI Health Platform",
    problem: "1.2 doctors per 10K. Massive underserved areas. Paper-based records. Weeks-delayed disease surveillance. Philippines is 4th highest TB burden globally.",
    solution: "Deploy AI diagnostics nationally: TB screening in 2,500 Rural Health Units, diabetic retinopathy in 500 facilities, maternal risk prediction. 1,000 AI-assisted telemedicine hubs in isolated areas. Real-time disease surveillance AI.",
    mechanism: [
      "AI TB screening (chest X-ray AI) in all RHUs with digital X-ray",
      "AI claims adjudication for PhilHealth (70% faster, 3x fraud detection)",
      "National Disease Surveillance AI from aggregated facility data",
      "1,000 telemedicine hubs in GIDAs (geographically isolated areas)",
      "Health Data Exchange using HL7 FHIR standard",
    ],
    projection: "200K+ additional TB cases identified annually. Telemedicine: 2M+ consultations/year in areas with zero doctors. Outbreak detection: weeks → under 72 hours.",
    timeline: "Year 1: 200 RHU pilots + PhilHealth AI pilot. Year 2: 1,500 RHUs + 300 telemedicine hubs. Year 3: Full national rollout.",
    budget: "PHP 8-12B over 6 years (modest — mostly software on existing/low-cost hardware)",
    kpis: ["TB detection rate increase", "Telemedicine consultations annually", "Outbreak detection speed", "PhilHealth processing time"],
  },
  {
    id: 5,
    category: "ECONOMY",
    icon: DollarSign,
    title: "BPO-to-AI Transformation Program",
    problem: "AI threatens 30-50% of BPO jobs (500K+ positions). BPO = 8% of GDP, 1.7M direct jobs. If disrupted without preparation, the economic shock would be devastating.",
    solution: "PHP 10B/year to reskill 500K BPO workers in AI-adjacent skills. Tax incentives for companies that adopt AI AND retain workers. Position Philippines as global #1 in AI training data and human-in-the-loop AI services.",
    mechanism: [
      "AI-Ready Workforce Act: 500K workers reskilled over 5 years",
      "200% tax deduction for AI investment + worker training (not layoffs)",
      "AI Services Export Zones in Manila, Cebu, Clark",
      "Philippine AI Annotation Industry targeting 20% of global $5B market",
      "Prompt engineering, AI QA, healthcare AI operations as new career paths",
    ],
    projection: "BPO revenue: $33B → $50-60B by 2034. Employment stable at 1.5-1.8M but at higher wages. AI annotation industry: 100K+ jobs.",
    timeline: "Day 1: Task Force. Year 1: Reskilling begins (100K slots). Year 2: Export Zones operational. Year 3-6: Full transformation.",
    budget: "PHP 10-15B/year (reskilling + zones + tax incentive cost)",
    kpis: ["BPO employment level", "Industry revenue", "Workers reskilled", "Average worker salary increase", "AI market share"],
  },
  {
    id: 6,
    category: "EDUCATION",
    icon: GraduationCap,
    title: "National Learning Emergency — Operation Aral",
    problem: "PISA 2022: 77th/81 in math. 90%+ of 10-year-olds can't read with comprehension. 2 years of COVID school closures (world's longest). Only 1% of teachers scored 'proficient' in content knowledge.",
    solution: "Declare National Learning Emergency. Structured literacy mandate for all K-3 (phonics-based instruction). Singapore Math methodology Grades 1-6. Teacher salary from SG 11 to SG 15 with performance pathway. 10,000 Community Learning Hubs for remediation.",
    mechanism: [
      "Executive Order Day 1: Learning Emergency declared",
      "Structured literacy training for 300,000 K-3 teachers",
      "Singapore Math methodology for 5M+ students",
      "Teacher salary increase from ~PHP 27K to ~PHP 36K/month",
      "Teacher quality gate: content knowledge exam within 3 years",
      "10,000 after-school tutoring hubs in barangay halls and churches",
    ],
    projection: "Learning poverty: 90%+ → below 50%. PISA: 50-point improvement. Teacher proficiency: 1% → 30%+.",
    timeline: "Day 1: Emergency declared. Year 1: Training begins + salary increase. Year 2: Full implementation K-6. Year 3+: Measurable results.",
    budget: "PHP 60-80B/year additional (education spending from 3.5% to 4.5% of GDP)",
    kpis: ["Learning poverty rate", "PISA scores", "Teacher proficiency rate", "NAT score improvement", "Community Hub enrollment"],
  },
  {
    id: 7,
    category: "INFRASTRUCTURE",
    icon: Building2,
    title: "Metro Manila Mobility Emergency",
    problem: "$67M/day lost to traffic ($24.5B/year, 5% of GDP). 1.5-2 hour average commute. 79km of rail for 14M people. No unified transport authority.",
    solution: "Create Metro Manila Transport Authority (single command). EDSA BRT in 12-18 months. Congestion pricing for CBDs. Fast-track the funded-but-delayed subway, MRT-7, and LRT extensions. 100km protected bike lanes.",
    mechanism: [
      "Day 1: Transport Czar appointed with Cabinet rank",
      "EDSA BRT: dedicated lanes already exist — needs stations, fleet, operations",
      "Congestion pricing: PHP 100-300 per CBD entry during peak hours",
      "Weekly presidential progress reviews on rail projects",
      "100km bike lanes connecting to transit stations",
    ],
    projection: "Average commute: 90 min → under 60 min. Mass transit ridership: 1M → 3M+/day. CBD traffic: -25%. Air quality: 20% improvement.",
    timeline: "Day 1: MMTA created. Year 1: BRT operational. Year 2: Congestion pricing live. Year 3-6: Subway partial opening.",
    budget: "PHP 30-40B/year new + PHP 500B existing rail allocations. Congestion pricing generates PHP 15-20B/year revenue.",
    kpis: ["Average commute time", "Daily mass transit ridership", "CBD peak traffic reduction", "Rail km operational", "Air quality (PM2.5)"],
  },
  {
    id: 8,
    category: "GOVERNANCE",
    icon: Shield,
    title: "Philippine Stack — Digital Government Platform",
    problem: "Government services require visiting 10+ offices. 30+ days for a business permit. Cash-based transactions enable corruption. No interoperability between agencies. PhilSys (national ID) barely integrated with any actual services.",
    solution: "Build 'Philippine Stack' — 4 layers: Identity (PhilSys+), Payments (GovPay), Data Exchange (GovConnect), Services (eGov.ph). Modeled on India Stack + Estonia X-Road. Every government service available digitally by 2032.",
    mechanism: [
      "PhilSys+ digital authentication via smartphone for ALL government transactions",
      "GovPay: unified payments for subsidies, taxes, fees, permits through GCash/Maya/banks",
      "GovConnect: agencies share data (with consent) — submit documents ONCE, never again",
      "eGov.ph: single portal for 500+ government services",
      "Digital-first mandate: if it CAN be digital, it MUST be digital by 2032",
    ],
    projection: "Save 2% of GDP ($8-9B/yr) in admin costs. Business permits: 30 days → under 5 days. Leakage from cash subsidies: reduced by PHP 20-40B/yr.",
    timeline: "Day 1: EO signed. Year 1: PhilSys+ API + GovPay pilot. Year 2: 50 services digital. Year 3: 100+ services. Year 6: 500+ services.",
    budget: "PHP 20-30B over 6 years total",
    kpis: ["Digital services available", "Transaction processing time", "Cash disbursements eliminated", "Citizen satisfaction score", "UN E-Gov ranking"],
  },
  {
    id: 9,
    category: "GOVERNANCE",
    icon: Scale,
    title: "Anti-Corruption Through Digital Transparency",
    problem: "CPI rank: 116th/180. Corruption costs PHP 700B-1T/year. Procurement opacity, cash transactions, discretionary budgets, slow courts, culture of impunity.",
    solution: "All procurement through PhilGEPS (digital, public). All payments above PHP 10K electronic (full audit trail). AI anomaly detection on government transactions. Beneficial ownership transparency. Lifestyle check automation. 20 fast-track anti-corruption courts.",
    mechanism: [
      "Day 1: PhilGEPS mandate + electronic payment mandate for all agencies",
      "Open Budget Philippines portal — every agency's spending published",
      "AI Anti-Corruption Data Center analyzing procurement patterns",
      "Beneficial ownership registry for all government contractors",
      "AI lifestyle check: cross-references SALNs with property, vehicles, corporate records",
      "Fast-track courts resolve cases in 5 years, not 15+",
    ],
    projection: "CPI ranking: 116th → top 80. Procurement savings: 10-15% ($50-80B/yr). Recovered assets: PHP 50B+ cumulative.",
    timeline: "Day 1: Digital mandates. Year 1: Open Budget portal. Year 2: AI Data Center + 10 courts. Year 3: Full system operational.",
    budget: "PHP 8-12B/year. Fast-track courts: PHP 3B/yr. Pays for itself through recovered assets and procurement savings.",
    kpis: ["CPI ranking", "% procurement through PhilGEPS", "Case resolution time", "Recovered assets", "Whistleblower cases filed"],
  },
  {
    id: 10,
    category: "STRUCTURAL",
    icon: Globe,
    title: "Regional Economic Centers — End Manila Monopoly",
    problem: "Manila = 36% of GDP on 0.2% of land. Hyper-concentration creates traffic, housing crisis, regional inequality. NCR income is 4-5x BARMM income.",
    solution: "Designate 5 Regional Economic Centers (Cebu, Davao, Clark-Subic, Iloilo, CDO). Move 10%+ of government workforce outside Manila. 40% of new infrastructure spending outside NCR. Tax holidays for companies establishing in RECs.",
    mechanism: [
      "5 RECs with EDB-style investment authorities",
      "Government agencies relocate 10% of workforce to RECs within 3 years",
      "5-year income tax holidays for qualifying REC investments",
      "Airport upgrades: each REC city to handle 15M+ passengers/year",
      "PHP 50B/year dedicated to REC infrastructure",
    ],
    projection: "NCR GDP share: 36% → 31-33%. 500K-1M new jobs outside Manila. REC growth: 2+ points above national average.",
    timeline: "Day 1: RECs designated. Year 1: Incentive zones. Year 2: First agency relocations. Year 3-6: Measurable shift.",
    budget: "PHP 60-80B/year. Revenue-positive by Year 4-5 as RECs generate tax base.",
    kpis: ["NCR % of GDP", "REC combined GDP growth", "Government employees outside NCR", "Private sector REC jobs", "Airport passenger volumes in REC cities"],
  },
];

const firstHundredDays = [
  "PhilHealth Emergency Reset (EO 001)",
  "Metro Manila Mobility Emergency (EO 002)",
  "National Learning Emergency (EO 003)",
  "Digital Anti-Corruption Mandate (EO 004)",
  "Health Worker Emergency Allowance (EO 005)",
  "Mental Health Emergency (EO 008)",
  "Philippine Stack Launch (EO 010)",
  "Project Lunas — AI Health Platform (EO 012)",
  "BARMM Health Bridge (EO 015)",
  "Agricultural Emergency (EO 018)",
  "BPO-AI Task Force (EO 020)",
  "OFW Reintegration Program (EO 022)",
  "AI Education Pilot (EO 025)",
  "Climate Resilience Standards (EO 028)",
  "Universal Connectivity (EO 030)",
  "Regional Economic Centers (EO 035)",
  "BARMM Transition Acceleration (EO 040)",
];

const categoryColors: Record<string, string> = {
  STRUCTURAL: "border-blue-300 bg-blue-50/50",
  HEALTHCARE: "border-red-300 bg-red-50/50",
  ECONOMY: "border-green-300 bg-green-50/50",
  EDUCATION: "border-purple-300 bg-purple-50/50",
  INFRASTRUCTURE: "border-yellow-300 bg-yellow-50/50",
  GOVERNANCE: "border-indigo-300 bg-indigo-50/50",
};

export default function PolicyRecommendationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-emerald-100 text-emerald-700 border-emerald-300 mb-3">PRESIDENTIAL POLICY FRAMEWORK</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Policy Recommendations</h1>
        <p className="text-muted-foreground mt-2">
          10 priority policies for the next president — each with specific executive orders, legislation, budgets, timelines, and measurable KPIs. Sequenced for maximum political capital and compounding impact.
        </p>
      </div>

      {/* First 100 Days */}
      <Card className="border-primary bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5" />
            First 100 Days — Executive Orders (No Legislation Needed)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            The first 100 days must deliver visible, felt change to build political capital. These require only executive orders — no congressional approval. Do the popular things first.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {firstHundredDays.map((eo, i) => (
              <div key={eo} className="text-xs bg-white border rounded-lg p-2 flex items-start gap-2">
                <span className="font-mono text-primary font-bold shrink-0">{i + 1}.</span>
                <span className="text-muted-foreground">{eo}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Recommendations */}
      {recommendations.map((rec) => (
        <Card key={rec.id} className={categoryColors[rec.category] || ""}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-white border flex items-center justify-center shrink-0">
                  <span className="font-mono font-bold text-sm text-primary">{rec.id}</span>
                </div>
                {rec.title}
              </span>
              <Badge variant="outline" className="text-xs">{rec.category}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <h4 className="text-xs font-semibold text-red-700 mb-1">The Problem</h4>
              <p className="text-sm text-muted-foreground">{rec.problem}</p>
            </div>

            <div className="bg-white rounded-lg p-4 border">
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">The Solution</h4>
              <p className="text-sm text-muted-foreground mb-3">{rec.solution}</p>
              <div className="space-y-1">
                {rec.mechanism.map((m) => (
                  <p key={m} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />{m}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <h4 className="text-xs font-semibold text-green-700 mb-1">Projected Impact</h4>
                <p className="text-xs text-muted-foreground">{rec.projection}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <h4 className="text-xs font-semibold text-blue-700 mb-1">Timeline</h4>
                <p className="text-xs text-muted-foreground">{rec.timeline}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <h4 className="text-xs font-semibold text-purple-700 mb-1">Budget</h4>
                <p className="text-xs text-muted-foreground">{rec.budget}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">KPIs</h4>
              <div className="flex flex-wrap gap-1">
                {rec.kpis.map((k) => (
                  <Badge key={k} variant="secondary" className="text-[10px]">{k}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* The Fiscal Math */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-bold text-lg">The Fiscal Framework</h3>
          <p className="text-sm text-muted-foreground">
            Total additional annual investment at steady state (Year 3): <span className="font-mono font-bold">PHP 495-665B/year (2.2-2.9% of GDP)</span>. Funded by:
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { source: "Tax revenue growth from GDP expansion", amount: "PHP 100-150B" },
              { source: "Carbon tax", amount: "PHP 15-25B" },
              { source: "Health Premium Tax (0.5%)", amount: "PHP 40-50B" },
              { source: "Congestion pricing", amount: "PHP 15-20B" },
              { source: "Corruption savings + recovered assets", amount: "PHP 50-100B" },
              { source: "Efficiency from digital government", amount: "PHP 30-50B" },
              { source: "Reallocation from inefficient programs", amount: "PHP 50-80B" },
              { source: "Green bonds + climate finance", amount: "PHP 30-50B" },
              { source: "Productive deficit (within 3% GDP limit)", amount: "PHP 100-150B" },
            ].map((f) => (
              <div key={f.source} className="bg-white rounded-lg p-2 border text-xs">
                <span className="text-muted-foreground">{f.source}</span>
                <p className="font-mono font-medium mt-0.5">{f.amount}/yr</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Execute even 7 of these 10 recommendations well, and this presidency transforms the country.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
