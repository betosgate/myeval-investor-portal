# MyEval.ai Investor Portal — Development Context

> **Read this file if resuming from a crash or new terminal session.**
> Last updated: 2026-03-30 (end of major build session)

## Quick Start
```bash
cd C:/Users/Admin/OneDrive/Documents/ClaudeProjects/MyEvalBusiness/myeval-investor-portal
npm run dev          # localhost:3000
npm run build        # production build (MUST pass before deploy)
vercel --yes --prod  # deploy to Vercel production
git add -A && git commit -m "msg" && git push origin master
```

## Live URLs
- **Production:** https://myeval-investor-portal.vercel.app
- **GitHub:** https://github.com/betosgate/myeval-investor-portal
- **MyEval.ai Product:** https://my-eval-ai-nextjs.vercel.app/features/walkthrough

## URL Structure
- `/` — Full-screen investor LANDING PAGE (no sidebar). Two big cards:
  - "Business Plan" → `/dashboard` (same tab)
  - "Software Platform" → MyEval.ai walkthrough (**opens in new tab**)
- `/dashboard/*` — All 28 business plan pages with sidebar navigation

## Architecture
- Next.js 16.2.1, TypeScript, Tailwind CSS, shadcn/ui (dark mode, new-york)
- Landing page: `src/app/page.tsx` (no layout wrapper — full screen)
- Dashboard layout: `src/app/dashboard/layout.tsx` (includes Sidebar)
- All dashboard pages: `src/app/dashboard/*/page.tsx`
- Data: `src/lib/data/*.ts` (static TypeScript, no database)
- Charts: `src/components/charts.tsx` (client component)
- Sidebar: `src/components/sidebar.tsx` (client component)
- Metric cards: `src/components/metric-card.tsx` (server component)

## Key Leadership (confirmed by user)
- **Beto Paredes** = CVO (Chief Visionary Officer), founder
- **Operations Director** = first hire under Beto, manages strategists, hires initial team
- **April 2026** = fund closes, strategists + OD start
- **August 2026** = official launch, executive team in seats
- **2 Ambassador-Directors** = PITCH ONLY. Never manage, hire, negotiate, or follow up.

## All Pages (31)
| Route | Content |
|-------|---------|
| `/` | Landing page with 2 cards (Business Plan + Software Platform) |
| `/dashboard` | Executive summary, key metrics, charts |
| `/dashboard/countries` | 8 countries overview |
| `/dashboard/countries/[slug]` x8 | Deep-dive per country |
| `/dashboard/revenue` | 9 revenue streams |
| `/dashboard/financials` | 24-month P&L, cash flow, KPIs |
| `/dashboard/staffing` | 4 strategists, 2 directors, full org chart |
| `/dashboard/org-infrastructure` | April-August build sequence, org charts |
| `/dashboard/role-definitions` | 14 roles with full JDs, communication flows |
| `/dashboard/timeline` | 5-phase launch timeline |
| `/dashboard/integration-strategy` | 18 health system API integrations |
| `/dashboard/ground-operations` | 8 countries: offices, legal, banking, hiring |
| `/dashboard/outreach-playbook` | 32 targets with pitches and domino effects |
| `/dashboard/value-propositions` | 14+ arguments for 5 stakeholder types |
| `/dashboard/execution-protocol` | Ambassador model, RACI, comms cadence |
| `/dashboard/operational-costs` | Travel, equipment, software, cloud, insurance |
| `/dashboard/competitive-analysis` | 6 competitors, 6 moats, 4 failure lessons |
| `/dashboard/risk-matrix` | 12 risks with mitigation |
| `/dashboard/governance` | Board, IP, Series B, KPIs |
| `/dashboard/us-market` | WebMD alternative strategy |
| `/dashboard/fund-allocation` | $50M breakdown |
| `/dashboard/why-myeval` | Platform capabilities |

## Data Files
| File | Lines | Content |
|------|-------|---------|
| countries.ts | 693 | 8 country profiles |
| financials.ts | 172 | 24 months, 9 streams, fund allocation |
| staffing.ts | 229 | Central office, strategists, directors |
| integrations.ts | 436 | 18 health system APIs |
| ground-ops.ts | 511 | 8 countries ops + outreach sequences |
| value-propositions.ts | 779 | Stakeholder argument frameworks |
| operational-costs.ts | 1000+ | Travel, equipment, software, cloud, insurance, compliance |
| org-infrastructure.ts | 600+ | Timeline phases, 14 role definitions |

## Adding a New Page
1. Create `src/app/dashboard/new-page/page.tsx`
2. Create data file if needed: `src/lib/data/newdata.ts`
3. Add to sidebar: `src/components/sidebar.tsx` (import icon, add nav item with `/dashboard/` prefix)
4. `npx next build` → verify
5. `git add -A && git commit && git push && vercel --yes --prod`

## Research Reports (not yet coded into pages)
Saved as markdown files in project directory:
- Strategic_Gaps_Complete.md
- LATAM_Market_Entry_Research.md
- MyEval_Financial_Model.md + Monthly_Projections_Detail.md
- staffing-operations-plan.md
- Competitive threats (50+ competitors across 9 markets)
- Regulatory deep dive (SaMD, privacy, AI regs — all 9 countries)

## Memory Files
`C:/Users/Admin/.claude/projects/C--Users-Admin-OneDrive-Documents-ClaudeProjects-MyEvalBusiness/memory/`
- MEMORY.md (index)
- project_myeval_investor_portal.md (full project state)
- user_profile.md (Beto's preferences)
- feedback_preferences.md (working style)
- project_leadership_structure.md (CVO → OD → strategists)
