import {
  IGetCartOfUserRes,
  apiAddToCart,
  apiGetCartOfUser,
  apiReduceItem,
  apiRemoveItemInCart,
} from "@core";
import { useStorageToken } from "@store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ProductItemCart from "../../compositions/product-item-cart";
import TotalPriceInCart from "../../compositions/total-price-in-cart";
import LeftRightLayout from "../left-right-layout";

export function DetailCart() {
  const { token } = useStorageToken();

  const {
    data,
    refetch,
    isSuccess: loadingAdd,
  } = useQuery<IGetCartOfUserRes>({
    refetchOnWindowFocus: false,
    queryKey: ["getCartItems"],
    queryFn: () => apiGetCartOfUser({ token }),
  });

  const { laptopDTOs, totalPayment } = data || {};

  const { mutate: removeItem, isSuccess: loadingRemove } = useMutation({
    mutationKey: ["removeItemFromCart"],
    mutationFn: apiRemoveItemInCart,
    onSuccess(data, variables, context) {
      console.log(data);
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });

  const { mutate: addProductToCart, isSuccess: loadingAddToCart } = useMutation(
    {
      mutationKey: ["addProductToCart"],
      mutationFn: apiAddToCart,
      onSuccess(data, variables, context) {
        console.log(data);
      },
      onError(error, variables, context) {
        console.log(error);
      },
    }
  );

  const { mutate: reduceItem, isSuccess: loadingReduce } = useMutation({
    mutationKey: ["apiReduceItem"],
    mutationFn: apiReduceItem,
    onSuccess(data, variables, context) {
      console.log(data);
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });

  const removeItemFromCart = (laptopID: number) => {
    removeItem({ token: token, ids: [laptopID] });
  };

  useEffect(() => {
    refetch();
  }, [loadingRemove, loadingAdd, loadingAddToCart, loadingReduce]);

  return (
    <LeftRightLayout
      leftChildren={laptopDTOs?.map(
        (
          {
            id,
            linkAvatar,
            price,
            productName,
            quantity,
            cpu,
            ram,
            storage,
            weight,
          },
          index
        ) => {
          return (
            <ProductItemCart
              key={id}
              laptopID={id}
              laptopImage={linkAvatar}
              laptopName={productName}
              laptopPrice={price}
              quantity={quantity}
              laptopSummary={[cpu, ram, storage]}
              removeItemFromCart={() => removeItemFromCart(id)}
              increase={() =>
                addProductToCart({ laptopId: id, quantity: 1, token: token })
              }
              decrease={() => reduceItem({ token: token, ids: [id] })}
            />
          );
        }
      )}
      rightChildren={<TotalPriceInCart totalPrice={totalPayment || 0} />}
    />
  );
}

export default DetailCart;
