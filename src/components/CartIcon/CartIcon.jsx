import React, { useContext } from "react";
import {
  CartIconContainer,
  ShoppingIconComponent,
  ItemCount,
} from "./CartIcon.styles";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { setIsCartOpen, cartItemCount } = useContext(CartContext);

  const handleToggleCart = () => setIsCartOpen((value) => !value);

  return (
    <CartIconContainer onClick={handleToggleCart}>
      <ShoppingIconComponent />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
