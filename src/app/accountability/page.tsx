import type { Metadata } from "next";
import Link from "next/link";
import { financialHistory } from "@/lib/financialData";
import GovernanceTimeline from "@/components/GovernanceTimeline";
import StructuralConcerns from "@/components/StructuralConcerns";

export const metadata: Metadata = {
  title: "Accountability — SVR Community",
  description:
    "Every dollar, every mile, every vote — on the record. How Sierra Verde Ranch self-management ends opacity and makes trustworthiness visible.",
};

const yr2025 = financialHistory[3];
const fuelExpense = yr2025.fuel;
const wellOperatorContract =
  yr2025.expenses.find((e) => e.name === "Well Operator Contract")?.actual ?? 6500;

// ─── Mock ledger data ────────────────────────────────────────────────────────
const ledgerRows = [
  {
    date: "2025-12-15",
    description: "Demand letter — Lot 247",
    amount: 320.0,
    authorized: "AZ Community First",
    account: "8620",
    vote: "Auto-approved",
    flag: false,
  },
  {
    date: "2025-12-10",
    description: "Lien filing — Lot 183",
    amount: 2800.0,
    authorized: "AZ Community First",
    account: "8700",
    vote: "Auto-approved",
    flag: true,
  },
  {
    date: "2025-11-22",
    description: "AZ Community First — monthly management fee",
    amount: 2306.25,
    authorized: "AZ Community First",
    account: "8510",
    vote: "Auto-approved",
    flag: false,
  },
  {
    date: "2025-11-15",
    description: "Road grading — Sector 4 roads",
    amount: 1850.0,
    authorized: "Road Committee",
    account: "9100",
    vote: "Board 5–2",
    flag: false,
  },
  {
    date: "2025-11-08",
    description: "Legal fees — collections",
    amount: 4200.0,
    authorized: "AZ Community First",
    account: "8730",
    vote: "No vote recorded",
    flag: true,
  },
  {
    date: "2025-10-31",
    description: "Well operator — October",
    amount: 541.67,
    authorized: "Board Secretary",
    account: "9210",
    vote: "Budget pre-approved",
    flag: false,
  },
];

// ─── Mock GPS equipment data ─────────────────────────────────────────────────
const equipmentRows = [
  {
    unit: "Grader — CAT 140",
    status: "Active",
    location: "Sector 4 / CR-12",
    hours: "3.2 hrs today",
    operator: "J. Martinez",
    workOrder: "WO-2025-0441",
    fuel: "12 gal",
  },
  {
    unit: "Fuel Truck — Freightliner",
    status: "Active",
    location: "Main Yard",
    hours: "0.0 hrs today",
    operator: "—",
    workOrder: "—",
    fuel: "—",
  },
  {
    unit: "Backhoe — JD 310L",
    status: "Idle",
    location: "Main Yard",
    hours: "0.0 hrs today",
    operator: "—",
    workOrder: "—",
    fuel: "—",
  },
  {
    unit: "Service Truck — F-350",
    status: "Active",
    location: "Well #3 / Gate Rd",
    hours: "1.1 hrs today",
    operator: "T. Reyes",
    workOrder: "WO-2025-0442",
    fuel: "4 gal",
  },
];

// ─── Mock asset registry ─────────────────────────────────────────────────────
const assetRows = [
  {
    asset: "2020 CAT 140 Motor Grader",
    type: "Equipment",
    purchased: "Mar 2020",
    cost: 185000,
    assessed: 142000,
    lastService: "Nov 2025",
    status: "Active",
  },
  {
    asset: "2018 Freightliner Fuel Truck",
    type: "Equipment",
    purchased: "Aug 2018",
    cost: 72000,
    assessed: 48000,
    lastService: "Oct 2025",
    status: "Active",
  },
  {
    asset: "2019 John Deere 310L Backhoe",
    type: "Equipment",
    purchased: "Jan 2019",
    cost: 95000,
    assessed: 68000,
    lastService: "Sep 2025",
    status: "Active",
  },
  {
    asset: "2015 F-350 Service Truck",
    type: "Vehicle",
    purchased: "Jun 2015",
    cost: 28500,
    assessed: 9200,
    lastService: "Dec 2025",
    status: "Active",
  },
  {
    asset: "POA Common Area — Parcel A",
    type: "Real property",
    purchased: "1996",
    cost: 0,
    assessed: 45000,
    lastService: "—",
    status: "Active",
  },
  {
    asset: "Well #1 — Infrastructure",
    type: "Infrastructure",
    purchased: "2001",
    cost: 38000,
    assessed: 22000,
    lastService: "Jan 2026",
    status: "Active",
  },
];

