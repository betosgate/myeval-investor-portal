import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scale, Megaphone, Users, Globe, Shield, CalendarClock, Building2, CheckCircle, AlertTriangle, Heart, Target, Landmark, FileText, Cpu } from "lucide-react";

export default function CampaignStrategyPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-red-100 text-red-700 border-red-300 mb-3">CONFIDENTIAL — CAMPAIGN STRATEGY</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Campaign & Governance Activation</h1>
        <p className="text-muted-foreground mt-2">How to communicate this platform to 117 million Filipinos, build the coalition to win, activate the government on Day 1, and protect the agenda so it survives beyond one presidency. The definitive playbook.</p>
      </div>

      {/* The Message */}
      <Card className="border-blue-300 bg-blue-50/50">
        <CardHeader><CardTitle className="flex items-center gap-2"><Megaphone className="h-5 w-5 text-blue-600" /> The One Message</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white rounded-xl p-6 border text-center">
            <p className="text-3xl font-bold tracking-tight text-primary mb-2">&ldquo;The Philippines is rich. Filipinos should be too.&rdquo;</p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">This reframes the national conversation from &ldquo;we are poor and need help&rdquo; to &ldquo;we are wealthy and are being robbed — of opportunity, of competence, of the future our resources should have already built.&rdquo; The businessman hears untapped potential. The jeepney driver hears &ldquo;you deserve more.&rdquo; The OFW hears &ldquo;you shouldn&apos;t have to leave.&rdquo;</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="text-sm font-semibold text-primary mb-2">Campaign Slogan: PILIPINAS, IKAW ANG YAMAN</h4>
            <p className="text-xs text-muted-foreground">(Philippines, You Are the Wealth.) Works on multiple levels: every Filipino is the country&apos;s greatest asset. &ldquo;Yaman&rdquo; means both wealth and treasure — it is dignity language. Chantable: Pi-li-pi-nas, I-kaw Ang Ya-man (8 syllables, 4 beats). Fits on a tarpaulin, a wristband, a hashtag. #IkawAngYaman</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="text-sm font-semibold mb-2">The 30-Second Pitch</h4>
            <p className="text-xs text-muted-foreground italic">&ldquo;The Philippines sends its best people abroad and imports everything it should be making at home. We have the talent, the location, the resources, and the population to be a top-15 economy. We are not poor — we are badly managed. This platform puts a sovereign wealth fund at the center of a strategy that brings OFWs home to real jobs, transitions our BPO industry to own AI instead of being replaced by it, fixes PhilHealth so no Filipino dies in a hospital hallway, rebuilds our schools so children learn instead of just attend, and executes infrastructure projects on time and on budget. Tama na. Sobra na.&rdquo;</p>
          </div>
        </CardContent>
      </Card>

      {/* Explaining to Each Audience */}
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" /> What Each Voter Block Needs to Hear</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[
            { block: "Youth (18-30) — 30%+ of voters", message: "You will not have to leave the Philippines to have a good life. We're training you in AI so you build the tools, not get replaced by them. Your diploma will mean something. Government jobs without connections — because we're digitizing every application.", channel: "TikTok, YouTube, campus events, esports partnerships" },
            { block: "OFW Families (10M + 30M family)", message: "We will build an economy where going abroad is a choice, not a necessity. Your remittances built this country. Now the country will invest like you do. When you come home, there will be a job, a livable wage, and a healthcare system that actually works.", channel: "Facebook groups, Viber, embassy events, GCash Remit integration" },
            { block: "Urban Poor (Manila informal settlers)", message: "When you go to the hospital, you will not be asked for money. Period. Your barangay will have a community health station. Your child's school will have a real teacher.", channel: "Radio, barangay organizing, church, SMS/Messenger" },
            { block: "Rural Farmers (5-6M households)", message: "Presyo ng palay, itataas namin. Post-harvest losses, ibababa namin. Crop insurance that actually pays when a typhoon hits. Farm-to-market roads — for real this time.", channel: "Radio (AM stations), agriculture extension, barangay assemblies, cooperatives" },
            { block: "BPO Workers (1.7M direct)", message: "We will not let AI destroy your industry. We will make you the AI industry. Free training in AI supervision, prompt engineering, data annotation. Companies that fire without retraining lose incentives.", channel: "Facebook groups, LinkedIn, workplace organizing, YouTube explainers" },
            { block: "Senior Citizens", message: "PhilHealth will cover your medicines. All of them. No copay. Every barangay will have health services for seniors. You built this country — you deserve to grow old without worrying about hospital bills.", channel: "Television, radio, church, senior citizen organizations, family TikTok" },
            { block: "Business Community", message: "Energy costs will go down. Permitting will be digital. Infrastructure will be finished. The SWF gives you a reliable, professional Filipino equity partner. Rule of law — your contracts enforced, corruption not a cost of business.", channel: "Business forums (MBC, PCCI), business media, private briefings with CEOs" },
          ].map((v) => (
            <div key={v.block} className="bg-muted/20 rounded-lg p-3 border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{v.block}</h4>
                  <p className="text-xs text-muted-foreground mt-1">&ldquo;{v.message}&rdquo;</p>
                </div>
                <Badge variant="outline" className="text-[10px] shrink-0 ml-2">{v.channel}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Media Strategy */}
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5" /> Media Strategy</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Television (Mass Reach)</h4>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">GMA-7:</span> Largest provincial reach. Pragmatically neutral. Offer exclusive access for favorable scheduling. Target: Unang Hirit + 24 Oras.</p>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">ABS-CBN (digital):</span> 30M+ YouTube subscribers. Do NOT make franchise a campaign issue. Use ANC for professional audiences.</p>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">TV5 (Pangilinan):</span> Infrastructure/digital policies benefit his portfolio. Natural alignment without explicit deals.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Social Media (#1 Country Globally)</h4>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">Facebook (85M users):</span> IS the internet in PH. Tiered structure: official page + supporters group (5M+) + regional groups + issue pages. Video-first (3-5x algorithm boost).</p>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">TikTok (40M users):</span> Where youth voters live. 15-60 sec policy videos. 50-100 micro-influencer partnerships. &ldquo;Alam mo ba?&rdquo; series.</p>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">YouTube:</span> Long-form credibility. Weekly 15-min policy explainers. Documentary-style content. Podcast interviews with experts.</p>
              <p className="text-xs text-muted-foreground">&bull; <span className="font-semibold">Live Selling Culture:</span> Partner popular live sellers for &ldquo;policy selling&rdquo; — explain PhilHealth reform while taking audience questions. Uniquely Filipino channel no campaign has fully exploited.</p>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
            <h4 className="text-xs font-semibold text-yellow-700 mb-1">Radio — The Forgotten Weapon</h4>
            <p className="text-xs text-muted-foreground">Radio reaches 30-35M Filipinos not regularly online. Buy block-time in 15-20 provincial AM stations. Weekly &ldquo;Magsasaka Report&rdquo; with rice prices, weather, AND agriculture policy. This is how you build rural loyalty that social media cannot reach.</p>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Coalition Building */}
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Landmark className="h-5 w-5" /> Building the Coalition — Political Reality</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">The Philippines is governed by ~178 political families controlling 73% of congressional seats. Any candidate without dynasty support loses. Period. This is not idealism — it is mathematics.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Must-Have Alliances</h4>
              {[
                { family: "Duterte family (Davao)", why: "Controls 15-20% of electorate. Alliance or neutrality essential. Frame platform as 'continuing and improving' BBB.", risk: "High" },
                { family: "Romualdez (Leyte/House)", why: "Speaker controls the House. Legislative allies needed for SWF reform, PhilHealth, education.", risk: "Medium" },
                { family: "Villar (Las Piñas/national)", why: "Richest Filipino. Controls real estate + mining. Pragmatic — allies with winners. Infrastructure aligns with business.", risk: "Low" },
                { family: "Cebu dynasties (Osmeña/Garcia)", why: "Controls Central Visayas vote. Essential for Visayas.", risk: "Medium" },
              ].map((a) => (
                <div key={a.family} className="text-xs bg-white rounded p-2 border mb-1">
                  <span className="font-semibold">{a.family}</span>
                  <p className="text-muted-foreground">{a.why}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Other Critical Allies</h4>
              {[
                { entity: "Catholic Church (CBCP)", approach: "Emphasize health + education + anti-corruption. Do NOT engage on social issues (RH, divorce). Personal meetings with Manila + Cebu archbishops." },
                { entity: "Iglesia ni Cristo", approach: "2-3M bloc votes. INC negotiates transactionally. Weigh cost-benefit carefully." },
                { entity: "Business community", approach: "Sector-specific private briefings (not one big forum). Finance, infrastructure, energy, tech — each gets their own data." },
                { entity: "Military/police", approach: "Seek RESPECT not endorsement. Brief on BARMM, maritime security, cybersecurity. Appoint credible defense adviser early." },
              ].map((a) => (
                <div key={a.entity} className="text-xs bg-white rounded p-2 border mb-1">
                  <span className="font-semibold">{a.entity}</span>
                  <p className="text-muted-foreground">{a.approach}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Calendar */}
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><CalendarClock className="h-5 w-5" /> Campaign Calendar</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {[
            { phase: "NOW — Dec 2026", title: "The Ideas Phase", desc: "Launch policy platform as 'national agenda' through advocacy organization. Host forums. Generate media around IDEAS, not candidacy. Build intellectual credibility." },
            { phase: "Jan — Jun 2027", title: "The Movement Phase", desc: "Community chapters, volunteer sign-ups, social media presence. Candidate does speaking, media, provincial visits — but 'not yet decided.' Creates anticipation." },
            { phase: "Jul — Sep 2027", title: "The Declaration Phase", desc: "Announce intent to run. Major media event — not a press conference, a nationally televised rally. Lay out the vision, challenge the nation." },
            { phase: "Oct 2027", title: "Filing", desc: "File candidacy with COMELEC. Massive show of public support — thousands accompanying the filing. Announces VP and senatorial slate." },
            { phase: "Oct 2027 — Jan 2028", title: "The Pre-Campaign", desc: "Cement alliances. Announce slate. Recruit local candidates. Build ground game in every target barangay." },
            { phase: "Feb — May 2028", title: "The Campaign (90 days)", desc: "Rallies, debates, advertising, ground organizing. Message, coalition, and machinery must be set. Execution, not strategy." },
            { phase: "May 8, 2028", title: "ELECTION DAY", desc: "" },
          ].map((p) => (
            <div key={p.phase} className="flex items-start gap-3 bg-muted/20 rounded-lg p-3 border">
              <Badge variant="outline" className="font-mono text-[10px] shrink-0 w-28 justify-center">{p.phase}</Badge>
              <div>
                <p className="text-sm font-semibold">{p.title}</p>
                {p.desc && <p className="text-xs text-muted-foreground">{p.desc}</p>}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Separator />

      {/* First 100 Days */}
      <Card className="border-green-300 bg-green-50/50">
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-green-600" /> First 100 Days — What People FEEL</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2">First WEEK (Days 1-7) — Visible Immediately</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "\"No Filipino will be turned away from a public hospital for inability to pay, effective today.\" (DOH administrative order, Day 1. Every Filipino has a hospital horror story.)",
                "Announce 50 infrastructure projects that are 80%+ complete but stalled. \"These will be finished in 100 days or the contractor is blacklisted.\"",
                "Launch Government Transparency Portal — all EOs, appointments, contracts published in real time from Day 1.",
                "Announce 90-day electricity pricing review — signal government is on consumer's side against power industry.",
                "Call 3 OFWs in distress situations live on social media. Announce immediate intervention. Costs nothing, enormous emotional impact.",
              ].map((a, i) => (
                <div key={a} className="text-xs bg-white border rounded p-2 flex items-start gap-2">
                  <span className="font-mono text-green-700 font-bold shrink-0">{i + 1}.</span>
                  <span className="text-muted-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">First MONTH (Days 1-30)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "PhilHealth copayment elimination begins in 20 poorest provinces",
                "First 10 community health stations break ground (Manila + Visayas + BARMM)",
                "50,000 new teaching positions posted (announcement creates hope)",
                "Rice price intervention — release NFA buffer stock. Visible in every palengke.",
                "Anti-corruption: announce first 3 cases under investigation. Name them.",
                "Infrastructure transparency dashboard goes live with weekly progress photos",
                "Meet top 10 BPO companies. Announce AI Transition Council. Signal to 1.7M workers.",
              ].map((a, i) => (
                <div key={a} className="text-xs bg-white border rounded p-2 flex items-start gap-2">
                  <span className="font-mono text-green-700 font-bold shrink-0">{i + 1}.</span>
                  <span className="text-muted-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border">
            <h4 className="text-xs font-semibold text-primary mb-1">The Political Capital Sequence</h4>
            <p className="text-xs text-muted-foreground"><span className="font-semibold">Popular before structural:</span> Months 1-3: quick wins (health access, infrastructure, transparency). Months 4-6: structural reforms that require goodwill (SWF, PhilHealth governance). Months 7-12: hard reforms (tax admin, energy market, education overhaul).</p>
            <p className="text-xs text-muted-foreground mt-1"><span className="font-semibold">Visible before invisible:</span> Roads, hospitals, rice prices first. Tax collection, procurement reform, digital backend second. The visible generates the political capital to do the invisible.</p>
          </div>
        </CardContent>
      </Card>

      {/* Ministry Appointments */}
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Building2 className="h-5 w-5" /> Ministry Activation — Who Goes Where</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {[
            { position: "Secretary of Finance", type: "Macroeconomist respected by rating agencies + Congress", mandate: "Protect BBB+ rating, redesign SWF governance, tax administration reform, Medium-Term Fiscal Framework" },
            { position: "Secretary of Health", type: "Public health physician with hospital management + political skills", mandate: "PhilHealth copay elimination, 50 community health stations Year 1, AI diagnostic pilots, TB program reinvigoration" },
            { position: "Secretary of Education", type: "DepEd insider with scale experience, NOT an academic", mandate: "Emergency curriculum reform, 50K new teachers, digital classrooms in 5K poorest schools, school feeding expansion" },
            { position: "PhilHealth President", type: "Health insurance exec with fraud investigation experience", mandate: "AI fraud detection (save PHP 20-30B/yr), copay elimination, drug formulary expansion, monthly transparency reporting" },
            { position: "SWF/Maharlika CEO", type: "Global fund manager, NO political affiliation, internationally recruited", mandate: "Santiago Principles compliance, professional investment team, 60/40 partnership framework, LMTI 10/10 transparency" },
            { position: "Anti-Corruption Czar", type: "Former prosecutor/judge with tech fluency, willing to go after allies", mandate: "Digital procurement all agencies, audit previous contracts, corruption reporting platform, prosecute 3-5 cases in 100 days" },
            { position: "DICT Secretary", type: "Tech exec with government interoperability experience", mandate: "Digitize 10 highest-volume services, PhilSys integration, National Cybersecurity Center, AI governance framework" },
            { position: "Transport Authority Head", type: "Transport planner from Singapore LTA / Hong Kong MTR caliber", mandate: "State of Metro Manila Transport report, smart traffic signals, coordinate all rail projects, real-time transit info system" },
            { position: "BARMM Liaison", type: "Trusted by BOTH national + BARMM government", mandate: "20 health station sites, SWF allocation for BARMM, block grant implementation, electrification + connectivity" },
          ].map((m) => (
            <div key={m.position} className="bg-muted/20 rounded-lg p-3 border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold">{m.position}</p>
                  <p className="text-xs text-muted-foreground">Type: {m.type}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1"><span className="font-semibold">100-day mandate:</span> {m.mandate}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Separator />

      {/* Protecting the Agenda */}
      <Card className="border-red-200 bg-red-50/30">
        <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-red-600" /> Protecting the Agenda — Making Reforms Survive the Next President</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">The Philippines&apos; fundamental problem is not bad policy — it is that good policy gets reversed every 6 years. Every president starts from scratch. The lock-in strategy: create constituencies, institutions, and laws that are politically impossible to reverse.</p>

          <div>
            <h4 className="text-sm font-semibold mb-2">Must-Legislate (EOs Can Be Reversed; Laws Cannot)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {[
                "Sovereign Wealth Fund Act (superseding Maharlika) — independent governance",
                "Universal Healthcare Act amendments — codify copay elimination + AI health",
                "Education Emergency Act — minimum budget floors, teacher compensation in law",
                "AI Transition & Worker Protection Act — retraining mandates",
                "Digital Governance Act — mandate e-procurement + transparency portal",
                "Climate Resilience Act — infrastructure standards + insurance mandates",
                "OFW Welfare & Reintegration Act — portable benefits + return programs",
              ].map((l) => (
                <p key={l} className="text-xs text-muted-foreground flex items-start gap-1 bg-white rounded p-1.5 border">
                  <FileText className="h-3 w-3 mt-0.5 shrink-0 text-primary" />{l}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Create Constituencies That Fight to Keep Reforms</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { reform: "PhilHealth reform creates patients", why: "Once 60M Filipinos have copay-free care, ANY politician who reverses it commits political suicide." },
                { reform: "SWF creates citizen-shareholders", why: "If returns flow to individual accounts (even PHP 500/yr), every Filipino has personal interest in the fund's survival." },
                { reform: "BPO retraining creates AI workers", why: "100K retrained workers earning more than before = constituency that defends the program." },
                { reform: "Infrastructure creates permanent monuments", why: "The next president cannot un-build a subway. Every road, school, hospital is permanent legacy." },
                { reform: "Digital transparency creates addicts", why: "Once citizens track spending in real time, removing transparency generates immediate backlash." },
                { reform: "Teacher hiring creates 50K permanent employees", why: "Cannot be easily fired. Their salaries become a fiscal commitment that reversal = political suicide." },
              ].map((c) => (
                <div key={c.reform} className="text-xs bg-white rounded p-2 border">
                  <p className="font-semibold">{c.reform}</p>
                  <p className="text-muted-foreground">{c.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border">
            <h4 className="text-sm font-semibold text-primary mb-1">The Meta-Strategy</h4>
            <p className="text-xs text-muted-foreground">Design every reform so that <span className="font-semibold text-foreground">reversal hurts more people than continuation costs</span>. Make the reform so embedded in daily life that the next president finds it easier to claim credit for it than to dismantle it. This is how Singapore, South Korea, and Chile made their transformations permanent.</p>
          </div>
        </CardContent>
      </Card>

      {/* The Theory of Change */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-6 text-center space-y-4">
          <h3 className="text-2xl font-bold">The Theory of Change</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            {[
              { step: "1", title: "Win the Election", desc: "Technocratic platform + populist communication + regional coalitions + ground game in every barangay" },
              { step: "2", title: "Generate Capital", desc: "First 100 days: quick wins people FEEL — hospital access, infrastructure, transparency, anti-corruption" },
              { step: "3", title: "Spend Capital", desc: "Months 4-18: structural reforms — SWF restructuring, PhilHealth governance, education overhaul, digital government" },
              { step: "4", title: "Lock In Reforms", desc: "Legislation, institutional independence, constituencies that benefit and will fight to preserve" },
              { step: "5", title: "Leave Legacy", desc: "Reforms so embedded the next president cannot reverse them — and wouldn't want to, because they're working" },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-lg p-3 border">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                  <span className="font-mono font-bold text-primary">{s.step}</span>
                </div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-muted-foreground mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
          <Separator />
          <p className="text-lg font-bold text-primary">Pilipinas, Ikaw Ang Yaman.</p>
          <p className="text-xs text-muted-foreground">The Philippines does not lack resources, talent, or potential. It lacks a government that can execute competently, invest wisely, and resist the gravitational pull of corruption and short-termism. This platform — and this activation strategy — is the blueprint for breaking that cycle.</p>
        </CardContent>
      </Card>
    </div>
  );
}
