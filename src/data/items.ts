export type ItemType = "weapon" | "drug";

export interface WeaponStats {
  damage: number;
  range: number;
  fireRate: number;
  recoil: number;
}

export interface DrugStats {
  duration: string;
  effect: string;
  weight: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  type: ItemType;
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
  tier: 1 | 1.5 | 2;
  description: string;
  tags: string[];
  image?: string;
  stats?: WeaponStats | DrugStats;
}

export const catalogItems: CatalogItem[] = [
  {
    id: "glock-19",
    name: "Glock 19",
    type: "weapon",
    rarity: "Common",
    tier: 1,
    description:
      "Light sidearm for new players with fast draw speed, cheap ammo cost, and steady entry-level value for simple city jobs and everyday protection.",
    tags: ["Low recoil", "Fast draw"],
    image: "/glock-19.png",
    stats: { damage: 28, range: 35, fireRate: 72, recoil: 20 },
  },
  {
    id: "mini-smg",
    name: "Mini SMG",
    type: "weapon",
    rarity: "Rare",
    tier: 1.5,
    description:
      "Compact automatic weapon built for vehicle fights, alley pushes, and fast faction rotations where close-range pressure matters more than precision.",
    tags: ["Close range", "Vehicle use"],
    image: "/mini-smg.png",
    stats: { damage: 34, range: 28, fireRate: 90, recoil: 38 },
  },
  {
    id: "combat-pistol",
    name: "Combat Pistol",
    type: "weapon",
    rarity: "Common",
    tier: 1,
    description:
      "Reliable sidearm with a larger magazine than the Glock, suited for extended firefights where ammo management matters.",
    tags: ["High ammo", "Reliable"],
    stats: { damage: 30, range: 38, fireRate: 65, recoil: 22 },
  },
  {
    id: "carbine-rifle",
    name: "Carbine Rifle",
    type: "weapon",
    rarity: "Epic",
    tier: 2,
    description:
      "Full-auto mid-range rifle used by experienced faction players. Strong damage output and solid accuracy for open street engagements.",
    tags: ["Mid range", "Full auto"],
    stats: { damage: 56, range: 70, fireRate: 82, recoil: 42 },
  },
  {
    id: "special-carbine",
    name: "Special Carbine",
    type: "weapon",
    rarity: "Epic",
    tier: 2,
    description:
      "Upgraded carbine variant with slightly improved handling. Preferred by players who want more accuracy in medium-range faction pushes.",
    tags: ["Mid range", "Accurate"],
    stats: { damage: 58, range: 72, fireRate: 80, recoil: 38 },
  },
  {
    id: "pump-shotgun",
    name: "Pump Shotgun",
    type: "weapon",
    rarity: "Uncommon",
    tier: 1.5,
    description:
      "Slow but devastating at close range. One shot can drop a target indoors. Best used in tight spaces and building rushes.",
    tags: ["High damage", "Close range"],
    stats: { damage: 80, range: 18, fireRate: 25, recoil: 65 },
  },
  {
    id: "smg",
    name: "SMG",
    type: "weapon",
    rarity: "Uncommon",
    tier: 1.5,
    description:
      "Standard submachine gun with good spray control. Effective for both vehicle combat and on-foot chases around the city.",
    tags: ["Versatile", "Mobile"],
    stats: { damage: 38, range: 40, fireRate: 88, recoil: 32 },
  },
  {
    id: "heavy-pistol",
    name: "Heavy Pistol",
    type: "weapon",
    rarity: "Rare",
    tier: 2,
    description:
      "Upgraded pistol with significantly better stopping power. Often used as a secondary by mid-tier faction players.",
    tags: ["High stopping power", "Secondary"],
    stats: { damage: 45, range: 42, fireRate: 60, recoil: 28 },
  },
  {
    id: "oxy",
    name: "Oxy Pills",
    type: "drug",
    rarity: "Common",
    tier: 1,
    description:
      "Basic pharmaceutical product for the street market. Low risk, low reward but easy to move through civilian contacts.",
    tags: ["Low risk", "Common supply"],
    stats: { duration: "15 min", effect: "Minor pain relief, slight disorientation", weight: "0.1 kg" },
  },
  {
    id: "cocaine",
    name: "Cocaine Bag",
    type: "drug",
    rarity: "Rare",
    tier: 2,
    description:
      "High-value white product with strong street demand. Requires careful transport due to police attention and rival faction interest.",
    tags: ["High value", "Hot product"],
    stats: { duration: "30 min", effect: "Heightened awareness, speed boost", weight: "0.3 kg" },
  },
  {
    id: "meth",
    name: "Meth Shard",
    type: "drug",
    rarity: "Epic",
    tier: 2,
    description:
      "Potent crystalline product with a complex production chain. High street value but draws significant law enforcement attention.",
    tags: ["Very high value", "Complex supply"],
    stats: { duration: "45 min", effect: "Extreme focus, stamina boost", weight: "0.2 kg" },
  },
  {
    id: "weed",
    name: "Weed Bag",
    type: "drug",
    rarity: "Common",
    tier: 1,
    description:
      "Low-tier green product. Easy to source and move, minimal penalties if caught. Good starter product for new runners.",
    tags: ["Easy to move", "Starter product"],
    stats: { duration: "20 min", effect: "Relaxation, slight slowdown", weight: "0.4 kg" },
  },
];

export const getItemsByTier = (tier: 1 | 1.5 | 2): CatalogItem[] =>
  catalogItems.filter((item) => item.tier === tier);

export const getWeaponsByTier = (tier: 1 | 1.5 | 2): CatalogItem[] =>
  catalogItems.filter((item) => item.type === "weapon" && item.tier === tier);

export const getRandomItems = (pool: CatalogItem[], count: number): CatalogItem[] => {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
