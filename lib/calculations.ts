import { PrizeTier } from "@/types/mtg";

export function calculateDraft({
  packsPerBox,
  boxPrice,
  players,
  packsPerPlayer,
  prizes,
}: {
  packsPerBox: number;
  boxPrice: number;
  players: number;
  packsPerPlayer: number;
  prizes: PrizeTier[];
}) {
  const packCost = boxPrice / packsPerBox;
  const packsNeeded = players * packsPerPlayer;
  const boxesNeeded = Math.ceil(packsNeeded / packsPerBox);
  const leftoverPacks = boxesNeeded * packsPerBox - packsNeeded;
  const draftCost = packsNeeded * packCost;
  const prizePacks = prizes.reduce((acc, p) => acc + p.packs, 0);
  const prizeCost = prizePacks * packCost;
  const totalCost = draftCost + prizeCost;

  return {
    packCost,
    packsNeeded,
    boxesNeeded,
    leftoverPacks,
    draftCost,
    prizeCost,
    totalCost,
  };
}
