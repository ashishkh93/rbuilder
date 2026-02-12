import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: DiamondsState = {
  diamonds: [],

  loading: true,
  dataNotFound: false,

  detailLoading: true,
  detailNotFound: false,

  isMoreData: false,

  pageInfo: {
    page: 1,
    dataCount: 0,
    diamondsReturned: 0,
  },

  diamondDetail: null,
};

const diamondsSlice = createSlice({
  name: "diamonds",
  initialState,
  reducers: {
    requestDiamonds(state) {
      state.loading = true;
      state.dataNotFound = false;
    },

    requestDiamondDetail(state) {
      state.detailLoading = true;
      state.detailNotFound = false;
    },

    receiveDiamonds(
      state,
      action: PayloadAction<{
        diamonds: Diamond[];
        pageInfo: DiamondPageInfo;
        dataCount: number;
        loadMore: boolean;
      }>
    ) {
      const { diamonds, pageInfo, dataCount, loadMore } = action.payload;

      state.diamonds = loadMore
        ? [...(state.diamonds || []), ...diamonds]
        : [...diamonds];
      state.pageInfo = { ...state.pageInfo, ...pageInfo };
      state.isMoreData = dataCount > state.diamonds?.length;

      state.loading = false;
      state.dataNotFound = diamonds.length === 0;
    },

    receiveDiamondDetail(state, action: PayloadAction<Diamond>) {
      state.diamondDetail = action.payload;
      state.detailLoading = false;
      state.detailNotFound = false;
    },

    setNoDataFound(state) {
      state.dataNotFound = true;
      state.loading = false;
      state.detailLoading = false;
    },

    resetDiamondDetail(state) {
      state.diamondDetail = null;
      state.detailLoading = false;
      state.detailNotFound = false;
    },

    resetDiamonds() {
      return initialState;
    },
  },
});

export const {
  requestDiamonds,
  receiveDiamonds,
  setNoDataFound,
  resetDiamonds,
  receiveDiamondDetail,
  resetDiamondDetail,
  requestDiamondDetail,
} = diamondsSlice.actions;

export default diamondsSlice.reducer;
