import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  // If we use middleware property, we will no longer able to use middlewares that are provided by redux toolkit, which includes redux thunk
  // But we can only enable/disable particular default middleware like this:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Here we are disabling serializable check so that we can pass any type of object which can have constructor, functions, etc. Whereas redux suggest to pass plain object to payload which is in json format
    }).concat(middleWares),
});
