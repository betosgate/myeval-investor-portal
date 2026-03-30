import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import {
  Globe,
  DollarSign,
  Users,
  Building2,
  TrendingUp,
  Target,
  Zap,
  Shield,
} from "lucide-react";
import { countries } from "@/lib/data/countries";
import { totalYear1, totalYear2, keyMetrics } from "@/lib/data/financials";
import { fmt, fmtUsers } from "@/lib/format";
import { ExecutiveDashboardCharts } from "./executive-charts";

export default function ExecutiveSummary() {
  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-xs font-mono">
            CONFIDENTIAL
          </Badge>
          <Badge className="text-xs bg-green-600/20 text-green-400 border-green-600/30">
            $50M FUND
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          MyEval.ai Global Expansion
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          AI-Powered Health Intelligence Platform — launching across 8 countries
          and the US commercial market. 1,063 features, 9 specialized portals,
          powered by Anthropic&apos;s Claude AI.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="font-mono">Prepared: March 2026</span>
          <Separator orientation="vertical" className="h-4" />
          <span>24-Month Execution Plan</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Target: 20M users by Year 2</span>
        </div>
      </div>

      <Separator />

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <MetricCard
          label="Total Investment"
          value="$50M"
          subtitle="Operational fund"
          icon={DollarSign}
        />
        <MetricCard
          label="Target Markets"
          value="8 + US"
          subtitle="4 Asia + 4 LatAm + US Commercial"
          icon={Globe}
        />
        <MetricCard
          label="Year 2 Revenue"
          value={fmt(totalYear2)}
          subtitle={`Year 1: ${fmt(totalYear1)}`}
          icon={TrendingUp}
          trend="+362% YoY growth"
        />
        <MetricCard
          label="Year 2 Users"
          value="20M"
          subtitle="420 B2B clients"
          icon={Users}
          trend="From 1.9M at Year 1"
        />
      </div>

      {/* The Opportunity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            The Opportunity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Market Gap</h3>
              <p className="text-sm text-muted-foreground">
                3.5 billion people in our target countries lack access to
                AI-powered health evaluation tools. WebMD serves 75M US users
                with static articles — MyEval.ai delivers{" "}
                <span className="text-foreground font-medium">
                  personalized, AI-driven clinical intelligence
                </span>{" "}
                with risk scoring, drug interactions, and downloadable medical
                reports.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Platform Advantage</h3>
              <p className="text-sm text-muted-foreground">
                9 specialized portals serve every healthcare stakeholder —
                patients, hospitals, insurers, governments, employers,
                researchers, advertisers. This creates a{" "}
                <span className="text-foreground font-medium">
                  multi-sided network effect
                </span>{" "}
                where each portal drives adoption of others. 1,063 features
                already built and documented.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Revenue Engine</h3>
              <p className="text-sm text-muted-foreground">
                9 distinct revenue streams across B2C, B2B, and B2G channels.
                Government contracts provide anchor revenue, consumer
                subscriptions drive volume, and enterprise licensing delivers
                high-margin recurring income. Break-even at{" "}
                <span className="text-foreground font-medium">Month 9</span>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <ExecutiveDashboardCharts />

      {/* Country Portfolio Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Country Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Badge variant="outline" className="text-xs">ASIA</Badge>
                4 Markets
              </h3>
              {countries
                .filter((c) => c.region === "asia")
                .map((c) => (
                  <div key={c.slug} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                    <div>
                      <p className="font-medium text-sm">{c.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Pop: {fmtUsers(c.population)} &middot; GDP/cap: ${c.gdpPerCapita.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono font-medium text-green-400">
                        {fmt(c.revenueProjection.year2)}
                      </p>
                      <p className="text-xs text-muted-foreground">Yr 2 rev</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Badge variant="outline" className="text-xs">LATAM</Badge>
                4 Markets
              </h3>
              {countries
                .filter((c) => c.region === "latam")
                .map((c) => (
                  <div key={c.slug} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                    <div>
                      <p className="font-medium text-sm">{c.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Pop: {fmtUsers(c.population)} &middot; GDP/cap: ${c.gdpPerCapita.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono font-medium text-green-400">
                        {fmt(c.revenueProjection.year2)}
                      </p>
                      <p className="text-xs text-muted-foreground">Yr 2 rev</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Moats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            icon: Zap,
            title: "AI-First Architecture",
            desc: "Claude AI powers 1,063 features across diagnostics, risk scoring, drug interactions, and screening recommendations.",
          },
          {
            icon: Shield,
            title: "Compliance Built-In",
            desc: "HIPAA, LGPD, PDPA, DPDPA compliant. SOC 2 Type II certified. 256-bit encryption end-to-end.",
          },
          {
            icon: Building2,
            title: "9-Portal Ecosystem",
            desc: "Every healthcare stakeholder served — patients to governments. Multi-sided network effect creates lock-in.",
          },
          {
            icon: Globe,
            title: "8 Languages Ready",
            desc: "English, Spanish, Portuguese, Vietnamese, Hindi, Bengali, Thai, Russian — built into the platform today.",
          },
        ].map((item) => (
          <Card key={item.title}>
            <CardContent className="p-5 space-y-2">
              <item.icon className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment Thesis */}
      <Card className="border-green-600/30 bg-green-600/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-green-600/20 flex items-center justify-center shrink-0">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold">Investment Thesis</h3>
              <p className="text-sm text-muted-foreground mt-1">
                $50M funds a 24-month execution plan that takes a proven,
                1,063-feature health intelligence platform into 8 high-growth
                markets serving 2.1 billion people, while simultaneously
                launching as the first AI-native WebMD alternative in the US.
                Projected Year 2 revenue of{" "}
                <span className="text-green-400 font-mono font-medium">
                  {fmt(totalYear2)}
                </span>{" "}
                across 9 revenue streams with{" "}
                <span className="text-green-400 font-mono font-medium">81%</span>{" "}
                gross margins and a{" "}
                <span className="text-green-400 font-mono font-medium">
                  17.8x
                </span>{" "}
                LTV:CAC ratio. Cash-flow positive by Month 9. Cumulative fund
                value projected at{" "}
                <span className="text-green-400 font-mono font-medium">
                  $97.7M
                </span>{" "}
                by Month 24.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
