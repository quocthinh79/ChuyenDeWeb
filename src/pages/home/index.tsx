import ProductItemLayout from "../../compositions/product-item-layout/product-item-layout";
import { laptopItemList } from "../../dummy-data";

function HomePage() {
  return <ProductItemLayout children={laptopItemList} />;
}

export default HomePage;
