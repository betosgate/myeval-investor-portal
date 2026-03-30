export interface Role {
  title: string;
  department: string;
  location: string;
  salaryRange: string;
  count: number;
  hireMonth: number;
  description: string;
}

export interface Strategist {
  title: string;
  focus: string;
  deliverables30: string[];
  deliverables60: string[];
  deliverables90: string[];
  compensation: string;
  transitionPlan: string;
}

export interface TravelDirector {
  title: string;
  territory: string;
  countries: string[];
  skills: string[];
  travelSchedule: string;
  annualBudget: number;
  kpis: string[];
}

export const centralOffice: Role[] = [
  { title: "Chief Executive Officer", department: "Executive", location: "US HQ", salaryRange: "$280K-$350K + equity", count: 1, hireMonth: 0, description: "Leads global expansion, investor relations, board management" },
  { title: "Chief Technology Officer", department: "Executive", location: "US HQ", salaryRange: "$260K-$320K + equity", count: 1, hireMonth: 0, description: "Oversees platform architecture, AI integration, multi-country deployment" },
  { title: "Chief Medical Officer", department: "Executive", location: "US HQ", salaryRange: "$300K-$380K + equity", count: 1, hireMonth: 0, description: "Clinical validation, medical advisory board, regulatory medical affairs" },
  { title: "Chief Revenue Officer", department: "Executive", location: "US HQ", salaryRange: "$240K-$300K + equity", count: 1, hireMonth: 0, description: "Global sales strategy, government contracts, enterprise partnerships" },
  { title: "VP of Engineering", department: "Engineering", location: "US HQ", salaryRange: "$220K-$280K", count: 1, hireMonth: 1, description: "Engineering team leadership, platform scalability, DevOps" },
  { title: "Senior Full-Stack Engineers", department: "Engineering", location: "US HQ / Remote", salaryRange: "$160K-$200K", count: 4, hireMonth: 1, description: "Core platform development, portal feature buildout" },
  { title: "AI/ML Engineers", department: "Engineering", location: "US HQ / Remote", salaryRange: "$180K-$220K", count: 2, hireMonth: 2, description: "Claude AI integration, diagnostic model tuning, risk scoring algorithms" },
  { title: "DevOps / Infrastructure Engineers", department: "Engineering", location: "US HQ / Remote", salaryRange: "$150K-$190K", count: 2, hireMonth: 2, description: "Multi-region deployment, data localization, HIPAA infrastructure" },
  { title: "VP of Product", department: "Product", location: "US HQ", salaryRange: "$200K-$250K", count: 1, hireMonth: 1, description: "Product strategy, localization roadmap, stakeholder portal prioritization" },
  { title: "Product Managers", department: "Product", location: "US HQ", salaryRange: "$140K-$170K", count: 2, hireMonth: 2, description: "Country-specific feature management, user research coordination" },
  { title: "UX/UI Designers", department: "Product", location: "US HQ / Remote", salaryRange: "$120K-$150K", count: 2, hireMonth: 2, description: "Multi-language UI, cultural adaptation, accessibility compliance" },
  { title: "Chief Compliance Officer", department: "Legal", location: "US HQ", salaryRange: "$220K-$280K", count: 1, hireMonth: 0, description: "HIPAA, LGPD, PDPA, DPDPA — multi-jurisdiction health data compliance" },
  { title: "International Health Law Counsel", department: "Legal", location: "US HQ", salaryRange: "$200K-$250K", count: 1, hireMonth: 1, description: "Country-by-country regulatory navigation, government contract negotiation" },
  { title: "Compliance Analysts", department: "Legal", location: "US HQ / Remote", salaryRange: "$90K-$120K", count: 2, hireMonth: 3, description: "Data protection audits, regulatory filing, certification maintenance" },
  { title: "CFO / VP Finance", department: "Finance", location: "US HQ", salaryRange: "$230K-$280K", count: 1, hireMonth: 0, description: "Multi-currency financial management, investor reporting, fund administration" },
  { title: "International Controller", department: "Finance", location: "US HQ", salaryRange: "$140K-$170K", count: 1, hireMonth: 2, description: "Multi-country accounting, transfer pricing, tax compliance" },
  { title: "Financial Analysts", department: "Finance", location: "US HQ", salaryRange: "$85K-$110K", count: 2, hireMonth: 3, description: "Country P&L tracking, revenue forecasting, budget management" },
  { title: "VP of Marketing", department: "Marketing", location: "US HQ", salaryRange: "$190K-$240K", count: 1, hireMonth: 1, description: "Global brand strategy, US WebMD alternative positioning" },
  { title: "Content & SEO Manager", department: "Marketing", location: "US HQ", salaryRange: "$100K-$130K", count: 1, hireMonth: 2, description: "Multi-language health content, SEO strategy across 8 countries" },
  { title: "Digital Marketing Specialists", department: "Marketing", location: "US HQ / Remote", salaryRange: "$80K-$100K", count: 2, hireMonth: 3, description: "Paid acquisition, social media, influencer partnerships per market" },
  { title: "Head of Customer Success", department: "Customer Success", location: "US HQ", salaryRange: "$150K-$180K", count: 1, hireMonth: 3, description: "Enterprise onboarding, government implementation support" },
  { title: "Customer Success Managers", department: "Customer Success", location: "Remote (time zones)", salaryRange: "$70K-$90K", count: 3, hireMonth: 4, description: "Regional CS coverage — Asia, LatAm, US" },
  { title: "HR Director", department: "People", location: "US HQ", salaryRange: "$150K-$180K", count: 1, hireMonth: 1, description: "International hiring, compliance, benefits across 9 jurisdictions" },
  { title: "Executive Assistant", department: "Admin", location: "US HQ", salaryRange: "$60K-$80K", count: 1, hireMonth: 0, description: "C-suite support, board meeting coordination, travel logistics" },
];

