interface ShopifyVariant {
  id: number;
  option1?: string;
  option2?: string;
  option3?: string;
  [key: string]: unknown;
}

interface ShopifyProduct {
  id: number;
  title: string;
  tags: string[];
  variants: ShopifyVariant[];
  type: string;
}

interface SecondShape {
  [key: string]: string;
}

interface EnrichedVariant extends ShopifyVariant {
  id: string | number;
  title: string;
  price: string;
  tags: string[];
  variants: ShopifyVariant[];
  validFirstShapes: string[];
  validSecondShapes: string[];
}
