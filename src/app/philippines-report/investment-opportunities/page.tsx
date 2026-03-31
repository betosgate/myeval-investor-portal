import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target } from "lucide-react";
import { investmentOpportunities } from "@/lib/data/philippines-economy";

export default function InvestmentOpportunitiesPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-rose-100 text-rose-700 border-rose-300 mb-3">ACTIONABLE INTELLIGENCE</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Top 10 Investment Opportunities</h1>
        <p className="text-muted-foreground mt-2">Ranked by impact potential, market gap, and timing advantage. Total addressable market: $50B+ across all opportunities.</p>
      </div>
      {investmentOpportunities.map(opp => (
        <Card key={opp.rank} className={opp.rank === 1 ? "border-primary bg-primary/5" : ""}>
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0"><span className="font-bold text-primary font-mono">#{opp.rank}</span></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold">{opp.sector}</h3>
                  <div className="flex gap-2"><Badge variant="outline" className="font-mono text-xs">{opp.marketSize}</Badge><Badge className="bg-green-100 text-green-800 text-xs">Growth: {opp.growth}</Badge></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div><h4 className="text-xs font-semibold text-red-600 mb-1">The Gap</h4><p className="text-xs text-muted-foreground">{opp.gap}</p></div>
                  <div><h4 className="text-xs font-semibold text-green-700 mb-1">Why Now</h4><p className="text-xs text-muted-foreground">{opp.whyNow}</p></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Card className="border-primary bg-primary/5"><CardContent className="p-6 text-center">
        <h3 className="font-bold text-lg mb-2">The Common Thread</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">AI is the single biggest lever across all 10 opportunities — healthcare diagnostics, education tutoring, BPO augmentation, agricultural advisory, climate prediction, and financial credit scoring. The Philippines&apos; unique combination of English fluency, BPO process discipline, and massive underserved populations makes it the ideal market for AI-powered solutions at scale.</p>
      </CardContent></Card>
    </div>
  );
}
