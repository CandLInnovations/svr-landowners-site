import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Plan — SVR Community",
  description:
    "How Sierra Verde Ranch self-management works — the platform, the people, the process.",
};

const pillars = [
  {
    title: "One board, no middlemen",
    body: "The board runs the association directly. No management company markup. No incentive to generate fees. The bylaws already permit this — the board MAY employ a manager, it does not have to.",
  },
  {
    title: "Transparent financials",
    body: "Every landowner sees the real numbers — monthly, online, in plain English. No more waiting for the annual meeting to find out how money was spent.",
  },
  {
    title: "Purpose-built software",
    body: "A platform designed for rural ranch POAs: assessment tracking, maintenance requests, vendor management, document library, and meeting records. Built after the election.",
  },
  {
    title: "Community-set enforcement",
    body: "Enforcement rules set by the landowners, not a management company paid per lien. The current lien process cost $34,000 against a $3,200 budget. That stops.",
  },
];

export default function ThePlanPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <header className="border-b border-border pb-8 space-y-3">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          Self-management
        </p>
        <h1 className="font-headline font-black text-4xl text-ink">
          The Plan
        </h1>
        <p className="font-body text-lg text-muted max-w-2xl leading-relaxed">
          Firing the management company does not mean chaos. It means the board
          does its job — with the right tools, and without paying $141,050/year
          for someone else to do it badly.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {pillars.map(({ title, body }) => (
          <div
            key={title}
            className="border border-border rounded bg-parchment p-6 space-y-3"
          >
            <h2 className="font-headline font-bold text-xl text-ink">{title}</h2>
            <p className="font-body text-sm text-muted leading-relaxed">{body}</p>
          </div>
        ))}
      </section>

      <section className="border-l-4 border-forest bg-forest/5 rounded-r p-6 space-y-3">
        <p className="font-mono text-xs text-forest uppercase tracking-widest">
          Timeline
        </p>
        <h2 className="font-headline font-bold text-2xl text-ink">
          What happens after May 16
        </h2>
        <ol className="space-y-3 font-body text-muted text-sm leading-relaxed list-none">
          {[
            "Board votes to terminate management contract (simple majority, no landowner vote required).",
            "Interim operations handled directly by board — vendors, assessments, communications.",
            "Platform development begins. Community input shapes priorities.",
            "Full self-management operational by end of 2026.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-mono text-forest font-medium shrink-0">
                {i + 1}.
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border border-border rounded bg-parchment p-6 space-y-3">
        <h2 className="font-headline font-bold text-xl text-ink">
          What we are NOT building yet
        </h2>
        <p className="font-body text-sm text-muted leading-relaxed">
          No homeowner portal, no payment processing, no database — until after
          the election. The platform comes after the vote. Right now, the goal is
          simple: get the right board in place on May 16.
        </p>
      </section>
    </div>
  );
}
