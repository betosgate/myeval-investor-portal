import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/metric-card";
import { Cpu, Users, DollarSign, TrendingUp } from "lucide-react";

export default function DigitalEconomyPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-purple-100 text-purple-700 border-purple-300 mb-3">DIGITAL TRANSFORMATION</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Digital Economy</h1>
        <p className="text-muted-foreground mt-2">GCash (94M users), BPO ($38B), e-commerce ($22B), 10 hours/day average internet. The Philippines is a digital-first economy in a developing-country wrapper.</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <MetricCard label="Internet Economy" value="$28B" subtitle="Google/Temasek/Bain 2025" icon={Cpu} />
        <MetricCard label="GCash Users" value="94M" subtitle="89% mobile wallet share" icon={Users} />
        <MetricCard label="BPO Revenue" value="$38B" subtitle="1.82M employees" icon={DollarSign} />
        <MetricCard label="E-Commerce" value="$22B" subtitle="13.6% CAGR" icon={TrendingUp} />
      </div>
      {[
        { title: "GCash — The Super-App Phenomenon", stats: ["94M registered, 81M active (Jan 2025)", "$65B annual transaction volume (PHP 3.8T)", "89% mobile wallet market share", "2.5M merchants and sellers", "Valuation: $5B (Aug 2024, MUFG investment)", "IPO target: $8B+ by end 2025"], desc: "Perhaps the most successful fintech in Southeast Asia. GCash demonstrates that the Philippines can leapfrog traditional banking entirely. 60% of adults now use digital wallets." },
        { title: "BPO / IT-BPM — The Crown Jewel", stats: ["$38B revenue (2024), 7% growth", "1.82M direct employees", "Target: $59B by 2028 (IBPAP Roadmap)", "Voice/contact centers: 83% ($31.6B)", "Healthcare BPO: $4.2B, 190K employees", "AI threat to voice = AI opportunity for KPO"], desc: "World's #1 voice BPO destination. English fluency + cultural affinity with US = durable competitive moat. The question isn't whether BPO will be disrupted by AI — it's whether the Philippines captures the AI services market." },
        { title: "E-Commerce", stats: ["$17.65B market (2025), projected $37.95B by 2031", "Shopee: market leader (~52% share)", "TikTok Shop: fastest growing, 19% share, doubled GMV YoY", "Lazada: first monthly profit July 2024", "Social commerce (FB/IG selling): additional $5-10B informally", "Cash-on-delivery still 40-50% of transactions"], desc: "Still early: 73% internet but logistics gaps (archipelago) and low card penetration slow growth. Live selling is a Filipino innovation — watch this space." },
        { title: "Digital Banking & Fintech", stats: ["6 digital bank licenses issued by BSP", "GoTyme: 5M+ customers (fastest growing)", "Tonik: first digital-only bank, 1M+ customers", "44% of adults still unbanked or underbanked", "Digital payments: ~50% of retail transactions (from 20% in 2018)", "BSP target: 70% financial inclusion"], desc: "The BSP under former Governor Diokno drove one of the most progressive digital banking agendas in Asia. Open Finance Framework launching. The next frontier: credit scoring for the unbanked using AI and alternative data." },
        { title: "Data Centers — Emerging ASEAN Hub", stats: ["Market: $633M (2024) → $1.97B (2030), 20.89% CAGR", "IT load capacity: 520 MW → 1,680 MW by 2031", "STT Fairview: 124 MW (Q2 2025 opening)", "PLDT VITRO: first AI-ready hyperscale data center", "8 trans-Pacific submarine cables landing by 2025", "International capacity: 60 Tbps → 130+ Tbps"], desc: "Five US data center providers evaluating Philippine sites. Undersea cable investments transforming connectivity. The Philippines is emerging as an ASEAN data center hub." },
      ].map((section) => (
        <Card key={section.title}>
          <CardHeader><CardTitle className="text-base">{section.title}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{section.desc}</p>
            <div className="grid grid-cols-2 gap-1">{section.stats.map(s => (<p key={s} className="text-xs text-muted-foreground bg-muted/30 rounded p-1.5">&bull; {s}</p>))}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
