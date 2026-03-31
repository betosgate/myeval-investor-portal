import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users, Cpu, DollarSign, Globe, Building2, GraduationCap, Plane, Heart, CheckCircle, AlertTriangle } from "lucide-react";

const solutions = [
  {
    icon: Cpu, title: "Solution 1: AI as Force Multiplier for Remaining Workers",
    problem: "1.2 doctors per 10K and falling. Can't train enough to replace those who leave. Traditional solution (build medical schools) takes 10+ years.",
    solution: "Deploy FDA-cleared AI diagnostics in 2,500 Rural Health Units: Qure.ai qXR for TB ($2-5/screening, 95-98% sensitivity), EyeArt for diabetic retinopathy ($15-30/screening), Butterfly iQ+ handheld ultrasound ($2,500/unit) for midwives. Each tool works OFFLINE with edge deployment. Training: 3-5 days for community health workers.",
    impact: "One doctor with AI tools serves the patient volume of 5 doctors without them. Equivalent of adding 6,000+ virtual doctors to the system. Cost per RHU: $45-90K Year 1, $8-15K/year recurring. For 2,500 priority RHUs: $112-225M (PHP 6-12B). Fundable through DOH budget + PhilHealth reserves + ODA.",
    example: "Rwanda deployed 45,000 community health workers with mobile tools. Life expectancy went from 28 to 69 years. Philippines has 97,000 barangay health workers — the distribution network already exists.",
    budget: "$112-225M initial + $20-38M/year"
  },
  {
    icon: DollarSign, title: "Solution 2: Make Government Salaries Competitive",
    problem: "Government nurse: PHP 27-30K/month ($500). UK nurse: PHP 150-250K equivalent ($3,500). US nurse: PHP 200-400K equivalent ($5,500). You cannot close a 10x gap with patriotic appeals.",
    solution: "Emergency Health Professional Allowance: PHP 15-25K/month on top of base for underserved areas. New salary scale: nurses SG 19-22 (from SG 11-15), physicians SG 24-26. Target entry-level: PHP 50-60K/month. 50 Regional Centers of Health Excellence with modern equipment become ATTRACTIVE workplaces.",
    impact: "45,000 nurses x PHP 27,500/month increase x 12 = PHP 14.85B/year ($270M). This is 5-7% of DOH budget. PhilHealth's PHP 500B reserve fund could cover this for 30+ years. The government spent PHP 580B on COVID response — this is a fraction of that.",
    example: "Thailand: mandatory 3-year rural service + 2-3x urban salary for rural posts. Result: relatively good rural physician distribution. Ireland: pay restoration post-austerity brought nurses back from Australia and UK.",
    budget: "PHP 50-60B/year ($900M-$1.1B)"
  },
  {
    icon: Building2, title: "Solution 3: Create Health-Tech Jobs That Compete with Emigration",
    problem: "The salary gap drives emigration. But health-tech creates NEW job categories that don't exist yet — at salaries that compete with BPO senior roles.",
    solution: "Build a health-tech sector: AI health engineers ($2-4K/mo), clinical data scientists ($2.5-4K/mo), telemedicine coordinators ($1.5-2.5K/mo), health informatics specialists ($2-3K/mo), digital health project managers ($3-5K/mo). These roles combine healthcare knowledge with technology skills — uniquely Filipino.",
    impact: "If health-tech grows to 50,000 Philippine jobs at average $2,500/month, that's $1.5B in retained domestic salary. The BPO playbook (which retained 1.7M workers from emigrating) can be replicated. MyEval.ai alone creates 25+ PH jobs by Year 2. 10 similar companies = 250+ jobs. 100 companies = 2,500+.",
    example: "India's health-tech sector employs 200K+ people. Philippines can capture a significant share of the $300B global health IT market through the English + nursing expertise combination no other country has.",
    budget: "Tax incentives for health-tech companies: PHP 5-8B/year in foregone revenue"
  },
  {
    icon: Globe, title: "Solution 4: OFW Family Health Monitoring",
    problem: "10M+ OFWs separated from families. Primary concern: family health. Families delay seeking care because breadwinner is abroad and can't coordinate.",
    solution: "AI health platform where: OFW in Saudi opens app → sees family's latest health evaluations → gets alert when mother's blood pressure risk score increases → coordinates telemedicine appointment → pays via GCash Remit. Distribution: OWWA registration + GCash Remit + DMW partnerships.",
    impact: "30M+ family members gain health monitoring. OFW remittances include $5B+ in health spending — platform optimizes how money is spent. Revenue model: $3-5/family/month subscription. TAM: 10M OFW families x $48/year = $480M annual market.",
    example: "No comparable product exists globally for migrant worker family health monitoring. This is a blue ocean. First mover captures the entire market.",
    budget: "Private sector funded (subscription model). Government role: OWWA integration + DMW promotion."
  },
  {
    icon: GraduationCap, title: "Solution 5: TESDA Community Health Worker Pipeline",
    problem: "Medical schools produce 3K doctors/year but 2K+ leave. Traditional pipeline can't keep up. Need a parallel workforce that can be trained in months, not years.",
    solution: "TESDA trains 100,000 community health workers in AI-assisted screening (3-5 day training for TB AI, 5-10 days for ultrasound, 1-2 days for retinal camera). New National Certificates: NC II in AI-Assisted Health Screening, NC II in Community Telemedicine Operations. Workers earn PHP 15-25K/month — above minimum wage, with career pathway.",
    impact: "Philippines has 97,000 barangay health workers with limited diagnostic capability. Equip them with AI tools = instant distributed health system without building new infrastructure. Bangladesh BRAC model: 97K workers screening 500K patients/month. Cost: $12/child for Pratham TaRL model, adaptable to health.",
    example: "Ethiopia: 40,000 Health Extension Workers. Rwanda: 45,000 CHWs covering every village. Philippines: 97,000 already exist — just equip and train them.",
    budget: "PHP 5-8B for training + equipment ($90-145M)"
  },
  {
    icon: Plane, title: "Solution 6: Return Migration via Health-Tech Ecosystem",
    problem: "200K+ Filipino healthcare workers in US/UK have world-class skills but no high-quality career path to return to. Coming home means a 5-10x pay cut.",
    solution: "'Return to Serve' program: 5-year commitment to government health service = PHP 500K tax-free repatriation bonus + PHP 1.5M housing assistance + fast-tracked specialization training + guaranteed SG 24+ salary. PLUS health-tech bridge roles: clinical informatics directors ($3-5K/mo), AI training specialists ($2.5-4K/mo), telemedicine physicians ($3-5K/mo) — not US-level but 5-8x above domestic clinical salary.",
    impact: "Ireland's post-austerity return migration: ~15% of emigrated healthcare workers returned when conditions improved. Applied to Philippines: 5% of 200K+ overseas workers = 10,000+ experienced professionals with international training and perspective re-entering the system.",
    example: "Ireland (2014-2019): pay restoration + improved conditions brought thousands of nurses back from Australia and UK. The Philippines needs the same — salary competitiveness is necessary but not sufficient. Working conditions (modern equipment, manageable patient loads, career paths) matter equally.",
    budget: "PHP 3-5B/year for Return to Serve program ($55-90M)"
  },
];

