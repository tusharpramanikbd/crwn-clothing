import React from "react";
import "./Checkout.styles.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../store/cart/cartSelector";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotalPrice);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
