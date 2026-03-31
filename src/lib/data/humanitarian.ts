export interface SDGAlignment {
  sdg: string;
  title: string;
  color: string;
  targets: { id: string; text: string; myevalContribution: string; measurableIndicator: string }[];
}

export interface HumanitarianFund {
  name: string;
  type: "multilateral" | "bilateral" | "foundation" | "development-bank" | "impact-investor";
  annualBudget: string;
  digitalHealthAllocation: string;
  eligibility: string;
  typicalSize: string;
  applicationProcess: string;
  alignmentScore: number;
  keyContact: string;
  howMyEvalFits: string;
}

export interface CountryHealthImpact {
  country: string;
  population: number;
  targetUsers: number;
  topBurdens: { disease: string; deathsPer100K: number; dalysLost: number; preventablePercent: number }[];
  vulnerablePopulations: { group: string; size: string; howServed: string }[];
  estimatedImpact: {
    livesSaved: number;
    dalysAverted: number;
    hospitalizationsAvoided: number;
    earlyDetections: number;
    costSavings: number;
  };
}

export const sdgAlignments: SDGAlignment[] = [
  {
    sdg: "SDG 3",
    title: "Good Health and Well-Being",
    color: "bg-green-500",
    targets: [
      {
        id: "3.4",
        text: "By 2030, reduce by one third premature mortality from NCDs through prevention and treatment",
        myevalContribution: "AI-powered risk scoring for cardiovascular disease (Framingham), diabetes, and sleep apnea (STOP-Bang) enables early detection of the top NCD killers across all 8 countries. Preventive screening recommendations based on USPSTF guidelines direct users to appropriate care before conditions become critical.",
        measurableIndicator: "Number of high-risk NCD patients identified and referred for treatment; reduction in late-stage NCD diagnoses among MyEval.ai users vs general population",
      },
      {
        id: "3.8",
        text: "Achieve universal health coverage, including access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines",
        myevalContribution: "MyEval.ai's free tier provides AI-powered health evaluation to anyone with a smartphone, regardless of insurance status or ability to pay. Drug interaction checking ensures medication safety. The platform extends quality health assessment to populations who have never had access to specialist evaluation.",
        measurableIndicator: "Users on free tier below national poverty line; percentage of users in rural areas; users with no prior health evaluation access",
      },
      {
        id: "3.d",
        text: "Strengthen capacity for early warning, risk reduction and management of national and global health risks",
        myevalContribution: "The Government Portal provides real-time disease surveillance using aggregated, anonymized evaluation data. When thousands of users in a region report similar symptoms, the system detects potential outbreaks 2-4 weeks before traditional surveillance. This directly builds national early warning capacity.",
        measurableIndicator: "Outbreak detection time improvement (days saved); number of public health alerts generated; coverage of surveillance-eligible population",
      },
      {
        id: "3.1",
        text: "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births",
        myevalContribution: "Maternal health screening recommendations identify high-risk pregnancies early. In Bangladesh (maternal mortality 123/100K), Bolivia (155/100K), and India (103/100K), MyEval.ai's screening protocols direct women to prenatal care when risk factors are detected — before complications develop.",
        measurableIndicator: "Pregnant users completing risk screening; high-risk pregnancies identified and referred; maternal health follow-up completion rate",
      },
    ],
  },
  {
    sdg: "SDG 1",
    title: "No Poverty",
    color: "bg-red-500",
    targets: [
      {
        id: "1.5",
        text: "Build resilience of the poor and reduce exposure to climate-related and other economic, social and environmental shocks and disasters",
        myevalContribution: "Health emergencies are the #1 driver of catastrophic household spending in developing countries. WHO estimates 100 million people are pushed into poverty annually by health costs. Early detection through MyEval.ai prevents costly emergency care, reducing out-of-pocket health spending by an estimated 15-30% per household.",
        measurableIndicator: "Reduction in emergency health expenditure among users; decrease in catastrophic health spending (>10% of household income)",
      },
    ],
  },
  {
    sdg: "SDG 5",
    title: "Gender Equality",
    color: "bg-orange-500",
    targets: [
      {
        id: "5.6",
        text: "Ensure universal access to sexual and reproductive health and reproductive rights",
        myevalContribution: "In countries where women face barriers to health access (Bangladesh, Bolivia, Vietnam), MyEval.ai provides private, stigma-free health evaluation on personal devices. Reproductive health screening, cervical cancer risk assessment, and maternal health monitoring reach women who may not visit clinics due to cultural, distance, or cost barriers.",
        measurableIndicator: "Female users as % of total (target: >50%); reproductive health evaluations completed; cervical cancer screening referrals generated",
      },
    ],
  },
  {
    sdg: "SDG 9",
    title: "Industry, Innovation and Infrastructure",
    color: "bg-yellow-500",
    targets: [
      {
        id: "9.b",
        text: "Support domestic technology development, research and innovation in developing countries",
        myevalContribution: "MyEval.ai hires local engineering and data science teams in each country, transfers AI health technology knowledge, and partners with local universities for clinical validation research. The Academic Portal enables domestic researchers to access AI-powered health analytics that were previously only available to wealthy institutions.",
        measurableIndicator: "Local tech jobs created per country; university research partnerships; publications co-authored with local researchers",
      },
    ],
  },
  {
    sdg: "SDG 10",
    title: "Reduced Inequalities",
    color: "bg-pink-500",
    targets: [
      {
        id: "10.2",
        text: "Empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic status",
        myevalContribution: "MyEval.ai's free tier ensures that a garment worker in Dhaka receives the same quality AI health evaluation as a tech executive in Bangkok. Multi-language support (Vietnamese, Hindi, Bengali, Thai, Spanish, Portuguese, Quechua, Aymara) and culturally adapted interfaces ensure inclusion of indigenous and minority populations.",
        measurableIndicator: "Users by income quintile; users from indigenous communities; language utilization distribution; rural vs urban user ratio",
      },
    ],
  },
  {
    sdg: "SDG 17",
    title: "Partnerships for the Goals",
    color: "bg-blue-500",
    targets: [
      {
        id: "17.17",
        text: "Encourage and promote effective public, public-private and civil society partnerships",
        myevalContribution: "MyEval.ai's 9-portal model is fundamentally a partnership platform: governments partner for surveillance, hospitals partner for clinical decision support, insurers partner for risk analytics, NGOs (BRAC) partner for community health, employers partner for workforce wellness, and academics partner for validation research.",
        measurableIndicator: "Government MOUs signed; hospital partnerships active; NGO deployment scale; academic studies published",
      },
    ],
  },
];

