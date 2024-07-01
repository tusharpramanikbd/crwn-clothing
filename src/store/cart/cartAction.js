import { createAction } from "../../utils/reducer/reducerUtil";
import { CART_ACTION_TYPES } from "./cartTypes";

const addCartItem = (cartItems, newProduct) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newProduct.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newProduct, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, cartItemToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = (isOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen);

export const addItemToCart = (cartItems, newProduct) => {
  const newCartItems = addCartItem(cartItems, newProduct);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
