"use client";

import { SETS } from "@/data/sets";

export function CalculatorPanel({
  selectedType,
  onTypeChange,
  onSetChange,
}: {
  selectedType: string;
  onTypeChange: (value: string) => void;
  onSetChange: (set: any) => void;
}) {
  return (
    <div className="panel space-y-6">
      <div>
        <p className="section-label mb-4">Set Selection</p>

        <div className="grid gap-4 md:grid-cols-2">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 p-3"
          >
            <option value="">Select Booster Type</option>

            {Object.keys(SETS).map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          <select
            onChange={(e) => {
              const set = SETS[selectedType as keyof typeof SETS]?.find(
                (s) => s.code === e.target.value
              );

              if (set) onSetChange(set);
            }}
            className="rounded-lg border border-zinc-700 bg-zinc-900 p-3"
          >
            <option>Select Set</option>

            {selectedType &&
              SETS[selectedType as keyof typeof SETS]?.map((set) => (
                <option key={set.code} value={set.code}>
                  {set.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}
