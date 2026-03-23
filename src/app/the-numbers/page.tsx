import type { Metadata } from "next";
import { financialData } from "@/lib/financialData";
import FinancialChart from "@/components/FinancialChart";
import CostBreakdown from "@/components/CostBreakdown";

export const metadata: Metadata = {
  title: "The Numbers — SVR Community",
  description:
    "Full financial breakdown of management costs at Sierra Verde Ranch POA.",
};

const { lineItems, collectionsNetLoss, netOperatingLoss, assessmentIncome } =
  financialData;

export default function TheNumbersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <header className="border-b border-border pb-8 space-y-3">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          2025 actual financials
        </p>
        <h1 className="font-headline font-black text-4xl text-ink">
          The Numbers
        </h1>
        <p className="font-body text-lg text-muted max-w-2xl leading-relaxed">
          These are real numbers from the 2025 financial statements — not
          estimates, not projections. The management company quotes $28,210. The
          true cost to this community is $141,050.
        </p>
      </header>

      {/* Summary stats */}
      <section className="grid sm:grid-cols-3 gap-4">
        {[
          {
            label: "Assessment income collected",
            value: `$${assessmentIncome.toLocaleString()}`,
            note: "2025 actual",
            color: "text-ink",
          },
          {
            label: "Management ecosystem cost",
            value: `$${financialData.managementEcosystemCost.toLocaleString()}`,
            note: "48% of income",
            color: "text-rust",
          },
          {
            label: "Net operating loss",
            value: `-$${Math.abs(netOperatingLoss).toLocaleString()}`,
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

      {/* Line item detail */}
      <section className="border border-border rounded bg-parchment overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-headline font-bold text-xl text-ink">
            Line-by-line
          </h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-parchment/60 border-b border-border">
            <tr>
              <th className="text-left px-6 py-3 font-body text-muted font-normal">
                Item
              </th>
              <th className="text-right px-6 py-3 font-mono text-muted font-normal">
                Budgeted
              </th>
              <th className="text-right px-6 py-3 font-mono text-muted font-normal">
                Actual
              </th>
              <th className="text-right px-6 py-3 font-mono text-muted font-normal">
                Over/Under
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {Object.values(lineItems).map((item) => {
              const diff = item.actual - item.budgeted;
              return (
                <tr key={item.label} className="hover:bg-border/20">
                  <td className="px-6 py-3 font-body text-ink">{item.label}</td>
                  <td className="px-6 py-3 font-mono text-right text-muted">
                    ${item.budgeted.toLocaleString()}
                  </td>
                  <td className="px-6 py-3 font-mono text-right text-ink">
                    ${item.actual.toLocaleString()}
                  </td>
                  <td
                    className={`px-6 py-3 font-mono text-right ${diff > 0 ? "text-rust font-medium" : "text-muted"}`}
                  >
                    {diff > 0 ? "+" : ""}${diff.toLocaleString()}
                  </td>
                </tr>
              );
            })}
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
          in 2025. Demand letters ($22,187), liens ($34,000), and legal fees
          ($16,288) cost far more than what was recovered. This is not
          collections management — it&rsquo;s fee generation.
        </p>
      </section>
    </div>
  );
}
