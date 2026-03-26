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
          Sierra Verde Ranch deserves better than this.
        </h1>
        <p className="font-body text-xl text-muted max-w-2xl leading-relaxed">
          61,369 acres. 300+ miles of roads. Two community wells. A POA that
          lost $29,610 last year while spending 48 cents of every assessment
          dollar on management overhead. We&rsquo;re not here to tear it down.
          We&rsquo;re here to fix it — with a new board, a lean self-management
          model, and a purpose-built platform that puts every dollar, every road
          mile, and every board decision on the public record.
        </p>
        <h2 className="font-headline font-black text-3xl leading-tight text-ink max-w-2xl">
          $141,050 a year for management.{" "}
          <span className="text-rust italic">We can do better.</span>
        </h2>
        <p className="font-body text-lg text-muted max-w-2xl leading-relaxed">
          The management contract says $28,210. The real number — once you add
          every dollar their system costs us — is <strong>$141,050</strong>.
          The fix is already underway.
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
          May 16, 2026 — that&rsquo;s when the POA dissolution vote and board
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
            Vote 1 — POA Dissolution
          </p>
          <h2 className="font-headline font-bold text-xl text-ink">
            Vote NO on dissolution
          </h2>
          <p className="font-body text-sm text-muted leading-relaxed">
            The May 16 ballot asks whether to dissolve the POA — the
            corporation that maintains our roads and wells. The CC&amp;Rs are
            recorded covenants attached to every parcel deed and survive
            regardless of this vote. But dissolving the corporation leaves
            61,000 acres with no entity to maintain roads and no one legally
            responsible for the wells. We recommend voting NO — not to defend
            the way things have been run, but because the roads still need
            grading and the wells still need maintenance regardless of how this
            vote goes. Dissolving the POA doesn&rsquo;t fix what&rsquo;s
            broken. It just removes the only legal structure we have to fix it
            with.
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
            The board employs the management company — by choice, not by law.
            The bylaws say MAY, not SHALL. A new board majority can terminate
            the AZ Community First contract the day after the election — no
            landowner vote, no petition, no waiting. We have candidates ready.
            This is the lever that changes everything.
          </p>
        </div>
      </section>

      {/* Platform in development */}
      <section className="border border-border rounded bg-parchment p-6 space-y-4">
        <p className="font-mono text-xs text-forest uppercase tracking-widest">
          Already in development
        </p>
        <h2 className="font-headline font-bold text-2xl text-ink">
          The platform is already in development.
        </h2>
        <p className="font-body text-base text-muted leading-relaxed">
          We&rsquo;re not waiting for the vote to build this. The
          self-management platform — financial dashboard, road request tracking,
          equipment GPS, work order system, well access management — is being
          built now. By the time a new board takes over, the tools will be
          ready.
        </p>
        <p className="font-body text-base text-muted leading-relaxed">
          The goal isn&rsquo;t a board you have to trust more. It&rsquo;s a
          system where trust isn&rsquo;t required.
        </p>
        <Link
          href="/the-plan"
          className="inline-block font-body font-semibold text-forest hover:text-ink transition-colors"
        >
          See the platform &rarr;
        </Link>
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
