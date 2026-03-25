"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { trends } from "@/lib/financialData";

const years = [2022, 2023, 2024, 2025] as const;

const chartData = years.map((year) => ({
  year,
  salaries: trends.salariesGrowth[year],
  ecosystem: trends.managementEcosystemCost[year],
  legalCollections: trends.legalCollections[year],
  netIncome: trends.netIncome[year],
}));

function dollarK(value: number) {
  if (Math.abs(value) >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value}`;
}

// Custom tooltip styled to match the design system
function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="border border-border bg-cream rounded shadow-md p-3 space-y-1 min-w-48">
      <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
        {label}
      </p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex justify-between gap-4">
          <span className="font-body text-xs text-muted">{entry.name}</span>
          <span
            className="font-mono text-xs font-medium"
            style={{ color: entry.color }}
          >
            {entry.value < 0 ? "-" : ""}${Math.abs(entry.value).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TrendsChart() {
  return (
    <div className="border border-border rounded bg-parchment p-6 space-y-4">
      <div className="space-y-1">
        <h2 className="font-headline font-bold text-2xl text-ink">
          Four years of damage
        </h2>
        <p className="font-body text-sm text-muted">
          2022 – 2025 actuals. Salaries grew{" "}
          <span className="font-mono font-medium text-rust">379%</span>.
          The POA ran a loss in 3 of 4 years.
          Legal-collections spiked to{" "}
          <span className="font-mono font-medium text-rust">$52,214</span> in
          2023 with no public explanation.
        </p>
      </div>

      <div className="h-72 w-full -ml-2">
        <ResponsiveContainer width="100%" height="100%" minHeight={200}>
          <LineChart data={chartData} margin={{ top: 8, right: 16, bottom: 0, left: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#c8bfaa" strokeOpacity={0.5} />
            <XAxis
              dataKey="year"
              tick={{ fontFamily: "var(--font-jetbrains)", fontSize: 11, fill: "#6b6050" }}
              tickLine={false}
              axisLine={{ stroke: "#c8bfaa" }}
            />
            <YAxis
              tickFormatter={dollarK}
              tick={{ fontFamily: "var(--font-jetbrains)", fontSize: 11, fill: "#6b6050" }}
              tickLine={false}
              axisLine={false}
              width={52}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                fontFamily: "var(--font-lora)",
                fontSize: 12,
                color: "#6b6050",
                paddingTop: 8,
              }}
            />
            <ReferenceLine y={0} stroke="#c8bfaa" strokeWidth={1.5} />

            <Line
              type="monotone"
              dataKey="salaries"
              name="Salaries — common grounds"
              stroke="#c9973a"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#c9973a", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="ecosystem"
              name="Management ecosystem cost"
              stroke="#b84a22"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#b84a22", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="legalCollections"
              name="Legal — collections"
              stroke="#8b1e1e"
              strokeWidth={2}
              strokeDasharray="5 3"
              dot={{ r: 4, fill: "#8b1e1e", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="netIncome"
              name="Net income / (loss)"
              stroke="#1e3a28"
              strokeWidth={2}
              dot={{ r: 4, fill: "#1e3a28", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Year annotations */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-border">
        {chartData.map(({ year, salaries, ecosystem, netIncome }) => (
          <div key={year} className="space-y-0.5">
            <p className="font-mono text-xs text-muted uppercase tracking-widest">{year}</p>
            <p className="font-mono text-sm font-medium text-gold">${(salaries / 1000).toFixed(0)}K salaries</p>
            <p className="font-mono text-xs text-rust">${(ecosystem / 1000).toFixed(0)}K ecosystem</p>
            <p className={`font-mono text-xs ${netIncome < 0 ? "text-danger" : "text-forest"}`}>
              {netIncome < 0 ? "-" : "+"}${(Math.abs(netIncome) / 1000).toFixed(0)}K net
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
