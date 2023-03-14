import { lazy } from "react";
import { laptopItemList } from "../../dummy-data";
const ProductItemLayout = lazy(
  () => import("../../compositions/product-item-layout/product-item-layout")
);

export interface ProductPageProps {}

export function ProductPage(props: ProductPageProps) {
  return <ProductItemLayout children={laptopItemList} />;
}

export default ProductPage;
