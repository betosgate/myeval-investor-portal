import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Cpu, DollarSign, Globe, Building2, GraduationCap, Plane } from "lucide-react";

const solutions = [
  { icon: Cpu, title: "AI as Force Multiplier for Remaining Workers", problem: "1.2 doctors/10K and falling. Can't train fast enough.", solution: "AI screening makes every doctor 5-10x more effective. Pre-evaluated patients with risk scores means doctors start with intelligence, not blank forms.", impact: "Equivalent of adding 6,000+ virtual doctors. Buys time while training pipeline catches up." },
  { icon: DollarSign, title: "Create Health-Tech Jobs That Compete with Emigration", problem: "Nurses: PHP 33K/mo domestic vs PHP 250K/mo abroad. 10x gap.", solution: "Build health-tech sector: AI engineers, clinical data scientists, telemedicine coordinators paying $2-4K/mo (competitive with BPO senior roles). MyEval.ai creates 25+ PH jobs by Year 2.", impact: "50K health-tech jobs at $2.5K/mo = $1.5B in retained salary vs emigration. Replicate the BPO playbook." },
  { icon: Globe, title: "OFW Family Health Monitoring", problem: "10M+ OFWs separated from families. Can't monitor health. Families delay care.", solution: "AI health platform lets OFWs abroad monitor family evaluations in real-time, get alerts, coordinate care remotely. Turns brain drain into digital health bridge.", impact: "30M+ OFW family members gain health monitoring. $5B/yr in OFW health spending optimized." },
  { icon: Building2, title: "Telemedicine for 7,641 Islands", problem: "65% of specialists in Manila. Provinces: travel hours/days for evaluation.", solution: "AI screening at barangay level triages patients. Only urgent cases travel to Manila. Telemedicine connects 1,000+ hubs to specialists.", impact: "Reduce unnecessary referrals 30-40%. Save patients $150-300/trip. $75-150M in travel savings." },
  { icon: GraduationCap, title: "TESDA Training Pipeline — Community Health Workers", problem: "PISA near bottom. Medical schools produce 3K doctors/yr but 2K+ leave.", solution: "TESDA trains 100K community health workers using AI screening tools. Distributed health workforce fills the gap while medical schools scale.", impact: "Bangladesh BRAC model adapted for PH. 97K barangay health workers equipped with AI = instant rural coverage." },
  { icon: Plane, title: "Return Migration via Health-Tech Ecosystem", problem: "200K+ Filipino healthcare workers in US/UK have world-class skills but no high-quality return path.", solution: "Health-tech roles: clinical informatics directors, AI training specialists, telemedicine physicians. $3-5K/mo — not US-level but 5-8x above domestic clinical salary.", impact: "5% of overseas workers attracted back = 10K experienced professionals with international training." },
];

export default function BrainDrainPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-teal-100 text-teal-700 border-teal-300 mb-3">CRITICAL INTERVENTION</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Brain Drain Solutions</h1>
        <p className="text-muted-foreground mt-2">60,000+ healthcare workers leave annually. 6 actionable solutions that use AI and technology to reverse the drain — not with patriotic appeals, but with economics.</p>
      </div>
      <Card className="border-red-200 bg-red-50/30"><CardContent className="p-5 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground mb-2">The Numbers:</p>
        <p>60K nurses and doctors leave every year. Government nurses earn <span className="font-mono">PHP 33,000/mo</span> vs UK equivalent <span className="font-mono">PHP 250,000/mo</span>. Public hospitals at 40-60% vacancy. Nurse shortage: 127,000. Doctor shortage: 40,000. You cannot close a 10x salary gap with appeals to patriotism. You close it with economics.</p>
      </CardContent></Card>
      {solutions.map(s => (
        <Card key={s.title}>
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><s.icon className="h-5 w-5 text-primary" /></div>
              <div className="space-y-2 flex-1">
                <h3 className="font-bold">{s.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-red-50 rounded-lg p-3 border border-red-100"><h4 className="text-xs font-semibold text-red-700 mb-1">Problem</h4><p className="text-xs text-muted-foreground">{s.problem}</p></div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100"><h4 className="text-xs font-semibold text-blue-700 mb-1">Solution</h4><p className="text-xs text-muted-foreground">{s.solution}</p></div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-100"><h4 className="text-xs font-semibold text-green-700 mb-1">Impact</h4><p className="text-xs text-muted-foreground">{s.impact}</p></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
