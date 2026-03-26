import CountdownTimer from "@/components/CountdownTimer";
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
          The base contract was $27,675. The real number — once you add
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
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Where $141,050 comes from
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink">
            The contract is the smallest part of the problem.
          </h2>
        </div>

        <div className="space-y-3">
          {/* Tier 1 */}
          <div className="border border-border rounded bg-parchment overflow-hidden">
            <div className="px-5 py-3 border-b border-border flex items-baseline justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-muted uppercase tracking-widest">Tier 1 — The contract</span>
                <h3 className="font-headline font-bold text-lg text-ink mt-0.5">$27,675 <span className="font-mono text-sm text-muted font-normal">/ 19%</span></h3>
              </div>
              <div className="h-2 w-24 rounded-full bg-border overflow-hidden shrink-0">
                <div className="h-full bg-muted rounded-full" style={{ width: "19%" }} />
              </div>
            </div>
            <div className="px-5 py-3">
              <p className="font-body text-sm text-muted leading-relaxed">
                The management contract line item (account 8510). This is the number AZ Community First quotes. It is not the real cost.
              </p>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="border border-border rounded bg-parchment overflow-hidden">
            <div className="px-5 py-3 border-b border-border flex items-baseline justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-muted uppercase tracking-widest">Tier 2 — Add-ons billed separately</span>
                <h3 className="font-headline font-bold text-lg text-ink mt-0.5">$23,371 <span className="font-mono text-sm text-muted font-normal">/ 17%</span></h3>
              </div>
              <div className="h-2 w-24 rounded-full bg-border overflow-hidden shrink-0">
                <div className="h-full bg-gold rounded-full" style={{ width: "17%" }} />
              </div>
            </div>
            <div className="px-5 py-3">
              <p className="font-body text-sm text-muted leading-relaxed">
                Software, portals, insurance administration, and service fees billed outside the base contract. These costs exist only because the management company exists.
              </p>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="border border-border rounded bg-parchment overflow-hidden">
            <div className="px-5 py-3 border-b border-border flex items-baseline justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-muted uppercase tracking-widest">Tier 3 — Incentive-driven costs</span>
                <h3 className="font-headline font-bold text-lg text-ink mt-0.5">$90,004 <span className="font-mono text-sm text-muted font-normal">/ 64%</span></h3>
              </div>
              <div className="h-2 w-24 rounded-full bg-border overflow-hidden shrink-0">
                <div className="h-full bg-rust rounded-full" style={{ width: "64%" }} />
              </div>
            </div>
            <div className="px-5 py-3">
              <p className="font-body text-sm text-muted leading-relaxed">
                Collections, demand letters, lien fees, and legal costs — activity the management company bills for on top of its contract. In 2025, collections spending exceeded collections recovered by $36,783. The incentive is to pursue, not to resolve.
              </p>
            </div>
          </div>

          {/* Total */}
          <div className="border-2 border-ink rounded bg-ink text-cream px-5 py-4 flex items-baseline justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-cream/60 uppercase tracking-widest">Total management ecosystem cost — 2025</p>
              <p className="font-headline font-black text-3xl mt-0.5">$141,050 <span className="font-mono text-lg font-normal text-cream/70">/ 48% of all assessment income</span></p>
            </div>
          </div>

          {/* Field note */}
          <div className="border border-border rounded px-5 py-3 bg-parchment/60">
            <p className="font-mono text-xs text-muted leading-relaxed">
              Assessment income collected in 2025: $291,308. Net operating result: &ndash;$29,610.
            </p>
          </div>
        </div>
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
