import { SHOPS } from "./shops";

export async function loadShops(): Promise<typeof SHOPS> {
  try {
    const res = await fetch(`http://localhost:3000/api/shop`);
    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }
}

export const getShopData = async (name: string) => {
  const shops = await loadShops();
  const shopName = shops.find((shop) => shop.name === name);
  return shopName ?? "不明なお店";
};
