import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export const selectDiamonds = (state: RootState) => state.diamonds;

export const selectLoading = (state: RootState) => state.diamonds.loading;

export const selectHasMoreDiamonds = (state: RootState) =>
  state.diamonds.isMoreData;

export const selectDiamondPageInfo = createSelector(
  selectDiamonds,
  (diamonds) => diamonds.pageInfo
);

export const selectDiamondCards = createSelector(
  (state: RootState) => state.diamonds.diamonds,
  (diamonds) =>
    diamonds.map((diamond) => ({
      diamondId: diamond.diamondId,
      caratWeight: diamond.caratWeight,
      color: diamond.color,
      clarity: diamond.clarity,
      ratio: diamond.ratio,
      shape: diamond.shape,
      price: diamond.deptPerc,
      diamondImage: diamond.diamondImage || "",
      diamondVideo: diamond.diamondVideo || "",
      currencySymbol: diamond.currencySymbol,
    }))
);
