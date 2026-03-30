import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertOctagon, Shield, TrendingDown, Globe, Scale, Cpu, Users, DollarSign, Zap } from "lucide-react";

const risks = [
  { id: 1, category: "Regulatory", risk: "AI health software classified as medical device requiring pre-market approval", probability: "Medium (40%)", impact: "Critical", countries: "India, Thailand, Brazil, Argentina", mitigation: "Position as Clinical Decision Support (CDS) exempt under FDA 21st Century Cures Act model. Each country has CDS exemptions. File for exemption proactively in all 8 markets. Budget: $35K per country for regulatory counsel. Have backup plan: if classified as SaMD Class II, begin registration immediately (12-18 month process).", contingencyBudget: 280_000, color: "bg-red-500" },
  { id: 2, category: "Political", risk: "Government regime change reverses health IT policy or partnership MOUs", probability: "Medium (35%)", impact: "High", countries: "Bolivia, Argentina, Bangladesh, Colombia", mitigation: "Diversify beyond government channel — build private sector revenue first. Government contracts should be <40% of any country's revenue. Structure MOUs to survive regime changes (institutional partnerships, not personal ones). Political risk insurance via MIGA (World Bank) or OPIC.", contingencyBudget: 200_000, color: "bg-yellow-500" },
  { id: 3, category: "Currency", risk: "Severe currency devaluation in target markets erodes revenue in USD terms", probability: "High (60%)", impact: "Medium", countries: "Argentina (highest risk), Bangladesh, Vietnam, Colombia", mitigation: "Price enterprise contracts in USD where possible. Use natural hedging (match local revenue with local costs). Argentina: invoice in USD or USD-linked pricing. Hold minimal local currency balances. Consider forward contracts for Brazil (BRL) and India (INR).", contingencyBudget: 500_000, color: "bg-yellow-500" },
  { id: 4, category: "Competition", risk: "Major tech company (Google Health, Apple) enters AI health evaluation space", probability: "Medium (30%)", impact: "High", countries: "All markets + US", mitigation: "Speed to market is the defense — establish integrations and government relationships before big tech can mobilize. Big tech won't localize for Bolivia or Bangladesh. Our multi-portal model is fundamentally different from what big tech would build (they'd build consumer-only). Deepen integration moats.", contingencyBudget: 0, color: "bg-yellow-500" },
  { id: 5, category: "Technology", risk: "Anthropic raises Claude API pricing significantly or discontinues features", probability: "Low (15%)", impact: "Critical", countries: "All markets", mitigation: "Build abstraction layer allowing model switching (Claude → GPT → Gemini). Negotiate enterprise pricing agreement with Anthropic including price lock for 24 months. Budget for 30% API cost increase in financial model. Begin training proprietary models on evaluation data by Month 12.", contingencyBudget: 300_000, color: "bg-orange-500" },
  { id: 6, category: "Data Breach", risk: "Health data breach compromising patient information", probability: "Low (10%)", impact: "Catastrophic", countries: "All markets", mitigation: "SOC 2 Type II, annual pen testing (2x), $5M cyber liability insurance, bug bounty program, end-to-end encryption, zero-trust architecture. Data breach response plan with 24-hour notification capability. Incident response retainer with CrowdStrike or Mandiant ($50K/year). HIPAA/LGPD/PDPA breach notification compliance.", contingencyBudget: 500_000, color: "bg-red-500" },
  { id: 7, category: "Key Person", risk: "CEO or CTO departure", probability: "Low (15%)", impact: "High", countries: "N/A — company-wide", mitigation: "$3M key person insurance on CEO and CTO. VP-level successors identified for both roles. Documentation of all strategic relationships and technical architecture. 12-month non-compete in employment agreements. Equity vesting with 4-year schedule and 1-year cliff.", contingencyBudget: 0, color: "bg-yellow-500" },
  { id: 8, category: "Market", risk: "Target countries adopt protectionist policies blocking foreign health-tech", probability: "Low (20%)", impact: "High", countries: "Vietnam, India, Bangladesh", mitigation: "Establish local legal entities with local employees (not just remote). Consider minority local ownership in sensitive markets (Vietnam JV). Build relationships with local tech companies as partners. Ensure data localization compliance. In India, 100% FDI is allowed — but demonstrate local value creation (jobs, tech transfer).", contingencyBudget: 150_000, color: "bg-yellow-500" },
  { id: 9, category: "Revenue", risk: "Government procurement cycles take 2-3x longer than projected", probability: "High (55%)", impact: "Medium", countries: "All government contracts", mitigation: "Financial model assumes conservative government timelines. Private sector revenue (hospitals, insurers, employers) should reach break-even independently of government contracts. Government revenue is upside, not baseline. Pipeline multiple: target 3x the pipeline needed for revenue targets.", contingencyBudget: 0, color: "bg-orange-500" },
  { id: 10, category: "Clinical", risk: "AI recommendation causes patient harm, leading to lawsuit", probability: "Very Low (5%)", impact: "Catastrophic", countries: "US (highest litigation risk), all markets", mitigation: "$5M E&O insurance, $5M product liability insurance. All outputs include 'consult healthcare provider' disclaimer. Position as CDS not diagnostic tool. Clinical validation studies at academic medical centers provide evidence base. Legal review of all patient-facing content. Adverse event monitoring and reporting system.", contingencyBudget: 250_000, color: "bg-red-500" },
  { id: 11, category: "Talent", risk: "Cannot recruit qualified health-tech talent in target markets", probability: "Medium (30%)", impact: "Medium", countries: "Bolivia, Bangladesh, Vietnam", mitigation: "Offer above-market compensation (budget 20% above local median). Remote work options from larger cities. Partner with local universities for pipeline. Consider relocating diaspora talent back to home countries. Use EOR (Employer of Record) services for initial hires before entity setup.", contingencyBudget: 100_000, color: "bg-yellow-500" },
  { id: 12, category: "Operational", risk: "Integration with legacy health systems takes 2-3x longer than estimated", probability: "High (50%)", impact: "Medium", countries: "All markets", mitigation: "Budget 2x the estimated integration timeline. Start with simplest integrations (DHIS2, OpenMRS) before tackling proprietary systems. Build adapter architecture that isolates country-specific complexity. Hire senior integration engineers with specific country health IT experience.", contingencyBudget: 200_000, color: "bg-orange-500" },
];

