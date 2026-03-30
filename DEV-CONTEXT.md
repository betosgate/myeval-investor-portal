# MyEval.ai Investor Portal — Development Context

> **Read this file if resuming from a crash or new terminal session.**
> Last updated: 2026-03-30

## Quick Start
```bash
cd C:/Users/Admin/OneDrive/Documents/ClaudeProjects/MyEvalBusiness/myeval-investor-portal
npm run dev    # localhost:3000
npm run build  # production build (must pass before deploy)
vercel --yes --prod  # deploy to production
git add -A && git commit -m "msg" && git push origin master  # save to GitHub
```

## Live URLs
- **Production:** https://myeval-investor-portal.vercel.app
- **GitHub:** https://github.com/betosgate/myeval-investor-portal
- **MyEval.ai Product:** https://my-eval-ai-nextjs.vercel.app/features/walkthrough

## Architecture
- Next.js 16.2.1, TypeScript, Tailwind CSS, shadcn/ui (dark mode, new-york style)
- Recharts for all charts/graphs
- Lucide React for icons
- Geist + Geist Mono fonts
- All data in `src/lib/data/*.ts` — static TypeScript, no database needed
- Pages in `src/app/*/page.tsx` — App Router with file-based routing
- Client components: `src/components/charts.tsx`, `src/components/sidebar.tsx`
- Server components: everything else

## Current Pages (29 static pages)
| Route | Data Source | Content |
|-------|-----------|---------|
| `/` | financials, countries | Executive summary, key metrics, investment thesis |
| `/countries` | countries | All 8 countries overview |
| `/countries/[slug]` x8 | countries | Deep-dive per country |
| `/revenue` | financials | 9 revenue streams |
| `/financials` | financials | 24-month P&L, cash flow, KPIs |
| `/staffing` | staffing | 4 strategists, 2 directors, full org chart |
| `/timeline` | inline | 5-phase launch timeline |
| `/integration-strategy` | integrations | 18 health system API integrations |
| `/ground-operations` | ground-ops | 8 countries: offices, legal, banking, hiring |
| `/outreach-playbook` | ground-ops | 32 sequenced targets with pitches |
| `/value-propositions` | value-propositions | 14+ arguments for 5 stakeholder types |
| `/execution-protocol` | inline | Ambassador model, RACI, communication cadence |
| `/operational-costs` | operational-costs | Travel, equipment, software, cloud, insurance, compliance |
| `/competitive-analysis` | inline | 6 competitors, 6 moats, 4 failure case studies |
| `/risk-matrix` | inline | 12 risks with mitigation |
| `/governance` | inline | Board, IP, Series B, KPIs |
| `/us-market` | financials | WebMD alternative strategy |
| `/fund-allocation` | financials | $50M breakdown |
| `/why-myeval` | inline | Platform capabilities and network effects |

## Data Files
| File | Size | Content |
|------|------|---------|
| countries.ts | 693 lines | 8 country profiles (market data, entry strategy, pricing, partners) |
| financials.ts | 172 lines | 24 months, 9 revenue streams, fund allocation, key metrics |
| staffing.ts | 229 lines | Central office (36 roles), strategists, travel directors, advisory board |
| integrations.ts | 436 lines | 18 health system integrations with tech specs |
| ground-ops.ts | 511 lines | 8 countries: offices, legal, banking, outreach sequences |
| value-propositions.ts | 779 lines | Stakeholder arguments with claims, pitches, objections |
| operational-costs.ts | 1000+ lines | Travel per country, equipment, software, cloud, insurance, compliance |

## Key Design Decision: Ambassador Model
The 2 traveling directors ONLY meet, pitch, and introduce. They NEVER:
- Hire staff, set up entities, negotiate contracts, manage operations
- Follow up after visits — Country Managers own all follow-ups
- RACI matrix on `/execution-protocol` page defines everything

## Adding a New Page
1. Create data in `src/lib/data/newdata.ts` (if needed)
2. Create `src/app/new-page/page.tsx`
3. If needs charts: create `src/app/new-page/name-charts.tsx` with "use client"
4. Add to sidebar: `src/components/sidebar.tsx` (import icon, add nav item)
5. `npx next build` → verify
6. `git add -A && git commit && git push && vercel --yes --prod`

## Unbuilt Research Available
These agent research reports are saved but NOT yet coded into portal pages:
- `Strategic_Gaps_Complete.md` — board governance, IP, exit, support infra, marketing budgets, risks, partnership templates, tech scaling, cultural adaptation, KPI dashboards
- `LATAM_Market_Entry_Research.md` — deep Colombia/Brazil/Argentina/Bolivia analysis
- Competitive threats report — 50+ competitors, per-country threat levels, defensive moats
- Regulatory deep dive — SaMD classification, privacy laws, AI regs for all 9 countries

These could be coded into new pages: `/regulatory`, `/marketing-plan`, `/support-infrastructure`, `/cultural-adaptation`, `/partnership-templates`, `/tech-roadmap`

## Memory
Project memory saved at:
`C:/Users/Admin/.claude/projects/C--Users-Admin-OneDrive-Documents-ClaudeProjects-MyEvalBusiness/memory/`
- project_myeval_investor_portal.md
- user_profile.md
- feedback_preferences.md
