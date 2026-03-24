import { financialHistory } from "@/lib/financialData";

const yr2025 = financialHistory[3];

// 2025 budget figures (from approved budget + CLAUDE.md key facts)
const rows = [
  {
    label: "Management contract (AZ Community First)",
    budgeted: 28210,
    actual: yr2025.managementContract,
  },
  {
    label: "Lien fees",
    budgeted: 3200,
    actual: yr2025.lienFees,
  },
  {
    label: "Legal — collections",
    budgeted: 0,
    actual: yr2025.legalCollections,
  },
  {
    label: "Late notices / demand letters",
    budgeted: 0,
    actual: yr2025.lateNotices,
  },
];

const MAX = 40000;

export default function FinancialChart() {
  return (
    <div className="border border-border rounded bg-parchment p-6 space-y-5">
      <h2 className="font-headline font-bold text-2xl text-ink">
        Budget vs. actual — management spend
      </h2>

      <div className="space-y-5">
        {rows.map(({ label, budgeted, actual }) => {
          const over = actual > budgeted;
          return (
            <div key={label}>
              <p className="font-body text-sm text-ink mb-1">{label}</p>
              <div className="space-y-1">
                {/* Budgeted bar */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted w-20 text-right shrink-0">
                    budgeted
                  </span>
                  <div className="flex-1 h-4 bg-border/40 rounded overflow-hidden">
                    <div
                      className="h-full bg-gold/70 rounded"
                      style={{ width: `${(budgeted / MAX) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-muted w-20 shrink-0">
                    ${budgeted.toLocaleString()}
                  </span>
                </div>
                {/* Actual bar */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted w-20 text-right shrink-0">
                    actual
                  </span>
                  <div className="flex-1 h-4 bg-border/40 rounded overflow-hidden">
                    <div
                      className={`h-full rounded ${over ? "bg-rust" : "bg-forest/70"}`}
                      style={{ width: `${Math.min((actual / MAX) * 100, 100)}%` }}
                    />
                  </div>
                  <span
                    className={`font-mono text-xs w-20 shrink-0 ${over ? "text-rust font-medium" : "text-muted"}`}
                  >
                    ${actual.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
