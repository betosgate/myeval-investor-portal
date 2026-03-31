import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Globe, Shield, Ship, Landmark, Cloud, Users, DollarSign, AlertTriangle, CheckCircle } from "lucide-react";

export default function GeopoliticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-indigo-100 text-indigo-700 border-indigo-300 mb-3">STRATEGIC SECURITY ANALYSIS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Geopolitics & National Security</h1>
        <p className="text-muted-foreground mt-2">
          South China Sea tensions, the US-Philippines alliance, BARMM peace process, China&apos;s economic influence, and how health technology investment creates geopolitical impact.
        </p>
      </div>

      {/* US Alliance */}
      <Card className="border-blue-300 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-blue-600" /> US-Philippines Alliance — The Strongest in a Generation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">The Philippines is the United States&apos; oldest treaty ally in Asia (Mutual Defense Treaty, 1951). Under Marcos Jr., the alliance has reached its strongest point in decades.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Enhanced Defense Cooperation Agreement (EDCA)</h4>
              <p className="text-xs text-muted-foreground">Expanded from 5 to <span className="font-semibold">9 agreed locations</span> in 2023. The new northern bases (Lal-lo, Santa Ana, Camp Melchor Dela Cruz) are positioned directly across from Taiwan, signaling their role in potential Taiwan contingency planning.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                {["Antonio Bautista (Palawan)", "Basa Air Base (Pampanga)", "Fort Magsaysay (Nueva Ecija)", "Lumbia (Cagayan de Oro)", "Mactan-Benito Ebuen (Cebu)", "Lal-lo Airport (Cagayan)", "Camp Melchor (Isabela)", "Balabac Island (Palawan)", "Camilo Osias (Cagayan)"].map((b) => (
                  <Badge key={b} variant="outline" className="text-[9px] justify-center">{b}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Economic Implications for Investors</h4>
              <div className="space-y-1">
                {[
                  "Bilateral trade exceeds $25B annually — preferential corridor for US companies",
                  "USAID programs ($200M+/year) actively support US health-tech deployment",
                  "4M+ Filipino-American diaspora creates natural business bridge",
                  "Regulatory frameworks modeled on US systems (FDA, legal, medical education)",
                  "Balikatan exercises include humanitarian/health response — health-tech synergy",
                  "US government agencies (DFC, EXIM) seek to counter Chinese economic influence through commercial support",
                ].map((p) => (
                  <p key={p} className="text-xs text-muted-foreground flex items-start gap-1"><CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-blue-600" />{p}</p>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* South China Sea */}
      <Card className="border-red-300 bg-red-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Ship className="h-5 w-5 text-red-600" /> West Philippine Sea / South China Sea Tensions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Ongoing territorial disputes with China have intensified since 2023 — the most volatile flashpoint in the Indo-Pacific.</p>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Recent Incidents (2024-2026)</h4>
            {[
              { date: "2024 (ongoing)", event: "Second Thomas Shoal confrontations", detail: "Chinese Coast Guard used water cannons, military-grade lasers, and physical ramming against Philippine resupply missions. June 2024: CCG operatives with bladed weapons boarded Philippine boats, injuring Navy personnel — most aggressive physical confrontation in years." },
              { date: "2024", event: "Scarborough Shoal blockade", detail: "Chinese vessels maintained near-permanent blockade with floating barriers preventing Filipino fishermen from accessing traditional grounds. 300K+ fisherfolk affected, $33.5M annual cost." },
              { date: "2024-2025", event: "Maritime Zones Act", detail: "Philippines codified claims under UNCLOS into domestic law (Maritime Zones Act + Archipelagic Sea Lanes Act). China condemned the legislation." },
              { date: "2025-2026", event: "Diplomatic management phase", detail: "Bilateral consultation mechanism established. Incidents continued at lower intensity. Philippines pursued 'transparent offense' — publishing real-time video of Chinese aggression to build international sympathy." },
            ].map((i) => (
              <div key={i.event} className="bg-white rounded-lg p-3 border">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-[10px] font-mono">{i.date}</Badge>
                  <span className="text-sm font-semibold">{i.event}</span>
                </div>
                <p className="text-xs text-muted-foreground">{i.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-3 border">
              <h4 className="text-xs font-semibold text-red-700 mb-1">Economic Impact</h4>
              <p className="text-xs text-muted-foreground">Reed Bank holds an estimated <span className="font-mono font-semibold">5.4B barrels of oil equivalent</span> ($432B at $80/barrel). Malampaya gas field (40% of Luzon power) is depleting by 2027-2030 with no replacement. Energy insecurity is a national security concern. Fishing communities lose $33.5M/year from exclusion zones.</p>
            </div>
            <div className="bg-white rounded-lg p-3 border">
              <h4 className="text-xs font-semibold text-green-700 mb-1">Opportunity from Tension</h4>
              <p className="text-xs text-muted-foreground">The dispute has accelerated US-Philippines economic integration, creating a preferential corridor for American technology companies. &ldquo;Friend-shoring&rdquo; favors Philippine investment as companies diversify from China-dependent supply chains. Being a US-allied company is an asset, not a liability.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* China Economic Influence */}
      <Card className="border-yellow-300 bg-yellow-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5 text-yellow-600" /> China&apos;s Economic Influence</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Chinese Infrastructure Projects</h4>
              {[
                "Chico River Pump Irrigation (Kalinga) — Chinese loan-funded",
                "Kaliwa Dam (Quezon) — delayed, environmental opposition",
                "Binondo-Intramuros Bridge — completed under Duterte",
                "PNR South Long Haul — scaled back under Marcos Jr.",
              ].map((p) => (
                <p key={p} className="text-xs text-muted-foreground">&bull; {p}</p>
              ))}
              <p className="text-xs text-muted-foreground mt-2">Under Marcos Jr., Philippines has <span className="font-semibold">cooled on Chinese infrastructure loans</span>, pivoting toward Japanese (JICA), Korean, and Western development finance.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Chinese Tech Presence</h4>
              <p className="text-xs text-muted-foreground"><span className="font-semibold">Dito Telecommunity:</span> 3rd telco, China Telecom-backed (40% initially, diluted). Persistent security scrutiny. Struggling to meet coverage targets.</p>
              <p className="text-xs text-muted-foreground"><span className="font-semibold">POGOs:</span> Chinese-run online gambling operations became major criminal activity source. Marcos Jr. ordered <span className="font-semibold">complete POGO ban effective December 31, 2024</span> — decisive break removing Chinese criminal-economic influence.</p>
              <p className="text-xs text-muted-foreground mt-2"><span className="font-semibold">Navigation for US companies:</span> Lean into the US alignment. Use US/allied cloud infrastructure. Frame as &ldquo;pro-Philippine sovereignty&rdquo; not &ldquo;anti-China.&rdquo; Philippine health data on trusted infrastructure protects national information.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BARMM */}
      <Card className="border-green-300 bg-green-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Landmark className="h-5 w-5 text-green-600" /> BARMM — The Peace Dividend</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">The Bangsamoro Autonomous Region (BARMM), created in 2019 after decades of armed conflict, is the Philippines&apos; greatest development challenge and opportunity.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-red-600">37.2%</p>
              <p className="text-xs text-muted-foreground">Poverty rate (highest in PH)</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-red-600">0.3</p>
              <p className="text-xs text-muted-foreground">Doctors per 10K people</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-2xl font-mono font-bold text-red-600">-8 yrs</p>
              <p className="text-xs text-muted-foreground">Life expectancy vs national avg</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Peace Process Status</h4>
              {[
                "Bangsamoro Organic Law (2019) created autonomous region",
                "Transition Authority (BTA) governing until first elections",
                "First parliamentary elections targeted for 2026",
                "MILF decommissioning: ~40,000 fighters in process, slow but ongoing",
                "ISIS-affiliated groups (Abu Sayyaf, BIFF) remain security concerns",
                "$1.5B+ flowing from national government + international donors",
              ].map((p) => (
                <p key={p} className="text-xs text-muted-foreground flex items-start gap-1 mb-1"><span className="h-1 w-1 rounded-full bg-green-600 mt-1.5 shrink-0" />{p}</p>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Why Health Investment = Peace-Building</h4>
              {[
                "Health system collapse drives renewed conflict — sick populations breed grievance",
                "AI health screening in BARMM demonstrates the peace dividend tangibly",
                "\"American health technology helping Muslim Filipinos\" counters anti-US narratives",
                "USAID, World Bank, ADB, OIC all invested in BARMM success — align with donors",
                "Few tech companies willing to operate in BARMM — massive first-mover advantage",
                "Success template for other post-conflict regions globally",
              ].map((p) => (
                <p key={p} className="text-xs text-muted-foreground flex items-start gap-1 mb-1"><CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-green-600" />{p}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Climate as National Security */}
      <Card className="border-sky-300 bg-sky-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Cloud className="h-5 w-5 text-sky-600" /> Climate as National Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            The Philippines is the <span className="font-semibold">4th most climate-vulnerable nation</span> (Germanwatch). Climate is not an environmental issue — it is a national security and economic survival issue.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-lg font-mono font-bold">20/yr</p>
              <p className="text-xs text-muted-foreground">Typhoons enter PH area</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-lg font-mono font-bold">$2.8B</p>
              <p className="text-xs text-muted-foreground">Average annual damage</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-lg font-mono font-bold">2.6cm/yr</p>
              <p className="text-xs text-muted-foreground">Manila sea level rise</p>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <p className="text-lg font-mono font-bold">60%</p>
              <p className="text-xs text-muted-foreground">Population in coastal areas</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold">Health-tech and climate resilience:</span> Digital health platforms that function during/after disasters (offline-capable, satellite connectivity) are critical infrastructure. AI disease surveillance catches post-typhoon outbreaks early. Climate-resilient health tech is an investment thesis unto itself.
          </p>
        </CardContent>
      </Card>

      {/* Political Landscape */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" /> Political Landscape</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Marcos Jr. Administration (2022-2028)</h4>
              {[
                "Economic liberalization (Foreign Investments Act amendment, Retail Trade Liberalization)",
                "Infrastructure: Build Better More continuation ($155B pipeline)",
                "Digital transformation and e-governance push",
                "Decisive foreign policy pivot toward US, away from Duterte-era China accommodation",
                "Marcos-Duterte alliance collapsed 2023-2024 (VP Sara Duterte broke publicly)",
              ].map((p) => (
                <p key={p} className="text-xs text-muted-foreground">&bull; {p}</p>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Investor Implications</h4>
              {[
                "2025-2027 is the sweet spot: administration established, policies in implementation, 3 years of runway",
                "Core policies (UHC, digital transformation, US alliance) have bipartisan support — survive administration changes",
                "Key laws are statutory, not EOs — they persist across presidencies",
                "Political dynasties: 80% of House seats held by family dynasties — relationships matter",
                "Best strategy: build relationships broadly across families, not with a single faction",
              ].map((p) => (
                <p key={p} className="text-xs text-muted-foreground">&bull; {p}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Geopolitical Impact of Tech Investment */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-bold text-lg">How Technology Investment Creates Geopolitical Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Health Diplomacy as Soft Power", desc: "When 20M Filipinos use American health technology daily, it deepens the alliance more than military exercises. Health is the most trusted form of international engagement. A US health-tech company serving BARMM Muslim populations counters anti-American narratives globally." },
              { title: "BARMM Peace-Building", desc: "Health investment in Bangsamoro directly supports the peace dividend. When former conflict zones get AI health screening, it demonstrates that peace delivers tangible improvements. This reduces recruitment for extremist groups and validates the entire peace process." },
              { title: "Friend-Shoring Gateway", desc: "American health-tech in the Philippines signals commitment to the US-allied alternative to Chinese technology dependency. Success here creates a replicable model for US health-tech deployment across allied ASEAN markets — building a technology ecosystem aligned with democratic values." },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
