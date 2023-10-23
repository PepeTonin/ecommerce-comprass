import { createSlice } from "@reduxjs/toolkit";

interface storedItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
  productQuantity: number;
  productTotalPrice: number;
}

interface receivedItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
}

const initialState: storedItemType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: storedItemType[], { payload }) {
      const { id, productUnitPrice } = payload as receivedItemType;
      const find = state.find((item: storedItemType) => item.id === id);
      if (find) {
        return state.map((item: storedItemType) =>
          item.id === id
            ? { ...item, productQuantity: item.productQuantity + 1 }
            : item
        );
      } else {
        state.push({
          ...payload,
          productQuantity: 1,
          productTotalPrice: productUnitPrice,
        });
      }
    },

    increment(state: storedItemType[], { payload }) {
      return state.map((item: storedItemType) =>
        item.id === payload
          ? { ...item, productQuantity: item.productQuantity + 1 }
          : item
      );
    },

    decrement(state: storedItemType[], { payload }) {
      return state.map((item: storedItemType) =>
        item.id === payload
          ? { ...item, productQuantity: item.productQuantity - 1 }
          : item
      );
    },

    removeItem: (state: storedItemType[], action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },

    clearCart(state: storedItemType[]) {
      return initialState;
    },
  },
});

export const { addToCart, increment, decrement, removeItem, clearCart } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
