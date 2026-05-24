"use client";

import { useEffect, useState } from "react";
import { fetchSetCards } from "@/lib/scryfall";
import { CardData } from "@/types/mtg";
import { CardTile } from "./CardTile";

export function SpoilerPanel({ setCode }: { setCode?: string }) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!setCode) return;

    async function load() {
      setLoading(true);

      try {
        const data = await fetchSetCards(setCode);
        setCards(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [setCode]);

  return (
    <div className="panel mt-6">
      <p className="section-label mb-6">
        Set Spoiler — Most Valuable Cards
      </p>

      {loading && (
        <div className="py-12 text-center text-zinc-400">
          Loading cards...
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <CardTile key={card.name} card={card} />
        ))}
      </div>
    </div>
  );
}
