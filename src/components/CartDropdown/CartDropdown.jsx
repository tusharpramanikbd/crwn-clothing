import React, { useContext } from "react";
import {
  CartDropdownConatiner,
  EmptyMessage,
  CartItems,
} from "./CartDropdown.styles";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    setIsCartOpen((value) => !value);
    navigate("/checkout");
  };

  return (
    <CartDropdownConatiner>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownConatiner>
  );
};

export default CartDropdown;
