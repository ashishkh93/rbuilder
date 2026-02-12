import type { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const StoneInfoCard = ({ title, icon, rightIcon, children }: Props) => {
  return (
    <div className="rb:rounded-md rb:bg-white rb:p-3 rb:shadow-sm">
      <div className="rb:mb-2 rb:flex rb:items-center rb:justify-between">
        <div className="rb:flex rb:items-center rb:gap-1 md:rb:gap-2 rb:text-xs rb:font-semibold rb:text-gray-400">
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
