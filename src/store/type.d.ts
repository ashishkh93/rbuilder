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

type SelectSettingPayload =
  | {
      type: "select";
      id: string;
      meta: string;
      price: number;
    }
  | {
      type: "reset";
    };

type SelectStonePayload =
  | {
      type: "select";
      id: string;
      meta: string;
      price: number;
    }
  | {
      type: "reset";
    };

type BuilderState = {
  currentStep: BuilderStep;
  completedSteps: Record<BuilderStep, boolean>;
  stepData: Record<BuilderStep, StepData>;

  selectedSettingId: string | null;
  selectedStoneId: string | null;
};

type SortOrder = "price-asc" | "price-desc";

type DiamondFilter = {
  cut: SliderValue | null;
  color: SliderValue | null;
  clarity: SliderValue | null;
  fluorescence: SliderValue | null;
  table: SliderValue | null;
  depth: SliderValue | null;
  polish: SliderValue | null;
  symmetry: SliderValue | null;
  shape: SliderValue | null;
  carat: DiamondRange;
  type: StoneType;
  price: DiamondRange;
  priceSort: SortOrder;
  lab: string[];
};

type DiamondRange = [number, number];

type FiltersState = {
  currentActiveFilterDropdown: string;
  metal: string | null;
  shape: string | null;
  style: string | null;
  price: [number, number];
  sort: SortOrder;
  diamondFilter: DiamondFilter;
};

type DiamondPageInfo = {
  page: number;
  dataCount: number;
  diamondsReturned: number;
};

type Diamond = {
  diamondId: string;
  shape: string;
  caratWeight: string;
  color: string;
  clarity: string;
  cut: string;
  symmetry: string;
  polish: string;
  finalPriceEur: string;
  deptPerc: string;
  tablePerc: string;
  price: string;
  length: string;
  width: string;
  depth: string;
  ratio: string;
  girdleMin: string;
  girdleMax: string;
  culet: string;
  fancyColor: string;
  flourIntensity: string;
  certificateFile: string;
  lab: string;
  certificateNumber: string;
  stockNumber: string;
  diamondImage: string;
  diamondVideo: string;
  diamondType: string;
  currencyCode: string;
  currencySymbol: string;
  sellerName?: string;
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

  settingDetail: EnrichedVariant | null;
};

type DiamondsState = {
  diamonds: Diamond[];
  loading: boolean;
  detailLoading: boolean;
  detailNotFound: boolean;
  dataNotFound: boolean;
  isMoreData: boolean;
  pageInfo: DiamondPageInfo;
  diamondDetail: Diamond | null;
};

type EngagementRing = {
  id?: string;
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
