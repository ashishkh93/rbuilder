import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: DiamondsState = {
  diamonds: [],

  loading: false,
  dataNotFound: false,
  isMoreData: false,

  pageInfo: {
    page: 1,
    dataCount: 0,
    diamondsReturned: 0,
  },
};

const diamondsSlice = createSlice({
  name: "diamonds",
  initialState,
  reducers: {
    requestDiamonds(state) {
      state.loading = true;
      state.dataNotFound = false;
    },

    receiveDiamonds(
      state,
      action: PayloadAction<{
        diamonds: Diamond[];
        pageInfo: DiamondPageInfo;
        dataCount: number;
      }>
    ) {
      const { diamonds, pageInfo, dataCount } = action.payload;

      state.diamonds = [...(state.diamonds || []), ...diamonds];
      state.pageInfo = { ...state.pageInfo, ...pageInfo };
      state.isMoreData = state.diamonds?.length > dataCount;

      state.loading = false;
      state.dataNotFound = diamonds.length === 0;
    },

    setNoDataFound(state) {
      state.dataNotFound = true;
      state.loading = false;
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
} = diamondsSlice.actions;

export default diamondsSlice.reducer;
