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
            holding 1,000+ acre-votes must participate — either by attending
            in person or by returning an absentee ballot
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-headline font-bold text-2xl text-ink">
          The two votes
        </h2>

        <div className="border border-border rounded bg-parchment p-6 space-y-3">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Vote 1 — POA Dissolution
          </p>
          <h3 className="font-headline font-bold text-xl text-ink">
            Vote NO on dissolution
          </h3>
          <p className="font-body text-sm text-muted leading-relaxed">
            The CC&amp;Rs were recorded March 28, 1996 with an initial 20-year
            term, then automatic 10-year renewals unless terminated. 2026 is a
            renewal year — which is why this vote is on the May 16 ballot.
            Terminating requires 66.67% of total acreage to vote yes. Votes
            are weighted by acre, not by person. We recommend voting{" "}
            <strong className="text-ink">NO</strong>.
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
          Return your absentee ballot
        </h3>
        <p className="font-body text-sm text-muted leading-relaxed">
          You do not need to attend in person. The bylaws explicitly prohibit
          proxy voting — you cannot authorize someone else to vote on your
          behalf. But you can and should return your absentee ballot by mail
          (or by email or fax if the board authorizes electronic delivery for
          this election).
        </p>
        <p className="font-body text-sm text-muted leading-relaxed">
          Your returned ballot counts toward quorum exactly the same as
          attending in person. Watch your mail for the official ballot — it
          will include instructions and a return deadline. The ballot must be
          returned at least seven days after it was delivered to you per the
          bylaws.
        </p>
      </section>

      <section className="border-l-4 border-gold bg-gold/5 rounded-r p-5 space-y-1">
        <p className="font-mono text-xs text-gold uppercase tracking-widest">
          Quorum matters
        </p>
        <p className="font-body text-sm text-muted">
          If 50 members holding 1,000+ acre-votes don&rsquo;t participate, the
          meeting can&rsquo;t proceed. Your participation — in person or by
          returning your ballot — is what makes the meeting valid.
          Don&rsquo;t assume someone else will cover it.
        </p>
      </section>
    </div>
  );
}
