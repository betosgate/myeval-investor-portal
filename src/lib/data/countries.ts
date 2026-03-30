export interface CountryData {
  name: string;
  slug: string;
  region: "asia" | "latam";
  flag: string;
  population: number;
  gdpPerCapita: number;
  healthSpendPerCapita: number;
  internetPenetration: number;
  smartphonePenetration: number;
  healthSystem: string;
  keyAgencies: string[];
  majorPartners: string[];
  entryStrategy: string;
  pricingModel: {
    consumer: number;
    newsletter: number;
    enterprise: string;
    government: string;
  };
  regulatoryRequirements: string[];
  languages: string[];
  timeline: {
    phase1: string;
    phase2: string;
    phase3: string;
    firstRevenue: string;
  };
  revenueProjection: {
    year1: number;
    year2: number;
  };
  keyRisks: string[];
  competitiveLandscape: string[];
  staffing: {
    countryManager: number;
    bizDev: number;
    techIntegration: number;
    govLiaison: number;
    support: number;
  };
  investmentAllocation: number;
  marketSizeEstimate: number;
  targetUsers: {
    year1: number;
    year2: number;
  };
  b2bTargets: {
    hospitals: number;
    insurers: number;
    employers: number;
    govAgencies: number;
  };
}

export const countries: CountryData[] = [
  {
    name: "Vietnam",
    slug: "vietnam",
    region: "asia",
    flag: "VN",
    population: 100_000_000,
    gdpPerCapita: 4_300,
    healthSpendPerCapita: 230,
    internetPenetration: 79,
    smartphonePenetration: 72,
    healthSystem:
      "Dual public-private system with Vietnam Social Security (VSS) covering 92% of population. Ministry of Health (MOH) oversees 1,400+ hospitals.",
    keyAgencies: [
      "Ministry of Health (MOH)",
      "Vietnam Social Security (VSS)",
      "Department of Information Technology (MOH-IT)",
      "Health Strategy & Policy Institute (HSPI)",
      "National Institute of Hygiene & Epidemiology",
    ],
    majorPartners: [
      "Viettel Group (e-health infrastructure)",
      "VinGroup (Vinmec hospitals)",
      "FPT Healthcare",
      "Bao Viet Insurance",
      "PVI Holdings Insurance",
    ],
    entryStrategy:
      "Government-first approach via MOH digital health initiative partnership. Vietnam's National Digital Transformation Program 2025-2030 mandates electronic health records across all provinces. Position MyEval.ai as the AI analytics layer for this initiative. Establish a joint venture with FPT Healthcare for technology localization, then expand to Vinmec private hospital network for premium tier.",
    pricingModel: {
      consumer: 5,
      newsletter: 0.5,
      enterprise: "$0.15 PMPM for insurers, $500/month per hospital",
      government: "$2M/year national license, $200K/province",
    },
    regulatoryRequirements: [
      "Law on Cybersecurity 2018 — data localization required",
      "Decree 13/2023 on personal data protection",
      "MOH Circular on telemedicine standards",
      "Foreign investment license via Dept. of Planning & Investment",
      "Medical device classification exemption (software-only)",
    ],
    languages: ["Vietnamese", "English"],
    timeline: {
      phase1: "Months 1-4: MOH partnership MOU, JV with FPT Healthcare",
      phase2: "Months 5-8: Pilot in 3 provinces (HCMC, Hanoi, Da Nang)",
      phase3: "Months 9-24: Scale to 30 provinces, launch consumer app",
      firstRevenue: "Month 6",
    },
    revenueProjection: { year1: 1_800_000, year2: 8_500_000 },
    keyRisks: [
      "Data localization costs for in-country servers",
      "Government procurement cycles (6-12 months)",
      "Competition from Viettel e-health platform",
    ],
    competitiveLandscape: [
      "Viettel e-Health (government incumbent)",
      "Doctor Anywhere Vietnam",
      "eDoctor",
      "FPT.AI Health",
    ],
    staffing: {
      countryManager: 1,
      bizDev: 2,
      techIntegration: 2,
      govLiaison: 1,
      support: 3,
    },
    investmentAllocation: 3_500_000,
    marketSizeEstimate: 450_000_000,
    targetUsers: { year1: 250_000, year2: 2_000_000 },
    b2bTargets: {
      hospitals: 50,
      insurers: 5,
      employers: 20,
      govAgencies: 10,
    },
  },
  {
    name: "India",
    slug: "india",
    region: "asia",
    flag: "IN",
    population: 1_440_000_000,
    gdpPerCapita: 2_600,
    healthSpendPerCapita: 83,
    internetPenetration: 52,
    smartphonePenetration: 47,
    healthSystem:
      "Ayushman Bharat Digital Mission (ABDM) creating unified digital health IDs for 1.4B citizens. National Health Authority (NHA) drives digital health. Mixed public-private with 70% out-of-pocket spending.",
    keyAgencies: [
      "National Health Authority (NHA / ABDM)",
      "Ministry of Health & Family Welfare (MoHFW)",
      "NITI Aayog (policy think tank)",
      "Insurance Regulatory & Development Authority (IRDAI)",
      "Central Drugs Standard Control Organisation (CDSCO)",
    ],
    majorPartners: [
      "National Health Authority (ABDM integration)",
      "Apollo Hospitals Group (71 hospitals)",
      "Fortis Healthcare (28 hospitals)",
      "Star Health Insurance (largest health insurer)",
      "Tata 1mg (digital pharmacy)",
      "Practo (existing health platform)",
    ],
    entryStrategy:
      "Integrate directly with Ayushman Bharat Digital Mission (ABDM) as a certified Health Information Provider (HIP). Partner with Apollo Hospitals for clinical validation study. Target India's 500M+ Ayushman Bharat beneficiaries through NHA's open API ecosystem. State-level rollouts starting with Karnataka, Maharashtra, and Tamil Nadu — the three most digitally advanced states.",
    pricingModel: {
      consumer: 3,
      newsletter: 0.3,
      enterprise: "$0.05 PMPM for insurers, $300/month per hospital",
      government:
        "$5M/year national ABDM integration, $150K/state deployment",
    },
    regulatoryRequirements: [
      "Digital Personal Data Protection Act 2023 (DPDPA)",
      "ABDM Health Data Management Policy",
      "IRDAI telemedicine guidelines",
      "RBI regulations for payment processing",
      "FDI regulations — 100% FDI allowed in health-tech via automatic route",
    ],
    languages: ["Hindi", "English", "Tamil", "Telugu", "Bengali"],
    timeline: {
      phase1: "Months 1-3: ABDM certification, Apollo partnership",
      phase2: "Months 4-8: Pilot in Karnataka, Maharashtra, Tamil Nadu",
      phase3: "Months 9-24: Scale to 15 states, consumer launch via UPI",
      firstRevenue: "Month 5",
    },
    revenueProjection: { year1: 4_200_000, year2: 22_000_000 },
    keyRisks: [
      "Extreme price sensitivity — $3 consumer tier may need subsidization",
      "Fragmented state-level health governance",
      "Competition from Practo, 1mg, and government platforms",
    ],
    competitiveLandscape: [
      "Practo (established, 30M+ users)",
      "1mg (Tata-backed)",
      "MFine (AI diagnostics)",
      "DocsApp",
      "Eka Care (ABDM-integrated)",
    ],
    staffing: {
      countryManager: 1,
      bizDev: 3,
      techIntegration: 3,
      govLiaison: 2,
      support: 5,
    },
    investmentAllocation: 6_000_000,
    marketSizeEstimate: 2_800_000_000,
    targetUsers: { year1: 1_000_000, year2: 10_000_000 },
    b2bTargets: {
      hospitals: 150,
      insurers: 15,
      employers: 50,
      govAgencies: 20,
    },
  },
  {
    name: "Bangladesh",
    slug: "bangladesh",
    region: "asia",
    flag: "BD",
    population: 172_000_000,
    gdpPerCapita: 2_800,
    healthSpendPerCapita: 46,
    internetPenetration: 40,
    smartphonePenetration: 35,
    healthSystem:
      "Government-run with heavy NGO support. BRAC (world's largest NGO) runs 6,000+ health centers. Garment industry (4M workers) has mandatory employer health programs. Ministry of Health and Family Welfare oversees public system.",
    keyAgencies: [
      "Ministry of Health and Family Welfare (MoHFW)",
      "Directorate General of Health Services (DGHS)",
      "Bangladesh Telecommunication Regulatory Commission (BTRC)",
      "National Health Information System (NHIS)",
      "Bangladesh Investment Development Authority (BIDA)",
    ],
    majorPartners: [
      "BRAC Health Programme (largest NGO health network)",
      "Grameenphone Health (mHealth leader)",
      "United Hospital (premium private)",
      "Green Delta Insurance (largest health insurer)",
      "Bangladesh Garment Manufacturers Association (BGMEA)",
    ],
    entryStrategy:
      "Partner with BRAC Health Programme to deploy MyEval.ai across their 6,000 community health centers. This provides instant scale and government credibility. Simultaneously target the 4M-worker garment industry through BGMEA employer wellness channel. Mobile-first strategy critical — 85% of internet access is via mobile.",
    pricingModel: {
      consumer: 2,
      newsletter: 0.25,
      enterprise: "$0.03 PMPM, $200/month per facility",
      government: "$1M/year national license, $80K/district",
    },
    regulatoryRequirements: [
      "Digital Security Act 2018",
      "ICT Act 2006 (data protection provisions)",
      "BIDA investment registration for foreign companies",
      "Drug Administration approval for health software",
      "Bangladesh Bank regulations for payment processing",
    ],
    languages: ["Bengali", "English"],
    timeline: {
      phase1: "Months 1-4: BRAC partnership, BGMEA employer pilot",
      phase2: "Months 5-10: Deploy across 500 BRAC centers",
      phase3: "Months 11-24: Government adoption, consumer mobile launch",
      firstRevenue: "Month 5",
    },
    revenueProjection: { year1: 900_000, year2: 4_200_000 },
    keyRisks: [
      "Low internet penetration in rural areas",
      "Price sensitivity — lowest GDP per capita in portfolio",
      "Political instability affecting government contracts",
    ],
    competitiveLandscape: [
      "Grameenphone Health (telecom-backed)",
      "Maya Apa (AI health chatbot)",
      "Telenor Health (defunct, market gap)",
      "Praava Health (premium digital)",
    ],
    staffing: {
      countryManager: 1,
      bizDev: 1,
      techIntegration: 1,
      govLiaison: 1,
      support: 2,
    },
    investmentAllocation: 2_500_000,
    marketSizeEstimate: 180_000_000,
    targetUsers: { year1: 150_000, year2: 1_200_000 },
    b2bTargets: {
      hospitals: 30,
      insurers: 3,
      employers: 40,
      govAgencies: 8,
    },
  },
  {
    name: "Thailand",
    slug: "thailand",
    region: "asia",
    flag: "TH",
    population: 72_000_000,
    gdpPerCapita: 7_800,
    healthSpendPerCapita: 300,
    internetPenetration: 88,
    smartphonePenetration: 80,
    healthSystem:
      "Universal Coverage Scheme (UCS) covers 99.5% of population via three public insurance schemes. National Health Security Office (NHSO) manages UCS. Thailand is Asia's #1 medical tourism destination ($5B+ annually).",
    keyAgencies: [
      "National Health Security Office (NHSO)",
      "Ministry of Public Health (MOPH)",
      "Digital Economy Promotion Agency (DEPA)",
      "Thailand Board of Investment (BOI)",
      "Food and Drug Administration (Thai FDA)",
    ],
    majorPartners: [
      "Bumrungrad International Hospital (medical tourism leader)",
      "Bangkok Dusit Medical Services (BDMS, 49 hospitals)",
      "Thai Health Insurance Association",
      "SCB TechX (fintech/healthtech accelerator)",
      "True Digital Health",
    ],
    entryStrategy:
      "Dual-track: (1) Medical tourism channel — partner with Bumrungrad and BDMS to offer MyEval.ai as pre-arrival assessment for 3.5M annual medical tourists. (2) Government track — DEPA Digital Health Sandbox allows 1-year regulatory exemption for testing. Position as analytics layer for NHSO's universal coverage data. Thailand BOI offers tax holidays for promoted health-tech companies.",
    pricingModel: {
      consumer: 8,
      newsletter: 1,
      enterprise: "$0.20 PMPM, $800/month per hospital",
      government: "$3M/year NHSO analytics license",
    },
    regulatoryRequirements: [
      "Personal Data Protection Act (PDPA) 2022",
      "DEPA Digital Health Sandbox registration",
      "Thai FDA classification for health software",
      "BOI promotion application for tax incentives",
      "Foreign Business Act — requires Thai majority partner or BOI exemption",
    ],
    languages: ["Thai", "English"],
    timeline: {
      phase1: "Months 1-3: BOI application, Bumrungrad partnership",
      phase2: "Months 4-8: Medical tourism pilot, DEPA sandbox entry",
      phase3: "Months 9-24: NHSO integration, consumer launch",
      firstRevenue: "Month 4",
    },
    revenueProjection: { year1: 2_400_000, year2: 11_000_000 },
    keyRisks: [
      "Foreign Business Act restrictions without BOI promotion",
      "Thai-language UI quality critical for adoption",
      "Competition from well-funded True Digital Health",
    ],
    competitiveLandscape: [
      "True Digital Health (telecom-backed)",
      "Doctor Raksa (telemedicine leader)",
      "Mordee (AI health)",
      "Chiiwii (doctor consultation)",
    ],
    staffing: {
      countryManager: 1,
      bizDev: 2,
      techIntegration: 1,
      govLiaison: 1,
      support: 2,
    },
    investmentAllocation: 3_000_000,
    marketSizeEstimate: 620_000_000,
    targetUsers: { year1: 200_000, year2: 1_500_000 },
    b2bTargets: {
      hospitals: 40,
      insurers: 8,
      employers: 25,
      govAgencies: 5,
    },
  },
  {
    name: "Colombia",
    slug: "colombia",
    region: "latam",
    flag: "CO",
    population: 52_000_000,
    gdpPerCapita: 6_600,
    healthSpendPerCapita: 480,
    internetPenetration: 73,
    smartphonePenetration: 65,
    healthSystem:
      "Mandatory health insurance via EPS (Entidades Promotoras de Salud) system. Contributory regime (workers) and subsidized regime (low-income). ADRES manages national health funds. SuperSalud regulates.",
    keyAgencies: [
      "Ministerio de Salud y Protección Social (MinSalud)",
      "Superintendencia Nacional de Salud (SuperSalud)",
      "ADRES (health fund administrator)",
      "Instituto Nacional de Salud (INS)",
      "MinTIC (technology ministry)",
    ],
    majorPartners: [
      "EPS Sura (largest private EPS, 5.5M members)",
      "EPS Sanitas (4.8M members)",
      "Compensar (EPS + benefits fund)",
      "Fundación Santa Fe de Bogotá (premier hospital)",
      "Grupo Keralty (integrated health network)",
    ],
    entryStrategy:
      "Partner with EPS Sura and Sanitas to deploy payer analytics portal. Colombia's EPS system is data-rich but analytics-poor — MyEval.ai fills this gap. Register as SAS (Sociedad por Acciones Simplificada) in Bogota. Leverage MinTIC tech incentives and Colombia's favorable startup ecosystem. Bogota serves as LatAm regional HQ.",
    pricingModel: {
      consumer: 8,
      newsletter: 1,
      enterprise: "$0.12 PMPM for EPS, $600/month per hospital",
      government: "$1.5M/year MinSalud analytics platform",
    },
    regulatoryRequirements: [
      "Ley 1581 de 2012 (Habeas Data / privacy law)",
      "Resolución 866 of 2021 (interoperability standards)",
      "INVIMA health tech classification",
      "SAS company registration via Cámara de Comercio",
      "MinTIC digital health registry",
    ],
    languages: ["Spanish"],
    timeline: {
      phase1: "Months 1-3: SAS registration, EPS Sura partnership",
      phase2: "Months 4-8: EPS payer portal pilot, Bogota hospital deployments",
      phase3: "Months 9-24: Scale to 10 EPS providers, consumer launch",
      firstRevenue: "Month 4",
    },
    revenueProjection: { year1: 2_100_000, year2: 9_500_000 },
    keyRisks: [
      "EPS financial instability (several EPS liquidated recently)",
      "Government price controls on health services",
      "Currency fluctuation (COP)",
    ],
    competitiveLandscape: [
      "1DOC3 (leading LatAm telehealth)",
      "Doctoralia Colombia",
      "Boldo Health",
      "Huli (Central America expanding south)",
    ],
    staffing: {
      countryManager: 1,
      bizDev: 2,
      techIntegration: 1,
      govLiaison: 1,
      support: 2,
    },
    investmentAllocation: 3_000_000,
    marketSizeEstimate: 520_000_000,
    targetUsers: { year1: 180_000, year2: 1_400_000 },
    b2bTargets: {
      hospitals: 35,
      insurers: 10,
      employers: 30,
      govAgencies: 6,
    },
  },
  {
    name: "Brazil",
    slug: "brazil",
    region: "latam",
    flag: "BR",
    population: 216_000_000,
    gdpPerCapita: 9_700,
    healthSpendPerCapita: 920,
    internetPenetration: 84,
    smartphonePenetration: 76,
    healthSystem:
      "SUS (Sistema Único de Saúde) provides universal public coverage. ANS regulates supplementary health plans (50M+ private plan members). Largest health market in Latin America at $150B+.",
    keyAgencies: [
      "Ministério da Saúde (Ministry of Health)",
      "ANS (Agência Nacional de Saúde Suplementar)",
      "ANVISA (health regulatory agency)",
      "DATASUS (health data infrastructure)",
      "BNDES (development bank — health tech funding)",
    ],
    majorPartners: [
      "Rede D'Or São Luiz (69 hospitals, largest private)",
      "Hapvida NotreDame (15M members, largest health plan)",
      "Amil/UnitedHealth Brazil",
      "Hospital Albert Einstein (innovation leader)",
      "iClinic / Doctoralia Brazil",
    ],
    entryStrategy:
      "Enter via the private supplementary health market (50M members, $45B). Partner with Hapvida (15M members) for payer analytics and Rede D'Or for hospital deployment. Brazil's LGPD compliance adds barrier-to-entry that benefits compliant platforms. Establish LTDA company in São Paulo. Target BNDES health-tech innovation grants. Portuguese language already supported.",
    pricingModel: {
      consumer: 12,
      newsletter: 1.5,
      enterprise: "$0.18 PMPM for health plans, $900/month per hospital",
      government: "$4M/year state-level SUS analytics",
    },
    regulatoryRequirements: [
      "LGPD (Lei Geral de Proteção de Dados) compliance",
      "ANVISA health software classification (RDC 657/2022)",
      "ANS technical standards for health plan integrations",
      "CNPJ registration as LTDA or S.A.",
      "Central Bank regulations for international payments",
    ],
    languages: ["Portuguese"],
    timeline: {
      phase1: "Months 1-3: LTDA registration, Hapvida partnership",
      phase2: "Months 4-8: Payer portal pilot with 2M members",
      phase3: "Months 9-24: Scale to 5 health plans, SUS state pilots",
      firstRevenue: "Month 4",
    },
    revenueProjection: { year1: 5_500_000, year2: 24_000_000 },
    keyRisks: [
      "Complex tax system (ICMS, PIS, COFINS)",
      "ANVISA regulatory timeline uncertainty",
      "Currency volatility (BRL)",
    ],
    competitiveLandscape: [
      "Doctoralia Brazil (WebMD equivalent)",
      "Conexa Saúde (telemedicine leader)",
      "Alice (health-tech insurer)",
      "iClinic (practice management)",
      "Laura (AI hospital triage)",
    ],
    staffing: {
      countryManager: 1,
      bizDev: 3,
      techIntegration: 2,
      govLiaison: 1,
      support: 4,
    },
    investmentAllocation: 5_500_000,
    marketSizeEstimate: 3_200_000_000,
    targetUsers: { year1: 500_000, year2: 4_000_000 },
    b2bTargets: {
      hospitals: 80,
      insurers: 12,
      employers: 40,
      govAgencies: 10,
    },
  },
  {
    name: "Argentina",
    slug: "argentina",
    region: "latam",
    flag: "AR",
    population: 46_000_000,
    gdpPerCapita: 13_700,
    healthSpendPerCapita: 1_100,
    internetPenetration: 87,
    smartphonePenetration: 78,
    healthSystem:
      "Three-tier system: public hospitals, obras sociales (union-based insurance, 300+ entities), and private prepaid plans (prepagas). Superintendencia de Servicios de Salud regulates obras sociales.",
    keyAgencies: [
      "Ministerio de Salud de la Nación",
      "Superintendencia de Servicios de Salud (SSS)",
      "ANMAT (drug & medical tech regulator)",
      "Secretaría de Innovación, Ciencia y Tecnología",
      "ARSAT (state telecom for infrastructure)",
    ],
    majorPartners: [
      "OSDE (largest prepaga, 2.5M members)",
      "Swiss Medical Group (prepaga + hospitals)",
      "Hospital Italiano de Buenos Aires (innovation hub)",
      "Galeno (prepaga, 800K members)",
      "OSPRERA (largest obra social)",
    ],
    entryStrategy:
      "Target prepagas first — they have the budget, data infrastructure, and innovation appetite. Partner with OSDE and Swiss Medical for payer analytics. Buenos Aires has a thriving tech ecosystem. Register as SAS under Ley 27.349. Price in USD-linked tiers to hedge peso inflation. Position as the analytics layer obras sociales desperately need for cost control.",
    pricingModel: {
      consumer: 6,
      newsletter: 0.75,
      enterprise: "$0.15 PMPM, $700/month per hospital",
      government: "$1.5M/year national, $120K/province",
    },
    regulatoryRequirements: [
      "Ley 25.326 (Personal Data Protection)",
      "ANMAT health software disposition",
      "SAS registration under Ley 27.349",
      "Central Bank forex regulations for repatriation",
      "SSS integration standards for obras sociales",
    ],
    languages: ["Spanish"],
    timeline: {
      phase1: "Months 1-3: SAS registration, OSDE/Swiss Medical partnerships",
      phase2: "Months 4-8: Prepaga payer pilot, Hospital Italiano clinical study",
      phase3: "Months 9-24: Expand to 15 prepagas + obras sociales",
      firstRevenue: "Month 5",
    },
    revenueProjection: { year1: 1_800_000, year2: 8_000_000 },
    keyRisks: [
      "Hyperinflation and currency controls",
      "Capital repatriation restrictions",
      "Political volatility affecting health policy",
    ],
    competitiveLandscape: [
      "Docplaneta",
      "Mediline (telemedicine)",
      "Llamando al Doctor",
      "1DOC3 Argentina",
    ],
    staffing: {
      countryManager: 1,
      bizDev: 1,
      techIntegration: 1,
      govLiaison: 1,
      support: 2,
    },
    investmentAllocation: 2_500_000,
    marketSizeEstimate: 580_000_000,
    targetUsers: { year1: 120_000, year2: 900_000 },
    b2bTargets: {
      hospitals: 25,
      insurers: 15,
      employers: 20,
      govAgencies: 5,
    },
  },
  {
    name: "Bolivia",
    slug: "bolivia",
    region: "latam",
    flag: "BO",
    population: 12_200_000,
    gdpPerCapita: 3_600,
    healthSpendPerCapita: 200,
    internetPenetration: 55,
    smartphonePenetration: 42,
    healthSystem:
      "SUS (Sistema Único de Salud) launched 2019 providing universal free coverage. Ministry of Health oversees 3,700+ health facilities. Heavy reliance on PAHO/WHO technical assistance. Significant rural and indigenous health gaps.",
    keyAgencies: [
      "Ministerio de Salud y Deportes",
      "Caja Nacional de Salud (CNS, largest insurer)",
      "SEDES (departmental health services)",
      "PAHO/WHO Bolivia office",
      "Agencia de Gobierno Electrónico y TIC (AGETIC)",
    ],
    majorPartners: [
      "Caja Nacional de Salud (CNS, 3M beneficiaries)",
      "Hospital Obrero (CNS flagship)",
      "PAHO/WHO (technical cooperation)",
      "JICA (Japanese development assistance)",
      "Swiss Development Cooperation (health programs)",
    ],
    entryStrategy:
      "Enter via international development channel. Partner with PAHO/WHO Bolivia for population health surveillance portal — they fund digital health initiatives. Deploy government portal for Ministry of Health disease tracking. CNS (national insurance fund) is the anchor B2B client. Bolivia is lowest investment but demonstrates social impact for the overall fund narrative.",
    pricingModel: {
      consumer: 2,
      newsletter: 0.25,
      enterprise: "$0.03 PMPM, $150/month per facility",
      government: "$500K/year national license via PAHO co-funding",
    },
    regulatoryRequirements: [
      "Ley 164 de Telecomunicaciones (data provisions)",
      "AGETIC digital government standards",
      "Registro de Comercio (FUNDEMPRESA) company registration",
      "Ministry of Health technology approval",
      "PAHO procurement guidelines for co-funded projects",
    ],
    languages: ["Spanish", "Quechua", "Aymara"],
    timeline: {
      phase1: "Months 1-4: PAHO partnership, CNS MOU",
      phase2: "Months 5-10: Ministry of Health pilot (La Paz, Santa Cruz)",
      phase3: "Months 11-24: Scale to 5 departments, CNS integration",
      firstRevenue: "Month 7",
    },
    revenueProjection: { year1: 400_000, year2: 1_800_000 },
    keyRisks: [
      "Limited digital infrastructure in rural areas",
      "Government budget constraints",
      "Political instability and policy shifts",
    ],
    competitiveLandscape: [
      "Very limited — primarily NGO-built systems",
      "DHIS2 (open-source, WHO-supported)",
      "OpenMRS deployments",
    ],
    staffing: {
      countryManager: 1,
      bizDev: 1,
      techIntegration: 1,
      govLiaison: 1,
      support: 1,
    },
    investmentAllocation: 1_500_000,
    marketSizeEstimate: 85_000_000,
    targetUsers: { year1: 50_000, year2: 300_000 },
    b2bTargets: {
      hospitals: 10,
      insurers: 2,
      employers: 5,
      govAgencies: 8,
    },
  },
];

export const getCountry = (slug: string) =>
  countries.find((c) => c.slug === slug);
export const asiaCountries = countries.filter((c) => c.region === "asia");
export const latamCountries = countries.filter((c) => c.region === "latam");
export const totalYear1Revenue = countries.reduce(
  (s, c) => s + c.revenueProjection.year1,
  0
);
export const totalYear2Revenue = countries.reduce(
  (s, c) => s + c.revenueProjection.year2,
  0
);
export const totalInvestment = countries.reduce(
  (s, c) => s + c.investmentAllocation,
  0
);
