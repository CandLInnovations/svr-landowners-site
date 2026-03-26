import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Roads Plan — SVR Community",
  description:
    "How the SVR self-management platform addresses every gap in road maintenance tracking, scheduling, and accountability.",
};

const gaps = [
  {
    heading: "Where is your request in the queue?",
    body: "Road maintenance requests come in by email, phone, and in person. There is no public queue. There is no confirmation that a request was received. There is no way for a landowner to know whether their road is scheduled for next week or next year — or whether it was ever logged at all.",
  },
  {
    heading: "Where did the grader go today?",
    body: "The board formally requested daily activity logs from road crew in November 2024, describing them as required by law. The request was repeated in January 2025. A tablet was purchased in March 2025. A portal demo was held in July 2025. As of the last available meeting minutes, logging remains manual and inconsistent — while 2025 records show $113,409 in road salaries and $16,445 in fuel. There is currently no reliable public record of where that equipment went or what it accomplished.",
  },
  {
    heading: "What does a mile of grading actually cost?",
    body: "The board directed road staff to track cost per mile in November 2023. Two years later, no reliable per-mile cost data exists. Without it, the committee cannot make data-driven decisions about where to focus limited resources — and the board cannot evaluate whether the road budget is being spent effectively.",
  },
  {
    heading: "When was that road last worked?",
    body: "There is no searchable road condition history. Whether a road was graded last month or two years ago lives in someone's memory, not in a system. When committee members turn over, that institutional knowledge leaves with them.",
  },
  {
    heading: "Is the equipment about to break down?",
    body: "SVR's road equipment has a documented history of failures requiring major repairs — including a $63,217 engine repair approved from a single vendor proposal in a 22-minute emergency Zoom meeting — which shut down road grading for months. Preventive maintenance requires tracking engine hours per vehicle. Currently there is no systematic hour-based maintenance tracking across the fleet.",
  },
];

const mapColors = [
  { dot: "bg-green-500", label: "Green", description: "worked within the last 3 months" },
  { dot: "bg-yellow-400", label: "Yellow", description: "3 to 12 months since last work" },
  { dot: "bg-orange-400", label: "Orange", description: "12 to 24 months since last work" },
  { dot: "bg-red-500", label: "Red", description: "over 24 months or no record" },
  { dot: "bg-blue-500", label: "Blue", description: "scheduled, work order active" },
  { dot: "bg-gray-300", label: "Gray", description: "no data on record" },
];

