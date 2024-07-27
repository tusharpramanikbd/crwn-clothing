import { createSelector } from "@reduxjs/toolkit";
import { CartState } from "./cartSlice";
import { RootState } from "../rootReducer";

const selectCartSlice = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cart) => cart.cartItems
);

export const selectCartOpen = createSelector(
  [selectCartSlice],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartitem) => total + cartitem.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cartitem) => total + cartitem.quantity * cartitem.price,
      0
    )
);