export const humanitarianFunds: HumanitarianFund[] = [
  {
    name: "Global Fund to Fight AIDS, TB and Malaria",
    type: "multilateral",
    annualBudget: "$4.2B/year (2023-2025 cycle: $15.7B)",
    digitalHealthAllocation: "$200-400M for health system strengthening including digital health",
    eligibility: "Countries with high disease burden; digital health tools that strengthen health systems for HIV/TB/malaria detection and treatment",
    typicalSize: "$5-50M per country grant",
    applicationProcess: "Country Coordinating Mechanism (CCM) submits funding request. Digital health embedded in health system strengthening modules.",
    alignmentScore: 7,
    keyContact: "Country CCM for each target country; Global Fund Secretariat in Geneva for strategic partnerships",
    howMyEvalFits: "MyEval.ai's disease surveillance capabilities detect TB and malaria symptoms early. The Government Portal integrates with national disease tracking. Position as a 'health system strengthening' tool that improves case finding for the three diseases while building broader health intelligence infrastructure.",
  },
  {
    name: "Bill & Melinda Gates Foundation",
    type: "foundation",
    annualBudget: "$7.7B total (2023); ~$2B for Global Health",
    digitalHealthAllocation: "$300-500M for digital health innovation including AI/ML",
    eligibility: "Organizations developing innovative health solutions for low- and middle-income countries. Strong focus on maternal/child health, infectious disease, nutrition.",
    typicalSize: "$1-50M grants; larger for strategic investments",
    applicationProcess: "Unsolicited proposals via gatesfoundation.org. More effective: approach through existing grantees or program officers at relevant health conferences.",
    alignmentScore: 9,
    keyContact: "Global Health Division — Deputy Director for Digital Health Innovation; attend Grand Challenges or Goalkeepers events",
    howMyEvalFits: "Perfect alignment. Gates Foundation's Digital Health program explicitly funds AI-powered health tools for LMIC populations. MyEval.ai's maternal health screening (SDG 3.1), NCD prevention (SDG 3.4), and disease surveillance (SDG 3.d) map directly to their priority areas. The BRAC partnership in Bangladesh is especially compelling — Gates Foundation is one of BRAC's largest donors.",
  },
  {
    name: "World Bank Global Financing Facility (GFF)",
    type: "multilateral",
    annualBudget: "$1B+ committed; leverages $7.50 for every $1 invested",
    digitalHealthAllocation: "Growing allocation for digital health as part of reproductive, maternal, newborn, child, and adolescent health (RMNCAH)",
    eligibility: "Low- and lower-middle-income countries (all 8 target countries qualify). Focus on RMNCAH outcomes.",
    typicalSize: "$10-100M per country (co-investment model)",
    applicationProcess: "Through country governments — GFF works with national health strategies. MyEval.ai must be incorporated into country investment cases.",
    alignmentScore: 8,
    keyContact: "GFF Country Focal Points in each World Bank country office; GFF Secretariat in Washington DC",
    howMyEvalFits: "GFF's focus on RMNCAH is directly served by MyEval.ai's maternal health screening, child health monitoring, and adolescent health evaluation. The Government Portal provides the data infrastructure GFF needs to track RMNCAH investment outcomes. All 8 countries have active GFF investment cases.",
  },
  {
    name: "USAID Digital Health Bureau",
    type: "bilateral",
    annualBudget: "$50-100M specifically for digital health globally",
    digitalHealthAllocation: "100% — this is a dedicated digital health funding stream",
    eligibility: "Organizations developing digital health tools for USAID-priority countries. Must align with USAID Digital Strategy 2020-2024.",
    typicalSize: "$500K-$10M through cooperative agreements, contracts, or innovation challenges",
    applicationProcess: "SAM.gov registration; respond to RFPs/RFAs or USAID Innovation Challenges (e.g., Digital Health Innovation Challenge, Grand Challenges for Development)",
    alignmentScore: 8,
    keyContact: "USAID Bureau for Global Health — Center for Innovation and Impact (CII); USAID Mission Health Officers in each target country",
    howMyEvalFits: "USAID explicitly funds 'Digital tools for health system strengthening' and 'AI for health' under their digital strategy. MyEval.ai's deployment through BRAC in Bangladesh, ABDM in India, and PAHO in Bolivia aligns with USAID's existing country programs. USAID has active health programs in 6 of our 8 target countries.",
  },
  {
    name: "Wellcome Trust",
    type: "foundation",
    annualBudget: "£1.2B/year ($1.5B); health innovation is core focus",
    digitalHealthAllocation: "£200-300M for health innovation including digital tools and AI",
    eligibility: "Research-driven organizations developing innovative health solutions. Strong emphasis on evidence base and clinical validation.",
    typicalSize: "£100K-£10M grants; larger for strategic partnerships",
    applicationProcess: "Open application through wellcome.org; program-specific calls; partnership requests through Innovation Division",
    alignmentScore: 7,
    keyContact: "Wellcome Innovation Division — Director of Health Innovation; attend Wellcome Data Science Summit",
    howMyEvalFits: "Wellcome funds the intersection of AI, data science, and health outcomes. MyEval.ai's clinical validation studies through academic partnerships (Academic Portal) align with Wellcome's evidence-driven approach. The multi-country dataset across diverse populations is especially valuable for their health equity research priorities.",
  },
  {
    name: "PAHO/WHO Health Systems Fund",
    type: "multilateral",
    annualBudget: "$500M+ for health system strengthening across the Americas",
    digitalHealthAllocation: "$50-100M for IS4H (Information Systems for Health) initiative",
    eligibility: "All PAHO member states (covers all 4 LatAm countries + US). Digital health tools aligned with IS4H framework.",
    typicalSize: "$500K-$5M per project through technical cooperation",
    applicationProcess: "Through PAHO Country Offices or Regional Advisor for IS4H. Can also respond to PAHO procurement (via UNOPS).",
    alignmentScore: 9,
    keyContact: "PAHO IS4H Program — Regional Advisor; PAHO Country Representatives in Colombia, Brazil, Argentina, Bolivia",
    howMyEvalFits: "PAHO's IS4H initiative explicitly seeks 'health intelligence platforms' for the Americas. MyEval.ai is precisely what IS4H envisions — a tool that turns health data into actionable intelligence for governments, providers, and populations. The Bolivia entry via PAHO co-funding is already in our plan.",
  },
  {
    name: "Asian Development Bank (ADB) Health Sector",
    type: "development-bank",
    annualBudget: "$2-3B for health and social protection across Asia",
    digitalHealthAllocation: "$200-500M for health system modernization including digital health",
    eligibility: "Developing member countries in Asia (Vietnam, India, Bangladesh, Thailand all qualify)",
    typicalSize: "$10-200M loans and grants; technical assistance grants $500K-$5M",
    applicationProcess: "Through country governments (ADB works with Ministries of Finance/Health). Technical assistance proposals through ADB country offices.",
    alignmentScore: 8,
    keyContact: "ADB Health Sector Group — Principal Health Specialist; ADB Country Directors in each Asian target country",
    howMyEvalFits: "ADB's Strategy 2030 prioritizes 'promoting innovative technology for development' and 'accelerating digital transformation.' MyEval.ai's multi-country Asian deployment demonstrates regional scalability. ADB technical assistance grants can fund government portal deployments across Vietnam, India, Bangladesh, and Thailand simultaneously.",
  },
  {
    name: "Inter-American Development Bank (IDB) Health Innovation",
    type: "development-bank",
    annualBudget: "$1.5-2B for social sectors including health in LatAm",
    digitalHealthAllocation: "$100-300M for health system modernization",
    eligibility: "All LatAm member countries (Colombia, Brazil, Argentina, Bolivia qualify)",
    typicalSize: "$5-100M loans; $500K-$5M technical cooperation grants",
    applicationProcess: "Through IDB Country Offices or IDB Lab (innovation arm). IDB Lab runs health-tech innovation challenges.",
    alignmentScore: 8,
    keyContact: "IDB Social Sector Department — Health Division Lead; IDB Lab — Health Innovation Program Manager",
    howMyEvalFits: "IDB Lab specifically funds 'health-tech solutions that can scale across Latin America.' MyEval.ai's Bogota regional HQ and 4-country LatAm strategy maps perfectly. IDB's focus on EPS/SUS system modernization aligns with our payer portal integration strategy.",
  },
  {
    name: "GAVI — The Vaccine Alliance",
    type: "multilateral",
    annualBudget: "$2B/year for immunization and health system strengthening",
    digitalHealthAllocation: "$100-200M for health system strengthening including digital tools for immunization tracking",
    eligibility: "GAVI-eligible countries (Bangladesh and Bolivia qualify; India graduated but has a transition grant)",
    typicalSize: "$10-50M per country for health system strengthening",
    applicationProcess: "Through country applications to GAVI Board. Digital health tools embedded in Health System and Immunization Strengthening (HSIS) component.",
    alignmentScore: 6,
    keyContact: "GAVI Programme and Policy team; country-level EPI (Expanded Programme on Immunization) managers",
    howMyEvalFits: "MyEval.ai's Government Portal can track immunization coverage and identify unvaccinated populations through health evaluations. Screening recommendations include vaccination status checks. In Bangladesh, where immunization coverage gaps remain, this is especially relevant.",
  },
  {
    name: "IFC (World Bank Group) — Impact Investing",
    type: "development-bank",
    annualBudget: "$23B in total commitments; $2-3B in health sector",
    digitalHealthAllocation: "$200-500M for health-tech and digital health investments",
    eligibility: "Private sector companies operating in developing countries with measurable development impact. Must demonstrate financial viability AND social impact.",
    typicalSize: "$5-50M equity or debt investments",
    applicationProcess: "Submit investment proposal through IFC online portal. IFC conducts due diligence on both financial and impact metrics.",
    alignmentScore: 9,
    keyContact: "IFC Health & Education Global Practice — Investment Officer for Digital Health",
    howMyEvalFits: "IFC is the world's largest development finance institution focused on private sector. MyEval.ai's blended model (financial return + humanitarian impact) is exactly what IFC funds. The 9-revenue-stream financial model demonstrates commercial viability while the 8-country deployment demonstrates development impact. IFC's 'Creating Markets' strategy explicitly targets health-tech in emerging markets.",
  },
];

