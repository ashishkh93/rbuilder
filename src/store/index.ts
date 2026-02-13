import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import builderReducer from "./builder/builder.slice";
import filtersReducer from "./filters/filters.slice";
import productsReducer from "./products/products.slice";
import diamondsReducer from "./diamonds/diamonds.slice";

/* --------------------------------------------
   Root Reducer
--------------------------------------------- */
const rootReducer = combineReducers({
  builder: builderReducer,
  filters: filtersReducer,
  products: productsReducer,
  diamonds: diamondsReducer,
});

/* --------------------------------------------
   Persist Config
--------------------------------------------- */
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // whitelist: ["builder", "filters"], // 👈 persist only selected slices
  // blacklist: ["products"],           // 👈 OR exclude slices
};

/* --------------------------------------------
   Persisted Reducer
--------------------------------------------- */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* --------------------------------------------
   Store
--------------------------------------------- */
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/* --------------------------------------------
   Persistor
--------------------------------------------- */
export const persistor = persistStore(store);

/* --------------------------------------------
   Types
--------------------------------------------- */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* --------------------------------------------
   Typed Hooks
--------------------------------------------- */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
