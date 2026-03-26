import type { Metadata } from "next";
import { financialHistory, currentState, trends } from "@/lib/financialData";
import FinancialChart from "@/components/FinancialChart";
import CostBreakdown from "@/components/CostBreakdown";
import TrendsChart from "@/components/TrendsChart";

export const metadata: Metadata = {
  title: "The Numbers — SVR Community",
  description:
    "Full financial breakdown of management costs at Sierra Verde Ranch POA.",
};

const yr2025 = financialHistory[3];

// Collections paradox: what we spent vs. what we recovered in 2025
const collectionsSpent =
  yr2025.lateNotices + yr2025.lienFees + yr2025.collections + yr2025.legalCollections;
const collectionsRecovered =
  yr2025.revenue.find((r) => r.name === "Late Payment Charges")!.actual +
  yr2025.revenue.find((r) => r.name === "Demand Charges")!.actual +
  yr2025.revenue.find((r) => r.name === "Lien Charges")!.actual +
  yr2025.revenue.find((r) => r.name === "Collection Costs Recovered")!.actual +
  yr2025.revenue.find((r) => r.name === "Small Claims Charges")!.actual;
const collectionsNetLoss = collectionsRecovered - collectionsSpent;

export default function TheNumbersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <header className="border-b border-border pb-8 space-y-3">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          2022 – 2025 actual financials
        </p>
        <h1 className="font-headline font-black text-4xl text-ink">
          The Numbers
        </h1>
        <p className="font-body text-lg text-muted max-w-2xl leading-relaxed">
          These are real numbers from CPA-compiled annual statements — not
          estimates, not projections. The management company quotes $28,210. The
          true cost to this community is $141,050.
        </p>
      </header>

      {/* Summary stats */}
      <section className="grid sm:grid-cols-3 gap-4">
        {[
          {
            label: "Assessment income collected",
            value: `$${yr2025.assessmentIncome.toLocaleString()}`,
            note: "2025 actual",
            color: "text-ink",
          },
          {
            label: "Management ecosystem cost",
            value: `$${currentState.managementEcosystemCost2025.toLocaleString()}`,
            note: "48% of income",
            color: "text-rust",
          },
          {
            label: "Net operating loss",
            value: `-$${Math.abs(currentState.netOperatingLoss2025).toLocaleString()}`,
            note: "We spent more than we collected",
            color: "text-danger",
          },
        ].map(({ label, value, note, color }) => (
          <div
            key={label}
            className="border border-border rounded bg-parchment p-5 space-y-1"
          >
            <p className="font-body text-xs text-muted uppercase tracking-wide">
              {label}
            </p>
            <p className={`font-mono text-3xl font-medium ${color}`}>{value}</p>
            <p className="font-mono text-xs text-muted">{note}</p>
          </div>
        ))}
      </section>

      <CostBreakdown />

      <FinancialChart />

      {/* 4-year trends chart */}
      <TrendsChart />

      {/* Salary growth callout */}
      <section className="border border-border rounded bg-parchment overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-headline font-bold text-xl text-ink">
            Salaries — common grounds (2022 – 2025)
          </h2>
          <p className="font-body text-sm text-muted mt-1">
            The board approved every increase. No public breakdown was provided to landowners.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-parchment/60 border-b border-border">
              <tr>
                <th className="text-left px-6 py-3 font-mono text-xs text-muted font-normal uppercase tracking-wide">Year</th>
                <th className="text-left px-6 py-3 font-mono text-xs text-muted font-normal uppercase tracking-wide">Manager</th>
                <th className="text-right px-6 py-3 font-mono text-xs text-muted font-normal uppercase tracking-wide">Salaries</th>
                <th className="text-right px-6 py-3 font-mono text-xs text-muted font-normal uppercase tracking-wide">YoY change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {([2022, 2023, 2024, 2025] as const).map((year, i) => {
                const salary = trends.salariesGrowth[year];
                const prev = i > 0 ? trends.salariesGrowth[([2022, 2023, 2024, 2025] as const)[i - 1]] : null;
                const change = prev ? salary - prev : null;
                const pct = prev ? Math.round(((salary - prev) / prev) * 100) : null;
                return (
                  <tr key={year} className="hover:bg-border/20">
                    <td className="px-6 py-3 font-mono text-ink">{year}</td>
                    <td className="px-6 py-3 font-body text-sm text-muted">
                      {financialHistory.find(y => y.year === year)?.manager}
                    </td>
                    <td className="px-6 py-3 font-mono text-right font-medium text-ink">
                      ${salary.toLocaleString()}
                    </td>
                    <td className="px-6 py-3 font-mono text-right">
                      {change !== null ? (
                        <span className="text-rust font-medium">
                          +${change.toLocaleString()} (+{pct}%)
                        </span>
                      ) : (
                        <span className="text-muted">baseline</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="border-t border-border bg-parchment/40">
              <tr>
                <td colSpan={2} className="px-6 py-3 font-mono text-xs text-muted">
                  Total growth 2022 → 2025
                </td>
                <td className="px-6 py-3 font-mono text-right font-medium text-ink">
                  ${trends.salariesGrowth[2025].toLocaleString()}
                </td>
                <td className="px-6 py-3 font-mono text-right text-rust font-medium">
                  +{trends.salariesGrowth.pctGrowthTotal}%
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* 2025 expense detail */}
      <section className="border border-border rounded bg-parchment overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-headline font-bold text-xl text-ink">
            2025 line-by-line
          </h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-parchment/60 border-b border-border">
            <tr>
              <th className="text-left px-6 py-3 font-body text-muted font-normal">
                Item
              </th>
              <th className="text-left px-6 py-3 font-mono text-muted font-normal hidden sm:table-cell">
                Type
              </th>
              <th className="text-right px-6 py-3 font-mono text-muted font-normal">
                Actual
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {yr2025.expenses.map((item) => (
              <tr key={item.name} className="hover:bg-border/20">
                <td className="px-6 py-3 font-body text-ink">{item.name}</td>
                <td className="px-6 py-3 font-mono text-xs text-muted hidden sm:table-cell">
                  {item.managementType === "base" && (
                    <span className="bg-rust/10 text-rust px-2 py-0.5 rounded">base contract</span>
                  )}
                  {item.managementType === "addon" && (
                    <span className="bg-gold/10 text-gold px-2 py-0.5 rounded">add-on fee</span>
                  )}
                  {item.managementType === "incentive" && (
                    <span className="bg-danger/10 text-danger px-2 py-0.5 rounded">incentive-driven</span>
                  )}
                </td>
                <td className={`px-6 py-3 font-mono text-right ${item.managementType ? "text-rust font-medium" : "text-muted"}`}>
                  ${item.actual.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Collections net loss callout */}
      <section className="border-l-4 border-danger bg-danger/5 rounded-r p-6 space-y-2">
        <p className="font-mono text-xs text-danger uppercase tracking-widest">
          Field notice
        </p>
        <h3 className="font-headline font-bold text-xl text-ink">
          Collections: we spent more than we recovered
        </h3>
        <p className="font-body text-muted leading-relaxed">
          The lien and collections process cost landowners{" "}
          <span className="font-mono font-medium text-danger">
            ${Math.abs(collectionsNetLoss).toLocaleString()} net loss
          </span>{" "}
          in 2025. Demand letters ($
          {yr2025.lateNotices.toLocaleString()}), liens ($
          {yr2025.lienFees.toLocaleString()}), and legal fees ($
          {yr2025.legalCollections.toLocaleString()}) cost far more than what
          was recovered. This is not collections management — it&rsquo;s fee
          generation.
        </p>
      </section>

      {/* The record — answered */}
      <section className="border border-border rounded bg-parchment overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-headline font-bold text-xl text-ink">
            The record — what we now know
          </h2>
          <p className="font-body text-sm text-muted mt-1">
            These five items appeared in SVR&rsquo;s financial records with no
            public explanation. A review of six years of public board meeting
            minutes — 2020 through 2025 — answers all of them.
          </p>
        </div>
        <div className="divide-y divide-border">
          {[
            {
              question: "2022: $128,928 judgment — what lawsuit?",
              answer: [
                "An owner filed suit against the POA in 2020 over road maintenance decisions and board actions. The court ruled 90% in the POA's favor — but still awarded the owner their legal fees. The POA appealed. The appeal was denied in March 2023.",
                "Total cost of a lawsuit the POA mostly won: approximately $298,000 — $165,260 in the POA's own legal fees, $4,315 in appeal costs, and the $128,927 judgment paid to the opposing party.",
                "The underlying dispute was about road maintenance decisions and governance — with no transparent public record to resolve it. This is the case the platform is built to prevent.",
              ],
            },
            {
              question: "2023: 'Proceeds from Sale' of $20,898 — what POA asset was sold?",
              answer: [
                "The POA owned Parcel #301-24-312 — a piece of land that had been listed for sale since at least early 2021. After multiple price reductions over two years, the board set a final counter-offer of $26,000 at a November 2, 2023 special meeting. Net proceeds after realtor commissions and closing costs: approximately $20,898.",
                "The POA also purchased a separate property during this period — the equipment storage yard (Parcel #301-28-028) — for approximately $35,000 in October 2021, funded from reserves.",
              ],
            },
            {
              question: "2023: Legal-collections hit $52,214 — what drove this?",
              answer: [
                "The primary driver was the $128,927 judgment from the road maintenance lawsuit, paid out in early 2023. Funds had been held in court trust from 2022. Combined with ongoing collections legal work and appeal costs, the spike reflects a legal bill that had been accumulating since 2020 — not a new escalation, but the full cost arriving at once.",
              ],
            },
            {
              question: "2022–2025: Salaries grew 379% — who are the employees?",
              answer: [
                "The salary growth reflects the association building a direct-employed road crew between 2021 and 2023 — transitioning from contractor-dependent road work to employees on association payroll.",
                "Road equipment operators were hired at $22/hour starting in 2023. A separate equipment maintenance role was added in 2022. Additional crew members were added through 2024–2025 as the road program expanded.",
                "The growth itself is not the concern. What was never provided to landowners was a transparent breakdown of who was employed, at what rate, what work they were assigned, and what that produced per dollar spent. The platform's GPS tracking and work order system provides exactly that — automatically, for every hour worked.",
              ],
            },
            {
              question: "Reserve study not updated since 2017 — what are the actual capital needs?",
              answer: [
                "The reserve study gap is a documented choice, not an oversight. The board had reserve study proposals in front of them in January 2022 and voted to remove the item from consideration. It had been tabled twice at the November 2021 meeting before that.",
                "The 2017 study identified over $618,000 in road and well work due at that time. Every budget since — including two consecutive 20% assessment increases in 2022 and 2023 — was set without a current picture of actual infrastructure liabilities.",
                "The reserve fund balance as of the last available records: $184,916. Against a capital obligation that has not been formally assessed in eight years.",
              ],
            },
          ].map(({ question, answer }) => (
            <div key={question} className="px-6 py-5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-mono text-sm text-forest shrink-0 mt-0.5">✓</span>
                <div className="space-y-0.5">
                  <p className="font-mono text-xs text-forest uppercase tracking-wide">
                    Answered
                  </p>
                  <h3 className="font-headline font-bold text-base text-ink leading-snug">
                    {question}
                  </h3>
                </div>
              </div>
              <div className="pl-6 space-y-2 border-l-2 border-forest/20 ml-1">
                {answer.map((paragraph, i) => (
                  <p key={i} className="font-body text-sm text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-border bg-forest/5">
          <p className="font-mono text-xs text-forest uppercase tracking-widest mb-1">
            Source
          </p>
          <p className="font-body text-sm text-muted leading-relaxed">
            SVR POA Open Board Meeting Minutes, January 2020 – December 2025.
            55 meetings reviewed. All findings sourced directly from official
            minutes available to landowners via the FrontSteps portal.
          </p>
        </div>
      </section>

      {/* What opacity costs */}
      <section className="space-y-6">
        <div className="space-y-2 max-w-3xl">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            The cost of opacity
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink">
            What opacity costs — in dollars
          </h2>
          <div className="space-y-3">
            <p className="font-body text-base text-muted leading-relaxed">
              The $298,000 lawsuit is the clearest example in SVR&rsquo;s
              financial record of what happens when there is no verifiable
              documentation of road maintenance decisions and board actions. The
              POA won 90% of that case. It still cost every landowner in this
              community nearly $300,000 — because winning without documentation
              is expensive.
            </p>
            <p className="font-body text-base text-muted leading-relaxed">
              That case is not ancient history. People are threatening to file
              new suits right now, over the same category of issues: road
              maintenance, equipment use, and board decisions made without a
              transparent public record.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="border border-border rounded bg-parchment overflow-hidden">
            <div className="px-5 py-3 border-b border-border">
              <h3 className="font-headline font-bold text-lg text-ink">
                What another lawsuit costs
              </h3>
            </div>
            <div className="px-5 py-4 space-y-3">
              {[
                "Legal fees in the 2020 road maintenance case reached $165,000 before the judgment was even paid. Every dollar came from the same assessment pool that's supposed to pay for roads.",
                "A new lawsuit doesn't fix a road. It pays lawyers, draws down reserves, and makes the operating deficit worse — for every landowner, including the one filing it. The POA's insurance may cover some costs, but premiums increase after claims.",
                "Suing the POA is suing the community you own property in.",
              ].map((p, i) => (
                <p key={i} className="font-body text-sm text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="border border-forest/30 rounded bg-parchment overflow-hidden">
            <div className="px-5 py-3 border-b border-forest/30 bg-forest/5">
              <h3 className="font-headline font-bold text-lg text-ink">
                What the platform prevents
              </h3>
            </div>
            <div className="px-5 py-4 space-y-3">
              {[
                "The road maintenance lawsuit was fundamentally about opacity — no verifiable public record of what maintenance decisions were made, why, or what work was actually done. That gap is what made the dispute impossible to resolve without a court.",
                "GPS logs that generate automatically. Work orders that close only when GPS confirms completion. Board vote records with every member's name on every decision. A public queue showing every request received and every road scheduled.",
                "A landowner reviewing that record before filing suit sees a complete, verifiable history. The ambiguity that litigation exploits doesn't exist.",
                "The platform doesn't just save money on management. It removes the conditions that cost $298,000 in 2020.",
              ].map((p, i) => (
                <p key={i} className="font-body text-sm text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l-4 border-forest bg-forest/5 rounded-r p-6">
          <p className="font-headline font-bold text-xl text-ink leading-relaxed">
            Voting in a new board that implements the platform is not the
            cautious option. It is the fiscally conservative one.{" "}
            <span className="text-forest">
              Transparency is cheaper than litigation. Every time.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