export const strategists: Strategist[] = [
  {
    title: "Strategist 1: Government Relations & Regulatory",
    focus: "Navigate health ministry bureaucracies, secure MOUs, map regulatory pathways in all 8 countries",
    deliverables30: [
      "Complete regulatory landscape assessment for all 8 countries",
      "Identify key government contacts and decision-makers per country",
      "Draft template MOU for government health ministry partnerships",
      "Map procurement processes and timelines per country",
    ],
    deliverables60: [
      "Secure 3+ government meetings or LOIs across target countries",
      "File company registrations in first 4 priority countries",
      "Complete data protection compliance gap analysis per country",
      "Establish relationships with PAHO, WHO, and development bank contacts",
    ],
    deliverables90: [
      "Signed MOUs with minimum 2 government health agencies",
      "Regulatory approval applications filed in 4 countries",
      "Government contract pipeline valued at $5M+ for Year 1",
      "Transition playbook for incoming Government Liaison staff",
    ],
    compensation: "$25,000/month + $50K completion bonus tied to MOU deliverables",
    transitionPlan: "Hands off to Country Manager + Government Liaison hires. Remains available as advisor for 6 months at reduced retainer.",
  },
  {
    title: "Strategist 2: Healthcare Partnerships & Revenue",
    focus: "Build the B2B pipeline — hospitals, insurers, employers across all 8 markets",
    deliverables30: [
      "Identify top 20 hospital networks and 15 insurance providers across 8 countries",
      "Develop country-specific pricing models validated by local market research",
      "Create partnership pitch decks localized for each market",
      "Initiate contact with 30+ potential B2B partners",
    ],
    deliverables60: [
      "Secure 5+ signed LOIs from hospitals or insurance providers",
      "Complete pilot agreements with 2+ anchor partners (e.g., Apollo, Hapvida, EPS Sura)",
      "Build enterprise sales playbook with objection handling per market",
      "Validate PMPM pricing with 3+ insurance actuarial teams",
    ],
    deliverables90: [
      "Signed contracts worth $2M+ ARR in pipeline",
      "3+ live pilot deployments generating revenue",
      "Employer wellness channel activated in 3+ countries",
      "Sales team hiring specs and territory assignments finalized",
    ],
    compensation: "$22,000/month + 2% commission on Year 1 contracted revenue",
    transitionPlan: "Hands off to CRO + regional BizDev hires. Partnership relationships transferred with structured handover meetings.",
  },
  {
    title: "Strategist 3: Technology Localization & Integration",
    focus: "Ensure platform readiness for 8 countries — languages, regulations, local health system integrations",
    deliverables30: [
      "Audit platform for localization gaps (languages, currencies, ICD code sets)",
      "Map integration requirements for each country's health information systems",
      "Define data localization architecture for countries requiring in-country hosting",
      "Assess ABDM (India), DATASUS (Brazil), and other national health IT standards",
    ],
    deliverables60: [
      "Complete Vietnamese, Hindi, Bengali, Thai language QA for patient portal",
      "Deploy data-localized infrastructure in Vietnam and India",
      "Build API integration specs for ABDM, EPS systems, and SUS",
      "Implement country-specific ICD-10 code sets and drug databases",
    ],
    deliverables90: [
      "Platform fully localized and deployable in all 8 countries",
      "Integration connectors built for 5+ national health systems",
      "Performance testing complete for multi-region architecture",
      "Technical documentation and runbooks for in-country tech teams",
    ],
    compensation: "$24,000/month + equity grant (0.1% vesting over 2 years)",
    transitionPlan: "Hands off to VP Engineering + in-country Technical Integration Specialists. Continues as technical advisor for 3 months.",
  },
  {
    title: "Strategist 4: Market Entry & Operations",
    focus: "Stand up legal entities, offices, banking, and operational infrastructure in all 8 countries",
    deliverables30: [
      "Complete market entry checklist for all 8 countries",
      "Initiate company registration in 4 priority countries (India, Brazil, Colombia, Thailand)",
      "Identify and evaluate local legal counsel in each country",
      "Map banking, payroll, and payment processing options per country",
    ],
    deliverables60: [
      "Legal entities established in 4 countries",
      "Local bank accounts opened and operational in 3 countries",
      "Co-working or satellite office spaces secured in Bangalore, São Paulo, Bogota, Bangkok",
      "Draft employment contracts compliant with local labor laws",
    ],
    deliverables90: [
      "All 8 country entities registered or in final registration",
      "Payroll systems operational in 6+ countries",
      "Country Manager candidates identified and interviewed for all markets",
      "Operational playbook: vendor lists, legal contacts, banking, and logistics per country",
    ],
    compensation: "$20,000/month + $30K completion bonus",
    transitionPlan: "Hands off to COO/Head of Operations + Country Managers. Operational playbook is the primary deliverable.",
  },
];

