import ProductItemLayout from "../../compositions/product-item-layout/product-item-layout";
import { laptopItemList } from "../../dummy-data";

export interface ProductPageProps {}

export function ProductPage(props: ProductPageProps) {
  return <ProductItemLayout children={laptopItemList} />;
}

export default ProductPage;
