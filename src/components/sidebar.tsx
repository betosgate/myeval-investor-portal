"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Globe,
  DollarSign,
  Users,
  CalendarClock,
  Target,
  TrendingUp,
  Building2,
  BarChart3,
  MapPin,
  Plug,
  MapPinned,
  Megaphone,
  Handshake,
  Receipt,
  Swords,
  AlertOctagon,
  Crown,
  Radio,
  Network,
  ClipboardList,
  HandHeart,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/dashboard", label: "Executive Summary", icon: LayoutDashboard },
  { href: "/dashboard/humanitarian-impact", label: "Humanitarian Impact", icon: HandHeart },
  { href: "/dashboard/countries", label: "Global Markets", icon: Globe },
  { href: "/dashboard/countries/vietnam", label: "Vietnam", icon: MapPin, indent: true },
  { href: "/dashboard/countries/india", label: "India", icon: MapPin, indent: true },
  { href: "/dashboard/countries/bangladesh", label: "Bangladesh", icon: MapPin, indent: true },
  { href: "/dashboard/countries/thailand", label: "Thailand", icon: MapPin, indent: true },
  { href: "/dashboard/countries/philippines", label: "Philippines", icon: MapPin, indent: true },
  { href: "/dashboard/countries/colombia", label: "Colombia", icon: MapPin, indent: true },
  { href: "/dashboard/countries/brazil", label: "Brazil", icon: MapPin, indent: true },
  { href: "/dashboard/countries/argentina", label: "Argentina", icon: MapPin, indent: true },
  { href: "/dashboard/countries/bolivia", label: "Bolivia", icon: MapPin, indent: true },
  { href: "/dashboard/revenue", label: "Revenue Model", icon: DollarSign },
  { href: "/dashboard/financials", label: "Financial Projections", icon: TrendingUp },
  { href: "/dashboard/staffing", label: "Team & Staffing", icon: Users },
  { href: "/dashboard/org-infrastructure", label: "Org Infrastructure", icon: Network },
  { href: "/dashboard/role-definitions", label: "Role Definitions", icon: ClipboardList },
  { href: "/dashboard/timeline", label: "Launch Timeline", icon: CalendarClock },
  { href: "/dashboard/integration-strategy", label: "API & Integration", icon: Plug },
  { href: "/dashboard/ground-operations", label: "Ground Operations", icon: MapPinned },
  { href: "/dashboard/outreach-playbook", label: "Outreach Playbook", icon: Megaphone },
  { href: "/dashboard/value-propositions", label: "Value Propositions", icon: Handshake },
  { href: "/dashboard/execution-protocol", label: "Execution Protocol", icon: Radio },
  { href: "/dashboard/operational-costs", label: "Operational Costs", icon: Receipt },
  { href: "/dashboard/competitive-analysis", label: "Competitive Analysis", icon: Swords },
  { href: "/dashboard/risk-matrix", label: "Risk Matrix", icon: AlertOctagon },
  { href: "/dashboard/governance", label: "Governance & IP", icon: Crown },
  { href: "/dashboard/us-market", label: "US Market (WebMD)", icon: Target },
  { href: "/dashboard/fund-allocation", label: "Fund Allocation", icon: BarChart3 },
  { href: "/dashboard/why-myeval", label: "Why MyEval.ai", icon: Building2 },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} className="lg:hidden fixed top-4 left-4 z-[60] h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center">
        <span className="text-foreground text-lg">{open ? "\u2715" : "\u2630"}</span>
      </button>
      {open && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />}
    <aside className={cn("fixed left-0 top-0 h-screen w-64 border-r border-border bg-card flex flex-col z-50 transition-transform lg:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}>
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-mono">M</span>
          </div>
          <div>
            <h1 className="font-semibold text-sm tracking-tight">MyEval.ai</h1>
            <p className="text-[10px] text-muted-foreground font-mono">INVESTOR PORTAL</p>
          </div>
        </Link>
      </div>
      <Separator />
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === "/dashboard" && pathname === "/dashboard");
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                  item.indent && "pl-8",
                  isActive
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
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
        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs font-medium">$50M Fund</p>
          <p className="text-[10px] text-muted-foreground mt-1">
            9 Countries &middot; 24-Month Plan
          </p>
          <p className="text-[10px] text-muted-foreground">
            Target: 20M users &middot; $97M+ revenue
          </p>
        </div>
      </div>
    </aside>
    </>
  );
}
