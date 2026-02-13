import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductsState = {
  items: [],
  topSellingItems: [],

  loading: false,
  sendRequest: false,
  dataNotFound: false,
  isMoreData: false,

  page: 1,
  diamondCount: 0,
  pageInfo: {
    startCursor: null,
    endCursor: null,
    hasNextPage: false,
    hasPreviousPage: false,
  },

  settingDetail: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    requestProducts(state) {
      state.loading = true;
      state.sendRequest = true;
      state.dataNotFound = false;
    },

    receiveProducts(
      state,
      action: PayloadAction<{
        items: EngagementRing[];
        pageInfo: PageInfo;
        diamondCount: number;
        append?: boolean;
      }>
    ) {
      const { items, pageInfo, diamondCount, append } = action.payload;

      state.items = append ? [...state.items, ...items] : items;
      state.pageInfo = pageInfo;
      state.diamondCount = diamondCount;
      state.isMoreData = pageInfo.hasNextPage;

      state.loading = false;
      state.sendRequest = false;
      state.dataNotFound = items.length === 0;
    },

    setTopSellingItems(state, action: PayloadAction<EngagementRing[]>) {
      state.topSellingItems = action.payload;
    },

    selectSettingDetail(state, action: PayloadAction<EnrichedVariant>) {
      state.settingDetail = action.payload;
    },

    resetProducts() {
      return initialState;
    },
  },
});

export const {
  requestProducts,
  receiveProducts,
  setTopSellingItems,
  resetProducts,
  selectSettingDetail,
} = productsSlice.actions;

export default productsSlice.reducer;
