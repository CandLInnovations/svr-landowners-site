import { currentState, financialHistory } from "@/lib/financialData";

const yr2025 = financialHistory[3];
const CONTRACT = currentState.managementContract;
const ECOSYSTEM = currentState.managementEcosystemCost2025;
const INCOME = yr2025.assessmentIncome;
const ecosystemPct = currentState.managementEcosystemPct;
const contractPct = Math.round((CONTRACT / INCOME) * 100);

export default function CostBreakdown() {
  return (
    <div className="border border-border rounded bg-parchment p-6 space-y-6">
      <h2 className="font-headline font-bold text-2xl text-ink">
        What management really costs us
      </h2>

      <div className="space-y-4">
        {/* Contract line */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <span className="font-body text-sm text-muted">
              Contract price (what they quote)
            </span>
            <span className="font-mono font-medium text-ink">
              ${CONTRACT.toLocaleString()}
            </span>
          </div>
          <div className="h-3 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gold rounded-full"
              style={{ width: `${contractPct}%` }}
            />
          </div>
          <div className="text-right font-mono text-xs text-muted mt-0.5">
            {contractPct}% of income
          </div>
        </div>

        {/* Ecosystem line */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <span className="font-body text-sm text-muted">
              True cost (contract + all management-driven spend)
            </span>
            <span className="font-mono font-bold text-rust text-lg">
              ${ECOSYSTEM.toLocaleString()}
            </span>
          </div>
          <div className="h-3 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-rust rounded-full"
              style={{ width: `${ecosystemPct}%` }}
            />
          </div>
          <div className="text-right font-mono text-xs text-rust mt-0.5 font-medium">
            {ecosystemPct}% of income
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <p className="font-body text-sm text-muted">
          Annual assessment income:{" "}
          <span className="font-mono font-medium text-ink">
            ${INCOME.toLocaleString()}
          </span>
        </p>
        <p className="font-body text-sm text-muted mt-1">
          2025 net operating loss:{" "}
          <span className="font-mono font-medium text-danger">
            ${Math.abs(currentState.netOperatingLoss2025).toLocaleString()} deficit
          </span>
        </p>
      </div>
    </div>
  );
}
