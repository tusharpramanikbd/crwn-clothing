import { createSelector } from "reselect";
import { CategoriesState, CategoryItem } from "./categoriesSlice";

type CategoryMap = {
  [key: string]: CategoryItem[];
};

const selectCategoryReducer = (state: any): CategoriesState => state.categories;

// Memoised Selector
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
