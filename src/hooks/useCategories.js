import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../utils/firebase/firebaseUtil";
import {
  setCategories,
  setCategoriesLoading,
} from "../store/categories/categoriesSlice";

export const useCategories = () => {
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    try {
      dispatch(setCategoriesLoading(true));
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategoriesLoading(false));
      dispatch(setCategories(categories));
    } catch (error) {
      console.error("Category fetch error: " + error);
      dispatch(setCategoriesLoading(false));
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
};
