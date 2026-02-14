interface ShopifyVariant {
  id: number;
  sku: string;
  option1?: string;
  option2?: string;
  option3?: string;
  name?: string;
  bandWidth?: string;
  featured_media?: {
    preview_image: {
      src: string;
    };
    [key: string]: unknown;
  };
  featured_image: {
    src: string;
    [key: string]: unknown;
  };
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
  currentUrl?: string;
  price: string;
  tags: string[];
  variants: ShopifyVariant[];
  validFirstShapes: string[];
  validSecondShapes: string[];
}
