import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./builder/builder.slice";
import filtersReducer from "./filters/filters.slice";
import productsReducer from "./products/products.slice";
import diamondsReducer from "./diamonds/diamonds.slice";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    builder: builderReducer,
    filters: filtersReducer,
    products: productsReducer,
    diamonds: diamondsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
