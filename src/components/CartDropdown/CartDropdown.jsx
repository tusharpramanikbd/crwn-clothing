import React from "react";
import {
  CartDropdownConatiner,
  EmptyMessage,
  CartItems,
} from "./CartDropdown.styles";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartAction";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    dispatch(setIsCartOpen(false));
    navigate("/checkout");
  };

  return (
    <CartDropdownConatiner>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownConatiner>
  );
};

export default CartDropdown;
