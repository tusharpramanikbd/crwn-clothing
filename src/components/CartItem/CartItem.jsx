import React from "react";
import "./CartItem.styles.scss";

const CartItem = ({ cartItem }) => {
  const { id, name, quantity } = cartItem;
  return (
    <div key={id}>
      <h1>{name}</h1>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
