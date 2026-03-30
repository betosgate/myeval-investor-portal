import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Megaphone, ArrowRight, Target, Zap } from "lucide-react";
import { groundOps } from "@/lib/data/ground-ops";

export default function OutreachPlaybookPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Outreach Playbook</h1>
        <p className="text-muted-foreground mt-2">
          The exact sequence of who to contact, how to approach them, what to say, and how each win compounds into the next. This is the domino strategy for each market.
        </p>
      </div>

      <Card className="border-green-600/30 bg-green-600/5">
        <CardContent className="p-4">
          <h3 className="font-semibold text-sm">The Domino Principle</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Every outreach sequence is designed so that each win creates leverage for the next. Private sector wins (hospitals, insurers) validate the product. Validation wins government trust. Government endorsement unlocks the entire market. The sequence matters — skip a step and the dominoes don&apos;t fall.
          </p>
        </CardContent>
      </Card>

      {groundOps.map((ops) => (
        <div key={ops.country} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Megaphone className="h-6 w-6" />
            {ops.country} — Outreach Sequence
          </h2>

          <div className="space-y-4">
            {ops.outreachSequence.map((step, i) => (
              <Card key={step.order}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">{step.order}</span>
                    </div>
                    <div>
                      <p>{step.target}</p>
                      <p className="text-xs text-muted-foreground font-normal">{step.timeline}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 ml-11">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Target className="h-3 w-3" /> How to Approach
                    </h4>
                    <p className="text-sm text-muted-foreground">{step.approach}</p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Pitch</h4>
                    <p className="text-sm leading-relaxed">{step.pitch}</p>
                  </div>

                  <div className="flex items-start gap-2 bg-green-600/5 border border-green-600/20 rounded-lg p-3">
                    <Zap className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-green-400">Domino Effect</h4>
                      <p className="text-xs text-muted-foreground mt-1">{step.dominoEffect}</p>
                    </div>
                  </div>

                  {i < ops.outreachSequence.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-6" />
        </div>
      ))}
    </div>
  );
}
