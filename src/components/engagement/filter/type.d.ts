
interface MetalOptionsProps {
  options: Option[];
  selectedId?: string;
  handleSelect?: (id: string) => void;
  columnsClass?: string;
  labelClass?: string;
}

interface SingleOptionWithIconProps {
  opt: Option;
  handleSelect?: (id: string) => void;
  isActive: boolean;
  labelClass?: string;
  iconClass?: string;
}

interface PriceFilterProps {
  onChange: (value: SortOrder) => void;
  value: SortOrder;
}