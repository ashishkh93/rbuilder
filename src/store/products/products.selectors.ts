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

export const selectedSettingDetail = createSelector(
  selectProductsState,
  (products) => products.settingDetail
);

export const selectedSettingTitle = createSelector(
  (state: RootState) => state.products.settingDetail,
  (d) => ({
    title: `${d?.bandWidth} ${(d?.name ?? "").split("-")[0]}`,
    // title: `${d?.bandWidth} ${(d?.name ?? "").split("-")[0]} ${d?.tags?.[0]}`,
  })
);

export const selectedSettingSubtitle = createSelector(
  (state: RootState) => state.products.settingDetail,
  (d) => ({
    subTtitle: `${d?.option1} Gold`,
  })
);

export const selectedSettingPrice = (state: RootState) =>
  state.products.settingDetail?.price;

export const selectedSettingCurrency = (state: RootState) =>
  state.products.settingDetail?.currencyCode;

export const selectSettingBandWidth = (state: RootState) =>
  state.products.settingDetail?.bandWidth;

export const selectSettingDetailForFinalPage = createSelector(
  (state: RootState) => state.products.settingDetail,
  (d) => ({
    sku: d?.sku || "",
    width: d?.bandWidth || "",
    centerStoneShape: d?.option2 || "",
    material: `${d?.option1} Gold` || "",
    style: d?.tags?.[0] || "",
    profile: (d?.profile as string) || "High",
  })
);