// ─── Mock board vote record ───────────────────────────────────────────────────
const boardMembers = ["Chair A.", "Vice-Chair B.", "Sec. C.", "Treas. D.", "Dir. E.", "Dir. F.", "Dir. G."];

const voteRows = [
  {
    date: "2025-11-19",
    motion: "Approve 2026 management contract renewal — AZ Community First",
    outcome: "Passed 5–2",
    votes: ["Y", "Y", "Y", "Y", "Y", "N", "N"],
  },
  {
    date: "2025-10-15",
    motion: "Approve revised lien fee schedule ($2,800 per filing)",
    outcome: "Passed 4–3",
    votes: ["Y", "Y", "Y", "N", "Y", "N", "N"],
  },
  {
    date: "2025-09-17",
    motion: "Authorize legal engagement — collections firm retainer",
    outcome: "Passed 6–1",
    votes: ["Y", "Y", "Y", "Y", "Y", "Y", "N"],
  },
  {
    date: "2025-08-20",
    motion: "Road maintenance budget transfer — $12,000 to reserve",
    outcome: "Passed 7–0",
    votes: ["Y", "Y", "Y", "Y", "Y", "Y", "Y"],
  },
  {
    date: "2025-07-16",
    motion: "Approve demand letter fee increase — $320 per letter",
    outcome: "Passed 5–2",
    votes: ["Y", "Y", "Y", "Y", "N", "Y", "N"],
  },
];

// ─── Mock fuel log ────────────────────────────────────────────────────────────
const fuelLogRows = [
  {
    date: "2025-12-15",
    vehicle: "CAT 140 Grader",
    location: "Mayer Fuel Stop — CR-12 & SR-69",
    gallons: 38.4,
    engineHours: "4,221 hrs",
    workOrder: "WO-2025-0441",
    operator: "J. Martinez",
    flag: false,
  },
  {
    date: "2025-12-12",
    vehicle: "F-350 Service Truck",
    location: "Mayer Fuel Stop — CR-12 & SR-69",
    gallons: 22.1,
    engineHours: "87,440 mi",
    workOrder: "WO-2025-0438",
    operator: "T. Reyes",
    flag: false,
  },
  {
    date: "2025-12-09",
    vehicle: "Freightliner Fuel Truck",
    location: "Prescott Valley — 40 mi from SVR roads",
    gallons: 61.2,
    engineHours: "142,880 mi",
    workOrder: "No work order",
    operator: "Unknown",
    flag: true,
  },
  {
    date: "2025-12-04",
    vehicle: "JD 310L Backhoe",
    location: "Main Yard — on-site tank",
    gallons: 14.8,
    engineHours: "6,104 hrs",
    workOrder: "WO-2025-0431",
    operator: "J. Martinez",
    flag: false,
  },
  {
    date: "2025-11-28",
    vehicle: "CAT 140 Grader",
    location: "Mayer Fuel Stop — CR-12 & SR-69",
    gallons: 41.0,
    engineHours: "4,209 hrs",
    workOrder: "WO-2025-0419",
    operator: "J. Martinez",
    flag: false,
  },
];

