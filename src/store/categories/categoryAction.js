import { getCategoriesAndDocuments } from "../../utils/firebase/firebaseUtil";
import { createAction } from "../../utils/reducer/reducerUtil";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesError = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.fetchCategoriesError, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};
