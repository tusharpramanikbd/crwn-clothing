import React from "react";
import {
  CartIconContainer,
  ShoppingIconComponent,
  ItemCount,
} from "./CartIcon.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectCartOpen } from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartAction";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartOpen);

  const handleToggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={handleToggleCart}>
      <ShoppingIconComponent />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
