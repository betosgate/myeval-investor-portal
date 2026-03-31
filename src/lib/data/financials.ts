export interface MonthlyProjection {
  month: number;
  label: string;
  revenue: number;
  expenses: number;
  cashFlow: number;
  cumulativeCashFlow: number;
  headcount: number;
  users: number;
  b2bClients: number;
}

export interface RevenueStream {
  name: string;
  year1: number;
  year2: number;
  description: string;
  margin: number;
}

export const revenueStreams: RevenueStream[] = [
  {
    name: "Government Contracts",
    year1: 4_200_000,
    year2: 18_500_000,
    description:
      "National and state-level health ministry licensing for population surveillance, disease tracking, and vaccination coverage analytics across 8 countries.",
    margin: 72,
  },
  {
    name: "Health System Licensing",
    year1: 3_800_000,
    year2: 16_200_000,
    description:
      "Per-facility licensing for hospital networks including bed management, staff scheduling, infection control, and patient flow optimization portals.",
    margin: 78,
  },
  {
    name: "Payer / Insurance Analytics",
    year1: 3_200_000,
    year2: 14_800_000,
    description:
      "PMPM pricing for claims analytics, fraud detection, prior authorization, and risk adjustment tools for EPS, obras sociales, and private insurers.",
    margin: 80,
  },
  {
    name: "Consumer Subscriptions",
    year1: 1_600_000,
    year2: 8_500_000,
    description:
      "Freemium to Advanced ($2-$30 localized pricing) conversions plus $0.25-$3/month newsletter subscriptions across all markets.",
    margin: 88,
  },
  {
    name: "Employer Wellness",
    year1: 2_100_000,
    year2: 9_200_000,
    description:
      "Per-employee-per-month wellness platform for garment factories (Bangladesh), corporate offices (India, Brazil), and multinationals across all markets.",
    margin: 75,
  },
  {
    name: "Partner / API Revenue",
    year1: 1_200_000,
    year2: 5_800_000,
    description:
      "API call pricing, white-label licensing for digital health platforms, and integration partner revenue share agreements.",
    margin: 85,
  },
  {
    name: "Academic Licensing",
    year1: 600_000,
    year2: 2_400_000,
    description:
      "University site licenses for medical schools and research institutions for clinical trial analytics and diagnostic accuracy tools.",
    margin: 82,
  },
  {
    name: "Advertiser Revenue",
    year1: 800_000,
    year2: 4_100_000,
    description:
      "Pharmaceutical company advertising, health product campaigns with HIPAA-compliant audience targeting across consumer portals.",
    margin: 70,
  },
  {
    name: "US Commercial (WebMD Alternative)",
    year1: 3_500_000,
    year2: 18_000_000,
    description:
      "Direct-to-consumer AI health evaluations, employer wellness, and health system partnerships in the US market as a personalized WebMD alternative.",
    margin: 82,
  },
];

export const totalYear1 = revenueStreams.reduce((s, r) => s + r.year1, 0);
export const totalYear2 = revenueStreams.reduce((s, r) => s + r.year2, 0);

export const fundAllocation = [
  { category: "Technology & Product", amount: 12_000_000, pct: 24 },
  { category: "Sales & Marketing", amount: 10_000_000, pct: 20 },
  { category: "Operations & Staff", amount: 11_000_000, pct: 22 },
  { category: "Legal & Compliance", amount: 4_000_000, pct: 8 },
  { category: "Country Infrastructure (9 countries)", amount: 8_000_000, pct: 16 },
  { category: "Working Capital Reserve", amount: 5_000_000, pct: 10 },
];

