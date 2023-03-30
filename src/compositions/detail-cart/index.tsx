import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import Space, { SizeProps } from "../../components/space";
import ProductItemCart from "../../compositions/product-item-cart";
import TotalPriceInCart from "../../compositions/total-price-in-cart";
import { SPACE_BETWEEN_ITEMS } from "../../const";
import { sumValueArray } from "../../core/utilities/array";
import { useHandleCartItems } from "../../hooks/use-handle-cart-items";
import LeftRightLayout from "../left-right-layout";

export function DetailCart() {
  const { listItemsCart, removeItemFromCart } = useHandleCartItems();

  return (
    <LeftRightLayout
      leftChildren={listItemsCart?.map((item, index) => (
        <ProductItemCart
          key={item.laptopID}
          {...item}
          removeItemFromCart={() => removeItemFromCart(item?.laptopID)}
        />
      ))}
      rightChildren={
        <TotalPriceInCart
          totalPrice={sumValueArray(
            listItemsCart?.map(({ laptopPrice }) => laptopPrice)
          )}
        />
      }
    />
  );
}

export default DetailCart;
