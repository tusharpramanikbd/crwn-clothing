import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { cartReducer } from "./cart/cartSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
