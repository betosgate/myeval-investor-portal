/**
 * Philippines Comprehensive Statistical Data
 * ============================================
 * Sources: World Bank, IMF World Economic Outlook, Philippine Statistics Authority (PSA),
 * Bangko Sentral ng Pilipinas (BSP), Department of Health (DOH), DICT, UNCTAD,
 * WHO, ADB, Philippine Institute for Development Studies (PIDS)
 *
 * Data vintage: Most recent available as of Q1 2025.
 * 2025 figures are estimates; 2026 figures are IMF/ADB projections.
 */

// =============================================================================
// GDP DATA
// =============================================================================

/** Philippines GDP nominal in billions USD */
export const gdpNominalUSD = [
  { year: 2018, value: 346.8, note: "World Bank" },
  { year: 2019, value: 376.8, note: "World Bank" },
  { year: 2020, value: 361.5, note: "COVID contraction" },
  { year: 2021, value: 394.1, note: "Recovery year" },
  { year: 2022, value: 404.3, note: "World Bank" },
  { year: 2023, value: 435.7, note: "PSA" },
  { year: 2024, value: 459.0, note: "PSA preliminary" },
  { year: 2025, value: 487.0, note: "IMF estimate" },
  { year: 2026, value: 520.0, note: "IMF projection" },
];

/** GDP real growth rate (%) */
export const gdpGrowthRate = [
  { year: 2018, value: 6.3 },
  { year: 2019, value: 6.1 },
  { year: 2020, value: -9.5 },
  { year: 2021, value: 5.7 },
  { year: 2022, value: 7.6 },
  { year: 2023, value: 5.6 },
  { year: 2024, value: 5.8 },
  { year: 2025, value: 6.1, note: "IMF est." },
  { year: 2026, value: 6.2, note: "IMF proj." },
];

/** GDP by sector (% of GDP, 2024 PSA) */
export const gdpBySector2024 = [
  { sector: "Agriculture", pct: 8.9 },
  { sector: "Industry", pct: 28.8 },
  { sector: "Services", pct: 62.3 },
];

// =============================================================================
// DEMOGRAPHICS
// =============================================================================

/** Population: 117.3 million (PSA 2024 estimate) */
export const totalPopulation2024 = 117_300_000;

/** Population by age group (PSA 2024 estimates, %) */
export const populationByAge = [
  { group: "0-14", pct: 28.5, count: 33_431_000 },
  { group: "15-24", pct: 18.7, count: 21_935_000 },
  { group: "25-54", pct: 37.6, count: 44_105_000 },
  { group: "55-64", pct: 8.5, count: 9_971_000 },
  { group: "65+", pct: 6.7, count: 7_859_000 },
];

/** Urban vs rural split (PSA 2024) */
export const urbanRuralSplit = {
  urban: { pct: 48.0, count: 56_304_000 },
  rural: { pct: 52.0, count: 60_996_000 },
};

/** Population by major island group (PSA 2024) */
export const populationByIslandGroup = [
  { region: "Luzon", count: 65_200_000, pct: 55.6 },
  { region: "Visayas", count: 21_400_000, pct: 18.2 },
  { region: "Mindanao", count: 30_700_000, pct: 26.2 },
];

// =============================================================================
// REGIONAL ECONOMIC DATA
// =============================================================================

/** GDP per capita by region (PSA 2023 GRDP data, PHP and approx. USD at ~PHP 56/USD) */
export const gdpPerCapitaByRegion = [
  { region: "NCR (Metro Manila)", php: 456_000, usd: 8_143, povertyRate: 3.2, internetPenetration: 89 },
  { region: "CALABARZON", php: 192_000, usd: 3_429, povertyRate: 8.4, internetPenetration: 76 },
  { region: "Central Luzon", php: 161_000, usd: 2_875, povertyRate: 9.1, internetPenetration: 72 },
  { region: "Central Visayas", php: 178_000, usd: 3_179, povertyRate: 14.5, internetPenetration: 70 },
  { region: "Davao Region", php: 153_000, usd: 2_732, povertyRate: 16.8, internetPenetration: 65 },
  { region: "BARMM", php: 48_000, usd: 857, povertyRate: 39.4, internetPenetration: 32 },
  { region: "Eastern Visayas", php: 82_000, usd: 1_464, povertyRate: 30.2, internetPenetration: 48 },
];

// =============================================================================
// HEALTH STATISTICS
// =============================================================================

export const healthStats = {
  lifeExpectancy: { total: 71.5, male: 68.5, female: 74.7, source: "WHO 2024" },
  infantMortalityPer1000: 20.2, // PSA 2023
  maternalMortalityPer100k: 78, // WHO 2023 estimate
  physiciansPer10k: 6.0, // WHO 2023
  hospitalBedsPer10k: 9.8, // DOH 2023
  healthExpenditurePctGDP: 5.0, // WHO National Health Accounts 2023
  outOfPocketPctHealthExpenditure: 54.0, // WHO 2023
  governmentHealthSpendPctGDP: 1.6,
};

