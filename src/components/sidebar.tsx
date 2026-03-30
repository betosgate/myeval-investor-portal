"use client";

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
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/", label: "Executive Summary", icon: LayoutDashboard },
  { href: "/countries", label: "Global Markets", icon: Globe },
  { href: "/countries/vietnam", label: "Vietnam", icon: MapPin, indent: true },
  { href: "/countries/india", label: "India", icon: MapPin, indent: true },
  { href: "/countries/bangladesh", label: "Bangladesh", icon: MapPin, indent: true },
  { href: "/countries/thailand", label: "Thailand", icon: MapPin, indent: true },
  { href: "/countries/colombia", label: "Colombia", icon: MapPin, indent: true },
  { href: "/countries/brazil", label: "Brazil", icon: MapPin, indent: true },
  { href: "/countries/argentina", label: "Argentina", icon: MapPin, indent: true },
  { href: "/countries/bolivia", label: "Bolivia", icon: MapPin, indent: true },
  { href: "/revenue", label: "Revenue Model", icon: DollarSign },
  { href: "/financials", label: "Financial Projections", icon: TrendingUp },
  { href: "/staffing", label: "Team & Staffing", icon: Users },
  { href: "/timeline", label: "Launch Timeline", icon: CalendarClock },
  { href: "/integration-strategy", label: "API & Integration", icon: Plug },
  { href: "/ground-operations", label: "Ground Operations", icon: MapPinned },
  { href: "/outreach-playbook", label: "Outreach Playbook", icon: Megaphone },
  { href: "/value-propositions", label: "Value Propositions", icon: Handshake },
  { href: "/execution-protocol", label: "Execution Protocol", icon: Radio },
  { href: "/operational-costs", label: "Operational Costs", icon: Receipt },
  { href: "/competitive-analysis", label: "Competitive Analysis", icon: Swords },
  { href: "/risk-matrix", label: "Risk Matrix", icon: AlertOctagon },
  { href: "/governance", label: "Governance & IP", icon: Crown },
  { href: "/us-market", label: "US Market (WebMD)", icon: Target },
  { href: "/fund-allocation", label: "Fund Allocation", icon: BarChart3 },
  { href: "/why-myeval", label: "Why MyEval.ai", icon: Building2 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card flex flex-col z-50">
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
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
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
            8 Countries &middot; 24-Month Plan
          </p>
          <p className="text-[10px] text-muted-foreground">
            Target: 20M users &middot; $97M+ revenue
          </p>
        </div>
      </div>
    </aside>
  );
}
