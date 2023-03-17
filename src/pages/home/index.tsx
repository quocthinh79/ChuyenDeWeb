import ProductItemLayout from "../../compositions/product-item-layout/product-item-layout";
import { laptopItemList } from "../../dummy-data/laptop-card-item-list";

function HomePage() {
  return <ProductItemLayout children={laptopItemList} />;
}

export default HomePage;
