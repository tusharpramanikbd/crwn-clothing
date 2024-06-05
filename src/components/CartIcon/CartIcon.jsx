import React, { useContext } from "react";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { setIsCartOpen, cartItemCount } = useContext(CartContext);

  const handleToggleCart = () => setIsCartOpen((value) => !value);

  return (
    <div className="cart-icon-container" onClick={handleToggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
