type RagneKeys = "price" | "carat";

type SingleKeys = "cut" | "color" | "clarity" | "shape" | "priceSort" | "type";

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
