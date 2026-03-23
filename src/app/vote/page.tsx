import type { Metadata } from "next";
import CountdownTimer from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "How to Vote — SVR Community",
  description:
    "Everything you need to know to vote at the SVR POA annual meeting on May 16, 2026.",
};

export default function VotePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      <header className="border-b border-border pb-8 space-y-3">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          Annual Meeting — May 16, 2026
        </p>
        <h1 className="font-headline font-black text-4xl text-ink">
          How to Vote
        </h1>
        <p className="font-body text-lg text-muted leading-relaxed">
          Two votes happen at this meeting. Both matter. Here&rsquo;s what you
          need to know to be counted.
        </p>
      </header>

      <section className="space-y-3">
        <p className="font-body text-sm text-muted uppercase tracking-widest">
          Time remaining
        </p>
        <CountdownTimer />
      </section>

      <section className="space-y-6">
        <h2 className="font-headline font-bold text-2xl text-ink">
          Meeting details
        </h2>
        <div className="border border-border rounded bg-parchment p-6 space-y-3 font-body text-muted">
          <p>
            <span className="font-semibold text-ink">Date:</span> May 16, 2026
          </p>
          <p>
            <span className="font-semibold text-ink">Location:</span> TBD —
            watch for official notice from the board
          </p>
          <p>
            <span className="font-semibold text-ink">Quorum:</span> 50 members
            holding 1,000+ acre-votes must attend (in person or by proxy)
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-headline font-bold text-2xl text-ink">
          The two votes
        </h2>

        <div className="border border-border rounded bg-parchment p-6 space-y-3">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Vote 1 — CC&amp;Rs
          </p>
          <h3 className="font-headline font-bold text-xl text-ink">
            Vote NO on dissolution
          </h3>
          <p className="font-body text-sm text-muted leading-relaxed">
            The CC&amp;Rs recorded March 28, 1996 renew automatically every 10
            years. A vote to dissolve requires 66.67% of total community acreage
            — weighted by acre, not by head count. If you own more acres, your
            vote counts more. We recommend voting{" "}
            <strong className="text-ink">NO</strong> on dissolving the POA. The
            legal structure is not the problem. The management is.
          </p>
        </div>

        <div className="border border-border rounded bg-parchment p-6 space-y-3">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Vote 2 — Board election
          </p>
          <h3 className="font-headline font-bold text-xl text-ink">
            Vote for new board members
          </h3>
          <p className="font-body text-sm text-muted leading-relaxed">
            The board has 7–9 members serving 3-year terms. Electing landowners
            who will fire the management company is all it takes — the board can
            terminate the contract with a simple majority vote, no landowner vote
            required. Candidates TBD.
          </p>
        </div>
      </section>

      <section className="border-l-4 border-rust bg-rust/5 rounded-r p-6 space-y-2">
        <p className="font-mono text-xs text-rust uppercase tracking-widest">
          Can&rsquo;t make it in person?
        </p>
        <h3 className="font-headline font-bold text-xl text-ink">
          Send a proxy
        </h3>
        <p className="font-body text-sm text-muted leading-relaxed">
          You can authorize another landowner to vote on your behalf. Proxy forms
          will be available before the meeting. Watch your mail for the official
          meeting notice — it will include proxy instructions.
        </p>
      </section>

      <section className="border-l-4 border-gold bg-gold/5 rounded-r p-5 space-y-1">
        <p className="font-mono text-xs text-gold uppercase tracking-widest">
          Quorum matters
        </p>
        <p className="font-body text-sm text-muted">
          If 50 members holding 1,000+ acre-votes don&rsquo;t show up (or send
          proxies), the meeting can&rsquo;t proceed. Your presence — or your
          proxy — is the minimum requirement. Don&rsquo;t assume someone else will
          cover it.
        </p>
      </section>
    </div>
  );
}
