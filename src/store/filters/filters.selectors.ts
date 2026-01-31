import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";

/**
 * Base selector
 * (never use state.filters directly in components)
 */
const selectFiltersState = (state: RootState) => state.filters;

/**
 * Atomic selectors (fine-grained subscriptions)
 */
export const selectCurrentActiveFilterDropdown = createSelector(
  selectFiltersState,
  (filters) => filters.currentActiveFilterDropdown
);

export const selectMetalFilter = createSelector(
  selectFiltersState,
  (filters) => filters.metal
);

export const selectShapeFilter = createSelector(
  selectFiltersState,
  (filters) => filters.shape
);

export const selectStyleFilter = createSelector(
  selectFiltersState,
  (filters) => filters.style
);

export const selectPriceFilter = createSelector(
  selectFiltersState,
  (filters) => filters.price
);

/**
 * Composite selector (useful for filtering logic)
 */
export const selectActiveFilters = createSelector(
  selectFiltersState,
  (filters) => ({
    metal: filters.metal,
    shape: filters.shape,
    style: filters.style,
    price: filters.price,
  })
);

/**
 * Derived selector – used for UI (filter chips, reset button, etc.)
 */
export const selectHasActiveFilters = createSelector(
  selectFiltersState,
  (filters) =>
    Boolean(
      filters.metal ||
      filters.shape ||
      filters.style ||
      filters.price[0] !== 0 ||
      filters.price[1] !== 50000
    )
);

export const selectSortOrder = createSelector(
  selectFiltersState,
  (filters) => filters.sort
);

export const selectFilterChips = createSelector(
  selectFiltersState,
  (filters) => {
    const chips: { key: string; label: string }[] = [];

    if (filters.metal)
      chips.push({ key: "metal", label: `Metal: ${filters.metal}` });

    if (filters.shape)
      chips.push({ key: "shape", label: `Shape: ${filters.shape}` });

    if (filters.style)
      chips.push({ key: "style", label: `Style: ${filters.style}` });

    if (filters.price[0] !== 0 || filters.price[1] !== 50000)
      chips.push({
        key: "price",
        label: `Price: ${filters.price[0]} – ${filters.price[1]}`,
      });

    return chips;
  }
);

export const selectFiltersForQuery = createSelector(
  (state: RootState) => state.filters,
  (f) => {
    const [minPrice, maxPrice] = f.price;

    return {
      metal: f.metal,
      shape: f.shape,
      style: f.style,
      minPrice,
      maxPrice,
      price: f.price,
      sortKey:
        f.sort === "price-asc" || f.sort === "price-desc"
          ? "PRICE"
          : "BEST_SELLING",
      reverse: f.sort === "price-desc",
    };
  }
);
