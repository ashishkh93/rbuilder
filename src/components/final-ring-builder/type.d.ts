interface FinalSummaryItemProps {
  icon: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  onChange?: () => void;
  detailsHref?: string;
}

interface FinalCheckoutSummaryProps {
  shippingText?: string;
  onAddToBag?: () => void;
}

interface PriceBlockProps {
  totalPrice: number;
  originalPrice?: number;
}

interface DetailSectionProps {
  title: string;
  rows: {
    label: string;
    value: string;
  }[];
}

interface DetailRowProps {
  label: string;
  value: string;
}

interface BaseCardProps {
  title: string;
  iconSrc?: string;
  children: React.ReactNode;
  desc?: string;
  fullWidth?: boolean;
  Icon?: React.ReactNode;
  descClassName?: string;
}
