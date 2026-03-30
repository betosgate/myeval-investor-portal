import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Users, Plane, Briefcase, Building2, GraduationCap } from "lucide-react";
import {
  centralOffice,
  strategists,
  travelDirectors,
  headcountTimeline,
  medicalAdvisoryBoard,
} from "@/lib/data/staffing";
import { StaffingCharts } from "./staffing-charts";

export default function StaffingPage() {
  const totalCentralRoles = centralOffice.reduce((s, r) => s + r.count, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team & Staffing Plan</h1>
        <p className="text-muted-foreground mt-2">
          Complete organizational structure from 4 strategists to 152-person global operation.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="US HQ Staff" value={`${totalCentralRoles}`} icon={Building2} subtitle="Central office roles" />
        <MetricCard label="Strategists" value="4" icon={Briefcase} subtitle="90-day engagement" />
        <MetricCard label="Travel Directors" value="2" icon={Plane} subtitle="Asia + LatAm" />
        <MetricCard label="Month 24 Total" value="152" icon={Users} subtitle="Global headcount" />
      </div>

      <StaffingCharts />

      {/* 4 Strategists */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          90-Day Strategists
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {strategists.map((s) => (
            <Card key={s.title}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{s.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{s.focus}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "30-Day Deliverables", items: s.deliverables30, color: "bg-blue-400" },
                  { label: "60-Day Deliverables", items: s.deliverables60, color: "bg-yellow-400" },
                  { label: "90-Day Deliverables", items: s.deliverables90, color: "bg-green-400" },
                ].map((phase) => (
                  <div key={phase.label}>
                    <h4 className="text-xs font-semibold flex items-center gap-2 mb-1">
                      <span className={`h-2 w-2 rounded-full ${phase.color}`} />
                      {phase.label}
                    </h4>
                    <div className="space-y-1 ml-4">
                      {phase.items.map((item) => (
                        <p key={item} className="text-xs text-muted-foreground">
                          &bull; {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Compensation</span>
                  <span className="font-mono">{s.compensation}</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Transition: </span>
                    {s.transitionPlan}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Travel Directors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Plane className="h-5 w-5" />
          International Directors (Traveling)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {travelDirectors.map((d) => (
            <Card key={d.title}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{d.title}</CardTitle>
                <div className="flex gap-1 mt-1">
                  {d.countries.map((c) => (
                    <Badge key={c} variant="outline" className="text-xs">{c}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold mb-1">Required Skills</h4>
                  <div className="space-y-1">
                    {d.skills.map((s) => (
                      <p key={s} className="text-xs text-muted-foreground">&bull; {s}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold mb-1">Travel Schedule</h4>
                  <p className="text-xs text-muted-foreground">{d.travelSchedule}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold mb-1">KPIs</h4>
                  <div className="space-y-1">
                    {d.kpis.map((k) => (
                      <p key={k} className="text-xs text-muted-foreground">&bull; {k}</p>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-xs bg-muted/50 rounded-lg p-2">
                  <span className="text-muted-foreground">Annual Travel Budget</span>
                  <span className="font-mono font-medium">${d.annualBudget.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Central Office Org */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Central Office Team ({totalCentralRoles} roles)
        </h2>
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left text-muted-foreground font-medium text-xs">Role</th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-medium text-xs">Department</th>
                  <th className="py-3 px-4 text-left text-muted-foreground font-medium text-xs">Location</th>
                  <th className="py-3 px-4 text-right text-muted-foreground font-medium text-xs">Count</th>
                  <th className="py-3 px-4 text-right text-muted-foreground font-medium text-xs">Salary Range</th>
                  <th className="py-3 px-4 text-right text-muted-foreground font-medium text-xs">Hire Month</th>
                </tr>
              </thead>
              <tbody>
                {centralOffice.map((role) => (
                  <tr key={role.title} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-2 px-4 text-xs font-medium">{role.title}</td>
                    <td className="py-2 px-4 text-xs text-muted-foreground">{role.department}</td>
                    <td className="py-2 px-4 text-xs text-muted-foreground">{role.location}</td>
                    <td className="py-2 px-4 text-xs text-right font-mono">{role.count}</td>
                    <td className="py-2 px-4 text-xs text-right font-mono">{role.salaryRange}</td>
                    <td className="py-2 px-4 text-xs text-right font-mono">M{role.hireMonth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Medical Advisory Board */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Medical Advisory Board
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {medicalAdvisoryBoard.map((m) => (
            <Card key={m.role}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{m.role}</p>
                  <p className="text-xs text-muted-foreground">{m.purpose}</p>
                </div>
                <Badge variant="outline" className="font-mono text-xs">{m.compensation}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
