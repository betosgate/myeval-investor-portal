import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Plane, DollarSign, Users, Heart, Globe, AlertTriangle, CheckCircle, Brain, Building2 } from "lucide-react";

export default function OFWPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-cyan-100 text-cyan-700 border-cyan-300 mb-3">ECONOMIC PILLAR & HUMAN CRISIS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">OFW & Remittances Economy</h1>
        <p className="text-muted-foreground mt-2">10M+ overseas workers generate $36.1B/year (9.4% of GDP) — the economic engine that prevents the Philippines from fiscal crisis. But at an immeasurable human cost. This section quantifies both.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <MetricCard label="OFWs Deployed (2024)" value="2.19M" subtitle="Annual (PSA)" icon={Plane} />
        <MetricCard label="Remittances" value="$36.1B" subtitle="9.4% of GDP, world's #4" icon={DollarSign} />
        <MetricCard label="Total Diaspora" value="10M+" subtitle="200+ countries" icon={Globe} />
        <MetricCard label="Children Left Behind" value="3M+" subtitle="UNICEF estimate" icon={Heart} />
      </div>

      {/* Where They Go */}
      <Card>
        <CardHeader><CardTitle>Where They Go & Where the Money Comes From</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold mb-2">Top Destinations by OFW Count (2024 PSA)</h4>
              {[
                { dest: "Saudi Arabia", pct: "21.9%", num: "~480,000", note: "Largest single destination. Domestic workers + construction." },
                { dest: "UAE", pct: "12.4%", num: "~272,000", note: "Dubai/Abu Dhabi. Services, hospitality, construction." },
                { dest: "Kuwait", pct: "~5%", num: "~100,000", note: "Domestic workers. Significant welfare concerns." },
                { dest: "Hong Kong", pct: "~5%", num: "~95,000", note: "Domestic helpers. Strict contract terms." },
                { dest: "Singapore", pct: "~4%", num: "~88,000", note: "Domestic + service workers." },
                { dest: "Qatar", pct: "~4%", num: "~80,000", note: "Construction, services." },
                { dest: "Taiwan", pct: "~3%", num: "~65,000", note: "Factory workers, caregivers." },
                { dest: "Japan", pct: "~3%", num: "~60,000", note: "Growing rapidly. Caregivers, EPA nurses." },
              ].map((d) => (
                <div key={d.dest} className="flex items-center justify-between text-xs border-b border-border/50 py-1.5">
                  <div><span className="font-medium">{d.dest}</span> <span className="text-muted-foreground text-[10px]">({d.note})</span></div>
                  <span className="font-mono">{d.num} ({d.pct})</span>
                </div>
              ))}
              <p className="text-xs text-muted-foreground mt-2">Gender: <span className="font-semibold">57.2% female</span>. 68.4% of female OFWs are in elementary occupations (domestic helpers). 25.8% are aged 45+ (aging workforce).</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Remittance Sources (2025 BSP)</h4>
              {[
                { source: "United States", pct: "40.2%", amt: "~$14.3B", note: "BY FAR the largest source. Nurses, professionals." },
                { source: "Singapore", pct: "7.6%", amt: "~$2.7B", note: "" },
                { source: "Saudi Arabia", pct: "6.7%", amt: "~$2.4B", note: "Lower per-worker but massive volume." },
                { source: "Japan", pct: "5.8%", amt: "~$2.1B", note: "Growing as Japan recruits more caregivers." },
                { source: "United Kingdom", pct: "4.6%", amt: "~$1.6B", note: "NHS nurses driving this." },
                { source: "UAE", pct: "~5%", amt: "~$1.5B", note: "" },
                { source: "Canada", pct: "~4%", amt: "~$1.2B", note: "" },
                { source: "Qatar", pct: "~3%", amt: "~$0.9B", note: "" },
              ].map((d) => (
                <div key={d.source} className="flex items-center justify-between text-xs border-b border-border/50 py-1.5">
                  <div><span className="font-medium">{d.source}</span> {d.note && <span className="text-muted-foreground text-[10px]">({d.note})</span>}</div>
                  <span className="font-mono">{d.amt} ({d.pct})</span>
                </div>
              ))}
              <h4 className="text-sm font-semibold mt-4 mb-2">Remittance Costs by Corridor</h4>
              {[
                { corridor: "Saudi → PH", cost: "~3.14%", note: "Cheapest — high competition" },
                { corridor: "US → PH", cost: "~3.81%", note: "Competitive (Remitly, Wise, GCash)" },
                { corridor: "UK → PH", cost: "~3.93%", note: "GBP conversion costs" },
                { corridor: "Japan → PH", cost: "~4.14%", note: "Most expensive — fewer providers" },
              ].map((c) => (
                <div key={c.corridor} className="flex justify-between text-xs py-1">
                  <span>{c.corridor} <span className="text-muted-foreground">({c.note})</span></span>
                  <span className="font-mono">{c.cost} of $500</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Where the Money Goes */}
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600" /> Where Remittances Go — The Consumption Trap</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">BSP data reveals a heavily consumption-oriented pattern. Remittances sustain families but rarely build wealth.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { use: "Food & basic needs", pct: "72.9%", color: "bg-red-100 text-red-700" },
              { use: "Consumer durables", pct: "20.7%", color: "bg-orange-100 text-orange-700" },
              { use: "Savings", pct: "9-13%", color: "bg-yellow-100 text-yellow-700" },
              { use: "Motor vehicles", pct: "9.3%", color: "bg-blue-100 text-blue-700" },
              { use: "Investment", pct: "5.1%", color: "bg-green-100 text-green-700" },
            ].map((u) => (
              <div key={u.use} className={`${u.color} rounded-lg p-3 text-center border`}>
                <p className="text-xl font-mono font-bold">{u.pct}</p>
                <p className="text-xs">{u.use}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground"><span className="font-semibold">94.8%</span> in Metro Manila and <span className="font-semibold">95.7%</span> outside Metro say remittances go primarily to food and household items. Only <span className="font-semibold text-red-600">5.1% of OFW households allocate ANY portion to investment</span>. Only 38.5% set aside anything for savings.</p>
        </CardContent>
      </Card>

      <Separator />

      {/* The Human Cost */}
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><Heart className="h-5 w-5 text-red-600" /> The Human Cost — What the Numbers Don&apos;t Show</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-red-700">Children Left Behind</h4>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">25% of Philippine children</span> (UNICEF) have at least one parent overseas — that&apos;s ~7M children</p>
              <p className="text-xs text-muted-foreground">&bull; Left-behind children show higher rates of depression, anxiety, and behavioral issues</p>
              <p className="text-xs text-muted-foreground">&bull; Among 391 left-behind emerging adults studied: 34.8% moderate anxiety, <span className="font-semibold">8.6% severe anxiety</span></p>
              <p className="text-xs text-muted-foreground">&bull; Most common emotion identified in 73.7% of research: <span className="font-semibold">loneliness</span></p>
              <p className="text-xs text-muted-foreground">&bull; Children of OFWs have <span className="font-semibold">50-80% higher rates</span> of depression and suicidal ideation vs non-OFW families</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-red-700">OFW Mental Health</h4>
              <p className="text-xs text-muted-foreground">&bull; 2022 study of 884 OFWs across 10 countries: depression and anxiety <span className="font-semibold">prevalent</span> (80% women)</p>
              <p className="text-xs text-muted-foreground">&bull; In Macau: <span className="font-semibold">25% of OFWs</span> exhibited PTSD</p>
              <p className="text-xs text-muted-foreground">&bull; Barriers to care: stigma, language, unfamiliarity with host country systems, isolation</p>
              <p className="text-xs text-muted-foreground">&bull; Illegal recruitment surging: 299 cases Jan-Jun 2025 (vs 71 in all of 2024). 71,653 fake job postings removed from social media in 2024</p>
              <p className="text-xs text-muted-foreground">&bull; DMW mandate: &ldquo;make overseas employment a choice, not a necessity&rdquo; — aspirational but underfunded</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Solutions */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Solutions — Making Remittances Work Harder</h2>

        {[
          { title: "Diaspora Bonds — 'Bayanihan Bonds'", icon: DollarSign, desc: "Israel raised $40B+ from diaspora bonds since 1951. India raised $11B+ in a single offering. The Philippines has 10M+ OFWs with strong emotional ties to homeland.", solution: "Launch 'Bayanihan Bonds' — small denominations ($500-$5,000), purchasable via GCash/Maya, earmarked for visible infrastructure. Target: $500M-$1B/year from the growing Filipino professional class abroad. Not mandatory — voluntary with competitive interest rates and patriotic appeal.", feasibility: "High — requires BSP approval and DOF bond issuance framework. Digital distribution via GCash eliminates traditional bond distribution barriers." },
          { title: "OFW Family Health Monitoring Platform", icon: Heart, desc: "10M OFWs have 30M+ family members who lack health monitoring while the breadwinner is abroad. OFW remittances include $5B+ in health spending — much of it spent inefficiently because families delay seeking care.", solution: "AI-powered platform lets OFWs abroad monitor family health evaluations in real-time, get alerts when risk factors are detected, and coordinate care remotely. Distribution via GCash Remit, OWWA, DMW. Revenue: subscription model $3-5/family/month.", feasibility: "High — technology exists (MyEval.ai model). Distribution channels exist (GCash 94M users). Emotional driver is strongest possible: parent monitoring children's health from abroad." },
          { title: "Investment Matching Program", icon: Globe, desc: "Only 5.1% of OFW households invest ANY remittances. Most lack financial literacy and investment vehicles accessible via mobile.", solution: "Government matches PHP 1 for every PHP 2 an OFW invests in accredited domestic enterprises (cap: PHP 200K match). Investment vehicles: Philippine government bonds, REITs, SME funds, cooperative shares — all purchasable through GCash/Maya remittance apps. Combined with mandatory 4-hour financial literacy module.", feasibility: "Moderate — requires PHP 3-5B/year in matching funds. BSP and DOF coordination. The behavioral nudge of matching funds dramatically increases investment rates (proven in multiple countries)." },
          { title: "OFW Return Entrepreneurship Fund", icon: Building2, desc: "Most OFWs who return start small businesses (sari-sari stores, tricycles) that fail within 2 years because of no training, no market access, and no support.", solution: "PHP 15B revolving loan fund: 3% interest loans up to PHP 3M for returning OFWs in priority sectors (agriculture, technology, health, education, tourism). MANDATORY: DTI business management course completion before disbursement. 20 regional OFW Enterprise Hubs with co-working, mentorship, and market access.", feasibility: "Moderate-High — funding from Maharlika/SWF allocation. DTI already has Negosyo Centers. The key innovation is the mandatory training + sectoral targeting (not just any business, but priority sectors)." },
        ].map((s) => (
          <Card key={s.title}>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <h4 className="text-xs font-semibold text-blue-700 mb-1">Solution</h4>
                      <p className="text-xs text-muted-foreground">{s.solution}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <h4 className="text-xs font-semibold text-green-700 mb-1">Feasibility</h4>
                      <p className="text-xs text-muted-foreground">{s.feasibility}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* The Post-OFW Vision */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">The Post-OFW Vision</h3>
          <p className="text-sm text-muted-foreground">The ultimate goal is not to optimize the OFW system — it is to make it unnecessary. A Philippines where overseas employment is a <span className="font-semibold text-foreground">choice made from abundance, not desperation</span>. This requires: domestic jobs paying $2-5K/month (health-tech, AI services, creative economy), a reformed education system producing globally competitive graduates, and a health system that doesn&apos;t lose 60,000 workers per year to emigration. Every other section of this report contributes to this vision.</p>
        </CardContent>
      </Card>
    </div>
  );
}
