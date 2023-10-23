import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

interface storedItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
  productQuantity: number;
  productTotalPrice: number;
}

const cartSelector = (state: RootState) => state.cart;

export const cartTotalProductsSelector = createSelector(
  [cartSelector],
  (cart) =>
    cart.reduce(
      (total: number, current: storedItemType) =>
        (total += current.productQuantity),
      0
    )
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total: number, current: storedItemType) =>
      (total += current.productUnitPrice * current.productQuantity),
    0
  )
);

export const totalAmountOfAnItemById = createSelector(
  [(state: RootState) => state.cart, (state: RootState, id) => id],
  (cart, id) => cart.find((item) => item.id === id)?.productQuantity
);
