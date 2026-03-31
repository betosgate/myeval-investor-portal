"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard, TrendingUp, Factory, Heart, AlertTriangle,
  Cpu, Building2, Globe, Landmark, FileText, Target,
  Users, Plane, Cloud, Scale,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/philippines-report", label: "Executive Brief", icon: LayoutDashboard },
  { href: "/philippines-report/macro-economy", label: "Macro Economy", icon: TrendingUp },
  { href: "/philippines-report/sectors", label: "Key Sectors", icon: Factory },
  { href: "/philippines-report/healthcare", label: "Healthcare Deep Dive", icon: Heart },
  { href: "/philippines-report/digital-economy", label: "Digital Economy", icon: Cpu },
  { href: "/philippines-report/infrastructure", label: "Infrastructure", icon: Building2 },
  { href: "/philippines-report/ofw-economy", label: "OFW & Remittances", icon: Plane },
  { href: "/philippines-report/challenges", label: "Critical Challenges", icon: AlertTriangle },
  { href: "/philippines-report/brain-drain", label: "Brain Drain Solutions", icon: Users },
  { href: "/philippines-report/climate-resilience", label: "Climate Resilience", icon: Cloud },
  { href: "/philippines-report/geopolitics", label: "Geopolitics & Security", icon: Globe },
  { href: "/philippines-report/transformation-models", label: "Transformation Models", icon: Landmark },
  { href: "/philippines-report/policy-recommendations", label: "Policy Recommendations", icon: FileText },
  { href: "/philippines-report/investment-opportunities", label: "Investment Opportunities", icon: Target },
  { href: "/philippines-report/campaign-strategy", label: "Campaign & Activation", icon: Scale },
];

export function PhilippinesSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="lg:hidden fixed top-4 left-4 z-[60] h-10 w-10 rounded-lg bg-white border border-border flex items-center justify-center">
        <span className="text-foreground text-lg">{open ? "\u2715" : "\u2630"}</span>
      </button>
      {open && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />}
    <aside className={cn("fixed left-0 top-0 h-screen w-72 border-r border-border bg-white flex flex-col z-50 transition-transform lg:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}>
      <div className="p-6">
        <Link href="/philippines-report" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">PH</span>
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight">Philippines</h1>
            <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Economic Strategy Report</p>
          </div>
        </Link>
      </div>
      <Separator />
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium border border-blue-200"
                    : "text-muted-foreground hover:text-foreground hover:bg-gray-50"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <Separator />
      <div className="p-4">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-3">
          <p className="text-xs font-semibold text-blue-700">Confidential Briefing</p>
          <p className="text-[10px] text-blue-600/70 mt-1">
            Prepared for senior government officials
          </p>
          <p className="text-[10px] text-blue-600/70">
            14 sections &middot; 117M people &middot; $480B economy
          </p>
        </div>
        <div className="mt-3 text-center space-y-1">
          <p className="text-[10px] text-muted-foreground">Presented by <span className="font-semibold text-foreground">Tom Langland</span></p>
          <p className="text-[10px] text-muted-foreground">Developed by <span className="font-semibold text-foreground">Beto Paredes</span></p>
        </div>
      </div>
    </aside>
    </>
  );
}
