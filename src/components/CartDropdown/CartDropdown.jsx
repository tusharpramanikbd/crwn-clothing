import React from "react";
import "./CartDropdown.styles.scss";
import Button from "../Button/Button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
