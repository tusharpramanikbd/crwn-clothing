import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartOpen = createSelector(
  [selectCartReducer],
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
