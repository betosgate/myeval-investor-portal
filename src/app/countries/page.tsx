import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Globe, MapPin, TrendingUp, Users } from "lucide-react";
import { countries, totalYear1Revenue, totalYear2Revenue, totalInvestment } from "@/lib/data/countries";
import { fmt, fmtUsers, fmtPct } from "@/lib/format";

export default function CountriesPage() {
  const asiaCountries = countries.filter((c) => c.region === "asia");
  const latamCountries = countries.filter((c) => c.region === "latam");
  const totalPopulation = countries.reduce((s, c) => s + c.population, 0);
  const totalYear2Users = countries.reduce((s, c) => s + c.targetUsers.year2, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Global Market Strategy</h1>
        <p className="text-muted-foreground mt-2">
          8 countries across Asia and Latin America, representing 2.1 billion people.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="Total Population" value={fmtUsers(totalPopulation)} icon={Users} subtitle="Across 8 markets" />
        <MetricCard label="Total Investment" value={fmt(totalInvestment)} icon={TrendingUp} subtitle="Country allocation" />
        <MetricCard label="Year 1 Revenue" value={fmt(totalYear1Revenue)} icon={TrendingUp} />
        <MetricCard label="Year 2 Revenue" value={fmt(totalYear2Revenue)} icon={TrendingUp} trend="+367% growth" />
      </div>

      <Separator />

      {[
        { label: "Asia Pacific", badge: "ASIA", list: asiaCountries },
        { label: "Latin America", badge: "LATAM", list: latamCountries },
      ].map(({ label, badge, list }) => (
        <div key={badge} className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Badge variant="outline">{badge}</Badge>
            {label}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {list.map((c) => (
              <Link key={c.slug} href={`/countries/${c.slug}`}>
                <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {c.name}
                      </span>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {fmt(c.investmentAllocation)}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {c.entryStrategy.slice(0, 150)}...
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Population</p>
                        <p className="text-sm font-mono font-medium">{fmtUsers(c.population)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Yr 2 Revenue</p>
                        <p className="text-sm font-mono font-medium text-green-400">{fmt(c.revenueProjection.year2)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Yr 2 Users</p>
                        <p className="text-sm font-mono font-medium">{fmtUsers(c.targetUsers.year2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {c.languages.map((l) => (
                        <Badge key={l} variant="outline" className="text-[10px]">{l}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
