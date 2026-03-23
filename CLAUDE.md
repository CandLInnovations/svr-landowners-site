# SVR Community — CLAUDE.md

## Project Purpose
Civic pitch website for Sierra Verde Ranch Property Owners 
Association (SVR POA), a 400+ lot rural ranch community in 
Northern Arizona. The site supports a campaign to replace 
the paid management company (AZ Community First) with 
community self-management using a purpose-built platform.

The May 16, 2026 annual meeting is the deadline. Two things 
happen at that meeting:
1. CC&R renewal vote — we recommend owners vote to KEEP the 
   CC&Rs (do NOT dissolve the POA)
2. Board election — electing new board members who will fire 
   the management company

## The Core Message
The management contract costs $28,210/year on paper.
The true management ecosystem cost in 2025 was $141,050 —
48% of all assessment income. The POA ran a $29,610 net 
operating loss. We can do better with community-run 
transparent self-management.

## Audience
Rural Arizona landowners. Independent-minded, skeptical of 
institutions, many off-grid. Plain-spoken direct language. 
No corporate tone, no legalese. Write like a neighbor, 
not a lawyer.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Vercel deployment
- Turbopack for dev
- No React Compiler
- No database (static site for now)

## Design System

### Aesthetic
Editorial broadsheet meets Arizona high desert. Strong 
typography, authoritative but community-owned. Feels built 
by someone who lives there.

### Fonts (Google Fonts)
- Headlines: Playfair Display (700, 900, italic 700)
- Body: Lora (400, 600, italic 400)  
- Numbers/data: JetBrains Mono (400, 500)

### Colors (tailwind.config.ts)
```
ink:        '#1c1a16'
cream:      '#f4efe4'
parchment:  '#ede7d5'
forest:     '#1e3a28'
rust:       '#b84a22'
gold:       '#c9973a'
muted:      '#6b6050'
border:     '#c8bfaa'
danger:     '#8b1e1e'
```

### Tone Rules
- Never use HOA industry language ("community standards", 
  "residents", "amenities")
- Always say "landowners" not "homeowners" or "residents"
- Numbers should be prominent and impossible to miss
- Caution/warning sections should look like field notices, 
  not legal disclaimers

## File Structure
```
app/
  page.tsx                — Homepage / pitch
  the-numbers/page.tsx   — Full financial breakdown
  the-plan/page.tsx      — Self-management platform overview
  faq/page.tsx           — Answers FB misinformation directly
  vote/page.tsx          — How to vote, meeting details
  layout.tsx
components/
  Nav.tsx
  CountdownTimer.tsx     — Counts down to May 16 2026
  CostBreakdown.tsx      — $28K vs $141K visual
  FinancialChart.tsx
lib/
  financialData.ts       — All 2025 budget data, typed
public/
  docs/                  — Downloadable PDFs
```

## Key Facts (cite these accurately)
- Management contract (8510): $27,675 actual 2025
- True management ecosystem cost: $141,050
- Net operating loss 2025: -$29,610
- Annual assessment income: $291,308 collected
- Reserve balance: $184,916
- Operating cash: $147,968
- Lien fees overrun: $34,000 actual vs $3,200 budgeted
- Legal-collections: $16,288
- Demand letters: $22,187
- Collections spent vs recovered net loss: -$36,783
- CC&Rs recorded: March 28, 1996
- CC&Rs renew every 10 years unless 66.67% acreage vote 
  to dissolve
- Votes are weighted by ACRE, not per person
- Developer (Yavapai 10,000 LLC) holds ZERO parcels — 
  confirmed via county GIS
- Board: 7–9 members, 3-year terms
- Board MAY (not SHALL) employ a manager — firing the 
  management company requires only a board majority vote
- Quorum: 50 members holding 1,000+ acre-votes

## What NOT to Build (yet)
- No authentication
- No payment processing  
- No database
- No homeowner portal
- Those come after the election in the full platform build

## Source Documents Available
- 3 months of financial statements (Dec 2025, Jan 2026, 
  Feb 2026)
- CC&Rs with amendment (1996, amended 1996/1997)
- Amended and Restated Bylaws (adopted Sept 17, 2022)
- Articles of Incorporation (1996)
- Standard Operating Procedures (revised March 2025)