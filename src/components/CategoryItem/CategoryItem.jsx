import React from "react";
import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./CategoryItem.style";
import { useNavigate } from "react-router-dom";

function CategoryItem({ category }) {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
