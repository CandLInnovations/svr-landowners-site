import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — SVR Community",
  description:
    "Straight answers to what's circulating about the SVR annual meeting and management company.",
};

const faqs = [
  {
    q: "If we fire the management company, who does the work?",
    a: "The board — which is what boards are for. The bylaws say the board MAY employ a manager, not that it must. Other communities this size run successfully without management companies. The difference is a board with the tools to do the job — and a system that holds them accountable whether they use those tools or not.",
  },
  {
    q: "What happens to the CC&Rs if the POA dissolves?",
    a: "The CC&Rs are recorded covenants attached to every parcel deed. They don't disappear if the POA dissolves — they remain on the land. But without a corporate entity to enforce them, they become practically unenforceable. Neighbor-to-neighbor disputes would require individual lawsuits instead of association action. We recommend voting NO on POA dissolution — not to protect the CC&Rs, but to protect the infrastructure and enforcement mechanism that makes the ranch livable.",
  },
  {
    q: "Does the developer still own a bunch of the land?",
    a: "No. Yavapai 10,000 LLC — the original developer — holds zero parcels. Confirmed via Yavapai County GIS. Anyone claiming the developer controls the CC&R vote is working from outdated information.",
  },
  {
    q: "How does the CC&R vote actually work?",
    a: "Votes are weighted by ACRE, not by person. To dissolve the POA, landowners holding 66.67% of total acreage must vote yes. One person with 10 acres has more voting weight than ten people with 1 acre each. Show up, or send your proxy.",
  },
  {
    q: "What's the quorum for the annual meeting?",
    a: "50 members holding at least 1,000 acre-votes must be present (in person or by proxy) for the meeting to proceed. If we don't hit quorum, nothing happens. Make sure you're counted.",
  },
  {
    q: "The management company says the $28K contract is all we pay them. Is that true?",
    a: "The contract itself is $27,675 actual in 2025. But every dollar spent on liens, demand letters, legal collections, and related processes is driven by their system. Add it up: $141,050. That's the real cost. We have the receipts.",
  },
  {
    q: "Can the board fire the management company without a landowner vote?",
    a: "Yes. A simple majority of the board can terminate the management contract. No special vote, no petition, no waiting for the next annual meeting. Once the board changes, the contract can change.",
  },
  {
    q: "Why did we run a net operating loss?",
    a: "We collected $291,308 in assessments and spent $320,918 — a $29,610 deficit. The collections process alone ran $36,783 over what it recovered. We're paying more to chase payments than we're getting back.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      <header className="border-b border-border pb-8 space-y-3">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          Straight answers
        </p>
        <h1 className="font-headline font-black text-4xl text-ink">FAQ</h1>
        <p className="font-body text-lg text-muted leading-relaxed">
          Things being said on Facebook, in emails, and at kitchen tables —
          answered with facts.
        </p>
      </header>

      <div className="space-y-8">
        {faqs.map(({ q, a }) => (
          <div key={q} className="space-y-2">
            <h2 className="font-headline font-bold text-lg text-ink">{q}</h2>
            <p className="font-body text-muted leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <div className="border-l-4 border-gold bg-gold/5 rounded-r p-5 space-y-1">
        <p className="font-mono text-xs text-gold uppercase tracking-widest">
          Have a question not listed here?
        </p>
        <p className="font-body text-sm text-muted">
          Talk to a neighbor. This site is built by landowners who live here —
          not a PR firm. If something here is wrong, we want to know.
        </p>
      </div>
    </div>
  );
}
