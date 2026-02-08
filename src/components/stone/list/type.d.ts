type  = "lab" | "natural";

interface StoneTypeTabsProps {
  value: StoneType;
  onChange: (value: StoneType) => void;
  labIcon: ReactNode;
  naturalIcon: ReactNode;
}

type ResetDividerProps = {
  onReset?: () => void;
  disabled?: boolean;
};

type StoneCardProps = {
  stone: {
    id: string;
    primaryImage: string;
    hoverImage: string;
    shape: string;
    price: number;
    priceWithSetting: number;
    carat: number;
    color: string;
    clarity: string;
    ratio: number;
  };
};
