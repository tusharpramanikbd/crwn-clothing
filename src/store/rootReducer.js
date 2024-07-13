import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/userReducer";
import { categoriesReducer } from "./categories/categoryReducer";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
