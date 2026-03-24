import { governanceSummary } from "@/lib/meetingData";

function monthsSince(isoDate: string): string {
  const start = new Date(isoDate);
  // Use a fixed reference of March 2026 (current as of this build)
  const ref = new Date("2026-03-24");
  const months =
    (ref.getFullYear() - start.getFullYear()) * 12 +
    (ref.getMonth() - start.getMonth());
  if (months < 12) return `${months} months`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem > 0 ? `${years} yr ${rem} mo` : `${years} year${years > 1 ? "s" : ""}`;
}

function formatSince(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

// Platform fix paired to each structural concern
const platformFixes = [
  // Secretary + Treasurer combined
  "The platform's financial ledger is independently append-only — financial approvals and meeting minutes flow through separate audit trails. One person controlling both is structurally impossible.",
  // Road + Well combined
  "Work orders on the platform are scoped by role. A road work order requires road committee sign-off; a well work order requires well committee sign-off. No single person can approve both chains unilaterally.",
  // Spending authority $5,000 unilateral
  "The platform enforces SVR Bylaws Section 9.2 automatically: any expenditure over $1,000 requires a logged board majority vote before payment is released. Title and role don't override the threshold.",
  // Board reduced from 9 to 7
  "Every board vote — including votes to change board structure — is logged permanently and publicly with each member's name. Landowners see structural self-dealing the moment it happens.",
];

export default function StructuralConcerns() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 max-w-3xl">
        <p className="font-mono text-xs text-rust uppercase tracking-widest">
          Governance structure
        </p>
        <h2 className="font-headline font-black text-3xl text-ink">
          The current structure allows this. The platform prevents it.
        </h2>
        <p className="font-body text-base text-muted leading-relaxed">
          These are not policy failures — they are structural gaps. The same
          gaps exist regardless of who sits on the board. The platform closes
          them by design, not by hoping for better people.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {governanceSummary.structuralConcerns.map((concern, i) => (
          <div
            key={concern.issue}
            className="border border-border rounded bg-parchment overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border space-y-1">
              <div className="flex items-start justify-between gap-3">
                <p className="font-headline font-bold text-base text-ink leading-snug">
                  {concern.issue}
                </p>
                <span className="font-mono text-xs text-rust bg-rust/10 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                  {monthsSince(concern.since)}
                </span>
              </div>
              <p className="font-mono text-xs text-muted">
                In place since {formatSince(concern.since)}
              </p>
            </div>

            {/* Body */}
            <div className="px-5 py-4 space-y-4 flex-1 flex flex-col">
              {/* Current state */}
              <div className="space-y-1">
                <p className="font-mono text-xs text-muted uppercase tracking-wide">
                  Current structure allows
                </p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  {concern.detail}
                </p>
              </div>

              {/* Platform fix */}
              <div className="mt-auto border-t border-border pt-4 space-y-1">
                <p className="font-mono text-xs text-forest uppercase tracking-wide">
                  Platform prevents it
                </p>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {platformFixes[i]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Road activity logging callout — a specific, dateable failure */}
      <div className="border-l-4 border-gold bg-gold/5 rounded-r p-5 space-y-3 max-w-3xl">
        <p className="font-mono text-xs text-gold uppercase tracking-widest">
          Case study — road activity logging
        </p>
        <p className="font-body text-sm text-ink leading-relaxed">
          The board first requested that road crew provide daily activity logs
          in{" "}
          <span className="font-mono font-medium text-ink">November 2024</span>.
          It was described as{" "}
          <span className="font-body italic">&ldquo;required by law.&rdquo;</span> The
          request was repeated in January 2025. A tablet was purchased in March
          2025 to address it. A portal demo was given in July 2025. As of the
          last available minutes, the logging is still{" "}
          <span className="font-mono font-medium text-rust">
            manual and inconsistent
          </span>
          .
        </p>
        <p className="font-body text-sm text-muted leading-relaxed">
          That&rsquo;s 8 months of formal requests, two management companies, one
          hardware purchase, and still no reliable activity record for how{" "}
          <span className="font-mono font-medium text-ink">
            $113,409 in salaries
          </span>{" "}
          and{" "}
          <span className="font-mono font-medium text-ink">$16,445 in fuel</span>{" "}
          were spent in 2025.
        </p>
        <p className="flex gap-2 items-start">
          <span className="font-mono text-xs text-forest shrink-0 mt-0.5">→</span>
          <span className="font-body text-sm text-forest leading-relaxed">
            GPS tracking and work orders are not optional features on the
            platform. They are the front door. Nothing gets logged as
            &ldquo;complete&rdquo; without a work order, a GPS track, and operator sign-off.
          </span>
        </p>
      </div>
    </div>
  );
}
