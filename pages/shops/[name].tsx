import { getShopData, loadShops } from "../../data/getShopData";
import { SHOPS } from "../../data/shops";

const Shop = ({ shopParams }: { shopParams: { name: string } }) => {
  return <div>{shopParams.name}</div>;
};

export default Shop;

export async function getStaticPaths() {
  const paths = SHOPS.map(({ name }) => ({ params: { name } }));
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
