import type { PropsWithChildren, ReactNode } from "react";

declare global {
  interface BreadcrumbItem {
    label: string;
    path?: string;
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
    // children: (item: T, index: number) => ReactNode;
    initialLoader?: ReactNode;
    footerLoader?: ReactNode;
    className?: string;
  };
}
