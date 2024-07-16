import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../utils/firebase/firebaseUtil";
import { setCategories } from "../store/categories/categoriesSlice";

export const useCategories = () => {
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    try {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    } catch (error) {
      console.error("Category fetch error: " + error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
};
