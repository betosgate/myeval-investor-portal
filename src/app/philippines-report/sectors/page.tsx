import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Factory } from "lucide-react";
import { keySectors } from "@/lib/data/philippines-economy";

export default function SectorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-green-100 text-green-700 border-green-300 mb-3">SECTOR ANALYSIS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Key Economic Sectors</h1>
        <p className="text-muted-foreground mt-2">10 sectors powering a $480B economy — from BPO ($32.5B) to agriculture (10% GDP, 24% of jobs). Each analyzed for challenges, opportunities, and investment impact.</p>
      </div>
      {keySectors.map((s) => (
        <Card key={s.name}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center justify-between">
              <span>{s.name}</span>
              <div className="flex gap-2"><Badge variant="outline" className="font-mono text-xs">{s.size}</Badge><Badge className="bg-primary/20 text-primary text-xs">Impact: {s.impactScore}/10</Badge></div>
            </CardTitle>
            <div className="flex gap-4 text-xs text-muted-foreground"><span>Employment: {s.employment}</span><span>Growth: {s.growth}</span></div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div><h4 className="text-xs font-semibold text-red-600 mb-1">Challenges</h4>{s.challenges.map(c=>(<p key={c} className="text-xs text-muted-foreground flex items-start gap-1 mb-1"><AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-red-500"/>{c}</p>))}</div>
              <div><h4 className="text-xs font-semibold text-green-700 mb-1">Opportunities</h4>{s.opportunities.map(o=>(<p key={o} className="text-xs text-muted-foreground flex items-start gap-1 mb-1"><CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-green-600"/>{o}</p>))}</div>
            </div>
            <div className="flex flex-wrap gap-1 mt-3">{s.keyPlayers.map(p=>(<Badge key={p} variant="secondary" className="text-[10px]">{p}</Badge>))}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
