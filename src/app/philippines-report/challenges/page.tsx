import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { challenges } from "@/lib/data/philippines-economy";

export default function ChallengesPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-orange-100 text-orange-700 border-orange-300 mb-3">CRITICAL ANALYSIS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Critical National Challenges</h1>
        <p className="text-muted-foreground mt-2">8 structural challenges holding back 117 million people — from poverty and corruption to climate vulnerability and the education crisis. Each with specific data and actionable solutions.</p>
      </div>
      {challenges.map(ch => (
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

      {/* Governance / Anti-Fraud Section */}
      <Card className="border-red-300 bg-red-50/30">
        <CardHeader><CardTitle className="text-base flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-red-600" /> Government Fund Misuse & Incomplete Projects</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">A persistent pattern across Philippine governance: funds are allocated for major projects, partially disbursed, and then projects are left incomplete while funds disappear. The Malampaya Fund ($11B in revenues) was diverted to fake NGOs. PhilHealth fraud is estimated at PHP 10B+/year. Infrastructure projects regularly run 2-5x over budget and years behind schedule.</p>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Structural Protections Required for Any New Fund</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Independent governance board — NO political appointees, Senate-confirmed CEO with fixed 7-year term",
                "Radical transparency: every holding, expenditure, and contract published quarterly",
                "International audit firm (Big Four) conducts annual independent audit alongside COA",
                "Ring-fenced accounts: fund capital cannot be accessed for general government spending",
                "Milestone-based disbursement: JV partners receive funds only upon verified completion of project phases",
                "AI-powered monitoring: satellite imagery verifies infrastructure completion, blockchain records all transactions",
                "Whistleblower rewards: 10-20% of recovered misused funds paid to whistleblowers",
                "Fast-track anti-corruption courts: cases resolved in 5 years not 15+",
                "Beneficial ownership registry: all contractors must disclose ultimate owners, cross-referenced with officials' assets",
                "Performance bonds: contractors post 20% bonds forfeited if projects incomplete",
                "Escrow mechanisms: funds held in escrow with international bank, released only on third-party verification",
                "Public dashboard: real-time project progress visible to every Filipino citizen online",
              ].map(p => (<p key={p} className="text-xs text-muted-foreground flex items-start gap-1"><span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />{p}</p>))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">The key insight: <span className="font-semibold text-foreground">corruption is not a moral failing — it is a systems design failure</span>. When systems make corruption easy and detection hard, corruption happens. Digital transparency, AI monitoring, and institutional independence make corruption difficult and detection automatic. Estonia reduced corruption to Nordic levels through digitization alone.</p>
        </CardContent>
      </Card>
    </div>
  );
}