export const countryHealthImpacts: CountryHealthImpact[] = [
  {
    country: "India",
    population: 1_440_000_000,
    targetUsers: 10_000_000,
    topBurdens: [
      { disease: "Ischemic heart disease", deathsPer100K: 145, dalysLost: 2813, preventablePercent: 35 },
      { disease: "COPD", deathsPer100K: 89, dalysLost: 1576, preventablePercent: 25 },
      { disease: "Stroke", deathsPer100K: 72, dalysLost: 1492, preventablePercent: 30 },
      { disease: "Diabetes", deathsPer100K: 34, dalysLost: 1189, preventablePercent: 40 },
      { disease: "Tuberculosis", deathsPer100K: 28, dalysLost: 945, preventablePercent: 45 },
    ],
    vulnerablePopulations: [
      { group: "Below poverty line", size: "250M people", howServed: "Free tier — AI health evaluation at zero cost on any smartphone" },
      { group: "Women (maternal health)", size: "28M pregnancies/year", howServed: "Maternal risk screening, prenatal care recommendations" },
      { group: "Rural populations", size: "900M people", howServed: "Mobile-first platform works on 2G/3G; ABDM integration brings health records to villages" },
      { group: "Uninsured population", size: "600M without meaningful coverage", howServed: "Free tier provides health intelligence insurance companies never offer" },
      { group: "Diabetics (undiagnosed)", size: "40M undiagnosed diabetics", howServed: "Diabetes risk screening identifies undiagnosed cases for treatment" },
    ],
    estimatedImpact: {
      livesSaved: 12_400,
      dalysAverted: 185_000,
      hospitalizationsAvoided: 62_000,
      earlyDetections: 148_000,
      costSavings: 280_000_000,
    },
  },
  {
    country: "Brazil",
    population: 216_000_000,
    targetUsers: 4_000_000,
    topBurdens: [
      { disease: "Ischemic heart disease", deathsPer100K: 86, dalysLost: 1654, preventablePercent: 35 },
      { disease: "Stroke", deathsPer100K: 56, dalysLost: 1123, preventablePercent: 30 },
      { disease: "Diabetes", deathsPer100K: 38, dalysLost: 1089, preventablePercent: 40 },
      { disease: "Violence/injury", deathsPer100K: 32, dalysLost: 2156, preventablePercent: 10 },
      { disease: "COPD", deathsPer100K: 30, dalysLost: 612, preventablePercent: 25 },
    ],
    vulnerablePopulations: [
      { group: "SUS-dependent population", size: "150M (no private insurance)", howServed: "Free tier extends AI health intelligence to 150M who rely on overstretched SUS" },
      { group: "Favela communities", size: "13M people", howServed: "Mobile access bypasses geographic barriers to healthcare facilities" },
      { group: "Quilombola communities", size: "1.2M Afro-Brazilian", howServed: "Culturally adapted Portuguese-language AI evaluations" },
      { group: "Indigenous populations", size: "900K people", howServed: "Government Portal tracks health outcomes for indigenous health subsystem (SESAI)" },
    ],
    estimatedImpact: {
      livesSaved: 4_800,
      dalysAverted: 72_000,
      hospitalizationsAvoided: 28_000,
      earlyDetections: 56_000,
      costSavings: 165_000_000,
    },
  },
  {
    country: "Bangladesh",
    population: 172_000_000,
    targetUsers: 1_200_000,
    topBurdens: [
      { disease: "Ischemic heart disease", deathsPer100K: 120, dalysLost: 2345, preventablePercent: 35 },
      { disease: "Stroke", deathsPer100K: 89, dalysLost: 1789, preventablePercent: 30 },
      { disease: "COPD", deathsPer100K: 62, dalysLost: 1234, preventablePercent: 25 },
      { disease: "Diabetes", deathsPer100K: 29, dalysLost: 876, preventablePercent: 40 },
      { disease: "Neonatal disorders", deathsPer100K: 24, dalysLost: 2567, preventablePercent: 35 },
    ],
    vulnerablePopulations: [
      { group: "Garment workers", size: "4M workers (80% women)", howServed: "Employer Portal screens workers; international brands fund adoption as ESG compliance" },
      { group: "Rural women (maternal)", size: "3.2M births/year", howServed: "BRAC community health workers use MyEval.ai for maternal screening in villages" },
      { group: "Urban poor (Dhaka slums)", size: "5M people", howServed: "Free tier on mobile — most slum residents have smartphones" },
      { group: "Migrant worker families", size: "10M overseas workers' families", howServed: "Remote health monitoring for families of migrant workers in Gulf states" },
    ],
    estimatedImpact: {
      livesSaved: 1_800,
      dalysAverted: 28_000,
      hospitalizationsAvoided: 8_500,
      earlyDetections: 18_000,
      costSavings: 22_000_000,
    },
  },
  {
    country: "Vietnam",
    population: 100_000_000,
    targetUsers: 2_000_000,
    topBurdens: [
      { disease: "Stroke", deathsPer100K: 96, dalysLost: 1876, preventablePercent: 30 },
      { disease: "Ischemic heart disease", deathsPer100K: 83, dalysLost: 1543, preventablePercent: 35 },
      { disease: "COPD", deathsPer100K: 42, dalysLost: 876, preventablePercent: 25 },
      { disease: "Liver cancer", deathsPer100K: 35, dalysLost: 789, preventablePercent: 20 },
      { disease: "Diabetes", deathsPer100K: 22, dalysLost: 654, preventablePercent: 40 },
    ],
    vulnerablePopulations: [
      { group: "Ethnic minorities", size: "14M people in 53 ethnic groups", howServed: "Vietnamese-language platform reaches minorities who are underserved by Kinh-dominated health system" },
      { group: "Factory workers", size: "18M manufacturing workers", howServed: "Employer Portal for Samsung, Intel, Foxconn factory health programs" },
      { group: "Rural Mekong Delta", size: "18M people", howServed: "Mobile platform reaches communities far from provincial hospitals" },
    ],
    estimatedImpact: {
      livesSaved: 3_200,
      dalysAverted: 48_000,
      hospitalizationsAvoided: 15_000,
      earlyDetections: 32_000,
      costSavings: 58_000_000,
    },
  },
  {
    country: "Thailand",
    population: 72_000_000,
    targetUsers: 1_500_000,
    topBurdens: [
      { disease: "Stroke", deathsPer100K: 62, dalysLost: 1234, preventablePercent: 30 },
      { disease: "Ischemic heart disease", deathsPer100K: 48, dalysLost: 987, preventablePercent: 35 },
      { disease: "Diabetes", deathsPer100K: 28, dalysLost: 876, preventablePercent: 40 },
      { disease: "COPD", deathsPer100K: 22, dalysLost: 543, preventablePercent: 25 },
      { disease: "Road injuries", deathsPer100K: 33, dalysLost: 1567, preventablePercent: 15 },
    ],
    vulnerablePopulations: [
      { group: "Aging population (60+)", size: "13M elderly (18% of pop)", howServed: "Chronic disease monitoring, drug interaction checking for polypharmacy" },
      { group: "Migrant workers from Myanmar", size: "2M registered workers", howServed: "Thai-language evaluation accessible regardless of immigration status on free tier" },
      { group: "Rural Isan region", size: "22M in northeast Thailand", howServed: "Mobile access bridges distance to Bangkok-concentrated healthcare" },
    ],
    estimatedImpact: {
      livesSaved: 2_100,
      dalysAverted: 32_000,
      hospitalizationsAvoided: 11_000,
      earlyDetections: 24_000,
      costSavings: 82_000_000,
    },
  },
  {
    country: "Colombia",
    population: 52_000_000,
    targetUsers: 1_400_000,
    topBurdens: [
      { disease: "Ischemic heart disease", deathsPer100K: 76, dalysLost: 1432, preventablePercent: 35 },
      { disease: "Stroke", deathsPer100K: 34, dalysLost: 678, preventablePercent: 30 },
      { disease: "Violence/injury", deathsPer100K: 28, dalysLost: 1876, preventablePercent: 10 },
      { disease: "COPD", deathsPer100K: 26, dalysLost: 543, preventablePercent: 25 },
      { disease: "Diabetes", deathsPer100K: 19, dalysLost: 567, preventablePercent: 40 },
    ],
    vulnerablePopulations: [
      { group: "Conflict-displaced populations", size: "8M internally displaced persons", howServed: "Free tier provides health access to displaced populations who lost EPS coverage" },
      { group: "Indigenous communities", size: "2M people in 115 groups", howServed: "Spanish-language AI reaches communities with limited health infrastructure" },
      { group: "Venezuelan migrants", size: "2.9M migrants in Colombia", howServed: "Free tier available regardless of immigration or insurance status" },
    ],
    estimatedImpact: {
      livesSaved: 1_600,
      dalysAverted: 24_000,
      hospitalizationsAvoided: 9_000,
      earlyDetections: 19_000,
      costSavings: 45_000_000,
    },
  },
  {
    country: "Argentina",
    population: 46_000_000,
    targetUsers: 900_000,
    topBurdens: [
      { disease: "Ischemic heart disease", deathsPer100K: 62, dalysLost: 1123, preventablePercent: 35 },
      { disease: "Stroke", deathsPer100K: 36, dalysLost: 678, preventablePercent: 30 },
      { disease: "COPD", deathsPer100K: 22, dalysLost: 432, preventablePercent: 25 },
      { disease: "Diabetes", deathsPer100K: 18, dalysLost: 543, preventablePercent: 40 },
      { disease: "Colorectal cancer", deathsPer100K: 16, dalysLost: 345, preventablePercent: 25 },
    ],
    vulnerablePopulations: [
      { group: "PAMI retirees", size: "5M elderly on fixed income", howServed: "Drug interaction checking critical for polypharmacy in elderly; free tier accessible" },
      { group: "Informal economy workers", size: "10M without obra social", howServed: "Free tier provides health evaluation that obra social-less workers cannot access" },
    ],
    estimatedImpact: {
      livesSaved: 1_100,
      dalysAverted: 16_000,
      hospitalizationsAvoided: 6_000,
      earlyDetections: 12_000,
      costSavings: 38_000_000,
    },
  },
  {
    country: "Bolivia",
    population: 12_200_000,
    targetUsers: 300_000,
    topBurdens: [
      { disease: "Ischemic heart disease", deathsPer100K: 82, dalysLost: 1567, preventablePercent: 35 },
      { disease: "Stroke", deathsPer100K: 48, dalysLost: 987, preventablePercent: 30 },
      { disease: "Lower respiratory infections", deathsPer100K: 38, dalysLost: 1234, preventablePercent: 30 },
      { disease: "Neonatal disorders", deathsPer100K: 22, dalysLost: 1876, preventablePercent: 35 },
      { disease: "Diabetes", deathsPer100K: 18, dalysLost: 432, preventablePercent: 40 },
    ],
    vulnerablePopulations: [
      { group: "Indigenous populations", size: "5M (41% of population)", howServed: "Quechua and Aymara language support — unprecedented for health tech. Traditional medicine integration." },
      { group: "Rural altiplano communities", size: "3M at 3,500m+ elevation", howServed: "Mobile platform reaches communities hours from nearest hospital" },
      { group: "Women (maternal mortality)", size: "Maternal mortality 155/100K", howServed: "Maternal risk screening at community level through PAHO-funded deployment" },
    ],
    estimatedImpact: {
      livesSaved: 400,
      dalysAverted: 6_000,
      hospitalizationsAvoided: 2_000,
      earlyDetections: 4_000,
      costSavings: 8_000_000,
    },
  },
];

