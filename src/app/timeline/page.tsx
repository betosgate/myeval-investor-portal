import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarClock, Rocket, Flag, Target, TrendingUp } from "lucide-react";
import { TimelineCharts } from "./timeline-charts";

const phases = [
  {
    name: "Phase 1: Foundation",
    period: "Months 1-3 (Apr-Jun 2026)",
    color: "bg-blue-500",
    milestones: [
      "4 strategists begin 90-day engagement",
      "Company registrations filed in India, Brazil, Colombia, Thailand",
      "ABDM certification application (India)",
      "BRAC partnership discussions (Bangladesh)",
      "EPS Sura and Hapvida partnership negotiations",
      "US HQ team hiring — 18 core staff onboarded",
      "Platform localization QA for Vietnamese, Hindi, Bengali, Thai",
      "BOI application filed (Thailand)",
      "Legal entity setup: SAS (Colombia), LTDA (Brazil), SAS (Argentina)",
      "Bogota regional office scouting",
    ],
  },
  {
    name: "Phase 2: Launch",
    period: "Months 4-6 (Jul-Sep 2026)",
    color: "bg-yellow-500",
    milestones: [
      "First pilots go live: Thailand (Bumrungrad), Colombia (EPS Sura), India (Apollo)",
      "Brazil: Hapvida payer portal pilot with 2M members",
      "Bangladesh: BRAC health center pilot (500 centers)",
      "Vietnam: MOH pilot in HCMC, Hanoi, Da Nang",
      "Argentina: OSDE/Swiss Medical partnership signed",
      "Bolivia: PAHO co-funding agreement",
      "In-country teams hired: 16 staff across 4 countries",
      "90-day strategists complete and transition",
      "FIRST REVENUE: Month 4 (Thailand, Colombia)",
      "BREAK-EVEN: Month 9 projected",
    ],
  },
  {
    name: "Phase 3: Growth",
    period: "Months 7-12 (Oct 2026 - Mar 2027)",
    color: "bg-green-500",
    milestones: [
      "Scale to 40 in-country staff across 8 markets",
      "India: Expand to 15 states via ABDM integration",
      "Brazil: 5 health plans live, SUS state pilot (São Paulo)",
      "Consumer app launched in all 8 countries",
      "US WebMD alternative beta launch — 100K users",
      "Government contracts signed: Vietnam MOH, Colombia MinSalud",
      "Year 1 total: $21M revenue, 1.9M users, 110 B2B clients",
      "Employer wellness activated in India, Brazil, Bangladesh",
      "API partner program launched — 10+ integration partners",
      "Advertiser portal live with first pharma campaigns",
    ],
  },
  {
    name: "Phase 4: Scale",
    period: "Months 13-18 (Apr-Sep 2027)",
    color: "bg-purple-500",
    milestones: [
      "India: 5M+ users, ABDM becomes primary growth channel",
      "Brazil: Largest digital health platform in LatAm by coverage",
      "US: Full commercial launch — SEO, employer channels, insurance partnerships",
      "Total headcount reaches 117 globally",
      "Monthly revenue exceeds $5M",
      "Academic portal launched — 20+ medical school partnerships",
      "Bolivia: Full national deployment with PAHO support",
      "Thailand: NHSO analytics integration complete",
      "Affiliate program active — 500+ referral partners",
    ],
  },
  {
    name: "Phase 5: Dominance",
    period: "Months 19-24 (Oct 2027 - Mar 2028)",
    color: "bg-red-500",
    milestones: [
      "20M total users across all markets",
      "420 B2B clients (hospitals, insurers, employers, gov agencies)",
      "Monthly revenue: $11M (Month 24)",
      "Cumulative fund value: $97.7M",
      "US market: 2M users, recognized WebMD alternative",
      "152 global employees across 9 jurisdictions",
      "Series B readiness — 10x+ revenue multiple valuation",
      "Platform processing 50M+ health evaluations annually",
      "Data moats established in all 8 countries",
      "Preparing for Phase 2 countries: Philippines, Mexico, Peru, Kenya",
    ],
  },
];

export default function TimelinePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Launch Timeline</h1>
        <p className="text-muted-foreground mt-2">
          24-month execution plan from strategist phase to market dominance.
        </p>
      </div>

      <TimelineCharts />

      <Separator />

      <div className="space-y-6">
        {phases.map((phase, i) => (
          <Card key={phase.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${phase.color}`} />
                <span>{phase.name}</span>
                <Badge variant="outline" className="font-mono text-xs ml-auto">
                  {phase.period}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {phase.milestones.map((m) => {
                  const isHighlight = m.includes("REVENUE") || m.includes("BREAK-EVEN") || m.includes("$97.7M") || m.includes("20M total");
                  return (
                    <p
                      key={m}
                      className={`text-sm flex items-start gap-2 ${
                        isHighlight
                          ? "text-green-400 font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {isHighlight ? (
                        <Rocket className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                      )}
                      {m}
                    </p>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
