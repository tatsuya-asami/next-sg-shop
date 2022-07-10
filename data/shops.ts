export type Shop = Readonly<{
  name: string;
  rank: 1 | 2 | 3 | 4 | 5;
  bringIn: boolean;
}>;

export const SHOPS: Shop[] = [
  { name: "俺の塩", rank: 3, bringIn: false },
  { name: "君の豚", rank: 2, bringIn: true },
  { name: "Your soy", rank: 4, bringIn: false },
  { name: "MyMiso", rank: 5, bringIn: false },
];