// Philippines
countryHealthImpacts.push({
  country: "Philippines",
  population: 117_000_000,
  targetUsers: 1_500_000,
  topBurdens: [
    { disease: "Ischemic heart disease", deathsPer100K: 118, dalysLost: 2234, preventablePercent: 35 },
    { disease: "Stroke", deathsPer100K: 67, dalysLost: 1345, preventablePercent: 30 },
    { disease: "Diabetes", deathsPer100K: 34, dalysLost: 987, preventablePercent: 40 },
    { disease: "Lower respiratory infections", deathsPer100K: 52, dalysLost: 1567, preventablePercent: 30 },
    { disease: "Tuberculosis", deathsPer100K: 25, dalysLost: 876, preventablePercent: 45 },
  ],
  vulnerablePopulations: [
    { group: "OFW families", size: "10M+ overseas worker families", howServed: "Remote family health monitoring — workers abroad can track their family's health evaluations" },
    { group: "Urban poor (Manila slums)", size: "4M in informal settlements", howServed: "Free tier on smartphone — most slum residents have mobile phones" },
    { group: "Visayas/Mindanao underserved", size: "40M in provinces with limited health access", howServed: "Mobile-first platform bridges geographic barriers; English + Filipino language" },
    { group: "Indigenous peoples (Lumad, Igorot)", size: "14-17M indigenous Filipinos", howServed: "Filipino-language AI evaluation reaches communities excluded from English-only health tech" },
  ],
  estimatedImpact: {
    livesSaved: 2_200,
    dalysAverted: 34_000,
    hospitalizationsAvoided: 12_000,
    earlyDetections: 26_000,
    costSavings: 52_000_000,
  },
});