const features: {
  heading: string;
  what: string;
  result: string;
  phase2: boolean;
  showMapColors?: boolean;
}[] = [
  {
    heading: "Request intake and prioritized queue",
    what: "Every road request enters the platform as a structured ticket. The platform automatically scores and ranks requests using factors the committee sets once: time since last grade, number of requests for the same road, road classification, seasonal conditions, and safety vs. routine maintenance. The committee sees a ranked queue, not an inbox. Prioritization becomes a five-minute dashboard review rather than a judgment call made from memory.",
    result: "Every landowner gets an automatic confirmation when their request is received, and a notification when it's scheduled.",
    phase2: false,
  },
  {
    heading: "GPS-automatic activity logging",
    what: "The operator does not fill out a form. The GPS track is the log. When the grader moves, the platform records which road segments were covered, at what time, and for how long. At end of day, the operator confirms the automatically-generated log on their phone — a 60-second tap-through. The confirmation is the record. It is permanent, timestamped, and linked to the work order.",
    result: "Daily activity logs generate automatically from equipment movement. The logging problem is structural, not behavioral — it cannot be skipped.",
    phase2: false,
  },
  {
    heading: "Automated scheduling with conflict detection",
    what: "The committee sets a weekly work plan in the platform. The platform knows equipment availability based on maintenance status and flags weather conflicts before the crew goes out. When the schedule changes — equipment issue, weather, crew availability — affected tickets update automatically and landowners are notified.",
    result: "Schedule changes communicate themselves. The committee doesn't manage a phone tree.",
    phase2: false,
  },
  {
    heading: "Real-time cost-per-mile tracking",
    what: "Because the platform knows which road segments were covered, for how long, and what fuel was consumed, it calculates cost per mile automatically: operator hours, fuel, and equipment depreciation — by road type, by season, by operator. No manual calculation required.",
    result: "The committee walks into every budget meeting with actual cost data. Over time, this data shows which roads cost more per mile and why — terrain, traffic, soil type — enabling smarter resource allocation.",
    phase2: false,
  },
  {
    heading: "Road work history — searchable, public, permanent",
    what: "Every completed work order becomes part of a permanent, publicly searchable road condition record. Any landowner can search by road name, section, or date range and see the full history: when each road segment was last graded, what condition it was in on arrival, what work was performed, what it cost, and who the operator was. Results can be filtered by time period or sorted by last worked date across the entire road network.\n\nThere is no request required and no one to ask. The history is always on, always current, and visible to every landowner with a portal account.",
    result: "The question of whether certain roads receive more frequent attention than others stops being something people argue about. Sort the full road network by last graded date. The data shows what happened. Every landowner can see it.",
    phase2: false,
  },
  {
    heading: "Color-coded road map — updated as work happens",
    what: "The platform displays the full SVR road network on an interactive map. Road segments are color-coded by recency of last completed work:\n\nThe map is zoomable — start at the full ranch view to see the broad picture, zoom into any area to see individual road segments. Landowners can toggle between four views: last completed work, scheduled work, submitted requests, and cost per mile.\n\nThe map updates automatically when a work order closes. No one publishes it manually.",
    result: "A landowner opens the map and immediately sees the status of every road on the ranch — not from a report, not from a meeting, not from asking anyone. If any part of the ranch is consistently underserved, the map shows it. If the road program is running well, the map shows that too.",
    phase2: true,
    showMapColors: true,
  },
  {
    heading: "Hour-based equipment maintenance alerts",
    what: "Every vehicle accumulates engine hours automatically from GPS data. The committee sets maintenance intervals once — oil change every 250 hours, blade inspection every 100 hours — and the platform alerts the committee when any vehicle is approaching a threshold. Maintenance gets scheduled before failure, not after.",
    result: "Preventive maintenance happens on schedule. Equipment downtime from preventable failures is reduced. The road program doesn't stop because a grader was never serviced.",
    phase2: false,
  },
];

const weeklyItems = [
  {
    period: "Monday morning — 15 minutes",
    description:
      "Review the platform's prioritized queue. Confirm or adjust the week's schedule. Equipment status shows on dashboard — no calls needed to check. Approve the plan. Landowners with scheduled roads notified automatically.",
  },
  {
    period: "Daily from the crew — 60 seconds",
    description:
      "Confirm the auto-generated GPS activity log on their phone. That's the daily report. Done.",
  },
  {
    period: "When something changes — as needed",
    description:
      "Equipment alert fires before a maintenance threshold is hit. Road manager schedules service, adjusts the week's plan. Affected landowners notified automatically.",
  },
  {
    period: "Monthly board meeting — 10 minutes of prep",
    description:
      "Platform generates the roads summary automatically: miles graded, requests completed, requests pending, cost per mile, equipment status. Road manager confirms and walks into the meeting with a dashboard, not a handwritten report.",
  },
  {
    period: "Annual budget — 2 to 3 hours instead of days",
    description:
      "Platform exports the year's road activity: total miles by road type, total cost by category, cost-per-mile trends, deferred request backlog with age. Every budget number has actual data behind it.",
  },
];

