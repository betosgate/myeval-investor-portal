import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight, Plane, Users, Building2, Briefcase, Shield,
  CheckCircle, XCircle, Handshake, CalendarClock, Globe,
  UserCheck, ClipboardList, Phone, Mail,
} from "lucide-react";

const ambassadorDos = [
  "Meet government officials and health ministry leadership",
  "Present MyEval.ai capabilities to hospital C-suites (CEO, CTO, CMO)",
  "Pitch insurance/payer executives on the value proposition",
  "Attend conferences and represent MyEval.ai on stage",
  "Host client dinners and relationship-building events",
  "Negotiate high-level MOUs and partnership frameworks",
  "Introduce the Country Manager to their key contacts",
  "Report back to CEO/board on market conditions and opportunities",
  "Identify and flag risks, political dynamics, and competitive threats",
  "Make the case for urgency — create FOMO with decision-makers",
];

const ambassadorDonts = [
  "Hire local staff — that's the Country Manager + HR Director's job",
  "Set up legal entities — that's the Market Entry Strategist's job",
  "Open bank accounts — that's the Market Entry Strategist + Finance team",
  "Negotiate detailed contract terms — that's Legal Counsel's job",
  "Manage technical integrations — that's the Tech Localization Strategist + in-country tech lead",
  "Run day-to-day operations — that's the Country Manager's job",
  "Handle compliance filings — that's the Regulatory Strategist's job",
  "Manage vendor relationships — that's the Country Manager's job",
  "Create marketing materials — that's the VP Marketing's job",
  "Do follow-up calls after meetings — that's the BizDev Rep's job",
];

const handoffProtocol = [
  {
    phase: "Pre-Visit (1-2 weeks before)",
    owner: "BD Rep + Country Manager (if hired)",
    ambassadorRole: "Review briefing packet, rehearse key talking points",
    actions: [
      "BD Rep schedules all meetings and confirms attendees",
      "BD Rep prepares briefing packet: company overview, key contacts, meeting objectives",
      "Regulatory Strategist provides country-specific compliance talking points",
      "Healthcare Partnerships Strategist provides partner-specific pitch deck",
      "Country Manager (if in place) provides local context and relationship notes",
      "Travel logistics handled by Executive Assistant at US HQ",
    ],
  },
  {
    phase: "During Visit (5-7 days in-country)",
    owner: "Ambassadors (front stage) + BD Rep (back stage)",
    ambassadorRole: "Present, pitch, build relationships, create urgency",
    actions: [
      "Ambassadors lead all C-suite and government meetings",
      "BD Rep takes notes, captures action items, handles logistics",
      "Ambassadors host 2-3 client dinners (max 6 people per dinner)",
      "Ambassadors attend 1 conference/event if timing aligns",
      "Ambassadors introduce the Country Manager to all key contacts in-person",
      "Daily 15-min debrief call with CEO at end of each day",
      "BD Rep sends same-day thank-you emails to all meeting attendees",
    ],
  },
  {
    phase: "Post-Visit Handoff (within 48 hours)",
    owner: "Ambassadors hand off to execution teams",
    ambassadorRole: "File trip report, then move to next country. DO NOT follow up.",
    actions: [
      "Ambassadors file Trip Report (template: contacts met, commitments made, next steps, risks)",
      "Trip Report goes to: CEO, CRO, Country Manager, relevant Strategist",
      "Country Manager owns ALL follow-up from this point forward",
      "BD Rep sends follow-up proposals/decks within 48 hours of each meeting",
      "Healthcare Partnerships Strategist begins detailed contract negotiation",
      "Tech Localization Strategist begins integration scoping with technical contacts",
      "Regulatory Strategist files any compliance-related follow-ups",
      "Ambassadors DO NOT contact the partner again until next scheduled visit",
    ],
  },
];

