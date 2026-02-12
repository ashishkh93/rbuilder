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

type SectionSeparatorProps = {
  label: string;
  className?: string;
  open: boolean;
  onToggle: () => void;
};

type CertificateFilterProps = {
  value: string[];
  onChange: (val: string[]) => void;
};
