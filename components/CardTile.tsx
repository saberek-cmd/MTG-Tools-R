import { CardData } from "@/types/mtg";

export function CardTile({ card }: { card: CardData }) {
  return (
    <a
      href={card.scryfall_uri}
      target="_blank"
      className="group flex flex-col items-center gap-2"
    >
      <img
        src={card.image_uri}
        alt={card.name}
        className="rounded-lg shadow-xl transition duration-300 group-hover:-translate-y-1"
      />

      <div className="text-center">
        <div className="font-semibold">{card.name}</div>

        <div className="font-mono text-yellow-300">
          ${card.usd || "0.00"}
        </div>
      </div>
    </a>
  );
}
