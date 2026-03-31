import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Shield, CheckCircle, DollarSign, Scale } from "lucide-react";
import { challenges } from "@/lib/data/philippines-economy";

const corruptionCases = [
  { name: "Pork Barrel / PDAF Scam (Napoles)", amount: "PHP 10B ($200M+)", scheme: "Fake NGOs received PDAF allocations. Money diverted through ghost projects.", outcome: "Napoles: reclusion perpetua (2018). Sen. Revilla: acquitted. Sen. Estrada: plea bargain. Sen. Enrile: bail (age). Most money never recovered.", year: "2013" },
  { name: "PhilHealth Fraud", amount: "PHP 15-154B (est. range)", scheme: "Inflated claims, ghost dialysis patients, overpriced supplies, IT system anomalies. Senate 2020 investigation under Sen. Lacson.", outcome: "Officials resigned. Limited convictions. PhilHealth tightened claims but systemic issues persist. PHP 500B reserve sits unused.", year: "2020" },
  { name: "Malampaya Fund Diversion", amount: "PHP 4.6B", scheme: "Gas royalty fund (intended for energy) diverted to fake foundations and shell companies under Arroyo administration.", outcome: "Cases crawling through Sandiganbayan. Former President Arroyo acquitted on related charge (2016). Funds largely unrecovered.", year: "2012" },
  { name: "NBN-ZTE Broadband Deal", amount: "$329M (PHP 17B+)", scheme: "$329M contract with ZTE (China) for broadband — actual cost ~$130M. Alleged $130M in kickbacks. Whistleblower Jun Lozada exposed it.", outcome: "Contract cancelled due to outrage. No one convicted. Lozada was kidnapped, then went into hiding. Case died.", year: "2007" },
  { name: "Yolanda Recovery Fund Anomalies", amount: "PHP 15-18B flagged", scheme: "Post-typhoon rehab funds: slow release, misallocation, overpriced bunkhouses (DPWH), ghost beneficiaries.", outcome: "COA flagged billions. Political accountability only. Limited criminal cases.", year: "2014" },
];

const fundProtections = [
  { protection: "Independent governance board", detail: "NO political appointees as majority. Senate-confirmed CEO with fixed 7-year term. International board members from ADB/World Bank. Staggered terms so no president controls majority." },
  { protection: "Radical transparency", detail: "Every holding, expenditure, and contract published quarterly. Real-time public dashboard showing all fund flows. Monthly publication of portfolio, returns, and fees. LMTI target: 10/10." },
  { protection: "International audit", detail: "Annual audit by Big Four firm (Deloitte/PwC/EY/KPMG) alongside COA. Santiago Principles self-assessment annually. IFSWF peer review." },
  { protection: "Milestone-based disbursement", detail: "0% upfront. 20% at verified foundation. 30% at structural completion. 30% at finishing. 20% retained for 1 year. Each milestone verified by independent inspector + satellite imagery." },
  { protection: "AI-powered monitoring", detail: "ML models trained on Philippine procurement data flag: overpricing, collusion patterns, shell companies, PEP connections. Automatic referral to Ombudsman." },
  { protection: "Satellite & drone verification", detail: "Planet Labs/Maxar imagery weekly verifying construction progress. AI change-detection algorithms compare expected vs actual. PhilSA coordination. Public viewing." },
  { protection: "Blockchain fund tracking", detail: "Permissioned blockchain records every peso disbursed — immutable, timestamped, publicly verifiable. Smart contracts release payments only on milestone verification." },
  { protection: "Whistleblower rewards", detail: "10-20% of recovered misused funds (capped PHP 50M). Protection for family members. Anonymous reporting channels managed by external party (Transparency International PH)." },
  { protection: "Performance bonds", detail: "Contractors post 30% performance bond (vs typical 10%). Held by independent escrow agent, not implementing agency. Forfeited if project incomplete." },
  { protection: "Contractor completion insurance", detail: "Mandatory project completion insurance from reputable insurer. If contractor abandons, insurer funds completion. Eliminates the 'half-finished project' problem." },
  { protection: "Fast-track anti-corruption courts", detail: "20 additional Sandiganbayan divisions. Target: resolve cases in 5 years not 15+. Automatic investigation triggered by AI anomaly detection." },
  { protection: "Citizen monitoring (Bantay-Pondo app)", detail: "117 million Filipinos become 117 million auditors. Geo-tagged project verification. Photo reporting. GCash rewards for verified tips. Barangay monitoring committees." },
  { protection: "Conflict-of-interest framework", detail: "Full asset disclosure pre-appointment. Annual declarations cross-referenced with AMLC. 3-year post-service cooling-off. Automatic recusal for related investments. Criminal penalties for violations." },
  { protection: "Constitutional principal protection", detail: "Amend Constitution: fund principal cannot be withdrawn except by 3/4 vote of both chambers + BSP certification + Advisory Body approval. Mandatory repayment within 5 years." },
];