export default function BrainDrainPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-teal-100 text-teal-700 border-teal-300 mb-3">CRITICAL INTERVENTION</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Brain Drain Solutions</h1>
        <p className="text-muted-foreground mt-2">60,000+ healthcare workers leave annually. 6 actionable solutions with specific budgets, implementation plans, country examples, and expected outcomes. This is not a wish list — it is an engineering problem with an engineering solution.</p>
      </div>

      <Card className="border-red-200 bg-red-50/30">
        <CardContent className="p-5">
          <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2"><AlertTriangle className="h-5 w-5" /> The Scale of the Crisis</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            {[
              { v: "35-50K", l: "Nurses leaving annually" },
              { v: "3-5K", l: "Doctors leaving annually" },
              { v: "40-60%", l: "Government hospital vacancy rate" },
              { v: "127K", l: "Nurse shortage nationally" },
            ].map((m) => (
              <div key={m.l} className="bg-white rounded-lg p-3 border text-center">
                <p className="text-xl font-mono font-bold text-red-600">{m.v}</p>
                <p className="text-xs text-muted-foreground">{m.l}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Government nurse salary: <span className="font-mono">PHP 27-30K/mo ($500)</span>. UK: <span className="font-mono">$3,500/mo</span>. US: <span className="font-mono">$5,500/mo</span>. The salary gap is 7-10x. Every year the Philippines invests <span className="font-semibold">PHP 5-8M per doctor</span> in public medical education — then exports them for free. It costs $270M/year to make salaries competitive. The government spent $10B on COVID response.</p>
        </CardContent>
      </Card>

      <Separator />

      {solutions.map((s, i) => (
        <Card key={s.title}>
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="font-bold">{s.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                    <h4 className="text-xs font-semibold text-red-700 mb-1">The Problem</h4>
                    <p className="text-xs text-muted-foreground">{s.problem}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <h4 className="text-xs font-semibold text-blue-700 mb-1">The Solution</h4>
                    <p className="text-xs text-muted-foreground">{s.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <h4 className="text-xs font-semibold text-green-700 mb-1">Impact & Cost</h4>
                    <p className="text-xs text-muted-foreground">{s.impact}</p>
                    <p className="text-xs font-mono font-semibold mt-1 text-primary">{s.budget}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200 col-span-1 sm:col-span-1 lg:col-span-2">
                    <h4 className="text-xs font-semibold text-purple-700 mb-1">Country Example</h4>
                    <p className="text-xs text-muted-foreground">{s.example}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Total Investment */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-5">
          <h3 className="font-bold mb-2">Total Investment Required</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
            {[
              { item: "AI diagnostic stations (2,500 RHUs)", cost: "$112-225M initial" },
              { item: "Salary competitiveness (45K nurses)", cost: "PHP 14.85B/yr ($270M)" },
              { item: "50 Regional Centers of Excellence", cost: "PHP 8-12B/yr ($145-220M)" },
              { item: "Health-tech sector incentives", cost: "PHP 5-8B/yr ($90-145M)" },
              { item: "TESDA health worker training", cost: "PHP 5-8B ($90-145M)" },
              { item: "Return to Serve program", cost: "PHP 3-5B/yr ($55-90M)" },
            ].map((c) => (
              <div key={c.item} className="flex justify-between bg-white rounded p-2 border">
                <span className="text-muted-foreground">{c.item}</span>
                <span className="font-mono font-semibold">{c.cost}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Total: <span className="font-mono font-bold text-primary">~$700M-$1B/year</span>. This sounds large until you realize that the Philippines loses $1.5-2B/year in training investment when healthcare workers emigrate, and spends $24.5B/year on Manila traffic. Fixing the brain drain is one of the highest-ROI investments in Philippine development.</p>
        </CardContent>
      </Card>
    </div>
  );
}
