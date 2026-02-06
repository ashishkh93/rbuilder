import type { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const StoneInfoCard = ({ title, icon, rightIcon, children }: Props) => {
  return (
    <div className="rounded-md bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1 md:gap-2 text-xs font-semibold text-gray-400">
          {icon}
          {title}
        </div>
        {rightIcon}
      </div>
      {children}
    </div>
  );
};

export default StoneInfoCard;
