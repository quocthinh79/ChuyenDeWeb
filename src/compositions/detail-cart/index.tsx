import ProductItemCart from "../../compositions/product-item-cart";
import TotalPriceInCart from "../../compositions/total-price-in-cart";
import { useHandleCartItems } from "../../hooks/use-handle-cart-items";
import LeftRightLayout from "../left-right-layout";

export function DetailCart() {
  const { totalPrice, listItemsCart, removeItemFromCart } =
    useHandleCartItems();

  return (
    <LeftRightLayout
      leftChildren={listItemsCart?.map((item, index) => (
        <ProductItemCart
          key={item.laptopID}
          {...item}
          removeItemFromCart={() => removeItemFromCart(item?.laptopID)}
        />
      ))}
      rightChildren={<TotalPriceInCart totalPrice={totalPrice} />}
    />
  );
}

export default DetailCart;
