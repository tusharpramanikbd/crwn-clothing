import React, { useEffect, useState } from "react";
import "./Category.styles.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categorySelector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-route-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
