import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

declare global {
  type BreadcrumbContext = {
    title?: string;
  };
  interface BreadcrumbItem {
    label: string | ((ctx: BreadcrumbContext) => string);
    path?: string | ((ctx: BreadcrumbContext) => string);
  }

  interface ListPageHeaderProps {
    headerText: string;
    subHeaderText: string;
    className?: string;
    headerClassName?: string;
    subHeaderClassName?: string;
  }

  interface BreadcrumbProps {
    items: BreadcrumbItem[];
  }

  interface StepperProps {
    steps: Step[];
    activeStep: number;
  }

  interface Step {
    id: number;
    helper: string;
    title: string;
    meta?: string;
    price?: string;
    status: "completed" | "active" | "upcoming";
    icon?: string;
  }

  interface ChevronStepperProps {
    steps: Step[];
  }

  type CustomTooltipType = {
    keyName?: string;
    text?: string | ReactNode;
    position?: "top";
    style?: Record<string, any>;
    tooltipContent?: string | null;
    children?: ReactNode;
  };

  type FilterOption = {
    id: string;
    label: string;
    // Optional: pass in the full SVG/icon for each chip
    icon?: ReactNode;
  };

  type FilterDropdownProps = {
    filterKey: string;
    triggerLabel: string; // e.g. "Metal", "Shape"
    title?: string; // e.g. "Select Metal"
    options: FilterOption[];
    widthClass?: string; // e.g. "w-70" / "w-90"
    columnsClass?: string; // e.g. "md:grid-cols-3" / "md:grid-cols-4"
    onChange?(id: string): void;
    value?: string; // controlled selected id (optional)
    selectedValueIcon?: ReactNode; // controlled selected id (optional)
    customDropDownComponent?: React.ReactNode;
  };

  type BottomDrawerProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
  };

  interface MobileFilterDropdownProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }

  type HorizontalScrollerProps = PropsWithChildren<{
    className?: string;
    hideArrowsOn?: string; // tailwind breakpoint e.g. "xl"
    showArrows?: boolean;
  }>;

  type VirtualizedInfiniteListProps<T> = {
    data: T[];
    isLoading: boolean;
    hasMore: boolean;
    loadMore: () => void;
    initialLoader?: React.ReactNode;
    footerLoader?: React.ReactNode;
    itemContent?: (index: number, item: T) => React.ReactNode;
    listClassName?: string;
    overscan?: number;
  };

  type CustomTabItem<T extends string> = {
    value: T;
    label: string;
    icon?: ReactNode;
  };

  interface CustomTabsProps<T extends string> {
    value: T;
    onChange: (value: T) => void;
    items: CustomTabItem<T>[];
    className?: string;
    iconClassName?: string;
    heightClass?: string;
  }

  interface SelectableCardProps {
    label: string;
    iconSrc: string;
    active?: boolean;
    className?: string;
    iconClass?: string;
    labelClass?: string;
    onClick?: () => void;
  }

  interface ResponsiveHorizontalGridProps {
    children: ReactNode;
    className?: string;
  }

  interface CategoryItem {
    id: string | number;
    label: string;
    iconSrc: string;
  }

  interface SelectableCategoryGridProps<T extends string | number> {
    items: CategoryItem[];
    activeId: T | null;
    onSelect: (id: T | null) => void;
    iconClass?: string;
  }

  type SliderValue = string | number | [number, number];

  interface FilterRangeSliderProps {
    label: string;

    value: SliderValue;
    onChange: (value: SliderValue) => void;

    min: number;
    max: number;
    step?: number;

    showInputs?: boolean;
    formatValue?: (v: number) => string;

    marks?: {
      value: number | string;
      label: string;
    }[];

    className?: string;
    ticks?: number[];
  }

  interface StoneAccordionItemProps {
    value: string;
    title: string;
    icon: ReactNode;
    children: ReactNode;
    defaultOpen?: boolean;
  }

  interface MediaTileProps {
    src: string;
    alt?: string;
    index?: number;
    className?: string;
    shouldHaveGradient?: boolean;
    additionalInfoComp?: React.ReactNode;
    imageContainerClass?: string;
    isVideo?: boolean;
  }

  interface CommonCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
  }

  interface AppCarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    className?: string;
    contentClassName?: string;
    dotClassName?: string;
    activeDotClassName?: string;
  }

  type SelectOption = {
    id: string;
    label: string;
  };

  type AppSelectProps = {
    value?: string;
    placeholder?: string;
    options: SelectOption[];
    onChange: (value: string) => void;
    disabled?: boolean;
    className?: string;
    dropdownMaxHeight?: number;
    error?: boolean;
  };
}
