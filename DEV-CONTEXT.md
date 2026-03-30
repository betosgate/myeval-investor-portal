# MyEval.ai Investor Portal — Development Context

> **Read this file if resuming from a crash or new terminal session.**

## Quick Start
```bash
cd C:/Users/Admin/OneDrive/Documents/ClaudeProjects/MyEvalBusiness/myeval-investor-portal
npm run dev    # localhost:3000
npm run build  # production build
vercel --yes --prod  # deploy to production
```

## Live URLs
- **Production:** https://myeval-investor-portal.vercel.app
- **GitHub:** https://github.com/betosgate/myeval-investor-portal
- **MyEval.ai Product:** https://my-eval-ai-nextjs.vercel.app/features/walkthrough

## Architecture
- Next.js 16.2.1, TypeScript, Tailwind, shadcn/ui (dark mode), Recharts
- All data in `src/lib/data/` — static TypeScript files, no database
- Pages in `src/app/` — App Router with file-based routing
- Charts in `src/components/charts.tsx` (client component)
- Sidebar in `src/components/sidebar.tsx` (client component)
- Metric cards in `src/components/metric-card.tsx` (server component)

## Current Pages (21 routes)
| Route | Data File | Status |
|-------|-----------|--------|
| `/` | financials.ts, countries.ts | Complete |
| `/countries` | countries.ts | Complete |
| `/countries/[slug]` x8 | countries.ts | Complete |
| `/revenue` | financials.ts | Complete |
| `/financials` | financials.ts | Complete |
| `/staffing` | staffing.ts | Complete |
| `/timeline` | (inline data) | Complete |
| `/integration-strategy` | integrations.ts | Complete |
| `/ground-operations` | ground-ops.ts | Complete |
| `/outreach-playbook` | ground-ops.ts | Complete |
| `/value-propositions` | value-propositions.ts | Complete |
| `/us-market` | financials.ts | Complete |
| `/fund-allocation` | financials.ts | Complete |
| `/why-myeval` | (inline data) | Complete |

## Pages To Build (Wave 3)
These pages need new data files and page components:
- `/operational-costs` — Travel costs, equipment, communication, insurance, compliance
- `/competitive-analysis` — Per-country competitors, threat levels, defensive moats
- `/regulatory-deep-dive` — SaMD classification, privacy laws, AI regulations per country
- `/governance` — Board structure, IP strategy, exit strategy, Series B prep
- `/risk-matrix` — Top risks with probability/impact/mitigation
- `/kpi-dashboard` — CEO/board/country manager KPIs
- `/support-infrastructure` — 24/7 support model, staffing, tools, costs
- `/marketing-plan` — Per-country marketing budgets and channels

## Data Files
| File | Records | Description |
|------|---------|-------------|
| countries.ts | 8 countries | Full market profiles |
| financials.ts | 24 months + 9 streams | Financial projections |
| staffing.ts | 36 roles + 4 strategists + 2 directors | Org chart |
| integrations.ts | 18 integrations | Health system API strategy |
| ground-ops.ts | 8 countries | Operational details + outreach |
| value-propositions.ts | 14+ arguments | Sales frameworks |

## Adding a New Page
1. Create data file in `src/lib/data/newdata.ts`
2. Create page directory: `src/app/new-page/`
3. Create `page.tsx` (server component) and optional `*-charts.tsx` (client component)
4. Add nav item to `src/components/sidebar.tsx` (import icon from lucide-react)
5. Build: `npx next build`
6. Commit, push, deploy: `git add -A && git commit -m "msg" && git push && vercel --yes --prod`

## Key Research Reports (saved by background agents)
Research output files in temp directory — content has been incorporated into data files:
- Asian markets (Vietnam, India, Bangladesh, Thailand)
- Latin American markets (Colombia, Brazil, Argentina, Bolivia)
- US WebMD alternative strategy
- Staffing & operations plan
- Revenue model & financial projections
- API integration strategy (ABDM, RNDS, SISPRO, etc.)
- Ground operations & outreach playbook
- Stakeholder value propositions

## Wave 3 Research (in progress)
4 agents launched for:
1. Travel costs, equipment, communication, insurance, compliance costs
2. Board governance, IP strategy, exit strategy, support infrastructure, marketing, risks, KPIs
3. Competitive analysis per country + global competitors + defensive moats
4. Regulatory deep dive (SaMD, privacy, AI regs, advertising, telemedicine per country)
