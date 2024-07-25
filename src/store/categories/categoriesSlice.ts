import { createSlice } from "@reduxjs/toolkit";

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setCategoriesLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setCategories, setCategoriesLoading } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
