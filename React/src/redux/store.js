import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/CategoriesSlice.js";
import productsReducer from "./products/productsSlice"
import recommendedReducer from "./recommended/recommendedSlice"
import cartReducer from "./cart/cartSlice.js"

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedReducer,
  cart: cartReducer
});


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] 
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});




export const persistor = persistStore(store);