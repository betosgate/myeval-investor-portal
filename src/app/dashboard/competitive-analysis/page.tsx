import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Swords, Shield, AlertTriangle, CheckCircle, XCircle, TrendingUp } from "lucide-react";

const globalCompetitors = [
  { name: "Ada Health", hq: "Berlin", founded: 2011, funding: "$120M+", users: "13M+", revenue: "$50-60M", markets: "US, UK, Germany, global", threat: 7, strengths: ["AI symptom assessment ~70-80% accuracy", "13M+ users globally", "Strong clinical validation studies"], weaknesses: ["Single feature (symptom check only)", "No enterprise portals", "No drug interactions or risk scoring", "No government/payer tools"], pricing: "Free + premium ($10/month)" },
  { name: "K Health", hq: "New York", founded: 2016, funding: "$270M+", users: "5M+", revenue: "$40-50M", markets: "US, Israel", threat: 6, strengths: ["AI primary care with prescribing", "Maccabi dataset (millions of records)", "Actual treatment capability"], weaknesses: ["US/Israel only — no international", "Narrow (primary care only)", "$29/month or $49/visit — expensive", "No multi-stakeholder portals"], pricing: "$29/month or $49/visit" },
  { name: "Buoy Health", hq: "Boston", founded: 2014, funding: "$67M+", users: "10M+", revenue: "$20-30M", markets: "US", threat: 5, strengths: ["AI triage used by health systems", "Insurance partnerships", "Clinically validated"], weaknesses: ["US-only", "Triage only — narrow use case", "B2B focus limits consumer brand", "No international strategy"], pricing: "B2B licensing (health systems)" },
  { name: "Practo", hq: "Bangalore", founded: 2008, funding: "$230M+", users: "30M+ monthly", revenue: "$80-100M", markets: "India, SE Asia, Middle East", threat: 8, strengths: ["30M+ monthly users in India", "Doctor discovery + teleconsultation", "Strong brand recognition", "Marketplace model works"], weaknesses: ["India-focused, limited global reach", "No AI diagnostic capabilities", "No risk scoring or drug interactions", "No government/payer portals"], pricing: "Free listing + premium consultations" },
  { name: "Doctoralia / DocPlanner", hq: "Warsaw/Barcelona", founded: 2012, funding: "$300M+", users: "90M+", revenue: "$200M+", markets: "LatAm, Europe (30+ countries)", threat: 7, strengths: ["90M+ monthly users", "Dominant in LatAm and Europe", "Doctor booking marketplace", "SaaS for clinics"], weaknesses: ["No AI evaluation capabilities", "Content + booking only", "No health system/payer/gov portals", "Not a health intelligence platform"], pricing: "SaaS for doctors ($50-200/mo), free for patients" },
  { name: "WebMD / Internet Brands", hq: "New York", founded: 1996, funding: "N/A (acquired for $2.8B)", users: "75M+ monthly", revenue: "$800-900M", markets: "US primarily", threat: 6, strengths: ["75M monthly users — massive reach", "$800M+ revenue proves market", "20+ years of health content SEO moat", "Medscape (physician network)"], weaknesses: ["Static articles — zero personalization", "Ad-driven model = user privacy concerns", "No AI capabilities", "No international strategy", "1996 tech debt — slow to innovate"], pricing: "Free (ad-supported)" },
];

const defensiveMoats = [
  { moat: "9-Portal Network Effect", strength: 9, description: "Each portal drives adoption of others. Patients attract providers, providers attract payers, payers attract employers, usage attracts government. No competitor has more than 2 portals.", hardToCopy: "Extremely hard — requires simultaneous development of 9 specialized products. Would take a competitor 3-5 years to replicate the 1,063-feature set." },
  { moat: "Multi-Country Regulatory Compliance", strength: 8, description: "ABDM (India), RNDS (Brazil), SISPRO (Colombia), PDPA (Thailand), LGPD (Brazil) — first-mover in certifications creates 12-18 month barriers to entry in each market.", hardToCopy: "Hard — each certification takes 6-12 months and requires local legal expertise. A competitor entering after us faces a permanent lag." },
  { moat: "Localized Clinical Data", strength: 8, description: "As evaluations accumulate, our AI improves for each population. Vietnamese risk scores get better with Vietnamese data, Indian drug interactions get more accurate with Indian prescriptions. Data compounds.", hardToCopy: "Very hard — requires millions of evaluations per country to build comparable datasets. We get a 2-year head start in each market." },
  { moat: "Health System Integration Depth", strength: 7, description: "Once integrated with ABDM, RNDS, NHSO eClaim, EPS Sura, etc., switching costs are enormous. Hospitals and insurers don't switch embedded infrastructure.", hardToCopy: "Hard — each integration is a 3-12 month project requiring relationship building, certification, and technical work." },
  { moat: "8-Language Clinical NLP", strength: 7, description: "Clinical terminology in Vietnamese, Hindi, Bengali, Thai, Spanish, Portuguese is non-trivial. Our AI understands localized medical concepts, drug names, and symptoms in each language.", hardToCopy: "Moderate — requires native clinical expertise per language. Google Translate doesn't work for medical terminology." },
  { moat: "Government Relationships", strength: 6, description: "MOUs with health ministries, PAHO partnerships, and government procurement approvals take years to build. These relationships are personal and institutional.", hardToCopy: "Moderate — a well-funded competitor could build relationships in 12-18 months, but they'd need local teams in each country." },
];