/** Top 10 causes of death (DOH/PSA 2023, deaths per year) */
export const topCausesOfDeath = [
  { rank: 1, cause: "Ischaemic heart disease", deaths: 99_680 },
  { rank: 2, cause: "Cerebrovascular disease (stroke)", deaths: 68_550 },
  { rank: 3, cause: "Neoplasms (cancer)", deaths: 62_340 },
  { rank: 4, cause: "Diabetes mellitus", deaths: 40_120 },
  { rank: 5, cause: "Pneumonia", deaths: 35_780 },
  { rank: 6, cause: "Hypertensive diseases", deaths: 28_940 },
  { rank: 7, cause: "Chronic lower respiratory diseases", deaths: 24_350 },
  { rank: 8, cause: "Kidney diseases (renal failure)", deaths: 22_780 },
  { rank: 9, cause: "Tuberculosis", deaths: 18_200 },
  { rank: 10, cause: "Transport accidents", deaths: 12_640 },
];

// =============================================================================
// DIGITAL ECONOMY
// =============================================================================

/** Internet users (millions) by year */
export const internetUsers = [
  { year: 2020, users: 73.0 },
  { year: 2021, users: 76.0 },
  { year: 2022, users: 82.7 },
  { year: 2023, users: 85.2 },
  { year: 2024, users: 88.0 },
  { year: 2025, users: 91.0, note: "est." },
];

/** Smartphone users (millions) by year */
export const smartphoneUsers = [
  { year: 2020, users: 62.0 },
  { year: 2021, users: 67.5 },
  { year: 2022, users: 72.3 },
  { year: 2023, users: 76.0 },
  { year: 2024, users: 79.5 },
  { year: 2025, users: 83.0, note: "est." },
];

/** E-commerce market size (billions USD) */
export const ecommerceMarketSize = [
  { year: 2020, value: 7.5 },
  { year: 2021, value: 12.0 },
  { year: 2022, value: 14.0 },
  { year: 2023, value: 16.5 },
  { year: 2024, value: 19.0 },
  { year: 2025, value: 22.0, note: "est." },
];

/** Digital payments transaction volume (billions USD) */
export const digitalPaymentsVolume = [
  { year: 2020, value: 24 },
  { year: 2021, value: 58 },
  { year: 2022, value: 78 },
  { year: 2023, value: 95 },
  { year: 2024, value: 115 },
  { year: 2025, value: 135, note: "est." },
];

/** Mobile wallets - monthly active users (millions, approximate) */
export const mobileWalletMAU = {
  gcash: { mau: 94, note: "GCash Q4 2024 reported MAU" },
  maya: { mau: 22, note: "Maya (PayMaya) Q4 2024 est." },
};

/** BPO (IT-BPM) industry revenue (billions USD) */
export const bpoRevenue = [
  { year: 2020, revenue: 26.7, employees: 1_320_000 },
  { year: 2021, revenue: 29.1, employees: 1_380_000 },
  { year: 2022, revenue: 32.5, employees: 1_570_000 },
  { year: 2023, revenue: 35.5, employees: 1_640_000 },
  { year: 2024, revenue: 38.0, employees: 1_700_000 },
  { year: 2025, revenue: 40.0, employees: 1_760_000, note: "IBPAP target" },
];

// =============================================================================
// INFRASTRUCTURE
// =============================================================================

export const infrastructure = {
  roadNetworkKm: {
    total: 218_000,
    paved: 65_400,
    unpaved: 152_600,
    expressways: 620,
    source: "DPWH 2024",
  },
  railNetworkKm: {
    total: 79,
    mrt: 16.9, // MRT-3
    lrt: 31.0, // LRT-1 + LRT-2
    pnr: 31.0, // PNR commuter
    underConstruction: 171, // Metro Manila Subway, NSCR, MRT-7, LRT-1 extension
    source: "DOTr 2024",
  },
  airports: {
    total: 85,
    international: 11,
    domestic: 74,
    source: "CAAP 2024",
  },
  electricity: {
    accessRate: 96.5, // % of households
    generationCapacityGW: 27.4,
    renewablePct: 22,
    source: "DOE 2024",
  },
  broadband: {
    fixedBroadbandPenetration: 11.8, // % of households
    fixedSubscriptions: 4_900_000,
    mobileBroadbandPenetration: 73.0, // % of population
    mobileSubscriptions: 85_600_000,
    avgFixedSpeedMbps: 93,
    avgMobileSpeedMbps: 27,
    source: "DICT / Ookla Q4 2024",
  },
};

// =============================================================================
// TRADE AND INVESTMENT
// =============================================================================

/** Top 5 export products (2024 est., billions USD) */
export const topExports = [
  { product: "Electronic products (semiconductors, etc.)", value: 42.3 },
  { product: "Other manufactured goods", value: 6.8 },
  { product: "Machinery & transport equipment", value: 4.2 },
  { product: "Coconut oil & other agro-based products", value: 3.5 },
  { product: "Metal components & minerals", value: 3.1 },
];

