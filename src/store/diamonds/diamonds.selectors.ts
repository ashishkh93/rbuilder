import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { getDiamondType } from "@/utils/common.util";

export const selectDiamonds = (state: RootState) => state.diamonds;

export const selectLoading = (state: RootState) => state.diamonds.loading;

export const selectDetailLoading = (state: RootState) =>
  state.diamonds.detailLoading;

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
      certificateNumber: diamond.certificateNumber,
      caratWeight: diamond.caratWeight,
      color: diamond.color,
      clarity: diamond.clarity,
      ratio: diamond.ratio,
      shape: diamond.shape,
      price: diamond.finalPriceEur,
      diamondImage: diamond.diamondImage || "",
      diamondVideo: diamond.diamondVideo || "",
      currencySymbol: diamond.currencySymbol,
    }))
);

export const selectDiamondDetail = (state: RootState) =>
  state.diamonds.diamondDetail;

export const selectDiamondPrice = (state: RootState) =>
  state.diamonds.diamondDetail?.finalPriceEur;

export const selectDiamondId = (state: RootState) =>
  state.diamonds.diamondDetail?.diamondId;

export const selectDiamondCarat = (state: RootState) =>
  state.diamonds.diamondDetail?.caratWeight;

export const selectDiamondShape = (state: RootState) =>
  state.diamonds.diamondDetail?.shape;

export const selectDiamondType = (state: RootState) =>
  state.diamonds.diamondDetail?.diamondType;

export const selectDiamondCurrencySymbol = (state: RootState) =>
  state.diamonds.diamondDetail?.currencySymbol;

export const selectDiamondColor = (state: RootState) =>
  state.diamonds.diamondDetail?.color;

export const selectDiamondClarity = (state: RootState) =>
  state.diamonds.diamondDetail?.clarity;

export const selectDiamondRatio = (state: RootState) =>
  state.diamonds.diamondDetail?.ratio;

export const selectDiamondLab = (state: RootState) =>
  state.diamonds.diamondDetail?.lab;

export const selectDiamondDimensions = createSelector(
  selectDiamondDetail,
  (d) => ({
    dimensions: `${d?.length} x ${d?.width}`,
  })
);

export const selectDiamondTitle = createSelector(
  selectDiamondDetail,
  (diamond) => ({
    title: `${diamond?.caratWeight}CT ${diamond?.shape} Cut ${getDiamondType(
      diamond?.diamondType || ""
    )} Diamond`,
  })
);
