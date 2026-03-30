import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users, MessageSquare, Target, CheckCircle, CalendarClock, ArrowLeft } from "lucide-react";
import { roles } from "@/lib/data/org-infrastructure";
import Link from "next/link";

const phaseLabels: Record<string, { label: string; color: string }> = {
  april: { label: "April 2026", color: "bg-red-500/20 text-red-400" },
  may: { label: "May 2026", color: "bg-blue-500/20 text-blue-400" },
  june: { label: "June 2026", color: "bg-blue-500/20 text-blue-400" },
  july: { label: "July 2026", color: "bg-yellow-500/20 text-yellow-400" },
  august: { label: "August 2026", color: "bg-green-500/20 text-green-400" },
  "sept-dec": { label: "Sep-Dec 2026", color: "bg-purple-500/20 text-purple-400" },
  year2: { label: "Year 2", color: "bg-cyan-500/20 text-cyan-400" },
};

export default function RoleDefinitionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <Link href="/dashboard/org-infrastructure" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4">
          <ArrowLeft className="h-3 w-3" /> Back to Org Infrastructure
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Role Definitions & Communication Flows</h1>
        <p className="text-muted-foreground mt-2">
          Every role in the company — job description, who they report to, who they communicate with, KPIs, and first-week deliverables. This is how {roles.length} roles work together as one machine.
        </p>
      </div>

      {roles.map((role) => {
        const phase = phaseLabels[role.hirePhase] || { label: role.hirePhase, color: "bg-muted" };
        return (
          <Card key={role.id} id={role.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{role.title}</span>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">{role.department}</Badge>
                  <Badge className={phase.color}>{phase.label}</Badge>
                </div>
              </CardTitle>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                <span>Reports to: <span className="text-foreground font-medium">{role.reportsTo}</span></span>
                <Separator orientation="vertical" className="h-3" />
                <span>Location: <span className="text-foreground">{role.location}</span></span>
                <Separator orientation="vertical" className="h-3" />
                <span className="font-mono">{role.salary}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Mission */}
              <div className="bg-blue-600/5 border border-blue-600/20 rounded-lg p-4">
                <h4 className="text-xs font-semibold text-blue-400 mb-1">Mission Statement</h4>
                <p className="text-sm leading-relaxed">{role.missionStatement}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" /> Key Responsibilities
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  {role.keyResponsibilities.map((r) => (
                    <p key={r} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />{r}
                    </p>
                  ))}
                </div>
              </div>

              {/* Communication Flows */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> Communication Flows — Who They Talk To
                </h4>
                <div className="space-y-2">
                  {role.communicatesWith.map((c) => (
                    <div key={c.role} className="flex items-start gap-3 bg-muted/20 rounded-lg p-2">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium">{c.role}</span>
                          <Badge variant="outline" className="text-[10px]">{c.frequency}</Badge>
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{c.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Reports */}
              {role.directReports.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Direct Reports
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {role.directReports.map((dr) => (
                      <Badge key={dr} variant="secondary" className="text-xs">{dr}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* KPIs */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Target className="h-3 w-3" /> KPIs
                </h4>
                <div className="space-y-1">
                  {role.kpis.map((k) => (
                    <p key={k} className="text-xs text-muted-foreground">&bull; {k}</p>
                  ))}
                </div>
              </div>

              {/* First Week & 30-Day */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-3">
                  <h4 className="text-xs font-semibold mb-1 flex items-center gap-1">
                    <CalendarClock className="h-3 w-3" /> First Week Deliverables
                  </h4>
                  {role.firstWeekDeliverables.map((d) => (
                    <p key={d} className="text-xs text-muted-foreground">&bull; {d}</p>
                  ))}
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <h4 className="text-xs font-semibold mb-1 flex items-center gap-1">
                    <CalendarClock className="h-3 w-3" /> First 30-Day Deliverables
                  </h4>
                  {role.first30DayDeliverables.map((d) => (
                    <p key={d} className="text-xs text-muted-foreground">&bull; {d}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