export default function ChallengesPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-orange-100 text-orange-700 border-orange-300 mb-3">CRITICAL ANALYSIS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Critical National Challenges</h1>
        <p className="text-muted-foreground mt-2">8 structural challenges, 5 landmark corruption cases, and a 14-point anti-fraud framework that makes a Sovereign Wealth Fund corruption-proof.</p>
      </div>

      {/* Structural Challenges */}
      {challenges.map((ch) => (
        <Card key={ch.name} className={ch.severity === "Critical" ? "border-red-300 bg-red-50/30" : ch.severity === "High" ? "border-yellow-200 bg-yellow-50/20" : ""}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center justify-between">
              <span className="flex items-center gap-2"><AlertTriangle className="h-4 w-4" />{ch.name}</span>
              <Badge className={ch.severity === "Critical" ? "bg-red-100 text-red-700" : ch.severity === "High" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-700"}>{ch.severity}</Badge>
            </CardTitle>
            <p className="text-xs font-mono text-muted-foreground">{ch.metric}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{ch.detail}</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <h4 className="text-xs font-semibold text-green-700 mb-1">Current Solutions & What&apos;s Needed</h4>
              <p className="text-xs text-muted-foreground">{ch.solutions}</p>
            </div>
          </CardContent>
        </Card>
      ))}

      <Separator />

      {/* Corruption Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Scale className="h-6 w-6" /> Landmark Corruption Cases — The Pattern
        </h2>
        <p className="text-sm text-muted-foreground">These cases reveal the systemic pattern: funds allocated → diverted through ghost entities → half-finished or non-existent projects → minimal accountability. Any new Sovereign Wealth Fund must be designed to make this pattern IMPOSSIBLE.</p>

        {corruptionCases.map((c) => (
          <Card key={c.name} className="border-red-200 bg-red-50/30">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{c.year}</p>
                </div>
                <Badge className="bg-red-100 text-red-700 font-mono">{c.amount}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 border">
                  <h4 className="text-xs font-semibold text-red-700 mb-1">The Scheme</h4>
                  <p className="text-xs text-muted-foreground">{c.scheme}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-1">Outcome</h4>
                  <p className="text-xs text-muted-foreground">{c.outcome}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-yellow-200 bg-yellow-50/30">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">COA flags PHP 500B-1T+ annually</span> in audit observations across all agencies — procurement deficiencies, unliquidated advances, unrecorded assets. Not all is &ldquo;corruption&rdquo; (many are procedural failures), but the scale indicates systemic weakness. Recent flagged cases: DepEd laptop procurement (PHP 2.4B), DOH COVID fund expenditures, DPWH infrastructure contracts.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Anti-Fraud Framework */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="h-6 w-6" /> 14-Point Corruption-Proof Framework
        </h2>
        <p className="text-sm text-muted-foreground">
          Every protection below addresses a specific Philippine corruption pattern identified from the cases above. The framework is based on Norway&apos;s GPFG governance (Santiago Principles), Estonia&apos;s digital transparency, and AI-powered monitoring — adapted for the Philippine context.
        </p>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardContent className="p-4">
            <p className="text-sm font-semibold text-primary mb-1">The Design Principle</p>
            <p className="text-xs text-muted-foreground">Corruption is not a moral failing — it is a <span className="font-semibold text-foreground">systems design failure</span>. When systems make corruption easy and detection hard, corruption happens. Digital transparency, AI monitoring, and institutional independence make corruption difficult and detection automatic. Estonia reduced corruption to Nordic levels through digitization alone. The Philippines can do the same for its sovereign wealth.</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-3">
          {fundProtections.map((p, i) => (
            <Card key={p.protection}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-mono font-bold text-xs text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{p.protection}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{p.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-lg mb-2">The Standard We Must Meet</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-foreground">Santiago Principles compliance. LMTI score of 10/10. Norwegian-standard transparency.</span> Every Filipino should be able to pull out their phone, open the Bantay-Pondo app, and see exactly where every peso of the sovereign wealth fund is invested, which projects it&apos;s funding, whether those projects are on schedule, and who is responsible. 117 million auditors is the most powerful anti-corruption tool ever invented.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
