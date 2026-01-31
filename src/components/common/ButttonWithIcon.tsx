import { memo } from "react";
import Button from "../shared/button/Buttton";

const ButtonWithIcon = ({
  triggerLabel,
  onClick,
  icon,
  className,
}: {
  triggerLabel: string;
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button onClick={onClick} className={className}>
      <span className="text-xs md:text-sm">{triggerLabel}</span>
      {icon}
    </Button>
  );
};

export default memo(ButtonWithIcon);
