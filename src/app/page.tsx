import CountdownTimer from "@/components/CountdownTimer";
import CostBreakdown from "@/components/CostBreakdown";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Hero */}
      <section className="space-y-6 border-b border-border pb-12">
        <p className="font-mono text-sm text-muted uppercase tracking-widest">
          Sierra Verde Ranch POA — Annual Meeting, May 16, 2026
        </p>
        <h1 className="font-headline font-black text-5xl leading-tight text-ink max-w-2xl">
          $141,050 a year for management.{" "}
          <span className="text-rust italic">We can do better.</span>
        </h1>
        <p className="font-body text-xl text-muted max-w-2xl leading-relaxed">
          The management contract says $28,210. The real number — once you add
          every dollar their system costs us — is <strong>$141,050</strong>.
          That&rsquo;s 48 cents of every dollar we collect. The POA lost $29,610
          last year. This stops in May.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="/vote"
            className="inline-block bg-rust text-cream font-body font-semibold px-6 py-3 rounded hover:bg-rust/90 transition-colors"
          >
            How to vote
          </Link>
          <Link
            href="/the-numbers"
            className="inline-block border border-ink text-ink font-body font-semibold px-6 py-3 rounded hover:bg-ink hover:text-cream transition-colors"
          >
            See the numbers
          </Link>
        </div>
      </section>

      {/* Countdown */}
      <section className="space-y-3">
        <p className="font-body text-sm text-muted uppercase tracking-widest">
          Time until the annual meeting
        </p>
        <CountdownTimer />
        <p className="font-body text-sm text-muted">
          May 16, 2026 — that&rsquo;s when the CC&amp;R renewal vote and board
          election happen. Both matter. Read the plan.
        </p>
      </section>

      {/* Cost breakdown */}
      <section>
        <CostBreakdown />
      </section>

      {/* Two votes */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="border border-border rounded bg-parchment p-6 space-y-3">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Vote 1 — CC&amp;Rs
          </p>
          <h2 className="font-headline font-bold text-xl text-ink">
            Keep the CC&amp;Rs
          </h2>
          <p className="font-body text-sm text-muted leading-relaxed">
            CC&amp;Rs recorded March 28, 1996 renew automatically every 10
            years. To dissolve the POA, 66.67% of all acreage must vote yes.
            Votes are weighted by acre — not by person. We recommend voting{" "}
            <strong>NO</strong> on dissolution. Keep the structure, replace the
            people running it.
          </p>
        </div>
        <div className="border border-border rounded bg-parchment p-6 space-y-3">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Vote 2 — Board election
          </p>
          <h2 className="font-headline font-bold text-xl text-ink">
            Elect a new board
          </h2>
          <p className="font-body text-sm text-muted leading-relaxed">
            The board employs the management company — it says MAY, not SHALL.
            A simple board majority can fire AZ Community First the day after
            election. No vote of landowners needed. We just need the right
            people on the board.
          </p>
        </div>
      </section>

      {/* Nav cards */}
      <section className="grid sm:grid-cols-3 gap-4 border-t border-border pt-10">
        {[
          {
            href: "/the-numbers",
            title: "The Numbers",
            desc: "Every line item. Where the $141,050 comes from.",
          },
          {
            href: "/the-plan",
            title: "The Plan",
            desc: "Self-management with a purpose-built platform. No guesswork.",
          },
          {
            href: "/faq",
            title: "FAQ",
            desc: "Answering what's circulating on Facebook.",
          },
        ].map(({ href, title, desc }) => (
          <Link
            key={href}
            href={href}
            className="block border border-border rounded p-5 hover:border-ink transition-colors group"
          >
            <h3 className="font-headline font-bold text-lg text-ink group-hover:text-rust transition-colors">
              {title}
            </h3>
            <p className="font-body text-sm text-muted mt-1">{desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
