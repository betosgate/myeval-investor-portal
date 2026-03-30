import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Building2, CalendarClock, Users, ArrowRight, Rocket, Crown, Network } from "lucide-react";
import { companyTimeline, roles } from "@/lib/data/org-infrastructure";
import Link from "next/link";

export default function OrgInfrastructurePage() {
  const phaseColors: Record<string, string> = {
    "Phase 0": "bg-red-500/20 text-red-400",
    "Phase 1A": "bg-blue-500/20 text-blue-400",
    "Phase 1B": "bg-blue-500/20 text-blue-400",
    "Phase 1C": "bg-blue-500/20 text-blue-400",
    "Phase 2": "bg-yellow-500/20 text-yellow-400",
    "Phase 3": "bg-green-500/20 text-green-400",
    "Phase 4": "bg-purple-500/20 text-purple-400",
    "Phase 5": "bg-cyan-500/20 text-cyan-400",
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Organizational Infrastructure</h1>
        <p className="text-muted-foreground mt-2">
          How the company builds from Day 1 (April 2026) through official launch (August 2026) and beyond. Every hire, every milestone, every handoff — in sequence.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="Fund Close" value="April 1" subtitle="2026 — Day Zero" icon={Rocket} />
        <MetricCard label="Strategist Phase" value="90 Days" subtitle="April-July 2026" icon={CalendarClock} />
        <MetricCard label="Official Launch" value="August 1" subtitle="2026 — Execs in place" icon={Crown} />
        <MetricCard label="Total Roles Defined" value={`${roles.length}`} subtitle="Full job descriptions" icon={Users} />
      </div>

      {/* Leadership Chain */}
      <Card className="border-blue-600/30 bg-blue-600/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            Leadership Chain — Day 1
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 justify-center">
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-4 text-center w-48">
              <p className="font-bold text-sm">Beto Paredes</p>
              <p className="text-xs text-muted-foreground">CVO — Chief Visionary Officer</p>
              <p className="text-[10px] text-muted-foreground mt-1">Vision, investors, board, external face</p>
            </div>
          </div>
          <div className="flex justify-center">
            <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center w-48">
              <p className="font-bold text-sm">Operations Director</p>
              <p className="text-xs text-muted-foreground">Chief of Staff</p>
              <p className="text-[10px] text-muted-foreground mt-1">Builds the machine. Manages strategists. Hires everyone.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
          </div>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            {["Gov Relations", "Healthcare Partnerships", "Tech Localization", "Market Entry"].map((s) => (
              <div key={s} className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 text-center w-36">
                <p className="font-bold text-xs">Strategist</p>
                <p className="text-[10px] text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-muted-foreground mt-2">
            CVO sets direction. Operations Director executes. Strategists deliver in 90 days.
            <br />By August 1, the Operations Director hands off to CRO + CFO and the executive team runs the company.
          </p>
        </CardContent>
      </Card>

      {/* August Org Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            August 2026 — Executive Org Chart (Post-Launch)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-4 justify-center">
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-3 text-center">
              <p className="font-bold text-xs">Beto Paredes — CVO</p>
            </div>
          </div>
          <div className="flex justify-center"><ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" /></div>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            {[
              { title: "CRO", sub: "Revenue, Sales, Country Managers" },
              { title: "CFO", sub: "Finance, Controller, Analysts" },
              { title: "CCO", sub: "Compliance, Legal, Regulatory" },
              { title: "VP Engineering", sub: "Platform, Integrations, DevOps" },
              { title: "VP Product", sub: "Roadmap, UX, Localization" },
              { title: "Ops Director", sub: "Transitions to COO role" },
            ].map((r) => (
              <div key={r.title} className="bg-muted/30 border border-border rounded-lg p-3 text-center w-36">
                <p className="font-bold text-xs">{r.title}</p>
                <p className="text-[10px] text-muted-foreground">{r.sub}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center"><ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" /></div>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            {[
              { title: "Ambassador Asia", sub: "VN, IN, BD, TH" },
              { title: "Ambassador LatAm", sub: "CO, BR, AR, BO" },
              { title: "VP Marketing", sub: "Brand, SEO, Events" },
              { title: "Head of CS", sub: "Customer Success" },
              { title: "HR Director", sub: "People, Hiring" },
            ].map((r) => (
              <div key={r.title} className="bg-muted/20 border border-border/50 rounded-lg p-2 text-center w-32">
                <p className="font-bold text-[10px]">{r.title}</p>
                <p className="text-[10px] text-muted-foreground">{r.sub}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center"><ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" /></div>
          <div className="flex items-center gap-1 justify-center flex-wrap">
            {["India CM", "Thailand CM", "Colombia CM", "Brazil CM", "Vietnam CM", "Argentina CM", "Bangladesh CM", "Bolivia CM"].map((c) => (
              <Badge key={c} variant="outline" className="text-[10px]">{c}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Phase-by-Phase Timeline */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <CalendarClock className="h-5 w-5" />
          Build Sequence — Phase by Phase
        </h2>
        <p className="text-sm text-muted-foreground">
          <Link href="/dashboard/role-definitions" className="text-blue-400 hover:underline">See full role definitions with job descriptions, KPIs, and communication flows →</Link>
        </p>

        {companyTimeline.map((phase) => (
          <Card key={phase.phase}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <Badge className={phaseColors[phase.phase] || "bg-muted text-muted-foreground"}>
                    {phase.phase}
                  </Badge>
                  {phase.title}
                </span>
                <Badge variant="outline" className="font-mono text-xs">{phase.dates}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{phase.description}</p>
              <p className="text-xs"><span className="font-semibold">Owner:</span> <span className="text-muted-foreground">{phase.ownerRole}</span></p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-green-400 mb-2">Hires This Phase</h4>
                  {phase.hires.map((h) => (
                    <p key={h} className="text-xs text-muted-foreground flex items-start gap-1 mb-1">
                      <Users className="h-3 w-3 mt-0.5 shrink-0 text-green-400" />{h}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue-400 mb-2">Key Milestones</h4>
                  {phase.milestones.map((m) => {
                    const isHighlight = m.includes("BREAK-EVEN") || m.includes("OFFICIAL") || m.includes("first revenue") || m.includes("First revenue");
                    return (
                      <p key={m} className={`text-xs flex items-start gap-1 mb-1 ${isHighlight ? "text-green-400 font-medium" : "text-muted-foreground"}`}>
                        {isHighlight ? <Rocket className="h-3 w-3 mt-0.5 shrink-0" /> : <span className="h-1 w-1 rounded-full bg-muted-foreground mt-1.5 shrink-0" />}
                        {m}
                      </p>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
