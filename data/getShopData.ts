import { SHOPS } from "./shops";

export const getShopData = (name: string) => {
  const shopName = SHOPS.find((shop) => shop.name === name);
  return shopName ?? "不明なお店";
};
