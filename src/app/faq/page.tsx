import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — SVR Community",
  description:
    "Straight answers to what's circulating about the SVR annual meeting and management company.",
};

const faqs: { q: string; a: string[] }[] = [
  {
    q: "If we fire the management company, who does the work?",
    a: [
      "Mostly, the platform does.",
      "What a management company sells is coordination — billing, reminders, routing, record-keeping, report generation. Tasks that feel like they require a person but mostly require a reliable system. We're building that system.",
      "Assessment invoices send automatically. Late notices escalate on a schedule the board sets once. Vendor payments route to a board approval queue and release when the vote clears. Road requests get a ticket number, an assigned owner, and a target date the moment they're submitted. Meeting agendas notify every landowner automatically. Plain-language summaries post within 48 hours of every meeting so you don't need to parse formal minutes to know what was decided.",
      "What's left for the board is what a board is actually for: approving budgets, voting on expenditures, setting policy, and showing up to a monthly meeting with real numbers already on the screen.",
      "The platform doesn't replace a management company with harder-working volunteers. It replaces a management company with infrastructure — tools that work around the clock, don't bill by the hour, and have no financial incentive to escalate your neighbor's late payment into a lien.",
    ],
  },
  {
    q: "What happens to the CC&Rs if the POA dissolves?",
    a: [
      "The CC&Rs are recorded covenants attached to every parcel deed. They don't disappear if the POA dissolves — they stay on the land regardless.",
      "But the POA is the legal entity responsible for maintaining roads, managing the wells, and acting on behalf of the community when it needs to. Without it, 61,000 acres has no entity to maintain roads and no one legally responsible for the wells.",
      "We recommend voting NO on dissolution — not to defend the way things have been run, but because the roads still need grading and the wells still need maintenance regardless of how this vote goes. Dissolving the POA doesn't fix what's broken. It just removes the only legal structure we have to fix it with.",
    ],
  },
  {
    q: "How does the POA dissolution vote actually work?",
    a: [
      "The May 16 ballot includes a vote on whether to terminate the CC&Rs at their automatic 10-year renewal. The CC&Rs have renewed automatically since 1996 — terminating them requires landowners holding 66.67% of total acreage to vote yes.",
      "Votes are weighted by ACRE, not by person. One landowner with 640 acres carries the same weight as 640 landowners with 1 acre each. Large parcel holders have significant influence on this outcome. Small parcel owners need to participate in large numbers for their votes to matter.",
      "Important: the bylaws explicitly prohibit proxy voting. You cannot authorize someone else to vote on your behalf. You vote by returning your own absentee ballot — or attending in person.",
      "We recommend voting NO. See above.",
    ],
  },
  {
    q: "What's the quorum for the annual meeting?",
    a: [
      "50 members holding at least 1,000 acre-votes must participate — either in person at the meeting or by returning an absentee ballot — for the meeting to proceed. If quorum isn't reached, nothing happens. No votes count.",
      "Note that the bylaws explicitly prohibit proxy voting — you cannot send someone else to vote on your behalf. But you do not need to attend in person. Returning your mailed ballot counts toward quorum just as attending in person does.",
      "This means every ballot returned matters twice: once for your vote, and once toward the quorum threshold that makes the meeting valid. Return your ballot.",
    ],
  },
  {
    q: "The management company says the $28K contract is all we pay them. Is that true?",
    a: [
      "The base contract is $27,675 in 2025. That number is real.",
      "But the management company doesn't just hold a contract — they run a system. Every demand letter, every lien filing, every collections attorney referral, every hour of legal coordination flows through that system and generates additional billing. Add it up across every vendor and process their model requires and the true cost reaches $141,050 — 48 cents of every dollar SVR collects in assessments.",
      "To put that in context: the lien fee budget was set at $3,200 for 2025. Actual lien fees came in at over $34,000. That's not a rounding error. The base contract is the visible part. The system around it is where the money goes.",
      "We have the receipts. See the full breakdown on The Numbers page.",
    ],
  },
  {
    q: "Can the board fire the management company without a landowner vote?",
    a: [
      "Yes. A simple board majority can terminate the management contract immediately. No landowner vote. No petition. No waiting for the next annual meeting.",
      "The bylaws say the board MAY employ a manager — not that it must. This has always been a board decision. Electing the right board on May 16 is the direct path to a different management model.",
    ],
  },
  {
    q: "Does voting NO on dissolution fix the management problem?",
    a: [
      "No. The dissolution vote and the management company are two separate things entirely.",
      "Voting NO on dissolution keeps the POA structure intact — the legal entity that maintains roads and manages the wells. That's the right vote. But it doesn't change who runs it or how.",
      "The management contract is a board decision. The current board hired AZ Community First. A new board can fire them — by simple majority vote, effective immediately, no landowner vote required. The bylaws say the board MAY employ a manager. That word is doing a lot of work. It means the board chooses to have a management company. It can choose not to.",
      "The platform being built is ready to support that transition. But the platform doesn't activate on its own either. It needs a board that will implement it.",
      "That's what the board election is for. May 16 has two separate outcomes: the dissolution vote preserves the structure, and the board election determines what happens inside that structure. Voting NO without also electing a new board leaves everything exactly as it is.",
      "Both votes matter. Don't skip either one.",
    ],
  },
  {
    q: "Why did we run a net operating loss?",
    a: [
      "SVR collected $291,308 in assessments in 2025 and spent $320,918 — a $29,610 deficit.",
      "The collections process is a significant driver. The POA spent more pursuing delinquent payments than it recovered from them. Legal collections costs ran $36,783 over what came back in. A system that costs more to run than it returns isn't protecting the community's finances — it's draining them.",
      "The reserve fund currently sits at $184,916. The last reserve study — conducted in 2017 and never updated — identified over $618,000 in road and well work that was due at that time. That gap doesn't close while 48 cents of every assessment dollar is going to management overhead.",
    ],
  },
  {
    q: "How do I know POA equipment is actually being used on SVR roads?",
    a: [
      "Right now, you don't. That's a fair concern and it's one we've heard from a lot of landowners.",
      "The POA owns graders, fuel trucks, and service vehicles purchased with assessment dollars. Under the current system, there is no public-facing record of where that equipment goes, what roads it works, how many hours it runs, or whether every hour is on SVR business. The meeting minutes show the board has formally requested daily activity logs from road crew — repeatedly, over multiple years — with inconsistent results.",
      "The platform closes this gap completely. Every piece of POA equipment gets a GPS tracker. A live map updates every five minutes and is visible to any landowner with a portal account. Engine hours log automatically. Every fuel purchase requires a matching work order before payment processes. Daily activity records are generated from the GPS track — not from an operator filling out a form.",
      "If the grader goes out, you see exactly which roads it covered, how long it ran, and what it cost. If it goes somewhere that doesn't match any active SVR work order, that discrepancy is visible to every landowner — not to an auditor reviewing records a year later, but to anyone who checks the dashboard that week.",
      "The goal isn't to catch anyone doing anything wrong. The goal is a system where the question doesn't need to be asked.",
    ],
  },
  {
    q: "I've heard that POA resources have been used for work outside SVR roads. Can that be proven?",
    a: [
      "We can't confirm or deny specific allegations — and we're not going to try. What we can say is this: under the current system, it cannot be disproven either. That's the actual problem.",
      "When equipment has no GPS tracking, when fuel purchases aren't matched to work orders, and when daily activity logs are inconsistent or missing, there is no reliable record of where resources went. Rumors fill the vacuum that documentation should occupy.",
      "The platform doesn't investigate the past. It makes the future transparent by default. Every work order is tied to a specific SVR road or well. Every fuel purchase is matched to a vehicle, a GPS location, and an active work order before it processes. Every hour of equipment time is logged against a job.",
      "If resources are being used appropriately, the record will show it. If they aren't, the record will show that too. Either way, landowners will know — and the question stops being something people argue about on Facebook.",
    ],
  },
  {
    q: "What about purchases that happen before the board approves them?",
    a: [
      "SVR's bylaws require board majority approval for expenditures over $1,000. The meeting minutes document a recurring pattern where equipment and supplies were purchased first and brought to the board for approval after the fact — sometimes at costs significantly higher than any pre-authorization that existed.",
      "The platform makes retroactive approval structurally impossible for anything above the threshold. Every expenditure over $1,000 enters a payment queue. The vendor submits an invoice. The board reviews it and votes to approve or deny before payment releases. The board's approval is logged with each member's name and the date.",
      "Pre-authorization isn't a new rule — it's already in the bylaws. The platform just enforces it automatically.",
    ],
  },
  {
    q: "Has there been competitive bidding on major purchases and contracts?",
    a: [
      "The meeting minutes show multiple instances of significant expenditures approved from a single vendor proposal — equipment repairs in the tens of thousands of dollars, contracts, and service agreements — with no documented competitive bidding process.",
      "We're not suggesting the prices paid were necessarily unreasonable. The problem is structural: when there's no required bid process, there's no way to know.",
      "The platform requires documented competitive bids for any expenditure over a board-defined threshold before a payment request can be submitted. If a single-vendor approval is genuinely warranted — emergency repair, sole-source justification — the board can override the requirement with a logged vote and a documented reason. The exception exists. It just has to be on the record.",
    ],
  },
  {
    q: "How do we know this new platform won't just create a new set of problems with new people in charge?",
    a: [
      "That's exactly the right question — and it's the reason the platform matters more than the election.",
      "Every board in SVR's history has asked for your trust. Some deserved it. Some didn't. We're not asking for trust either.",
      "The platform is designed so that the same structural protections apply regardless of who sits on the board. Financial approvals require a logged board vote. Equipment is tracked publicly. Work orders close only when GPS confirms completion. Meeting records are permanent and public. Individual board members' votes are on the record with their names attached.",
      "A board that governs well will have nothing to hide and every reason to welcome this visibility. A board that doesn't govern well will be visible to every landowner the moment it happens — not years later when someone finally pulls the right PDF.",
      "The goal isn't a better board you have to trust. It's a system that holds any board accountable.",
    ],
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
            <div className="space-y-3">
              {a.map((paragraph, i) => (
                <p key={i} className="font-body text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
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
