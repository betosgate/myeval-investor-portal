import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MetricCard } from "@/components/metric-card";
import { Cloud, DollarSign, AlertTriangle, Shield, CheckCircle, Leaf, Globe, Heart, Zap } from "lucide-react";

const typhoonDamage = [
  { year: "2024", damage: "PHP 43B+", events: "Typhoon Kristine (PHP 6.2B agri), unprecedented season. 143K farmers affected, 283K MT production lost." },
  { year: "2021", damage: "PHP 33B+", events: "Typhoon Rai/Odette (PHP 28.6B). 400+ deaths across Visayas-Mindanao. Cebu, Bohol, Siargao devastated." },
  { year: "2020", damage: "PHP 45B+", events: "Typhoon Rolly/Goni (PHP 17.8B) — strongest landfall globally that year. Typhoon Ulysses flooded Manila." },
  { year: "2018", damage: "PHP 18B+", events: "Typhoon Ompong/Mangkhut — $2.7B damage. Northern Luzon agriculture destroyed." },
  { year: "2013", damage: "PHP 95B+", events: "Super Typhoon Haiyan/Yolanda — 6,300+ deaths, $12.9B total damage. Leyte, Samar obliterated. Worst Philippine disaster in modern history." },
];

export default function ClimateResiliencePage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-sky-100 text-sky-700 border-sky-300 mb-3">NATIONAL SECURITY THREAT</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Climate Resilience</h1>
        <p className="text-muted-foreground mt-2">The 4th most climate-vulnerable nation on Earth. 20 typhoons/year. $2.8B average annual damage. 98% insurance gap. Manila sinking at 2.6cm/year. Climate is not an environmental issue — it is a survival issue affecting 117 million people.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <MetricCard label="Annual Typhoons" value="20" subtitle="8-9 make landfall" icon={Cloud} />
        <MetricCard label="Annual Damage" value="$2.8B avg" subtitle="1-2% of GDP, rising" icon={DollarSign} />
        <MetricCard label="Manila Sea Rise" value="2.6cm/yr" subtitle="+ 4-6cm/yr land subsidence" icon={AlertTriangle} />
        <MetricCard label="Insurance Gap" value="98%" subtitle="vs 58% global average" icon={Shield} />
      </div>

      {/* Typhoon Damage Timeline */}
      <Card>
        <CardHeader><CardTitle>Typhoon Damage — A Pattern of Increasing Destruction</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {typhoonDamage.map((t) => (
            <div key={t.year} className="flex items-start gap-4 bg-muted/20 rounded-lg p-3 border">
              <div className="w-12 shrink-0">
                <p className="font-mono font-bold text-sm">{t.year}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">{t.events}</p>
              </div>
              <Badge className="bg-red-100 text-red-700 font-mono shrink-0">{t.damage}</Badge>
            </div>
          ))}
          <p className="text-xs text-muted-foreground mt-2">2010-2020 cumulative agricultural losses: <span className="font-mono font-semibold text-red-600">PHP 268 billion</span>. Average $3.5B in assets at risk annually. 60% of land area and 74% of population exposed to multiple hazards.</p>
        </CardContent>
      </Card>

      {/* Sea Level Rise */}
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-600" /> Sea Level Rise — Manila is Sinking</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">Manila sea levels rising <span className="font-mono font-semibold text-red-600">2.6cm/year</span> — dramatically above the global average (3-4mm/year). Parts of Manila are additionally sinking 4-6cm/year from groundwater extraction. Combined: some areas sinking up to 8-9cm/year.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { scenario: "1-meter rise", impact: "7,000 sq km affected. 1.8M people displaced. 2,490 barangays inundated. Parts of Navotas, Malabon, Obando regularly underwater." },
              { scenario: "3-meter rise", impact: "15,000+ sq km. 3.4M people. 5,387 barangays. Major portions of Metro Manila uninhabitable." },
              { scenario: "By 2100 (pessimistic)", impact: "Up to 2.5m rise. 60% of Philippine cities are coastal. The economic heart of the nation is threatened." },
            ].map((s) => (
              <div key={s.scenario} className="bg-white rounded-lg p-3 border">
                <h4 className="text-xs font-semibold text-red-700">{s.scenario}</h4>
                <p className="text-xs text-muted-foreground mt-1">{s.impact}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">The Netherlands parallel:</span> The Netherlands invested $13B+ annually in flood management, protecting 26% of the country below sea level. The Philippines needs a similar national program. Key difference: the Dutch invested for 800 years. Manila needs to start NOW because it&apos;s already happening — not a future projection.</p>
        </CardContent>
      </Card>

      {/* Insurance */}
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" /> The Insurance Crisis — 98% Unprotected</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Current State</h4>
              <p className="text-xs text-muted-foreground">&bull; Total insurance penetration: 1.85% of GDP (Q3 2025)</p>
              <p className="text-xs text-muted-foreground">&bull; Catastrophe protection gap: <span className="font-semibold text-red-600">~98%</span> (vs global avg 58%)</p>
              <p className="text-xs text-muted-foreground">&bull; PCIC (crop insurance) covered 4.2M farmers in 2024 (7.76% increase YoY)</p>
              <p className="text-xs text-muted-foreground">&bull; Total PCIC coverage: PHP 141.6 billion</p>
              <p className="text-xs text-muted-foreground">&bull; Government has secured &gt;$14B in risk transfer (cat bonds, parametric, NIIP covering 130K schools)</p>
              <p className="text-xs text-muted-foreground">&bull; Parametric payouts to date: ~$28M across 3 events</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-green-700">Parametric Insurance — The Game Changer</h4>
              <p className="text-xs text-muted-foreground"><span className="font-semibold">PCIC launching parametric insurance for 2025 wet season:</span></p>
              <p className="text-xs text-muted-foreground">&bull; Uses satellite imagery and remote sensing to verify crop presence</p>
              <p className="text-xs text-muted-foreground">&bull; Weather data on typhoon paths + wind intensity determine affected areas</p>
              <p className="text-xs text-muted-foreground">&bull; Payouts computed within <span className="font-semibold">3-5 days</span> (vs weeks/months for traditional claims)</p>
              <p className="text-xs text-muted-foreground">&bull; Eliminates need for time-consuming field inspections</p>
              <p className="text-xs text-muted-foreground">&bull; Target: 2.93M farmers/fishers covered in 2025 (25% increase)</p>
              <p className="text-xs text-muted-foreground font-semibold">This is one of the most promising innovations in Philippine disaster resilience.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mangrove Economics */}
      <Card className="border-green-200 bg-green-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><Leaf className="h-5 w-5 text-green-600" /> Mangrove Economics — Nature&apos;s Flood Defense</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-green-700">$1B+/yr</p>
              <p className="text-xs text-muted-foreground">Flood damage averted annually by existing mangroves</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-green-700">$3,200+</p>
              <p className="text-xs text-muted-foreground">Per hectare per year in flood reduction benefits</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-green-700">$450M/yr</p>
              <p className="text-xs text-muted-foreground">Additional benefit from restoring mangroves lost 1950-2010</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Philippines has lost <span className="font-semibold">50%+ of mangrove forests</span>. Without mangroves, the country would see a 25% annual increase in floods and property damage. Restoration cost: $500-3,000/hectare (global median $8,143). At even $3,000/ha, the benefit-cost ratio is overwhelmingly positive — <span className="font-semibold text-green-700">every dollar invested in mangrove restoration returns $10+ in flood protection</span>.</p>
          <p className="text-xs text-muted-foreground"><span className="font-semibold">Priority restoration zones:</span> Eastern Samar coast (typhoon corridor), Leyte Gulf, Zamboanga Peninsula, Palawan eastern coast, Manila Bay. Target: 50,000 hectares restored = $150M investment → $450M/year in protection.</p>
        </CardContent>
      </Card>

      <Separator />

      {/* Energy Transition */}
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5" /> Energy Transition & Carbon Pricing</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Current Energy Mix</h4>
              <p className="text-xs text-muted-foreground">&bull; Coal: 47% (the problem — import dependent, expensive, dirty)</p>
              <p className="text-xs text-muted-foreground">&bull; Natural gas: 18% (Malampaya depleting by 2027-2029)</p>
              <p className="text-xs text-muted-foreground">&bull; Renewables: 22% (geothermal 11%, hydro 6%, solar 3%, wind 2%)</p>
              <p className="text-xs text-muted-foreground">&bull; Oil: 8%, Biomass: 5%</p>
              <p className="text-xs text-muted-foreground">&bull; RE target: 35% by 2030, 50% by 2040</p>
              <p className="text-xs text-muted-foreground">&bull; Philippines NDC (Paris Agreement): 75% emissions reduction target (2.71% unconditional, 72.29% conditional on international support)</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Carbon Pricing — Coming Soon</h4>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">House Bill 11375</span> approved on 2nd reading (Feb 2025)</p>
              <p className="text-xs text-muted-foreground">&bull; Proposed: <span className="font-mono">PHP 1,170/ton CO2e ($20)</span> starting rate</p>
              <p className="text-xs text-muted-foreground">&bull; Rising to <span className="font-mono">PHP 2,925 ($50) by 2030</span></p>
              <p className="text-xs text-muted-foreground">&bull; Hybrid: emissions trading + carbon pricing</p>
              <p className="text-xs text-muted-foreground">&bull; Revenue: PHP 15-25B/year at full implementation</p>
              <p className="text-xs text-muted-foreground">&bull; Philippines-Singapore MOU for carbon credit collaboration under Article 6</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground"><span className="font-semibold">Green Climate Fund access:</span> Philippines has accessed $139.9M to date. ADB has pledged $10B in climate finance — the gap between available funding and Philippine access is enormous. Building a pipeline of bankable climate projects is the #1 priority for unlocking 10x more funding.</p>
        </CardContent>
      </Card>

      {/* Climate-Health Nexus */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-5">
          <h3 className="font-bold mb-3 flex items-center gap-2"><Heart className="h-5 w-5" /> Climate-Health Technology Nexus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Post-Disaster Disease Surveillance", desc: "Dengue, leptospirosis, and waterborne diseases surge after every typhoon. Traditional surveillance detects outbreaks weeks later. AI health platforms analyzing real-time evaluation data can detect anomalous symptom clusters within 72 hours — potentially saving thousands of lives in the critical post-typhoon period.", icon: Heart },
              { title: "Offline-Capable Health Infrastructure", desc: "During typhoons, connectivity fails for days or weeks. Health platforms that work OFFLINE (mobile-first, satellite sync when connectivity returns) are not nice-to-have — they are critical infrastructure. A health evaluation that works during the disaster is worth more than a hospital that doesn't.", icon: Shield },
              { title: "Parametric Health Insurance", desc: "AI-triggered insurance: when a typhoon above Category 3 strikes a municipality, health coverage for all residents is automatically activated. No claims process. No delay. Combined with parametric crop insurance, this creates a complete disaster safety net for the poorest communities.", icon: DollarSign },
            ].map((t) => (
              <div key={t.title} className="space-y-2">
                <t.icon className="h-5 w-5 text-primary" />
                <h4 className="text-sm font-semibold">{t.title}</h4>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Presidential Action */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-5">
          <h3 className="font-bold mb-3">Climate Resilience — Presidential Action Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "EO Day 1: All new government infrastructure must meet Cat-5 typhoon + 100-year flood standards",
              "Year 1: Carbon tax at PHP 1,170/ton CO2e. Revenue earmarked 100% for climate resilience.",
              "Year 1: Mandate 15% of flood management spending to nature-based solutions (mangroves, wetlands)",
              "Year 1-3: 50,000 hectares mangrove restoration ($150M investment → $450M/yr flood protection)",
              "Year 2: Parametric insurance scaled to all typhoon-prone barangays via PCIC + private insurers",
              "Year 2-3: Accelerate RE to 35%+ of generation. Grid modernization PHP 30-40B investment.",
              "Year 3: Climate-resilient health infrastructure: offline-capable AI health platforms in all RHUs",
              "Year 5: Philippine Climate Resilience Fund (from carbon tax revenue) reaching PHP 50B+",
            ].map((a, i) => (
              <div key={a} className="text-xs bg-white border rounded p-2 flex items-start gap-2">
                <span className="font-mono text-primary font-bold shrink-0">{i + 1}.</span>
                <span className="text-muted-foreground">{a}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
