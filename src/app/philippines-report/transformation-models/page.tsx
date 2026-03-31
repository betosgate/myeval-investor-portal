import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Landmark, Scale } from "lucide-react";

const models = [
  {
    model: "Norway — Sovereign Wealth Fund",
    country: "Norway",
    color: "border-blue-300 bg-blue-50/50",
    keyFact: "$1.78 trillion fund — every Norwegian a millionaire on paper",
    original: "Established Government Pension Fund Global in 1990 from North Sea oil revenues. Fiscal rule: spend only 3% real return, never principal. Managed by Norges Bank with radical transparency. Norway went from fishing economy to world's highest GDP per capita ($108K).",
    philippineApplication: "Philippines sits on $1T+ in mineral reserves (world's 2nd largest nickel) plus Reed Bank gas (5.4B barrels, $432B value — blocked by China). Malampaya generated $11B but was plagued by corruption. Reform Maharlika Fund: shift from pension capital to resource revenues, Norwegian governance, independent board, fiscal rule, ban domestic investment for 10 years.",
    reforms: ["Shift Maharlika to resource revenues", "Legislate 3% fiscal rule", "Independent board, Senate-confirmed CEO", "Ban domestic equity 10 years", "Radical transparency: publish every holding", "Constitutional principal protection"],
    projection: "At $10B/yr + 7% returns: $138B in 10yr, $410B in 20yr, $945B in 30yr",
    healthFit: "5-10% of annual returns to National Health Endowment funds AI screening nationwide",
    feasibility: "High — Maharlika exists. Amend RA 11954 in first 100 days.",
  },
  {
    model: "Singapore — Strategic Industrial Transformation",
    country: "Singapore",
    color: "border-green-300 bg-green-50/50",
    keyFact: "$500 GDP/capita (1965) → $88,000 (2025)",
    original: "EDB recruited multinationals. Temasek ($382B) and GIC ($770B) invest globally. Teachers from top 1/3 of grads. Ministers paid $1M+ (anti-corruption). 80% in government housing they own.",
    philippineApplication: "Upgrade PEZA to EDB-level. BGC/Clark as Health-Tech SEZs. Station investment officers in 20 countries. Target: health-tech, AI, semiconductors, renewables. Triple Ombudsman budget. Anti-corruption as economic policy.",
    reforms: ["PEZA upgrade to cabinet-level EDB", "5-7 Economic Transformation Zones", "Triple Ombudsman budget", "5 strategic sectors with 10-year tax holidays", "Global investment officer network"],
    projection: "Manufacturing 18% → 28% GDP (+$50B/yr). BPO-to-KPO: $15K → $40K/worker. GDP/capita to $8-10K in 15 years.",
    healthFit: "Philippines as 'Health-Tech Hub of ASEAN.' MyEval.ai as flagship. BPO workforce transitions to health-tech operations.",
    feasibility: "Moderate — requires breaking oligarchic rent-seeking.",
  },
  {
    model: "South Korea — Education-Led Industrial Leap",
    country: "South Korea",
    color: "border-purple-300 bg-purple-50/50",
    keyFact: "$100 GDP/capita (1960) → $35,000 (2025). Poorer than Philippines in 1960.",
    original: "6-8% of GDP in education for decades → PISA #1-3 globally. Government-backed chaebols hit export targets or lost credit. Universal healthcare in 12 years. Life expectancy 83.5.",
    philippineApplication: "Triple education spending (3.5% → 7%). Recruit teachers from top 30%. Create 10 Philippine Institutes of Technology (KAIST model). Conditional conglomerate incentives for export/tech only. Presidential Export Council.",
    reforms: ["Education spending to 6-7% GDP", "Teachers from top 30% at 2x salary", "10 Philippine Tech Institutes", "Export targets for conglomerates", "Universal healthcare via PhilHealth in 12 years"],
    projection: "PISA: 340 → 450+ in 10-15yr. Exports: $75B → $200B. GDP/capita: $7-9K.",
    healthFit: "Digitized PhilHealth backbone. AI fraud detection saves PhP 50-100B/yr. MyEval.ai = health tech infrastructure.",
    feasibility: "Long-term (10-20yr). Requires sustained commitment across administrations.",
  },
  {
    model: "Rwanda — Technology-First Leapfrog",
    country: "Rwanda",
    color: "border-teal-300 bg-teal-50/50",
    keyFact: "Life expectancy: 28 (1994) → 69 (2025). Post-genocide miracle.",
    original: "Community health insurance (91% at $3/person/yr). Zipline drone delivery. Digital government (Irembo). Performance contracts for officials. 4G: 98% coverage.",
    philippineApplication: "Deploy AI screening on 80M+ smartphones instead of building clinics. Equip 97K barangay health workers with AI tools. Barangay health insurance (PhP 100/month). Drone medical delivery for Visayas/Mindanao. Performance contracts for all officials.",
    reforms: ["AI screening through 97K barangay health workers", "Barangay-level health insurance (Mutuelle model)", "Medical supply drones for islands", "Performance contracts for all officials", "Digital-first top 100 government services"],
    projection: "Screen 20-30M in 2 years at $2-3/person. Cut unnecessary referrals 30-40%. Add 2-3 years life expectancy in 15yr.",
    healthFit: "MOST NATURAL FIT. AI health evaluations through community workers = Philippine Mutuelle de Santé. Universal screening without new infrastructure.",
    feasibility: "HIGH — no constitutional change needed. DOH policy + PhilHealth coverage + DICT connectivity. Pilot in 6 months.",
  },
  {
    model: "India — Digital Public Infrastructure (India Stack)",
    country: "India",
    color: "border-orange-300 bg-orange-50/50",
    keyFact: "UPI: $2T+/year. More than Visa + Mastercard combined.",
    original: "Aadhaar (1.4B IDs) + UPI (free payments) + ABHA (health accounts) + Direct Benefit Transfer (saved $27B in leakage). UPI exported to Singapore, UAE.",
    philippineApplication: "Build 'Philippine Stack': PhilSys + free InstaPay + Health Data Exchange + Direct Transfers. Mandate interoperability. Open APIs for all government systems.",
    reforms: ["PhilSys mandatory for all government/banking by 2028", "Free InstaPay P2P transfers (breaks GCash oligopoly)", "Direct transfers through PhilSys accounts", "Philippine Health Data Exchange", "Open APIs for government systems"],
    projection: "Financial inclusion to 95%+. Save PhP 50-100B/yr in leakage. Reduce health admin waste 15-20%.",
    healthFit: "MyEval.ai = health evaluation layer of Philippine Stack. Every PhilSys holder gets health profile. AI evaluations auto-sync. PhilHealth auto-processes via digital wallet. Zero out-of-pocket.",
    feasibility: "Moderate-High — pieces exist. Presidential directive accelerates.",
  },
  {
    model: "Costa Rica — Invest in People Over Arms",
    country: "Costa Rica",
    color: "border-yellow-300 bg-yellow-50/50",
    keyFact: "Abolished military 1948. Life expectancy 81 — higher than USA.",
    original: "Redirected military to education (7.4% GDP) and healthcare (7.6% GDP). Universal CCSS coverage. 97.9% literacy. 98% renewable electricity. Ecotourism $4B/yr.",
    philippineApplication: "20% Peace Dividend: reduce defense $1-1.2B/yr through modernization (AI/drones, not troops). Redirect to health ($500M), teacher salaries ($300M), rural health tech ($200M). Every RHU gets digital tools. Ecotourism expansion to $25B targeting 100+ islands.",
    reforms: ["Military modernization review", "US cost-sharing via EDCA", "Redirect $1B/yr to health and education", "Every RHU with digital health tools", "100-island ecotourism strategy"],
    projection: "Life expectancy: 72 → 77+. Secondary completion: 78% → 95%. Tourism: $13B → $25B.",
    healthFit: "Every peso from military to health tech multiplies through AI scale. MyEval.ai costs pennies/person, replaces thousands of absent doctors.",
    feasibility: "Low for full. Medium for 20%. High for BARMM-specific. Frame as modernization.",
  },
  {
    model: "Estonia — E-Governance Revolution",
    country: "Estonia",
    color: "border-indigo-300 bg-indigo-50/50",
    keyFact: "99% of government services online. 3 minutes per interaction. Saves 2% GDP.",
    original: "X-Road (government data exchange). e-ID (99% usage). e-Residency (100K+ global). i-Voting. Digital health records. 'Once only' principle. Blockchain integrity.",
    philippineApplication: "Philippine X-Road connecting agencies. 'Once only' — end redundant documents. E-Residency for 10.5M OFWs ($500M-1B/yr). Patient portal. All transactions logged = auditable corruption.",
    reforms: ["Philippine X-Road for all agencies", "'Once only' document principle", "E-Residency for 10.5M OFW diaspora", "Unified digital health records", "Blockchain-backed record integrity"],
    projection: "Save 2% GDP ($8-9B/yr). E-residency: $500M-1B/yr. Cut corruption leakage 30-50%.",
    healthFit: "MyEval.ai as health module in X-Road. Evaluations auto-available to PhilHealth, physicians, public health. OFW e-residents access health evaluations across borders.",
    feasibility: "Moderate — needs tech-entrepreneur czar (like India's Nilekani). DICT exists but execution weak.",
  },
];

