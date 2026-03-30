export interface CountryOperations {
  country: string;
  office: {
    city: string;
    neighborhood: string;
    type: string;
    monthlyCost: string;
    transition: string;
  };
  legalCounsel: { firm: string; specialty: string; retainer: string }[];
  banking: { bank: string; paymentProcessor: string; payroll: string };
  outreachSequence: {
    order: number;
    target: string;
    approach: string;
    pitch: string;
    timeline: string;
    dominoEffect: string;
  }[];
  conferences: { name: string; timing: string; location: string; why: string }[];
  keyHires: { role: string; salary: string; source: string }[];
  elevatorPitch: string;
}

export const groundOps: CountryOperations[] = [
  {
    country: "Vietnam",
    office: {
      city: "Ho Chi Minh City",
      neighborhood: "District 1, Bitexco Financial Tower area or District 7 (Phu My Hung tech hub)",
      type: "Co-working first 6 months (Dreamplex or Toong), then dedicated 80m\u00B2 office",
      monthlyCost: "Co-working: $800-1,200/month (5 desks); Dedicated: $2,500-3,500/month",
      transition: "Month 7: Move to dedicated office when team exceeds 6 people",
    },
    legalCounsel: [
      { firm: "VILAF (Vietnam International Law Firm)", specialty: "Foreign investment, health regulations, data privacy", retainer: "$3,000-5,000/month" },
      { firm: "Baker McKenzie Vietnam", specialty: "International corporate, IP, regulatory compliance", retainer: "$5,000-8,000/month" },
      { firm: "Tilleke & Gibbins (Hanoi/HCMC)", specialty: "Pharma/health licensing, trademark, employment", retainer: "$3,000-6,000/month" },
    ],
    banking: {
      bank: "Vietcombank (most foreign-company friendly) or HSBC Vietnam",
      paymentProcessor: "MoMo, ZaloPay, VNPay for consumer payments; Stripe for international",
      payroll: "Papaya Global or local provider (HR2B Vietnam)",
    },
    outreachSequence: [
      {
        order: 1,
        target: "FPT Healthcare (CEO / VP of Product)",
        approach: "Warm introduction through FPT Corporation's international partnerships division. FPT is publicly traded and has an open innovation policy.",
        pitch: "We add AI-powered diagnostics as a premium module to FPT.eHospital — your 500 hospitals get AI capabilities, we get instant distribution, you get a new revenue stream of $3-8K/hospital/year.",
        timeline: "Month 1-2: Initial meeting. Month 3-4: Technical POC. Month 5: Partnership signed.",
        dominoEffect: "FPT partnership gives us instant credibility with MOH (FPT is a national champion) and access to 500+ hospitals without individual sales calls.",
      },
      {
        order: 2,
        target: "Vinmec Health System (Group CTO)",
        approach: "Direct outreach to Vinmec CTO through LinkedIn/conference. Vinmec actively attends Vietnam Health IT Summit.",
        pitch: "Your premium patients expect AI-powered health intelligence. We deliver personalized risk scoring and drug interaction checking that differentiates Vinmec from every other private hospital chain in Vietnam. Pilot in 1 hospital, 3 months, measurable outcomes.",
        timeline: "Month 2-3: CTO meeting. Month 4-5: Pilot in Vinmec Central Park (HCMC). Month 6: Results and expansion.",
        dominoEffect: "Vinmec is VinGroup — the most powerful private conglomerate in Vietnam. Their endorsement opens doors across all VinGroup companies and signals quality to government.",
      },
      {
        order: 3,
        target: "eHealth Administration, Ministry of Health (Director)",
        approach: "Formal letter of introduction from the US Embassy Commercial Service in Hanoi (they actively assist US health tech companies). Follow up with an in-person presentation at MOH offices.",
        pitch: "Vietnam's Digital Transformation Program mandates AI in healthcare by 2030. MyEval.ai is already integrated with FPT.eHospital (serving your hospitals) and Vinmec (your premier private chain). We're ready to serve as the AI analytics layer for your national EHR initiative. Here are the results from our pilots.",
        timeline: "Month 4-5: Embassy introduction. Month 6-7: MOH presentation. Month 8-10: Pilot MOU.",
        dominoEffect: "MOH endorsement converts into: (1) VSS payer integration access, (2) provincial health department contracts, (3) legitimacy for consumer marketing ('endorsed by Vietnam MOH').",
      },
      {
        order: 4,
        target: "Bao Viet Insurance (VP of Health Products)",
        approach: "Introduction through FPT (they have business relationships) or through Deloitte Vietnam (Bao Viet's auditor).",
        pitch: "We can reduce your claims processing costs by 3-5% and improve member health outcomes. We're already integrated with the hospital systems your members use. Let us analyze 100,000 historical claims — we'll show you the fraud and waste patterns for free as a proof of concept.",
        timeline: "Month 6-8: Meeting and POC proposal. Month 9-12: Pilot on 500K members.",
        dominoEffect: "Insurance revenue validates the business model and creates recurring revenue. Insurance companies talk to each other — Bao Viet success leads to PVI Holdings and Manulife Vietnam.",
      },
    ],
    conferences: [
      { name: "Vietnam Health IT Summit", timing: "Q2 annually", location: "Hanoi", why: "Primary gathering of MOH digital health leaders and hospital CIOs" },
      { name: "eHealth Vietnam", timing: "Q3 annually", location: "Ho Chi Minh City", why: "Largest digital health exhibition in Vietnam" },
      { name: "FPT Techday", timing: "November", location: "Hanoi", why: "FPT's flagship tech event — ideal for partnership announcements" },
      { name: "APAC Digital Health Summit", timing: "Q1 annually", location: "Singapore (regional)", why: "Regional visibility, meet Vietnamese delegates" },
    ],
    keyHires: [
      { role: "Country Manager", salary: "$3,000-5,000/month", source: "VietnamWorks, LinkedIn, headhunter (Navigos Group)" },
      { role: "Business Development (Gov)", salary: "$2,000-3,000/month", source: "Ex-MOH or ex-FPT employees via referral" },
      { role: "Technical Integration Lead", salary: "$2,500-4,000/month", source: "TopDev.vn, ITviec.com (Vietnam tech job boards)" },
      { role: "Government Liaison", salary: "$2,000-3,500/month", source: "Referral network — must have existing MOH relationships" },
    ],
    elevatorPitch: "Vietnam has mandated digital health transformation for 1,400 hospitals by 2030 but has no AI analytics layer. MyEval.ai is that layer — already partnered with FPT and Vinmec, serving 500+ facilities, and ready to power the Ministry of Health's vision for AI-driven population health.",
  },
  {
    country: "India",
    office: {
      city: "Bangalore (Bengaluru)",
      neighborhood: "Koramangala 4th Block or HSR Layout — India's health-tech startup epicenter",
      type: "Co-working first 6 months (WeWork Koramangala or Cowrks), then dedicated 150m\u00B2 office",
      monthlyCost: "Co-working: $1,200-2,000/month (8 desks); Dedicated: $3,000-5,000/month",
      transition: "Month 5: Move to dedicated office — India team grows fastest",
    },
    legalCounsel: [
      { firm: "Khaitan & Co", specialty: "Healthcare, FDI, regulatory, DPDPA compliance", retainer: "$4,000-7,000/month" },
      { firm: "AZB & Partners", specialty: "Corporate, health insurance regulations, IRDAI", retainer: "$5,000-8,000/month" },
      { firm: "Trilegal", specialty: "Technology, data protection, startup compliance", retainer: "$3,000-6,000/month" },
    ],
    banking: {
      bank: "HDFC Bank (best for foreign companies) or ICICI Bank",
      paymentProcessor: "Razorpay (UPI, cards, subscriptions) — dominant in health tech",
      payroll: "Zoho Payroll or Greytip (Indian payroll specialists)",
    },
    outreachSequence: [
      {
        order: 1,
        target: "Apollo Hospitals — CDO (Chief Digital Officer) & Apollo ProHealth VP",
        approach: "Direct LinkedIn outreach to Apollo CDO. Apollo has a public innovation partnership program. Attend NASSCOM Health Tech Summit (where Apollo presents annually). Alternative: warm introduction through Accenture India (Apollo's technology consultant).",
        pitch: "MyEval.ai reduces your pre-visit intake by 12 minutes per patient — across 20M annual encounters, that's $160M in physician time recovered. For Apollo ProHealth, our AI risk scoring increases preventive check-up package conversion by 15%. We're ABDM-certified. Pilot in 3 hospitals, 90 days, we measure and prove it.",
        timeline: "Month 1-2: CDO meeting. Month 3: Pilot agreement. Month 4-8: 3-hospital pilot.",
        dominoEffect: "Apollo is India's most recognized hospital brand. Their endorsement is worth more than any marketing spend. Other chains (Fortis, Max, Narayana) will follow Apollo's lead. Apollo ProHealth data validates our risk scoring algorithms for the Indian population.",
      },
      {
        order: 2,
        target: "National Health Authority (NHA) — ABDM Integration Division",
        approach: "Register on ABDM sandbox immediately (Month 1). Attend NHA's quarterly integration partner meetings. Submit formal partnership proposal after achieving sandbox certification.",
        pitch: "MyEval.ai is the AI-powered health evaluation engine that makes ABDM data actionable. We're already integrated with Apollo Hospitals — your largest empaneled private chain. We turn ABHA health records into personalized risk scores, screening recommendations, and drug interaction alerts. We want to be the intelligence layer of ABDM.",
        timeline: "Month 1-3: Sandbox registration and development. Month 3-6: Certification. Month 6-8: NHA partnership discussion.",
        dominoEffect: "ABDM certification + NHA partnership = access to 600M ABHA IDs, PM-JAY claims data, and UHI service discovery. This is the master key to India's health infrastructure.",
      },
      {
        order: 3,
        target: "Star Health Insurance — CTO & Chief Actuary",
        approach: "Introduction through Kotak Mahindra (Star Health's banker) or through Deloitte India (actuarial consulting). Star Health is headquartered in Chennai but has a Bangalore tech office.",
        pitch: "Your combined ratio is 103% — you're paying more in claims than you collect. We can identify 2-3 points of fraud and waste in your claims data using AI. That's $60-90M annual savings on your $3B premium book. Let us analyze 100K historical claims as a free proof of concept.",
        timeline: "Month 3-5: CTO meeting. Month 5-7: POC on 100K claims. Month 8: Pilot agreement.",
        dominoEffect: "Star Health is the largest standalone health insurer. Success here gives us the actuarial validation and case study to approach ICICI Lombard, HDFC ERGO, and others. Insurance contracts are high-value, long-duration, and recurring.",
      },
      {
        order: 4,
        target: "Karnataka State Health Agency (SHA) — PM-JAY state administrator",
        approach: "Introduction through NHA (after ABDM certification) or through Apollo Hospitals (major PM-JAY empaneled provider in Karnataka).",
        pitch: "Karnataka processes 2M+ PM-JAY claims/year. Our AI has been validated by Apollo Hospitals and Star Health Insurance. We can detect claims fraud, optimize hospital empanelment, and improve beneficiary health outcomes — all dashboarded in real-time for your team.",
        timeline: "Month 8-12: SHA engagement after building credibility with private sector wins.",
        dominoEffect: "State government success is replicable to 35 other states. Karnataka win → Maharashtra → Tamil Nadu → national rollout.",
      },
      {
        order: 5,
        target: "TCS/Infosys/Wipro — HR/Wellness Directors (Employer Portal)",
        approach: "Partner with corporate wellness consultants (OptimizeHealth, Vantage Fit) who already serve these IT companies. Or approach through the CII (Confederation of Indian Industry) Health Committee.",
        pitch: "India's IT sector has 5M employees with the highest lifestyle disease rates in the country. MyEval.ai replaces your annual HRA questionnaire with continuous AI-powered health monitoring. $2-4 PEPM is a fraction of the $15-25/employee you currently spend on annual health check-ups — and we provide 12 months of value, not a one-day test.",
        timeline: "Month 6-10: Pilot with one IT company (target: TCS, 600K employees).",
        dominoEffect: "One major IT employer = 200-600K employees. IT companies benchmark against each other — TCS adopting triggers Infosys, Wipro, HCL conversations within months.",
      },
    ],
    conferences: [
      { name: "NASSCOM Health Tech Summit", timing: "February", location: "Bangalore", why: "India's premier health-tech event. Apollo, NHA, and all major health IT players attend." },
      { name: "HIMSS India", timing: "September", location: "New Delhi", why: "Global health IT conference — government and hospital CIO audience" },
      { name: "India Health Summit (CII)", timing: "December", location: "New Delhi", why: "Policy-level event. Health ministers and insurance CEOs attend." },
      { name: "NHA ABDM Partner Meet", timing: "Quarterly", location: "New Delhi", why: "Direct access to NHA leadership and integration partners" },
    ],
    keyHires: [
      { role: "Country Manager", salary: "INR 2.5-4L/month ($3,000-4,800)", source: "Naukri.com, LinkedIn, headhunter (ABC Consultants)" },
      { role: "BD Lead — Hospitals", salary: "INR 1.5-2.5L/month ($1,800-3,000)", source: "Ex-Practo, ex-PharmEasy, ex-hospital IT sales" },
      { role: "BD Lead — Government/ABDM", salary: "INR 2-3L/month ($2,400-3,600)", source: "Ex-NHA, ex-NIC, ex-state health IT officers" },
      { role: "Technical Integration (x2)", salary: "INR 1.5-2.5L/month each ($1,800-3,000)", source: "LinkedIn, Instahyre, AngelList India" },
      { role: "Government Liaison", salary: "INR 1.5-2.5L/month ($1,800-3,000)", source: "Referral — must have ABDM/NHA network" },
    ],
    elevatorPitch: "India is building ABDM — the world's largest digital health infrastructure for 1.4 billion people. MyEval.ai is the AI intelligence layer that makes ABDM data actionable. We're already integrated with Apollo Hospitals and certified on ABDM. We turn health records into personalized risk scores that save hospitals time, insurers money, and patients' lives.",
  },
  {
    country: "Bangladesh",
    office: {
      city: "Dhaka",
      neighborhood: "Gulshan 2 or Banani — business district with international company presence",
      type: "Co-working (Regus Gulshan or rent a serviced office) for 12 months",
      monthlyCost: "Co-working: $400-700/month (3 desks); Small office: $800-1,200/month",
      transition: "Month 12: Evaluate move to Bangabandhu Hi-Tech City for 10-year tax holiday",
    },
    legalCounsel: [
      { firm: "A.S. & Associates", specialty: "Foreign investment, BIDA registration, health regulations", retainer: "$1,500-2,500/month" },
      { firm: "Lee Khan & Partners", specialty: "Corporate law, IP, employment", retainer: "$1,500-2,500/month" },
      { firm: "DFDL Bangladesh", specialty: "International investment, regulatory, tax", retainer: "$2,000-3,500/month" },
    ],
    banking: {
      bank: "Standard Chartered Bangladesh (best for foreign companies) or Dutch-Bangla Bank",
      paymentProcessor: "bKash API, Nagad, SSLCommerz (leading payment gateway)",
      payroll: "Manual initially (small team), transition to PayWell or local HR consultant",
    },
    outreachSequence: [
      {
        order: 1,
        target: "BRAC Health Programme Director",
        approach: "Approach through BRAC International headquarters (Amsterdam) or through the BRAC Health Programme office in Dhaka. BRAC actively seeks technology partners — they have a Technology for Development initiative.",
        pitch: "Your 97,000 Shasthya Shebikas screen 500K patients monthly but lack diagnostic support. MyEval.ai gives them an AI-powered triage tool on their phones — increasing diagnostic accuracy from 60% to 85%, reducing unnecessary referrals by 30%, and catching critical conditions 40% earlier. We build it to work offline on 2G networks.",
        timeline: "Month 1-3: BRAC HQ meeting. Month 4-5: Pilot design. Month 6-8: Deploy to 1,000 health workers.",
        dominoEffect: "BRAC is the world's largest NGO. Their endorsement opens doors with every development organization (DFID, USAID, World Bank, Gates Foundation) and the Bangladesh government. BRAC success = development funding for scale.",
      },
      {
        order: 2,
        target: "BGMEA (Garment Manufacturers Association) — Health Committee Chair",
        approach: "Approach through international brands' sustainability offices (H&M, Inditex/Zara, Primark). These brands mandate health programs for suppliers — they can introduce MyEval.ai to BGMEA as a recommended solution.",
        pitch: "4 million garment workers need health screening to comply with Accord and BSCI standards. MyEval.ai provides automated health evaluations at $0.25-0.50/worker/month — cheaper than your current manual process and far better for compliance reporting. International brands can mandate it as part of their ESG requirements.",
        timeline: "Month 2-4: Brand introductions (target H&M Bangladesh sustainability team). Month 5-6: BGMEA presentation. Month 7-10: Pilot in 10 factories.",
        dominoEffect: "Garment factory success creates a scalable B2B channel — 3,500 factories employing 4M workers. International brands fund the adoption because it improves their ESG scores. Revenue potential: $12-24M/year at full penetration.",
      },
      {
        order: 3,
        target: "DGHS — Director of MIS (Management Information System)",
        approach: "Introduction through WHO Bangladesh Country Office (WHO provides technical assistance to DGHS). Attend the Bangladesh Health Informatics Conference.",
        pitch: "Bangladesh uses DHIS2 for health reporting but has no AI analytics layer. MyEval.ai adds real-time disease outbreak detection, predictive analytics for resource allocation, and population health dashboards. We're already deployed with BRAC and serving 4M garment workers — we have Bangladeshi health data flowing through our system.",
        timeline: "Month 6-8: WHO introduction. Month 8-10: DGHS presentation. Month 10-14: Pilot in 5 districts.",
        dominoEffect: "Government adoption validates the platform nationally. DGHS endorsement enables health facility deployments across 64 districts.",
      },
    ],
    conferences: [
      { name: "Bangladesh Health Informatics Conference", timing: "Q1 annually", location: "Dhaka", why: "Primary health IT gathering — DGHS, WHO, and hospital IT leaders" },
      { name: "Digital Bangladesh Summit", timing: "Q4 annually", location: "Dhaka", why: "Government digital transformation showcase" },
      { name: "BRAC Development Conference", timing: "Biennial", location: "Dhaka", why: "Global development leaders, donor agencies" },
    ],
    keyHires: [
      { role: "Country Manager", salary: "BDT 150-250K/month ($1,200-2,100)", source: "BDJobs.com, LinkedIn, ex-BRAC/Grameenphone managers" },
      { role: "BD — BRAC/NGO Channel", salary: "BDT 80-120K/month ($670-1,000)", source: "Ex-BRAC Health Programme staff" },
      { role: "Technical Integration", salary: "BDT 100-150K/month ($830-1,250)", source: "basis.org.bd (Bangladesh software association)" },
    ],
    elevatorPitch: "Bangladesh has 175 million people, 97,000 community health workers, and 4 million garment factory workers — all needing health screening with no AI tools available. MyEval.ai deploys through BRAC (world's largest NGO) and international brands' supply chains simultaneously, creating two high-volume channels unique to this market.",
  },
  {
    country: "Thailand",
    office: {
      city: "Bangkok",
      neighborhood: "Silom/Sathorn (financial district) or Ploenchit/Sukhumvit (near hospitals)",
      type: "Co-working first 6 months (JustCo Sathorn or The Great Room), then dedicated office",
      monthlyCost: "Co-working: $1,000-1,800/month (5 desks); Dedicated: $3,000-4,500/month",
      transition: "Month 7: Dedicated office when team reaches 6+",
    },
    legalCounsel: [
      { firm: "Baker McKenzie Bangkok", specialty: "BOI promotion, health tech licensing, PDPA", retainer: "$4,000-7,000/month" },
      { firm: "Tilleke & Gibbins Bangkok", specialty: "FDA medical device, IP, corporate", retainer: "$3,500-6,000/month" },
      { firm: "Chandler MHM", specialty: "Foreign business, BOI, investment structuring", retainer: "$3,000-5,000/month" },
    ],
    banking: {
      bank: "Bangkok Bank (most foreign-friendly) or Kasikornbank (KBank)",
      paymentProcessor: "PromptPay (national QR), LINE Pay, TrueMoney, 2C2P gateway",
      payroll: "Links International Thailand or local PEO",
    },
    outreachSequence: [
      {
        order: 1,
        target: "BDMS Group — CTO / Innovation Lab Director",
        approach: "Direct approach through BDMS Innovation Lab (they have an open door policy for health-tech startups). Attend Thailand Health & Wellness Expo where BDMS presents.",
        pitch: "Bumrungrad sees 1.1M patients/year — 40% international. A $15-25 AI-powered pre-arrival assessment generates $6-10M/year from Bumrungrad alone and differentiates you as the world's most technologically advanced medical tourism destination. Pilot: 500 international patients at Bumrungrad over 60 days.",
        timeline: "Month 1-3: Innovation Lab meeting. Month 3-5: Bumrungrad pilot.",
        dominoEffect: "BDMS is the largest private hospital group in SE Asia. Success at Bumrungrad creates a case study that sells to every medical tourism hospital in Thailand and beyond (Singapore, Malaysia, UAE).",
      },
      {
        order: 2,
        target: "Thailand BOI (Board of Investment)",
        approach: "File BOI promotion application immediately upon incorporation. BOI has a One-Stop-Shop for investors and actively recruits health-tech companies.",
        pitch: "MyEval.ai is investing $3M in Thailand, creating 20+ high-skill jobs, and bringing AI health technology that supports Thailand 4.0 and the Bio-Circular-Green (BCG) economy model. We qualify for digital services promotion with 5-8 year CIT exemption.",
        timeline: "Month 1-2: BOI application filed. Month 3-4: BOI approval (they fast-track health-tech).",
        dominoEffect: "BOI promotion gives us: 100% foreign ownership, tax holiday, work permits, and the BOI stamp of approval which opens government doors instantly.",
      },
      {
        order: 3,
        target: "DEPA + Thailand FDA — Digital Health Sandbox",
        approach: "Apply to FDA Digital Health Sandbox with BDMS as clinical partner. Simultaneously apply for DEPA digital health innovation grant (up to THB 3M / $85K).",
        pitch: "We're already piloting at Bumrungrad (BDMS) with demonstrated results in international patient assessment. We're applying for sandbox approval to expand our AI features for diagnostic risk scoring, drug interactions, and chronic disease monitoring. This aligns with Thailand's Smart Health strategy under Thailand 4.0.",
        timeline: "Month 4-6: Sandbox application. Month 6-8: Sandbox admission. Month 8-14: 12-month sandbox testing.",
        dominoEffect: "FDA sandbox → full regulatory approval → can market AI diagnostic features broadly. DEPA grant → government credibility + funding for R&D activities.",
      },
      {
        order: 4,
        target: "NHSO — Innovation Unit Director",
        approach: "Approach through HSRI (Health Systems Research Institute) which advises NHSO on innovation. Attend NHSO Annual Conference.",
        pitch: "NHSO covers 47M lives for $6B/year. Our AI identifies the top 5% highest-risk patients for preventive intervention — industry evidence shows this reduces hospitalization by 20-30% for that cohort. Even targeting 100K high-risk patients in a pilot saves NHSO $15-25M. We're already in the FDA sandbox with clinical data from BDMS hospitals.",
        timeline: "Month 8-12: NHSO proposal. Month 12-16: Pilot with 100K UCS beneficiaries.",
        dominoEffect: "NHSO is the single largest health purchaser in Thailand. Success here = $50M+ contract potential. NHSO endorsement makes MyEval.ai the de facto health analytics platform in Thailand.",
      },
    ],
    conferences: [
      { name: "Thailand Health & Wellness Expo", timing: "September", location: "Bangkok", why: "Largest health exhibition — BDMS and all major hospitals exhibit" },
      { name: "NHSO Annual Conference", timing: "October", location: "Bangkok", why: "Direct access to NHSO leadership and policy discussions" },
      { name: "BOI Fair", timing: "Biennial", location: "Bangkok", why: "Investment promotion event — meet BOI officials" },
      { name: "DEPA Digital Health Forum", timing: "Q2 annually", location: "Bangkok", why: "Digital health policy and innovation showcase" },
    ],
    keyHires: [
      { role: "Country Manager", salary: "THB 150-250K/month ($4,300-7,100)", source: "JobsDB.com Thailand, LinkedIn, headhunter (Robert Walters Bangkok)" },
      { role: "BD — Hospitals/Medical Tourism", salary: "THB 80-120K/month ($2,300-3,400)", source: "Ex-BDMS, ex-Bumrungrad international marketing" },
      { role: "Technical Integration", salary: "THB 80-130K/month ($2,300-3,700)", source: "Thai Programmer forums, JobThai.com" },
      { role: "Government Liaison", salary: "THB 80-120K/month ($2,300-3,400)", source: "Ex-MOPH, ex-NHSO officials" },
    ],
    elevatorPitch: "Thailand is the world's #1 medical tourism destination serving 3.5M international patients annually — and none of them get AI-powered pre-arrival health assessments. MyEval.ai fills this gap while simultaneously serving NHSO's 47M universal coverage beneficiaries with preventive screening that reduces the $6B annual health spend.",
  },
  {
    country: "Colombia",
    office: {
      city: "Bogota",
      neighborhood: "Chapinero Alto or Usaqu\u00E9n — tech startup corridor near MinSalud offices",
      type: "Co-working first 6 months (WeWork Calle 100 or Selina Chapinero), then dedicated office",
      monthlyCost: "Co-working: $600-1,000/month (4 desks); Dedicated: $1,500-2,500/month",
      transition: "Month 6: Bogota becomes LatAm regional HQ, expand office",
    },
    legalCounsel: [
      { firm: "Posse Herrera Ruiz", specialty: "Health regulation, EPS compliance, foreign investment", retainer: "$2,000-4,000/month" },
      { firm: "Baker McKenzie Bogota", specialty: "Corporate, data privacy (Ley 1581), IP", retainer: "$3,000-5,000/month" },
      { firm: "Brigard Urrutia", specialty: "Tech companies, M&A, regulatory", retainer: "$2,500-4,000/month" },
    ],
    banking: {
      bank: "Bancolombia (largest, best for companies) or Banco de Bogota",
      paymentProcessor: "PayU Colombia, Mercado Pago, PSE (bank transfers — dominant for B2B)",
      payroll: "Deel Colombia or Ontop (LatAm payroll specialists)",
    },
    outreachSequence: [
      {
        order: 1,
        target: "EPS Sura — CTO and VP of Innovation (Grupo Sura)",
        approach: "Approach through Grupo Sura's innovation hub (Sura Ventures). Attend Colombia Salud Digital conference. EPS Sura actively partners with health-tech startups.",
        pitch: "EPS Sura manages 5.5M lives with $2B in claims — and your combined ratio can improve by 2-3 points with AI-powered claims analytics and fraud detection. That's $40-60M annual savings. We'll analyze 50,000 historical RIPS records for free as a proof of concept to demonstrate the value before you commit.",
        timeline: "Month 1-3: Sura Ventures meeting. Month 3-5: POC on 50K claims. Month 5-7: Pilot on 500K members.",
        dominoEffect: "Sura is Colombia's most respected brand. Their adoption signals quality to every other EPS, hospital, and government agency. Sura success → Sanitas (4.8M) → Compensar (3M) → cascade effect.",
      },
      {
        order: 2,
        target: "Fundaci\u00F3n Santa Fe de Bogot\u00E1 — Medical Director / CIO",
        approach: "Direct approach — Santa Fe is Colombia's most prestigious hospital and an academic medical center. They attend HIMSS Latin America and host their own innovation events.",
        pitch: "MyEval.ai adds AI-powered triage, pre-visit evaluation, and clinical decision support to your hospital. For your 500-bed facility, this saves 15 minutes per admission intake (6,000 admissions/year = 1,500 physician hours saved). We'll deploy as a 90-day pilot in your emergency department and ambulatory clinics.",
        timeline: "Month 2-4: Medical Director meeting. Month 4-6: ED pilot.",
        dominoEffect: "Santa Fe is Colombia's 'gold standard' hospital. Clinical validation here carries enormous weight with MinSalud, academic community, and other hospital networks.",
      },
      {
        order: 3,
        target: "MinSalud — Director of Health Information (SISPRO)",
        approach: "Formal letter from US Embassy Commercial Service in Bogota. Follow up through MinTIC (technology ministry) innovation program, which has health IT as a priority sector.",
        pitch: "Colombia's EPS system is in crisis — SISPRO needs better analytics to predict and prevent EPS financial failures before they happen. MyEval.ai analyzes RIPS claims data with AI to identify cost anomalies, fraud patterns, and population health trends that your team can't see with current tools. We're already validated by EPS Sura and Fundaci\u00F3n Santa Fe.",
        timeline: "Month 5-8: MinSalud presentation. Month 8-12: SISPRO analytics pilot.",
        dominoEffect: "MinSalud endorsement = access to ADRES (health fund administrator), SuperSalud (regulator), and all 28 EPS providers. Government contracts anchor revenue.",
      },
    ],
    conferences: [
      { name: "Colombia Salud Digital", timing: "Q2 annually", location: "Bogota", why: "Primary health IT conference — EPS CIOs, MinSalud officials" },
      { name: "HIMSS Latin America", timing: "Q3 annually", location: "Rotating (2026: Sao Paulo)", why: "LatAm health IT — meet Colombian and Brazilian decision-makers" },
      { name: "Meditech Colombia", timing: "Q4 annually", location: "Bogota", why: "Medical technology exhibition — hospital procurement teams" },
    ],
    keyHires: [
      { role: "Country Manager / LatAm Regional Director", salary: "COP 12-20M/month ($2,800-4,700)", source: "Computrabajo.com, LinkedIn, headhunter (Michael Page Colombia)" },
      { role: "BD — EPS/Insurance Channel", salary: "COP 8-12M/month ($1,900-2,800)", source: "Ex-EPS Sura, ex-Sanitas employees via LinkedIn" },
      { role: "Technical Integration", salary: "COP 8-14M/month ($1,900-3,300)", source: "Platzi alumni network, elempleo.com" },
      { role: "Government Liaison", salary: "COP 8-12M/month ($1,900-2,800)", source: "Ex-MinSalud, ex-ADRES officials" },
    ],
    elevatorPitch: "Colombia's EPS system is in financial crisis — multiple EPS have collapsed, leaving millions without coverage. MinSalud needs AI-powered analytics to predict failures before they happen. MyEval.ai is that analytics engine, already validated by EPS Sura (5.5M members) and Fundaci\u00F3n Santa Fe (Colombia's top hospital). We're the early warning system Colombia's health system desperately needs.",
  },
  {
    country: "Brazil",
    office: {
      city: "S\u00E3o Paulo",
      neighborhood: "Vila Ol\u00EDmpia or Pinheiros — health-tech startup hub near Hospital Albert Einstein",
      type: "Co-working first 6 months (WeWork Vila Olimpia or InovaBra Habitat by Bradesco), then dedicated",
      monthlyCost: "Co-working: R$6,000-10,000/month ($1,100-1,850); Dedicated: R$15,000-25,000/month ($2,800-4,600)",
      transition: "Month 7: Dedicated office as Brazil team reaches 8+ people",
    },
    legalCounsel: [
      { firm: "Mattos Filho", specialty: "Health regulation, ANVISA, LGPD, corporate", retainer: "R$25,000-40,000/month ($4,600-7,400)" },
      { firm: "Pinheiro Neto Advogados", specialty: "Foreign investment, M&A, regulatory", retainer: "R$20,000-35,000/month ($3,700-6,500)" },
      { firm: "TozziniFreire Advogados", specialty: "Tech, data protection, health law", retainer: "R$18,000-30,000/month ($3,300-5,600)" },
    ],
    banking: {
      bank: "Ita\u00FA Unibanco (most international-friendly) or Banco Safra",
      paymentProcessor: "PagSeguro, Mercado Pago, PIX (instant payments — universal in Brazil)",
      payroll: "Gupy or Convenia (Brazilian HR platforms)",
    },
    outreachSequence: [
      {
        order: 1,
        target: "Hapvida NotreDame Intermédica — CDO (Chief Digital Officer)",
        approach: "Hapvida is headquartered in Fortaleza but has a São Paulo tech office. They are the most tech-aggressive health plan in Brazil — they built their own vertical tech stack. Approach through Distrito (innovation hub they partner with).",
        pitch: "Hapvida manages 15M members — more than any other health plan in Brazil. MyEval.ai's AI adds claims fraud detection, risk adjustment, and member health engagement to your existing TISS workflow. We estimate 2-4% claims cost reduction = R$600M-1.2B annual savings. Free POC on 100K anonymized claims.",
        timeline: "Month 1-3: CDO meeting. Month 3-5: POC. Month 5-7: Pilot on 2M members.",
        dominoEffect: "Hapvida is the industry benchmark. Their adoption drives the entire supplementary health market — Amil, Bradesco Saúde, SulAmérica will follow within 12 months.",
      },
      {
        order: 2,
        target: "Hospital Albert Einstein — Innovation Center (InovaHC partnership)",
        approach: "Einstein has Latin America's most advanced health innovation center. They run InovaHC — an open innovation program. Apply to InovaHC or approach the Innovation Director directly.",
        pitch: "MyEval.ai brings AI-powered patient evaluation to Einstein — pre-visit assessments, risk scoring, and drug interaction checking for your 700K annual consultations. As Latin America's top hospital, Einstein validating our AI creates a clinical evidence base that opens every door in Brazil and across the region.",
        timeline: "Month 2-4: InovaHC application. Month 4-7: Clinical validation study.",
        dominoEffect: "Einstein is the clinical gold standard in Latin America. Their validation paper is worth more than any sales deck. Every hospital, insurer, and government agency references Einstein's evidence.",
      },
      {
        order: 3,
        target: "DATASUS / Ministry of Health — Digital Health Coordinator",
        approach: "Introduction through PAHO Brazil office (PAHO/WHO Brazil is very active). Attend Sa\u00FAde Digital conference.",
        pitch: "Brazil invested $200M in RNDS but still lacks an AI analytics layer. MyEval.ai turns RNDS data into population health intelligence — real-time disease tracking, resource allocation optimization, and quality monitoring across SUS. We're validated by Hospital Einstein and Hapvida. We're FHIR R4 and LGPD compliant.",
        timeline: "Month 6-10: DATASUS engagement. Month 10-14: Pilot in 2 municipalities.",
        dominoEffect: "DATASUS/Ministry endorsement → state-level SUS contracts (São Paulo, Minas Gerais, Rio de Janeiro). SUS serves 150M+ Brazilians — the opportunity is massive.",
      },
    ],
    conferences: [
      { name: "Sa\u00FAde Digital / Hospitalar Fair", timing: "May", location: "S\u00E3o Paulo", why: "Latin America's largest health exhibition — 1,200+ exhibitors, 90K+ visitors" },
      { name: "HIMSS Latin America", timing: "Q3 annually", location: "S\u00E3o Paulo (2026)", why: "Global health IT — CIOs, government, insurers" },
      { name: "ABRAMGE Annual Meeting", timing: "Q4 annually", location: "S\u00E3o Paulo", why: "Private health plan association — all major payer executives" },
    ],
    keyHires: [
      { role: "Country Manager", salary: "R$25,000-40,000/month ($4,600-7,400)", source: "LinkedIn, Catho.com.br, headhunter (Robert Half Brazil)" },
      { role: "BD — Health Plans", salary: "R$15,000-25,000/month ($2,800-4,600)", source: "Ex-Hapvida, ex-Amil, ex-SulAmérica via LinkedIn" },
      { role: "BD — Hospitals/SUS", salary: "R$12,000-20,000/month ($2,200-3,700)", source: "Ex-DATASUS, ex-hospital IT directors" },
      { role: "Technical Integration (x2)", salary: "R$12,000-20,000/month each ($2,200-3,700)", source: "GeekHunter, programathor.com.br" },
      { role: "LGPD/Compliance Officer", salary: "R$15,000-22,000/month ($2,800-4,100)", source: "IAPP (International Association of Privacy Professionals) Brazil chapter" },
    ],
    elevatorPitch: "Brazil is Latin America's largest health market at $150B+ with 50M private health plan members and 150M SUS users. RNDS creates the data infrastructure; MyEval.ai creates the intelligence. We're validated by Hospital Albert Einstein and Hapvida (15M members). Brazil alone is a $24M/year revenue opportunity by Year 2.",
  },
  {
    country: "Argentina",
    office: {
      city: "Buenos Aires",
      neighborhood: "Palermo Soho or Belgrano — tech startup ecosystem",
      type: "Co-working (WeWork Buenos Aires or N\u00FCbimetrics Space) for 8 months, then small dedicated",
      monthlyCost: "Co-working: $400-700/month (3 desks); Dedicated: $1,200-2,000/month",
      transition: "Month 9: Dedicated office if headcount exceeds 5",
    },
    legalCounsel: [
      { firm: "Marval O'Farrell Mairal", specialty: "Health regulation, data protection (Ley 25.326), corporate", retainer: "$2,000-4,000/month" },
      { firm: "P\u00E9rez Alati, Grondona, Benites & Arntsen (PAGBAM)", specialty: "Tech, foreign investment, IP", retainer: "$2,000-3,500/month" },
      { firm: "Beccar Varela", specialty: "Insurance regulation (SSS), ANMAT health tech", retainer: "$1,500-3,000/month" },
    ],
    banking: {
      bank: "Banco Galicia (tech-friendly) or Santander Argentina",
      paymentProcessor: "Mercado Pago (dominant), MODO (bank consortium QR), USD stablecoins for B2B",
      payroll: "Buk Argentina or Factorial",
    },
    outreachSequence: [
      {
        order: 1,
        target: "OSDE (largest prepaga) — CTO / VP of Digital",
        approach: "Direct approach through LinkedIn or through Accenture Argentina (OSDE's technology consultant). OSDE has 2.5M members and the largest technology budget among prepagas.",
        pitch: "OSDE members expect premium digital health experiences. MyEval.ai adds AI-powered health evaluations, drug interaction checking, and personalized screening — differentiation that retains your highest-value members. We price in USD to protect against inflation. Pilot with 50K members over 90 days.",
        timeline: "Month 1-3: CTO meeting. Month 3-5: Pilot on 50K members.",
        dominoEffect: "OSDE is the premium benchmark. Galeno, Swiss Medical, and Medicus will follow. Prepagas are the fastest decision-makers and highest-paying segment in Argentina.",
      },
      {
        order: 2,
        target: "Hospital Italiano de Buenos Aires — Health Informatics Department (IRIS system)",
        approach: "Hospital Italiano has the most advanced health IT in Latin America — they built the IRIS system (their own EHR). Approach their Health Informatics Director, who publishes actively in medical informatics journals.",
        pitch: "Hospital Italiano is Latin America's health informatics leader. A clinical validation study of MyEval.ai at Hospital Italiano provides the strongest possible evidence base for Argentina and the region. We propose a collaborative study: MyEval.ai risk scoring accuracy vs standard clinical assessment, published in a peer-reviewed journal.",
        timeline: "Month 2-5: Research partnership proposal. Month 5-12: Clinical study.",
        dominoEffect: "Hospital Italiano validation = peer-reviewed publication + clinical credibility for all of Argentina and LatAm. Their informatics team is globally respected.",
      },
      {
        order: 3,
        target: "PAMI — IT Director",
        approach: "Approach through Ministry of Health introduction (Milei government is pro-modernization). PAMI procurement can also happen through innovation exception clauses.",
        pitch: "PAMI covers 5M retirees with $8B annual spend. Prescription fraud alone costs $200-300M/year. MyEval.ai can cross-reference every prescription against diagnosis codes, identify duplicate claims, and flag impossible drug combinations — saving PAMI 3-5% of total spend. We're already validated by OSDE and Hospital Italiano.",
        timeline: "Month 5-8: PAMI engagement. Month 8-12: Pilot on prescription fraud detection.",
        dominoEffect: "PAMI is the largest single payer. Success unlocks obras sociales (300+ entities covering 18M workers) and provincial health systems.",
      },
    ],
    conferences: [
      { name: "Jornadas de Inform\u00E1tica en Salud (JIS)", timing: "Q4 annually", location: "Buenos Aires", why: "Argentina's premier health informatics conference — Hospital Italiano hosts" },
      { name: "Expo Salud", timing: "Q2 annually", location: "Buenos Aires", why: "Health industry exhibition" },
    ],
    keyHires: [
      { role: "Country Manager", salary: "USD $2,500-3,500/month (paid in USD)", source: "LinkedIn, Bumeran.com, headhunter (Adecco Argentina)" },
      { role: "BD — Prepagas/Obras Sociales", salary: "USD $1,800-2,800/month", source: "Ex-OSDE, ex-Swiss Medical, ex-Galeno executives" },
      { role: "Technical Integration", salary: "USD $2,000-3,000/month", source: "Freelancer.com Argentina, Workana, university recruiting (UBA, ITBA)" },
    ],
    elevatorPitch: "Argentina's health system is being deregulated under Milei — workers can now choose their health plan for the first time. Prepagas and obras sociales are competing for members, and MyEval.ai gives them the AI-powered competitive edge: better member experience, lower claims costs, and fraud detection that saves PAMI $200M+/year.",
  },
  {
    country: "Bolivia",
    office: {
      city: "Santa Cruz de la Sierra",
      neighborhood: "Equipetrol or Centro — business district",
      type: "Small serviced office or virtual office with hot desks",
      monthlyCost: "$300-500/month (2 desks)",
      transition: "Remain lean — Bolivia is a social impact play, not a profit center",
    },
    legalCounsel: [
      { firm: "Criales & Urcullo", specialty: "Corporate, foreign investment, regulatory", retainer: "$1,000-1,500/month" },
      { firm: "Salazar & Asociados", specialty: "Health regulation, government contracts", retainer: "$800-1,200/month" },
    ],
    banking: {
      bank: "Banco Nacional de Bolivia or Banco Mercantil Santa Cruz",
      paymentProcessor: "Tigo Money (mobile wallet), bank transfers for B2G",
      payroll: "Manual (team of 5 max)",
    },
    outreachSequence: [
      {
        order: 1,
        target: "PAHO/WHO Bolivia — Country Representative",
        approach: "Approach through PAHO headquarters in Washington DC (leverage US-based connections). PAHO Bolivia office is in La Paz.",
        pitch: "Bolivia has the weakest health information infrastructure in South America. MyEval.ai, deployed through PAHO's technical cooperation framework, can modernize SNIS with AI-powered disease surveillance and population analytics. We've already deployed in 7 other countries. PAHO co-funding makes this budget-neutral for the Ministry of Health.",
        timeline: "Month 1-4: PAHO HQ approach. Month 4-7: Bolivia country office meeting. Month 7-12: Co-funded pilot design.",
        dominoEffect: "PAHO partnership = WHO credibility, development funding, and government access. This is the only viable entry path for Bolivia.",
      },
      {
        order: 2,
        target: "Caja Nacional de Salud (CNS) — IT Director",
        approach: "Introduction through PAHO (they advise CNS on modernization). CNS headquarters in La Paz.",
        pitch: "CNS covers 3M Bolivians but processes claims manually. MyEval.ai digitizes and analyzes your claims data, detecting fraud and improving resource allocation. PAHO can co-fund the implementation.",
        timeline: "Month 8-12: CNS engagement through PAHO introduction.",
        dominoEffect: "CNS success validates the model for Bolivia's other social insurance funds (Caja Petrolera, Caja Militar).",
      },
    ],
    conferences: [
      { name: "PAHO/WHO Annual Planning Meeting (Bolivia)", timing: "Q1 annually", location: "La Paz", why: "Sets health cooperation priorities — must influence agenda" },
    ],
    keyHires: [
      { role: "Country Manager / PAHO Liaison", salary: "BOB 15,000-25,000/month ($2,200-3,600)", source: "LinkedIn, Trabajopolis.bo" },
      { role: "Technical Integration", salary: "BOB 10,000-15,000/month ($1,450-2,200)", source: "Local universities (UMSA, UPSA)" },
    ],
    elevatorPitch: "Bolivia needs to leapfrog decades of health IT underinvestment. Through PAHO co-funding, MyEval.ai brings AI-powered health intelligence to 12 million Bolivians — from disease surveillance for the Ministry to claims analytics for CNS — at near-zero cost to the government.",
  },
];
