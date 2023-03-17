import ProductItemLayout from "../../compositions/product-item-layout/product-item-layout";
import { laptopItemList } from "../../dummy-data/laptop-card-item-list";

export interface ProductPageProps {}

export function ProductPage(props: ProductPageProps) {
  return <ProductItemLayout children={laptopItemList} />;
}

export default ProductPage;
