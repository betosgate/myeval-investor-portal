import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Zap,
  Shield,
  Globe,
  Building2,
  Users,
  TrendingUp,
  Heart,
  Brain,
  CheckCircle,
  Star,
} from "lucide-react";

export default function WhyMyEvalPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Why MyEval.ai</h1>
        <p className="text-muted-foreground mt-2">
          The platform, the team, the market, and the moment — why this investment is compelling.
        </p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-5 gap-4">
        {[
          { label: "Total Features", value: "1,063", icon: Zap },
          { label: "Specialized Portals", value: "9", icon: Building2 },
          { label: "Languages", value: "8", icon: Globe },
          { label: "ICD Codes", value: "1,000+", icon: Heart },
          { label: "Screenshots Documented", value: "738", icon: Star },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="p-4 text-center">
              <s.icon className="h-5 w-5 mx-auto text-muted-foreground" />
              <p className="text-2xl font-bold font-mono mt-2">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* The 9 Portals */}
      <Card>
        <CardHeader>
          <CardTitle>The 9-Portal Ecosystem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "Patient Portal", features: 206, desc: "AI health dashboard, vitals tracking, risk scoring, 8 dedicated workspaces" },
              { name: "Management & Admin", features: 157, desc: "User management, AI monitoring, ICD codes, billing, audit logging — 33+ modules" },
              { name: "Payer & Social Security", features: 132, desc: "Claims analytics, fraud detection, prior auth, risk adjustment, provider performance" },
              { name: "Health System", features: 131, desc: "Bed management, staff scheduling, infection control, surgical dashboards, patient flow" },
              { name: "Government & Ministry", features: 127, desc: "Population surveillance, disease tracking, outbreak monitoring, vaccination coverage" },
              { name: "Partner & Digital Health", features: 123, desc: "API docs, webhook management, SLA monitoring, transaction funnels, revenue forecasting" },
              { name: "Academic & Research", features: 117, desc: "Publication tracking, curriculum analytics, clinical trials, diagnostic accuracy" },
              { name: "Employer & Corporate", features: 112, desc: "Wellness programs, claims analysis, mental health tracking, absenteeism monitoring" },
              { name: "Advertiser", features: 58, desc: "Campaign management, audience insights, performance analytics, A/B testing" },
            ].map((p) => (
              <div key={p.name} className="bg-muted/30 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{p.name}</h3>
                  <Badge variant="outline" className="text-xs font-mono">{p.features} features</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI-Powered Clinical Intelligence
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Risk Assessment Models",
                items: [
                  "Cardiovascular risk scoring (Framingham model)",
                  "Type 2 diabetes risk assessment",
                  "Sleep apnea screening (STOP-Bang questionnaire)",
                  "Multi-factor risk scoring with contributing factor breakdowns",
                  "Actionable intervention recommendations",
                ],
              },
              {
                title: "Medical Intelligence",
                items: [
                  "1,000+ ICD code lookup and explanation",
                  "American Medical Codex Qualifications database",
                  "Drug interaction checking with real-time alerts",
                  "USPSTF preventive screening recommendations",
                  "Blood lab analysis and interpretation",
                ],
              },
              {
                title: "Body Metrics & Analytics",
                items: [
                  "BMI, basal metabolic rate, body fat percentage",
                  "Hydration needs, ideal weight, lean body mass",
                  "NPI provider search for specialist location",
                  "Downloadable PDF reports with full assessment",
                  "ICD/CPT code explanations for patients",
                ],
              },
              {
                title: "Compliance & Security",
                items: [
                  "HIPAA-aligned privacy practices",
                  "SOC 2 Type II certification",
                  "256-bit SSL encryption",
                  "End-to-end data encryption",
                  "99.9% uptime SLA",
                ],
              },
            ].map((section) => (
              <div key={section.title} className="space-y-2">
                <h3 className="font-semibold text-sm">{section.title}</h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <p key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-green-400" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Network Effect */}
      <Card className="border-blue-600/30 bg-blue-600/5">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">The Multi-Sided Network Effect</h3>
          <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Patients Attract Providers</h4>
              <p>More patients using MyEval.ai means providers need the platform to receive structured patient reports and referrals.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Providers Attract Payers</h4>
              <p>Hospital and clinic adoption drives insurer integration for claims analytics, fraud detection, and risk adjustment.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Data Attracts Government</h4>
              <p>Population-level health data from consumer and provider usage becomes the intelligence layer governments need for public health surveillance.</p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Government Drives Employers</h4>
              <p>Government adoption validates the platform, encouraging employers to adopt for workforce wellness programs.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Usage Attracts Advertisers</h4>
              <p>Growing user base creates a HIPAA-compliant advertising channel for pharmaceutical and health product companies.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Academics Validate AI</h4>
              <p>Research institution partnerships publish clinical validation studies, strengthening credibility across all stakeholder groups.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Now */}
      <Card>
        <CardHeader>
          <CardTitle>Why Now — The Convergence</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "AI Maturity",
                desc: "Claude AI can now process complex medical information and generate clinically relevant recommendations at scale. This was not possible 2 years ago.",
              },
              {
                title: "Digital Health Mandates",
                desc: "India (ABDM), Vietnam (Digital Transformation 2025-2030), Brazil (DATASUS modernization), Thailand (DEPA sandbox) — governments are mandating digital health NOW.",
              },
              {
                title: "Post-COVID Acceleration",
                desc: "COVID permanently shifted health consumers toward digital-first interactions. Telehealth adoption increased 38x and hasn't reverted. Users expect AI-powered health tools.",
              },
              {
                title: "WebMD Stagnation",
                desc: "WebMD's ad-driven model hasn't innovated in a decade. Users are frustrated with generic content. The market is ready for an AI-native alternative.",
              },
            ].map((r) => (
              <div key={r.title} className="space-y-2">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