export default function RoadsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

      {/* Hero */}
      <header className="border-b border-border pb-8 space-y-3">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          The roads problem
        </p>
        <h1 className="font-headline font-black text-4xl text-ink max-w-2xl leading-tight">
          300+ miles of road. No queue. No schedule. No way to know what
          happened to your request.
        </h1>
        <p className="font-body text-lg text-muted max-w-2xl leading-relaxed">
          Roads are SVR&rsquo;s biggest operational challenge and its most
          visible failure point. When a road is impassable, landowners notice
          immediately. When a request disappears into a process no one can see,
          frustration compounds. The platform is built to fix both — not by
          asking volunteers to work harder, but by making the work that was
          already happening visible, trackable, and automatic.
        </p>
      </header>

      {/* Current gaps */}
      <section className="space-y-5">
        <div className="space-y-1 max-w-3xl">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Documented gaps
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink">
            What the current system can&rsquo;t tell you
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            These aren&rsquo;t accusations. They&rsquo;re structural gaps
            documented in the public board meeting minutes — problems that exist
            regardless of who holds any particular role.
          </p>
        </div>
        <div className="space-y-3">
          {gaps.map(({ heading, body }) => (
            <div
              key={heading}
              className="border border-border rounded bg-parchment overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-border">
                <h3 className="font-headline font-bold text-base text-rust">
                  {heading}
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="font-body text-sm text-muted leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform features */}
      <section className="space-y-5">
        <div className="space-y-1 max-w-3xl">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Platform features
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink">
            What the platform does — specifically
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            Each feature below addresses one of the gaps above. None of them
            require the road crew or committee to do additional paperwork. The
            tracking happens as a byproduct of the work itself.
          </p>
        </div>
        <div className="space-y-4">
          {features.map(({ heading, what, result, phase2, showMapColors }) => (
            <div
              key={heading}
              className="border border-border rounded bg-parchment overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-border flex items-start justify-between gap-4">
                <h3 className="font-headline font-bold text-lg text-ink">
                  {heading}
                </h3>
                {phase2 && (
                  <span className="font-mono text-xs text-gold bg-gold/10 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                    Phase 2 — Q3 2026
                  </span>
                )}
              </div>
              <div className="px-6 py-4 space-y-4">
                <div className="space-y-3">
                  {what.split("\n\n").map((paragraph, i) => (
                    <div key={i}>
                      <p className="font-body text-sm text-ink leading-relaxed">
                        {paragraph}
                      </p>
                      {showMapColors && i === 0 && (
                        <ul className="mt-3 space-y-2">
                          {mapColors.map(({ dot, label, description }) => (
                            <li key={label} className="flex items-center gap-2.5">
                              <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${dot}`} />
                              <span className="font-body text-sm text-ink">
                                <span className="font-semibold">{label}</span>
                                {" — "}
                                {description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <div className="border-l-2 border-forest/40 pl-4 space-y-1">
                  <p className="font-mono text-xs text-forest uppercase tracking-wide">
                    Result
                  </p>
                  <p className="font-body text-sm text-muted leading-relaxed italic">
                    {result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Road manager's week */}
      <section className="border border-border rounded bg-parchment overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Road committee commitment
          </p>
          <h2 className="font-headline font-bold text-2xl text-ink mt-1">
            What changes for the road committee
          </h2>
          <p className="font-body text-sm text-muted mt-2 leading-relaxed">
            The platform doesn&rsquo;t ask the roads committee to do more. It
            asks them to do the same things differently — with better
            information and without the administrative overhead.
          </p>
        </div>
        <div className="divide-y divide-border">
          {weeklyItems.map(({ period, description }) => (
            <div key={period} className="px-6 py-4 space-y-1.5">
              <p className="font-mono text-xs text-forest uppercase tracking-wide">
                {period}
              </p>
              <p className="font-body text-sm text-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-border bg-parchment/60">
          <p className="font-body text-sm text-muted leading-relaxed">
            The platform doesn&rsquo;t replace the judgment of an experienced
            road manager who knows the terrain — which roads drain poorly, which
            ones wash out every monsoon, which ones can wait and which ones
            can&rsquo;t. That knowledge stays human. What the platform
            eliminates is the administrative burden that currently sits on top
            of that judgment: the logging, the scheduling calls, the status
            inquiries, the budget spreadsheets built from memory.
          </p>
        </div>
      </section>

      {/* Close / CTA */}
      <section className="border-t border-border pt-10 space-y-5 max-w-3xl">
        <p className="font-body text-base text-muted leading-relaxed">
          Roads represent the most visible and most frustrating gap between what
          SVR landowners pay for and what they experience. The platform is built
          to close that gap — not by hoping for better outcomes, but by making
          the right outcome the path of least resistance for everyone involved.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/the-plan"
            className="inline-block bg-rust text-cream font-body font-semibold px-6 py-3 rounded hover:bg-rust/90 transition-colors"
          >
            See the full platform plan &rarr;
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