export default function TransformationModelsPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-violet-100 text-violet-700 border-violet-300 mb-3">STRATEGIC POLICY FRAMEWORKS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Global Transformation Models</h1>
        <p className="text-muted-foreground mt-2">
          Seven proven national transformation models — each adapted with specific reforms, projected impact, and health technology integration for the Philippines.
        </p>
      </div>

      <Card className="border-blue-200 bg-blue-50/50">
        <CardContent className="p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Every model below was implemented by a country that started with fewer advantages than the Philippines.</span> Norway was a fishing nation. Singapore was a port. Korea was poorer than the Philippines in 1960. Rwanda survived genocide. The Philippines has 117M English speakers, $1T in minerals, $37B in remittances, and Asia&apos;s youngest workforce. The gap is institutional, not fundamental.
          </p>
        </CardContent>
      </Card>

      <Separator />

      {models.map((m) => (
        <Card key={m.model} className={m.color}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              <span>{m.model}</span>
              <Badge variant="outline" className="text-xs font-mono">{m.country}</Badge>
            </CardTitle>
            <p className="text-sm font-medium text-primary">{m.keyFact}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">The Model</h4>
              <p className="text-sm text-muted-foreground">{m.original}</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4 border">
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-1 text-primary">Philippine Application</h4>
              <p className="text-sm text-muted-foreground">{m.philippineApplication}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Required Reforms</h4>
              <div className="grid grid-cols-2 gap-1">
                {m.reforms.map((r) => (
                  <p key={r} className="text-xs text-muted-foreground flex items-start gap-1 bg-white/50 rounded p-1.5 border">
                    <Scale className="h-3 w-3 mt-0.5 shrink-0 text-primary" />{r}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <h4 className="text-xs font-semibold text-green-700 mb-1">Projection</h4>
                <p className="text-xs text-muted-foreground">{m.projection}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <h4 className="text-xs font-semibold text-blue-700 mb-1">Health-Tech Fit</h4>
                <p className="text-xs text-muted-foreground">{m.healthFit}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <h4 className="text-xs font-semibold text-purple-700 mb-1">Feasibility</h4>
                <p className="text-xs text-muted-foreground">{m.feasibility}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Combined Impact */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-bold text-lg">Combined 15-Year Impact</h3>
          <div className="grid grid-cols-5 gap-3 text-center">
            {[
              { metric: "GDP/Capita", from: "$3,900", to: "$8,000-12,000" },
              { metric: "SWF Value", from: "$2.25B", to: "$100-200B" },
              { metric: "Life Expectancy", from: "72 years", to: "77-79" },
              { metric: "PISA Scores", from: "~340", to: "450+" },
              { metric: "Poverty Rate", from: "18%", to: "5-8%" },
            ].map((m) => (
              <div key={m.metric} className="bg-white rounded-lg p-3 border">
                <p className="text-xs text-muted-foreground">{m.metric}</p>
                <p className="text-sm font-mono text-red-600">{m.from}</p>
                <p className="text-xs text-muted-foreground">→</p>
                <p className="text-lg font-mono font-bold text-green-700">{m.to}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
