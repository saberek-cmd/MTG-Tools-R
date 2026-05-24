import { CardData } from "@/types/mtg";

export async function fetchSetCards(code: string): Promise<CardData[]> {
  const url = `https://api.scryfall.com/cards/search?q=e:${code}+(r:rare+or+r:mythic)+-is:token&order=usd&dir=desc`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to load Scryfall data");
  }

  const data = await res.json();

  return data.data.map((card: any) => ({
    name: card.name,
    rarity: card.rarity,
    image_uri:
      card.image_uris?.border_crop ||
      card.card_faces?.[0]?.image_uris?.border_crop ||
      "",
    scryfall_uri: card.scryfall_uri,
    usd: card.prices?.usd || null,
    usd_foil: card.prices?.usd_foil || null,
  }));
}
