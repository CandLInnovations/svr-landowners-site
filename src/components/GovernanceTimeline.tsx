import { meetings, type FlaggedItem } from "@/lib/meetingData";

// Only include meetings that have flagged items — these are the ones
// that tell the governance story.
const flaggedMeetings = meetings
  .filter((m) => m.flaggedItems.length > 0)
  .map((m) => ({
    date: m.date,
    location: m.location,
    format: m.format,
    homeownersPresent: m.homeownersPresent,
    flaggedItems: m.flaggedItems,
    // The key decision most relevant to each flagged item
    keyDecision: m.keyDecisions.find((d) =>
      d.result === "carried" && (d.amount || d.notes)
    ) ?? m.keyDecisions[0],
  }));

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Visual treatment per flag type
const flagConfig: Record<
  FlaggedItem["type"],
  {
    label: string;
    dotColor: string;
    badgeClass: string;
    borderClass: string;
    platformFix: string;
  }
> = {
  "conflict-of-interest": {
    label: "Conflict of interest",
    dotColor: "bg-rust",
    badgeClass: "bg-rust/10 text-rust",
    borderClass: "border-rust/30",
    platformFix:
      "The platform's vote record logs every board member by name. Conflicts are visible the moment they occur — and every abstention or recusal is on the permanent record.",
  },
  structural: {
    label: "Structural gap",
    dotColor: "bg-rust",
    badgeClass: "bg-rust/10 text-rust",
    borderClass: "border-rust/30",
    platformFix:
      "The platform enforces role separation automatically. Financial approvals, work order sign-offs, and meeting records flow through independent channels — no single person controls more than one.",
  },
  "accountability-gap": {
    label: "Platform fixes this",
    dotColor: "bg-forest",
    badgeClass: "bg-forest/10 text-forest",
    borderClass: "border-forest/30",
    platformFix:
      "This is exactly the gap the platform is built to close. Every transaction requires a logged board vote. Every work order requires a completed activity record. Nothing gets approved without a paper trail.",
  },
  "budget-concern": {
    label: "Budget concern",
    dotColor: "bg-gold",
    badgeClass: "bg-gold/10 text-gold",
    borderClass: "border-gold/40",
    platformFix:
      "The platform requires competitive bid documentation before any expenditure over $1,000 is approved. A single-vendor approval without bids is structurally prevented.",
  },
  operations: {
    label: "Operations gap",
    dotColor: "bg-gold",
    badgeClass: "bg-gold/10 text-gold",
    borderClass: "border-gold/40",
    platformFix:
      "Daily activity logs, GPS tracking, and work orders are built into the platform. Road crew field notes post automatically — no manual reporting required, no way to skip it.",
  },
};

export default function GovernanceTimeline() {
  return (
    <div className="space-y-4">
      <div className="space-y-1 max-w-3xl">
        <p className="font-mono text-xs text-rust uppercase tracking-widest">
          Board meeting record — 2024 to present
        </p>
        <h2 className="font-headline font-black text-3xl text-ink">
          What the minutes actually show.
        </h2>
        <p className="font-body text-base text-muted leading-relaxed">
          These are not allegations. They are motions that were made, seconded,
          and carried — recorded in official board minutes and sourced directly
          from those documents. Every landowner has the right to read them.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 pt-1">
        <span className="flex items-center gap-1.5 font-mono text-xs text-rust">
          <span className="w-2 h-2 rounded-full bg-rust inline-block" />
          Conflict of interest / structural gap
        </span>
        <span className="flex items-center gap-1.5 font-mono text-xs text-gold">
          <span className="w-2 h-2 rounded-full bg-gold inline-block" />
          Operations / budget concern
        </span>
        <span className="flex items-center gap-1.5 font-mono text-xs text-forest">
          <span className="w-2 h-2 rounded-full bg-forest inline-block" />
          Accountability gap — platform fixes this
        </span>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical rule */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-6 pl-10">
          {flaggedMeetings.map((meeting) => (
            <div key={meeting.date} className="relative">
              {/* Date dot — color of the most severe flag type */}
              {(() => {
                const topType = meeting.flaggedItems.find(
                  (f) =>
                    f.type === "conflict-of-interest" || f.type === "structural"
                )
                  ? "conflict-of-interest"
                  : meeting.flaggedItems.find(
                        (f) => f.type === "accountability-gap"
                      )
                    ? "accountability-gap"
                    : meeting.flaggedItems[0].type;
                return (
                  <span
                    className={`absolute -left-7 top-1 w-3 h-3 rounded-full border-2 border-cream ${flagConfig[topType].dotColor}`}
                  />
                );
              })()}

              <div className="space-y-3">
                {/* Meeting header */}
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-sm font-medium text-ink">
                    {formatDate(meeting.date)}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {meeting.location}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {typeof meeting.homeownersPresent === "number"
                      ? `${meeting.homeownersPresent} landowner${meeting.homeownersPresent !== 1 ? "s" : ""} present`
                      : "attendance recorded"}
                  </span>
                </div>

                {/* Flagged items */}
                {meeting.flaggedItems.map((flag, i) => {
                  const config = flagConfig[flag.type];
                  return (
                    <div
                      key={i}
                      className={`border ${config.borderClass} rounded bg-parchment overflow-hidden`}
                    >
                      <div className="px-4 py-2.5 border-b border-inherit flex items-center gap-2">
                        <span
                          className={`font-mono text-xs px-2 py-0.5 rounded ${config.badgeClass}`}
                        >
                          {config.label}
                        </span>
                      </div>
                      <div className="px-4 py-3 space-y-2">
                        <p className="font-body text-sm text-ink leading-relaxed">
                          {flag.description}
                        </p>
                        {/* Platform fix */}
                        <div className="flex gap-2 pt-1">
                          <span className="font-mono text-xs text-forest shrink-0 mt-0.5">
                            →
                          </span>
                          <p className="font-body text-xs text-forest leading-relaxed">
                            {config.platformFix}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-4 max-w-3xl">
        <p className="font-mono text-xs text-muted">
          Sources: SVR POA Open Board Meeting Minutes, January 2024 –
          December 2025. Available to all landowners via the FrontSteps portal.
        </p>
      </div>
    </div>
  );
}
