export const OPTION_MAP = {
  metal: "Metal Color",
  shape: "Shape",
} as const;

export const VALUE_MAP: Record<
  keyof typeof OPTION_MAP,
  Record<string, string>
> = {
  metal: {
    "14k-white-gold": "14K White",
    "14k-rose-gold": "14K Rose",
    "14k-yellow-gold": "14K Yellow",
    "18k-white-gold": "18K White",
    "18k-rose-gold": "18K Rose",
    "18k-yellow-gold": "18K Yellow",
    platinum: "Platinum",
  },
  shape: {
    round: "Round",
    oval: "Oval",
    cushion: "Cushion",
    emerald: "Emerald",
    princess: "Princess",
    radiant: "Radiant",
    pear: "Pear",
    marquise: "Marquise",
    asscher: "Asscher",
    heart: "Heart",
  },
};

/**
 * Extract option value by name from variant options
 */
const getOptionValue = (
  options: VariantNode["selectedOptions"],
  optionName: string
): string => {
  return options?.find((opt) => opt.name === optionName)?.value ?? "";
};

/**
 * Map filter slug to variant display value
 */
const getMappedFilterValue = (
  filterKey: keyof typeof OPTION_MAP,
  filterValue?: string | null
): string | null => {
  if (!filterValue) return null;
  return VALUE_MAP[filterKey]?.[filterValue] ?? filterValue;
};

/**
 * Main filter function
 */
export const getFilteredProducts = (
  response: RingProductsResponse,
  filters: ProductFilters
): (ProductNode & { selectedVariantId: string })[] | null => {
  const products = response?.data?.products?.edges?.map((e) => e.node) ?? [];

  if (!products.length) return null;

  const optionKeys = Object.keys(OPTION_MAP) as Array<keyof typeof OPTION_MAP>;

  const [minPrice = 0, maxPrice = Infinity] = filters.price ?? [];

  return products
    .map((product) => {
      const matchingVariant = product.variants.edges.find(
        ({ node: variant }) => {
          const options = variant.selectedOptions ?? [];

          // Extract variant option values once
          const optionValues = Object.fromEntries(
            optionKeys.map((key) => [
              key,
              getOptionValue(options, OPTION_MAP[key]),
            ])
          ) as Record<keyof typeof OPTION_MAP, string>;

          // Check option filters
          const matchesOptions = optionKeys.every((key) => {
            const filterValue = filters[key];
            if (!filterValue) return true;

            const mappedFilter = getMappedFilterValue(key, filterValue);
            return optionValues[key] === mappedFilter;
          });

          if (!matchesOptions) return false;

          // Price check
          const price = Number(variant.price?.amount ?? 0);
          return price >= minPrice && price <= maxPrice;
        }
      )?.node;

      if (!matchingVariant) return null;

      return {
        ...product,
        selectedVariantId: matchingVariant.id,
      };
    })
    .filter(
      (product): product is ProductNode & { selectedVariantId: string } =>
        product !== null
    );
};
