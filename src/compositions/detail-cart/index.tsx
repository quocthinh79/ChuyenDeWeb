import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import Space, { SizeProps } from "../../components/space";
import ProductItemCart from "../../compositions/product-item-cart";
import TotalPriceInCart from "../../compositions/total-price-in-cart";
import { SPACE_BETWEEN_ITEMS } from "../../const";
import { sumValueArray } from "../../core/utilities/array";
import { productItemCart } from "../../dummy-data/product-item-cart";

export function DetailCart() {
  const priceItem = productItemCart.map(({ laptopPrice }, index) => {
    return laptopPrice;
  });

  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      <Col span={16}>
        <Space size={SizeProps.Middle} widthFull>
          {productItemCart?.map((item, index) => (
            <ProductItemCart key={`${item.laptopName}${index}`} {...item} />
          ))}
        </Space>
      </Col>
      <Col span={8}>
        <TotalPriceInCart totalPrice={sumValueArray(priceItem)} />
      </Col>
    </Row>
  );
}

export default DetailCart;
