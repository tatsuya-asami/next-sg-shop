import { getShopData, loadShops } from "../../data/getShopData";
import { Shop } from "../../data/shops";

const Shop = ({ shopParams }: { shopParams: Shop }) => {
  return (
    <div>
      <h1>{shopParams.name}</h1>
      <p>星: {shopParams.rank}</p>
      <p>持ち込み: {shopParams.bringIn ? "可" : "不可"}</p>
    </div>
  );
};

export default Shop;

export async function getStaticPaths() {
  const shopList = await loadShops();
  const paths = shopList.map(({ name }) => ({ params: { name } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const shopParams = await getShopData(params.name);
  return {
    props: {
      shopParams,
    },
  };
}
