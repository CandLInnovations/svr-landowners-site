import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Plan — SVR Community",
  description:
    "How Sierra Verde Ranch self-management works — the platform, the people, the process.",
};

const features = [
  {
    heading: "Financial dashboard — live, not monthly PDFs",
    what: "Every transaction posts to a public dashboard in real time. Budget vs. actuals for every line item, visible to every landowner, updated the moment a payment processes. Automatic alerts when any category hits 150% of its approved budget. Net operating position shown at the top — surplus or deficit — updated daily.",
    why: "In 2025, the POA ran a $29,610 net operating loss. The lien fee budget was set at $3,200; actual spend was $34,000 — over 10× budget. Under the current system, landowners learn about variances like this by downloading a PDF from a portal once a month and doing the math themselves. No alert fired. No notification was sent.",
  },
  {
    heading: "Automated assessment billing and collections",
    what: "Assessment invoices generate automatically on the billing date and are delivered to every landowner's portal and email. Late notices send at 30, 60, and 90 days on a schedule the board sets once. Collections escalation — demand letter, then lien referral — triggers at defined thresholds without requiring a management company decision on each account. Payment plans are tracked automatically. Account standing updates in real time.",
    why: "In 2023, the POA spent $52,214 on legal collections — the single largest expense category that year. A tiered automated system keeps costs proportional to the actual delinquency level and removes the financial incentive for a third party to escalate every account to the most expensive resolution.",
  },
  {
    heading: "Vendor payment approval queue",
    what: "Every bill submitted to the POA enters a payment queue. Invoices under $1,000 that match an active work order and an approved budget line process automatically. Invoices over $1,000 route to the board: each member gets a notification, reviews the invoice and the work order it's attached to, and votes to approve or deny. Payment releases when a board majority votes yes. Every approval is logged with the date, the vote, and each member's name.",
    why: "SVR's bylaws require board majority approval for expenditures over $1,000. The meeting minutes document multiple instances where equipment purchases and repairs were approved retroactively — after the purchase had already been made. The approval queue makes pre-authorization structural, not optional.",
  },
  {
    heading: "Road and well request tracking",
    what: "Any landowner submits a maintenance request through the platform. It receives a ticket number and an automatic acknowledgment immediately. The ticket routes to the appropriate committee, gets assigned to a specific board member or crew lead, and is given a target completion date. Status updates automatically as work progresses. The landowner who submitted it is notified at each stage change. If the target date passes without the ticket closing, it flags automatically and escalates to the full board.",
    why: "The community has asked for a road tracking system in recorded board meetings since at least January 2020 — over six years. A digital map and tracking concept was presented to the board in May 2023. A $5,000 contract was approved in September 2023. As of the 2025 meeting minutes, landowners are still submitting requests with no reliable status visibility.",
  },
  {
    heading: "Equipment GPS and work order logging",
    what: "Every piece of POA equipment carries a GPS tracker. A live map shows the location of every vehicle, updated every five minutes, visible to any landowner. Engine hours are logged automatically. Every fuel purchase requires a matching work order before it processes for payment. Daily activity logs are generated from the GPS track — no manual entry by the operator required. The board sees exactly where the grader went, how long it ran, and what it cost, every single day.",
    why: "The board formally requested that road crew provide daily activity logs in November 2024, describing them as \"required by law.\" The request was repeated in January 2025. A tablet was purchased in March 2025. A portal demo was held in July 2025. As of the last available meeting minutes, logging remains manual and inconsistent — while the 2025 budget shows $113,409 in road salaries and $16,445 in fuel. GPS-based automatic logging removes the dependency on manual reporting entirely.",
  },
  {
    heading: "Well access management",
    what: "Every landowner with authorized well access has a digital credential tied to their account standing. When an account goes delinquent, well access suspends automatically per the existing SOP — no manual review required. When dues are paid, access restores. Every water pickup is logged: who, which well, how many gallons, what date and time. The board sees monthly usage reports per landowner. Aggregate usage data is visible to the community for monitoring well health.",
    why: "The Bluetooth access code system was first approved in July 2020 and was still being fully implemented in 2022. The existing SOP defines detailed access rules and good-standing requirements. The gap is enforcement — which currently depends on manual review by the management company. Automated credential management closes that gap and removes the manual workload entirely.",
  },
  {
    heading: "Meeting access and plain-language summaries",
    what: "When a board meeting is scheduled, every landowner with a portal account gets an automatic notification — email, SMS, or both, based on their preference. The agenda publishes to the portal the moment it's finalized. Every meeting is live-streamed to the platform; landowners can watch without a Zoom account or a special invitation. Within 48 hours of the board approving the minutes, the platform publishes two things: the full official minutes (the legal record, unchanged), and a plain-language summary generated automatically from those minutes. The summary follows a consistent format every time: what was decided, what was spent, what's coming up at the next meeting, and a link to the full record.",
    why: "In 2025, several board meetings had fewer than five landowners present. Meetings are posted to the website, but no notification is sent when they're scheduled, when the agenda changes, or when minutes are published. Participating in your own POA's governance currently requires knowing where to look, remembering to look, and being able to parse formal meeting minutes to understand what was decided. The platform removes all three barriers.",
  },
  {
    heading: "Election administration",
    what: "Annual elections run entirely through the platform. Ballots are distributed to landowner accounts. Voting is credentialed — tied to verified parcel ownership and account standing. Acre-weighted tabulation is calculated automatically. Results are certified by the platform with a full audit trail. Every step is documented and verifiable.",
    why: "Annual election ballots have been physically counted by the management company at the management company's office, with one board member observing via Zoom as the sole witness. This arrangement has been in place since at least 2021. Platform-administered elections remove the ballot custody question entirely.",
  },
];

