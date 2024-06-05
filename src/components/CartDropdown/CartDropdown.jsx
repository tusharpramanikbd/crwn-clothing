import React, { useContext } from "react";
import "./CartDropdown.styles.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
