import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import {
  Heart, Globe, DollarSign, Users, Shield, Target,
  TrendingUp, CheckCircle, Building2, GraduationCap,
  Scale, Leaf, HandHeart, Baby, Brain,
} from "lucide-react";
import {
  sdgAlignments, humanitarianFunds, countryHealthImpacts,
  totalImpact, blendedFinanceModel, fiveYearProjection, fundStructure,
} from "@/lib/data/humanitarian";
import { fmt, fmtNum, fmtUsers } from "@/lib/format";

export default function HumanitarianImpactPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Badge className="text-xs bg-green-600/20 text-green-400 border-green-600/30">HUMANITARIAN INVESTMENT CASE</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Humanitarian Impact & Development Funding</h1>
        <p className="text-muted-foreground mt-2">
          Why MyEval.ai is one of the highest-impact health investments available — saving {fmtNum(totalImpact.livesSaved)} lives, averting {fmtNum(totalImpact.dalysAverted)} DALYs, and generating ${fmtNum(totalImpact.costSavings / 1_000_000)}M in health system savings while returning capital to investors. This is blended finance at its best.
        </p>
      </div>

      {/* Top-Line Impact Metrics */}
      <div className="grid grid-cols-6 gap-3">
        <MetricCard label="Lives Saved" value={fmtNum(totalImpact.livesSaved)} subtitle="Year 1-2" icon={Heart} />
        <MetricCard label="DALYs Averted" value={fmtUsers(totalImpact.dalysAverted)} subtitle="Disability-adjusted life years" icon={Shield} />
        <MetricCard label="Hospitalizations Avoided" value={fmtUsers(totalImpact.hospitalizationsAvoided)} icon={Building2} />
        <MetricCard label="Early Detections" value={fmtUsers(totalImpact.earlyDetections)} subtitle="Cancer, CVD, diabetes" icon={Target} />
        <MetricCard label="Health Savings" value={fmt(totalImpact.costSavings)} subtitle="For health systems" icon={DollarSign} />
        <MetricCard label="Cost/DALY" value={`$${Math.round(totalImpact.costPerDalyAverted)}`} subtitle="Highly cost-effective" icon={TrendingUp} />
      </div>

      {/* The Core Argument */}
      <Card className="border-green-600/30 bg-green-600/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold text-lg text-green-400 flex items-center gap-2">
            <HandHeart className="h-5 w-5" />
            Why This Is a Humanitarian Investment
          </h3>
          <div className="grid grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">The Crisis</h4>
              <p>2.1 billion people in our 8 target countries lack access to AI-powered health evaluation. 100 million people are pushed into poverty annually by health costs (WHO). Late-detected diseases cost health systems 4x more than early-detected ones. Traditional healthcare delivery cannot scale fast enough — there aren&apos;t enough doctors, clinics, or hospitals.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">The Solution</h4>
              <p>MyEval.ai puts a world-class health evaluation in the pocket of anyone with a smartphone — for free. AI-powered risk scoring catches cardiovascular disease, diabetes, and cancer before they become catastrophic. Drug interaction checking prevents adverse events. Screening recommendations direct people to the right care at the right time. One platform, 8 languages, 8 countries.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">The Difference</h4>
              <p>Unlike traditional humanitarian health spending that requires perpetual funding, MyEval.ai is <span className="text-green-400 font-medium">self-sustaining</span>. Revenue from enterprise clients (hospitals, insurers, employers, governments) funds continued free access for consumers. This breaks the aid dependency cycle — the platform generates its own sustainability while expanding access.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blended Finance Model */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Blended Finance: Financial Return + Humanitarian Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-600/5 border border-blue-600/20 rounded-lg p-5 space-y-3">
              <h4 className="font-semibold text-blue-400 flex items-center gap-2">
                <DollarSign className="h-4 w-4" /> Financial Return
              </h4>
              {Object.entries(blendedFinanceModel.financialReturn).map(([key, val]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                  <span className="font-mono font-medium">{typeof val === "number" ? fmt(val) : val}</span>
                </div>
              ))}
            </div>
            <div className="bg-green-600/5 border border-green-600/20 rounded-lg p-5 space-y-3">
              <h4 className="font-semibold text-green-400 flex items-center gap-2">
                <Heart className="h-4 w-4" /> Humanitarian Return
              </h4>
              {Object.entries(blendedFinanceModel.humanitarianReturn).map(([key, val]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                  <span className="font-mono font-medium">{typeof val === "number" ? fmtNum(val) : val}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <h4 className="font-semibold text-sm">Cost-Effectiveness Comparison</h4>
          <div className="space-y-2">
            {blendedFinanceModel.comparison.map((c, i) => (
              <div key={c.intervention} className={`flex items-center gap-4 p-3 rounded-lg ${i === 0 ? "bg-green-600/10 border border-green-600/20" : "bg-muted/20"}`}>
                <span className={`text-sm font-medium w-48 ${i === 0 ? "text-green-400" : ""}`}>{c.intervention}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${i === 0 ? "bg-green-500" : "bg-muted-foreground/30"}`} style={{ width: `${Math.min(100, (300 / c.costPerDaly) * 100)}%` }} />
                </div>
                <span className="font-mono text-sm w-20 text-right">${c.costPerDaly}/DALY</span>
                <span className="text-xs text-muted-foreground w-24">{c.scalability}</span>
                <span className="text-xs text-muted-foreground w-32">{c.sustainability}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            WHO considers an intervention &ldquo;highly cost-effective&rdquo; if cost per DALY averted is less than 1x GDP per capita of the country. MyEval.ai&apos;s ${Math.round(totalImpact.costPerDalyAverted)}/DALY is well below this threshold for ALL 8 target countries.
          </p>
        </CardContent>
      </Card>

      <Separator />

      {/* SDG Alignment */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Globe className="h-6 w-6" />
          UN Sustainable Development Goals Alignment
        </h2>
        <p className="text-sm text-muted-foreground">MyEval.ai directly advances 7 SDGs with measurable, reportable indicators.</p>

        <div className="grid grid-cols-1 gap-4">
          {sdgAlignments.map((sdg) => (
            <Card key={sdg.sdg}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-lg ${sdg.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{sdg.sdg.split(" ")[1]}</span>
                  </div>
                  {sdg.sdg}: {sdg.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sdg.targets.map((t) => (
                  <div key={t.id} className="bg-muted/20 rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs font-mono shrink-0">Target {t.id}</Badge>
                      <p className="text-xs text-muted-foreground italic">&ldquo;{t.text}&rdquo;</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <h5 className="text-xs font-semibold text-green-400 mb-1">How MyEval.ai Contributes</h5>
                        <p className="text-xs text-muted-foreground">{t.myevalContribution}</p>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-blue-400 mb-1">Measurable Indicator</h5>
                        <p className="text-xs text-muted-foreground">{t.measurableIndicator}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Country-Level Health Impact */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Heart className="h-6 w-6" />
          Health Impact by Country
        </h2>

        {countryHealthImpacts.map((c) => (
          <Card key={c.country}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>{c.country}</span>
                <div className="flex gap-2">
                  <Badge variant="outline" className="font-mono text-xs">Pop: {fmtUsers(c.population)}</Badge>
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30 font-mono text-xs">{fmtNum(c.estimatedImpact.livesSaved)} lives saved</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(c.estimatedImpact).map(([key, val]) => (
                  <div key={key} className="bg-muted/30 rounded-lg p-2 text-center">
                    <p className="text-lg font-mono font-bold">{key === "costSavings" ? fmt(val) : fmtNum(val)}</p>
                    <p className="text-[10px] text-muted-foreground">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2">Top Disease Burden</h4>
                  {c.topBurdens.map((b) => (
                    <div key={b.disease} className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{b.disease}</span>
                      <div className="flex gap-3">
                        <span className="font-mono">{b.deathsPer100K}/100K deaths</span>
                        <span className="text-green-400 font-mono">{b.preventablePercent}% preventable</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-semibold mb-2">Vulnerable Populations Served</h4>
                  {c.vulnerablePopulations.map((v) => (
                    <div key={v.group} className="mb-2">
                      <div className="flex items-center gap-2 text-xs">
                        <Heart className="h-3 w-3 text-green-400 shrink-0" />
                        <span className="font-medium">{v.group}</span>
                        <span className="text-muted-foreground">({v.size})</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground ml-5">{v.howServed}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Eligible Humanitarian Funds */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <DollarSign className="h-6 w-6" />
          Eligible Humanitarian & Development Funds
        </h2>
        <p className="text-sm text-muted-foreground">
          10 funds totaling $40B+ in annual health investments where MyEval.ai qualifies for funding or co-investment.
        </p>

        {humanitarianFunds.map((fund) => (
          <Card key={fund.name}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>{fund.name}</span>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">{fund.type}</Badge>
                  <Badge className={fund.alignmentScore >= 8 ? "bg-green-500/20 text-green-400" : fund.alignmentScore >= 7 ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"}>
                    Alignment: {fund.alignmentScore}/10
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-muted-foreground">Annual Budget: </span>
                  <span className="font-medium">{fund.annualBudget}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Digital Health: </span>
                  <span className="font-medium">{fund.digitalHealthAllocation}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Typical Size: </span>
                  <span className="font-mono">{fund.typicalSize}</span>
                </div>
              </div>
              <div className="bg-green-600/5 border border-green-600/20 rounded-lg p-3">
                <h4 className="text-xs font-semibold text-green-400 mb-1">How MyEval.ai Fits</h4>
                <p className="text-xs text-muted-foreground">{fund.howMyEvalFits}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-muted-foreground">Eligibility: </span>
                  <span className="text-muted-foreground">{fund.eligibility}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Application: </span>
                  <span className="text-muted-foreground">{fund.applicationProcess}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fund Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Blended Finance Fund Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">The $50M can be structured across four tranches, each with a different risk/return profile, attracting different types of humanitarian and commercial capital.</p>
          <div className="space-y-3">
            {fundStructure.map((t) => (
              <div key={t.tranche} className="flex items-center gap-4 bg-muted/20 rounded-lg p-4">
                <div className="w-40 shrink-0">
                  <p className="text-sm font-semibold">{t.tranche}</p>
                  <p className="text-lg font-mono font-bold">{fmt(t.amount)}</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs"><span className="text-muted-foreground">Type:</span> {t.type}</p>
                  <p className="text-xs"><span className="text-muted-foreground">Return:</span> {t.returnProfile}</p>
                  <p className="text-xs"><span className="text-muted-foreground">Source:</span> {t.source}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 5-Year Impact Projection */}
      <Card>
        <CardHeader>
          <CardTitle>5-Year Humanitarian Impact Projection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-3 text-left text-muted-foreground font-medium">Year</th>
                  <th className="py-2 px-3 text-right text-muted-foreground font-medium">Users</th>
                  <th className="py-2 px-3 text-right text-muted-foreground font-medium">Lives Saved</th>
                  <th className="py-2 px-3 text-right text-muted-foreground font-medium">Hospitalizations Avoided</th>
                  <th className="py-2 px-3 text-right text-muted-foreground font-medium">Cancer Detections</th>
                  <th className="py-2 px-3 text-right text-muted-foreground font-medium">DALYs Averted</th>
                  <th className="py-2 px-3 text-right text-muted-foreground font-medium">Health Economic Value</th>
                </tr>
              </thead>
              <tbody>
                {fiveYearProjection.map((y) => (
                  <tr key={y.year} className="border-b border-border/50">
                    <td className="py-2 px-3 font-mono font-medium">Year {y.year}</td>
                    <td className="py-2 px-3 text-right font-mono">{fmtUsers(y.users)}</td>
                    <td className="py-2 px-3 text-right font-mono text-green-400">{fmtNum(y.livesSaved)}</td>
                    <td className="py-2 px-3 text-right font-mono">{fmtNum(y.hospitalizationsAvoided)}</td>
                    <td className="py-2 px-3 text-right font-mono">{fmtNum(y.cancerDetections)}</td>
                    <td className="py-2 px-3 text-right font-mono">{fmtNum(y.dalysAverted)}</td>
                    <td className="py-2 px-3 text-right font-mono text-green-400">{fmt(y.healthValue)}</td>
                  </tr>
                ))}
                <tr className="font-bold bg-green-600/10">
                  <td className="py-2 px-3">5-Year Total</td>
                  <td className="py-2 px-3 text-right font-mono">20M</td>
                  <td className="py-2 px-3 text-right font-mono text-green-400">{fmtNum(fiveYearProjection.reduce((s, y) => s + y.livesSaved, 0))}</td>
                  <td className="py-2 px-3 text-right font-mono">{fmtNum(fiveYearProjection.reduce((s, y) => s + y.hospitalizationsAvoided, 0))}</td>
                  <td className="py-2 px-3 text-right font-mono">{fmtNum(fiveYearProjection.reduce((s, y) => s + y.cancerDetections, 0))}</td>
                  <td className="py-2 px-3 text-right font-mono">{fmtNum(fiveYearProjection.reduce((s, y) => s + y.dalysAverted, 0))}</td>
                  <td className="py-2 px-3 text-right font-mono text-green-400">{fmt(fiveYearProjection.reduce((s, y) => s + y.healthValue, 0))}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            5-year SROI: <span className="text-green-400 font-mono font-bold">264:1</span> — for every $1 invested, $264 in social health value generated. This places MyEval.ai in the top tier of humanitarian health investments globally.
          </p>
        </CardContent>
      </Card>

      <Separator />

      {/* Why Tech-Enabled Health is the Future of Humanitarian Funding */}
      <Card className="border-blue-600/30 bg-blue-600/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold text-lg">Why AI Health Platforms Deliver More Impact Per Dollar Than Traditional Programs</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, title: "Infinite Scalability", desc: "One platform serves 20M users. A clinic serves thousands. Digital health scales without building physical infrastructure — the smartphone IS the clinic." },
              { icon: Target, title: "Real-Time Measurement", desc: "Traditional programs measure impact through annual surveys with 2-year lags. MyEval.ai measures impact in real-time: evaluations completed, risks identified, referrals made — dashboarded daily." },
              { icon: DollarSign, title: "Self-Sustaining Model", desc: "Traditional humanitarian health requires perpetual donor funding. MyEval.ai generates revenue from enterprise clients that funds continued free consumer access. The platform sustains itself." },
              { icon: Globe, title: "Cross-Border Portability", desc: "A clinic built in Dhaka helps only Dhaka. MyEval.ai built once deploys in 8 countries. Every feature improvement benefits 20M users simultaneously. This is the ultimate leverage for humanitarian dollars." },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <item.icon className="h-5 w-5 text-blue-400" />
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Line */}
      <Card className="border-green-600/30 bg-green-600/5">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <HandHeart className="h-10 w-10 mx-auto text-green-400" />
            <h3 className="text-2xl font-bold">The Investment Thesis for Humanitarian Funders</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              $50M invested in MyEval.ai saves an estimated <span className="text-green-400 font-mono font-bold">{fmtNum(totalImpact.livesSaved)} lives</span>,
              averts <span className="text-green-400 font-mono font-bold">{fmtUsers(totalImpact.dalysAverted)} DALYs</span>,
              prevents <span className="text-green-400 font-mono font-bold">{fmtUsers(totalImpact.hospitalizationsAvoided)} hospitalizations</span>,
              generates <span className="text-green-400 font-mono font-bold">{fmt(totalImpact.costSavings)}</span> in health system savings,
              and reaches <span className="text-green-400 font-mono font-bold">20M people</span> across 8 countries —
              while returning <span className="text-green-400 font-mono font-bold">{fmt(blendedFinanceModel.financialReturn.cumulativeFundValue)}</span> to the fund by Month 24.
              At <span className="text-green-400 font-mono font-bold">${Math.round(totalImpact.costPerDalyAverted)}/DALY</span>,
              this is among the most cost-effective health interventions ever deployed at scale.
              And unlike traditional aid, it never needs another dollar of funding — the platform sustains itself.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