export const totalImpact = {
  livesSaved: countryHealthImpacts.reduce((s, c) => s + c.estimatedImpact.livesSaved, 0),
  dalysAverted: countryHealthImpacts.reduce((s, c) => s + c.estimatedImpact.dalysAverted, 0),
  hospitalizationsAvoided: countryHealthImpacts.reduce((s, c) => s + c.estimatedImpact.hospitalizationsAvoided, 0),
  earlyDetections: countryHealthImpacts.reduce((s, c) => s + c.estimatedImpact.earlyDetections, 0),
  costSavings: countryHealthImpacts.reduce((s, c) => s + c.estimatedImpact.costSavings, 0),
  costPerDalyAverted: 50_000_000 / countryHealthImpacts.reduce((s, c) => s + c.estimatedImpact.dalysAverted, 0),
  costPerLifeSaved: 50_000_000 / countryHealthImpacts.reduce((s, c) => s + c.estimatedImpact.livesSaved, 0),
  socialROI: countryHealthImpacts.reduce((s, c) => s + c.estimatedImpact.costSavings, 0) / 50_000_000,
};

export const fiveYearProjection = [
  { year: 1, users: 2_000_000, livesSaved: 3_300, hospitalizationsAvoided: 10_000, cancerDetections: 1_200, dalysAverted: 87_000, healthValue: 2_200_000_000 },
  { year: 2, users: 5_000_000, livesSaved: 8_300, hospitalizationsAvoided: 25_000, cancerDetections: 3_000, dalysAverted: 218_000, healthValue: 3_500_000_000 },
  { year: 3, users: 10_000_000, livesSaved: 16_500, hospitalizationsAvoided: 50_000, cancerDetections: 6_000, dalysAverted: 435_000, healthValue: 5_200_000_000 },
  { year: 4, users: 16_000_000, livesSaved: 26_400, hospitalizationsAvoided: 80_000, cancerDetections: 9_600, dalysAverted: 696_000, healthValue: 7_800_000_000 },
  { year: 5, users: 20_000_000, livesSaved: 33_000, hospitalizationsAvoided: 100_000, cancerDetections: 12_000, dalysAverted: 870_000, healthValue: 9_760_000_000 },
];

