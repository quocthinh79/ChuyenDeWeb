import { useEffect, useState } from "react";
import { ProductItemCartProps } from "../../compositions/product-item-cart";
import { productItemCart } from "../../dummy-data/product-item-cart";

export interface useHandleCartItems {
  listItemsCart: ProductItemCartProps[];
  removeItemFromCart: (laptopID: number) => void;
}

export const useHandleCartItems = (): useHandleCartItems => {
  const [listItemsCart, setListItemsCart] = useState<ProductItemCartProps[]>(
    []
  );

  // TODO: Call API Cart
  console.log("Call API");

  useEffect(() => {
    setListItemsCart(productItemCart);
  }, []);

  const removeItemFromCart = (laptopID: number) => {
    setListItemsCart(
      listItemsCart?.filter((item) => item.laptopID != laptopID)
    );
    console.log("Call API Delete");
  };

  return {
    listItemsCart,
    removeItemFromCart,
  };
};
