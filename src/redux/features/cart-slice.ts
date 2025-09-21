import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  items: CartItem[];
};

type CartItem = {
  _id: string; // 👈 change to string
  name: string;
  description: string;
  price: number;
  mrp: number;
  quantity: number;
  image_url?: string; // 👈 looks like your Product has `image_url: string`, not object
  size?: string;
};

const initialState: InitialState = {
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const { _id, name, description, price, quantity, mrp, image_url, size } =
        action.payload;

      const existingItem = state.items.find(
        (item) => item._id === _id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          _id,
          name,
          description,
          price,
          quantity,
          mrp,
          image_url,
          size,
        });
      }
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },

    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ _id: string; size?: string; quantity: number }>
    ) => {
      const { _id, size, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item._id === _id && item.size === size
      );
      if (existingItem) existingItem.quantity = quantity;
    },

    removeAllItemsFromCart: (state) => {
      state.items = [];
    },

    loadCartFromStorage: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const selectCartItems = (state: RootState) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) => {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  removeAllItemsFromCart,
} = cart.actions;
export default cart.reducer;
