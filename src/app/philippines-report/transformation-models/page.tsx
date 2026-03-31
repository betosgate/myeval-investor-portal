import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Landmark, Scale, TrendingUp } from "lucide-react";

const models = [
  {
    model: "Norway — Sovereign Wealth Fund",
    country: "Norway",
    color: "border-blue-300 bg-blue-50/50",
    keyFact: "$1.78 trillion fund — every Norwegian a millionaire on paper",
    original: "Established Government Pension Fund Global in 1990 from North Sea oil revenues. Fiscal rule: spend only 3% real return, never principal. Managed by Norges Bank with radical transparency. Norway went from fishing economy to world's highest GDP per capita ($108K).",
    philippineApplication: "Philippines sits on $1T+ in mineral reserves (world's 2nd largest nickel) plus Reed Bank gas (5.4B barrels, $432B value — blocked by China). Malampaya generated $11B but was plagued by corruption. Reform Maharlika Fund: shift from pension capital to resource revenues, Norwegian governance, independent board, fiscal rule, ban domestic investment for 10 years.",
    reforms: ["Shift Maharlika to resource revenues", "Legislate 3% fiscal rule", "Independent board, Senate-confirmed CEO", "Ban domestic equity 10 years", "Radical transparency: publish every holding", "Constitutional principal protection"],
    projection: "At $10B/yr + 7% returns: $138B in 10yr, $410B in 20yr, $945B in 30yr",
    healthFit: "5-10% of annual returns to National Health Endowment funds AI screening nationwide",
    feasibility: "High — Maharlika exists. Amend RA 11954 in first 100 days.",
  },
  {
    model: "Singapore — Strategic Industrial Transformation",
    country: "Singapore",
    color: "border-green-300 bg-green-50/50",
    keyFact: "$500 GDP/capita (1965) → $88,000 (2025)",
    original: "EDB recruited multinationals. Temasek ($382B) and GIC ($770B) invest globally. Teachers from top 1/3 of grads. Ministers paid $1M+ (anti-corruption). 80% in government housing they own.",
    philippineApplication: "Upgrade PEZA to EDB-level. BGC/Clark as Health-Tech SEZs. Station investment officers in 20 countries. Target: health-tech, AI, semiconductors, renewables. Triple Ombudsman budget. Anti-corruption as economic policy.",
    reforms: ["PEZA upgrade to cabinet-level EDB", "5-7 Economic Transformation Zones", "Triple Ombudsman budget", "5 strategic sectors with 10-year tax holidays", "Global investment officer network"],
    projection: "Manufacturing 18% → 28% GDP (+$50B/yr). BPO-to-KPO: $15K → $40K/worker. GDP/capita to $8-10K in 15 years.",
    healthFit: "Philippines as 'Health-Tech Hub of ASEAN.' MyEval.ai as flagship. BPO workforce transitions to health-tech operations.",
    feasibility: "Moderate — requires breaking oligarchic rent-seeking.",
  },
  {
    model: "South Korea — Education-Led Industrial Leap",
    country: "South Korea",
    color: "border-purple-300 bg-purple-50/50",
    keyFact: "$100 GDP/capita (1960) → $35,000 (2025). Poorer than Philippines in 1960.",
    original: "6-8% of GDP in education for decades → PISA #1-3 globally. Government-backed chaebols hit export targets or lost credit. Universal healthcare in 12 years. Life expectancy 83.5.",
    philippineApplication: "Triple education spending (3.5% → 7%). Recruit teachers from top 30%. Create 10 Philippine Institutes of Technology (KAIST model). Conditional conglomerate incentives for export/tech only. Presidential Export Council.",
    reforms: ["Education spending to 6-7% GDP", "Teachers from top 30% at 2x salary", "10 Philippine Tech Institutes", "Export targets for conglomerates", "Universal healthcare via PhilHealth in 12 years"],
    projection: "PISA: 340 → 450+ in 10-15yr. Exports: $75B → $200B. GDP/capita: $7-9K.",
    healthFit: "Digitized PhilHealth backbone. AI fraud detection saves PhP 50-100B/yr. MyEval.ai = health tech infrastructure.",
    feasibility: "Long-term (10-20yr). Requires sustained commitment across administrations.",
  },
  {
    model: "Rwanda — Technology-First Leapfrog",
    country: "Rwanda",
    color: "border-teal-300 bg-teal-50/50",
    keyFact: "Life expectancy: 28 (1994) → 69 (2025). Post-genocide miracle.",
    original: "Community health insurance (91% at $3/person/yr). Zipline drone delivery. Digital government (Irembo). Performance contracts for officials. 4G: 98% coverage.",
    philippineApplication: "Deploy AI screening on 80M+ smartphones instead of building clinics. Equip 97K barangay health workers with AI tools. Barangay health insurance (PhP 100/month). Drone medical delivery for Visayas/Mindanao. Performance contracts for all officials.",
    reforms: ["AI screening through 97K barangay health workers", "Barangay-level health insurance (Mutuelle model)", "Medical supply drones for islands", "Performance contracts for all officials", "Digital-first top 100 government services"],
    projection: "Screen 20-30M in 2 years at $2-3/person. Cut unnecessary referrals 30-40%. Add 2-3 years life expectancy in 15yr.",
    healthFit: "MOST NATURAL FIT. AI health evaluations through community workers = Philippine Mutuelle de Santé. Universal screening without new infrastructure.",
    feasibility: "HIGH — no constitutional change needed. DOH policy + PhilHealth coverage + DICT connectivity. Pilot in 6 months.",
  },
  {
    model: "India — Digital Public Infrastructure (India Stack)",
    country: "India",
    color: "border-orange-300 bg-orange-50/50",
    keyFact: "UPI: $2T+/year. More than Visa + Mastercard combined.",
    original: "Aadhaar (1.4B IDs) + UPI (free payments) + ABHA (health accounts) + Direct Benefit Transfer (saved $27B in leakage). UPI exported to Singapore, UAE.",
    philippineApplication: "Build 'Philippine Stack': PhilSys + free InstaPay + Health Data Exchange + Direct Transfers. Mandate interoperability. Open APIs for all government systems.",
    reforms: ["PhilSys mandatory for all government/banking by 2028", "Free InstaPay P2P transfers (breaks GCash oligopoly)", "Direct transfers through PhilSys accounts", "Philippine Health Data Exchange", "Open APIs for government systems"],
    projection: "Financial inclusion to 95%+. Save PhP 50-100B/yr in leakage. Reduce health admin waste 15-20%.",
    healthFit: "MyEval.ai = health evaluation layer of Philippine Stack. Every PhilSys holder gets health profile. AI evaluations auto-sync. PhilHealth auto-processes via digital wallet. Zero out-of-pocket.",
    feasibility: "Moderate-High — pieces exist. Presidential directive accelerates.",
  },
  {
    model: "Costa Rica — Invest in People Over Arms",
    country: "Costa Rica",
    color: "border-yellow-300 bg-yellow-50/50",
    keyFact: "Abolished military 1948. Life expectancy 81 — higher than USA.",
    original: "Redirected military to education (7.4% GDP) and healthcare (7.6% GDP). Universal CCSS coverage. 97.9% literacy. 98% renewable electricity. Ecotourism $4B/yr.",
    philippineApplication: "20% Peace Dividend: reduce defense $1-1.2B/yr through modernization (AI/drones, not troops). Redirect to health ($500M), teacher salaries ($300M), rural health tech ($200M). Every RHU gets digital tools. Ecotourism expansion to $25B targeting 100+ islands.",
    reforms: ["Military modernization review", "US cost-sharing via EDCA", "Redirect $1B/yr to health and education", "Every RHU with digital health tools", "100-island ecotourism strategy"],
    projection: "Life expectancy: 72 → 77+. Secondary completion: 78% → 95%. Tourism: $13B → $25B.",
    healthFit: "Every peso from military to health tech multiplies through AI scale. MyEval.ai costs pennies/person, replaces thousands of absent doctors.",
    feasibility: "Low for full. Medium for 20%. High for BARMM-specific. Frame as modernization.",
  },
  {
    model: "Estonia — E-Governance Revolution",
    country: "Estonia",
    color: "border-indigo-300 bg-indigo-50/50",
    keyFact: "99% of government services online. 3 minutes per interaction. Saves 2% GDP.",
    original: "X-Road (government data exchange). e-ID (99% usage). e-Residency (100K+ global). i-Voting. Digital health records. 'Once only' principle. Blockchain integrity.",
    philippineApplication: "Philippine X-Road connecting agencies. 'Once only' — end redundant documents. E-Residency for 10.5M OFWs ($500M-1B/yr). Patient portal. All transactions logged = auditable corruption.",
    reforms: ["Philippine X-Road for all agencies", "'Once only' document principle", "E-Residency for 10.5M OFW diaspora", "Unified digital health records", "Blockchain-backed record integrity"],
    projection: "Save 2% GDP ($8-9B/yr). E-residency: $500M-1B/yr. Cut corruption leakage 30-50%.",
    healthFit: "MyEval.ai as health module in X-Road. Evaluations auto-available to PhilHealth, physicians, public health. OFW e-residents access health evaluations across borders.",
    feasibility: "Moderate — needs tech-entrepreneur czar (like India's Nilekani). DICT exists but execution weak.",
  },
  {
    model: "UAE/Dubai — Diversification Hub",
    country: "UAE",
    color: "border-amber-300 bg-amber-50/50",
    keyFact: "Oil dropped from 90% to 30% of GDP. Dubai built $4.4T economy on logistics, tourism, and finance.",
    original: "Dubai launched Emirates (1985), Jebel Ali Free Zone (1985), Dubai Internet City (2000), DIFC (2004). Abu Dhabi created Masdar City and sovereign funds ($1.5T combined). Tourism: 0 visitors (1970) to 17M international tourists (2023). Expo 2020 attracted 24M+ visitors. UAE became world's 3rd-largest re-export hub. Halal economy leadership: $2.3T global Islamic finance assets routed through Dubai. Timeline: 30 years from desert trading post to global hub city. GDP per capita: $2,000 (1970) to $50,000+ (2025).",
    philippineApplication: "Clark-Subic Freeport Zone as 'Philippine Dubai': 60,000 hectares, existing international airport, deep-water port, and former US military infrastructure. Clark already hosts HANA (Hanjin) shipyard site. Create Clark Global Financial Center (CGFC) with separate regulatory regime — English common law courts, 0% corporate tax for 15 years for regional HQs. Position as ASEAN's halal economy hub: 7% of Philippines (8M) are Muslim, natural bridge to $7T global halal market. Target: halal food certification hub ($3T food market), Islamic finance window ($200B ASEAN market), halal pharmaceuticals ($135B global). Establish Philippine Halal Development Authority with OIC observer status. Tourism: develop 100 island resorts modeled on Maldives ($4.7B with 500K tourists vs. Philippines' 7,641 islands). Target: $25-30B tourism by 2040.",
    reforms: ["Clark-Subic Special Economic Charter (separate regulatory regime)", "Philippine Halal Development Authority Act", "Clark Global Financial Center with English common-law commercial courts", "15-year tax holiday for regional HQ relocations", "Islamic finance window at BSP (Bangko Sentral ng Pilipinas)", "Fast-track visa: 48-hour business visa on arrival for 50 countries"],
    projection: "5-year: Clark-Subic FDI reaches $8-10B cumulative; 50+ regional HQs relocate; halal exports reach $2B. 20-year: Clark-Subic becomes $80-100B economic zone; halal economy contribution $15-20B/yr; tourism hits $30B; 500K new high-wage jobs created.",
    healthFit: "Clark Health-Tech SEZ hosts AI health companies with halal-certified digital health products for 2B Muslim consumers globally. MyEval.ai Arabic/Bahasa interface serves Gulf and ASEAN Islamic markets. Halal pharmaceutical R&D hub with AI-driven drug discovery.",
    feasibility: "Moderate-High — Clark-Subic infrastructure exists. Opposition from Manila-centric oligarchs (Ayala, SM) who lose if economic gravity shifts. Military supports (former bases). Muslim Mindanao leadership supports halal strategy. Requires Presidential champion.",
  },
  {
    model: "Israel — Startup Nation (Yozma Program)",
    country: "Israel",
    color: "border-sky-300 bg-sky-50/50",
    keyFact: "Yozma: $100M government seed (1993) catalyzed $8B+ in VC. Most NASDAQ listings outside USA.",
    original: "Israel created Yozma Fund in 1993: government invested $100M into 10 hybrid VC funds, each requiring foreign VC co-investment. Government took 40% stake but gave VCs option to buy out at cost + 7%. Result: foreign VCs rushed in, 10 funds became 60+, VC industry went from near-zero to $8B+. By 2023: $14B annual VC investment, 7,000+ startups, 100+ unicorns. Unit 8200 (military intelligence) created pipeline of elite engineers — 5,000/year trained in cybersecurity, AI, signals intelligence. R&D spending: 5.4% of GDP (#1 globally). Binational programs (BIRD Foundation with USA) leveraged $1B+ in joint R&D.",
    philippineApplication: "Philippine Innovation Fund (PIF): $200M government capital, structured as 10 funds of $20M each. Each fund must attract $40-80M from foreign VCs (Sequoia, SoftBank, etc.) — government takes 30% carried interest with buyout option. Total catalyzed: $600M-1B in 5 years. BPO workforce (1.7M) is the Philippines' 'Unit 8200' — English-speaking, tech-literate, process-disciplined. Create 'BPO-to-Startup Pipeline': top 5% of BPO workers (85K people) get coding bootcamps, AI training, startup incubation. DOST-PCIEERD becomes Philippine BIRD Foundation: $50M/yr in bilateral tech programs with US, Japan, Korea, Israel. Target sectors: health-tech (MyEval.ai as anchor), fintech (remittance disruption), agri-tech (rice/coconut), climate-tech (typhoon resilience).",
    reforms: ["Philippine Innovation Fund Act ($200M, Yozma structure)", "BPO-to-Startup Pipeline Program (TESDA + DTI)", "R&D tax credit: 300% deduction (current: 0% effective)", "DOST bilateral tech fund: $50M/yr", "Startup visa for foreign founders (1,000/yr)", "IP fast-track: patents in 6 months (current: 5-7 years)"],
    projection: "5-year: 500+ funded startups, 10-15 with $10M+ valuations, $2-3B total VC ecosystem, 50K new tech jobs. 20-year: 3,000+ tech companies, 20-30 unicorns, $30-50B tech sector contribution to GDP, Philippines becomes ASEAN's #2 startup ecosystem after Singapore.",
    healthFit: "Health-tech as the anchor vertical — MyEval.ai as flagship example proving Philippine health-tech can scale globally. PIF dedicates 2 of 10 funds ($40M) to health-tech. Target: 50 health-tech startups in 5 years, AI diagnostics exportable to all ASEAN + Africa.",
    feasibility: "High — requires only $200M (0.05% of GDP). DTI and DOST already have mandates. Opposition: none significant (net new capital). Risk: execution quality of fund managers. Mitigant: require foreign VC co-management.",
  },
  {
    model: "Chile — Pension-Driven Capital Markets (AFP System)",
    country: "Chile",
    color: "border-rose-300 bg-rose-50/50",
    keyFact: "AFP pension system accumulated $200B+ (80% of GDP) — created Latin America's deepest capital market.",
    original: "Chile privatized pensions in 1981 under Jose Pinera. Workers contribute 10% of salary to individual accounts managed by AFPs (Administradoras de Fondos de Pensiones). Results: $200B+ accumulated (from $0.5B in 1981), Santiago stock exchange became Latin America's most liquid, corporate bond market deepened to 25% of GDP. Domestic savings rate: 23% (vs. 12% regional average). BUT: replacement rates only 30-40% for many workers, gender gap (women get 20% less), high fees (1.5% AUM initially, now 0.6%). Lesson: the capital accumulation worked; the adequacy didn't. Chile added Solidarity Pillar in 2008 ($500/month minimum) to fix adequacy.",
    philippineApplication: "Philippine SSS has $42B AUM, GSIS has $6B — combined $48B, but 75% in government securities (dead capital). Reform: diversify 40% ($19B) into equities, infrastructure bonds, and private credit over 10 years. Create 'Personal Retirement Account' (PRA) layer: voluntary 5% contribution with 3% employer match for formal sector (12M workers). At $150/month average contribution + 8% returns = $120B in 15 years. Total pension AUM: $48B today to $200B+ in 15 years. Use accumulated capital for: Philippine infrastructure bonds ($30B for rail, ports, energy), SME credit fund ($10B), housing finance ($15B). Establish Philippine Pension Supervisory Authority (PPSA) — independent, not under SSS/GSIS.",
    reforms: ["SSS/GSIS portfolio diversification mandate (40% non-government)", "Personal Retirement Account Act (voluntary DC layer)", "Philippine Pension Supervisory Authority (independent regulator)", "Infrastructure bond framework (pension-eligible, government-guaranteed)", "Fee cap: 0.5% AUM for all pension administrators", "Gender equity: credited contributions for maternity/caregiving years"],
    projection: "5-year: pension AUM grows from $48B to $80B; PSE market cap deepens 30%; infrastructure bonds fund 3 major rail projects ($15B). 20-year: pension AUM reaches $200-250B; domestic savings rate rises from 9% to 18%; Philippine capital markets reach investment-grade depth; corporate bond market triples.",
    healthFit: "Pension health accounts: $500/year health spending account within PRA funds preventive AI screenings. MyEval.ai evaluations become standard annual benefit for all PRA holders. Pension funds invest $2-3B in health infrastructure (hospitals, diagnostic centers, telemedicine). Health-tech companies access pension capital via Philippine Infrastructure Bond framework.",
    feasibility: "Moderate — SSS/GSIS institutional resistance to losing monopoly. Labor groups suspicious of 'privatization' (Chile's negative legacy). Mitigant: frame as supplementary, not replacement. Keep SSS/GSIS defined benefit intact, add voluntary DC layer on top. Employer groups (ECOP, PCCI) support. BSP supports deeper capital markets.",
  },
  {
    model: "Vietnam — FDI Magnet Strategy",
    country: "Vietnam",
    color: "border-red-300 bg-red-50/50",
    keyFact: "FDI: $22B/yr (2023) vs. Philippines $10B. Samsung alone invested $20B in Vietnam.",
    original: "Vietnam passed Unified Investment Law (2020) — one law, one agency, one process. Power costs: $0.07/kWh (Philippines: $0.16-0.21). FTA strategy: 16 FTAs including CPTPP and EU-Vietnam FTA (0% tariffs on 99% of goods to EU). Samsung Vietnam: $20B invested, 160K employees, $65B exports (25% of Vietnam's total). Special economic zones with dedicated infrastructure (Bac Ninh, Thai Nguyen for electronics). Investment certificate: 15 days (Philippines: 3-6 months). Land: 50-year renewable leases with clear title. Workforce: 500K engineers/yr from universities (3x Philippines). Result: manufacturing went from 13% to 25% of GDP in 15 years. Exports: $3B (1995) to $371B (2023).",
    philippineApplication: "5 things Philippines must do immediately: (1) Unified Investment Code — merge BOI, PEZA, BCDA, PPPC into single Philippine Investment Authority (PIA). One application, 15-day approval. (2) Power cost reform — fast-track renewable energy to cut industrial power from $0.18 to $0.10/kWh by 2030. Nuclear SMRs for Luzon baseload. (3) FTA offensive — join CPTPP (applied 2024), complete EU-PH FTA, bilateral with US (CHIPS Act supply chain). (4) Land reform for industry — create 20 'Ready-Built Factory Zones' with pre-cleared titles, pre-built facilities, and plug-and-play utilities (Vietnam's model). (5) Engineer pipeline — CHED mandate: double engineering graduates from 50K to 100K/yr; STEM scholarship fund $200M/yr.",
    reforms: ["Philippine Investment Authority Act (merge BOI+PEZA+BCDA+PPPC)", "Renewable Energy Acceleration Act (target: $0.10/kWh by 2030)", "CPTPP ratification + EU-PH FTA fast-track", "Ready-Built Factory Zone program (20 zones, pre-cleared land)", "STEM Education Acceleration ($200M/yr scholarship fund)", "15-day investment certificate guarantee (or auto-approved)"],
    projection: "5-year: FDI doubles from $10B to $20B/yr; 5 major semiconductor/electronics firms relocate supply chains from China; manufacturing rises from 18% to 22% of GDP; 300K new factory jobs. 20-year: FDI reaches $35-40B/yr; manufacturing hits 28% of GDP (+$80B/yr); exports triple to $225B; Philippines becomes ASEAN's #3 manufacturing hub after Vietnam and Thailand.",
    healthFit: "FDI strategy specifically targets health-tech manufacturing: medical devices ($8B global market growing 8%/yr), pharmaceutical ingredients ($180B API market), AI diagnostic hardware. MyEval.ai hardware (screening devices, IoT sensors) manufactured in Philippine SEZs for export to ASEAN. Samsung/LG health-tech divisions targeted for Philippine investment.",
    feasibility: "Moderate — PEZA and BOI bureaucracies resist merger (turf war). Oligarch-owned power companies (Meralco/Aboitiz) resist rate cuts. FTA ratification faces Senate protectionist bloc. BUT: CREATE Act (2022) and Amendments to PSA/FIA show reform momentum. Presidential EO can mandate 15-day approvals immediately. Power reform is the hardest piece — requires breaking the distribution monopoly.",
  },
  {
    model: "Taiwan TSMC — National Champion Strategy",
    country: "Taiwan",
    color: "border-cyan-300 bg-cyan-50/50",
    keyFact: "Government bet $1B on one company (1987). TSMC is now worth $700B+ and makes 90% of world's advanced chips.",
    original: "Taiwan's Industrial Technology Research Institute (ITRI) recruited Morris Chang from Texas Instruments. Government invested $1B (48% stake) in TSMC (1987). Created Hsinchu Science Park: subsidized land, tax holidays, shared R&D facilities. Government funded the first chip fabrication lines. Protected domestic market while demanding global competitiveness. TSMC revenue: $0 (1987) to $87B (2024). Taiwan semiconductor industry: $160B+ revenue, 300K+ jobs. Entire country's foreign policy leverage now rests on 'silicon shield.' Key lesson: pick ONE industry with massive global demand, bet disproportionately, and build world-class infrastructure around it.",
    philippineApplication: "The Philippines' TSMC equivalent: AI-Enabled Global Health Services. The country already has: 1.7M BPO workers (English, tech-literate), 500K+ nurses trained, 75K physicians, and the world's largest health worker diaspora. Create the Philippine Health Technology Corporation (PHTC) — a government-backed national champion. Government invests $1B over 5 years (Maharlika Fund stake). PHTC mandate: build the world's leading AI health services platform. Components: (a) AI diagnostic engine (MyEval.ai-class technology), (b) global telemedicine platform staffed by Filipino health workers, (c) health data analytics exportable to 50+ countries, (d) clinical trial services for pharma ($80B global market). Locate PHTC HQ at UP-BGC Health Technology Park. Government builds shared AI compute infrastructure (100 petaflops by 2030). Create Philippine Health Technology Research Institute (PHTRI) — equivalent of ITRI — with $200M/yr budget.",
    reforms: ["Philippine Health Technology Corporation Act ($1B Maharlika investment)", "Philippine Health Technology Research Institute ($200M/yr)", "Health-Tech Science Park in BGC/UP campus", "National AI compute infrastructure (100 petaflops)", "FDA fast-track for AI diagnostics (90-day approval vs. 2 years)", "Health data portability law enabling anonymized dataset exports"],
    projection: "5-year: PHTC platform operational in 10 countries; 50K health-tech jobs created; $3-5B in health services exports; 20 AI diagnostic products approved. 20-year: Philippine health-tech industry reaches $50-80B/yr; PHTC becomes $30-50B enterprise; 500K health-tech workers; Philippines becomes the 'TSMC of health' — the world depends on Filipino AI health infrastructure the way it depends on Taiwanese chips.",
    healthFit: "THIS IS THE HEALTH MODEL. MyEval.ai is the proof of concept; PHTC is the scaled national version. Every Filipino gets free AI health evaluations (cost: $2-3/person/yr from PHTC profits). Technology exported to 100+ countries. Filipino nurses and doctors become the highest-paid health-tech workforce in ASEAN. Health becomes the Philippines' 'silicon shield' — too critical for the world to ignore.",
    feasibility: "Moderate — requires $1B commitment (large but achievable via Maharlika). Medical establishment (PMA) may resist AI diagnostics. Pharma lobby may resist disruption. BUT: BPO industry proves Philippines can build $30B+ service export industries. Health worker diaspora provides instant global network. Presidential legacy project potential is enormous. Key risk: sustained commitment across 2-3 administrations.",
  },
  {
    model: "Germany Mittelstand — SME Backbone Economy",
    country: "Germany",
    color: "border-stone-300 bg-stone-50/50",
    keyFact: "3.5M SMEs employ 60% of workers and generate 52% of GDP. 1,500+ 'hidden champions' lead global niches.",
    original: "Germany's Mittelstand: 3.5M small and medium enterprises, many family-owned for 3-5 generations. Supported by KfW (state development bank, $600B balance sheet) providing below-market loans. Dual apprenticeship system: 1.3M apprentices/yr split time between classroom and factory — 70% get hired. Fraunhofer Institutes: 76 applied research centers ($3.4B budget) bridge university research to SME products. Sparkassen (savings banks): 370 public savings banks focused exclusively on local SME lending. Result: Germany is world's 3rd-largest exporter despite high wages. 'Hidden champions': 1,500+ companies that are #1 or #2 globally in niche markets (e.g., Herrenknecht in tunnel boring, Trumpf in laser cutting).",
    philippineApplication: "Philippines has 1.1M registered businesses: 99.5% are micro (under 10 employees), 0.4% small, 0.1% medium — the 'missing middle.' Philippine KfW equivalent: 'Bangko ng Bayan' (People's Development Bank) — capitalize at $5B (Maharlika + multilateral), mandate: exclusively SME lending at 4-6% (current SME rates: 12-24%). Target: 50K SMEs scaled from micro to small/medium in 10 years. Philippine Dual Apprenticeship: expand TESDA partnership with private sector. Companies get tax credit for each apprentice (PhP 100K/yr). Target: 500K apprentices/yr by 2030 (current: 50K). Philippine Fraunhofer: convert 5 DOST Regional Standards and Testing Labs into Applied Technology Centers — $50M/yr combined budget, co-located with industry clusters (food processing in Cebu, electronics in Laguna, furniture in Pampanga, coconut in Zamboanga, aquaculture in General Santos).",
    reforms: ["Bangko ng Bayan Development Bank Act ($5B capitalization)", "Dual Apprenticeship Expansion Act (500K/yr target, tax credits)", "5 Applied Technology Centers (Philippine Fraunhofer, $50M/yr)", "SME Lending Mandate: 15% of all bank portfolios (current: 8%)", "Cooperative strengthening: amend RA 9520 for modern structures", "IP protection for SME innovations (simplified, subsidized patents)"],
    projection: "5-year: 10K micro-enterprises graduate to small; SME share of GDP rises from 36% to 40%; 200K new formal jobs; SME exports reach $5B. 20-year: 50K+ medium enterprises (10x current); SME GDP share reaches 50%; 2M new formal-sector jobs; 100+ Philippine 'hidden champions' in global niches (health-tech, coconut products, marine equipment, tropical agriculture, BPO tools).",
    healthFit: "Health SME ecosystem: 500+ small health-tech companies building on MyEval.ai platform (apps, devices, local services). Bangko ng Bayan provides health-tech SME loans at 4%. Applied Technology Centers develop localized health solutions (tropical disease diagnostics, herbal medicine validation, community health management tools). Dual apprenticeship for health-tech: medical device technicians, AI data labelers, telemedicine operators.",
    feasibility: "High for components, Moderate for development bank. TESDA apprenticeship expansion is straightforward. Applied Technology Centers build on existing DOST infrastructure. Development bank faces opposition from commercial banks (BDO, BPI, Metrobank) protecting SME lending margins. SB Corporation exists but is undercapitalized ($200M). Mitigant: frame as complementary, not competitive — Bangko ng Bayan takes risk commercial banks won't.",
  },
  {
    model: "Bangladesh — Garment-to-Tech Leap (Next Philippine Transition)",
    country: "Bangladesh",
    color: "border-emerald-300 bg-emerald-50/50",
    keyFact: "Bangladesh: garments ($55B) funded tech leap. Philippines: BPO ($38B) must fund the NEXT leap.",
    original: "Bangladesh built $55B garment industry (1980s-2020s) employing 4M workers, then used that base to grow IT services ($2B, targeting $5B by 2025), mobile finance (bKash: 66M users), and pharmaceutical exports ($200M). Key insight: low-cost service/manufacturing creates capital, skills, and global networks for the NEXT industry. China did this (textiles to electronics to AI). India did this (IT outsourcing to SaaS products to deep-tech). The pattern: labor arbitrage → process mastery → product creation → innovation economy. Each stage takes 10-15 years.",
    philippineApplication: "Philippines is at Stage 2 (process mastery via BPO). The next 3 leaps: LEAP 1 — AI Services Export Hub ($50B opportunity): BPO companies transition from human-only to AI-augmented services. Filipino workers become AI trainers, prompt engineers, AI quality controllers. Revenue per worker: $15K → $50K. Philippines becomes the world's 'AI operations center' — the human-in-the-loop for global AI deployment. LEAP 2 — Global Health Services Hub ($20-30B): 500K nurses + AI = world's telemedicine workforce. AI-enabled diagnostics exported globally. Clinical trial management for Big Pharma. Health data analytics as a service. LEAP 3 — Creative Economy ($15-20B): Filipino animation ($300M → $3B), game development ($200M → $2B), music/content ($500M → $5B), architectural/engineering services ($1B → $5B). Cultural exports (K-pop model applied to P-pop, Filipino cuisine, wellness tourism).",
    reforms: ["AI Services Transition Fund ($500M for BPO workforce reskilling)", "Global Health Services Export Authority", "Creative Economy Development Act ($200M/yr)", "Digital nomad visa + creative visa programs", "Reclassify AI services as 'advanced services' for higher-tier PEZA incentives", "'Next Leap' Industrial Roadmap with 5-year milestones"],
    projection: "5-year: AI services reach $8-10B (from BPO base); health services exports hit $5B; creative economy reaches $3B; total 'next economy' = $16-18B new GDP. 20-year: AI services $50B, health services $25B, creative economy $20B = $95B in new high-value exports. Average worker income in these sectors: $25-40K (vs. $6K today). Philippines transitions from low-cost labor to high-value knowledge economy.",
    healthFit: "Health services is one of the three core leaps. MyEval.ai represents the exact model: AI + Filipino health expertise = globally exportable product. The BPO-to-health-tech pipeline: train 100K BPO workers as health AI operators (data labeling, quality assurance, patient coordination). Filipino nurses abroad ($5B remittances) become telemedicine providers on Philippine platforms, earning 2-3x while working from home.",
    feasibility: "High — builds on existing $38B BPO industry. IBPAP (industry association) already planning AI transition. No legislative opposition — net additive to economy. Key risk: speed of execution vs. AI replacing BPO jobs faster than reskilling occurs. Requires $500M transition fund in next 2 years. DepEd + CHED + TESDA alignment on STEM pipeline. Private sector (Accenture, Concentrix, Teleperformance Philippine operations) must co-invest.",
  },
  {
    model: "New Zealand — Wellbeing Budget Framework",
    country: "New Zealand",
    color: "border-lime-300 bg-lime-50/50",
    keyFact: "First country to allocate national budget by wellbeing outcomes (2019), not just GDP growth.",
    original: "New Zealand's Living Standards Framework (2019): Treasury evaluates ALL budget proposals against 12 wellbeing domains (health, environment, social connections, etc.). Budget 2019 allocated NZ$3.6B to: mental health ($1.9B), child poverty ($1B), and family violence ($320M) — areas invisible in GDP accounting. Treasury developed 'Wellbeing Indicators Dashboard' with 58 indicators. Result: child poverty dropped 4 percentage points, mental health access improved 40%, environmental spending doubled. Other adopters: Scotland, Iceland, Wales, Finland (Wellbeing Economy Governments alliance). Key insight: what you measure is what you fund. GDP misses unpaid labor ($200B for NZ), environmental degradation, inequality, and social cohesion.",
    philippineApplication: "12 Philippine Wellbeing Indicators — beyond GDP: (1) Family Unity Index: measures OFW family separation impact — 10.5M overseas, 9M children affected. (2) Health Access Score: % who can reach a doctor within 30 minutes (current: 40% in provinces). (3) Education Quality: learning outcomes, not enrollment. (4) Housing Security: % in permanent structures with clean water. (5) Digital Inclusion: meaningful internet access (not just coverage). (6) Environmental Resilience: typhoon/flood preparedness score per municipality. (7) Food Security: stunting rate (current: 26.7% — among ASEAN's worst). (8) Economic Participation: formal employment rate (current: only 35% formal). (9) Safety Index: perception of safety by barangay. (10) Cultural Vitality: indigenous language preservation, cultural participation. (11) Democratic Quality: governance satisfaction, corruption perception. (12) Future Readiness: STEM literacy, innovation capacity. 'Family Unity Index' is the breakthrough metric: current GDP counts $37B in remittances as positive, but ignores $50-100B in social costs (family breakdown, child development gaps, mental health). A Wellbeing Budget would redirect $5-10B/yr toward policies that reduce forced migration: domestic job creation, rural health infrastructure, provincial broadband.",
    reforms: ["Philippine Wellbeing Budget Act (require all DBM proposals scored on 12 indicators)", "Family Unity Index as official national statistic (PSA mandate)", "OFW Social Cost Assessment for all labor export policies", "Provincial Wellbeing Dashboard (real-time, public)", "Redirect 10% of budget ($5B/yr) to worst-performing wellbeing indicators", "Wellbeing Impact Assessment for all major legislation"],
    projection: "5-year: Family Unity Index becomes national conversation — first government to officially acknowledge OFW social costs; 3 budget cycles using wellbeing framework redirect $15B cumulative to health, education, provincial development; stunting rate drops from 26.7% to 20%. 20-year: Philippines becomes global model for 'development with dignity'; OFW numbers decline from 10.5M to 6M as domestic opportunities grow; Family Unity Index improves 40%; child development outcomes reach ASEAN average; the Philippines is recognized not just for GDP growth but for being one of the best places in Asia to raise a family.",
    healthFit: "Health Access Score is one of 12 core indicators — guarantees sustained health investment regardless of administration. MyEval.ai provides real-time data for 3 indicators: Health Access (who gets screened), Future Readiness (health literacy), and Family Unity (OFW family health monitoring across borders). AI evaluations generate the DATA that makes wellbeing budgeting possible — you can't manage what you can't measure. MyEval.ai becomes the measurement infrastructure for Philippine wellbeing.",
    feasibility: "High — requires no constitutional change. DBM circular can mandate wellbeing scoring in next budget cycle. PSA already tracks most underlying data. Opposition: minimal (no one opposes 'measuring wellbeing'). Real risk: bureaucratic compliance without substance — agencies game indicators. Mitigant: public dashboard with real-time data; civil society watchdog funding ($50M/yr). NEDA already uses expanded metrics; this formalizes the practice.",
  },
];