const raciMatrix = [
  { activity: "Initial government meeting", ambassadors: "R", countryMgr: "I", strategist: "C", bdRep: "A", legal: "I", tech: "I" },
  { activity: "Hospital C-suite pitch", ambassadors: "R", countryMgr: "I", strategist: "C", bdRep: "A", legal: "I", tech: "I" },
  { activity: "Insurance executive pitch", ambassadors: "R", countryMgr: "I", strategist: "C", bdRep: "A", legal: "I", tech: "I" },
  { activity: "Contract negotiation", ambassadors: "I", countryMgr: "C", strategist: "C", bdRep: "A", legal: "R", tech: "I" },
  { activity: "Entity setup / registration", ambassadors: "I", countryMgr: "I", strategist: "R", bdRep: "I", legal: "A", tech: "I" },
  { activity: "Local staff hiring", ambassadors: "I", countryMgr: "R", strategist: "C", bdRep: "I", legal: "C", tech: "I" },
  { activity: "Technical integration", ambassadors: "I", countryMgr: "I", strategist: "C", bdRep: "I", legal: "I", tech: "R" },
  { activity: "Compliance filings", ambassadors: "I", countryMgr: "I", strategist: "R", bdRep: "I", legal: "A", tech: "C" },
  { activity: "Bank account setup", ambassadors: "I", countryMgr: "C", strategist: "R", bdRep: "I", legal: "A", tech: "I" },
  { activity: "Marketing localization", ambassadors: "I", countryMgr: "A", strategist: "I", bdRep: "C", legal: "I", tech: "I" },
  { activity: "Partner follow-up calls", ambassadors: "I", countryMgr: "C", strategist: "I", bdRep: "R", legal: "I", tech: "I" },
  { activity: "Pilot deployment", ambassadors: "I", countryMgr: "A", strategist: "I", bdRep: "C", legal: "I", tech: "R" },
  { activity: "Conference attendance", ambassadors: "R", countryMgr: "A", strategist: "I", bdRep: "C", legal: "I", tech: "I" },
  { activity: "Monthly board report", ambassadors: "R", countryMgr: "C", strategist: "C", bdRep: "I", legal: "I", tech: "I" },
];

const raciColors: Record<string, string> = {
  R: "bg-blue-500/30 text-blue-300",
  A: "bg-green-500/30 text-green-300",
  C: "bg-yellow-500/30 text-yellow-300",
  I: "bg-muted text-muted-foreground",
};

const buildSequence = [
  {
    month: "Month 0",
    title: "Fund Closes — Hire Core Team",
    who: "CEO + Investors",
    actions: [
      "Hire 4 Strategists (90-day contracts): Gov Relations, Healthcare Partnerships, Tech Localization, Market Entry",
      "Hire 2 Ambassador-Directors (permanent): Asia-Pacific, Latin America",
      "Hire Executive Assistant (travel logistics for ambassadors)",
      "Hire VP Engineering and VP Product (platform readiness)",
    ],
    handoff: "Strategists begin country research. Ambassadors begin travel planning.",
  },
  {
    month: "Month 1-2",
    title: "Strategists Lay Groundwork — Ambassadors Visit First Countries",
    who: "All 4 Strategists + 2 Ambassadors",
    actions: [
      "Market Entry Strategist: Files entity registrations in India, Brazil, Colombia, Thailand",
      "Regulatory Strategist: Begins ABDM sandbox, BOI application, LGPD assessment",
      "Healthcare Partnerships Strategist: Identifies first 20 target partners, prepares pitch decks",
      "Ambassadors visit India (Week 2-3) + Thailand (Week 4-5) — first introductions",
      "Gov Relations Strategist: Secures embassy introductions, government meeting requests",
    ],
    handoff: "Ambassador Trip Reports filed. Strategists own all follow-ups.",
  },
  {
    month: "Month 2-3",
    title: "First Partnerships Forming — Country Managers Hired",
    who: "Strategists + Ambassadors + New Country Managers",
    actions: [
      "Ambassadors visit Colombia (Week 6-7) + Brazil (Week 8-9)",
      "Healthcare Partnerships Strategist: Negotiates first pilot agreements (Apollo, BDMS, EPS Sura)",
      "Market Entry Strategist: Entity setup complete in India + Brazil. Opens bank accounts.",
      "Country Managers hired in India and Colombia (first 2 markets)",
      "Ambassadors INTRODUCE Country Managers to all key contacts during visits",
      "Tech Localization Strategist: ABDM sandbox active, begins RNDS registration",
    ],
    handoff: "Country Managers take over daily in-country operations. Ambassadors continue to new countries.",
  },
  {
    month: "Month 3-4",
    title: "Strategist Phase Peaks — Pilots Begin",
    who: "Strategists winding down + Country Managers ramping up",
    actions: [
      "Ambassadors visit Vietnam (Week 10-11) + Bangladesh (Week 12-13)",
      "First pilot goes live: Apollo Hospitals India or BDMS Thailand",
      "Country Managers in India/Colombia now own all relationships",
      "Market Entry Strategist: Entity setup in Vietnam, Thailand, Argentina",
      "Healthcare Partnerships Strategist: 5+ signed LOIs",
      "BD Reps hired in India, Brazil, Colombia — start partner follow-ups",
    ],
    handoff: "Strategists begin transition documentation. BD Reps take over meeting follow-ups.",
  },
  {
    month: "Month 4-6",
    title: "Strategists Exit — Country Teams Own Operations",
    who: "Country Managers + In-Country Teams + Ambassadors (periodic visits)",
    actions: [
      "90-day Strategists complete and hand off playbooks",
      "Gov Relations Strategist: Signed MOUs with 2+ government agencies",
      "Market Entry Strategist: All 8 entities registered or in-progress",
      "Country Managers in 6 markets, BD Reps in 4 markets",
      "Tech Integration Specialists hired in India, Brazil, Thailand",
      "Ambassadors visit Argentina (Week 16) + Bolivia (Week 18)",
      "Ambassadors now on 6-8 week rotation cycle across all countries",
    ],
    handoff: "Strategists remain as advisors (reduced retainer). Full operational control with Country Managers.",
  },
  {
    month: "Month 6-12",
    title: "Ambassadors in Steady-State — Pure Relationship Management",
    who: "Ambassadors (relationship) + Country Teams (execution)",
    actions: [
      "Ambassadors visit each country every 6-8 weeks on rotation",
      "Each visit: 2-3 executive meetings + 1 government touchpoint + 1 dinner",
      "Ambassadors escalate only — they bring in CRO/CEO for major deal closings",
      "Country Managers handle ALL operational decisions independently",
      "BD Reps own ALL partner communication between ambassador visits",
      "Ambassador role evolves from 'opener' to 'relationship maintainer'",
    ],
    handoff: "By Month 12, Country Managers should be able to run their market with minimal ambassador involvement.",
  },
];

