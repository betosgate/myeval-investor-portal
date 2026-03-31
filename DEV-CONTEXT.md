# MyEval.ai Investor Portal + Philippines Report — Development Context

> **Read this file if resuming from a crash or new terminal session.**
> Last updated: 2026-03-31

## Quick Start
```bash
cd C:/Users/Admin/OneDrive/Documents/ClaudeProjects/MyEvalBusiness/myeval-investor-portal
npm run dev          # localhost:3000
npm run build        # production build (MUST pass before deploy)
vercel --yes --prod  # deploy to Vercel production
git add -A && git commit -m "msg" && git push origin master
```

## Live URLs
- **Landing Page:** https://myeval-investor-portal.vercel.app
- **Business Plan:** https://myeval-investor-portal.vercel.app/dashboard
- **Philippines Report:** https://myeval-investor-portal.vercel.app/philippines-report
- **Old single-page PH overview:** https://myeval-investor-portal.vercel.app/philippines-economic-overview
- **GitHub:** https://github.com/betosgate/myeval-investor-portal
- **MyEval.ai Product:** https://my-eval-ai-nextjs.vercel.app/features/walkthrough

## THREE NAVIGATED EXPERIENCES

### 1. Landing Page (`/`)
- Full-screen, no sidebar
- Two cards: Business Plan (same tab) + Software Platform (NEW TAB)
- Medical white theme (teal/blue)

### 2. Business Plan Dashboard (`/dashboard/*`)
- Layout: `src/app/dashboard/layout.tsx` (includes Sidebar)
- Sidebar: `src/components/sidebar.tsx`
- 30+ pages covering $50M expansion across 9 countries + US

### 3. Philippines Report (`/philippines-report/*`)
- Layout: `src/app/philippines-report/layout.tsx`
- Sidebar: `src/app/philippines-report/sidebar.tsx`
- 14 sections, all populated
- **Branding: "Presented by Tom Langland / Developed by Beto Paredes" — NO MyEval.ai**
- Audience: Senior Philippine government officials, potential next president

## Architecture
- Next.js 16.2.1, TypeScript, Tailwind CSS, shadcn/ui (medical white theme)
- Root layout: `src/app/layout.tsx` (no sidebar — landing page)
- Dashboard layout: `src/app/dashboard/layout.tsx` (with main sidebar)
- Philippines layout: `src/app/philippines-report/layout.tsx` (with PH sidebar)
- Data: `src/lib/data/*.ts` (static TypeScript, no database)
- Charts: `src/components/charts.tsx` + `src/app/philippines-economic-overview/charts.tsx`

## Key People
- **Beto Paredes** = CVO, founder
- **Tom Langland** = Global Consultant (presents Philippines report)
- **Operations Director** = first hire, manages strategists

## Data Files
| File | Content |
|------|---------|
| countries.ts | 9 country profiles (including Philippines) |
| financials.ts | 24 months, 9 revenue streams, fund allocation |
| staffing.ts | Central office, strategists, travel directors |
| integrations.ts | 18 health system APIs |
| ground-ops.ts | 8 countries ops + outreach sequences |
| value-propositions.ts | Stakeholder argument frameworks |
| operational-costs.ts | Travel, equipment, software, cloud, insurance, compliance |
| org-infrastructure.ts | Timeline phases, 14 role definitions |
| humanitarian.ts | SDG alignments, health impacts, eligible funds |
| philippines-economy.ts | Macro indicators, sectors, healthcare, challenges |
| philippines-stats.ts | Detailed statistical series for charts |

## Philippines Report Pages (all at /philippines-report/*)
| Route | Status | Content |
|-------|--------|---------|
| / (exec brief) | COMPLETE | Stats, thesis, section grid, Tom/Beto footer |
| /macro-economy | COMPLETE | GDP, inflation, credit, ASEAN comparison |
| /sectors | COMPLETE | 10 sectors with challenges/opportunities |
| /healthcare | DEEP | PhilHealth fraud, BARMM provinces, AI costs, brain drain, mental health |
| /digital-economy | COMPLETE | GCash, BPO, e-commerce, fintech, data centers |
| /infrastructure | COMPLETE | Traffic, flagship projects, power, connectivity |
| /ofw-economy | COMPLETE | Remittances, destinations, social cost |
| /challenges | DEEP | 5 corruption cases + 14-point anti-fraud framework |
| /brain-drain | COMPLETE | 6 solutions |
| /climate-resilience | COMPLETE | Typhoons, sea level, insurance, parametric |
| /geopolitics | COMPLETE | SCS, US alliance, BARMM, China, politics |
| /transformation-models | COMPLETE | 7 national models with reforms and projections |
| /policy-recommendations | COMPLETE | 10 presidential policies, first 100 days, SWF as 60/40 |
| /investment-opportunities | COMPLETE | Top 10 ranked |

## Unbuilt Research (for future sessions)
20+ agent research reports with deeper data available. Key uncoded:
- Infrastructure execution rates, BPO job risk, agriculture Vietnam playbook
- Energy rate breakdown, conglomerate families, SWF governance details
- OFW corridor costs, PISA Vietnam comparison, classroom deficits by region
- 10+ additional transformation models, carbon pricing details
- All stored as agent output files in temp directory

## Memory Files
`C:/Users/Admin/.claude/projects/C--Users-Admin-OneDrive-Documents-ClaudeProjects-MyEvalBusiness/memory/`
- MEMORY.md (index — 7 entries)
- project_myeval_investor_portal.md (complete project state)
- user_profile.md (Beto's profile)
- feedback_preferences.md (working style)
- project_leadership_structure.md (CVO → OD → strategists)
- feedback_dark_theme.md (original dark theme for rollback)
- project_philippines_overview.md (Philippines report state)
- feedback_philippines_report.md (direction and quality bar)
