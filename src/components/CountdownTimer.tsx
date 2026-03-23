"use client";

import { useEffect, useState } from "react";

const MEETING_DATE = new Date("2026-05-16T10:00:00-07:00");

function getTimeLeft() {
  const now = new Date();
  const diff = MEETING_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <p className="font-mono text-rust font-medium">The meeting has begun.</p>
    );
  }

  const units = [
    { label: "days", value: timeLeft.days },
    { label: "hrs", value: timeLeft.hours },
    { label: "min", value: timeLeft.minutes },
    { label: "sec", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 items-end">
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="font-mono text-3xl font-medium text-rust tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="font-body text-xs text-muted uppercase tracking-widest">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
