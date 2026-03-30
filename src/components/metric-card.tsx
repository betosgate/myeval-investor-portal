import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function MetricCard({
  label,
  value,
  subtitle,
  icon: Icon,
  trend,
  className,
}: {
  label: string;
  value: string;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: string;
  className?: string;
}) {
  return (
    <Card className={cn("relative overflow-hidden", className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {label}
            </p>
            <p className="text-2xl font-bold mt-1 font-mono tracking-tight">{value}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
            )}
            {trend && (
              <p className="text-xs text-green-500 font-medium mt-1">{trend}</p>
            )}
          </div>
          {Icon && (
            <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