export const fundStructure = [
  { tranche: "Catalytic / First-Loss", amount: 10_000_000, type: "Grant", returnProfile: "0% — absorbs first losses to protect other investors", source: "DFIs, foundations, bilateral donors (Gates, USAID, Wellcome)" },
  { tranche: "Concessional", amount: 15_000_000, type: "Below-market equity", returnProfile: "2-5% return", source: "Impact investors, IFC, ADB, IDB" },
  { tranche: "Commercial", amount: 15_000_000, type: "Market-rate equity", returnProfile: "10-15% return", source: "Health-tech VCs, growth funds" },
  { tranche: "Results-Based", amount: 10_000_000, type: "Outcomes payments", returnProfile: "Paid on health targets achieved", source: "Governments, social impact bonds" },
];

export const blendedFinanceModel = {
  investmentSize: 50_000_000,
  financialReturn: {
    year2Revenue: 97_500_000,
    cumulativeFundValue: 97_660_000,
    irr: "45%+",
    multipleOnInvested: "1.95x by Month 24",
  },
  humanitarianReturn: {
    livesSaved: totalImpact.livesSaved,
    dalysAverted: totalImpact.dalysAverted,
    costPerDaly: Math.round(totalImpact.costPerDalyAverted),
    socialROI: `${totalImpact.socialROI.toFixed(1)}x (5yr: 264:1)`,
    populationReached: 20_000_000,
    countriesServed: 8,
    vulnerablePopulationsServed: "2.1 billion addressable",
  },
  comparison: [
    { intervention: "MyEval.ai (AI screening)", costPerDaly: Math.round(totalImpact.costPerDalyAverted), scalability: "Unlimited (digital)", sustainability: "Self-sustaining (revenue)" },
    { intervention: "Primary care clinic", costPerDaly: 150, scalability: "Limited (physical)", sustainability: "Requires ongoing funding" },
    { intervention: "Community health workers", costPerDaly: 75, scalability: "Moderate (human capacity)", sustainability: "Requires ongoing funding" },
    { intervention: "Vaccination programs", costPerDaly: 25, scalability: "Moderate (supply chain)", sustainability: "Requires ongoing funding" },
    { intervention: "Hospital screening programs", costPerDaly: 300, scalability: "Limited (facility-based)", sustainability: "Requires ongoing funding" },
  ],
};