export default function TransformationModelsPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge className="text-xs bg-violet-100 text-violet-700 border-violet-300 mb-3">STRATEGIC POLICY FRAMEWORKS</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Global Transformation Models</h1>
        <p className="text-muted-foreground mt-2">
          Fifteen proven national transformation models — each adapted with specific reforms, projected impact, and health technology integration for the Philippines.
        </p>
      </div>

      <Card className="border-blue-200 bg-blue-50/50">
        <CardContent className="p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Every model below was implemented by a country that started with fewer advantages than the Philippines.</span> Norway was a fishing nation. Singapore was a port. Korea was poorer than the Philippines in 1960. Rwanda survived genocide. Dubai was empty desert. Israel had 4 million people. Vietnam was post-war rubble. The Philippines has 117M English speakers, $1T in minerals, $37B in remittances, a $38B BPO industry, 500K trained nurses, and Asia&apos;s youngest workforce. The gap is institutional, not fundamental.
          </p>
        </CardContent>
      </Card>

      <Separator />

      {models.map((m) => (
        <Card key={m.model} className={m.color}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              <span>{m.model}</span>
              <Badge variant="outline" className="text-xs font-mono">{m.country}</Badge>
            </CardTitle>
            <p className="text-sm font-medium text-primary">{m.keyFact}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">The Model</h4>
              <p className="text-sm text-muted-foreground">{m.original}</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4 border">
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-1 text-primary">Philippine Application</h4>
              <p className="text-sm text-muted-foreground">{m.philippineApplication}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Required Reforms</h4>
              <div className="grid grid-cols-2 gap-1">
                {m.reforms.map((r) => (
                  <p key={r} className="text-xs text-muted-foreground flex items-start gap-1 bg-white/50 rounded p-1.5 border">
                    <Scale className="h-3 w-3 mt-0.5 shrink-0 text-primary" />{r}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <h4 className="text-xs font-semibold text-green-700 mb-1">Projection</h4>
                <p className="text-xs text-muted-foreground">{m.projection}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <h4 className="text-xs font-semibold text-blue-700 mb-1">Health-Tech Fit</h4>
                <p className="text-xs text-muted-foreground">{m.healthFit}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <h4 className="text-xs font-semibold text-purple-700 mb-1">Feasibility</h4>
                <p className="text-xs text-muted-foreground">{m.feasibility}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Combined Impact */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-bold text-lg">Combined 20-Year Impact — All 15 Models</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
            {[
              { metric: "GDP/Capita", from: "$3,900", to: "$12,000-18,000" },
              { metric: "SWF Value", from: "$2.25B", to: "$200-400B" },
              { metric: "Life Expectancy", from: "72 years", to: "78-81" },
              { metric: "PISA Scores", from: "~340", to: "450+" },
              { metric: "Poverty Rate", from: "18%", to: "3-6%" },
              { metric: "FDI Inflows", from: "$10B/yr", to: "$35-40B/yr" },
              { metric: "Pension AUM", from: "$48B", to: "$200-250B" },
              { metric: "Tech Startups", from: "~500", to: "3,000+" },
              { metric: "Health-Tech Exports", from: "$0.2B", to: "$50-80B" },
              { metric: "OFWs Abroad", from: "10.5M", to: "6M (by choice)" },
            ].map((m) => (
              <div key={m.metric} className="bg-white rounded-lg p-3 border">
                <p className="text-xs text-muted-foreground">{m.metric}</p>
                <p className="text-sm font-mono text-red-600">{m.from}</p>
                <p className="text-xs text-muted-foreground">→</p>
                <p className="text-lg font-mono font-bold text-green-700">{m.to}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            These projections assume implementation of at least 10 of 15 models with sustained political commitment across 3-4 administrations. Historical precedent: South Korea, Singapore, and Vietnam each achieved comparable transformations within 20-30 years.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