const communicationCadence = [
  { meeting: "Ambassador Daily Debrief (during travel)", frequency: "Daily (when in-country)", attendees: "2 Ambassadors + CEO", format: "15-min call, WhatsApp voice", purpose: "Real-time intelligence from meetings that day" },
  { meeting: "Trip Report Filing", frequency: "Within 48 hrs of each country visit", attendees: "Ambassadors → CEO, CRO, Country Manager", format: "Written report (template)", purpose: "Formal record of contacts, commitments, next steps" },
  { meeting: "Country Manager Weekly Standup", frequency: "Weekly (Monday)", attendees: "Country Manager + CRO + relevant Strategist", format: "30-min video call", purpose: "Pipeline updates, blockers, resource requests" },
  { meeting: "Strategist Weekly Sync", frequency: "Weekly (Wednesday)", attendees: "4 Strategists + CEO + COO", format: "45-min video call", purpose: "Cross-country coordination, handoff tracking" },
  { meeting: "Global Ops Review", frequency: "Biweekly (Friday)", attendees: "CEO, CRO, 2 Ambassadors, VP Eng, VP Product", format: "60-min video call", purpose: "Full business review, strategic decisions" },
  { meeting: "Board Update", frequency: "Monthly", attendees: "CEO + Board of Directors", format: "Board deck + 90-min call", purpose: "Financial review, milestone tracking, risk assessment" },
  { meeting: "All-Hands", frequency: "Monthly", attendees: "All employees globally", format: "30-min video broadcast + Q&A", purpose: "Culture, wins, alignment, transparency" },
];

