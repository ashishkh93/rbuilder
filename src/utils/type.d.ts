type RagneKeys =
  | "price"
  | "carat"
  | "fluorescence"
  | "table"
  | "depth"
  | "polish"
  | "symmetry";

type SingleKeys = "cut" | "color" | "clarity" | "shape" | "priceSort" | "type" | "lab";

interface DiamondFilterConfig {
  key: RagneKeys | SingleKeys;
  label: string;
  type: "range" | "single";
  min: number;
  max: number;
  step: number;
  showInputs?: boolean;
  marks?: string[];
  ticks?: number[];
}
