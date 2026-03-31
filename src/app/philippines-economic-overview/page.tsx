import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import {
  TrendingUp, Globe, Users, DollarSign, Heart, Building2,
  GraduationCap, Shield, Zap, AlertTriangle, Target, Scale,
  Landmark, Ship, Cloud, Cpu, Wheat, Plane, Factory,
  CheckCircle, ArrowRight, Brain,
} from "lucide-react";
import {
  gdpTimeline, gdpBySector, macroIndicators, demographics,
  keySectors, challenges, healthcareDeepDive, aseanComparison,
  investmentOpportunities,
} from "@/lib/data/philippines-economy";
import { PhilippinesCharts } from "./charts";
import { fmt, fmtNum } from "@/lib/format";

export default function PhilippinesEconomicOverview() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="text-xs bg-blue-600/20 text-blue-700 border-blue-600/30">INDEPENDENT ECONOMIC RESEARCH</Badge>
          <Badge variant="outline" className="text-xs font-mono">CONFIDENTIAL</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Philippines Economic Overview
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          A comprehensive economic briefing for investors — macroeconomic fundamentals, sector analysis,
          critical challenges, healthcare deep dive, geopolitical landscape, ASEAN benchmarking, and the
          top 10 investable opportunities in a $480B economy serving 117 million people.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
          <span>Prepared: March 2026</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Sources: IMF, World Bank, PSA, BSP, WHO, UNDP</span>
        </div>
      </div>

      <Separator />

      {/* Macro Indicators */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="h-6 w-6" /> Macroeconomic Snapshot
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {macroIndicators.slice(0, 5).map((m) => (
            <MetricCard key={m.indicator} label={m.indicator} value={m.value} subtitle={m.detail} icon={DollarSign} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {macroIndicators.slice(5).map((m) => (
            <MetricCard key={m.indicator} label={m.indicator} value={m.value} subtitle={m.detail} icon={TrendingUp} />
          ))}
        </div>
      </div>

      {/* Charts */}
      <PhilippinesCharts />

      {/* GDP by Sector */}
      <Card>
        <CardHeader>
          <CardTitle>GDP Composition by Sector</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {gdpBySector.map((s) => (
              <div key={s.sector} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{s.sector}</span>
                  <span className="font-mono font-bold">{s.pct}%</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
                <p className="text-xs text-muted-foreground">{s.details}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Demographics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" /> Demographics — A Young, Digital Nation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold mb-3">Age Distribution</h4>
              {demographics.ageGroups.map((g) => (
                <div key={g.group} className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">{g.group}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${g.pct * 2.7}%` }} />
                    </div>
                    <span className="font-mono w-12 text-right">{g.pct}%</span>
                    <span className="text-xs text-muted-foreground w-16 text-right">{g.millions.toFixed(1)}M</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground mt-3">
                Median age <span className="font-mono font-medium">{demographics.medianAge}</span> — one of the youngest populations in Asia.
                49.3% under 25 years old. This is a workforce and consumer base that will grow for decades.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Island Groups — Economic Split</h4>
              {demographics.islandGroups.map((g) => (
                <div key={g.region} className="bg-muted/30 rounded-lg p-3 mb-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{g.region}</span>
                    <Badge variant="outline" className="font-mono text-xs">{g.pctGdp}% of GDP</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Population: {(g.population / 1_000_000).toFixed(1)}M
                  </p>
                </div>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
                <div className="bg-muted/20 rounded p-2 text-center">
                  <p className="text-lg font-mono font-bold">{demographics.urbanization}%</p>
                  <p className="text-[10px] text-muted-foreground">Urban</p>
                </div>
                <div className="bg-muted/20 rounded p-2 text-center">
                  <p className="text-lg font-mono font-bold">{demographics.literacyRate}%</p>
                  <p className="text-[10px] text-muted-foreground">Literacy</p>
                </div>
                <div className="bg-muted/20 rounded p-2 text-center">
                  <p className="text-lg font-mono font-bold">{demographics.middleClassPct}%</p>
                  <p className="text-[10px] text-muted-foreground">Middle Class</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Key Sectors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Factory className="h-6 w-6" /> Key Economic Sectors
        </h2>
        {keySectors.map((sector) => (
          <Card key={sector.name}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>{sector.name}</span>
                <div className="flex gap-2">
                  <Badge variant="outline" className="font-mono text-xs">{sector.size}</Badge>
                  <Badge className="bg-primary/20 text-primary text-xs">Impact: {sector.impactScore}/10</Badge>
                </div>
              </CardTitle>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>Employment: {sector.employment}</span>
                <span>Growth: {sector.growth}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-red-600 mb-1">Challenges</h4>
                  {sector.challenges.map((c) => (
                    <p key={c} className="text-xs text-muted-foreground flex items-start gap-1 mb-1">
                      <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-red-500" />{c}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-green-700 mb-1">Opportunities</h4>
                  {sector.opportunities.map((o) => (
                    <p key={o} className="text-xs text-muted-foreground flex items-start gap-1 mb-1">
                      <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-green-600" />{o}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {sector.keyPlayers.map((p) => (
                  <Badge key={p} variant="secondary" className="text-[10px]">{p}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Critical Challenges */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <AlertTriangle className="h-6 w-6" /> Critical National Challenges
        </h2>
        {challenges.map((ch) => (
          <Card key={ch.name} className={ch.severity === "Critical" ? "border-red-300 bg-red-50/30" : ""}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>{ch.name}</span>
                <Badge className={ch.severity === "Critical" ? "bg-red-100 text-red-700" : ch.severity === "High" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-700"}>
                  {ch.severity}
                </Badge>
              </CardTitle>
              <p className="text-xs font-mono text-muted-foreground">{ch.metric}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{ch.detail}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-green-700 mb-1">Current Solutions & What&apos;s Needed</h4>
                <p className="text-xs text-muted-foreground">{ch.solutions}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Healthcare Deep Dive */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Heart className="h-6 w-6" /> Healthcare Sector — Deep Dive
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <MetricCard label="Market Size" value={fmt(healthcareDeepDive.totalMarketSize)} icon={DollarSign} subtitle={`${healthcareDeepDive.outOfPocketPct}% out-of-pocket`} />
          <MetricCard label="Doctors per 10K" value={healthcareDeepDive.physiciansPerK.toString()} icon={Heart} subtitle="WHO min: 10 per 10K" />
          <MetricCard label="Maternal Mortality" value={`${healthcareDeepDive.maternalMortality}/100K`} icon={Heart} subtitle="High for ASEAN" />
          <MetricCard label="Worker Emigration" value={`${(healthcareDeepDive.workerEmigration.annualDepartures / 1000).toFixed(0)}K/year`} icon={Plane} subtitle="Nurses & doctors leaving" />
        </div>

        {/* Top Causes of Death */}
        <Card>
          <CardHeader><CardTitle className="text-base">Top 10 Causes of Death</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-2">
              {healthcareDeepDive.topCauses.map((c) => (
                <div key={c.cause} className="flex items-center gap-3">
                  <span className="text-sm w-48 shrink-0">{c.cause}</span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 rounded-full" style={{ width: `${c.pctTotal * 5.5}%` }} />
                  </div>
                  <span className="font-mono text-xs w-20 text-right">{fmtNum(c.deaths)} deaths</span>
                  <span className="font-mono text-xs text-muted-foreground w-12 text-right">{c.pctTotal}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regional Disparities */}
        <Card>
          <CardHeader><CardTitle className="text-base">Healthcare Regional Disparities — The Urban-Rural Chasm</CardTitle></CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left text-xs text-muted-foreground font-medium">Region</th>
                  <th className="py-2 text-right text-xs text-muted-foreground font-medium">Physicians/10K</th>
                  <th className="py-2 text-right text-xs text-muted-foreground font-medium">Beds/10K</th>
                  <th className="py-2 text-right text-xs text-muted-foreground font-medium">Poverty Rate</th>
                  <th className="py-2 text-right text-xs text-muted-foreground font-medium">Gap vs NCR</th>
                </tr>
              </thead>
              <tbody>
                {healthcareDeepDive.regionalDisparities.map((r) => (
                  <tr key={r.region} className="border-b border-border/50">
                    <td className="py-2 font-medium text-xs">{r.region}</td>
                    <td className="py-2 text-right font-mono text-xs">{r.physPer10K}</td>
                    <td className="py-2 text-right font-mono text-xs">{r.bedsPer10K}</td>
                    <td className="py-2 text-right font-mono text-xs">{r.povertyPct}%</td>
                    <td className="py-2 text-right font-mono text-xs text-red-600">
                      {r.region === "NCR (Metro Manila)" ? "—" : `${((3.5 / r.physPer10K)).toFixed(1)}x fewer doctors`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-3">
              BARMM (Bangsamoro) has <span className="font-semibold text-red-600">11.7x fewer doctors</span> than Metro Manila and <span className="font-semibold text-red-600">6x fewer hospital beds</span>. This is where AI-powered health screening can have the most transformative impact — extending specialist-level evaluation to populations that have never had access.
            </p>
          </CardContent>
        </Card>

        {/* Mental Health */}
        <Card className="border-purple-200 bg-purple-50/30">
          <CardHeader><CardTitle className="text-base flex items-center gap-2"><Brain className="h-4 w-4" /> Mental Health Crisis</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-3 text-center border">
              <p className="text-2xl font-mono font-bold">{healthcareDeepDive.mentalHealth.psychiatrists}</p>
              <p className="text-xs text-muted-foreground">Total psychiatrists in PH</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border">
              <p className="text-2xl font-mono font-bold">{healthcareDeepDive.mentalHealth.ratio}</p>
              <p className="text-xs text-muted-foreground">Psychiatrist ratio</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border">
              <p className="text-2xl font-mono font-bold">{healthcareDeepDive.mentalHealth.treatmentGap}</p>
              <p className="text-xs text-muted-foreground">Treatment gap</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border">
              <p className="text-2xl font-mono font-bold">{(healthcareDeepDive.mentalHealth.affectedPopulation / 1_000_000).toFixed(1)}M</p>
              <p className="text-xs text-muted-foreground">Filipinos affected</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Geopolitical Landscape */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Globe className="h-6 w-6" /> Geopolitical Landscape & Strategic Position
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" /> US-Philippines Alliance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>The Philippines is the United States&apos; oldest treaty ally in Asia (Mutual Defense Treaty, 1951). The Enhanced Defense Cooperation Agreement (EDCA) provides US military access to 9 Philippine bases. Bilateral trade exceeds $25B annually.</p>
              <p className="font-medium text-foreground">Implication for US investors: The alliance creates a preferential environment for American technology companies. USAID programs ($200M+/year) actively support US health-tech deployment. The 4M+ Filipino-American diaspora provides a natural business bridge.</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Ship className="h-4 w-4 text-red-600" /> South China Sea Tensions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Ongoing territorial disputes with China in the West Philippine Sea (South China Sea) have intensified since 2023 — water cannon incidents at Second Thomas Shoal, fishing vessel confrontations, and airspace tensions. The 2016 Hague Tribunal ruling (in Philippines&apos; favor) is not enforced by China.</p>
              <p className="font-medium text-foreground">Implication: Creates uncertainty for energy exploration ($5.7B potential gas reserves in Reed Bank) and affects fishing communities (300K+ fishermen). However, the US alliance strengthens the Philippines as an alternative to China-dependent supply chains. &ldquo;Friend-shoring&rdquo; favors Philippine investment.</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Landmark className="h-4 w-4 text-green-600" /> BARMM & the Peace Dividend
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>The Bangsamoro Autonomous Region in Muslim Mindanao (BARMM) was created in 2019 after decades of armed conflict. The transition government is building institutions from scratch. BARMM has the Philippines&apos; worst development indicators: 37.2% poverty, 0.3 doctors per 10K, life expectancy 8 years below national average.</p>
              <p className="font-medium text-foreground">Implication: Massive development investment is flowing into BARMM ($1.5B+ from national government + international donors). Health technology investment in BARMM is peace-building — healthier populations reduce grievance that fuels conflict. This is where AI health screening has the highest humanitarian impact per dollar.</p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Cloud className="h-4 w-4 text-yellow-600" /> Climate as National Security
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>The Philippines faces an average of 20 typhoons annually (Typhoon Haiyan killed 6,300 in 2013). Climate damage averages $2.8B/year and is accelerating. Manila Bay is sinking at 10cm/decade. Agricultural losses threaten food security for 117M people. The Philippines is the 4th most climate-vulnerable nation (Germanwatch).</p>
              <p className="font-medium text-foreground">Implication: Climate resilience IS national security. Health infrastructure must be disaster-resilient. Digital health platforms that work during typhoons (offline-capable, mobile-based) are critical infrastructure. AI-powered disease surveillance catches post-typhoon outbreaks early. This is an investment thesis unto itself.</p>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Positioning */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">How Technology Investment Creates Geopolitical Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Health Diplomacy", desc: "Deploying AI health platforms builds US soft power. When 20M Filipinos use American health technology daily, it deepens the alliance more than any military exercise. Health is the most trusted form of international engagement." },
                { title: "BARMM Peace-Building", desc: "Health investment in Bangsamoro directly supports the peace dividend. When former conflict zones get world-class AI health screening, it demonstrates that peace delivers tangible improvements. This reduces recruitment for extremist groups." },
                { title: "Friend-Shoring Gateway", desc: "As companies diversify away from China dependence, the Philippines is positioned as a trusted US-allied alternative. American health-tech in the Philippines signals commitment to the alliance and creates a replicable model for other US-allied ASEAN markets." },
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* ASEAN Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5" /> ASEAN Peer Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left text-xs text-muted-foreground">Country</th>
                <th className="py-2 text-right text-xs text-muted-foreground">GDP/Capita</th>
                <th className="py-2 text-right text-xs text-muted-foreground">Growth %</th>
                <th className="py-2 text-right text-xs text-muted-foreground">FDI ($B)</th>
                <th className="py-2 text-right text-xs text-muted-foreground">Internet %</th>
                <th className="py-2 text-right text-xs text-muted-foreground">Health $/Cap</th>
                <th className="py-2 text-right text-xs text-muted-foreground">HDI</th>
                <th className="py-2 text-right text-xs text-muted-foreground">CPI Score</th>
              </tr>
            </thead>
            <tbody>
              {aseanComparison.map((c) => (
                <tr key={c.country} className={`border-b border-border/50 ${c.country === "Philippines" ? "bg-primary/5 font-medium" : ""}`}>
                  <td className="py-2 text-xs">{c.country}</td>
                  <td className="py-2 text-right font-mono text-xs">${fmtNum(c.gdpPerCapita)}</td>
                  <td className="py-2 text-right font-mono text-xs">{c.growth}%</td>
                  <td className="py-2 text-right font-mono text-xs">${c.fdi}B</td>
                  <td className="py-2 text-right font-mono text-xs">{c.internet}%</td>
                  <td className="py-2 text-right font-mono text-xs">${c.healthSpend}</td>
                  <td className="py-2 text-right font-mono text-xs">{c.hdi}</td>
                  <td className="py-2 text-right font-mono text-xs">{c.corruption}/100</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-3">
            Philippines leads ASEAN in GDP growth rate (5.8%) and has the youngest population (median 25.7 years). It trails in FDI attraction, healthcare spending, and corruption perception. The growth-vs-governance gap is the core investment thesis: high potential held back by solvable structural challenges.
          </p>
        </CardContent>
      </Card>

      <Separator />

      {/* Top 10 Investment Opportunities */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Target className="h-6 w-6" /> Top 10 Investable Opportunities
        </h2>
        <p className="text-sm text-muted-foreground">Ranked by impact potential, market gap, and timing advantage.</p>

        {investmentOpportunities.map((opp) => (
          <Card key={opp.rank} className={opp.rank === 1 ? "border-primary bg-primary/5" : ""}>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary font-mono">#{opp.rank}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold">{opp.sector}</h3>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="font-mono text-xs">{opp.marketSize}</Badge>
                      <Badge className="bg-green-100 text-green-800 text-xs">Growth: {opp.growth}</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <h4 className="text-xs font-semibold text-red-600 mb-1">The Gap</h4>
                      <p className="text-xs text-muted-foreground">{opp.gap}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-green-700 mb-1">Why Now</h4>
                      <p className="text-xs text-muted-foreground">{opp.whyNow}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Navigating the 60/40 Ownership Rule */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Scale className="h-6 w-6" /> Navigating Philippine Business Regulations
        </h2>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="text-base">The 60/40 Foreign Ownership Rule — How to Navigate It</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The 1987 Philippine Constitution restricts foreign ownership to 40% in certain sectors (utilities, media, land, natural resources, education). However, several legal pathways exist for 100% foreign-owned technology companies:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { path: "IT Services Exemption", desc: "The Foreign Investments Act (RA 7042, amended by RA 11647 in 2022) explicitly allows 100% foreign ownership in IT and software services. Digital health platforms are classified as IT services, NOT healthcare facilities. This is the primary path.", risk: "Low", recommended: true },
                { path: "PEZA/BOI Registration", desc: "Register with PEZA (Philippine Economic Zone Authority) or BOI (Board of Investments) for export-oriented or priority sector status. Health-tech qualifies under CREATE Act. Benefits: 100% foreign ownership + tax incentives (5% GIE or enhanced deductions).", risk: "Low", recommended: true },
                { path: "Retail Trade Liberalization Act", desc: "RA 11595 (2022) lowered minimum paid-up capital for foreign retail businesses to PHP 25M ($440K). If any B2C component, this applies. Allows 100% ownership above this threshold.", risk: "Low-Medium", recommended: false },
                { path: "60/40 Filipino-Owned Entity (for government contracts)", desc: "Some government procurement requires Filipino-majority ownership. Solution: create a 60/40 JV specifically for government business while maintaining a 100% foreign-owned operating entity for private sector. Two-entity structure common among US tech companies in PH.", risk: "Medium", recommended: false },
                { path: "Philippine subsidiary with nominee concerns", desc: "Using Filipino nominees to hold 60% shares is technically legal but carries risk (nominees could assert ownership). Only use with ironclad shareholder agreements, voting trusts, and corporate governance documents. Most lawyers recommend AGAINST this.", risk: "High", recommended: false },
              ].map((p) => (
                <div key={p.path} className={`rounded-lg p-4 border ${p.recommended ? "bg-green-50 border-green-200" : "bg-white border-gray-200"}`}>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold">{p.path}</h4>
                    {p.recommended && <Badge className="bg-green-100 text-green-700 text-[10px]">RECOMMENDED</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                  <p className="text-xs mt-1"><span className="font-medium">Risk: </span><span className={p.risk === "Low" ? "text-green-600" : p.risk === "High" ? "text-red-600" : "text-yellow-600"}>{p.risk}</span></p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-primary/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary">Recommended Structure for MyEval.ai</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Register as a 100% foreign-owned IT services company under the Foreign Investments Act + BOI/PEZA registration. This is the cleanest legal path, provides tax incentives, and avoids the 60/40 requirement entirely. For government contracts requiring Filipino majority, create a separate 60/40 JV entity with a trusted Filipino partner (law firm recommendation: SyCip Salazar Hernandez & Gatmaitan or Romulo Mabanta).
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Brain Drain Solutions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6" /> Reversing the Brain Drain — Actionable Solutions
        </h2>
        <p className="text-sm text-muted-foreground">
          60,000+ Filipino healthcare workers leave annually. The Philippines trains world-class nurses and doctors — then loses them to the US, UK, Saudi Arabia, and UAE. Here&apos;s how technology and smart policy can reverse this.
        </p>

        {[
          {
            title: "AI as a Force Multiplier for Remaining Workers",
            problem: "With 1.2 doctors per 10K people (and falling), the Philippines can't train enough doctors to replace those who leave. Traditional solution (build more medical schools) takes 10+ years to produce results.",
            solution: "AI-powered health screening makes every remaining doctor 5-10x more effective. Instead of spending 15 minutes on patient intake, doctors get pre-evaluated patients with AI-generated risk scores, screening results, and drug interaction checks. One doctor with MyEval.ai can effectively serve the patient volume of 5 doctors without it.",
            impact: "Equivalent of adding 6,000+ virtual doctors to the Philippine health system in Year 1 alone. This doesn't replace the need for more doctors — it buys time while the training pipeline catches up.",
            icon: Cpu,
          },
          {
            title: "Create High-Value Health-Tech Jobs That Compete with Emigration",
            problem: "Filipino nurses earn $400-600/month in Philippines vs $4,000-6,000 in the US/UK. The salary gap drives emigration. You can't close a 10x salary gap with appeals to patriotism.",
            solution: "Build a health-tech sector that creates high-paying jobs that don't exist yet. AI health platform engineers, clinical data scientists, health informatics specialists, telemedicine coordinators — these roles can pay $2,000-4,000/month (competitive with BPO senior roles) while keeping talent in-country. MyEval.ai alone creates 25+ Philippine-based tech jobs by Year 2.",
            impact: "If the health-tech sector grows to employ 50,000 people at average $2,500/month, that's $1.5B in domestic salary retention vs emigration. The BPO playbook (which retained 1.7M workers) can be replicated for health-tech.",
            icon: DollarSign,
          },
          {
            title: "OFW Family Health Monitoring — Keeping Families Connected",
            problem: "10M+ OFWs are separated from families. Their primary concern is family health — but they have no way to monitor it. Families delay seeking care because the breadwinner is abroad and can't coordinate.",
            solution: "MyEval.ai's OFW Family product allows overseas workers to monitor their family's health evaluations in real-time, get alerts when risk factors are detected, and coordinate care remotely. This turns the brain drain into a digital health bridge.",
            impact: "30M+ family members of OFWs gain access to health monitoring. OFW remittances ($36B/year) include an estimated $5B in health spending — MyEval.ai optimizes how that money is spent by directing families to the right care at the right time.",
            icon: Globe,
          },
          {
            title: "Telemedicine Infrastructure That Brings Specialists to Provinces",
            problem: "65% of specialists are concentrated in Metro Manila. Patients in Visayas and Mindanao must travel hours (or days, between islands) for specialist evaluation.",
            solution: "AI-powered initial screening at the barangay level (via community health workers with MyEval.ai) triages patients and connects the most urgent cases to specialists via telemedicine. Only the truly necessary cases travel to Manila — reducing cost and delay.",
            impact: "Reduce unnecessary specialist referrals by 30-40%. Save patients an estimated $150-300 per avoided Manila trip. For 500K provincial patients annually, that's $75-150M in travel cost savings — money that stays in provincial economies.",
            icon: Building2,
          },
          {
            title: "Training Pipeline — AI-Assisted Medical Education",
            problem: "PISA scores near the bottom globally. Medical schools produce 3,000 doctors/year but 2,000+ leave. The training pipeline can't keep up with demand + emigration.",
            solution: "Partner with Philippine medical schools (UP Manila, UST, Ateneo de Manila) to use MyEval.ai's Academic Portal for clinical training. AI-assisted case-based learning exposes students to thousands of clinical scenarios. TESDA can use the platform for community health worker training at scale.",
            impact: "If TESDA trains 100,000 community health workers using MyEval.ai's simplified screening protocol, it creates a distributed health workforce that fills the gap while medical schools scale up. This is the Bangladesh BRAC model adapted for Philippines.",
            icon: GraduationCap,
          },
          {
            title: "Return Migration Incentives via Health-Tech Ecosystem",
            problem: "Filipino healthcare workers abroad gain world-class skills but have no high-quality career path to return to. Coming home means a 5-10x pay cut.",
            solution: "Build a health-tech ecosystem that offers competitive roles for returning OFW healthcare professionals: clinical informatics directors, AI training data specialists, telemedicine physicians, health system consultants. These bridge roles pay $3,000-5,000/month — not US-level but 5-8x above domestic clinical salaries.",
            impact: "If even 5% of the 200,000+ Filipino healthcare workers in the US/UK are attracted back by health-tech opportunities, that's 10,000+ experienced professionals re-entering the Philippine health system with international training and perspective.",
            icon: Plane,
          },
        ].map((item) => (
          <Card key={item.title}>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                      <h4 className="text-xs font-semibold text-red-700 mb-1">The Problem</h4>
                      <p className="text-xs text-muted-foreground">{item.problem}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <h4 className="text-xs font-semibold text-blue-700 mb-1">The Solution</h4>
                      <p className="text-xs text-muted-foreground">{item.solution}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <h4 className="text-xs font-semibold text-green-700 mb-1">The Impact</h4>
                      <p className="text-xs text-muted-foreground">{item.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Global Economic Models for Philippine Transformation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Landmark className="h-6 w-6" /> Global Economic Models for Philippine Transformation
        </h2>
        <p className="text-sm text-muted-foreground">
          Six proven national transformation models from around the world — adapted for the Philippines context. Each offers a specific, actionable pathway to address the country&apos;s core challenges.
        </p>

        {[
          {
            model: "Norway — Sovereign Wealth Fund",
            flag: "NO",
            color: "border-blue-300 bg-blue-50/50",
            original: "Norway established the Government Pension Fund Global in 1990 using North Sea oil revenues. Today it holds $1.7T+ — making every Norwegian a millionaire on paper. The 'fiscal rule' spends only the expected real return (~3%/year), preserving principal for future generations. This transformed Norway from a resource-dependent economy to the world's wealthiest per-capita nation.",
            philippineApplication: "The Philippines sits on $1T+ in untapped mineral reserves (nickel — world's 2nd largest producer, gold, copper, chromite) plus the Reed Bank gas reserves (5.4B barrels oil equivalent, blocked by the China dispute). Geothermal energy generates $500M+/year. The Marcos Jr. administration created the Maharlika Investment Fund (RA 11954, 2023) but it was criticized for using pension funds as seed capital rather than resource revenues. A properly structured Philippine SWF funded by: (1) mining royalties restructured to 10-15% of gross output, (2) Reed Bank gas revenues once the territorial dispute resolves, (3) PAGCOR gaming revenues ($800M+/year), and (4) a 1% OFW remittance voluntary contribution could accumulate $50-80B over 20 years.",
            healthImpact: "A Philippine SWF could allocate 5-10% of annual returns to a National Health Endowment — funding AI-powered health screening, hospital construction in underserved regions, and healthcare worker retention bonuses that reduce brain drain. Norway's fund spends $40B+/year on public services. Even a Philippine fund 1/20th the size would transform health financing.",
            feasibility: "High political feasibility — Maharlika already passed. Needs restructuring: (1) shift seed capital from pension funds to actual resource revenues, (2) establish independent governance board (not political appointees), (3) legislate the fiscal rule, (4) mandate transparency (Norway publishes every investment).",
          },
          {
            model: "Singapore — Strategic Industrial Transformation",
            flag: "SG",
            color: "border-green-300 bg-green-50/50",
            original: "Singapore's Economic Development Board (EDB) systematically identified and attracted strategic industries: electronics (1970s), IT services (1980s), biotech (1990s), fintech (2010s). Temasek Holdings ($400B+) and GIC ($800B+) invest globally. Result: GDP per capita went from $500 (1965) to $65,000 (2025).",
            philippineApplication: "The Philippines has the foundation — BPO ($32.5B) proves the country can build a world-class services industry. Apply the Singapore model: (1) Create a 'Philippine Digital Health Board' modeled on EDB that actively recruits health-tech companies to establish regional HQs in the Philippines, (2) Designate BGC/Clark as a 'Health-Tech Special Economic Zone' with tax holidays, fast-track permits, and 100% foreign ownership, (3) Use the BPO talent pipeline to feed the health-tech sector — the same English-speaking, tech-savvy workforce that powers BPO can power health technology operations for the world.",
            healthImpact: "Position the Philippines as the 'Health-Tech Hub of ASEAN' — the place where AI health companies establish operations to serve 680M ASEAN consumers. This creates thousands of high-value health-tech jobs (competing with emigration salaries) while building domestic health capacity. MyEval.ai establishing Philippine operations is a proof of concept.",
            feasibility: "Moderate — requires political will to create institutional focus. The Philippines already has PEZA, BOI, and the Innovative Startup Act framework. The gap is strategic coherence, not tools. A president who champions 'Philippines as Health-Tech Hub' could catalyze this within one term.",
          },
          {
            model: "South Korea — Education-Led Industrial Leap",
            flag: "KR",
            color: "border-purple-300 bg-purple-50/50",
            original: "Korea invested 6-8% of GDP in education for decades, producing the world's most educated workforce. Combined with government-backed industrial conglomerates (Samsung, Hyundai, LG), this created an export powerhouse. GDP per capita went from $100 (1960) to $35,000 (2025). Korea now ranks #1-3 globally in PISA scores.",
            philippineApplication: "The Philippines ranks 77th/81 in PISA. This is the country's deepest structural weakness. Korea's lesson: triple education spending from 3.5% to 7-8% of GDP, focus on STEM and vocational training, and create a 'Filipino Samsung' in health technology by concentrating government support on Philippine conglomerates (Ayala, SM, Metro Pacific) to build world-class health-tech products for export. TESDA can be transformed into a Korean-style vocational powerhouse if properly funded.",
            healthImpact: "Better-educated citizens make better health decisions. Korea's education investment directly drove its healthcare outcomes (life expectancy 84 years, among highest globally). AI health platforms like MyEval.ai become more effective when users are health-literate. Education + health technology is a virtuous cycle.",
            feasibility: "Long-term (10-20 years for education transformation). Politically difficult — requires sustained spending increases across multiple administrations. But the Korean example proves it works even for countries starting from extreme poverty.",
          },
          {
            model: "Rwanda — Technology-First Leapfrog",
            flag: "RW",
            color: "border-teal-300 bg-teal-50/50",
            original: "Rwanda — recovering from genocide (1994) — leapfrogged traditional development by going digital-first. Community-based health insurance (Mutuelle de Santé) covers 91% of the population at ~$3/person/year. Zipline drone delivery brings blood and medicine to rural clinics. Digital government services eliminate corruption touchpoints. Life expectancy went from 28 (1994) to 69 (2025).",
            philippineApplication: "The Philippines can leapfrog its infrastructure deficit the same way. Instead of building thousands of clinics (takes decades, costs billions), deploy AI health screening on the 80M+ smartphones that already exist. Instead of training 40,000 more doctors (takes 10+ years), use AI to multiply the capacity of the 40,000 doctors already here. Rwanda proved that a poor country can achieve near-universal health coverage through technology + community health workers. The Philippines has 97,000 barangay health workers — equip them with AI screening tools and you've built a distributed health system overnight.",
            healthImpact: "Direct application: MyEval.ai deployed through barangay health workers using the Rwanda community health model could screen 20-30M Filipinos within 2 years — far faster and cheaper than building hospitals. Community-based AI health screening at the barangay level is the Philippine version of Rwanda's Mutuelle de Santé. Cost: $2-3 per person screened vs $200+ per clinic visit.",
            feasibility: "High — this doesn't require constitutional change or massive capital investment. It requires: (1) DOH policy decision to deploy AI tools through existing barangay health workers, (2) PhilHealth to cover AI-assisted screening as a reimbursable service, (3) DICT to ensure connectivity. Can be piloted in one province within 6 months.",
          },
          {
            model: "India — Digital Public Infrastructure (Aadhaar + UPI)",
            flag: "IN",
            color: "border-orange-300 bg-orange-50/50",
            original: "India built three layers of digital public infrastructure: Aadhaar (1.4B biometric IDs), UPI (real-time payments — $2T+/year in transactions), and Account Aggregator (data sharing with consent). Together called 'India Stack,' this enables everything from instant bank accounts to direct welfare payments that bypass corruption. UPI alone processes more transactions than Visa and Mastercard combined.",
            philippineApplication: "The Philippines has the building blocks: PhilSys National ID (~80M registered), GCash/Maya (100M+ combined wallets), and PhilHealth (universal enrollment). What's missing is the INTEROPERABILITY layer — making these systems talk to each other. Build 'Philippine Stack': (1) Complete PhilSys rollout (100% coverage), (2) Create a PhilHealth API that connects to GCash/Maya for instant claims payment, (3) Build a Health Data Exchange (like India's ABDM) where patients own their health records and grant access via consent. This eliminates the biggest friction in Philippine healthcare: payment delays, paper records, and administrative waste.",
            healthImpact: "A Filipino patient uses MyEval.ai for an AI health evaluation → result is stored in their Philippine Health Data Exchange profile → PhilHealth automatically processes the claim via GCash → the patient pays zero out-of-pocket. This is the end state. India proved it works at 1.4B scale. The Philippines at 117M is entirely achievable within 3-5 years.",
            feasibility: "Moderate-High — the pieces exist but need integration. DICT and BSP are both pushing digital interoperability. PhilHealth digital transformation is underway. The gap is political coordination across agencies. A presidential directive could accelerate this dramatically.",
          },
          {
            model: "Costa Rica — Invest in People, Not Military",
            flag: "CR",
            color: "border-yellow-300 bg-yellow-50/50",
            original: "Costa Rica abolished its military in 1948 and redirected military spending to education and healthcare. Result: life expectancy 81 years (higher than the US), 99% literacy, universal healthcare, and the highest HDI in Central America. Healthcare spending is 7.6% of GDP with universal coverage through the Caja Costarricense de Seguro Social (CCSS).",
            philippineApplication: "The Philippines spends ~1.5% of GDP on defense ($6.5B). Reallocating even 20% of this (~$1.3B/year) to healthcare would more than double the public health budget for primary care. While full military abolition is unrealistic given the South China Sea situation, the Costa Rica model demonstrates that health investment has a higher return on national security than military spending — healthy populations are stable populations. The BARMM peace dividend could redirect conflict-related spending to health infrastructure in Mindanao.",
            healthImpact: "An additional $1.3B/year in health spending could: fund 10,000 new community health workers ($3,000/year each = $30M), build 200 new rural health units ($500K each = $100M), deploy AI health screening nationally ($50M), increase PhilHealth benefits to reduce out-of-pocket spending ($500M+), and fund healthcare worker retention bonuses ($200M+). This alone would transform Philippine health outcomes within one presidential term.",
            feasibility: "Low for full military reallocation (geopolitically impossible). Medium for partial reallocation (20-30%). High for the BARMM-specific version (redirecting conflict spending to health). The argument to make: every peso spent on health in BARMM prevents ten pesos in future conflict costs.",
          },
        ].map((model) => (
          <Card key={model.model} className={model.color}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{model.model}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">The Original Model</h4>
                <p className="text-sm text-muted-foreground">{model.original}</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border">
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-1 text-primary">Applied to the Philippines</h4>
                <p className="text-sm text-muted-foreground">{model.philippineApplication}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <h4 className="text-xs font-semibold text-green-700 mb-1">Health Technology Impact</h4>
                  <p className="text-xs text-muted-foreground">{model.healthImpact}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <h4 className="text-xs font-semibold text-blue-700 mb-1">Political Feasibility</h4>
                  <p className="text-xs text-muted-foreground">{model.feasibility}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* The Bottom Line */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">The Investment Thesis</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Philippines is a $480B economy growing at 5-6% annually with 117 million people, a median age of 25.7, 73% internet penetration, and the highest social media engagement on Earth. It is a US treaty ally with investment-grade credit ratings and the strongest BPO workforce in the world. Yet it has
            <span className="font-semibold text-foreground"> 1.2 doctors per 10,000 people</span>,
            <span className="font-semibold text-foreground"> 54% out-of-pocket health spending</span>,
            <span className="font-semibold text-foreground"> PISA scores near the global bottom</span>, and
            <span className="font-semibold text-foreground"> $67 million/day lost to traffic congestion</span>.
            The gap between the Philippines&apos; economic trajectory and its institutional capacity is where the investment opportunity lives. Technology — particularly AI health platforms, fintech, edtech, and climate resilience — is the only way to close this gap fast enough.
          </p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-muted-foreground space-y-1">
        <p>&copy; 2026 MyEval.ai. Prepared for qualified investors only.</p>
        <p className="font-mono">Sources: IMF World Economic Outlook, World Bank WDI, Philippine Statistics Authority, Bangko Sentral ng Pilipinas, WHO Global Health Observatory, UNDP HDR, Google/Temasek/Bain e-Conomy SEA 2025</p>
      </div>
    </div>
  );
}
