import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { MapPinned, Building2, Scale, CreditCard, Users, CalendarDays } from "lucide-react";
import { groundOps } from "@/lib/data/ground-ops";

export default function GroundOperationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">On-the-Ground Operations</h1>
        <p className="text-muted-foreground mt-2">
          Exact operational details for each country — office locations, legal counsel, banking, hiring, and infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Countries" value="8" icon={MapPinned} subtitle="Operational presence" />
        <MetricCard label="Offices" value="8 + US HQ" icon={Building2} subtitle="Co-working → dedicated" />
        <MetricCard label="Legal Firms" value="20+" icon={Scale} subtitle="Across all jurisdictions" />
        <MetricCard label="Hiring Sources" value="30+" icon={Users} subtitle="Job boards + headhunters" />
      </div>

      <Separator />

      {groundOps.map((ops) => (
        <div key={ops.country} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <MapPinned className="h-6 w-6" />
            {ops.country}
          </h2>

          {/* Elevator Pitch */}
          <Card className="border-blue-600/30 bg-blue-600/5">
            <CardContent className="p-4">
              <p className="text-sm font-medium italic">&ldquo;{ops.elevatorPitch}&rdquo;</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {/* Office */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Office Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">City</span>
                  <span className="font-medium">{ops.office.city}</span>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs">{ops.office.neighborhood}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="text-xs">{ops.office.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cost</span>
                  <span className="text-xs font-mono">{ops.office.monthlyCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transition</span>
                  <span className="text-xs">{ops.office.transition}</span>
                </div>
              </CardContent>
            </Card>

            {/* Banking */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Banking & Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground text-xs">Corporate Bank</span>
                  <p className="text-xs font-medium">{ops.banking.bank}</p>
                </div>
                <Separator />
                <div>
                  <span className="text-muted-foreground text-xs">Payment Processing</span>
                  <p className="text-xs font-medium">{ops.banking.paymentProcessor}</p>
                </div>
                <Separator />
                <div>
                  <span className="text-muted-foreground text-xs">Payroll</span>
                  <p className="text-xs font-medium">{ops.banking.payroll}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legal Counsel */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Scale className="h-4 w-4" />
                Local Legal Counsel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ops.legalCounsel.map((firm) => (
                  <div key={firm.firm} className="bg-muted/30 rounded-lg p-3">
                    <p className="text-sm font-semibold">{firm.firm}</p>
                    <p className="text-xs text-muted-foreground mt-1">{firm.specialty}</p>
                    <p className="text-xs font-mono mt-1">{firm.retainer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Hires */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Users className="h-4 w-4" />
                Key Hires & Salary Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {ops.keyHires.map((hire) => (
                  <div key={hire.role} className="flex items-center justify-between text-sm bg-muted/20 rounded-lg p-2">
                    <div>
                      <p className="font-medium text-xs">{hire.role}</p>
                      <p className="text-[10px] text-muted-foreground">Source: {hire.source}</p>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">{hire.salary}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conferences */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Key Conferences & Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {ops.conferences.map((conf) => (
                  <div key={conf.name} className="bg-muted/30 rounded-lg p-3">
                    <p className="text-sm font-semibold">{conf.name}</p>
                    <p className="text-xs text-muted-foreground">{conf.timing} &middot; {conf.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{conf.why}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Separator className="my-6" />
        </div>
      ))}
    </div>
  );
}
