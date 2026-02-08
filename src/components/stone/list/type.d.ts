type StoneType = "lab" | "natural";

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
  stone: Partial<Diamond>;
};
