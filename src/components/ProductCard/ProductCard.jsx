import React from "react";
import "./ProductCard.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleClick = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleClick} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
