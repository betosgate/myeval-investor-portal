import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import Link from "next/link";
import {
  TrendingUp, Globe, Users, DollarSign, Heart, Building2,
  ArrowRight, Landmark, Target, AlertTriangle, Cpu, Shield,
  Plane, Cloud, Factory, Brain, GraduationCap,
} from "lucide-react";
import { macroIndicators, demographics, healthcareDeepDive, aseanComparison } from "@/lib/data/philippines-economy";

const sections = [
  { href: "/philippines-report/macro-economy", title: "Macro Economy", desc: "$480B GDP, 5.8% growth, BBB+ rated, investment-grade. GDP composition, inflation, fiscal position, ASEAN comparison.", icon: TrendingUp, color: "from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-400" },
  { href: "/philippines-report/sectors", title: "Key Economic Sectors", desc: "BPO ($32.5B), OFW remittances ($36.1B), digital economy ($28B), manufacturing, agriculture, tourism, energy, fintech — 10 sectors analyzed.", icon: Factory, color: "from-green-50 to-green-100/50 border-green-200 hover:border-green-400" },
  { href: "/philippines-report/healthcare", title: "Healthcare Deep Dive", desc: "1.2 doctors per 10K. 54% out-of-pocket. 97% mental health treatment gap. BARMM: 11.7x fewer doctors than Manila. 60K workers emigrate annually.", icon: Heart, color: "from-red-50 to-red-100/50 border-red-200 hover:border-red-400" },
  { href: "/philippines-report/digital-economy", title: "Digital Economy", desc: "GCash (94M users), Maya (60M+), BPO (1.7M workers), e-commerce ($22B), 10 hours/day average internet. Digital transformation roadmap.", icon: Cpu, color: "from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-400" },
  { href: "/philippines-report/infrastructure", title: "Infrastructure", desc: "$67M/day lost to Manila traffic. NAIA at 150%. 79km rail for 14M people. $173B Build Better More pipeline. Power costs highest in ASEAN.", icon: Building2, color: "from-yellow-50 to-yellow-100/50 border-yellow-200 hover:border-yellow-400" },
  { href: "/philippines-report/ofw-economy", title: "OFW & Remittances", desc: "10M+ OFWs. $36.1B/year in remittances (9.4% of GDP). The human cost, the economic dependency, and the path to a post-OFW economy.", icon: Plane, color: "from-cyan-50 to-cyan-100/50 border-cyan-200 hover:border-cyan-400" },
  { href: "/philippines-report/challenges", title: "Critical Challenges", desc: "Poverty (BARMM 37.2%), education crisis (PISA 77th/81), corruption (CPI 34/100), housing deficit (6.5M units), digital divide.", icon: AlertTriangle, color: "from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-400" },
  { href: "/philippines-report/brain-drain", title: "Brain Drain Solutions", desc: "60K healthcare workers leave annually. 6 actionable solutions: AI force multiplier, health-tech jobs, OFW family monitoring, telemedicine, TESDA pipeline, return migration.", icon: Users, color: "from-teal-50 to-teal-100/50 border-teal-200 hover:border-teal-400" },
  { href: "/philippines-report/climate-resilience", title: "Climate Resilience", desc: "20 typhoons/year. $2.8B annual damage. 4th most climate-vulnerable nation. Manila sinking 10cm/decade. Climate as national security.", icon: Cloud, color: "from-sky-50 to-sky-100/50 border-sky-200 hover:border-sky-400" },
  { href: "/philippines-report/geopolitics", title: "Geopolitics & Security", desc: "South China Sea tensions. US alliance (EDCA 9 bases). BARMM peace dividend. China economic influence. Friend-shoring gateway.", icon: Globe, color: "from-indigo-50 to-indigo-100/50 border-indigo-200 hover:border-indigo-400" },
  { href: "/philippines-report/transformation-models", title: "Transformation Models", desc: "15+ proven models: Norway SWF, Singapore EDB, South Korea, Rwanda, India Stack, Costa Rica, UAE, Israel, Chile, Taiwan, Vietnam, and more.", icon: Landmark, color: "from-violet-50 to-violet-100/50 border-violet-200 hover:border-violet-400" },
  { href: "/philippines-report/policy-recommendations", title: "Policy Recommendations", desc: "20 specific, actionable policies for the next president. First 100 days → Year 1 → Full term. Healthcare, economy, education, infrastructure, governance.", icon: GraduationCap, color: "from-emerald-50 to-emerald-100/50 border-emerald-200 hover:border-emerald-400" },
  { href: "/philippines-report/investment-opportunities", title: "Investment Opportunities", desc: "Top 10 investable sectors ranked by impact, market gap, and timing. Digital health #1. Total addressable: $50B+ across all opportunities.", icon: Target, color: "from-rose-50 to-rose-100/50 border-rose-200 hover:border-rose-400" },
];

