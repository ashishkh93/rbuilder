interface OptionGroupProps {
  title: string;
  children: React.ReactNode;
}

interface TileProps {
  index: number;
  ct?: string | null;
}

interface StickyCTAProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string | React.ReactNode;
}
