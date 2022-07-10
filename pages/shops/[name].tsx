import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getShopData } from "../../data/getShopData";
import { Shop, SHOPS } from "../../data/shops";
import styles from "../../styles/Home.module.css";

type Props = {
  shopParams: Shop;
};

const Shop: React.FC<Props> = ({ shopParams }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{shopParams.name}</h1>
        <p>星: {shopParams.rank}</p>
        <p>持ち込み: {shopParams.bringIn ? "可" : "不可"}</p>
        <Link href="/">
          <a>戻る</a>
        </Link>
      </main>
    </div>
  );
};

export default Shop;

type Params = Pick<Shop, "name">;

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths = SHOPS.map(({ name }) => ({ params: { name } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const shopParams = await getShopData(params?.name ?? "");
  return {
    props: {
      shopParams,
    },
  };
};
