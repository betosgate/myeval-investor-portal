import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Plane, Monitor, Shield, FileCheck, DollarSign, Cloud, Languages, Lock } from "lucide-react";
import {
  travelCosts, totalAnnualTravelCost,
  perEmployeeEquipment, totalEquipmentBudgetYear1,
  softwareLicenses, totalAnnualSoftwareCost,
  cloudInfrastructure, totalAnnualCloudCost,
  communicationCosts, totalAnnualCommunicationCost,
  insurancePolicies, totalAnnualInsuranceCost,
  complianceCosts, totalAnnualComplianceCost,
  grandTotal, grandTotalSummary,
} from "@/lib/data/operational-costs";
import { fmt } from "@/lib/format";

export default function OperationalCostsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Operational Cost Breakdown</h1>
        <p className="text-muted-foreground mt-2">
          Every dollar accounted for. Two ambassador-directors travel together to all 8 countries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Travel (Annual)" value={fmt(totalAnnualTravelCost)} icon={Plane} />
        <MetricCard label="Tech Stack" value={fmt(totalAnnualSoftwareCost + totalAnnualCloudCost)} icon={Monitor} subtitle="Software + Cloud" />
        <MetricCard label="Insurance" value={fmt(totalAnnualInsuranceCost)} icon={Shield} />
        <MetricCard label="Grand Total" value={fmt(grandTotal)} icon={DollarSign} subtitle="Year 1" />
      </div>

      <Separator />

      {/* TRAVEL */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Plane className="h-6 w-6" /> Travel — 2 Ambassadors, 8 Countries
        <Badge variant="outline" className="font-mono ml-2">{fmt(totalAnnualTravelCost)}/yr</Badge>
      </h2>
      {travelCosts.map((c) => (
        <Card key={c.country}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center justify-between">
              <span>{c.country} <span className="text-xs text-muted-foreground font-normal">({c.capital})</span></span>
              <Badge className="font-mono bg-green-600/20 text-green-400 border-green-600/30">{fmt(c.countryTravelTotal)}/yr</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <h4 className="text-xs font-semibold mb-1">Flights ({c.flights.length} routes)</h4>
                {c.flights.map((f) => (
                  <div key={f.route} className="text-xs text-muted-foreground flex justify-between mb-1">
                    <span>{f.route} <span className="text-[10px]">({f.carrier})</span></span>
                    <span className="font-mono">${f.roundTripPrice.toLocaleString()} RT x{f.frequencyPerYear}/yr</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-xs font-semibold mb-1">Hotels</h4>
                {c.hotels.map((h) => (
                  <div key={h.name} className="text-xs text-muted-foreground mb-1">
                    <span className="font-mono">${h.nightlyRate}/night</span> — {h.name}, {h.city} <span className="text-[10px]">({h.stayDaysPerVisit} nights/visit)</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="bg-muted/30 rounded p-2">
                <span className="text-muted-foreground">Per Diem: </span>
                <span className="font-mono">${c.perDiem.totalDaily}/day</span>
              </div>
              <div className="bg-muted/30 rounded p-2">
                <span className="text-muted-foreground">Ground: </span>
                <span className="font-mono">${c.groundTransport.dailyCarService}/day</span>
              </div>
              <div className="bg-muted/30 rounded p-2">
                <span className="text-muted-foreground">Entertainment: </span>
                <span className="font-mono">{fmt(c.meetingEntertainment.annualTotal)}/yr</span>
              </div>
              <div className="bg-muted/30 rounded p-2">
                <span className="text-muted-foreground">Visa: </span>
                <span className="font-mono">${c.visa.visaCostPerPerson}/person</span>
                <span className="text-[10px] text-muted-foreground block">{c.visa.visaType}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Separator />

      {/* EQUIPMENT */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Monitor className="h-6 w-6" /> Equipment
        <Badge variant="outline" className="font-mono ml-2">{fmt(totalEquipmentBudgetYear1)} Yr1</Badge>
      </h2>
      <Card><CardContent className="p-4 space-y-2">
        {perEmployeeEquipment.map((e) => (
          <div key={e.item} className="flex items-center justify-between text-sm">
            <span>{e.item} <span className="text-xs text-muted-foreground">({e.quantity})</span></span>
            <span className="font-mono">${e.costPerUnit.toLocaleString()}</span>
          </div>
        ))}
      </CardContent></Card>

      {/* SOFTWARE */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Lock className="h-6 w-6" /> Software Licenses
        <Badge variant="outline" className="font-mono ml-2">{fmt(totalAnnualSoftwareCost)}/yr</Badge>
      </h2>
      <Card><CardContent className="p-4 space-y-2">
        {softwareLicenses.map((s) => (
          <div key={s.tool} className="flex items-center justify-between text-sm">
            <span>{s.tool} <span className="text-xs text-muted-foreground">— {s.notes}</span></span>
            <span className="font-mono">{fmt(s.annualCost)}</span>
          </div>
        ))}
      </CardContent></Card>

      {/* CLOUD */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Cloud className="h-6 w-6" /> Cloud Infrastructure
        <Badge variant="outline" className="font-mono ml-2">{fmt(totalAnnualCloudCost)}/yr</Badge>
      </h2>
      <Card><CardContent className="p-4 space-y-2">
        {cloudInfrastructure.map((c) => (
          <div key={c.service} className="flex items-center justify-between text-sm">
            <span>{c.service} <span className="text-xs text-muted-foreground">— {c.notes}</span></span>
            <span className="font-mono">{fmt(c.monthlyCost)}/mo ({fmt(c.annualCost)}/yr)</span>
          </div>
        ))}
      </CardContent></Card>

      {/* COMMUNICATION */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Languages className="h-6 w-6" /> Communication & Translation
        <Badge variant="outline" className="font-mono ml-2">{fmt(totalAnnualCommunicationCost)}/yr</Badge>
      </h2>
      <Card><CardContent className="p-4 space-y-2">
        {communicationCosts.map((c) => (
          <div key={c.category + c.detail} className="flex items-center justify-between text-sm">
            <span>{c.category}: {c.detail}</span>
            <span className="font-mono">{fmt(c.annualCost)}</span>
          </div>
        ))}
      </CardContent></Card>

      {/* INSURANCE */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Shield className="h-6 w-6" /> Insurance
        <Badge variant="outline" className="font-mono ml-2">{fmt(totalAnnualInsuranceCost)}/yr</Badge>
      </h2>
      <Card><CardContent className="p-0">
        <table className="w-full text-sm">
          <thead><tr className="border-b">
            <th className="py-2 px-4 text-left text-xs text-muted-foreground">Policy</th>
            <th className="py-2 px-4 text-left text-xs text-muted-foreground">Coverage</th>
            <th className="py-2 px-4 text-left text-xs text-muted-foreground">Provider</th>
            <th className="py-2 px-4 text-right text-xs text-muted-foreground">Annual</th>
          </tr></thead>
          <tbody>{insurancePolicies.map((i) => (
            <tr key={i.type} className="border-b border-border/50">
              <td className="py-2 px-4 text-xs font-medium">{i.type}</td>
              <td className="py-2 px-4 text-xs text-muted-foreground">{i.coverage}</td>
              <td className="py-2 px-4 text-xs text-muted-foreground">{i.carrier}</td>
              <td className="py-2 px-4 text-xs text-right font-mono">{fmt(i.annualPremium)}</td>
            </tr>
          ))}</tbody>
        </table>
      </CardContent></Card>

      {/* COMPLIANCE */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <FileCheck className="h-6 w-6" /> Compliance & Certifications
        <Badge variant="outline" className="font-mono ml-2">{fmt(totalAnnualComplianceCost)}/yr</Badge>
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {complianceCosts.map((c) => (
          <div key={c.category + c.detail} className="flex items-center justify-between bg-muted/20 rounded-lg p-3">
            <div><p className="text-sm font-medium">{c.category}: {c.detail}</p><p className="text-xs text-muted-foreground">{c.notes}</p></div>
            <div className="text-right shrink-0 ml-4"><p className="font-mono text-sm">{fmt(c.cost)}</p><p className="text-[10px] text-muted-foreground">{c.frequency}</p></div>
          </div>
        ))}
      </div>

      {/* GRAND TOTAL */}
      <Card className="border-green-600/30 bg-green-600/5">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Year 1 Operational Cost Summary</h3>
          <div className="space-y-3">
            {grandTotalSummary.map((c) => (
              <div key={c.label} className="flex justify-between"><span>{c.label}</span><span className="font-mono">{fmt(c.annual)}</span></div>
            ))}
            <Separator />
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-green-400">GRAND TOTAL</span>
              <span className="text-2xl font-mono font-bold text-green-400">{fmt(grandTotal)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
