import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Categories.styles.scss";
import { CategoriesList } from "../../assets/data/CategoriesList";

const Categories = () => {
  return CategoriesList.map(({ id, ...category }) => (
    <CategoryItem key={`category-${id}`} category={category} />
  ));
};

export default Categories;
