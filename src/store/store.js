// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import { thunk } from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();

// const middleWares = [
//   process.env.NODE_ENV !== "production" && logger,
//   sagaMiddleware,
// ].filter(Boolean);

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// const composedEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  // If we use middleware property, we will no longer able to use middlewares that are provided by redux toolkit, which includes redux thunk
  // But we can only enable/disable particular default middleware like this:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Here we are disabling serializable check so that we can pass any type of object which can have constructor, functions, etc. Whereas redux suggest to pass plain object to payload which is in json format
    }).concat(middleWares),
});

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
