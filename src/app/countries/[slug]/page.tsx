import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import {
  ArrowLeft,
  Building2,
  DollarSign,
  Globe,
  Scale,
  Shield,
  Target,
  TrendingUp,
  Users,
  AlertTriangle,
  CalendarClock,
  Briefcase,
} from "lucide-react";
import { countries, getCountry } from "@/lib/data/countries";
import { fmt, fmtUsers, fmtPct } from "@/lib/format";
import { CountryCharts } from "./country-charts";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  const totalStaff = Object.values(country.staffing).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/countries"
          className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
        >
          <ArrowLeft className="h-3 w-3" /> Back to Markets
        </Link>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-xs">
            {country.region.toUpperCase()}
          </Badge>
          {country.languages.map((l) => (
            <Badge key={l} variant="secondary" className="text-xs">{l}</Badge>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight mt-2">{country.name}</h1>
        <p className="text-muted-foreground mt-1">{country.healthSystem}</p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-5 gap-4">
        <MetricCard label="Population" value={fmtUsers(country.population)} icon={Users} />
        <MetricCard label="GDP/Capita" value={`$${country.gdpPerCapita.toLocaleString()}`} icon={DollarSign} />
        <MetricCard label="Health Spend/Cap" value={`$${country.healthSpendPerCapita}`} icon={TrendingUp} />
        <MetricCard label="Internet" value={fmtPct(country.internetPenetration)} icon={Globe} />
        <MetricCard label="Smartphones" value={fmtPct(country.smartphonePenetration)} icon={Globe} />
      </div>

      {/* Entry Strategy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Entry Strategy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {country.entryStrategy}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Revenue & Investment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <DollarSign className="h-4 w-4" />
              Revenue & Investment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">Investment</p>
                <p className="text-xl font-mono font-bold">{fmt(country.investmentAllocation)}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">Market Size</p>
                <p className="text-xl font-mono font-bold">{fmt(country.marketSizeEstimate)}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">Year 1 Revenue</p>
                <p className="text-xl font-mono font-bold text-blue-400">{fmt(country.revenueProjection.year1)}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">Year 2 Revenue</p>
                <p className="text-xl font-mono font-bold text-green-400">{fmt(country.revenueProjection.year2)}</p>
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-semibold mb-2">Pricing Model</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Consumer (Advanced)</span>
                  <span className="font-mono">${country.pricingModel.consumer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Newsletter/mo</span>
                  <span className="font-mono">${country.pricingModel.newsletter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Enterprise</span>
                  <span className="font-mono text-xs">{country.pricingModel.enterprise}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Government</span>
                  <span className="font-mono text-xs">{country.pricingModel.government}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Partners */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Building2 className="h-4 w-4" />
              Key Partners & Agencies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Government Agencies</h4>
              <div className="space-y-1">
                {country.keyAgencies.map((a) => (
                  <p key={a} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                    {a}
                  </p>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-semibold mb-2">Target Partners</h4>
              <div className="space-y-1">
                {country.majorPartners.map((p) => (
                  <p key={p} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <CountryCharts country={country} />

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CalendarClock className="h-4 w-4" />
            Execution Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { label: "Phase 1", value: country.timeline.phase1, color: "bg-blue-400" },
            { label: "Phase 2", value: country.timeline.phase2, color: "bg-yellow-400" },
            { label: "Phase 3", value: country.timeline.phase3, color: "bg-green-400" },
          ].map((phase) => (
            <div key={phase.label} className="flex items-start gap-3">
              <div className={`h-2 w-2 rounded-full ${phase.color} mt-1.5 shrink-0`} />
              <div>
                <p className="text-sm font-medium">{phase.label}</p>
                <p className="text-xs text-muted-foreground">{phase.value}</p>
              </div>
            </div>
          ))}
          <Separator />
          <p className="text-sm">
            <span className="text-muted-foreground">First Revenue: </span>
            <span className="font-medium text-green-400">{country.timeline.firstRevenue}</span>
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        {/* Regulatory */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Scale className="h-4 w-4" />
              Regulatory Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {country.regulatoryRequirements.map((r) => (
                <p key={r} className="text-xs text-muted-foreground flex items-start gap-2">
                  <Shield className="h-3 w-3 mt-0.5 shrink-0 text-blue-400" />
                  {r}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Competition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Briefcase className="h-4 w-4" />
              Competitive Landscape
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {country.competitiveLandscape.map((c) => (
                <p key={c} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                  {c}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4" />
              Key Risks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {country.keyRisks.map((r) => (
                <p key={r} className="text-xs text-muted-foreground flex items-start gap-2">
                  <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-yellow-500" />
                  {r}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Staffing & B2B Targets */}
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Users className="h-4 w-4" />
              In-Country Team ({totalStaff} people)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(country.staffing).map(([role, count]) => (
                <div key={role} className="flex justify-between text-sm">
                  <span className="text-muted-foreground capitalize">
                    {role.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="font-mono">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Target className="h-4 w-4" />
              B2B Targets (Year 2)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(country.b2bTargets).map(([type, count]) => (
                <div key={type} className="flex justify-between text-sm">
                  <span className="text-muted-foreground capitalize">{type}</span>
                  <span className="font-mono">{count}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Yr 1 Users</span>
                <span className="font-mono">{fmtUsers(country.targetUsers.year1)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Yr 2 Users</span>
                <span className="font-mono font-medium text-green-400">{fmtUsers(country.targetUsers.year2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