export const travelDirectors: TravelDirector[] = [
  {
    title: "International Director — Asia Pacific",
    territory: "Asia",
    countries: ["Vietnam", "India", "Bangladesh", "Thailand"],
    skills: [
      "Fluent English, conversational Hindi or Thai preferred",
      "10+ years in health-tech or pharmaceutical business development in Asia",
      "Government relations experience in at least 2 Asian markets",
      "Understanding of ABDM, NHSO, and Asian health IT ecosystems",
      "Cross-cultural negotiation skills",
    ],
    travelSchedule:
      "Rotating 2-week cycles: 2 weeks in-country (rotating between 4 countries), 1 week at US HQ. Each country visited monthly minimum. Priority weighting: India (40%), Thailand (25%), Vietnam (25%), Bangladesh (10%).",
    annualBudget: 180_000,
    kpis: [
      "Government MOUs signed: 4+ in Year 1",
      "B2B contracts closed: $8M+ ARR pipeline",
      "Country teams fully staffed within 6 months",
      "Platform pilot deployments: 6+ live in Year 1",
      "Monthly stakeholder reports to CEO and board",
    ],
  },
  {
    title: "International Director — Latin America",
    territory: "Latin America",
    countries: ["Colombia", "Brazil", "Argentina", "Bolivia"],
    skills: [
      "Fluent English and Spanish, strong Portuguese preferred",
      "10+ years in health-tech or insurance business development in LatAm",
      "Understanding of EPS, SUS, obras sociales systems",
      "Experience with PAHO/WHO and development organization partnerships",
      "Regional political landscape awareness",
    ],
    travelSchedule:
      "Rotating 2-week cycles: 2 weeks in-country (rotating between 4 countries), 1 week at US HQ or Bogota regional office. Each country visited monthly minimum. Priority weighting: Brazil (40%), Colombia (30%), Argentina (20%), Bolivia (10%).",
    annualBudget: 160_000,
    kpis: [
      "Government MOUs signed: 3+ in Year 1",
      "B2B contracts closed: $6M+ ARR pipeline",
      "Country teams fully staffed within 6 months",
      "Bogota regional office operational by Month 4",
      "Monthly stakeholder reports to CEO and board",
    ],
  },
];

export const headcountTimeline = [
  { phase: "Month 0-3 (Strategist Phase)", usHQ: 18, inCountry: 0, strategists: 4, total: 22 },
  { phase: "Month 3-6 (Launch Phase)", usHQ: 35, inCountry: 16, strategists: 4, total: 55 },
  { phase: "Month 6-12 (Growth Phase)", usHQ: 45, inCountry: 40, strategists: 0, total: 85 },
  { phase: "Month 12-18 (Scale Phase)", usHQ: 52, inCountry: 65, strategists: 0, total: 117 },
  { phase: "Month 18-24 (Expansion Phase)", usHQ: 58, inCountry: 94, strategists: 0, total: 152 },
];

export const operatingCosts = {
  usOffice: { monthly: 25_000, annual: 300_000, description: "US HQ (co-working scaling to dedicated space)" },
  satelliteOffices: { monthly: 15_000, annual: 180_000, description: "4 satellite offices (Bangalore, São Paulo, Bogota, Bangkok)" },
  cloudInfra: { monthly: 45_000, annual: 540_000, description: "AWS/Vercel multi-region, data localization" },
  legalPerCountry: { perCountry: 150_000, total: 1_200_000, description: "Entity setup, regulatory filings, ongoing counsel" },
  marketingPerCountry: { perCountry: 200_000, total: 1_600_000, description: "Local marketing, events, partnerships" },
  travelBudget: { annual: 500_000, description: "2 directors + executive travel" },
  insurance: { annual: 350_000, description: "D&O, E&O, cyber liability, international health" },
  tools: { annual: 240_000, description: "CRM, analytics, collaboration, security tools" },
};

export const medicalAdvisoryBoard = [
  { role: "Chair — US Academic Medical Center Chief", compensation: "$75K/year + equity", purpose: "Clinical validation, FDA strategy" },
  { role: "LatAm Public Health Expert", compensation: "$50K/year", purpose: "PAHO relationships, LatAm regulatory guidance" },
  { role: "Asia Digital Health Pioneer", compensation: "$50K/year", purpose: "ABDM integration strategy, Asian market navigation" },
  { role: "Health Informatics Researcher", compensation: "$40K/year", purpose: "ICD/CPT accuracy validation, AI model auditing" },
  { role: "Global Health Economist", compensation: "$40K/year", purpose: "Pricing strategy, health system ROI modeling" },
];
