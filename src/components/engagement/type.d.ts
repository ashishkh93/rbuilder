interface RingCategoryCardProps {
  label: string;
  iconSrc: string;
  active?: boolean;
  className?: string;
  iconClass?: string;
  labelClass?: string;
  onClick?: () => void;
}

type ProductCardProps = {
  id: string;
  title: string;
  price: string;
  primaryImage: string;
  hoverImage: string;
  badge?: string;
  currency?: string;
  onClick?: (id: string) => void;
};

type Product = {
  id: string;
  title: string;
  price: string;
  badge?: string;
  primaryImage: string;
  hoverImage: string;
};

type ProductsListProps = {
  products: Product[];
};

type FilterButttonWithValueProps = {
  valueLabel: string;
  onClick: () => void;
  onClickRemove: () => void;
  icon: React.ReactNode;
  className?: string;
};

type Option = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};