const totalContingency = risks.reduce((s, r) => s + r.contingencyBudget, 0);

export default function RiskMatrixPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Risk Matrix</h1>
        <p className="text-muted-foreground mt-2">
          12 identified risks with probability, impact, mitigation strategies, and contingency budgets.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-red-400">3</p><p className="text-xs text-muted-foreground">Critical/Catastrophic</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-yellow-400">6</p><p className="text-xs text-muted-foreground">High Impact</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold text-orange-400">3</p><p className="text-xs text-muted-foreground">Medium Impact</p></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><p className="text-3xl font-bold font-mono text-green-400">${(totalContingency / 1_000_000).toFixed(1)}M</p><p className="text-xs text-muted-foreground">Total Contingency</p></CardContent></Card>
      </div>

      <Separator />

      <div className="space-y-4">
        {risks.map((r) => (
          <Card key={r.id}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${r.color}`} />
                  <Badge variant="outline" className="text-xs">{r.category}</Badge>
                  {r.risk}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-muted/30 rounded-lg p-2">
                  <p className="text-xs text-muted-foreground">Probability</p>
                  <p className="text-sm font-medium">{r.probability}</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-2">
                  <p className="text-xs text-muted-foreground">Impact</p>
                  <p className="text-sm font-medium">{r.impact}</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-2">
                  <p className="text-xs text-muted-foreground">Countries Affected</p>
                  <p className="text-xs">{r.countries}</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-2">
                  <p className="text-xs text-muted-foreground">Contingency Budget</p>
                  <p className="text-sm font-mono font-medium">{r.contingencyBudget > 0 ? `$${(r.contingencyBudget / 1000).toFixed(0)}K` : "N/A"}</p>
                </div>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-green-400 mb-1">Mitigation Strategy</h4>
                <p className="text-xs text-muted-foreground">{r.mitigation}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