/** Top 5 import products (2024 est., billions USD) */
export const topImports = [
  { product: "Electronic components", value: 26.8 },
  { product: "Mineral fuels / petroleum", value: 18.2 },
  { product: "Transport equipment / vehicles", value: 8.5 },
  { product: "Industrial machinery & equipment", value: 7.9 },
  { product: "Iron & steel", value: 5.4 },
];

/** Top 5 FDI source countries (BSP 2023-2024) */
export const topFDISources = [
  { country: "Japan", value: 2.8, note: "billions USD, cumulative stock" },
  { country: "Singapore", value: 2.3 },
  { country: "United States", value: 1.9 },
  { country: "Netherlands", value: 1.6 },
  { country: "South Korea", value: 1.2 },
];

/** OFW remittances by year (billions USD, BSP) */
export const ofwRemittances = [
  { year: 2020, value: 29.9 },
  { year: 2021, value: 31.4 },
  { year: 2022, value: 36.1 },
  { year: 2023, value: 37.2 },
  { year: 2024, value: 38.5 },
  { year: 2025, value: 40.0, note: "BSP est." },
];

/** Gross international reserves (BSP, end of year, billions USD) */
export const foreignReserves = [
  { year: 2022, value: 96.1 },
  { year: 2023, value: 103.8 },
  { year: 2024, value: 106.3 },
];

// =============================================================================
// ASEAN PEER COMPARISON
// =============================================================================

/**
 * Comparison with ASEAN peers (2024 data or most recent available)
 * Sources: IMF WEO, World Bank, UNCTAD, WHO, UNDP
 */
export const aseanComparison = [
  {
    country: "Philippines",
    gdpPerCapitaUSD: 3_900,
    gdpGrowthPct: 5.8,
    fdiInflowBnUSD: 9.2,
    internetPenetrationPct: 73,
    healthSpendPerCapitaUSD: 180,
    easeOfDoingBusinessRank: 95, // World Bank legacy / proxy from business climate indices
    corruptionPerceptionIndex: 34, // Transparency International 2024
    humanDevelopmentIndex: 0.710, // UNDP 2024
  },
  {
    country: "Vietnam",
    gdpPerCapitaUSD: 4_300,
    gdpGrowthPct: 6.9,
    fdiInflowBnUSD: 18.5,
    internetPenetrationPct: 79,
    healthSpendPerCapitaUSD: 230,
    easeOfDoingBusinessRank: 70,
    corruptionPerceptionIndex: 42,
    humanDevelopmentIndex: 0.726,
  },
  {
    country: "Thailand",
    gdpPerCapitaUSD: 7_800,
    gdpGrowthPct: 2.8,
    fdiInflowBnUSD: 10.2,
    internetPenetrationPct: 88,
    healthSpendPerCapitaUSD: 300,
    easeOfDoingBusinessRank: 21,
    corruptionPerceptionIndex: 35,
    humanDevelopmentIndex: 0.803,
  },
  {
    country: "Indonesia",
    gdpPerCapitaUSD: 4_900,
    gdpGrowthPct: 5.1,
    fdiInflowBnUSD: 21.6,
    internetPenetrationPct: 77,
    healthSpendPerCapitaUSD: 135,
    easeOfDoingBusinessRank: 73,
    corruptionPerceptionIndex: 34,
    humanDevelopmentIndex: 0.713,
  },
  {
    country: "Malaysia",
    gdpPerCapitaUSD: 13_400,
    gdpGrowthPct: 5.1,
    fdiInflowBnUSD: 12.4,
    internetPenetrationPct: 97,
    healthSpendPerCapitaUSD: 490,
    easeOfDoingBusinessRank: 12,
    corruptionPerceptionIndex: 50,
    humanDevelopmentIndex: 0.807,
  },
];

// =============================================================================
// COMBINED TIME SERIES (for multi-line charts)
// =============================================================================

/** Comprehensive yearly data for line/bar charts */
export const philippinesYearlyTimeSeries = gdpNominalUSD.map((gdp) => {
  const growth = gdpGrowthRate.find((g) => g.year === gdp.year);
  const internet = internetUsers.find((i) => i.year === gdp.year);
  const smartphone = smartphoneUsers.find((s) => s.year === gdp.year);
  const ecommerce = ecommerceMarketSize.find((e) => e.year === gdp.year);
  const bpo = bpoRevenue.find((b) => b.year === gdp.year);
  const remittance = ofwRemittances.find((r) => r.year === gdp.year);
  const digPay = digitalPaymentsVolume.find((d) => d.year === gdp.year);

  return {
    year: gdp.year,
    gdpBnUSD: gdp.value,
    gdpGrowthPct: growth?.value ?? null,
    internetUsersM: internet?.users ?? null,
    smartphoneUsersM: smartphone?.users ?? null,
    ecommerceBnUSD: ecommerce?.value ?? null,
    bpoRevenueBnUSD: bpo?.revenue ?? null,
    bpoEmployees: bpo?.employees ?? null,
    remittancesBnUSD: remittance?.value ?? null,
    digitalPaymentsBnUSD: digPay?.value ?? null,
  };
});
