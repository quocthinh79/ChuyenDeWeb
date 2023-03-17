import DetailProductItem from "../../compositions/detail-product-item/detail-product-item";
import detailProductItem from "../../dummy-data/detail-product-item";

export function DetailPage() {
  return <DetailProductItem {...detailProductItem} />;
}

export default DetailPage;
