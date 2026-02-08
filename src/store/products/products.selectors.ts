import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export const selectProductsState = (state: RootState) => state.products;

export const selectProducts = createSelector(
  selectProductsState,
  (products) => products.items
);

export const selectTopSellingProducts = createSelector(
  selectProductsState,
  (products) => products.topSellingItems
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (products) => products.loading
);

export const selectHasMoreProducts = createSelector(
  selectProductsState,
  (products) => products.pageInfo.hasNextPage
);

export const selectPageInfo = createSelector(
  selectProductsState,
  (products) => products.pageInfo
);

export const selectDiamondCount = createSelector(
  selectProductsState,
  (products) => products.diamondCount
);

export const selectProductCards = createSelector(
  (state: RootState) => state.products.items,
  (items) =>
    items.map((item) => ({
      id: item.handle,
      title: item.name,
      price: item.price,
      primaryImage: item.image || "",
      hoverImage: item.hoverImage || item.image || "", // fallback
      badge: item.tags,
      currency: item.currency,
    }))
);
