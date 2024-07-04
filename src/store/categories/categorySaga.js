import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebaseUtil";
import { fetchCategoriesSuccess, fetchCategoriesError } from "./categoryAction";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

// This is a generator function
// yield basically pause the function execution until it finishes executing the right side expression
export function* fetchCategoriesAsync() {
  try {
    // We can not call async/await inside the generator function, because async/await is created on top of generator function
    const categories = yield call(getCategoriesAndDocuments);
    // This(put()) is the generation version of dispatch
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesError(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

// This is an aggregator generator function, which aggregate multiple generator function
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