const failureLessons = [
  { company: "Babylon Health", outcome: "Bankrupt (2023)", raised: "$2B+", lesson: "Over-expanded into too many services (GP consultations, hospital management, insurance) without unit economics. Burned $1B+ on UK NHS contract that never became profitable. Lesson: Focus on what scales (AI evaluation) and don't try to be a healthcare provider.", applies: "MyEval.ai is a platform, not a provider. We sell tools to providers — we don't compete with them." },
  { company: "Theranos", outcome: "Fraud conviction (2022)", raised: "$700M+", lesson: "Made diagnostic claims that couldn't be validated. Lesson: Never claim diagnostic accuracy without clinical validation. Always position as 'decision support' not 'diagnosis'.", applies: "MyEval.ai positions as Clinical Decision Support under FDA 21st Century Cures Act exemption. We recommend, not diagnose. Every output includes 'consult your healthcare provider' disclaimer." },
  { company: "Pear Therapeutics", outcome: "Bankrupt (2023)", raised: "$400M+", lesson: "Got FDA approval for digital therapeutics but couldn't get insurance reimbursement. Product-market fit existed clinically but not commercially. Lesson: Reimbursement strategy must be solved before scaling.", applies: "MyEval.ai doesn't depend on insurance reimbursement. We sell to hospitals, insurers, and governments as a SaaS tool — not a reimbursable treatment." },
  { company: "Olive AI", outcome: "Shut down (2023)", raised: "$900M+", lesson: "Tried to automate hospital administrative processes but underestimated integration complexity. Each hospital is different. Lesson: Integration must be the core competency, not an afterthought.", applies: "Our integration strategy (18 health systems across 8 countries) is central to the plan, not a bolt-on. We budget 6-12 months for each integration." },
];

export default function CompetitiveAnalysisPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Competitive Analysis</h1>
        <p className="text-muted-foreground mt-2">
          Global competitors, per-country threats, defensive moats, and lessons from failed health-tech companies.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MetricCard label="Global Competitors Analyzed" value="6" icon={Swords} />
        <MetricCard label="Defensive Moats" value="6" icon={Shield} subtitle="Avg strength: 7.5/10" />
        <MetricCard label="Failure Case Studies" value="4" icon={AlertTriangle} subtitle="Lessons applied" />
      </div>

      {/* Global Competitors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Global Competitors</h2>
        {globalCompetitors.map((c) => (
          <Card key={c.name}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                <span>{c.name} <span className="text-xs text-muted-foreground font-normal">({c.hq}, est. {c.founded})</span></span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-mono text-xs">Funding: {c.funding}</Badge>
                  <Badge className={c.threat >= 7 ? "bg-red-500/20 text-red-400" : c.threat >= 5 ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"}>
                    Threat: {c.threat}/10
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2 mb-3 text-xs">
                <div className="bg-muted/30 rounded p-2"><span className="text-muted-foreground">Users:</span> <span className="font-mono">{c.users}</span></div>
                <div className="bg-muted/30 rounded p-2"><span className="text-muted-foreground">Revenue:</span> <span className="font-mono">{c.revenue}</span></div>
                <div className="bg-muted/30 rounded p-2"><span className="text-muted-foreground">Markets:</span> {c.markets}</div>
                <div className="bg-muted/30 rounded p-2"><span className="text-muted-foreground">Pricing:</span> {c.pricing}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-red-400 mb-1">Their Strengths</h4>
                  {c.strengths.map((s) => (
                    <p key={s} className="text-xs text-muted-foreground flex items-start gap-1">
                      <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-red-400" />{s}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-green-400 mb-1">Their Weaknesses (Our Advantage)</h4>
                  {c.weaknesses.map((w) => (
                    <p key={w} className="text-xs text-muted-foreground flex items-start gap-1">
                      <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-green-400" />{w}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Defensive Moats */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Defensive Moats
        </h2>
        {defensiveMoats.map((m) => (
          <Card key={m.moat}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">{m.moat}</h3>
                <Badge className={m.strength >= 8 ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}>
                  Strength: {m.strength}/10
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{m.description}</p>
              <div className="mt-2 bg-muted/30 rounded-lg p-2">
                <p className="text-xs"><span className="font-semibold">How hard to copy: </span><span className="text-muted-foreground">{m.hardToCopy}</span></p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Failure Lessons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Lessons from Failed Health-Tech Companies
        </h2>
        {failureLessons.map((f) => (
          <Card key={f.company} className="border-red-600/20">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold">{f.company}</h3>
                <Badge variant="destructive" className="text-xs">{f.outcome}</Badge>
                <Badge variant="outline" className="text-xs font-mono">Raised: {f.raised}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{f.lesson}</p>
              <div className="mt-2 bg-green-500/5 border border-green-500/20 rounded-lg p-2">
                <p className="text-xs"><span className="font-semibold text-green-400">How MyEval.ai avoids this: </span><span className="text-muted-foreground">{f.applies}</span></p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
