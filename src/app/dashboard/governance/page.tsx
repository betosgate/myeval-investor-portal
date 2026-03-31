import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Crown, Shield, TrendingUp, Scale, FileText, Globe, Users } from "lucide-react";

export default function GovernancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Governance, IP & Exit Strategy</h1>
        <p className="text-muted-foreground mt-2">
          Board structure, intellectual property protection, Series B preparation, and exit pathways.
        </p>
      </div>

      {/* Board Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Crown className="h-5 w-5" />Board of Directors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">7-seat board with investor representation, independent directors, and management.</p>
          <div className="space-y-3">
            {[
              { seat: "Seat 1: CEO (Management)", person: "Founder/CEO", compensation: "No additional board compensation", rationale: "Operational leadership and vision" },
              { seat: "Seat 2: Lead Investor Representative", person: "Managing Partner from lead $50M fund", compensation: "No cash — equity aligned through fund", rationale: "Investor oversight, fundraising support, strategic guidance" },
              { seat: "Seat 3: Second Investor Representative", person: "Co-investor or fund advisor", compensation: "No cash — equity aligned", rationale: "Additional investor perspective, network access" },
              { seat: "Seat 4: Independent — Healthcare Executive", person: "Former hospital CEO or health system CxO", compensation: "$50K/year + 0.1% equity", rationale: "Health system sales credibility, regulatory navigation, clinical partnerships" },
              { seat: "Seat 5: Independent — International Health Policy", person: "Former WHO/PAHO official or health minister", compensation: "$40K/year + 0.1% equity", rationale: "Government relationship acceleration, policy credibility, development bank access" },
              { seat: "Seat 6: Independent — Technology/AI", person: "Former CTO of health-tech company or AI executive", compensation: "$40K/year + 0.1% equity", rationale: "Technical oversight, AI strategy, platform architecture guidance" },
              { seat: "Seat 7: Board Observer — Chief Medical Officer", person: "CMO (non-voting observer)", compensation: "Part of CMO compensation", rationale: "Clinical perspective on all board decisions" },
            ].map((s) => (
              <div key={s.seat} className="bg-muted/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{s.seat}</h3>
                  <Badge variant="outline" className="text-xs font-mono">{s.compensation}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{s.person}</p>
                <p className="text-xs text-muted-foreground mt-1"><span className="font-medium text-foreground">Why:</span> {s.rationale}</p>
              </div>
            ))}
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Board Meetings:</span> Monthly for first 12 months (critical launch phase), quarterly thereafter. In-person annually (coincide with all-hands), virtual otherwise. Board materials distributed 5 business days in advance.
          </div>
        </CardContent>
      </Card>

      {/* IP Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" />Intellectual Property Strategy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Patentable Innovations</h3>
              {[
                "Multi-portal health evaluation architecture (utility patent)",
                "AI-powered multi-factor risk scoring combining Framingham + STOP-Bang + custom models",
                "Cross-stakeholder health data aggregation method",
                "Localized clinical NLP for 8-language drug interaction detection",
                "AI-assisted ICD/CPT coding accuracy enhancement system",
              ].map((p) => (
                <p key={p} className="text-xs text-muted-foreground flex items-start gap-2">
                  <FileText className="h-3 w-3 mt-0.5 shrink-0 text-blue-400" />{p}
                </p>
              ))}
              <div className="bg-muted/30 rounded p-2 text-xs">
                <span className="font-semibold">Patent Budget:</span> $150K Year 1 (5 provisional + 2 full utility patents). $80K/year maintenance thereafter. Use Fish & Richardson or Finnegan (health-tech patent specialists).
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Trademark Protection</h3>
              {[
                "\"MyEval\" wordmark — US, EU, India, Brazil, Thailand, Vietnam, Colombia, Argentina, Bangladesh, Bolivia",
                "\"MyEval.ai\" domain and digital marks — WIPO Madrid Protocol for multi-country filing",
                "Portal names as sub-brands if commercially significant",
                "Logo and visual identity",
              ].map((t) => (
                <p key={t} className="text-xs text-muted-foreground flex items-start gap-2">
                  <Shield className="h-3 w-3 mt-0.5 shrink-0 text-green-400" />{t}
                </p>
              ))}
              <div className="bg-muted/30 rounded p-2 text-xs">
                <span className="font-semibold">Trademark Budget:</span> $25K Year 1 (US + Madrid Protocol for 9 countries, Nice Class 9 + 42 + 44). $8K/year renewals. Use WIPO Madrid Protocol for efficiency.
              </div>
              <Separator />
              <h3 className="text-sm font-semibold">Trade Secrets</h3>
              <p className="text-xs text-muted-foreground">AI model weights, training data pipelines, clinical evaluation algorithms, country-specific risk models, integration adapters. Protected via: NDA for all employees/contractors, restricted access controls, encrypted repositories, non-compete clauses (where enforceable).</p>
              <h3 className="text-sm font-semibold">IP Assignment</h3>
              <p className="text-xs text-muted-foreground">All employees and contractors sign PIIA (Proprietary Information and Invention Assignment) agreements. All work product owned by the company. Independent contractor agreements include work-for-hire provisions. In-country adaptations: some jurisdictions (India, Brazil) have specific IP ownership rules for employees — counsel review required.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exit Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5" />Exit Strategy & Series B Preparation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Series B Timeline</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p><span className="font-medium text-foreground">When:</span> Month 18-22 (Q4 2027 - Q2 2028)</p>
                <p><span className="font-medium text-foreground">Target raise:</span> $80-150M</p>
                <p><span className="font-medium text-foreground">Target valuation:</span> $500M-$800M (8-10x forward ARR)</p>
                <p><span className="font-medium text-foreground">ARR needed:</span> $50-80M run rate</p>
                <p><span className="font-medium text-foreground">Use of proceeds:</span> Accelerate US market, expand to Phase 2 countries (Philippines, Mexico, Kenya, Peru), build proprietary AI models, potential acquisitions</p>
              </div>
              <h3 className="text-sm font-semibold mt-4">Metrics Series B Investors Need</h3>
              {[
                "ARR: $50M+ with 15%+ MoM growth",
                "Net Revenue Retention: >120%",
                "Gross Margin: >75%",
                "LTV:CAC: >10x",
                "Active users: 10M+ across 5+ countries",
                "Enterprise clients: 200+ with <5% churn",
                "Clinical validation: 3+ published studies",
                "Government contracts: 3+ countries",
              ].map((m) => (
                <p key={m} className="text-xs text-muted-foreground">&bull; {m}</p>
              ))}
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Target Series B Investors</h3>
              {[
                { firm: "General Catalyst", why: "Led Livongo ($18.5B exit), active in health-tech" },
                { firm: "Andreessen Horowitz (a16z Bio)", why: "Dedicated health fund, AI-forward thesis" },
                { firm: "GV (Google Ventures)", why: "Health-tech portfolio including Flatiron, Tempus" },
                { firm: "Khosla Ventures", why: "Early health AI investor, international thesis" },
                { firm: "Tiger Global", why: "Growth-stage, international health-tech portfolio" },
                { firm: "Softbank Vision Fund", why: "Health-tech + emerging markets intersection" },
                { firm: "IFC (World Bank)", why: "Development-focused, validates emerging market thesis" },
                { firm: "Temasek", why: "Asia health-tech, sovereign wealth credibility" },
                { firm: "GIC (Singapore)", why: "SE Asia health focus, long-term capital" },
                { firm: "Sequoia Capital India/SEA", why: "India + SE Asia health-tech" },
              ].map((inv) => (
                <div key={inv.firm} className="flex justify-between text-xs bg-muted/20 rounded p-2">
                  <span className="font-medium">{inv.firm}</span>
                  <span className="text-muted-foreground">{inv.why}</span>
                </div>
              ))}
              <Separator />
              <h3 className="text-sm font-semibold">Exit Paths</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p><span className="font-medium text-foreground">Path 1 — IPO (Year 5-7):</span> $1-3B valuation. US listing (NASDAQ). Comparable: Veeva Systems ($40B health-tech SaaS), Health Catalyst ($600M), Phreesia ($1.5B).</p>
                <p><span className="font-medium text-foreground">Path 2 — Strategic Acquisition (Year 3-5):</span> Acquirers: UnitedHealth/Optum ($500B, buys health-tech), Oracle Health (Cerner, $28B acquisition), Philips Healthcare, Siemens Healthineers, or a major insurer entering digital health.</p>
                <p><span className="font-medium text-foreground">Path 3 — Continued Growth (Private):</span> Stay private, raise Series C/D, dominate emerging market health-tech. Comparable: Practo (stayed private at $600M+ valuation for years).</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPIs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">CEO Weekly Dashboard</h3>
              {["MRR and MRR growth rate", "Cash burn rate and runway", "New B2B deals in pipeline", "User growth (all countries)", "Revenue by country", "Customer NPS score", "Critical risk flag status"].map((k) => (
                <p key={k} className="text-xs text-muted-foreground">&bull; {k}</p>
              ))}
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Board Monthly Report</h3>
              {["Revenue vs plan (by stream)", "Cash position and burn", "Headcount vs plan", "Country P&L summary", "Integration milestones", "Regulatory status per country", "Key wins and losses", "Risk register changes"].map((k) => (
                <p key={k} className="text-xs text-muted-foreground">&bull; {k}</p>
              ))}
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Country Manager KPIs</h3>
              {["Local revenue vs target", "B2B pipeline value", "User acquisition (local)", "Integration completion %", "Government relationship progress", "Team hiring vs plan", "NPS from enterprise clients", "Regulatory compliance status"].map((k) => (
                <p key={k} className="text-xs text-muted-foreground">&bull; {k}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
