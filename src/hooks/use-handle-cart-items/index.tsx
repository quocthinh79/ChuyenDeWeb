import { useEffect, useState } from "react";
import { ProductItemCartProps } from "../../compositions/product-item-cart";
import { productItemCart } from "../../dummy-data/product-item-cart";
import { sumValueArray } from "@core";

export interface useHandleCartItems {
  listItemsCart: ProductItemCartProps[];
  totalPrice: number;
  totalProduct: number;
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

  const totalPriceOfCart: number = sumValueArray(
    listItemsCart?.map(({ laptopPrice }) => laptopPrice)
  );

  // const totalPriceOfItem = (laptopID: number) => {
  //   return 0;
  // };

  const removeItemFromCart = (laptopID: number) => {
    setListItemsCart(
      listItemsCart?.filter((item) => item.laptopID != laptopID)
    );
    console.log("Call API Delete");
  };

  return {
    totalProduct: listItemsCart?.length,
    totalPrice: totalPriceOfCart,
    listItemsCart,
    removeItemFromCart,
  };
};