export default function PhilippinesReportHome() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="text-xs bg-blue-100 text-blue-700 border-blue-300">CONFIDENTIAL STRATEGIC BRIEFING</Badge>
          <Badge variant="outline" className="text-xs font-mono">MARCH 2026</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Republic of the Philippines
        </h1>
        <h2 className="text-2xl text-muted-foreground font-light">
          Comprehensive Economic Strategy Report
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          A 14-section analysis of the Philippine economy covering macroeconomic fundamentals, sector performance, critical challenges, healthcare infrastructure, digital transformation, geopolitical positioning, and actionable policy recommendations — prepared for senior government decision-makers.
        </p>
      </div>

      <Separator />

      {/* Key Stats */}
      <div className="grid grid-cols-6 gap-3">
        <MetricCard label="GDP" value="$480B" subtitle="5.8% growth" icon={TrendingUp} />
        <MetricCard label="Population" value="117M" subtitle="Median age 25.7" icon={Users} />
        <MetricCard label="Credit Rating" value="BBB+" subtitle="Investment grade" icon={Shield} />
        <MetricCard label="Remittances" value="$36.1B" subtitle="9.4% of GDP" icon={DollarSign} />
        <MetricCard label="Doctors/10K" value="1.2" subtitle="WHO min: 10" icon={Heart} />
        <MetricCard label="Internet" value="73%" subtitle="85M users" icon={Cpu} />
      </div>

      {/* The Thesis */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">The Central Thesis</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Philippines is a <span className="font-semibold text-foreground">$480 billion economy</span> growing at 5-6% annually with <span className="font-semibold text-foreground">117 million people</span>, the youngest large population in Asia, investment-grade credit ratings, and the strongest BPO workforce in the world. Yet it has <span className="font-semibold text-red-600">1.2 doctors per 10,000 people</span>, <span className="font-semibold text-red-600">PISA scores near the global bottom</span>, and <span className="font-semibold text-red-600">$67 million per day lost to traffic congestion</span>. The gap between economic trajectory and institutional capacity is where the transformation opportunity lives. This report identifies that gap across 14 dimensions and provides the roadmap to close it.
          </p>
        </CardContent>
      </Card>

      {/* Section Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Report Sections</h2>
        <div className="grid grid-cols-2 gap-4">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="group">
              <Card className={`h-full bg-gradient-to-br ${s.color} transition-all duration-300 hover:shadow-md group-hover:scale-[1.01]`}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <s.icon className="h-5 w-5 text-foreground/70 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* ASEAN Quick Compare */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">ASEAN Peer Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left text-muted-foreground">Country</th>
                <th className="py-2 text-right text-muted-foreground">GDP/Cap</th>
                <th className="py-2 text-right text-muted-foreground">Growth</th>
                <th className="py-2 text-right text-muted-foreground">FDI ($B)</th>
                <th className="py-2 text-right text-muted-foreground">Internet</th>
                <th className="py-2 text-right text-muted-foreground">Health $/Cap</th>
                <th className="py-2 text-right text-muted-foreground">HDI</th>
              </tr>
            </thead>
            <tbody>
              {aseanComparison.map((c) => (
                <tr key={c.country} className={`border-b border-border/50 ${c.country === "Philippines" ? "bg-blue-50 font-medium" : ""}`}>
                  <td className="py-1.5">{c.country}</td>
                  <td className="py-1.5 text-right font-mono">${c.gdpPerCapita.toLocaleString()}</td>
                  <td className="py-1.5 text-right font-mono">{c.growth}%</td>
                  <td className="py-1.5 text-right font-mono">${c.fdi}B</td>
                  <td className="py-1.5 text-right font-mono">{c.internet}%</td>
                  <td className="py-1.5 text-right font-mono">${c.healthSpend}</td>
                  <td className="py-1.5 text-right font-mono">{c.hdi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-muted-foreground space-y-2">
        <p>Sources: IMF, World Bank, PSA, BSP, WHO, UNDP, Google/Temasek/Bain, OECD PISA</p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <div>
            <p className="text-muted-foreground">Presented by</p>
            <p className="font-semibold text-foreground">Tom Langland</p>
            <p className="text-[10px]">Global Consultant</p>
          </div>
          <Separator orientation="vertical" className="h-8" />
          <div>
            <p className="text-muted-foreground">Developed by</p>
            <p className="font-semibold text-foreground">Beto Paredes</p>
            <p className="text-[10px]">Chief Visionary Officer</p>
          </div>
        </div>
        <p className="font-mono text-[10px] pt-2">Prepared for qualified officials only &middot; &copy; 2026</p>
      </div>
    </div>
  );
}
