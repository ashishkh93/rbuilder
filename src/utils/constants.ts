export const RING_CATEGORIES = [
  { id: "solitaire", label: "Solitaire", icon: "solitaire" },
  { id: "pave", label: "Pave", icon: "pave" },
  { id: "halo", label: "Halo", icon: "halo" },
  { id: "nature", label: "Nature", icon: "nature" },
  { id: "hiddenHalo", label: "Hidden Halo", icon: "hiddenHalo", active: true },
  { id: "sideStone", label: "Side Stone", icon: "sideStone" },
  { id: "threeStone", label: "Three Stone", icon: "threeStone" },
  { id: "vintage", label: "Vintage", icon: "vintage" },
];

export const getStyleLabel = (id: string) => {
  return RING_CATEGORIES.find((opt) => opt.id === id)?.label || "";
};

export const PRICE_FILTER_OPTIONS = [
  { id: "price-desc", label: "Price(high to low)" },
  { id: "price-asc", label: "Price(low to high)" },
];

export const getPriceLabel = (id: string) => {
  return PRICE_FILTER_OPTIONS.find((opt) => opt.id === id)?.label || "";
};

export const STONE_FILTERS: DiamondFilterConfig[] = [
  {
    key: "price",
    label: "PRICE",
    type: "range",
    min: 0,
    max: 120000,
    step: 5,
    showInputs: true,
  },
  {
    key: "carat",
    label: "CARAT",
    type: "range",
    min: 0,
    max: 5,
    step: 0.1,
    showInputs: true,
  },
  {
    key: "cut",
    label: "CUT",
    type: "range", // 🔥 was single
    min: 0,
    max: 5, // marks.length
    step: 1,
    marks: ["FR", "GD", "VG", "EX", "ID"],
  },
  {
    key: "color",
    label: "COLORS",
    type: "range", // 🔥 was single
    min: 0,
    max: 10,
    step: 1,
    marks: ["M", "L", "K", "J", "I", "H", "G", "F", "E", "D"],
  },
  {
    key: "clarity",
    label: "CLARITY",
    type: "range", // 🔥 was single
    min: 0,
    max: 9,
    step: 1,
    marks: ["I1", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"],
  },
] as const;

export const STONES: StoneCardProps["stone"][] = [
  {
    id: "1",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp",
    shape: "Radiant",
    price: 1160,
    priceWithSetting: 2310,
    carat: 2.09,
    color: "F",
    clarity: "VVS2",
    ratio: 1.5,
  },
  {
    id: "2",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp",
    shape: "Round",
    price: 980,
    priceWithSetting: 2050,
    carat: 1.82,
    color: "E",
    clarity: "VS1",
    ratio: 1.0,
  },
  {
    id: "3",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp",
    shape: "Oval",
    price: 1320,
    priceWithSetting: 2490,
    carat: 2.1,
    color: "D",
    clarity: "VVS1",
    ratio: 1.42,
  },
];