export default function ExecutionProtocolPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Execution & Communication Protocol</h1>
        <p className="text-muted-foreground mt-2">
          The two Ambassador-Directors meet, pitch, and introduce — then hand off completely. Everything else is built and managed by the execution teams. This is the operating system for the entire expansion.
        </p>
      </div>

      {/* Ambassador Model */}
      <Card className="border-blue-600/30 bg-blue-600/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plane className="h-5 w-5" />
            The Ambassador Model
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            The two Ambassador-Directors are the <span className="font-semibold text-blue-400">front door</span> of MyEval.ai in every country. They open relationships, create urgency, and build trust at the executive level. They travel together, always. But they <span className="font-semibold text-red-400">never</span> manage operations, negotiate contracts, hire staff, or handle follow-ups. The moment they leave a country, the execution team takes over completely.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1">
                <CheckCircle className="h-4 w-4" /> Ambassadors DO
              </h3>
              {ambassadorDos.map((d) => (
                <p key={d} className="text-xs text-muted-foreground flex items-start gap-2 mb-1">
                  <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-green-400" />{d}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-1">
                <XCircle className="h-4 w-4" /> Ambassadors DO NOT
              </h3>
              {ambassadorDonts.map((d) => (
                <p key={d} className="text-xs text-muted-foreground flex items-start gap-2 mb-1">
                  <XCircle className="h-3 w-3 mt-0.5 shrink-0 text-red-400" />{d}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visit Protocol */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Visit Protocol: Before, During, After
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {handoffProtocol.map((phase, i) => (
            <div key={phase.phase}>
              <div className="flex items-center gap-3 mb-2">
                <Badge className={i === 0 ? "bg-blue-500/20 text-blue-400" : i === 1 ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}>
                  {phase.phase}
                </Badge>
                <span className="text-xs text-muted-foreground">Owner: <span className="font-medium text-foreground">{phase.owner}</span></span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                <span className="font-medium text-foreground">Ambassador Role:</span> {phase.ambassadorRole}
              </p>
              <div className="grid grid-cols-2 gap-1">
                {phase.actions.map((a) => (
                  <p key={a} className="text-xs text-muted-foreground flex items-start gap-1">
                    <span className="text-muted-foreground mt-0.5">&bull;</span>{a}
                  </p>
                ))}
              </div>
              {i < handoffProtocol.length - 1 && (
                <div className="flex justify-center py-2"><ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" /></div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* RACI Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5" />
            RACI Matrix — Who Does What
          </CardTitle>
          <p className="text-xs text-muted-foreground">R = Responsible (does it), A = Accountable (owns it), C = Consulted, I = Informed</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-2 text-left text-muted-foreground font-medium">Activity</th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium">Ambassadors</th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium">Country Mgr</th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium">Strategist</th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium">BD Rep</th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium">Legal</th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium">Tech Lead</th>
                </tr>
              </thead>
              <tbody>
                {raciMatrix.map((row) => (
                  <tr key={row.activity} className="border-b border-border/50">
                    <td className="py-2 px-2 font-medium">{row.activity}</td>
                    {[row.ambassadors, row.countryMgr, row.strategist, row.bdRep, row.legal, row.tech].map((val, i) => (
                      <td key={i} className="py-2 px-2 text-center">
                        <Badge className={`${raciColors[val]} text-[10px] px-1.5 py-0`}>{val}</Badge>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Build Sequence */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <CalendarClock className="h-5 w-5" />
          How It Builds: Month-by-Month Execution Sequence
        </h2>
        {buildSequence.map((step) => (
          <Card key={step.month}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Badge variant="outline" className="font-mono">{step.month}</Badge>
                  {step.title}
                </span>
                <span className="text-xs text-muted-foreground font-normal">Led by: {step.who}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-1">
                {step.actions.map((a) => (
                  <p key={a} className="text-xs text-muted-foreground">&bull; {a}</p>
                ))}
              </div>
              <div className="bg-muted/30 rounded-lg p-2 mt-2">
                <p className="text-xs"><span className="font-semibold text-foreground">Handoff:</span> <span className="text-muted-foreground">{step.handoff}</span></p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Communication Cadence */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Communication Cadence
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {communicationCadence.map((c) => (
              <div key={c.meeting} className="flex items-start justify-between bg-muted/20 rounded-lg p-3">
                <div className="flex-1">
                  <p className="text-sm font-medium">{c.meeting}</p>
                  <p className="text-xs text-muted-foreground">{c.attendees}</p>
                  <p className="text-xs text-muted-foreground">{c.purpose}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <Badge variant="outline" className="text-xs">{c.frequency}</Badge>
                  <p className="text-[10px] text-muted-foreground mt-1">{c.format}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* The Golden Rule */}
      <Card className="border-yellow-600/30 bg-yellow-600/5">
        <CardContent className="p-6">
          <h3 className="font-semibold text-yellow-400 text-lg mb-2">The Golden Rule</h3>
          <p className="text-sm text-muted-foreground">
            Ambassadors open doors. Country teams walk through them. The moment an ambassador files their Trip Report, they are <span className="font-semibold text-foreground">done</span> with that country until the next scheduled visit. No follow-up emails. No &ldquo;just checking in&rdquo; calls. No micromanaging the Country Manager. The ambassador&apos;s job is to create the <span className="text-yellow-400 font-medium">initial spark</span>. Everything that follows — the fire, the fuel, the steady burn — that belongs to the execution teams on the ground.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
