import { createContext, useEffect, useState } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const newCartItemCount = cartItems.reduce(
      (total, cartitem) => total + cartitem.quantity,
      0
    );
    setCartItemCount(newCartItemCount);
  }, [cartItems]);

  const addItemToCart = (newProduct) => {
    setCartItems(addCartItem(cartItems, newProduct));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
