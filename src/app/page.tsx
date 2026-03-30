import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  ExternalLink,
  BarChart3,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-green-600/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/3 blur-[100px]" />
      </div>

      {/* Top Bar */}
      <header className="relative z-10 flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-bold text-lg font-mono">M</span>
          </div>
          <div>
            <h1 className="font-semibold text-lg tracking-tight">MyEval.ai</h1>
            <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Investor Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          CONFIDENTIAL &middot; $50M FUND &middot; MARCH 2026
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-10 pb-20">
        {/* Hero Text */}
        <div className="text-center mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-xs text-muted-foreground">AI-Powered Health Intelligence Platform</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Transforming Healthcare<br />
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Across 8 Nations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            1,063 features. 9 specialized portals. 8 target countries.
            A $50 million fund to bring AI-native health evaluation to 2.1 billion people.
          </p>
        </div>

        {/* Two Big Cards */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Business Plan Card */}
          <Link href="/dashboard" className="group">
            <div className="relative h-[420px] rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-blue-600/5 to-transparent overflow-hidden transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_60px_-12px_rgba(59,130,246,0.3)] hover:scale-[1.02]">
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col p-10">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <BarChart3 className="h-7 w-7 text-blue-400" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold mb-3">Business Plan</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The complete $50M global expansion strategy — financial projections, country-by-country market entry, staffing, org infrastructure, API integrations, outreach playbooks, and operational costs. 31 pages of actionable intelligence.
                  </p>

                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { icon: Globe, label: "8 Countries", sub: "+ US Market" },
                      { icon: TrendingUp, label: "$97.5M", sub: "Year 2 Revenue" },
                      { icon: Shield, label: "31 Pages", sub: "Full Detail" },
                      { icon: Brain, label: "152 Staff", sub: "By Month 24" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/5 rounded-lg p-2.5 text-center">
                        <s.icon className="h-4 w-4 mx-auto text-blue-400 mb-1" />
                        <p className="text-xs font-bold font-mono">{s.label}</p>
                        <p className="text-[10px] text-muted-foreground">{s.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Software Platform Card */}
          <a
            href="https://my-eval-ai-nextjs.vercel.app/features/walkthrough"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative h-[420px] rounded-2xl border border-white/10 bg-gradient-to-br from-green-600/10 via-green-600/5 to-transparent overflow-hidden transition-all duration-500 hover:border-green-400/40 hover:shadow-[0_0_60px_-12px_rgba(34,197,94,0.3)] hover:scale-[1.02]">
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col p-10">
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <Brain className="h-7 w-7 text-green-400" />
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground group-hover:text-green-400 transition-all">
                    <ExternalLink className="h-4 w-4" />
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold mb-3">Software Platform</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The live MyEval.ai platform walkthrough — every role, every feature, every screen documented firsthand. 1,063 features across 9 specialized portals powered by Anthropic&apos;s Claude AI. See the product your investment funds.
                  </p>

                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { icon: Zap, label: "1,063", sub: "Features" },
                      { icon: Shield, label: "9 Portals", sub: "Every Stakeholder" },
                      { icon: Globe, label: "8 Languages", sub: "Built-In" },
                      { icon: TrendingUp, label: "738", sub: "Screenshots" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/5 rounded-lg p-2.5 text-center">
                        <s.icon className="h-4 w-4 mx-auto text-green-400 mb-1" />
                        <p className="text-xs font-bold font-mono">{s.label}</p>
                        <p className="text-[10px] text-muted-foreground">{s.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Bottom line */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Decision-ready healthcare intelligence for <span className="text-foreground font-medium">2.1 billion people</span> across <span className="text-foreground font-medium">8 countries</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            Powered by Anthropic Claude AI &middot; HIPAA Compliant &middot; SOC 2 Type II
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-10 py-6 border-t border-white/5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>&copy; 2026 MyEval.ai. All rights reserved.</span>
          <span className="font-mono">Prepared for qualified investors only</span>
        </div>
      </footer>
    </div>
  );
}
