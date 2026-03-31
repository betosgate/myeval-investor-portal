"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ComposedChart,
  type PieLabelRenderProps,
} from "recharts";

const COLORS = [
  "hsl(175, 70%, 40%)",
  "hsl(210, 70%, 50%)",
  "hsl(38, 92%, 50%)",
  "hsl(0, 84%, 60%)",
  "hsl(262, 83%, 58%)",
  "hsl(186, 78%, 42%)",
  "hsl(330, 81%, 60%)",
  "hsl(45, 93%, 47%)",
  "hsl(199, 89%, 48%)",
];

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

function fmtShort(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return `${n}`;
}

export function RevenueAreaChart({
  data,
}: {
  data: { label: string; revenue: number; expenses: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} interval={2} />
        <YAxis tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} tickFormatter={fmt} />
        <Tooltip
          contentStyle={{ backgroundColor: "hsl(0, 0%, 12%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: 8 }}
          labelStyle={{ color: "hsl(0, 0%, 90%)" }}
          formatter={(v) => fmt(Number(v))}
        />
        <Legend />
        <Area type="monotone" dataKey="revenue" stroke="hsl(142, 71%, 45%)" fill="url(#colorRevenue)" strokeWidth={2} name="Revenue" />
        <Area type="monotone" dataKey="expenses" stroke="hsl(0, 84%, 60%)" fill="url(#colorExpenses)" strokeWidth={2} name="Expenses" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function FundPieChart({ data }: { data: { category: string; amount: number; pct: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={130}
          paddingAngle={3}
          dataKey="amount"
          nameKey="category"
          label={(props: PieLabelRenderProps) => typeof props.name === "string" ? props.name.split(" ")[0] : ""}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "hsl(0, 0%, 12%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: 8 }}
          formatter={(v) => fmt(Number(v))}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function CountryRevenueBar({
  data,
}: {
  data: { name: string; year1: number; year2: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
        <XAxis type="number" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} tickFormatter={fmt} />
        <YAxis dataKey="name" type="category" width={90} tick={{ fontSize: 12, fill: "hsl(0, 0%, 80%)" }} />
        <Tooltip
          contentStyle={{ backgroundColor: "hsl(0, 0%, 12%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: 8 }}
          formatter={(v) => fmt(Number(v))}
        />
        <Legend />
        <Bar dataKey="year1" fill="hsl(221, 83%, 53%)" name="Year 1" radius={[0, 4, 4, 0]} />
        <Bar dataKey="year2" fill="hsl(142, 71%, 45%)" name="Year 2" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function UserGrowthChart({
  data,
}: {
  data: { label: string; users: number; b2bClients: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} interval={2} />
        <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} tickFormatter={fmtShort} />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} />
        <Tooltip
          contentStyle={{ backgroundColor: "hsl(0, 0%, 12%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: 8 }}
          formatter={(v, name) => [name === "Users" ? fmtShort(Number(v)) : v, name]}
        />
        <Legend />
        <Area yAxisId="left" type="monotone" dataKey="users" fill="hsl(221, 83%, 53%)" fillOpacity={0.15} stroke="hsl(221, 83%, 53%)" strokeWidth={2} name="Users" />
        <Line yAxisId="right" type="monotone" dataKey="b2bClients" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={false} name="B2B Clients" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export function RevenueStreamBar({
  data,
}: {
  data: { name: string; year1: number; year2: number; margin: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
        <XAxis dataKey="name" tick={{ fontSize: 10, fill: "hsl(0, 0%, 60%)" }} angle={-30} textAnchor="end" height={80} />
        <YAxis tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} tickFormatter={fmt} />
        <Tooltip
          contentStyle={{ backgroundColor: "hsl(0, 0%, 12%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: 8 }}
          formatter={(v) => fmt(Number(v))}
        />
        <Legend />
        <Bar dataKey="year1" fill="hsl(221, 83%, 53%)" name="Year 1" radius={[4, 4, 0, 0]} />
        <Bar dataKey="year2" fill="hsl(142, 71%, 45%)" name="Year 2" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function HeadcountChart({
  data,
}: {
  data: { phase: string; usHQ: number; inCountry: number; strategists: number; total: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
        <XAxis dataKey="phase" tick={{ fontSize: 10, fill: "hsl(0, 0%, 60%)" }} angle={-15} textAnchor="end" height={60} />
        <YAxis tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} />
        <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 12%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: 8 }} />
        <Legend />
        <Bar dataKey="usHQ" stackId="a" fill="hsl(221, 83%, 53%)" name="US HQ" />
        <Bar dataKey="inCountry" stackId="a" fill="hsl(142, 71%, 45%)" name="In-Country" />
        <Bar dataKey="strategists" stackId="a" fill="hsl(38, 92%, 50%)" name="Strategists" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function MarketRadar({
  data,
}: {
  data: { metric: string; value: number; fullMark: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid stroke="hsl(0, 0%, 25%)" />
        <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "hsl(0, 0%, 70%)" }} />
        <Radar dataKey="value" stroke="hsl(221, 83%, 53%)" fill="hsl(221, 83%, 53%)" fillOpacity={0.3} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export function CashFlowChart({
  data,
}: {
  data: { label: string; cashFlow: number; cumulativeCashFlow: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} interval={2} />
        <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} tickFormatter={fmt} />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} tickFormatter={fmt} />
        <Tooltip
          contentStyle={{ backgroundColor: "hsl(0, 0%, 12%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: 8 }}
          formatter={(v) => fmt(Number(v))}
        />
        <Legend />
        <Bar yAxisId="left" dataKey="cashFlow" name="Monthly Cash Flow" radius={[4, 4, 0, 0]}>
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.cashFlow >= 0 ? "hsl(142, 71%, 45%)" : "hsl(0, 84%, 60%)"} />
          ))}
        </Bar>
        <Line yAxisId="right" type="monotone" dataKey="cumulativeCashFlow" stroke="hsl(262, 83%, 58%)" strokeWidth={2} dot={false} name="Cumulative Cash" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export function TimelineChart({
  data,
}: {
  data: { label: string; revenue: number; headcount: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} interval={3} />
        <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} tickFormatter={fmt} />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "hsl(0, 0%, 60%)" }} />
        <Tooltip
          contentStyle={{ backgroundColor: "hsl(0, 0%, 12%)", border: "1px solid hsl(0, 0%, 20%)", borderRadius: 8 }}
          formatter={(v, name) => [name?.toString().includes("Revenue") ? fmt(Number(v)) : v, name]}
        />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="hsl(142, 71%, 45%)" strokeWidth={2} name="Monthly Revenue" />
        <Line yAxisId="right" type="monotone" dataKey="headcount" stroke="hsl(221, 83%, 53%)" strokeWidth={2} name="Headcount" />
      </LineChart>
    </ResponsiveContainer>
  );
}
