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

      {/* Flagged anomalies */}
      <section className="border border-border rounded bg-parchment overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-headline font-bold text-xl text-ink">
            Unanswered questions
          </h2>
          <p className="font-body text-sm text-muted mt-1">
            These items appear in the financial records. No explanation has been provided to landowners.
          </p>
        </div>
        <ul className="divide-y divide-border">
          {trends.unresolved.map((item) => (
            <li key={item} className="px-6 py-3 flex gap-3 items-start">
              <span className="font-mono text-rust mt-0.5 shrink-0">?</span>
              <span className="font-body text-sm text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
