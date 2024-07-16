import React from "react";
import "./ProductCard.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cartSlice";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItemToCart(product));
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
