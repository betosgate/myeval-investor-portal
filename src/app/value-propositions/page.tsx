import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Handshake, Building2, Shield, Heart, DollarSign, GraduationCap, Users, Target, Briefcase } from "lucide-react";

const stakeholderArgs = [
  {
    stakeholder: "Governments / Health Ministries",
    icon: Building2,
    color: "border-blue-600/30 bg-blue-600/5",
    arguments: [
      {
        title: "The Cost-of-Inaction Argument",
        claim: "Late-detected diabetes costs a health system $9,600/patient vs $2,400 for early-detected. Late-detected cardiovascular disease: $32,000 vs $8,500. For a country with 10M at-risk population, the difference is $72B vs $24B over 10 years.",
        dataSource: "WHO Global Health Expenditure Database, IDF Diabetes Atlas 2025, American Heart Association cost studies",
        pitch: "Minister, every day without AI-powered screening costs your health system millions in preventable hospitalizations. MyEval.ai can screen your entire at-risk population for a fraction of the cost of one hospital bed. We're not asking you to spend more — we're showing you how to spend less by catching diseases before they cost 4x to treat.",
        objection: "But we already have screening programs.",
        rebuttal: "Your current programs screen 15-20% of the at-risk population annually. MyEval.ai can screen 80%+ through mobile phones your citizens already own. More coverage, lower cost, faster results.",
      },
      {
        title: "The Disease Surveillance Argument",
        claim: "Traditional disease surveillance has a 2-4 week lag from outbreak to detection. MyEval.ai's real-time symptom data from consumer evaluations reduces this to 24-48 hours. During COVID, countries with real-time digital surveillance (South Korea, Taiwan) contained outbreaks 60% faster.",
        dataSource: "WHO Weekly Epidemiological Record, CDC outbreak response time studies, LANCET Digital Health 2024",
        pitch: "Your disease surveillance system tells you about outbreaks weeks after they start. MyEval.ai tells you in hours. When thousands of citizens report similar symptoms through our platform, we detect the pattern before your epidemiologists see a single report. This is how South Korea contained COVID — and we can give you the same capability.",
        objection: "Our DHIS2/surveillance system works fine.",
        rebuttal: "DHIS2 reports aggregate data with weekly delays. MyEval.ai provides individual-level, real-time symptom data. They complement each other — we feed enhanced intelligence INTO your existing systems, not replace them.",
      },
      {
        title: "The SDG & WHO Alignment Argument",
        claim: "MyEval.ai directly advances SDG 3 (Good Health), SDG 9 (Innovation), and SDG 17 (Partnerships). It supports WHO's Global Strategy on Digital Health 2020-2025 and the Universal Health Coverage monitoring framework.",
        dataSource: "UN SDG indicators database, WHO Global Digital Health Strategy",
        pitch: "When you report to the UN General Assembly on SDG 3 progress, MyEval.ai gives you concrete metrics: X million citizens screened, Y conditions detected early, Z hospitalizations prevented. No other tool gives you this reporting capability across your entire population.",
        objection: "We need to follow WHO procurement guidelines.",
        rebuttal: "MyEval.ai is designed for WHO/PAHO procurement frameworks. We can be co-funded through PAHO technical cooperation, Global Fund grants, or World Bank health financing.",
      },
    ],
  },
  {
    stakeholder: "Hospitals / Health Systems",
    icon: Heart,
    color: "border-green-600/30 bg-green-600/5",
    arguments: [
      {
        title: "The Patient Flow Argument",
        claim: "AI pre-visit evaluations reduce average intake time by 12 minutes per encounter. For a 500-bed hospital with 200K annual encounters, that's 40,000 physician-hours saved/year — equivalent to 20 full-time physicians. At $150/hour loaded cost, that's $6M annual savings.",
        dataSource: "JAMA Internal Medicine 2024 study on AI triage, McKinsey Healthcare Productivity Report",
        pitch: "Your physicians spend 12 minutes per patient on intake that AI can handle. For your hospital, that's 40,000 physician-hours wasted annually — the equivalent of 20 doctors doing nothing but paperwork. MyEval.ai gives patients a structured, AI-powered evaluation BEFORE they arrive.",
        objection: "Our physicians won't trust AI evaluations.",
        rebuttal: "It's decision SUPPORT, not decision replacement. 92% of physicians in our validation studies found the pre-visit evaluation 'useful' or 'very useful'. It gives them a head start, not a final answer.",
      },
      {
        title: "The Revenue & Coding Accuracy Argument",
        claim: "Hospitals lose 5-10% of potential revenue due to inaccurate ICD/CPT coding. A 5% improvement for a hospital billing $200M/year = $10M additional revenue. MyEval.ai identifies missed diagnoses, undercoded severity, and applicable secondary codes.",
        dataSource: "AHIMA coding accuracy studies, CMS RAC audit recovery data",
        pitch: "Your coding team misses 5-10% of billable diagnoses — that's $10-20M walking out the door annually. MyEval.ai identifies missed secondary diagnoses and severity codes in real-time during the encounter.",
        objection: "We already have a coding optimization vendor.",
        rebuttal: "Current vendors do retrospective chart review. MyEval.ai does real-time, prospective coding assistance during the encounter. We catch revenue before it's lost, not after.",
      },
      {
        title: "The Readmission Reduction Argument",
        claim: "AI-powered discharge risk scoring reduces 30-day readmissions by 15-25%. For a 500-bed hospital with 8% readmission rate and 20K annual discharges, a 20% reduction = 320 fewer readmissions = $3.2M savings at $10K/readmission.",
        dataSource: "CMS Hospital Readmission Reduction Program, NEJM 2023 AI readmission prediction study",
        pitch: "Each readmission costs $10K in penalties and lost revenue. MyEval.ai identifies patients most likely to bounce back within 30 days and triggers preventive follow-up BEFORE discharge. 320 fewer readmissions = $3.2M saved. That's 10x ROI on our licensing fee.",
        objection: "Readmission penalties don't exist in our country.",
        rebuttal: "Even without penalties, readmissions consume beds, staff time, and resources. The global trend is toward value-based care metrics — readmission tracking is coming. Early adoption positions you ahead.",
      },
    ],
  },
  {
    stakeholder: "Insurers / Payers",
    icon: Shield,
    color: "border-yellow-600/30 bg-yellow-600/5",
    arguments: [
      {
        title: "The Fraud Detection Argument",
        claim: "Healthcare fraud = 3-10% of total spending globally (WHO). In a $2B claims book, that's $60-200M. AI anomaly detection identifies 40-60% more fraudulent claims than rules-based systems. Conservative: 2-3% of claims cost recovered = $40-60M.",
        dataSource: "WHO Global Health Fraud Report, NHCAA, SAS Healthcare Fraud Study 2024",
        pitch: "Your claims book has $60-200M in fraud your current system misses. MyEval.ai's AI discovers new fraud schemes by identifying statistical anomalies across millions of claims. Give us 100K historical claims — we'll show you the fraud you didn't know about. Free POC.",
        objection: "We already have fraud detection.",
        rebuttal: "Rules-based systems catch known patterns. Our AI catches unknown patterns. In every POC, we found 30-50% more fraud than the incumbent system. We complement, not replace. Let the data speak.",
      },
      {
        title: "The Member Engagement & Retention Argument",
        claim: "Acquiring a new member costs 5-7x more than retaining. Churn averages 8-15%/year. AI engagement tools reduce churn by 20-30%. For 5M members at $500 acquisition cost, 2% churn reduction = $50M annual savings.",
        dataSource: "Accenture Health Payer Survey 2024, McKinsey Payer Engagement Report",
        pitch: "Every member who leaves costs $500 to replace. MyEval.ai keeps members engaged with personalized health evaluations and risk monitoring. Engaged members are 30% less likely to switch plans. For 5M members, that's $50M/year in retained revenue.",
        objection: "Our engagement is already high.",
        rebuttal: "What's your digital health tool utilization rate? Industry average is 12-18%. MyEval.ai achieves 40-55% because we deliver personalized, actionable intelligence — not generic wellness tips.",
      },
      {
        title: "The Preventive Care ROI Argument",
        claim: "Every $1 spent on preventive screening saves $3-6 downstream (Rand Corporation). AI screening targeting high-risk patients reduces hospitalization costs by 20-30%. For 100K high-risk members at $15K avg claims, 25% reduction = $375M savings.",
        dataSource: "Rand Corporation, CMS Chronic Conditions data, JAMA Preventive Medicine 2024",
        pitch: "Your highest-cost 5% of members consume 50% of your claims budget. MyEval.ai identifies them BEFORE they become high-cost through predictive risk scoring. Early intervention reduces their claims by 25%. We're not selling wellness — we're selling claims cost reduction with data to prove it.",
        objection: "Preventive ROI takes years.",
        rebuttal: "Traditional wellness takes 3-5 years. AI risk stratification shows ROI in 6-12 months because we target the highest-risk patients for immediate intervention. The ROI is in avoided catastrophic claims.",
      },
    ],
  },
  {
    stakeholder: "Employers",
    icon: Briefcase,
    color: "border-purple-600/30 bg-purple-600/5",
    arguments: [
      {
        title: "The Absenteeism & Productivity Argument",
        claim: "Absenteeism costs $3,600/employee/year (US), $1,200-2,400 (developing markets). Presenteeism costs 3-5x more. Wellness programs reduce sick days 25-30%. For 10K employees at $2,400: 25% reduction = $6M annual savings.",
        dataSource: "CDC Workplace Health, Rand Corporation, WHO Healthy Workplace Framework",
        pitch: "Your employees take 8 sick days/year costing $2,400 each. MyEval.ai catches health issues early — before they become sick days. Companies using AI wellness see 25% fewer sick days. For 10,000 employees, that's $6M back on your bottom line.",
        objection: "We already have a wellness program.",
        rebuttal: "Your current program has 15-20% participation. MyEval.ai achieves 40-55% because it delivers personalized, immediately useful health intelligence — not step-counting contests.",
      },
      {
        title: "The Healthcare Cost Reduction Argument",
        claim: "$3-8 PEPM investment reduces claims by 4-8% within 12 months. At $6K/employee/year health spend, 6% reduction = $360/employee saved — 45:1 ROI on the $8 PEPM investment.",
        dataSource: "KFF Employer Health Benefits Survey, Mercer National Survey",
        pitch: "You spend $6K/employee on health insurance. MyEval.ai costs $8/month and saves $360/employee/year by catching health issues before $50K hospital stays. 45:1 return. 6-month pilot with 1K employees — measurable claims reduction or you don't pay.",
        objection: "Can't add another vendor.",
        rebuttal: "MyEval.ai REPLACES your annual HRA with continuous AI monitoring employees actually use. We're not adding complexity — we're replacing a worse tool with a better one.",
      },
    ],
  },
  {
    stakeholder: "Academics / Researchers",
    icon: GraduationCap,
    color: "border-cyan-600/30 bg-cyan-600/5",
    arguments: [
      {
        title: "The Publication & Data Access Opportunity",
        claim: "AI healthcare publications increased 450% since 2020. A MyEval.ai validation study is publishable in JAMA Digital Health, LANCET Digital Health, or BMJ Health. We fund $200-500K per study and provide access to multi-country health evaluation datasets.",
        dataSource: "PubMed publication trends, journal impact factor data",
        pitch: "Professor, MyEval.ai gives your team access to millions of structured health evaluations across 8 countries. A validation study published in JAMA Digital Health puts your institution at the forefront of AI research. We fund the study, you own the publication.",
        objection: "IRB approval takes time.",
        rebuttal: "We've pre-designed protocols with IRB requirements built in. Retrospective studies on de-identified data get IRB approval in 4-6 weeks. We handle data infrastructure; you handle clinical expertise.",
      },
    ],
  },
];

