import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Plug, Shield, Clock, Building2, AlertTriangle } from "lucide-react";
import { integrations, integrationOrder } from "@/lib/data/integrations";

const priorityColors: Record<number, string> = {
  1: "bg-red-500/20 text-red-400 border-red-500/30",
  2: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  3: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};
const priorityLabels: Record<number, string> = { 1: "P1 — Critical", 2: "P2 — High", 3: "P3 — Standard" };
const typeColors: Record<string, string> = {
  "national-id": "bg-purple-500/20 text-purple-400",
  government: "bg-blue-500/20 text-blue-400",
  hospital: "bg-green-500/20 text-green-400",
  insurance: "bg-yellow-500/20 text-yellow-400",
  claims: "bg-orange-500/20 text-orange-400",
  ehr: "bg-cyan-500/20 text-cyan-400",
  surveillance: "bg-red-500/20 text-red-400",
  payments: "bg-pink-500/20 text-pink-400",
};

export default function IntegrationStrategyPage() {
  const countries = [...new Set(integrations.map((i) => i.country))];
  const p1Count = integrations.filter((i) => i.priority === 1).length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">API & Health System Integration Strategy</h1>
        <p className="text-muted-foreground mt-2">
          Becoming embedded infrastructure in each country&apos;s health ecosystem. Every integration below represents a strategic entry point that compounds into market dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Total Integrations" value={`${integrations.length}`} icon={Plug} />
        <MetricCard label="Priority 1 (Critical)" value={`${p1Count}`} icon={AlertTriangle} subtitle="Must complete first" />
        <MetricCard label="Countries" value={`${countries.length}`} icon={Building2} />
        <MetricCard label="Standards" value="HL7/FHIR/REST" icon={Shield} subtitle="+ proprietary per country" />
      </div>

      {/* Integration Sequence */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Integration Deployment Sequence
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {integrationOrder.map((phase, i) => (
            <div key={phase.phase}>
              <div className="flex items-center gap-3 mb-2">
                <Badge className={i === 0 ? "bg-red-500/20 text-red-400" : i === 1 ? "bg-yellow-500/20 text-yellow-400" : i === 2 ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"}>
                  {phase.phase}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 ml-4">
                {phase.items.map((item) => (
                  <Badge key={item} variant="outline" className="text-xs">{item}</Badge>
                ))}
              </div>
              {i < integrationOrder.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>

      <Separator />

      {/* By Country */}
      {countries.map((country) => {
        const countryIntegrations = integrations.filter((i) => i.country === country);
        return (
          <div key={country} className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Plug className="h-5 w-5" />
              {country} — {countryIntegrations.length} Integrations
            </h2>
            <div className="space-y-4">
              {countryIntegrations
                .sort((a, b) => a.priority - b.priority)
                .map((integration) => (
                  <Card key={integration.systemName}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center justify-between">
                        <span>{integration.systemName}</span>
                        <div className="flex gap-2">
                          <Badge className={typeColors[integration.type] || "bg-muted"}>
                            {integration.type}
                          </Badge>
                          <Badge className={priorityColors[integration.priority]}>
                            {priorityLabels[integration.priority]}
                          </Badge>
                        </div>
                      </CardTitle>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Standard: <span className="font-mono text-foreground">{integration.standard}</span></span>
                        <Separator orientation="vertical" className="h-3" />
                        <span>Coverage: {integration.coverage}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Integration Approach</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{integration.integrationApproach}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Business Case</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{integration.businessCase}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Certification Process</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{integration.certificationProcess}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-muted/30 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground">Timeline</p>
                          <p className="text-xs font-medium mt-1">{integration.timeline}</p>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground">Approval Authority</p>
                          <p className="text-xs font-medium mt-1">{integration.approvalAuthority}</p>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground">Technical Requirements</p>
                          <div className="mt-1 space-y-0.5">
                            {integration.technicalRequirements.slice(0, 3).map((req) => (
                              <p key={req} className="text-[10px] text-muted-foreground font-mono">&bull; {req}</p>
                            ))}
                            {integration.technicalRequirements.length > 3 && (
                              <p className="text-[10px] text-muted-foreground">+{integration.technicalRequirements.length - 3} more</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
