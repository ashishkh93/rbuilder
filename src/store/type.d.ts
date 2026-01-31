type BuilderStep = 1 | 2 | 3;

type SelectedSetting = {
  id: string;
  name: string;
  price: number; // raw number
};

type SelectedStone = {
  id: string;
  carat: number;
  price: number;
};

type StepData = {
  meta?: string;
  price?: number;
  [key: string]: any;
};

type BuilderState = {
  currentStep: BuilderStep;
  completedSteps: Record<BuilderStep, boolean>;
  stepData: Record<BuilderStep, StepData>;

  selectedSettingId: string | null;
  selectedStoneId: string | null;
};

type SortOrder = "price-asc" | "price-desc";

type FiltersState = {
  currentActiveFilterDropdown: string;
  metal: string | null;
  shape: string | null;
  style: string | null;
  price: [number, number];
  sort: SortOrder;
};

type MoneyV2 = {
  amount: string;
  currencyCode: string;
};

type ImageNode = {
  id: string;
  altText: string | null;
  url: string;
  width: number;
  height: number;
};

type ImageEdge = {
  node: ImageNode;
};

type SelectedOption = {
  name: string;
  value: string;
};

type VariantNode = {
  id: string;
  title: string;
  sku: string;
  price: MoneyV2;
  priceV2?: MoneyV2;
  selectedOptions: SelectedOption[];
  image: {
    src?: string;
    url?: string;
  };
};

type VariantEdge = {
  node: VariantNode;
};

type ProductNode = {
  id: string;
  handle: string;
  title: string;
  tags: string[];
  priceRange: {
    minVariantPrice: MoneyV2;
    maxVariantPrice: MoneyV2;
  };
  images: {
    edges: ImageEdge[];
  };
  variants: {
    edges: VariantEdge[];
  };
  metafields: (any | null)[];
  selectedVariantId?: string;
};

type ProductEdge = {
  cursor: string;
  node: ProductNode;
};

type PageInfo = {
  startCursor: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type ProductsData = {
  pageInfo: PageInfo;
  edges: ProductEdge[];
};

type RingProductsResponse = {
  data: {
    products: ProductsData;
  };
  extensions?: {
    cost: {
      requestedQueryCost: number;
    };
  };
};

type PageInfo = {
  startCursor: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type ProductFilters = {
  metal?: string | null;
  shape?: string | null;
  price?: [number, number];
};

type ProductsState = {
  items: EngagementRing[];
  topSellingItems: EngagementRing[];

  loading: boolean;
  sendRequest: boolean;
  dataNotFound: boolean;
  isMoreData: boolean;

  page: number;
  diamondCount: number;
  pageInfo: PageInfo;
};

type EngagementRing = {
  currency?: string;
  selectedVariantId: string;
  handle: string;
  name: string;
  tags: string[];
  image?: string;
  sku: string;
  price: string;
  hoverImage?: string;
};
