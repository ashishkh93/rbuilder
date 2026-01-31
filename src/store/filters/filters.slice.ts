import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: FiltersState = {
  currentActiveFilterDropdown: "",
  metal: null,
  shape: null,
  style: 'solitaire',
  price: [0, 50000],
  sort: "price-asc",
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
    resetFilters: () => initialState,
  },
});

export const {
  setCurrentActiveFilterDropdown,
  setMetal,
  setShape,
  setStyle,
  setPrice,
  setSort,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
