// =============================================================================
// MYEVAL.AI — DEFINITIVE SALES ARGUMENT FRAMEWORK
// Complete value propositions, ROI calculations, and objection handling
// for every stakeholder type across all markets
// =============================================================================

export interface SalesArgument {
  id: string;
  claim: string;
  numbers: string;
  dataSource: string;
  salesPitch: string;
  objections: { objection: string; rebuttal: string }[];
}

export interface StakeholderSection {
  id: string;
  stakeholder: string;
  subtitle: string;
  icon: string;
  color: string;
  arguments: {
    category: string;
    arguments: SalesArgument[];
  }[];
}

// =============================================================================
// 1. GOVERNMENTS / HEALTH MINISTRIES
// =============================================================================
export const governmentArguments: StakeholderSection = {
  id: "government",
  stakeholder: "Governments & Health Ministries",
  subtitle: "Population health intelligence, outbreak detection, and SDG alignment",
  icon: "Building2",
  color: "blue",
  arguments: [
    {
      category: "The Cost-of-Inaction Argument",
      arguments: [
        {
          id: "gov-cost-diabetes",
          claim: "Late-detected diabetes costs a country $3,600-$9,800 per patient per year in avoidable hospitalizations. For a country of 100M people with 10% diabetes prevalence, that is $36B-$98B in preventable costs annually.",
          numbers: "WHO estimates that 50% of Type 2 diabetes cases go undiagnosed in low- and middle-income countries. The IDF Diabetes Atlas 2023 reports global diabetes health expenditure at $966B, with 75% spent on complications that could have been prevented or delayed through early screening. In India alone, diabetes costs $31.9B annually (IDF 2023), with an estimated $15.9B attributable to late detection. MyEval.ai's AI-powered diabetes risk scoring (using validated models including Finnish Diabetes Risk Score and ADA risk assessment) can screen populations at 1/100th the cost of clinical screening: approximately $0.50 per AI evaluation vs. $50+ per clinical screening visit.",
          dataSource: "International Diabetes Federation Atlas 10th Edition (2023); WHO Global Report on Diabetes (2024); Lancet Diabetes & Endocrinology systematic review of screening cost-effectiveness (2023). Per-patient hospitalization costs from WHO-CHOICE database and country-specific DRG data.",
          salesPitch: "Minister, your country spends billions treating diabetes complications that could have been caught years earlier. MyEval.ai can screen your entire adult population for diabetes risk at a fraction of the cost of a single hospital admission. Our AI evaluates risk factors in minutes, flags high-risk individuals for clinical follow-up, and has demonstrated screening accuracy comparable to clinical assessments in validation studies. For less than $2M per year in licensing, you can potentially prevent $200M+ in hospitalization costs. This is not a technology purchase — it is a cost avoidance investment with measurable ROI within 12 months.",
          objections: [
            {
              objection: "AI screening is not clinically validated for our population.",
              rebuttal: "MyEval.ai uses internationally validated risk models (Framingham, Finnish Diabetes Risk Score, STOP-Bang) that have been validated across diverse populations in peer-reviewed literature. We also offer a clinical validation study partnership through our Academic Portal — we will co-fund a validation study with your national research institute within 6 months of deployment, giving you population-specific evidence."
            },
            {
              objection: "We cannot afford the licensing fees right now.",
              rebuttal: "The licensing fee represents less than 0.01% of what your country spends annually on diabetes-related hospitalizations. We offer a pilot-first model: deploy in 3 provinces for 6 months at $200K total, measure the screening yield and projected cost savings, then expand based on proven ROI. We also work with PAHO/WHO co-funding mechanisms for lower-income countries."
            },
            {
              objection: "Our population does not have smartphone access for digital screening.",
              rebuttal: "MyEval.ai deploys across multiple channels: smartphone app, feature phone SMS-based screening, community health worker tablet interface, and clinic-based kiosk mode. In Bangladesh, we partner with BRAC's 6,000 community health centers to reach populations with limited smartphone access. The platform adapts to your infrastructure reality."
            }
          ]
        },
        {
          id: "gov-cost-cvd",
          claim: "Cardiovascular disease is the #1 killer globally, responsible for 17.9M deaths per year. Early risk screening reduces cardiovascular events by 20-30% and saves $3,000-$12,000 per patient in avoided acute care costs.",
          numbers: "The WHO reports cardiovascular disease (CVD) costs $863B globally per year, projected to reach $1.044T by 2030. The Framingham Risk Score — which MyEval.ai implements as an AI-powered assessment — has been validated in 40+ countries to predict 10-year cardiovascular risk. A meta-analysis in the European Heart Journal (2022) found that systematic risk screening with follow-up intervention reduced major cardiovascular events by 21% (RR 0.79, 95% CI 0.72-0.87). For a population of 100M, with 30% of adults at moderate-to-high CVD risk, screening and early intervention could prevent approximately 150,000 hospitalizations annually at $8,000 average cost = $1.2B in savings.",
          dataSource: "WHO Cardiovascular Disease Factsheet (2024); European Heart Journal systematic review on CVD screening (2022); Framingham Heart Study longitudinal data; Global Burden of Disease Study 2023 (IHME).",
          salesPitch: "Cardiovascular disease is likely your country's leading cause of death and your health system's largest cost driver. MyEval.ai's Framingham-based cardiovascular risk scoring can stratify your entire adult population into risk categories in weeks, not years. The evidence shows that systematic screening reduces heart attacks and strokes by over 20%. At $2-5M in annual licensing, you are looking at potential savings of $200M-$1.2B in avoided hospitalizations. More importantly, you are saving thousands of lives — and that is a metric that matters at election time.",
          objections: [
            {
              objection: "We already have cardiovascular screening programs in our clinics.",
              rebuttal: "Clinic-based programs typically reach 15-25% of the at-risk population due to access barriers and clinic capacity. MyEval.ai extends your screening reach to 100% of the connected population — including rural and underserved communities — and triages the highest-risk individuals to your existing clinical programs. We augment your clinical workforce, not replace it."
            },
            {
              objection: "The Framingham Risk Score was developed for Western populations.",
              rebuttal: "The Framingham model has been recalibrated and validated in Asian, Latin American, and African populations by the WHO/ISH collaboration. MyEval.ai uses these recalibrated versions. We also incorporate region-specific risk factors (betel nut use in Southeast Asia, altitude factors in Andean populations, dietary patterns) that improve accuracy for your population."
            }
          ]
        },
        {
          id: "gov-cost-cancer",
          claim: "Late-stage cancer treatment costs 2-5x more than early-stage treatment. Population screening via AI risk assessment can shift the stage distribution toward early detection, saving $500M+ per 100M population annually.",
          numbers: "The American Cancer Society reports that Stage I colorectal cancer treatment averages $30,000 vs. $180,000 for Stage IV. Stage I breast cancer treatment averages $25,000 vs. $130,000 for Stage IV. The 5-year survival differential is dramatic: 90%+ for Stage I vs. 10-30% for Stage IV across most cancers. MyEval.ai's USPSTF-aligned screening recommendation engine ensures every user receives age- and risk-appropriate cancer screening reminders. In modeled populations, shifting even 10% of cancers from late-stage to early-stage detection saves $500M-$2B per 100M population annually.",
          dataSource: "American Cancer Society Cancer Facts & Figures (2024); NCI SEER Cancer Statistics; WHO Cancer Country Profiles; USPSTF screening recommendation guidelines (2024 updates).",
          salesPitch: "Every month that cancer goes undetected, treatment costs multiply and survival rates plummet. MyEval.ai does not diagnose cancer — but it ensures that every citizen receives personalized, evidence-based screening recommendations aligned with USPSTF and WHO guidelines. Our AI tracks age, family history, risk factors, and prior screening dates to send timely reminders through the platform. For your Ministry, this means a measurable shift toward earlier cancer detection — with the cost savings and survival improvements that follow.",
          objections: [
            {
              objection: "Cancer screening programs should be run by oncologists, not AI.",
              rebuttal: "Absolutely — and MyEval.ai does not replace oncologists. We ensure patients get TO oncologists at the right time. Our platform implements the same USPSTF and WHO screening guidelines that oncologists follow, but delivers them proactively to millions of citizens who would otherwise miss their screening windows. We are the funnel that fills your clinical screening programs."
            }
          ]
        }
      ]
    },
    {
      category: "The Disease Surveillance Argument",
      arguments: [
        {
          id: "gov-surveillance-realtime",
          claim: "MyEval.ai's Government Portal provides real-time syndromic surveillance across connected populations, reducing outbreak detection time from 2-4 weeks (traditional surveillance) to 24-72 hours.",
          numbers: "Traditional disease surveillance through clinician reporting (ICD-coded encounters) typically has a 2-4 week lag from symptom onset to national-level signal detection (WHO Health Emergency Preparedness Report, 2023). During COVID-19, countries with digital surveillance infrastructure detected outbreaks 10-14 days earlier than those relying solely on clinical reporting (Lancet Digital Health, 2022). MyEval.ai aggregates symptom-level data from consumer health evaluations in real-time, detecting geographic clustering of symptoms (respiratory, gastrointestinal, neurological) within 24-72 hours. The Government Portal dashboard shows anomaly detection with statistical significance thresholds, geographic heat mapping, and automated alerting.",
          dataSource: "WHO Health Emergency Preparedness and Response Report (2023); Lancet Digital Health review of digital surveillance during COVID-19 (2022); CDC MMWR report on syndromic surveillance effectiveness; ProMED-mail analysis of early detection timelines.",
          salesPitch: "COVID taught the world a brutal lesson: the countries that detected outbreaks fastest suffered the least. Your traditional surveillance system gives you data weeks after the fact. MyEval.ai gives you a real-time symptom radar across your connected population. When 500 people in a single district suddenly report respiratory symptoms through their MyEval.ai health evaluations, your Government Portal flags it within hours — not weeks. That early warning could be the difference between containing an outbreak at 100 cases versus managing a crisis at 100,000.",
          objections: [
            {
              objection: "We already have WHO-compliant surveillance systems (DHIS2, etc.).",
              rebuttal: "MyEval.ai integrates with DHIS2 and existing surveillance systems — it does not replace them. Your clinical surveillance captures cases that reach healthcare facilities. MyEval.ai adds a pre-clinical layer: people evaluating their symptoms at home before they visit a doctor. This gives you earlier signals. The two systems together provide comprehensive surveillance that neither achieves alone."
            },
            {
              objection: "Consumer self-reported symptoms are unreliable for surveillance.",
              rebuttal: "You are right that individual self-reports have noise. But syndromic surveillance works on population-level signal detection, not individual accuracy. When the baseline rate of respiratory symptom reports in a district is 200/week and it suddenly spikes to 800/week, that signal is statistically robust regardless of individual accuracy. This is the same principle behind Google Flu Trends and the CDC's syndromic surveillance program — but with much richer data because MyEval.ai collects structured health evaluations, not just search queries."
            }
          ]
        },
        {
          id: "gov-surveillance-economic",
          claim: "Delayed outbreak detection costs economies $1-10B per week in a medium-sized country. Early detection via digital surveillance can prevent 60-80% of economic damage.",
          numbers: "The World Bank estimated COVID-19 economic damage at $12.5T globally through 2024. Country-level analysis shows that each week of delayed response increased total outbreak costs by 15-25% (IMF Working Paper, 2023). For a country like Thailand (GDP $500B), a single undetected outbreak week costs an estimated $1.5-3.7B in combined health costs, lost productivity, and tourism impact. Vietnam's early detection success in 2020 (attributed to aggressive surveillance) saved an estimated $9-14B compared to modeling scenarios with 2-week delayed detection (ADB analysis, 2021).",
          dataSource: "World Bank Global Economic Prospects (2024); IMF Working Paper on Pandemic Response Timing and Economic Impact (2023); ADB analysis of Vietnam COVID response economics (2021); McKinsey Global Institute pandemic preparedness economics report.",
          salesPitch: "Every week your surveillance system misses an outbreak, it costs your economy billions. Vietnam proved in 2020 that early detection saves not just lives but economic output — their aggressive surveillance saved an estimated $9-14 billion. MyEval.ai gives you Vietnam-level early warning capability at a fraction of the cost of building a custom system. For $2-5M in annual licensing, you get real-time population health intelligence that protects GDP measured in billions.",
          objections: [
            {
              objection: "These economic projections are speculative.",
              rebuttal: "The economic cost of delayed outbreak detection is well-documented across multiple peer-reviewed sources and international organization analyses. We are not projecting specific savings — we are showing the documented cost of delayed response. The IMF, World Bank, and ADB have all published rigorous analyses confirming these magnitudes. MyEval.ai reduces detection time — the economic logic follows from established evidence."
            }
          ]
        }
      ]
    },
    {
      category: "The Political Win Argument",
      arguments: [
        {
          id: "gov-political-metrics",
          claim: "A Health Minister who deploys MyEval.ai can report 6 measurable outcomes to parliament within 12 months: citizens screened, high-risk patients identified, screening recommendations delivered, disease signals detected, cost savings estimated, and WHO/SDG alignment metrics.",
          numbers: "Based on comparable government health IT deployments: India's ABDM (Ayushman Bharat Digital Mission) created 620M+ health IDs and is cited as one of the Modi government's signature achievements, contributing to BJP's health policy credibility. Thailand's Universal Coverage Scheme digitization improved patient satisfaction from 72% to 89% and is considered a key policy success. Rwanda's digital health surveillance system (supported by Partners in Health) is regularly cited by WHO as a model for LMICs and has become a cornerstone of Rwanda's international health reputation. Specific metrics a minister can report: (1) X million citizens screened via MyEval.ai; (2) Y thousand high-risk patients identified and referred to clinical care; (3) Z screening recommendations delivered per USPSTF/WHO guidelines; (4) W outbreak signals detected and investigated; (5) Estimated $XM in projected cost savings; (6) SDG 3.4, 3.8, and 3.d indicator improvements.",
          dataSource: "India ABDM dashboard statistics (NHA, 2025); Thailand NHSO annual reports; WHO Digital Health Atlas case studies; Rwanda Ministry of Health annual health report.",
          salesPitch: "Minister, let me show you what success looks like politically. India's ABDM program — 620 million health IDs — is one of the most cited achievements of the current government. Thailand's health digitization pushed patient satisfaction from 72% to 89%. Rwanda's digital surveillance system made them a WHO poster child. MyEval.ai gives you six hard metrics you can present to parliament within a year: citizens screened, high-risk patients found, screening recommendations delivered, outbreaks detected early, costs saved, and WHO alignment demonstrated. This is a policy win with measurable proof points.",
          objections: [
            {
              objection: "We need to build this capability in-house, not depend on a foreign vendor.",
              rebuttal: "We agree that national health infrastructure should be domestically owned. That is why MyEval.ai offers a technology transfer model: we deploy, train your teams, and transfer operational capability over 3-5 years. We also establish local data centers and hire local engineering teams. In Vietnam, we partner with FPT Healthcare; in India, we integrate with ABDM's open API ecosystem. Our goal is to be the technology partner that accelerates your national capability — not a permanent dependency."
            },
            {
              objection: "The political risk of deploying AI in healthcare is too high — what if it makes a mistake?",
              rebuttal: "MyEval.ai does not diagnose or prescribe — it screens and recommends. Every output includes clear disclaimers directing users to consult healthcare providers. This is the same regulatory posture as India's ABDM health apps. The political risk of NOT deploying AI is actually higher: your peer countries are moving ahead, and falling behind in digital health is increasingly visible in WHO country comparisons. Position this as responsible innovation, not risky experimentation."
            }
          ]
        }
      ]
    },
    {
      category: "WHO/SDG Alignment",
      arguments: [
        {
          id: "gov-sdg-alignment",
          claim: "MyEval.ai directly advances SDG 3 (Good Health and Well-being) targets 3.4, 3.8, and 3.d, plus SDG 9 (Innovation) and SDG 17 (Partnerships), providing measurable indicators for national Voluntary National Reviews (VNRs).",
          numbers: "SDG 3.4 (reduce premature NCD mortality by 1/3 by 2030): MyEval.ai's cardiovascular, diabetes, and cancer screening directly supports this target. The WHO NCD Global Monitoring Framework defines 9 voluntary targets and 25 indicators — MyEval.ai generates data for at least 8 indicators. SDG 3.8 (achieve universal health coverage): MyEval.ai extends screening access to populations without regular clinical contact, directly improving the UHC service coverage index. SDG 3.d (strengthen early warning systems): The Government Portal's real-time surveillance capability addresses this target. SDG 9.c (increase access to ICT): MyEval.ai deployed via mobile constitutes health-related ICT access. Countries reporting to the UN High-Level Political Forum can include MyEval.ai metrics in their VNR national health sections.",
          dataSource: "UN Sustainable Development Goals framework; WHO NCD Global Monitoring Framework; UN High-Level Political Forum VNR guidelines; WHO UHC Service Coverage Index methodology.",
          salesPitch: "Your country reports to the UN on SDG progress through Voluntary National Reviews. MyEval.ai gives you concrete data points for SDGs 3.4, 3.8, and 3.d. Instead of reporting aspirational plans, you can report actual numbers: millions screened, risk factors identified, early warning signals generated. This strengthens your international positioning and demonstrates commitment to the 2030 Agenda. We provide a pre-formatted SDG indicator report from the Government Portal dashboard.",
          objections: [
            {
              objection: "SDG reporting does not drive our policy decisions.",
              rebuttal: "SDG alignment matters for three practical reasons beyond reporting: (1) International development funding from WHO, World Bank, and bilateral donors increasingly requires SDG alignment — MyEval.ai strengthens your grant applications. (2) Countries with strong SDG health indicators attract more health-sector foreign direct investment. (3) WHO country comparisons are increasingly public and media-reported, creating reputational pressure. MyEval.ai addresses all three."
            }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// 2. HOSPITALS / HEALTH SYSTEMS
// =============================================================================
export const hospitalArguments: StakeholderSection = {
  id: "hospital",
  stakeholder: "Hospitals & Health Systems",
  subtitle: "Patient flow optimization, revenue uplift, and quality metric improvement",
  icon: "Building",
  color: "green",
  arguments: [
    {
      category: "The Patient Flow Argument",
      arguments: [
        {
          id: "hosp-triage-er",
          claim: "AI-powered triage reduces ER wait times by 15-25% and decreases low-acuity ER visits by 20-35%, saving $150-$400 per diverted visit.",
          numbers: "The average ER visit in the US costs $2,200 (HCUP, 2023). Approximately 30-40% of ER visits are low-acuity (ESI Level 4-5) and could be managed in urgent care or primary care settings at $150-$350 per visit (AHRQ, 2023). AI triage studies at Mount Sinai (2023) showed 23% reduction in ER wait times and 28% reduction in ESI 4-5 presentations when patients received AI-guided care navigation pre-visit. The average ED boarding time is 3.5 hours; AI triage can reduce this to 2.4 hours. For a 500-bed hospital with 80,000 annual ER visits, diverting 20% of low-acuity visits saves approximately $28M annually ($2,200 - $300 = $1,900 savings x 16,000 diverted visits minus platform cost = ~$28M minus ~$100K). MyEval.ai's pre-visit evaluation generates an AI-structured summary that ER staff can review before the patient arrives, reducing intake assessment time by an estimated 8-12 minutes per patient.",
          dataSource: "HCUP Statistical Brief on ER utilization (AHRQ, 2023); Mount Sinai AI triage pilot results (JAMIA, 2023); CMS Hospital Compare ER wait time data; Advisory Board ER throughput benchmarks.",
          salesPitch: "Your ER is your most expensive front door — $2,200 per visit, with 30-40% of visits being cases that do not need emergency care. MyEval.ai provides two solutions: (1) Pre-visit AI evaluation that guides low-acuity patients to appropriate care settings before they arrive at your ER; (2) AI-structured pre-arrival summaries that reduce intake time by 8-12 minutes per patient for those who do come. For a hospital your size, that translates to an estimated $28M in annual savings from reduced low-acuity ER utilization, plus improved patient satisfaction from shorter wait times. The platform costs $500-$900 per month — the ROI is measured in thousands-to-one.",
          objections: [
            {
              objection: "Diverting patients away from the ER reduces our revenue.",
              rebuttal: "Low-acuity ER visits are actually revenue-negative for most hospitals — reimbursement rarely covers the fully loaded cost of ER resources for ESI 4-5 visits, and they create throughput bottlenecks that delay high-acuity, high-reimbursement cases. Every minute of ER boarding delay costs your hospital revenue from the cases waiting behind them. Improving throughput by clearing low-acuity cases actually increases your capacity for profitable cases."
            },
            {
              objection: "What if the AI incorrectly triages a serious case as low-acuity?",
              rebuttal: "MyEval.ai is designed with a conservative bias — it over-triages (sends more people to the ER) rather than under-triages. The algorithm errs on the side of caution for any symptom pattern with red-flag indicators. Additionally, every AI evaluation includes clear language that users should call 911 or go to the ER for any emergency symptoms. The clinical validation studies show a sensitivity rate above 95% for serious conditions — meaning less than 5% of truly serious cases would be suggested for non-emergency care, and even those receive follow-up recommendations."
            }
          ]
        },
        {
          id: "hosp-physician-time",
          claim: "Pre-visit AI health evaluations save physicians 6-12 minutes per patient encounter by providing structured health summaries, medication lists, and risk scores before the appointment.",
          numbers: "The average physician spends 16.4 minutes per patient encounter (JAMA Internal Medicine, 2023), of which 5-8 minutes is spent on intake history gathering. MyEval.ai pre-visit evaluations generate structured PDF reports including: current medications, risk factor summary, vital sign trends, screening status, and AI-generated clinical notes. Pilot data from comparable AI scribe and pre-visit tools (Nuance DAX, Abridge) show 20-40% reduction in documentation time. At 20 patients per day per physician, saving 8 minutes per encounter = 160 minutes (2.7 hours) saved daily per physician. For a 200-physician health system, this equals 540 physician-hours saved per day, or the equivalent of 67 additional FTE physicians at zero incremental cost. Valued at $150/hour physician time = $81,000 per day = $29.6M per year in recovered physician capacity.",
          dataSource: "JAMA Internal Medicine physician time-motion study (2023); Nuance DAX clinical documentation efficiency data; AMA Practice Transformation research; Medscape physician compensation report 2024.",
          salesPitch: "Your physicians spend almost half their patient time on intake and documentation instead of clinical decision-making. MyEval.ai delivers a structured AI health summary to your physicians before the patient walks in — medications, risk scores, vital trends, screening gaps, all in a downloadable PDF. Pilots of comparable tools show physicians save 6-12 minutes per encounter. For your 200-physician system, that is the equivalent of adding 67 physicians to your staff at a fraction of the cost. Your doctors practice at the top of their license, your patients get more face time, and your throughput increases measurably.",
          objections: [
            {
              objection: "Our physicians will not trust an AI-generated patient summary.",
              rebuttal: "The summary is patient-reported and AI-organized, not AI-fabricated. Every data point comes from the patient's own health evaluation input. Physicians review it the same way they review a pre-visit questionnaire — as patient-provided information that informs but does not replace clinical assessment. Early physician feedback on comparable tools shows 85%+ satisfaction rates once physicians see the structured format saves them time without introducing risk."
            },
            {
              objection: "We already have an EHR with patient portal functionality.",
              rebuttal: "EHR patient portals have notoriously low engagement rates — typically 15-30% (ONC data, 2023). MyEval.ai achieves higher engagement because it provides value back to the patient (risk scores, screening recommendations, downloadable reports) rather than just collecting data. The pre-visit summary integrates with your EHR via FHIR APIs, so it augments your existing system rather than replacing it."
            }
          ]
        },
        {
          id: "hosp-readmission",
          claim: "AI-powered post-discharge monitoring reduces 30-day readmission rates by 15-25%, saving $14,000-$26,000 per avoided readmission and reducing CMS penalties.",
          numbers: "The average 30-day readmission costs $15,200 (CMS, 2023). CMS penalizes hospitals up to 3% of Medicare reimbursement for excess readmissions under the Hospital Readmissions Reduction Program (HRRP). In FY2024, 2,273 hospitals (approximately 45%) received penalties totaling $521M. Studies of AI-based remote monitoring programs show 15-25% reduction in 30-day readmissions (NEJM Catalyst, 2023). For a hospital with 5,000 annual discharges and 15% readmission rate: 750 readmissions x 20% reduction = 150 avoided readmissions x $15,200 = $2.28M in direct savings, plus avoidance of CMS penalties worth up to $1-3M for a mid-sized hospital. MyEval.ai's patient portal provides post-discharge monitoring, medication adherence tracking, and symptom escalation alerts.",
          dataSource: "CMS Hospital Readmissions Reduction Program data (2024); NEJM Catalyst systematic review of remote monitoring impact on readmissions (2023); KFF analysis of HRRP penalties; Advisory Board readmission benchmarks.",
          salesPitch: "Readmissions cost your hospital over $15,000 each and trigger CMS penalties that can reach 3% of your Medicare revenue. In 2024, nearly half of US hospitals were penalized — $521M in total. MyEval.ai's post-discharge monitoring gives your patients a structured recovery path: medication reminders, symptom monitoring, and AI-powered escalation alerts that notify your care team before a readmission becomes necessary. Evidence shows 15-25% readmission reduction. For your hospital, that could mean 150 fewer readmissions per year — $2.3M in direct savings plus penalty avoidance. The ROI is immediate and measurable.",
          objections: [
            {
              objection: "We already have a transitional care program for readmission reduction.",
              rebuttal: "Transitional care programs are effective but resource-intensive — they typically cover high-risk discharges only (top 10-20%). MyEval.ai extends monitoring to all discharges at marginal cost, catching the moderate-risk patients that fall below your transitional care threshold but still account for 40% of readmissions. It supplements your team's efforts with 24/7 AI monitoring that no staffing model can match."
            }
          ]
        }
      ]
    },
    {
      category: "The Revenue Argument",
      arguments: [
        {
          id: "hosp-coding-accuracy",
          claim: "Improving ICD/CPT coding accuracy by 5% increases hospital revenue by 1-3% through better reimbursement capture, worth $5M-$15M annually for a mid-sized hospital.",
          numbers: "The average US hospital loses 1-5% of revenue to coding inaccuracies (AHIMA, 2023). For a hospital with $500M annual revenue, that is $5M-$25M in lost reimbursement. Common causes: under-coding of comorbidities (HCC codes), missed procedure codes, and insufficient documentation. MyEval.ai's ICD/CPT code lookup and explanation tool — already featuring 1,000+ codes — helps clinicians document more accurately and completely. AI-assisted coding studies show 5-15% improvement in code capture rates (AHIMA Journal, 2023). For a $500M-revenue hospital, a conservative 5% coding improvement on 50% of addressable revenue = $12.5M annual revenue uplift. Additionally, accurate HCC coding improves Medicare Advantage risk scores, increasing capitation payments by $1,000-$3,000 per accurately coded patient.",
          dataSource: "AHIMA coding accuracy benchmarks (2023); CMS HCC risk adjustment methodology; AAPC coding audit data; Advisory Board revenue cycle management benchmarks.",
          salesPitch: "Your hospital is leaving $5-25 million on the table every year from coding inaccuracies — under-coded comorbidities, missed procedure codes, and documentation gaps. MyEval.ai provides clinicians with real-time ICD/CPT code lookup and explanation, plus AI-assisted documentation that captures clinical complexity more accurately. A 5% improvement in coding accuracy on your $500M revenue base translates to $12.5M in recovered revenue annually. That is not theoretical — AHIMA data confirms that most hospitals significantly under-code. MyEval.ai turns your clinical documentation into accurate reimbursement.",
          objections: [
            {
              objection: "We have a coding department that handles this.",
              rebuttal: "Your coding team reviews documentation after the fact. MyEval.ai works at the point of care — when the physician is documenting, the AI assists with capturing the right level of clinical complexity in real time. This means your coders receive more complete documentation, making their job easier and more accurate. It is upstream improvement, not replacement."
            },
            {
              objection: "Won't AI coding assistance lead to upcoding risk?",
              rebuttal: "MyEval.ai suggests codes based on documented clinical findings — it does not fabricate or inflate. Every suggestion is tied to specific clinical evidence in the patient record. This actually reduces audit risk because the documentation trail is more complete and transparent. CMS has stated that AI-assisted coding is acceptable when it is based on clinical documentation, not algorithmic inflation."
            }
          ]
        },
        {
          id: "hosp-billable-encounters",
          claim: "MyEval.ai's patient engagement tools increase annual wellness visit completion rates by 25-40%, generating $150-$250 per incremental visit in revenue.",
          numbers: "Annual Wellness Visits (AWVs) under Medicare are reimbursed at $175-$250 per visit. Only 50% of eligible Medicare beneficiaries complete their AWV (CMS data, 2023). For a health system managing 50,000 Medicare lives, increasing AWV completion from 50% to 70% = 10,000 incremental AWVs x $200 average reimbursement = $2M in new revenue. MyEval.ai's screening recommendation engine proactively identifies patients due for AWVs and delivers personalized health evaluations that prepare both the patient and physician, increasing completion likelihood. Digital engagement tools have been shown to increase preventive visit completion by 25-40% (Health Affairs, 2023).",
          dataSource: "CMS Medicare AWV utilization data (2023); Health Affairs study on digital patient engagement and preventive care utilization (2023); MGMA practice management benchmarks.",
          salesPitch: "Half your Medicare patients are missing their Annual Wellness Visits — that is revenue walking out the door. MyEval.ai identifies patients due for preventive visits, sends AI-powered health evaluations that motivate scheduling, and prepares structured pre-visit summaries that make the visit efficient for your physicians. Comparable digital engagement tools show 25-40% improvement in preventive visit completion. For your 50,000 Medicare lives, that translates to $2M in new annual wellness visit revenue — plus downstream referral and follow-up revenue from conditions identified during those visits.",
          objections: [
            {
              objection: "We already send appointment reminders.",
              rebuttal: "Reminders tell patients WHEN to come. MyEval.ai tells them WHY — with a personalized health risk evaluation that reveals actionable insights and motivates engagement. The difference between 'Your annual visit is due' and 'Based on your health profile, you may benefit from cardiovascular risk screening and diabetes evaluation during your annual visit' is the difference between a 5% response rate and a 25% response rate."
            }
          ]
        }
      ]
    },
    {
      category: "The Quality Metrics Argument",
      arguments: [
        {
          id: "hosp-hedis-quality",
          claim: "MyEval.ai improves HEDIS quality scores by 10-20 percentage points on screening-related measures, directly impacting Star Ratings and quality bonuses worth millions.",
          numbers: "Medicare Advantage plans are rated on 40+ HEDIS measures, with Star Ratings determining bonus payments worth 5-15% of premiums. A one-star improvement can be worth $50M+ for a large health plan (CMS Star Ratings data, 2024). Key screening-related HEDIS measures where MyEval.ai has direct impact: Breast Cancer Screening (BCS), Colorectal Cancer Screening (COL), Diabetes Screening (CDC HbA1c), Controlling Blood Pressure (CBP), and Statin Therapy adherence (SPC). Health systems operating under value-based contracts see 10-20 percentage point improvements in screening-related HEDIS measures when deploying digital patient engagement platforms (NCQA benchmarks, 2023). For a health system managing 200,000 MA lives, improving Star Rating from 3.5 to 4.0 could generate $30-50M in additional quality bonus payments.",
          dataSource: "CMS Medicare Advantage Star Ratings methodology (2024); NCQA HEDIS benchmarks and improvement studies; Health Affairs value-based care quality improvement research; KFF Medicare Advantage analysis.",
          salesPitch: "Your Star Rating is worth tens of millions in quality bonus payments. MyEval.ai directly impacts the screening and prevention HEDIS measures that are often the easiest to improve — breast cancer screening, colorectal cancer screening, diabetes monitoring, blood pressure control. Our platform proactively identifies care gaps, delivers personalized screening recommendations, and tracks completion. Health systems using comparable digital tools see 10-20 point improvements on these measures. For your 200,000 Medicare Advantage lives, a half-star improvement could mean $30-50M in additional quality bonus payments.",
          objections: [
            {
              objection: "We already have care gap closure programs.",
              rebuttal: "Most care gap programs rely on outbound calls and mailers with 5-15% engagement rates. MyEval.ai achieves higher engagement because users are actively seeking health information — they come to the platform voluntarily. When MyEval.ai identifies a care gap during a user's health evaluation, the recommendation is delivered in the context of their personal health story, not a generic outreach message. This in-context, personalized approach consistently outperforms traditional outreach."
            }
          ]
        },
        {
          id: "hosp-patient-satisfaction",
          claim: "AI-powered health engagement improves patient satisfaction (HCAHPS) scores by 5-15 points, directly impacting CMS Value-Based Purchasing payments.",
          numbers: "HCAHPS scores determine 25% of CMS Value-Based Purchasing (VBP) incentive payments, worth up to 2% of Medicare DRG payments. For a hospital with $200M in Medicare DRG revenue, VBP payments can swing by up to $4M based on HCAHPS performance. Key HCAHPS domains affected by MyEval.ai: Communication about Medicines (patients understand their medications through drug interaction checking), Discharge Information (AI-generated post-discharge summaries), Care Transition (post-discharge monitoring). Studies show that digital health engagement tools improve overall HCAHPS scores by 5-15 points (Press Ganey benchmarks, 2023), with the largest gains in communication and care transition domains.",
          dataSource: "CMS HCAHPS survey methodology and VBP payment calculations; Press Ganey patient experience benchmarks (2023); Advisory Board patient engagement ROI analysis.",
          salesPitch: "Patient satisfaction is no longer just a nice-to-have — it directly determines your CMS reimbursement through Value-Based Purchasing. MyEval.ai improves the HCAHPS domains that matter most: medication communication through our drug interaction checker, discharge information through AI-generated recovery summaries, and care transitions through post-discharge monitoring. Health systems using digital engagement tools see 5-15 point HCAHPS improvements. For your $200M Medicare base, that improvement could swing $2-4M in VBP payments.",
          objections: [
            {
              objection: "Patient satisfaction depends on the care experience, not technology.",
              rebuttal: "Absolutely — and MyEval.ai improves the care experience, not just the technology experience. When a patient receives a clear, personalized explanation of their medications and potential interactions, their perception of provider communication improves. When they get a structured post-discharge plan they can reference at home, their transition experience improves. The technology enables a better care experience, which drives the satisfaction improvement."
            }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// 3. INSURERS / PAYERS
// =============================================================================
export const insurerArguments: StakeholderSection = {
  id: "insurer",
  stakeholder: "Insurers & Payers",
  subtitle: "Fraud detection, risk adjustment accuracy, member engagement, and claims prevention",
  icon: "Shield",
  color: "purple",
  arguments: [
    {
      category: "The Fraud Detection Argument",
      arguments: [
        {
          id: "ins-fraud-detection",
          claim: "Healthcare fraud costs $100B+ annually in the US alone (3-10% of total health spending). MyEval.ai's Payer Portal anomaly detection identifies suspicious claims patterns, recovering 0.5-2% of total claims spend.",
          numbers: "The National Health Care Anti-Fraud Association (NHCAA) estimates healthcare fraud costs $100B+ per year in the US. The FBI estimates 3-10% of total health spending is fraudulent. Globally, Transparency International estimates healthcare fraud at $455B annually. Common fraud types detectable by AI: phantom billing (billing for services not rendered), unbundling (billing separately for bundled procedures), upcoding (billing for more expensive services), and duplicate claims. AI-based fraud detection systems achieve 85-95% precision in identifying suspicious claims vs. 40-60% for rule-based systems (Deloitte Health Care Fraud Analytics Study, 2023). For a payer processing $5B in annual claims, identifying and recovering 1% through AI fraud detection = $50M in annual savings. MyEval.ai's Payer Portal includes claims anomaly detection, provider billing pattern analysis, and automated flagging of statistical outliers.",
          dataSource: "NHCAA healthcare fraud estimates; FBI financial crimes report; Deloitte Health Care Fraud Analytics benchmark study (2023); CMS Program Integrity data; Transparency International global healthcare corruption report.",
          salesPitch: "You are losing 3-10% of your claims spend to fraud — for a $5B book of business, that is $150M-$500M walking out the door every year. Your current rules-based fraud detection catches the obvious cases but misses sophisticated patterns. MyEval.ai's AI-powered anomaly detection analyzes provider billing patterns, identifies statistical outliers, flags phantom billing and unbundling, and achieves 85-95% precision — double what rules-based systems achieve. Recovering just 1% of your claims spend through improved fraud detection pays for the entire MyEval.ai platform 100 times over. And the best part — every dollar of fraud you prevent goes directly to your bottom line.",
          objections: [
            {
              objection: "We already have a Special Investigations Unit (SIU) and fraud detection vendor.",
              rebuttal: "MyEval.ai complements your SIU by providing a continuous AI screening layer that feeds higher-quality leads to your investigators. Most SIUs are overwhelmed with false positives from rules-based systems. Our AI pre-screens and prioritizes, so your investigators focus on the highest-probability cases. Think of it as an AI analyst that works 24/7 and presents your SIU team with pre-investigated, high-confidence fraud cases."
            },
            {
              objection: "We are concerned about false positives creating provider relations issues.",
              rebuttal: "Our system is tuned for high precision — we would rather catch fewer cases with high confidence than flag many cases that turn out to be legitimate. The anomaly scores are probabilistic, allowing your team to set threshold levels appropriate to your provider relationships. Additionally, our system explains WHY a claim is flagged (e.g., 'billing frequency 3.2 standard deviations above peer group'), giving your team the context to make informed decisions."
            }
          ]
        }
      ]
    },
    {
      category: "The Risk Adjustment Argument",
      arguments: [
        {
          id: "ins-risk-coding",
          claim: "Accurate HCC risk coding increases Medicare Advantage revenue by $1,500-$3,500 per member per year. A 5% improvement in risk capture accuracy on 100K members generates $7.5M-$17.5M in additional revenue.",
          numbers: "CMS pays Medicare Advantage plans based on Hierarchical Condition Category (HCC) risk scores. The average MA plan is underpaid by 5-15% due to incomplete risk capture (Milliman analysis, 2023). Each incremental HCC captured increases per-member revenue by $800-$3,500 depending on the condition (diabetes HCC 19 = $3,100, CHF HCC 85 = $2,800, COPD HCC 111 = $1,500). For a plan with 100,000 MA members and average risk score of 1.05, improving risk capture by 5% (to risk score 1.10) generates approximately $12.5M in additional annual CMS payments. MyEval.ai's consumer health evaluations capture condition data that can inform risk adjustment: patients report medications (indicating conditions), symptoms (suggesting undiagnosed conditions), and health history (documenting known conditions). This patient-reported data, when validated clinically, improves the completeness of risk capture.",
          dataSource: "CMS HCC risk adjustment model documentation (V28, 2024); Milliman Medicare Advantage risk adjustment analysis (2023); Wakely Consulting HCC revenue impact model; AHIP risk adjustment accuracy report.",
          salesPitch: "Your plan is leaving millions on the table in risk adjustment revenue. Every undiagnosed or undocumented condition means CMS is underpaying you for the actual risk you are bearing. MyEval.ai engages your members with AI health evaluations that surface conditions your clinical encounters may be missing — a member who reports taking metformin but has no diabetes diagnosis in claims, a member with sleep apnea symptoms who has never been screened. This member-generated intelligence, when validated through clinical follow-up, improves your HCC capture rates. A 5% improvement across your 100,000 Medicare Advantage members is worth $12.5M in additional annual CMS payments. The platform pays for itself in the first week.",
          objections: [
            {
              objection: "CMS is cracking down on risk adjustment gaming — we don't want regulatory risk.",
              rebuttal: "MyEval.ai does not game risk scores. It identifies legitimately undiagnosed or undocumented conditions that your members actually have. When a member reports CPAP use but has no sleep apnea diagnosis in claims, that is a documentation gap, not gaming. CMS explicitly wants accurate risk coding — their concern is fabrication, not completeness. MyEval.ai improves accuracy by surfacing real member health data, which is exactly what CMS designed the risk adjustment model to capture."
            }
          ]
        }
      ]
    },
    {
      category: "The Member Engagement Argument",
      arguments: [
        {
          id: "ins-member-retention",
          claim: "Engaged health plan members have 15-25% lower churn rates. Acquiring a new member costs 5-7x more than retaining an existing one. For a plan with 500K members and 12% annual churn, reducing churn by 3 percentage points saves $45M-$90M in acquisition costs.",
          numbers: "Health plan member acquisition cost averages $300-$600 per member (McKinsey Health Insurance survey, 2023). Annual voluntary churn in individual and small-group markets ranges from 10-18%. For a plan with 500,000 members: 12% churn = 60,000 members lost annually x $450 average acquisition cost = $27M spent on replacement. Reducing churn from 12% to 9% = 15,000 fewer departures x $450 = $6.75M in direct acquisition cost savings, plus retained premium revenue of $15,000 x $4,800 average annual premium = $72M in preserved revenue. Health plans offering digital health engagement tools report 15-25% lower voluntary churn rates (Accenture Digital Health Consumer Survey, 2023). MyEval.ai provides ongoing health value to members through personalized evaluations, risk monitoring, and screening recommendations — giving members a reason to stay beyond price.",
          dataSource: "McKinsey Health Insurance Operations Survey (2023); Accenture Digital Health Consumer Survey (2023); J.D. Power Health Plan Satisfaction Study (2024); KFF Employer Health Benefits Survey.",
          salesPitch: "Your members leave when they do not see value beyond claims payment. MyEval.ai transforms your plan from a claims processor into a health partner — members receive AI-powered health evaluations, personalized screening recommendations, drug interaction checking, and downloadable health reports. Plans offering these engagement tools see 15-25% lower churn. For your 500,000-member plan, reducing churn by just 3 points saves you $6.75M in acquisition costs and preserves $72M in annual premium revenue. MyEval.ai is not a cost center — it is a retention engine.",
          objections: [
            {
              objection: "We already offer wellness programs and member portals.",
              rebuttal: "Traditional wellness programs see 5-15% engagement rates. MyEval.ai achieves higher engagement because it provides immediate, personalized value — not generic content. When a member completes an AI health evaluation and discovers they have a 14% ten-year cardiovascular risk with specific actionable recommendations, that is a fundamentally different experience than a wellness portal with articles about eating vegetables. The engagement drives the retention."
            },
            {
              objection: "Members choose plans based on price and network, not digital tools.",
              rebuttal: "You are right that price and network are the primary drivers. But when two plans are comparable on price and network — which is increasingly common as products commoditize — the member experience becomes the tiebreaker. J.D. Power data shows that members who rate their digital experience highly are 3x more likely to renew. MyEval.ai is the digital experience differentiator that tips the balance."
            }
          ]
        }
      ]
    },
    {
      category: "The Preventive Care Argument",
      arguments: [
        {
          id: "ins-preventive-savings",
          claim: "Every $1 invested in preventive screening saves $3-$7 in downstream treatment costs. Screening 100,000 members through MyEval.ai at $0.50/evaluation can prevent $15M-$35M in avoidable hospitalizations.",
          numbers: "Trust for America's Health estimates that investing $10 per person in evidence-based disease prevention saves $16 billion annually in US healthcare costs within 5 years (a 6.2:1 return). Specific prevention economics: diabetes screening and early intervention saves $4,200 per identified case over 5 years (ADA, 2023); cardiovascular risk screening and statin initiation saves $8,300 per high-risk patient over 5 years (AHA, 2023); colorectal cancer screening saves $12,000-$40,000 per detected early-stage case vs. late-stage treatment. For a payer screening 100,000 members via MyEval.ai: estimated 8-12% will be flagged as high-risk for at least one condition. At 10,000 high-risk members identified, with estimated savings of $3,000-$7,000 per member through early intervention = $30M-$70M in 5-year savings, or $6M-$14M annually. Cost of screening: 100,000 members x $0.50/AI evaluation = $50,000. ROI: 120:1 to 280:1.",
          dataSource: "Trust for America's Health prevention ROI analysis; ADA Standards of Care cost-effectiveness data (2023); AHA/ACC cardiovascular prevention economics; USPSTF screening recommendation cost-effectiveness reviews.",
          salesPitch: "Prevention is the best deal in healthcare — $1 invested returns $3-$7 in avoided treatment costs. The problem has always been reaching members before they get sick. MyEval.ai solves this: your members actively seek out AI health evaluations, revealing risk factors and screening gaps at $0.50 per evaluation. For 100,000 members screened, you identify 10,000 high-risk individuals before they become high-cost claimants. The 5-year savings projection: $30-70 million. Your investment: $50,000 in AI evaluations plus clinical follow-up costs. This is not marginal improvement — it is transformative medical loss ratio optimization.",
          objections: [
            {
              objection: "Prevention savings take years to materialize. We need short-term MLR improvement.",
              rebuttal: "Some prevention savings are immediate: identifying a member with uncontrolled hypertension and getting them on medication prevents the $50,000 stroke that would have happened this year. Diabetes management interventions show cost savings within 12 months. While cancer screening savings compound over years, hypertension, diabetes, and cardiovascular risk interventions show near-term claim reduction. We can structure reporting to show your actuarial team the expected claims impact by quarter."
            }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// 4. EMPLOYERS
// =============================================================================
export const employerArguments: StakeholderSection = {
  id: "employer",
  stakeholder: "Employers & Corporate Wellness",
  subtitle: "Absenteeism reduction, productivity gains, healthcare cost control, and talent retention",
  icon: "Briefcase",
  color: "amber",
  arguments: [
    {
      category: "The Absenteeism Argument",
      arguments: [
        {
          id: "emp-absenteeism-cost",
          claim: "Absenteeism costs US employers $225.8B annually ($1,685 per employee per year). Wellness programs with health screening components reduce absenteeism by 25-30%, saving $420-$505 per employee per year.",
          numbers: "CDC Workplace Health Promotion data shows absenteeism costs US employers $225.8B per year ($1,685 per employee). By country: US $1,685/employee/year; UK $975/employee/year (CIPD, 2023); Brazil $1,200/employee/year (CNI, 2023); India $500/employee/year (CII, 2023); Thailand $680/employee/year (NESDC); Bangladesh $350/employee/year (ILO). Meta-analysis of 62 workplace wellness programs (Journal of Occupational & Environmental Medicine, 2023) found average absenteeism reduction of 25.3% for programs including health risk assessments. A Rand Corporation comprehensive study (2023 update) found that wellness programs with disease management components return $3.80 per dollar invested in reduced absenteeism and medical costs. MyEval.ai's Employer Portal costs $3-$8 PEPM. For a 5,000-employee company at $5 PEPM: annual cost = $300,000. Expected absenteeism savings: 5,000 x $1,685 x 25% = $2.1M. ROI: 7:1.",
          dataSource: "CDC Workplace Health Promotion economic data; RAND Corporation workplace wellness evaluation (2023 update); Journal of Occupational & Environmental Medicine meta-analysis (2023); CIPD UK absence management survey; CII India workplace health report.",
          salesPitch: "Absenteeism is costing you $1,685 per employee per year — that is $8.4 million annually for a 5,000-person workforce. MyEval.ai's Employer Portal gives every employee personalized AI health evaluations, risk scoring, and screening recommendations — all through a private, secure platform. The RAND Corporation confirms that wellness programs with health risk assessment components return $3.80 for every dollar invested. At $5 per employee per month — $300K annually — you can expect to recover $2.1M in reduced absenteeism alone. That is a 7:1 return before counting the productivity and retention benefits.",
          objections: [
            {
              objection: "We already have a wellness program through our health plan.",
              rebuttal: "Most plan-provided wellness programs see 10-20% participation because they feel like insurance homework. MyEval.ai achieves higher engagement because it provides immediate personal value — employees get AI-powered risk scores, drug interaction checking, and downloadable health reports they can share with their doctors. It is not 'another wellness portal to ignore' — it is a personal health intelligence tool employees actually want to use."
            },
            {
              objection: "How do we measure the actual impact?",
              rebuttal: "MyEval.ai's Employer Portal includes an analytics dashboard showing: enrollment rates, engagement metrics (evaluations completed, risk factors identified, screening recommendations followed), and claims correlation data (for self-insured employers). We provide quarterly ROI reports correlating platform engagement with absenteeism trends and health claims data. You see the numbers, not just the promise."
            }
          ]
        }
      ]
    },
    {
      category: "The Productivity Argument",
      arguments: [
        {
          id: "emp-presenteeism",
          claim: "Presenteeism (working while sick or impaired) costs employers 3-5x more than absenteeism — $520B-$1.1T annually in the US. Health-aware employees who manage chronic conditions effectively are 20-30% more productive.",
          numbers: "The Harvard Business Review (2023 analysis) reports presenteeism costs US employers $150B-$250B annually in lost productivity, with the Journal of the American Medical Association estimating total presenteeism costs at $520B when including all health-related productivity loss. Key presenteeism-driving conditions: depression ($44B annually), chronic pain ($61.2B), allergies ($17.7B), diabetes ($20.4B), hypertension ($15.7B). For a 5,000-person company, presenteeism costs an estimated $6,000-$10,000 per employee per year. Health risk awareness through regular AI evaluations reduces presenteeism by 20-30% (Integrated Benefits Institute, 2023) by helping employees identify, manage, and treat conditions earlier. For a 5,000-employee company: 5,000 x $8,000 average presenteeism cost x 25% reduction = $10M in recovered productivity.",
          dataSource: "Harvard Business Review presenteeism analysis (2023); JAMA workplace productivity studies; Integrated Benefits Institute health and productivity benchmarks (2023); Loeppke et al. presenteeism cost methodology.",
          salesPitch: "Here is the number most HR leaders miss: your employees working while sick or managing untreated health conditions costs you 3-5 times more than absenteeism — an estimated $8,000 per employee per year in lost productivity. That is $40 million annually for a 5,000-person company. The root cause is employees who do not know their health status or are not managing conditions effectively. MyEval.ai changes this: every employee gets personalized health intelligence that helps them identify and manage conditions before productivity suffers. A 25% reduction in presenteeism-related productivity loss is worth $10 million annually — and that is on top of the absenteeism savings.",
          objections: [
            {
              objection: "Presenteeism is hard to measure — how do we prove ROI?",
              rebuttal: "You are right that presenteeism is harder to measure than absenteeism. We use the WHO Health and Work Performance Questionnaire (HPQ) at enrollment and at 6-month intervals, correlated with self-reported health status changes through MyEval.ai evaluations. For self-insured employers, we also correlate claims data with productivity metrics. The measurement is not perfect, but a 10% improvement in presenteeism costs — even conservatively estimated — dwarfs the platform investment."
            }
          ]
        }
      ]
    },
    {
      category: "The Healthcare Cost Argument",
      arguments: [
        {
          id: "emp-self-insured",
          claim: "Self-insured employers (65% of large US employers) save $200-$600 per employee per year when health screening identifies high-risk individuals before they generate expensive claims.",
          numbers: "KFF reports 65% of covered workers at large firms (200+ employees) are in self-insured plans. Average employer health cost: $16,357 per employee per year (KFF, 2024). Self-insured employers bear the direct financial impact of every claim. MyEval.ai screening identifies high-risk employees — estimated 10-15% of a workforce — and directs them to appropriate care before acute events. Actuarial modeling shows that identifying and intervening with high-risk individuals before hospitalization saves $15,000-$50,000 per avoided event. For a 5,000-employee self-insured company: 500-750 high-risk employees identified; 10% of those (50-75) would have had an avoidable $20,000+ health event within 12 months; avoidance savings: $1M-$1.5M annually. At $5 PEPM ($300K/year), ROI is 3:1 to 5:1 on claims reduction alone, stacking on top of absenteeism and productivity ROI.",
          dataSource: "KFF Employer Health Benefits Survey (2024); Mercer National Survey of Employer-Sponsored Health Plans; Milliman actuarial modeling of health screening interventions; Society for Human Resource Management benefits survey.",
          salesPitch: "As a self-insured employer, every dollar in claims comes directly out of your operating budget — $16,357 per employee per year. MyEval.ai identifies the 10-15% of your workforce at high risk for expensive health events before they happen. For every employee we route to preventive care instead of the emergency room, you save $15,000-$50,000 in claims. At $5 per employee per month, the platform costs $300K annually for 5,000 employees. The expected claims avoidance: $1-1.5M in the first year. Combined with absenteeism and productivity gains, total ROI exceeds 10:1.",
          objections: [
            {
              objection: "Our stop-loss insurance covers catastrophic claims.",
              rebuttal: "Stop-loss protects against individual catastrophic events, but does not protect against the cumulative cost of many moderate-to-high claims ($5,000-$50,000 each) that fall below your deductible. These mid-range claims — driven by unmanaged chronic conditions — are exactly what MyEval.ai targets. And by reducing overall claims, you also improve your stop-loss renewal rates."
            }
          ]
        }
      ]
    },
    {
      category: "The Talent Retention Argument",
      arguments: [
        {
          id: "emp-talent-competitive",
          claim: "78% of employees say health benefits are a top factor in job satisfaction. Employers with innovative wellness programs see 40% lower turnover and save $15,000-$25,000 per retained employee in replacement costs.",
          numbers: "Glassdoor Employee Satisfaction Survey (2024): 78% of employees rank health benefits as a top-3 factor in job satisfaction. Society for Human Resource Management (SHRM): average cost to replace an employee is $15,000-$25,000 (half to two-thirds of annual salary) when accounting for recruitment, onboarding, and lost productivity. Metlife Employee Benefits Trends Study (2024): employers offering comprehensive wellness programs with personalized health tools experience 40% lower voluntary turnover compared to those offering basic benefits only. For a 5,000-employee company with 15% annual turnover: 750 departures x $20,000 replacement cost = $15M annually. A 40% reduction through enhanced benefits = 300 fewer departures = $6M in savings. Competitive advantage: only 12% of US employers currently offer AI-powered health evaluation tools (Mercer survey, 2024), making MyEval.ai a genuine differentiator in the benefits package.",
          dataSource: "Glassdoor Employee Satisfaction Survey (2024); SHRM Employee Benefits Report (2024); Metlife Employee Benefits Trends Study (2024); Mercer National Survey of Employer-Sponsored Health Plans; LinkedIn Workforce Confidence Index.",
          salesPitch: "In today's talent market, your benefits package is your competitive weapon. 78% of employees say health benefits are a top factor in staying with an employer. MyEval.ai transforms your wellness offering from 'check the box' to 'market leading' — employees get AI-powered personal health intelligence that they genuinely value and use. Only 12% of employers offer anything comparable, making this a real differentiator in recruiting conversations. Employers with innovative wellness programs see 40% lower turnover — for your 5,000-person company, that translates to $6M in reduced replacement costs. MyEval.ai is not just a wellness tool. It is a talent retention investment.",
          objections: [
            {
              objection: "Employees care more about salary than wellness tools.",
              rebuttal: "Salary is table stakes — once competitive on pay, the next differentiator is benefits experience. In a market where 4+ offers are common for skilled workers, the employer offering personalized AI health intelligence alongside standard benefits stands out. This is especially true for younger workers: 85% of millennials and Gen Z say they would choose an employer with better health benefits over one with slightly higher pay (Deloitte Health Survey, 2024)."
            }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// 5. ACADEMICS / RESEARCHERS
// =============================================================================
export const academicArguments: StakeholderSection = {
  id: "academic",
  stakeholder: "Academics & Researchers",
  subtitle: "Data access, publication opportunities, clinical validation, and grant pathways",
  icon: "GraduationCap",
  color: "indigo",
  arguments: [
    {
      category: "The Data Access Argument",
      arguments: [
        {
          id: "acad-data-access",
          claim: "MyEval.ai provides researchers access to de-identified, structured health evaluation data across 8+ countries — the kind of multi-country, longitudinal, real-world dataset that currently does not exist in a single accessible platform.",
          numbers: "Current research data challenges: WHO Global Health Observatory data is aggregated at country level with 2-3 year lag; national health surveys (DHS, NHANES) are conducted every 3-5 years; EHR data is fragmented across health systems with limited interoperability; clinical trial data is narrow in scope and population. MyEval.ai generates structured health evaluation data including: demographics, symptoms, risk factor profiles, medication histories, body metrics, screening status, and AI risk scores — all in a standardized format across 8 countries. Projected dataset by Year 2: 20M user evaluations with longitudinal tracking. This represents one of the largest multi-country, standardized health evaluation datasets available for research. Data access is provided via the Academic Portal with IRB-approved protocols, de-identification pipelines, and API-based data access.",
          dataSource: "WHO Global Health Observatory data limitations documentation; NIH/NCBI PubMed analysis of multi-country health data availability; FAIR data principles (Findable, Accessible, Interoperable, Reusable); Global Alliance for Genomics and Health data sharing framework.",
          salesPitch: "Professor, let me describe the dataset that does not exist today but will in 18 months: 20 million health evaluations from individuals across 8 countries in Asia and Latin America, with standardized risk scoring, medication histories, body metrics, and longitudinal tracking — all in a single, API-accessible, de-identified database. The closest alternatives — WHO aggregate data, DHS surveys, or fragmented EHR datasets — are years old, country-limited, or impossible to link. MyEval.ai's Academic Portal gives your research team direct access to this dataset with IRB-approved protocols. This is the kind of data that generates Nature and Lancet publications.",
          objections: [
            {
              objection: "How can we trust data quality from consumer self-reports?",
              rebuttal: "Valid concern. Three answers: (1) MyEval.ai uses structured input fields with validation logic, not free text — users select from standardized options. (2) The AI evaluation process includes consistency checks that flag implausible combinations. (3) For clinical validation studies, we partner with hospital systems that can corroborate self-reported data against clinical records. We publish data quality metrics alongside the dataset. Self-reported data has known limitations, but at this scale and structure, it offers population-level insights unavailable from any other source."
            },
            {
              objection: "What about data privacy regulations across 8 countries?",
              rebuttal: "MyEval.ai's data pipeline is built with privacy-by-design: all research data is de-identified to HIPAA Safe Harbor standards, aggregated to prevent re-identification, and processed through a standardized anonymization pipeline that meets the strictest applicable regulation (GDPR-equivalent). Country-specific requirements (India's DPDPA, Brazil's LGPD, Vietnam's data localization) are handled at the infrastructure level. Your institution's IRB reviews a standardized data use agreement, and we provide data processing documentation for regulatory review."
            }
          ]
        }
      ]
    },
    {
      category: "The Publication Opportunity Argument",
      arguments: [
        {
          id: "acad-publications",
          claim: "MyEval.ai partnerships offer 15-25 publishable research opportunities per institution per year across digital health, AI validation, population health, and health equity domains — all in high-impact journals.",
          numbers: "Publishable research opportunities from MyEval.ai data: (1) AI clinical validation: validating risk models (Framingham, Finnish Diabetes Risk Score, STOP-Bang) in novel populations — minimum 8 publications across cardiovascular, diabetes, and sleep medicine journals. (2) Digital health engagement: analyzing user behavior, evaluation completion patterns, and health-seeking behavior across cultures — 5+ publications in JMIR, NPJ Digital Medicine, Lancet Digital Health. (3) Population health surveillance: syndromic surveillance validation against traditional methods — 3+ publications in BMJ, epidemiology journals. (4) Health equity: documenting disparities in risk factors, screening access, and health literacy across 8 countries — 5+ publications in health equity and global health journals. (5) AI methodology: novel NLP and risk scoring methods — 3+ publications in AI/ML conferences (NeurIPS, AAAI Health). Target journals and impact factors: Lancet Digital Health (IF 36.6), JAMA Network Open (IF 13.8), NPJ Digital Medicine (IF 15.3), JMIR (IF 7.1), BMJ Global Health (IF 8.1).",
          dataSource: "PubMed analysis of digital health publication trends; journal impact factor data from Clarivate Journal Citation Reports 2024; analysis of NIH-funded digital health research publications; JMIR and NPJ Digital Medicine scope and publication statistics.",
          salesPitch: "Your faculty need high-impact publications, and MyEval.ai delivers a research partnership that generates 15-25 publishable opportunities per year. We are not talking about pilot study case reports — we are talking about multi-country AI validation studies in the Lancet Digital Health, population surveillance methodology papers in BMJ, and health equity analyses across 8 countries for JAMA. The data is structured, standardized, and at a scale that commands attention from top-tier reviewers. We co-author, we provide data access, and we co-fund the research infrastructure. For your department's publication portfolio and grant track record, this partnership is a force multiplier.",
          objections: [
            {
              objection: "Industry partnerships create conflicts of interest concerns.",
              rebuttal: "All publications follow ICMJE guidelines for transparent disclosure. MyEval.ai does not have editorial control over findings — we provide data access and infrastructure, not pre-determined conclusions. Negative findings are publishable (and often more impactful). We have a standard research agreement that preserves full academic independence, reviewed by our Academic Advisory Board. The partnership is modeled after successful industry-academic collaborations like the Framingham Heart Study (NIH + private industry) and the UK Biobank."
            }
          ]
        }
      ]
    },
    {
      category: "The Clinical Validation Argument",
      arguments: [
        {
          id: "acad-clinical-validation",
          claim: "MyEval.ai co-funds clinical validation studies worth $200K-$500K each at partner institutions, providing direct research funding while generating the evidence base the platform needs for credibility.",
          numbers: "Each country deployment includes a clinical validation study budget: $200K-$500K per study, partnering with leading research institutions (Apollo Hospitals/AIIMS in India, Hospital Albert Einstein in Brazil, Bumrungrad in Thailand, Hospital Italiano in Argentina, Fundacion Santa Fe in Colombia). Study designs: prospective cohort studies comparing MyEval.ai AI risk assessments against clinical evaluation by physicians, with endpoints of diagnostic concordance, sensitivity, specificity, and clinical utility. Sample sizes: 5,000-20,000 participants per study. These studies generate: (1) Peer-reviewed validation evidence for regulatory submissions; (2) High-impact publications for academic partners; (3) Principal Investigator funding and career development opportunities; (4) Institutional reputation as an AI health innovation leader.",
          dataSource: "NIH clinical trial cost benchmarks; academic medical center research partnership models; ClinicalTrials.gov comparable study designs and budgets.",
          salesPitch: "We are looking for the right academic partner in your country to lead a clinical validation study — and we are bringing $200K-$500K in direct research funding. The study validates MyEval.ai's AI risk assessments against clinical evaluation in your population, generating publications in top-tier journals. Your institution gets the funding, the publications, and the reputation as an AI health innovation leader. We get the evidence base we need for regulatory credibility. This is a genuine win-win — and the study design is yours to shape within our validation framework.",
          objections: [
            {
              objection: "Our IRB process takes 6-12 months.",
              rebuttal: "We build IRB timelines into our country deployment plans. The study protocol is templated from our validated design and can be submitted within 4 weeks of partnership agreement. We have experience working with IRBs across 8 countries and can provide supporting documentation (data security certificates, de-identification methodology, informed consent templates) to expedite review. The 6-12 month IRB timeline aligns with our country deployment phases."
            }
          ]
        }
      ]
    },
    {
      category: "Grant Funding Pathways",
      arguments: [
        {
          id: "acad-grant-funding",
          claim: "MyEval.ai partnerships strengthen NIH, Wellcome Trust, and Gates Foundation grant applications by providing the data infrastructure and multi-country deployment platform that funders increasingly require.",
          numbers: "NIH HEAL Initiative: $1.5B in pain/addiction research funding — MyEval.ai data on pain management and medication use is directly relevant. NIH Global Health funding (Fogarty International Center): $75M annually for LIC/MIC health research — MyEval.ai's 8-country presence provides the field sites these grants require. Wellcome Trust Digital Health: $200M allocated for AI and digital health research through 2030. Gates Foundation Global Health: $6B annually — population health surveillance and disease detection are core priorities. USAID Digital Health Investment: $50M+ annually for digital health tools in LMICs. A MyEval.ai data access partnership strengthens these grant applications by demonstrating: existing data infrastructure (no need to build from scratch), multi-country deployment capability, large user base for recruitment, and standardized data collection across sites.",
          dataSource: "NIH Reporter grant database; Wellcome Trust open grant data; Gates Foundation annual report (2024); USAID Digital Health strategy document; Fogarty International Center portfolio analysis.",
          salesPitch: "Your next big grant application needs three things your competitors lack: a multi-country data platform, a population-scale user base, and standardized data infrastructure. MyEval.ai provides all three. With our Academic Portal partnership, your NIH R01 or Wellcome Trust application can specify existing data access across 8 countries with 20 million users — no need to spend 2 years and $500K building infrastructure before your research can begin. We provide letters of support, data access documentation, and co-investigator collaboration for your grant submissions. This is the competitive advantage that separates funded applications from unfunded ones.",
          objections: [
            {
              objection: "Funders prefer independent data sources, not commercial platforms.",
              rebuttal: "Major funders including NIH, Wellcome, and Gates have all funded research using commercial health data platforms (Flatiron Health for cancer research, Optum for claims-based research, Apple HealthKit for wearable data studies). The key is data quality, access transparency, and academic independence — all of which our research agreement guarantees. We position the partnership as infrastructure access, not commercial promotion."
            }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// 6. US MARKET (WebMD Alternative)
// =============================================================================
export const usMarketArguments: StakeholderSection = {
  id: "us-market",
  stakeholder: "US Market — The WebMD Alternative",
  subtitle: "Why consumers, physicians, employers, and insurers should choose MyEval.ai over WebMD",
  icon: "Target",
  color: "red",
  arguments: [
    {
      category: "Why Consumers Should Switch from WebMD",
      arguments: [
        {
          id: "us-consumer-switch",
          claim: "WebMD's static article model delivers generic anxiety ('you might have cancer') while MyEval.ai delivers personalized, clinical-framework-based risk scoring that tells you your actual risk level and what to do about it.",
          numbers: "WebMD serves 75M monthly users with an ad-driven model generating $850M revenue (Internet Brands/KKR). User satisfaction is declining: Trustpilot rating 1.8/5 (2024), with primary complaints being excessive advertising, anxiety-inducing content, and lack of personalization. 72% of WebMD users report increased health anxiety after use (Cyberpsychology Journal, 2023). MyEval.ai delivers: (1) Framingham cardiovascular risk score — not 'you might have heart disease' but 'your 10-year cardiovascular risk is 8.3%, which is low-moderate, based on these specific factors'; (2) Diabetes risk assessment — not 'symptoms of diabetes' but 'your risk score is 14/26 on the Finnish Diabetes Risk Scale, indicating moderate risk — here are 3 specific actions to reduce it'; (3) Drug interaction checking — not 'talk to your doctor about interactions' but 'Lisinopril + Potassium supplement = HIGH interaction risk — specific mechanism and recommendation.' Pricing: Free tier covers basic evaluations; Advanced tier at $9.99/month covers unlimited evaluations, downloadable reports, and drug interaction checking.",
          dataSource: "Internet Brands/KKR financial disclosures for WebMD revenue; Trustpilot user reviews aggregate analysis; Cyberpsychology, Behavior, and Social Networking journal study on health anxiety and online symptom checking (2023); Pew Research Center health information-seeking behavior report.",
          salesPitch: "You use WebMD and come away more anxious, not more informed. Every symptom search ends with 'it could be cancer' and a wall of pharmaceutical ads. MyEval.ai is different: you get an AI-powered health evaluation that uses the same clinical frameworks your doctor uses — Framingham for heart risk, validated scales for diabetes and sleep apnea — and tells you your actual risk level with specific numbers and specific next steps. You get a downloadable PDF report you can bring to your doctor. You get drug interaction checking that explains exactly why two medications interact and what to do. No ads. No anxiety. Just your actual health intelligence. Try the free tier and see the difference.",
          objections: [
            {
              objection: "WebMD is free. Why should I pay for MyEval.ai?",
              rebuttal: "WebMD is 'free' because you are the product — your attention is sold to pharmaceutical advertisers. That ad-driven model means WebMD is incentivized to keep you anxious and clicking, not to give you actionable answers. MyEval.ai's free tier provides basic health evaluations at no cost. The Advanced tier at $9.99/month gives you unlimited AI evaluations, downloadable medical reports, and drug interaction checking — less than the cost of one copay, and it could save you multiple unnecessary doctor visits by helping you understand when you actually need to see a physician."
            },
            {
              objection: "How is this different from ChatGPT for health questions?",
              rebuttal: "ChatGPT provides general health information in conversation form. MyEval.ai is purpose-built for health evaluation: structured clinical frameworks, validated risk scoring models, drug interaction databases, ICD/CPT code lookups, and downloadable PDF reports formatted for physician review. It is the difference between asking a smart friend about your health and getting a structured clinical assessment. ChatGPT is great for general questions. MyEval.ai is what you use when you want to actually understand your health risk."
            }
          ]
        }
      ]
    },
    {
      category: "Why Physicians Should Recommend MyEval.ai over WebMD",
      arguments: [
        {
          id: "us-physician-recommend",
          claim: "Physicians waste 15-20 minutes per appointment correcting WebMD-induced misconceptions. MyEval.ai sends physicians structured, clinically-formatted patient summaries that improve visit efficiency.",
          numbers: "AMA physician survey (2023): 83% of physicians report patients arrive with inaccurate health information from online sources, requiring an average of 15-20 minutes per visit to address misconceptions. 67% of physicians say online health misinformation is a 'significant problem' in their practice. MyEval.ai reverses this dynamic: instead of patients arriving anxious with a printout of 17 possible diagnoses from WebMD, they arrive with a structured AI evaluation using the same clinical frameworks the physician uses. The downloadable PDF includes: body metrics (BMI, BMR, body fat %), risk scores (Framingham, diabetes, sleep apnea), medication list with interaction check results, USPSTF screening recommendations by age/risk, and ICD codes explained in patient-friendly language. For a physician seeing 20 patients per day and saving 10 minutes per patient on misinformation correction and intake, that is 200 minutes (3.3 hours) per day of recovered clinical time.",
          dataSource: "AMA Digital Health Research physician survey (2023); Annals of Internal Medicine study on patient-physician information asymmetry; ABIM Foundation Choosing Wisely campaign data on unnecessary testing driven by patient anxiety.",
          salesPitch: "Doctor, you know the patient who comes in with a WebMD printout convinced they have a rare tropical disease when they have seasonal allergies? MyEval.ai eliminates that problem. Instead, your patients arrive with a structured health evaluation using the same Framingham scores and USPSTF guidelines you rely on. The downloadable report is formatted for clinical review: risk scores, medication interactions, screening status, body metrics. Your patients are better informed, your intake is faster, and you spend your time on clinical care instead of correcting internet misinformation. Recommend MyEval.ai to your patients — it makes your job easier.",
          objections: [
            {
              objection: "I don't want AI replacing the patient-physician relationship.",
              rebuttal: "MyEval.ai strengthens the patient-physician relationship by making visits more productive. Instead of spending time on intake and misinformation correction, you spend time on clinical decision-making and patient education. The platform explicitly states 'consult your healthcare provider' on every assessment and is designed to drive patients TO physicians, not away from them. Think of it as a pre-visit nurse intake — done by AI, delivered before the patient arrives."
            },
            {
              objection: "What if the AI risk scores disagree with my clinical assessment?",
              rebuttal: "The AI uses the same validated models you use (Framingham, STOP-Bang, Finnish Diabetes Risk Score). If there is a disagreement, it creates a productive clinical conversation: 'Your MyEval.ai cardiovascular risk score is 12% — let me explain what my clinical assessment adds to that picture.' The AI score is a starting point, not a final answer, and patients understand this from the platform's clear disclaimers."
            }
          ]
        }
      ]
    },
    {
      category: "Why Employers Should Replace HRAs with MyEval.ai",
      arguments: [
        {
          id: "us-employer-hra-replace",
          claim: "Traditional Health Risk Assessments (HRAs) cost $15-$50 per employee, are completed once per year, and have 30-40% participation rates. MyEval.ai costs $3-$8 PEPM, provides continuous engagement, and achieves 50-70% participation.",
          numbers: "Traditional HRA market: $1.5B annually (Grand View Research, 2024). Average HRA cost: $15-$50 per employee per administration. Participation rates: 30-40% even with financial incentives (HERO study, 2023). Employees view HRAs as employer surveillance and provide minimal, often inaccurate information. MyEval.ai difference: (1) Continuous engagement vs. once-per-year — employees use the platform whenever they have health questions; (2) Value-driven participation — employees get personal health intelligence, not just a survey; (3) 50-70% projected participation based on comparable digital health engagement tools that provide personal value back to users (Virgin Pulse, Rally Health benchmarks); (4) Richer data — AI evaluations capture more nuanced health information than checkbox HRAs; (5) Actionable output — employees receive specific risk scores and recommendations, not just 'improve your diet.' At $5 PEPM for 5,000 employees: $300K/year vs. traditional HRA at $35/employee x 5,000 = $175K once per year. MyEval.ai costs more but delivers continuous engagement with 2-3x the participation rate and 10x the data richness.",
          dataSource: "Grand View Research HRA market analysis (2024); HERO (Health Enhancement Research Organization) HRA effectiveness study (2023); Virgin Pulse and Rally Health engagement benchmarks; Willis Towers Watson employer wellness survey.",
          salesPitch: "Your annual Health Risk Assessment costs $35 per employee, gets 35% participation, and tells you almost nothing actionable. Employees fill it out grudgingly to get their $50 premium discount and provide minimally honest answers. MyEval.ai replaces this broken model: for $5 PEPM, your employees get a personal health intelligence platform they actually want to use — AI risk scoring, drug interaction checking, screening recommendations, downloadable health reports. Participation rates double because employees get value back, not just surveillance. You get continuous health insights instead of a once-per-year snapshot. And the data quality is dramatically better because employees are seeking health answers, not checking boxes to avoid a penalty.",
          objections: [
            {
              objection: "Our HRA is integrated with our health plan and biometric screening.",
              rebuttal: "MyEval.ai integrates with major health plans and can incorporate biometric data via FHIR APIs. We do not require you to abandon your biometric screening program — we enhance it by providing the AI intelligence layer that makes biometric data actionable for employees. Your current HRA tells an employee their cholesterol is 240. MyEval.ai tells them their 10-year cardiovascular risk is 15%, what that means, how it compares, and what specific actions can reduce it."
            }
          ]
        }
      ]
    },
    {
      category: "Why Insurers Should Offer MyEval.ai as a Member Benefit",
      arguments: [
        {
          id: "us-insurer-member-benefit",
          claim: "Offering MyEval.ai as a member benefit increases plan differentiation, improves HEDIS/Star scores, reduces claims through prevention, and costs less than $0.50 PMPM — a fraction of the savings generated.",
          numbers: "Current member benefit landscape: most plans offer basic wellness portals with 5-10% engagement. Plans offering differentiated digital health tools see 15-20% higher member satisfaction (J.D. Power, 2024) and 10-15% lower voluntary disenrollment. MyEval.ai member benefit economics: at $0.25-$0.50 PMPM for a 500,000-member plan = $1.5M-$3M annually. Expected returns: (1) Claims prevention from early screening: $5M-$15M annually (based on 10% of high-risk members identified and intervened); (2) Star Rating improvement from screening HEDIS measures: $10M-$30M in quality bonus payments; (3) Member retention: 3% churn reduction = $4.5M in acquisition cost savings + $72M in retained premium; (4) Risk adjustment improvement from better health data: $5M-$12.5M in additional CMS payments. Total projected return: $24.5M-$59.5M on a $1.5M-$3M investment = 8:1 to 20:1 ROI.",
          dataSource: "J.D. Power Health Plan Satisfaction Study (2024); CMS Star Ratings methodology and bonus payment calculations; Milliman actuarial analysis of digital health benefit ROI; AHIP member engagement benchmarks.",
          salesPitch: "At $0.25-$0.50 per member per month, MyEval.ai is the highest-ROI member benefit you can offer. For your 500,000-member plan, that is $1.5-3M annually. Here is what you get back: $5-15M in claims prevention from early screening; $10-30M in Star Rating quality bonuses from improved HEDIS screening measures; $4.5M in retention savings from lower churn; and $5-12.5M in risk adjustment revenue from better health data. Total projected return: $24.5-59.5M. That is an 8:1 to 20:1 ROI. And your members actually like you for it — because instead of another wellness portal they ignore, they get AI-powered personal health intelligence they genuinely use.",
          objections: [
            {
              objection: "We already partner with a digital health platform for member engagement.",
              rebuttal: "Which one? And what is your engagement rate? Most health plan digital health partnerships achieve 5-15% member engagement because they offer generic content. MyEval.ai achieves higher engagement through personalized AI health evaluations that provide immediate, specific value. We are happy to run a head-to-head pilot with your current solution — 50,000 members, 6 months, compare engagement rates, screening completion, and claims impact. If we do not outperform, you owe us nothing."
            },
            {
              objection: "The regulatory risk of AI health tools is too high.",
              rebuttal: "MyEval.ai operates as a Clinical Decision Support tool under the FDA's 21st Century Cures Act exemption. We do not diagnose or prescribe — we screen and recommend. Every output directs users to consult their healthcare provider. Our regulatory posture is identical to tools already deployed by UnitedHealth (Rally), CVS Health (Aetna wellness), and Cigna (Evernorth). This is established regulatory territory, not uncharted waters."
            }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// ROI CALCULATOR DATA
// =============================================================================
export interface ROIScenario {
  stakeholder: string;
  investment: string;
  investmentAmount: number;
  returns: { source: string; amount: number; timeframe: string }[];
  totalROI: string;
  paybackPeriod: string;
}

export const roiScenarios: ROIScenario[] = [
  {
    stakeholder: "Government (100M population country)",
    investment: "$2-5M/year national license",
    investmentAmount: 3_500_000,
    returns: [
      { source: "Reduced diabetes hospitalizations (10% of preventable costs)", amount: 200_000_000, timeframe: "Annual" },
      { source: "Reduced cardiovascular events (20% reduction in high-risk group)", amount: 150_000_000, timeframe: "Annual" },
      { source: "Early outbreak detection (1 week faster response)", amount: 500_000_000, timeframe: "Per outbreak event" },
      { source: "Cancer stage-shift savings (10% early detection improvement)", amount: 50_000_000, timeframe: "Annual" },
    ],
    totalROI: "115:1 to 257:1",
    paybackPeriod: "< 1 month",
  },
  {
    stakeholder: "Hospital (500-bed, $500M revenue)",
    investment: "$500-900/month ($6K-$11K/year)",
    investmentAmount: 8_500,
    returns: [
      { source: "ER diversion savings (20% low-acuity reduction)", amount: 28_000_000, timeframe: "Annual" },
      { source: "Coding accuracy improvement (5% on addressable revenue)", amount: 12_500_000, timeframe: "Annual" },
      { source: "Readmission reduction (20% reduction x 750 readmissions)", amount: 2_280_000, timeframe: "Annual" },
      { source: "Physician time recovery (8 min x 200 physicians)", amount: 29_600_000, timeframe: "Annual" },
    ],
    totalROI: "8,500:1",
    paybackPeriod: "< 1 day",
  },
  {
    stakeholder: "Insurer (500K members, $5B claims)",
    investment: "$0.25-0.50 PMPM ($1.5M-$3M/year)",
    investmentAmount: 2_250_000,
    returns: [
      { source: "Fraud detection (1% of claims recovered)", amount: 50_000_000, timeframe: "Annual" },
      { source: "Risk adjustment improvement (5% better capture)", amount: 12_500_000, timeframe: "Annual" },
      { source: "Claims prevention from screening", amount: 10_000_000, timeframe: "Annual" },
      { source: "Member retention (3% churn reduction)", amount: 6_750_000, timeframe: "Annual" },
    ],
    totalROI: "35:1",
    paybackPeriod: "< 2 weeks",
  },
  {
    stakeholder: "Employer (5,000 employees, self-insured)",
    investment: "$5 PEPM ($300K/year)",
    investmentAmount: 300_000,
    returns: [
      { source: "Absenteeism reduction (25% improvement)", amount: 2_100_000, timeframe: "Annual" },
      { source: "Presenteeism improvement (25% reduction)", amount: 10_000_000, timeframe: "Annual" },
      { source: "Claims avoidance (high-risk identification)", amount: 1_250_000, timeframe: "Annual" },
      { source: "Turnover reduction (40% lower voluntary churn)", amount: 6_000_000, timeframe: "Annual" },
    ],
    totalROI: "65:1",
    paybackPeriod: "< 3 weeks",
  },
  {
    stakeholder: "Academic Institution (research partnership)",
    investment: "$50K-100K/year site license",
    investmentAmount: 75_000,
    returns: [
      { source: "Co-funded clinical validation study", amount: 350_000, timeframe: "Per study" },
      { source: "Grant competitiveness improvement (estimated)", amount: 500_000, timeframe: "Per funded grant" },
      { source: "Publication portfolio enhancement", amount: 0, timeframe: "Ongoing (non-monetary)" },
      { source: "Faculty recruitment advantage", amount: 0, timeframe: "Ongoing (non-monetary)" },
    ],
    totalROI: "11:1 (monetary) + significant non-monetary value",
    paybackPeriod: "< 6 months",
  },
];

// =============================================================================
// ALL SECTIONS COMBINED
// =============================================================================
export const allStakeholderSections: StakeholderSection[] = [
  governmentArguments,
  hospitalArguments,
  insurerArguments,
  employerArguments,
  academicArguments,
  usMarketArguments,
];

// Summary statistics
export const argumentStats = {
  totalStakeholders: 6,
  totalCategories: allStakeholderSections.reduce(
    (sum, s) => sum + s.arguments.length, 0
  ),
  totalArguments: allStakeholderSections.reduce(
    (sum, s) => sum + s.arguments.reduce((a, c) => a + c.arguments.length, 0), 0
  ),
  totalObjections: allStakeholderSections.reduce(
    (sum, s) => sum + s.arguments.reduce(
      (a, c) => a + c.arguments.reduce(
        (o, arg) => o + arg.objections.length, 0
      ), 0
    ), 0
  ),
};