const timelineItems = [
  {
    period: "Now → May 2026",
    description:
      "Core platform development — financial dashboard, payment queue, road and well request tracking, board vote logging.",
  },
  {
    period: "May 16, 2026",
    description: "Annual meeting and board election.",
  },
  {
    period: "May–June 2026",
    description:
      "Board onboarding, data migration from FrontSteps, landowner portal setup.",
  },
  {
    period: "June 2026",
    description:
      "Full platform live — all landowners have portal access.",
  },
  {
    period: "Q3 2026",
    description: "GPS hardware installed on equipment fleet.",
  },
  {
    period: "Q4 2026",
    description: "First fully platform-administered annual election.",
  },
];

export default function ThePlanPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

      {/* Hero */}
      <header className="border-b border-border pb-8 space-y-3">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          Self-management
        </p>
        <h1 className="font-headline font-black text-4xl text-ink max-w-2xl">
          A self-managed SVR. Here&rsquo;s exactly what that looks like.
        </h1>
        <p className="font-body text-lg text-muted max-w-2xl leading-relaxed">
          This isn&rsquo;t a protest. It&rsquo;s a plan. The platform being built
          right now replaces the tasks a management company performs — automatically,
          at a fraction of the cost — and gives the board better tools than
          they&rsquo;ve ever had to govern this community well. Here&rsquo;s how
          it works.
        </p>
      </header>

      {/* Three-tier framework */}
      <section className="space-y-5">
        <div className="space-y-1 max-w-3xl">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            The framework
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink">
            Every management task falls into one of three categories.
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            Every task the current management company performs falls into one
            of three categories. Understanding that breakdown makes the case for
            self-management obvious.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "The platform handles it",
              color: "text-forest",
              border: "border-forest/30",
              body: "Recurring administrative tasks — billing, reminders, routing, record-keeping, report generation. These don't require human judgment. They require a reliable system. The platform runs them automatically, on schedule, without a monthly fee attached.",
            },
            {
              label: "The board approves it",
              color: "text-gold",
              border: "border-gold/40",
              body: "Expenditures above threshold, vendor selections, policy changes. The platform flags these items and routes them to the board for a vote. Board members get a notification, review the item, and approve or deny — on their phone, in two minutes. The platform executes once the vote clears and logs the result permanently.",
            },
            {
              label: "The board decides it",
              color: "text-ink",
              border: "border-border",
              body: "Actual governance: the annual budget, capital project priorities, collections policy, contractor oversight, strategic direction. This is what a board is for. Under this model, it's all they have to do.",
            },
          ].map(({ label, color, border, body }) => (
            <div
              key={label}
              className={`border ${border} rounded bg-parchment p-6 space-y-3`}
            >
              <p className={`font-mono text-xs uppercase tracking-widest ${color}`}>
                {label}
              </p>
              <p className="font-body text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature breakdown */}
      <section className="space-y-5">
        <div className="space-y-1 max-w-3xl">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Platform features
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink">
            What the platform does — specifically
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            Each feature below addresses a documented gap in how SVR currently
            operates. The source is the public board meeting minutes.
          </p>
        </div>
        <div className="space-y-4">
          {features.map(({ heading, what, why }) => (
            <div
              key={heading}
              className="border border-border rounded bg-parchment overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-border">
                <h3 className="font-headline font-bold text-lg text-ink">
                  {heading}
                </h3>
              </div>
              <div className="px-6 py-4 space-y-4">
                <p className="font-body text-sm text-ink leading-relaxed">{what}</p>
                <div className="border-l-2 border-rust/30 pl-4 space-y-1">
                  <p className="font-mono text-xs text-rust uppercase tracking-wide">
                    Why it matters here
                  </p>
                  <p className="font-body text-sm text-muted leading-relaxed italic">
                    {why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roads deep-dive callout */}
      <div className="border border-gold/40 bg-gold/5 rounded p-6 space-y-3">
        <p className="font-mono text-xs text-gold uppercase tracking-widest">
          Deep dive
        </p>
        <h2 className="font-headline font-bold text-2xl text-ink">
          Roads are SVR&rsquo;s most complex challenge.
        </h2>
        <p className="font-body text-base text-muted leading-relaxed">
          300+ miles of road network. Aging equipment. Years of deferred
          maintenance requests with no public tracking. The platform has a
          dedicated solution for every part of it — from the moment a request
          is submitted to the GPS log that proves the work was done.
        </p>
        <Link
          href="/roads"
          className="inline-block font-body font-semibold text-gold hover:text-ink transition-colors"
        >
          See the full roads plan &rarr;
        </Link>
      </div>

      {/* Cost comparison */}
      <section className="space-y-5">
        <div className="space-y-1 max-w-3xl">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            The numbers
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink">
            What self-management actually costs
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="border border-rust/30 rounded bg-parchment overflow-hidden">
            <div className="px-5 py-3 border-b border-rust/30 bg-rust/5">
              <p className="font-mono text-xs text-rust uppercase tracking-widest">
                Current model
              </p>
            </div>
            <ul className="divide-y divide-border">
              {[
                ["AZ Community First base contract", "$27,675/year"],
                ["True management ecosystem cost", "$141,050/year"],
                ["Share of all assessment income", "48%"],
              ].map(([label, value]) => (
                <li key={label} className="px-5 py-3 flex justify-between gap-4">
                  <span className="font-body text-sm text-muted">{label}</span>
                  <span className="font-mono text-sm text-rust font-medium shrink-0">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-forest/30 rounded bg-parchment overflow-hidden">
            <div className="px-5 py-3 border-b border-forest/30 bg-forest/5">
              <p className="font-mono text-xs text-forest uppercase tracking-widest">
                Self-management model (estimated)
              </p>
            </div>
            <ul className="divide-y divide-border">
              {[
                ["Platform licensing and hosting", "~$6,000–8,000/year"],
                ["Part-time bookkeeper (10 hrs/month)", "~$7,200/year"],
                ["Legal retainer — escalated collections only", "~$8,000–12,000/year"],
                ["Total estimated", "~$21,200–27,200/year"],
              ].map(([label, value]) => (
                <li key={label} className="px-5 py-3 flex justify-between gap-4">
                  <span className="font-body text-sm text-muted">{label}</span>
                  <span className="font-mono text-sm text-forest font-medium shrink-0">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-l-4 border-forest bg-forest/5 rounded-r p-5 max-w-3xl">
          <p className="font-body text-sm text-ink leading-relaxed">
            The difference — conservatively{" "}
            <span className="font-mono font-medium text-forest">
              $114,000 per year
            </span>{" "}
            — goes to roads. SVR has 300+ miles of road network and a reserve
            fund that hasn&rsquo;t had a current study since 2017. The 2017
            study identified over $618,000 in deferred road and well work. That
            gap doesn&rsquo;t close by paying a management company to send demand
            letters. It closes by redirecting overhead into gravel and culverts.
          </p>
        </div>
      </section>

      {/* Board time commitment */}
      <section className="border border-border rounded bg-parchment overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Board member commitment
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink mt-1">
            What serving on the board actually looks like under this model
          </h2>
          <p className="font-body text-sm text-muted mt-2 leading-relaxed">
            One of the concerns we hear most: &ldquo;Who has time for this?&rdquo; It&rsquo;s
            a fair question. Here&rsquo;s an honest answer.
          </p>
        </div>
        <div className="divide-y divide-border">
          {[
            {
              period: "Weekly — any board member",
              items: [
                "Review the financial dashboard: 10 minutes",
                "Respond to flagged approval items: 5–15 minutes depending on volume",
                "Review any escalated maintenance tickets: as needed",
              ],
            },
            {
              period: "Monthly — all board members",
              items: [
                "Board meeting: ~2 hours, with agenda and financials pre-loaded in the platform before anyone arrives",
              ],
            },
            {
              period: "Ongoing — Road and Well committee members",
              items: [
                "Oversee work orders, review GPS activity logs, approve crew schedules. More active involvement, but supported by the platform rather than dependent on manual reporting.",
              ],
            },
          ].map(({ period, items }) => (
            <div key={period} className="px-6 py-4 space-y-2">
              <p className="font-mono text-xs text-forest uppercase tracking-wide">
                {period}
              </p>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 font-body text-sm text-muted leading-relaxed"
                  >
                    <span className="text-forest shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-border bg-parchment/60">
          <p className="font-body text-sm text-muted leading-relaxed">
            The platform doesn&rsquo;t eliminate the need for engaged board members.
            It eliminates the administrative burden that burns out good people and
            leaves critical decisions to whoever has the most time — rather than
            whoever has the best judgment.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-5">
        <div className="space-y-1 max-w-3xl">
          <p className="font-mono text-xs text-forest uppercase tracking-widest">
            Already in development
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink">
            The platform is being built now
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            Development is already underway. The goal is a working system ready
            for a new board to use from day one after the May 16 election.
          </p>
        </div>
        <div className="border-l-4 border-forest rounded-r overflow-hidden">
          <div className="space-y-0 divide-y divide-border">
            {timelineItems.map(({ period, description }) => (
              <div
                key={period}
                className="bg-parchment pl-5 pr-6 py-4 flex gap-5 items-start"
              >
                <span className="font-mono text-xs text-forest font-medium shrink-0 mt-0.5 min-w-32">
                  {period}
                </span>
                <span className="font-body text-sm text-muted leading-relaxed">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close / CTA */}
      <section className="border-t border-border pt-10 space-y-5 max-w-3xl">
        <p className="font-body text-base text-muted leading-relaxed">
          Sierra Verde Ranch has 1,600+ parcels, 300+ miles of roads, and two
          community wells that every landowner depends on. It deserves management
          infrastructure that works — not a monthly fee for tasks a well-built
          system handles automatically.
        </p>
        <p className="font-body text-base text-muted leading-relaxed">
          The vote on May 16 is the first step. The platform is the next one.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/the-numbers"
            className="inline-block bg-rust text-cream font-body font-semibold px-6 py-3 rounded hover:bg-rust/90 transition-colors"
          >
            See the financial breakdown &rarr;
          </Link>
          <Link
            href="/vote"
            className="inline-block border border-border font-body font-semibold px-6 py-3 rounded text-ink hover:bg-border/30 transition-colors"
          >
            How to vote &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