export const monthlyProjections: MonthlyProjection[] = [
  { month: 1, label: "Apr 2026", revenue: 0, expenses: 850_000, cashFlow: -850_000, cumulativeCashFlow: 49_150_000, headcount: 18, users: 0, b2bClients: 0 },
  { month: 2, label: "May 2026", revenue: 0, expenses: 920_000, cashFlow: -920_000, cumulativeCashFlow: 48_230_000, headcount: 22, users: 0, b2bClients: 0 },
  { month: 3, label: "Jun 2026", revenue: 50_000, expenses: 1_100_000, cashFlow: -1_050_000, cumulativeCashFlow: 47_180_000, headcount: 28, users: 5_000, b2bClients: 2 },
  { month: 4, label: "Jul 2026", revenue: 180_000, expenses: 1_200_000, cashFlow: -1_020_000, cumulativeCashFlow: 46_160_000, headcount: 35, users: 25_000, b2bClients: 5 },
  { month: 5, label: "Aug 2026", revenue: 420_000, expenses: 1_350_000, cashFlow: -930_000, cumulativeCashFlow: 45_230_000, headcount: 42, users: 80_000, b2bClients: 12 },
  { month: 6, label: "Sep 2026", revenue: 780_000, expenses: 1_500_000, cashFlow: -720_000, cumulativeCashFlow: 44_510_000, headcount: 50, users: 180_000, b2bClients: 22 },
  { month: 7, label: "Oct 2026", revenue: 1_200_000, expenses: 1_650_000, cashFlow: -450_000, cumulativeCashFlow: 44_060_000, headcount: 58, users: 350_000, b2bClients: 35 },
  { month: 8, label: "Nov 2026", revenue: 1_650_000, expenses: 1_750_000, cashFlow: -100_000, cumulativeCashFlow: 43_960_000, headcount: 65, users: 550_000, b2bClients: 48 },
  { month: 9, label: "Dec 2026", revenue: 2_100_000, expenses: 1_850_000, cashFlow: 250_000, cumulativeCashFlow: 44_210_000, headcount: 72, users: 800_000, b2bClients: 62 },
  { month: 10, label: "Jan 2027", revenue: 2_500_000, expenses: 1_950_000, cashFlow: 550_000, cumulativeCashFlow: 44_760_000, headcount: 78, users: 1_100_000, b2bClients: 78 },
  { month: 11, label: "Feb 2027", revenue: 2_900_000, expenses: 2_050_000, cashFlow: 850_000, cumulativeCashFlow: 45_610_000, headcount: 82, users: 1_450_000, b2bClients: 92 },
  { month: 12, label: "Mar 2027", revenue: 3_400_000, expenses: 2_150_000, cashFlow: 1_250_000, cumulativeCashFlow: 46_860_000, headcount: 88, users: 1_900_000, b2bClients: 110 },
  { month: 13, label: "Apr 2027", revenue: 4_000_000, expenses: 2_300_000, cashFlow: 1_700_000, cumulativeCashFlow: 48_560_000, headcount: 95, users: 2_500_000, b2bClients: 130 },
  { month: 14, label: "May 2027", revenue: 4_600_000, expenses: 2_450_000, cashFlow: 2_150_000, cumulativeCashFlow: 50_710_000, headcount: 100, users: 3_200_000, b2bClients: 148 },
  { month: 15, label: "Jun 2027", revenue: 5_200_000, expenses: 2_600_000, cashFlow: 2_600_000, cumulativeCashFlow: 53_310_000, headcount: 108, users: 4_000_000, b2bClients: 168 },
  { month: 16, label: "Jul 2027", revenue: 5_800_000, expenses: 2_750_000, cashFlow: 3_050_000, cumulativeCashFlow: 56_360_000, headcount: 112, users: 5_000_000, b2bClients: 190 },
  { month: 17, label: "Aug 2027", revenue: 6_400_000, expenses: 2_900_000, cashFlow: 3_500_000, cumulativeCashFlow: 59_860_000, headcount: 118, users: 6_200_000, b2bClients: 215 },
  { month: 18, label: "Sep 2027", revenue: 7_000_000, expenses: 3_050_000, cashFlow: 3_950_000, cumulativeCashFlow: 63_810_000, headcount: 122, users: 7_500_000, b2bClients: 240 },
  { month: 19, label: "Oct 2027", revenue: 7_600_000, expenses: 3_200_000, cashFlow: 4_400_000, cumulativeCashFlow: 68_210_000, headcount: 128, users: 9_000_000, b2bClients: 268 },
  { month: 20, label: "Nov 2027", revenue: 8_200_000, expenses: 3_350_000, cashFlow: 4_850_000, cumulativeCashFlow: 73_060_000, headcount: 132, users: 10_800_000, b2bClients: 295 },
  { month: 21, label: "Dec 2027", revenue: 8_800_000, expenses: 3_500_000, cashFlow: 5_300_000, cumulativeCashFlow: 78_360_000, headcount: 138, users: 12_800_000, b2bClients: 325 },
  { month: 22, label: "Jan 2028", revenue: 9_500_000, expenses: 3_650_000, cashFlow: 5_850_000, cumulativeCashFlow: 84_210_000, headcount: 142, users: 15_000_000, b2bClients: 355 },
  { month: 23, label: "Feb 2028", revenue: 10_200_000, expenses: 3_800_000, cashFlow: 6_400_000, cumulativeCashFlow: 90_610_000, headcount: 148, users: 17_500_000, b2bClients: 388 },
  { month: 24, label: "Mar 2028", revenue: 11_000_000, expenses: 3_950_000, cashFlow: 7_050_000, cumulativeCashFlow: 97_660_000, headcount: 152, users: 20_000_000, b2bClients: 420 },
];

export const keyMetrics = {
  cac: { year1: 12, year2: 8, label: "Customer Acquisition Cost" },
  ltv: { year1: 85, year2: 142, label: "Lifetime Value" },
  ltvCacRatio: { year1: 7.1, year2: 17.8, label: "LTV:CAC Ratio" },
  churnRate: { year1: 4.2, year2: 2.8, label: "Monthly Churn Rate %" },
  arpu: { year1: 11.2, year2: 5.9, label: "ARPU (blended, monthly)" },
  grossMargin: { year1: 76, year2: 81, label: "Gross Margin %" },
  burnRate: { month3: 1_100_000, month12: 2_150_000, label: "Monthly Burn Rate" },
  breakEvenMonth: 9,
  runwayMonths: 42,
};

export const usMarketData = {
  totalAddressableMarket: 42_000_000_000,
  serviceableMarket: 8_500_000_000,
  webmdRevenue: 850_000_000,
  webmdUsers: 75_000_000,
  targetYear2Users: 2_000_000,
  targetYear2Revenue: 18_000_000,
  differentiators: [
    "AI-powered personalized evaluations vs static articles",
    "Interactive risk scoring with clinical frameworks (Framingham, STOP-Bang)",
    "Downloadable PDF reports with ICD/CPT codes",
    "Drug interaction checking with real-time alerts",
    "USPSTF screening recommendations personalized to user profile",
    "9-portal ecosystem serving all healthcare stakeholders",
    "Privacy-first model — user owns their data, no ad-driven surveillance",
  ],
  acquisitionChannels: [
    { channel: "Organic SEO", pct: 30, cost: 3 },
    { channel: "Employer Wellness Partners", pct: 25, cost: 8 },
    { channel: "Social Media / Influencer", pct: 15, cost: 12 },
    { channel: "Insurance Member Benefits", pct: 15, cost: 5 },
    { channel: "Physician Referral Network", pct: 10, cost: 6 },
    { channel: "Paid Search / Display", pct: 5, cost: 22 },
  ],
};
