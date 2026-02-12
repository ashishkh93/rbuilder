import { memo } from "react";
import Button from "../shared/button/Button";

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
      <span className="rb:text-xs md:rb:text-sm">{triggerLabel}</span>
      {icon}
    </Button>
  );
};

export default memo(ButtonWithIcon);