export default function AccountabilityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className="border-b border-border pb-10 space-y-4">
        <p className="font-mono text-xs text-muted uppercase tracking-widest">
          Platform accountability
        </p>
        <h1 className="font-headline font-black text-4xl md:text-5xl text-ink leading-tight">
          Every dollar. Every mile. Every vote. On the record.
        </h1>
        <p className="font-body text-lg text-muted max-w-3xl leading-relaxed">
          The problem at Sierra Verde Ranch isn&rsquo;t just that bad decisions got
          made — it&rsquo;s that nobody could see them happening. We&rsquo;re not asking you
          to trust a new board. We&rsquo;re building a system where trust isn&rsquo;t required.
        </p>
      </header>

      {/* ── Section 1 — Follow the Dollar ────────────────────────────────── */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="font-mono text-xs text-rust uppercase tracking-widest">
            Public financial ledger
          </p>
          <h2 className="font-headline font-black text-3xl text-ink">
            The documents exist. The dashboard doesn&rsquo;t.
          </h2>
          <div className="space-y-6 font-body text-base text-muted leading-relaxed max-w-3xl">
            <p>
              Every monthly financial statement since 2021 is sitting in the FrontSteps
              portal as a downloadable PDF. Technically, any landowner can access the
              data that shows{" "}
              <span className="font-mono font-medium text-rust">$34,000 in lien fees</span>{" "}
              against a{" "}
              <span className="font-mono font-medium text-ink">$3,200 budget</span>.
              The information is there.
            </p>
            <p>
              What isn&rsquo;t there: anything that tells you to look.
            </p>

            {/* Zero-accountability stat row */}
            <div className="grid grid-cols-3 gap-3 my-2">
              {[
                { value: "12", label: "PDFs uploaded in 2025", sub: "one per month, no summary" },
                { value: "0", label: "automated alerts sent", sub: "at any budget threshold" },
                { value: "0", label: "landowners notified", sub: "when the POA ran a loss" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="border border-border rounded bg-parchment p-3 space-y-0.5 text-center">
                  <p className="font-mono text-3xl font-medium text-rust">{value}</p>
                  <p className="font-mono text-xs text-ink leading-tight">{label}</p>
                  <p className="font-mono text-xs text-muted leading-tight">{sub}</p>
                </div>
              ))}
            </div>

            <p>
              No alert fired when lien fees hit{" "}
              <span className="font-mono font-medium text-rust">500% of budget</span>.
              No dashboard turned red when legal-collections exceeded{" "}
              <span className="font-mono font-medium text-rust">$16,000</span>. No
              notification went to landowners when the POA crossed into a{" "}
              <span className="font-mono font-medium text-danger">net operating loss</span>.
              Twelve monthly PDFs were uploaded, one at a time, and the expectation was
              that you&rsquo;d download each one, open it, find the right line item across
              40+ budget categories, and do the math yourself.
            </p>

            {/* Pullquote */}
            <blockquote className="border-l-4 border-rust pl-5 py-1 space-y-0.5">
              <p className="font-headline font-bold text-xl text-ink leading-snug">
                That is not transparency.
              </p>
              <p className="font-headline italic text-xl text-rust leading-snug">
                That is the appearance of transparency.
              </p>
            </blockquote>

            <p>
              The difference between a file cabinet and a management platform is the
              difference between data and accountability. Our platform takes the same
              financial data and turns it into something that actually works for landowners:
            </p>
            <ul className="list-none space-y-1 pl-4">
              {[
                "Live budget tracking against actuals — updated the moment a transaction posts",
                "Automatic alerts when any line item exceeds 150% of budget",
                "A public dashboard that shows the year\u2019s spending at a glance",
                "No PDF required. No accounting degree needed.",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="font-mono text-forest mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bylaw callout */}
        <div className="border-l-4 border-gold bg-gold/10 rounded-r p-5 space-y-1 max-w-3xl">
          <p className="font-mono text-xs text-gold uppercase tracking-widest">
            Bylaw enforcement
          </p>
          <p className="font-body text-sm text-ink leading-relaxed">
            Under SVR Bylaws Section 9.2, no expenditure over $1,000 can be made
            without board majority consent. This platform enforces that rule
            automatically — any transaction over the threshold requires a logged board
            vote before payment is released.
          </p>
        </div>

        {/* Mock ledger table */}
        <div className="border border-border rounded overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-parchment flex items-center justify-between">
            <div>
              <p className="font-headline font-bold text-sm text-ink">Public Transaction Ledger</p>
              <p className="font-mono text-xs text-muted">Live feed — append-only — all entries permanent</p>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-forest bg-forest/10 px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-forest inline-block" />
              Live
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-parchment/60 border-b border-border">
                <tr>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Date</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Description</th>
                  <th className="text-right px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Amount</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden md:table-cell">Authorized By</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden lg:table-cell">Acct</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Board Vote</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {ledgerRows.map((row, i) => (
                  <tr key={i} className={`${row.flag ? "bg-rust/5" : "hover:bg-border/20"}`}>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted whitespace-nowrap">{row.date}</td>
                    <td className="px-4 py-2.5 font-body text-ink">
                      <span className="flex items-center gap-2">
                        {row.flag && (
                          <span className="shrink-0 text-rust font-mono text-xs">⚑</span>
                        )}
                        {row.description}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 font-mono text-right text-ink">${row.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</td>
                    <td className="px-4 py-2.5 font-body text-xs text-muted hidden md:table-cell">{row.authorized}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted hidden lg:table-cell">{row.account}</td>
                    <td className={`px-4 py-2.5 font-mono text-xs ${row.vote === "No vote recorded" ? "text-rust font-medium" : "text-muted"}`}>{row.vote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-2.5 border-t border-border bg-parchment/40">
            <p className="font-mono text-xs text-muted">⚑ Flagged entries require board review. Showing last 6 transactions — full history always public.</p>
          </div>
        </div>
      </section>

      {/* ── Governance Timeline ───────────────────────────────────────────── */}
      <section className="space-y-8">
        <GovernanceTimeline />
      </section>

      {/* ── Structural Concerns ───────────────────────────────────────────── */}
      <section className="space-y-8">
        <StructuralConcerns />
      </section>

      {/* ── Section 2 — Live Equipment Tracking ──────────────────────────── */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="font-mono text-xs text-rust uppercase tracking-widest">
            GPS equipment dashboard
          </p>
          <h2 className="font-headline font-black text-3xl text-ink">
            You own this equipment. You should know where it is.
          </h2>
          <div className="space-y-4 font-body text-base text-muted leading-relaxed max-w-3xl">
            <p>
              Sierra Verde Ranch owns graders, fuel trucks, and maintenance vehicles
              purchased with your assessment dollars. Right now there is no systematic
              accounting of where that equipment goes, how many hours it runs, or whether
              it&rsquo;s being used for POA business.
            </p>
            <p>
              Every piece of POA equipment gets a GPS tracker — about $25 in hardware
              and $25 per month in service fees per vehicle. That tracker feeds a live
              map visible to every landowner, every day.
            </p>
            <p>When the grader goes out, you see:</p>
            <ul className="list-none space-y-1 pl-4">
              {[
                "Which roads it covered and in what order",
                "How many hours the engine ran",
                "How many gallons of fuel were consumed",
                "Who the operator was and what work order they were working against",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="font-mono text-forest mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              When the grader doesn&rsquo;t go out — when a road that&rsquo;s been requested for
              months still hasn&rsquo;t been touched — that&rsquo;s visible too. Accountability works
              in both directions.
            </p>
          </div>
        </div>

        {/* Fuel stat callout */}
        <div className="border border-border rounded bg-parchment p-5 flex flex-col sm:flex-row gap-5 max-w-3xl">
          <div className="shrink-0">
            <p className="font-mono text-4xl font-medium text-rust">
              ${fuelExpense.toLocaleString()}
            </p>
            <p className="font-mono text-xs text-muted mt-1">fuel expense — 2025 actual</p>
          </div>
          <p className="font-body text-sm text-muted leading-relaxed self-center">
            That&rsquo;s nearly{" "}
            <span className="font-mono font-medium text-ink">
              ${Math.round(fuelExpense / 12).toLocaleString()}/month
            </span>
            . Under the current system, there is no requirement to log which vehicle used
            that fuel, what road it was working, or whether any work was actually completed.
          </p>
        </div>

        {/* Mock GPS dashboard */}
        <div className="border border-border rounded overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-parchment flex items-center justify-between">
            <div>
              <p className="font-headline font-bold text-sm text-ink">Equipment Tracker — Live Dashboard</p>
              <p className="font-mono text-xs text-muted">SVR POA fleet · Updated every 5 minutes</p>
            </div>
            <span className="font-mono text-xs text-muted">{new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>

          {/* Schematic map */}
          <div className="bg-[#1a2e1a] p-6 relative min-h-48 overflow-hidden">
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "linear-gradient(#4a7a4a 1px, transparent 1px), linear-gradient(90deg, #4a7a4a 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />
            <div className="relative space-y-2">
              <p className="font-mono text-xs text-forest/60 uppercase tracking-widest mb-4">Sierra Verde Ranch — Road Network</p>
              {/* Road lines schematic */}
              <div className="flex flex-wrap gap-6 items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-0.5 bg-[#4a7a4a]" />
                    <span className="font-mono text-xs text-[#6aaa6a]">CR-12 N</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-0.5 bg-[#4a7a4a]" />
                    <span className="font-mono text-xs text-[#6aaa6a]">Sector 4 Main</span>
                    {/* Grader icon */}
                    <span className="font-mono text-xs text-gold animate-pulse">▶ GRADER</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-0.5 bg-[#4a7a4a]" />
                    <span className="font-mono text-xs text-[#6aaa6a]">Gate Rd</span>
                    <span className="font-mono text-xs text-gold animate-pulse">▶ F-350</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xs text-[#3a5a3a]">Main Yard</div>
                  <div className="border border-[#3a5a3a] rounded p-2 space-y-1 text-xs font-mono">
                    <div className="text-[#5a8a5a]">◼ Freightliner — parked</div>
                    <div className="text-[#5a8a5a]">◼ Backhoe — idle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment status table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-parchment/60 border-b border-border">
                <tr>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Unit</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Status</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden sm:table-cell">Location</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Engine Hrs</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden md:table-cell">Operator</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden lg:table-cell">Work Order</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {equipmentRows.map((row, i) => (
                  <tr key={i} className="hover:bg-border/20">
                    <td className="px-4 py-2.5 font-body text-ink text-sm">{row.unit}</td>
                    <td className="px-4 py-2.5">
                      <span className={`font-mono text-xs px-2 py-0.5 rounded ${row.status === "Active" ? "bg-forest/10 text-forest" : "bg-border text-muted"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted hidden sm:table-cell">{row.location}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted">{row.hours}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted hidden md:table-cell">{row.operator}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted hidden lg:table-cell">{row.workOrder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 3 — Asset Registry ────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="font-mono text-xs text-rust uppercase tracking-widest">
            What SVR owns
          </p>
          <h2 className="font-headline font-black text-3xl text-ink">
            A complete public record of every asset your dues have paid for.
          </h2>
          <div className="space-y-4 font-body text-base text-muted leading-relaxed max-w-3xl">
            <p>
              Do you know exactly what equipment and property the SVR POA currently owns?
              The current management structure has no public-facing asset registry.
              Equipment is referenced in budget line items. Parcels appear in financial
              statements. But there&rsquo;s no single place where every landowner can see the
              full picture of what belongs to this community.
            </p>
            <p>
              The platform maintains a living asset registry — every vehicle, every piece
              of equipment, every parcel of POA-owned land — with purchase date, purchase
              price, current assessed value, last service date, and current status. When
              something is sold, retired, or transferred, the record reflects it
              immediately with board authorization logged.
            </p>
            <p>This isn&rsquo;t bureaucracy. It&rsquo;s basic stewardship of community property.</p>
          </div>
        </div>

        {/* Mock asset registry */}
        <div className="border border-border rounded overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-parchment flex items-center justify-between">
            <div>
              <p className="font-headline font-bold text-sm text-ink">SVR POA Asset Registry</p>
              <p className="font-mono text-xs text-muted">Community property — board-authorized changes only</p>
            </div>
            <span className="font-mono text-xs text-muted">{assetRows.length} assets on record</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-parchment/60 border-b border-border">
                <tr>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Asset</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden sm:table-cell">Type</th>
                  <th className="text-right px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden md:table-cell">Purchase Price</th>
                  <th className="text-right px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Assessed Value</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden lg:table-cell">Last Service</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {assetRows.map((row, i) => (
                  <tr key={i} className="hover:bg-border/20">
                    <td className="px-4 py-2.5 font-body text-ink">{row.asset}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted hidden sm:table-cell">{row.type}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-right text-muted hidden md:table-cell">
                      {row.cost > 0 ? `$${row.cost.toLocaleString()}` : "—"}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-right text-ink">
                      ${row.assessed.toLocaleString()}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted hidden lg:table-cell">{row.lastService}</td>
                    <td className="px-4 py-2.5">
                      <span className="font-mono text-xs bg-forest/10 text-forest px-2 py-0.5 rounded">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t border-border bg-parchment/40">
                <tr>
                  <td colSpan={3} className="px-4 py-2.5 font-mono text-xs text-muted hidden md:table-cell">Total assessed value</td>
                  <td className="px-4 py-2.5 font-mono text-xs text-right font-medium text-ink">
                    ${assetRows.reduce((sum, r) => sum + r.assessed, 0).toLocaleString()}
                  </td>
                  <td colSpan={2} className="hidden lg:table-cell" />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 4 — Board Vote Record ────────────────────────────────── */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="font-mono text-xs text-rust uppercase tracking-widest">
            Governance transparency
          </p>
          <h2 className="font-headline font-black text-3xl text-ink">
            No more decisions made in the dark.
          </h2>
          <div className="space-y-4 font-body text-base text-muted leading-relaxed max-w-3xl">
            <p>
              Every decision the board makes gets logged — the motion, the date, and how
              each individual board member voted. Not just the outcome. Every yes, every
              no, every abstention, on the record with the member&rsquo;s name attached.
            </p>
            <p>
              SVR&rsquo;s Bylaws Section 6.8 already requires board members to act
              transparently and in the best interest of the association — not in the
              interest of a particular homeowner or faction. This platform makes
              compliance with that requirement automatic. A board member who consistently
              votes to approve management company overcharges, or who recuses themselves
              from votes they shouldn&rsquo;t, or who misses meetings without explanation —
              the record shows it. Landowners see it. At the next election, the community
              decides what to do about it.
            </p>
          </div>
        </div>

        {/* Meeting notice callout */}
        <div className="border-l-4 border-forest bg-forest/5 rounded-r p-5 space-y-1 max-w-3xl">
          <p className="font-mono text-xs text-forest uppercase tracking-widest">
            Meeting transparency
          </p>
          <p className="font-body text-sm text-ink leading-relaxed">
            Board meetings are currently noticed only 48 hours in advance per Bylaw 7.5.
            Under the new platform, meeting agendas are posted 7 days out. Minutes are
            published within 48 hours of each meeting. Every landowner gets a notification.
          </p>
        </div>

        {/* Mock vote record */}
        <div className="border border-border rounded overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-parchment flex items-center justify-between flex-wrap gap-2">
            <div>
              <p className="font-headline font-bold text-sm text-ink">Board Vote Record — 2025</p>
              <p className="font-mono text-xs text-muted">Individual member votes — permanent public record</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-parchment/60 border-b border-border">
                <tr>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Date</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Motion</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden sm:table-cell">Outcome</th>
                  {boardMembers.map((m) => (
                    <th key={m} className="text-center px-2 py-2.5 font-mono text-xs text-muted font-normal hidden lg:table-cell whitespace-nowrap">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {voteRows.map((row, i) => (
                  <tr key={i} className="hover:bg-border/20">
                    <td className="px-4 py-3 font-mono text-xs text-muted whitespace-nowrap align-top">{row.date}</td>
                    <td className="px-4 py-3 font-body text-ink text-sm leading-snug max-w-xs">{row.motion}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted whitespace-nowrap hidden sm:table-cell align-top">{row.outcome}</td>
                    {row.votes.map((v, j) => (
                      <td key={j} className="px-2 py-3 text-center hidden lg:table-cell align-top">
                        <span className={`font-mono text-xs font-medium ${v === "Y" ? "text-forest" : v === "N" ? "text-rust" : "text-muted"}`}>{v}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-2.5 border-t border-border bg-parchment/40 flex gap-4">
            <span className="font-mono text-xs text-forest">Y = Yes</span>
            <span className="font-mono text-xs text-rust">N = No</span>
            <span className="font-mono text-xs text-muted">A = Abstain</span>
            <span className="font-mono text-xs text-muted ml-auto hidden lg:inline">Member names are illustrative — full names shown on live platform</span>
          </div>
        </div>
      </section>

      {/* ── Section 5 — Fuel and Materials Accountability ─────────────────── */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="font-mono text-xs text-rust uppercase tracking-widest">
            No more mystery expenses
          </p>
          <h2 className="font-headline font-black text-3xl text-ink">
            ${fuelExpense.toLocaleString()} in fuel last year. Show your work.
          </h2>
          <div className="space-y-4 font-body text-base text-muted leading-relaxed max-w-3xl">
            <p>
              Every fuel purchase, every materials order, every supply run gets logged
              against a specific work order before the expense is approved for payment.
              The operator photographs the receipt at the pump. The system records the
              vehicle, the GPS location of the fuel stop, the odometer or engine hours
              at fill-up, and the work order the vehicle was supporting that day.
            </p>
            <p>
              If the fuel purchase doesn&rsquo;t match the day&rsquo;s GPS route — if a truck
              filled up 40 miles from any SVR road — that discrepancy is visible. Not to
              an auditor reviewing records a year later. To any landowner who looks at
              the dashboard that week.
            </p>
          </div>
        </div>

        {/* Mock fuel log */}
        <div className="border border-border rounded overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-parchment flex items-center justify-between">
            <div>
              <p className="font-headline font-bold text-sm text-ink">Fuel & Materials Log</p>
              <p className="font-mono text-xs text-muted">Each entry linked to GPS track and work order</p>
            </div>
            <span className="font-mono text-xs text-muted">2025 · Dec–Nov shown</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-parchment/60 border-b border-border">
                <tr>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Date</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Vehicle</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden md:table-cell">GPS Location</th>
                  <th className="text-right px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide">Gallons</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden lg:table-cell">Work Order</th>
                  <th className="text-left px-4 py-2.5 font-mono text-xs text-muted font-normal uppercase tracking-wide hidden sm:table-cell">Operator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {fuelLogRows.map((row, i) => (
                  <tr key={i} className={`${row.flag ? "bg-rust/5" : "hover:bg-border/20"}`}>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted whitespace-nowrap">{row.date}</td>
                    <td className="px-4 py-2.5 font-body text-ink text-sm">{row.vehicle}</td>
                    <td className="px-4 py-2.5 font-mono text-xs hidden md:table-cell">
                      <span className={row.flag ? "text-rust font-medium" : "text-muted"}>
                        {row.flag && "⚑ "}{row.location}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-right text-ink">{row.gallons}</td>
                    <td className={`px-4 py-2.5 font-mono text-xs hidden lg:table-cell ${row.workOrder === "No work order" ? "text-rust font-medium" : "text-muted"}`}>
                      {row.workOrder}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted hidden sm:table-cell">{row.operator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-2.5 border-t border-border bg-rust/5">
            <p className="font-mono text-xs text-rust">⚑ Dec 9 entry: fuel stop 40 miles from any active SVR work order. Flagged for board review.</p>
          </div>
        </div>
      </section>

      {/* ── Section 6 — Maintenance Request Tracking ─────────────────────── */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="font-mono text-xs text-rust uppercase tracking-widest">
            Your requests, on the record
          </p>
          <h2 className="font-headline font-black text-3xl text-ink">
            Submit a road request. Watch what happens to it.
          </h2>
          <div className="space-y-6 font-body text-base text-muted leading-relaxed max-w-3xl">
            <p>
              The current FrontSteps portal lets landowners submit road and well
              maintenance requests and see their status. That&rsquo;s a start. But it answers
              only one question: did the work get done?
            </p>

            {/* Before/after comparison */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border rounded bg-parchment p-4 space-y-3">
                <p className="font-mono text-xs text-muted uppercase tracking-widest">FrontSteps today</p>
                <ul className="space-y-2">
                  {[
                    "Work order submitted",
                    "Status: open / closed",
                    "No owner assigned",
                    "No target date",
                    "No cost linked",
                    "No notification on overdue",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 items-start font-body text-sm text-muted">
                      <span className="font-mono text-rust mt-0.5 shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-forest rounded bg-forest/5 p-4 space-y-3">
                <p className="font-mono text-xs text-forest uppercase tracking-widest">New platform</p>
                <ul className="space-y-2">
                  {[
                    "Ticket # issued on submission",
                    "Real-time status: 5 stages",
                    "Board member or committee owns it",
                    "Target completion date set",
                    "Cost and work order linked",
                    "Auto-flag + notification if overdue",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 items-start font-body text-sm text-muted">
                      <span className="font-mono text-forest mt-0.5 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p>
              On the new platform, every maintenance request — road, well, gate, common
              area — gets a ticket number the moment it&rsquo;s submitted. That ticket shows
              its current status in real time: submitted, reviewed, scheduled, in progress,
              complete. It shows which board member or committee owns it. It shows the
              target completion date. And if that date passes without action, the ticket
              flags automatically and the landowner who submitted it gets a notification.
            </p>

            {/* Field notice */}
            <div className="border-l-4 border-danger bg-danger/5 rounded-r p-4">
              <p className="font-mono text-xs text-danger uppercase tracking-widest mb-1">Field notice</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Knowing a work order is &ldquo;closed&rdquo; is not the same as knowing your money
                was spent wisely.
              </p>
            </div>
          </div>
        </div>

        {/* Request status mockup */}
        <div className="border border-border rounded overflow-hidden max-w-3xl">
          <div className="px-5 py-3 border-b border-border bg-parchment">
            <p className="font-headline font-bold text-sm text-ink">Maintenance Request — #MR-2025-0318</p>
            <p className="font-mono text-xs text-muted">Submitted Nov 4, 2025 · Lot 312</p>
          </div>
          <div className="p-5 space-y-4">
            <div className="font-body text-sm text-ink">
              <p className="font-semibold">Describe the problem:</p>
              <p className="text-muted mt-1">CR-7 north of gate is heavily washboarded. Two vehicles have reported axle damage. Road has not been graded in over 5 months.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Submitted", done: true },
                { label: "Reviewed", done: true },
                { label: "Scheduled", done: true },
                { label: "In Progress", done: false, current: true },
                { label: "Complete", done: false },
              ].map((step) => (
                <div key={step.label} className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${step.done ? "bg-forest" : step.current ? "bg-gold" : "bg-border"}`} />
                  <span className={`font-mono text-xs ${step.done ? "text-forest" : step.current ? "text-gold font-medium" : "text-muted"}`}>
                    {step.label}
                  </span>
                  {step.current && <span className="font-mono text-xs text-gold">← now</span>}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div>
                <p className="text-muted">Assigned to</p>
                <p className="text-ink mt-0.5">Road Committee</p>
              </div>
              <div>
                <p className="text-muted">Target date</p>
                <p className="text-ink mt-0.5">Dec 20, 2025</p>
              </div>
              <div>
                <p className="text-muted">Work order</p>
                <p className="text-ink mt-0.5">WO-2025-0441</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7 — The Well System ───────────────────────────────────── */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="font-mono text-xs text-rust uppercase tracking-widest">
            Water accountability
          </p>
          <h2 className="font-headline font-black text-3xl text-ink">
            SVR&rsquo;s wells are its most critical infrastructure. Treat them that way.
          </h2>
          <div className="space-y-4 font-body text-base text-muted leading-relaxed max-w-3xl">
            <p>
              The SOPs already define a detailed well usage protocol — access codes,
              monthly limits, good-standing requirements, violation procedures. The
              problem is enforcement depends entirely on the management company tracking
              it manually.
            </p>
            <p>
              The platform automates well access management. Every landowner who has
              requested well access has a digital credential tied to their account
              standing. When dues go delinquent, access is automatically suspended per
              the SOP — no manual review, no management company intervention needed.
              When they pay, access restores. Every water pickup is logged: who, which
              well, how many gallons, what date. The board sees monthly usage reports
              per landowner. The community sees aggregate usage to monitor well health.
            </p>
            <p>
              At{" "}
              <span className="font-mono font-medium text-ink">
                ${wellOperatorContract.toLocaleString()}/year
              </span>{" "}
              for the well operator contract, SVR&rsquo;s water infrastructure is one of
              the largest recurring expenses in the budget. It deserves the same
              visibility as everything else.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
          {[
            { label: "Well operator contract", value: `$${wellOperatorContract.toLocaleString()}/yr`, note: "Largest recurring infrastructure expense" },
            { label: "Access control", value: "Automated", note: "Tied to account standing — no manual review" },
            { label: "Every pickup logged", value: "Who · Well · Gallons · Date", note: "Board and community can monitor well health" },
          ].map(({ label, value, note }) => (
            <div key={label} className="border border-border rounded bg-parchment p-4 space-y-1">
              <p className="font-mono text-xs text-muted uppercase tracking-wide">{label}</p>
              <p className="font-mono text-base font-medium text-ink">{value}</p>
              <p className="font-body text-xs text-muted">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing Section ───────────────────────────────────────────────── */}
      <section className="border-t border-border pt-12 space-y-6">
        <h2 className="font-headline font-black text-3xl md:text-4xl text-ink max-w-3xl">
          We&rsquo;re not asking you to trust us. We&rsquo;re building a system that doesn&rsquo;t require it.
        </h2>
        <div className="space-y-4 font-body text-base text-muted leading-relaxed max-w-3xl">
          <p>
            Every board in SVR&rsquo;s history has asked for your trust. Some deserved it.
            Some didn&rsquo;t. The problem was never the people — it was the system. When
            finances are opaque, when equipment is untracked, when decisions get made
            in meetings that nobody attends, bad actors thrive and good people burn out
            trying to fight them.
          </p>
          <p>
            The platform doesn&rsquo;t make the board more trustworthy. It makes
            trustworthiness visible. An honest board will welcome this. A corrupt one
            will fight it. Watch which way the current board reacts when they see this
            proposal — that alone will tell you what you need to know.
          </p>
          <p>
            We&rsquo;re landowners here too. Our money goes into the same pot. Our vehicles
            drive the same roads. We built this because we believe Sierra Verde Ranch
            deserves better than what it&rsquo;s gotten — and because we know that better
            is possible.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/the-plan"
            className="inline-block font-body font-semibold text-sm bg-forest text-cream px-6 py-3 rounded hover:bg-forest/90 transition-colors"
          >
            See the full platform plan →
          </Link>
          <Link
            href="/the-numbers"
            className="inline-block font-body font-semibold text-sm border border-border text-ink px-6 py-3 rounded hover:bg-parchment transition-colors"
          >
            Download the 2025 financial analysis →
          </Link>
        </div>
      </section>

    </div>
  );
}
