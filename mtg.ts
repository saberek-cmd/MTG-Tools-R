export interface MTGSet {
  name: string;
  year: string;
  packs: number;
  code: string;
}

export interface PrizeTier {
  place: string;
  packs: number;
}

export interface CardData {
  name: string;
  rarity: string;
  image_uri: string;
  scryfall_uri: string;
  usd: string | null;
  usd_foil: string | null;
}
