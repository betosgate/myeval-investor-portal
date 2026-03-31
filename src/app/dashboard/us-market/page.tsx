import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Target, DollarSign, Users, TrendingUp, Zap, Shield, CheckCircle } from "lucide-react";
import { usMarketData } from "@/lib/data/financials";
import { fmt } from "@/lib/format";

export default function USMarketPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">US Market — WebMD Alternative</h1>
        <p className="text-muted-foreground mt-2">
          The first AI-native health intelligence platform for the US consumer market. Personalized evaluations, not static articles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="TAM" value={fmt(usMarketData.totalAddressableMarket)} icon={Target} subtitle="Digital health consumer" />
        <MetricCard label="SAM" value={fmt(usMarketData.serviceableMarket)} icon={Target} subtitle="Directly addressable" />
        <MetricCard label="WebMD Revenue" value={fmt(usMarketData.webmdRevenue)} icon={DollarSign} subtitle="Ad-heavy model" />
        <MetricCard label="Yr 2 Target" value={fmt(usMarketData.targetYear2Revenue)} icon={TrendingUp} subtitle={`${(usMarketData.targetYear2Users / 1_000_000).toFixed(0)}M users`} />
      </div>

      {/* WebMD vs MyEval Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>WebMD vs. MyEval.ai — Why We Win</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-red-400 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                WebMD (Incumbent)
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>&bull; Static articles written by editors — no personalization</p>
                <p>&bull; Ad-driven revenue model — user attention is the product</p>
                <p>&bull; Symptom checker produces anxiety, not actionable intelligence</p>
                <p>&bull; No risk scoring, no clinical frameworks, no drug interaction checking</p>
                <p>&bull; No downloadable reports — nothing to share with your doctor</p>
                <p>&bull; Single stakeholder (consumer) — no network effects</p>
                <p>&bull; Built in 1996 — technology debt, slow to innovate</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-green-400 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-400" />
                MyEval.ai (Challenger)
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>&bull; AI-powered personalized evaluations using Claude AI</p>
                <p>&bull; Subscription + B2B revenue — user privacy is protected</p>
                <p>&bull; Clinical risk scoring: Framingham, STOP-Bang, diabetes screening</p>
                <p>&bull; Drug interaction checking with real-time alerts</p>
                <p>&bull; Downloadable PDF reports with ICD/CPT codes for your doctor</p>
                <p>&bull; 9-portal ecosystem creating multi-sided network effects</p>
                <p>&bull; Built 2024-2026 — AI-native, modern architecture</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Differentiators */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Key Differentiators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3">
            {usMarketData.differentiators.map((d) => (
              <div key={d} className="flex items-start gap-3 bg-muted/30 rounded-lg p-3">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                <p className="text-sm">{d}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Acquisition Channels */}
      <Card>
        <CardHeader>
          <CardTitle>User Acquisition Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {usMarketData.acquisitionChannels.map((ch) => (
              <div key={ch.channel} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>{ch.channel}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">CAC: ${ch.cost}</span>
                    <span className="font-mono font-medium w-10 text-right">{ch.pct}%</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${ch.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Go-to-Market */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Go-to-Market Strategy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Phase 1: SEO & Content (Months 7-12)</h4>
              <p>Build 10,000+ condition-specific pages optimized for health search queries. Each page delivers AI-powered personalized evaluation, not just static content. Target long-tail keywords WebMD ranks for.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Phase 2: Partnerships (Months 10-18)</h4>
              <p>Sign 20+ employer wellness partnerships (Fortune 500 targets). Integrate with 5+ major health insurance member benefit programs. Launch physician advocate network — 500+ doctors recommending MyEval.ai to patients.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Phase 3: Paid Growth (Months 15-24)</h4>
              <p>Targeted social media campaigns (TikTok health, Instagram wellness). Podcast sponsorships in health/wellness category. Google Ads on high-intent health queries with demonstrably better user experience than WebMD results.</p>
            </div>
          </CardContent>
        </Card>

        {/* Regulatory */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Regulatory & Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                FDA Classification
              </h4>
              <p>MyEval.ai operates as a Clinical Decision Support (CDS) tool under FDA&apos;s 21st Century Cures Act exemption. Provides recommendations, not diagnoses. Users must consult healthcare providers for treatment decisions. CDS exemption criteria met: discloses basis for recommendations, allows independent review by HCP, and does not replace clinical judgment.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                HIPAA Compliance
              </h4>
              <p>SOC 2 Type II certified. 256-bit SSL encryption. End-to-end data encryption at rest and in transit. BAA agreements with all infrastructure providers. Annual penetration testing and security audits.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Shield className="h-4 w-4 text-yellow-400" />
                FTC Advertising Compliance
              </h4>
              <p>All health claims backed by established clinical frameworks (USPSTF, Framingham, STOP-Bang). No diagnostic claims — platform provides &quot;health intelligence&quot; and &quot;evaluation support.&quot; Clear disclaimers on every assessment output.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Target Partners */}
      <Card>
        <CardHeader>
          <CardTitle>Priority US Partnership Targets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold mb-2">Health Systems (Top 10)</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                {[
                  "HCA Healthcare (182 hospitals)",
                  "CommonSpirit Health (140 hospitals)",
                  "Ascension (139 hospitals)",
                  "Kaiser Permanente (39 hospitals)",
                  "Providence (52 hospitals)",
                  "Cleveland Clinic",
                  "Mayo Clinic",
                  "Mass General Brigham",
                  "NYU Langone Health",
                  "Johns Hopkins Medicine",
                ].map((h) => <p key={h}>&bull; {h}</p>)}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Insurance Companies</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                {[
                  "UnitedHealth Group (152M members)",
                  "Anthem/Elevance Health (47M)",
                  "Aetna/CVS Health (39M)",
                  "Cigna Group (190M)",
                  "Humana (26M)",
                  "Centene (28M Medicaid)",
                  "Molina Healthcare",
                  "Blue Cross Blue Shield (network)",
                ].map((i) => <p key={i}>&bull; {i}</p>)}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Employer Wellness</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                {[
                  "Amazon (1.5M employees)",
                  "Walmart (2.1M employees)",
                  "Apple, Google, Meta (tech wellness)",
                  "JPMorgan Chase (300K employees)",
                  "Johnson & Johnson (wellness pioneer)",
                  "Deloitte, McKinsey (consulting firms)",
                  "Federal government (2.1M civilians)",
                  "State/local government employers",
                ].map((e) => <p key={e}>&bull; {e}</p>)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
