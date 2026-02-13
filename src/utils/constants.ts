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

export const colorMarks = ["M", "L", "K", "J", "I", "H", "G", "F", "E", "D"];
export const cutMarks = ["FR", "GD", "VG", "EX", "ID"];
export const clarityMarks = [
  "I1",
  "SI2",
  "SI1",
  "VS2",
  "VS1",
  "VVS2",
  "VVS1",
  "IF",
  "FL",
];

export const fluorescenceMarks = ["None", "Faint", "Medium", "Strong"];

export const qualityMarks = ["Excellent", "Very Good", "Good"];

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
    min: 0.5,
    max: 11,
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
    marks: cutMarks,
  },
  {
    key: "color",
    label: "COLORS",
    type: "range", // 🔥 was single
    min: 0,
    max: 10,
    step: 1,
    marks: colorMarks,
  },
  {
    key: "clarity",
    label: "CLARITY",
    type: "range", // 🔥 was single
    min: 0,
    max: 9,
    step: 1,
    marks: clarityMarks,
  },
  {
    key: "fluorescence",
    label: "FLUORESCENCE",
    type: "range",
    min: 0,
    max: 4,
    step: 1,
    marks: fluorescenceMarks,
  },
] as const;

export const ADVANCED_FILTERS = [
  {
    key: "table",
    label: "TABLE",
    type: "range",
    min: 45,
    max: 100,
    step: 1,
    showInputs: true,
  },
  {
    key: "depth",
    label: "DEPTH",
    type: "range",
    min: 45,
    max: 100,
    step: 1,
    showInputs: true,
  },
  {
    key: "polish",
    label: "POLISH",
    type: "range",
    min: 0,
    max: 3,
    step: 1,
    marks: qualityMarks,
  },
  {
    key: "symmetry",
    label: "SYMMETRY",
    type: "range",
    min: 0,
    max: 3,
    step: 1,
    marks: qualityMarks,
  },
];

export const CERTIFICATES = ["igi", "gia"] as const;

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

export const RING_SIZES: FilterOption[] = [
  { id: "E", label: "E" },
  { id: "E 1/2", label: "E 1/2" },
  { id: "F", label: "F" },
  { id: "F 1/2", label: "F 1/2" },
  { id: "G", label: "G" },
  { id: "G 1/2", label: "G 1/2" },
  { id: "H", label: "H" },
  { id: "H 1/2", label: "H 1/2" },
  { id: "I", label: "I" },
  { id: "I 1/2", label: "I 1/2" },
  { id: "J", label: "J" },
  { id: "J 1/2", label: "J 1/2" },
  { id: "K", label: "K" },
  { id: "K 1/2", label: "K 1/2" },
  { id: "L", label: "L" },
  { id: "L 1/2", label: "L 1/2" },
  { id: "M", label: "M" },
  { id: "M 1/2", label: "M 1/2" },
  { id: "N", label: "N" },
  { id: "N 1/2", label: "N 1/2" },
  { id: "O", label: "O" },
  { id: "O 1/2", label: "O 1/2" },
  { id: "P", label: "P" },
  { id: "P 1/2", label: "P 1/2" },
  { id: "Q", label: "Q" },
  { id: "Q 1/2", label: "Q 1/2" },
  { id: "R", label: "R" },
  { id: "R 1/2", label: "R 1/2" },
  { id: "S", label: "S" },
  { id: "S 1/2", label: "S 1/2" },
  { id: "T", label: "T" },
  { id: "T 1/2", label: "T 1/2" },
  { id: "U", label: "U" },
  { id: "U 1/2", label: "U 1/2" },
  { id: "V", label: "V" },
  { id: "V 1/2", label: "V 1/2" },
  { id: "W", label: "W" },
  { id: "W 1/2", label: "W 1/2" },
  { id: "X", label: "X" },
  { id: "X 1/2", label: "X 1/2" },
  { id: "Y", label: "Y" },
  { id: "Y 1/2", label: "Y 1/2" },
  { id: "Z", label: "Z" },
  { id: "Z 1/2", label: "Z 1/2" },
];

export const BAND_WIDTHS: FilterOption[] = [
  { id: "1.8 mm", label: "1.8 mm" },
  { id: "2 mm", label: "2 mm" },
  { id: "2.2 mm", label: "2.2 mm" },
];