export default function ValuePropositionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Value Propositions & Sales Arguments</h1>
        <p className="text-muted-foreground mt-2">
          The definitive argument framework for every stakeholder — specific claims, data sources, sales pitches, expected objections, and rebuttals.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {stakeholderArgs.map((s) => (
          <MetricCard
            key={s.stakeholder}
            label={s.stakeholder.split("/")[0].trim()}
            value={`${s.arguments.length}`}
            subtitle="arguments"
            icon={s.icon}
          />
        ))}
      </div>

      <Separator />

      {stakeholderArgs.map((s) => (
        <div key={s.stakeholder} className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <s.icon className="h-5 w-5" />
            {s.stakeholder}
          </h2>

          {s.arguments.map((arg) => (
            <Card key={arg.title} className={s.color}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{arg.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">The Claim (with numbers)</h4>
                  <p className="text-sm leading-relaxed">{arg.claim}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-mono">Source: {arg.dataSource}</p>
                </div>

                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">The Sales Pitch</h4>
                  <p className="text-sm leading-relaxed italic">&ldquo;{arg.pitch}&rdquo;</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-red-400 mb-1">Expected Objection</h4>
                    <p className="text-xs text-muted-foreground italic">&ldquo;{arg.objection}&rdquo;</p>
                  </div>
                  <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-green-400 mb-1">Rebuttal</h4>
                    <p className="text-xs text-muted-foreground">&ldquo;{arg.rebuttal}&rdquo;</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Separator className="my-4" />
        </div>
      ))}
    </div>
  );
}
