import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: FiltersState = {
  currentActiveFilterDropdown: "",
  metal: null,
  shape: null,
  style: "solitaire",
  price: [0, 50000],
  sort: "price-asc",
  diamondFilter: {
    type: "lab",
    price: [0, 50000],
    carat: [0.5, 5],
    cut: [1, 3], // GD → EX
    color: [0, 9], // M → D
    clarity: [3, 8], // VS2 → FL,
    shape: null,
    priceSort: "price-asc",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurrentActiveFilterDropdown: (s, a: PayloadAction<string>) => {
      s.currentActiveFilterDropdown =
        s.currentActiveFilterDropdown === a.payload ? "" : a.payload;
    },
    setMetal: (s, a: PayloadAction<string | null>) => {
      s.metal = a.payload;
    },
    setShape: (s, a: PayloadAction<string | null>) => {
      s.shape = a.payload;
    },
    setStyle: (s, a: PayloadAction<string | null>) => {
      s.style = a.payload;
    },
    setPrice: (s, a: PayloadAction<[number, number]>) => {
      s.price = a.payload;
    },
    setSort: (s, a: PayloadAction<SortOrder>) => {
      s.sort = a.payload;
    },

    setDiamondRange: (
      s,
      a: PayloadAction<{
        key: RagneKeys;
        value: DiamondRange;
      }>
    ) => {
      s.diamondFilter[a.payload.key] = a.payload.value;
    },

    setDiamondSingle: (
      s,
      a: PayloadAction<{
        key: SingleKeys;
        value: SliderValue | SortOrder | null;
      }>
    ) => {
      const { key, value } = a.payload;
      if (key === "priceSort") {
        s.diamondFilter.priceSort = value as SortOrder;
      } else {
        s.diamondFilter[key as Exclude<SingleKeys, "priceSort" | "type">] =
          value as SliderValue | null;
      }
    },
    resetAllFilters: () => initialState,
    resetRingFilters: (state) => {
      state.metal = initialState.metal;
      state.shape = initialState.shape;
      state.style = initialState.style;
      state.price = initialState.price;
      state.sort = initialState.sort;
    },
    resetDiamondFilters: (state) => {
      state.diamondFilter = initialState.diamondFilter;
    },
  },
});

export const {
  setCurrentActiveFilterDropdown,
  setMetal,
  setShape,
  setStyle,
  setPrice,
  setSort,
  resetAllFilters,
  setDiamondRange,
  setDiamondSingle,
  resetRingFilters,
  resetDiamondFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
