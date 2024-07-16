import { Routes, Route } from "react-router-dom";
import "./Shop.styles.scss";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
import { useCategories } from "../../hooks/useCategories.js";

const Shop = () => {
  useCategories();

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
