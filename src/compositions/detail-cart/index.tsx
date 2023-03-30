import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import Space, { SizeProps } from "../../components/space";
import ProductItemCart from "../../compositions/product-item-cart";
import TotalPriceInCart from "../../compositions/total-price-in-cart";
import { SPACE_BETWEEN_ITEMS } from "../../const";
import { sumValueArray } from "../../core/utilities/array";
import { useHandleCartItems } from "../../hooks/use-handle-cart-items";

export function DetailCart() {
  const { listItemsCart, removeItemFromCart } = useHandleCartItems();

  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      <Col span={16}>
        <Space size={SizeProps.Middle} widthFull>
          {listItemsCart?.map((item, index) => (
            <ProductItemCart
              key={item.laptopID}
              {...item}
              removeItemFromCart={() => removeItemFromCart(item?.laptopID)}
            />
          ))}
        </Space>
      </Col>
      <Col span={8}>
        <TotalPriceInCart
          totalPrice={sumValueArray(
            listItemsCart?.map(({ laptopPrice }) => laptopPrice)
          )}
        />
      </Col>
    </Row>
  );
}

export default DetailCart;
