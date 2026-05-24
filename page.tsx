"use client";

import { useMemo, useState } from "react";

import { Header } from "@/components/Header";
import { CalculatorPanel } from "@/components/CalculatorPanel";
import { SpoilerPanel } from "@/components/SpoilerPanel";

import { calculateDraft } from "@/lib/calculations";

export default function HomePage() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSet, setSelectedSet] = useState<any>();

  const calculations = useMemo(() => {
    return calculateDraft({
      packsPerBox: selectedSet?.packs || 36,
      boxPrice: 144,
      players: 8,
      packsPerPlayer: 3,
      prizes: [
        { place: "1st", packs: 6 },
        { place: "2nd", packs: 4 },
      ],
    });
  }, [selectedSet]);

  return (
    <main>
      <Header />

      <div className="mx-auto max-w-6xl space-y-6 px-6 py-8">
        <CalculatorPanel
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          onSetChange={setSelectedSet}
        />

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            label="Price per Pack"
            value={`$${calculations.packCost.toFixed(2)}`}
          />

          <MetricCard
            label="Packs Needed"
            value={calculations.packsNeeded}
          />

          <MetricCard
            label="Draft Cost"
            value={`$${calculations.draftCost.toFixed(2)}`}
          />

          <MetricCard
            label="Leftover Packs"
            value={calculations.leftoverPacks}
          />
        </div>

        <div className="panel flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[.25em] text-yellow-300">
              Total Event Cost
            </div>

            <div className="mt-2 text-zinc-500">
              Draft + Prize Support
            </div>
          </div>

          <div className="text-5xl font-mono text-yellow-300">
            ${calculations.totalCost.toFixed(2)}
          </div>
        </div>

        <SpoilerPanel setCode={selectedSet?.code} />
      </div>
    </main>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="panel">
      <div className="text-xs uppercase tracking-[.18em] text-zinc-500">
        {label}
      </div>

      <div className="mt-3 text-3xl font-mono text-yellow-300">
        {value}
      </div>
    </div>
  );
}
