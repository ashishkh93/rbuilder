import Button from "@/components/shared/button/Button";
import { X } from "lucide-react";
import { memo } from "react";

const FilterButttonWithValue = ({
  valueLabel,
  onClick,
  icon,
  className,
  onClickRemove,
}: FilterButttonWithValueProps) => {
  return (
    <Button
      className={`rb:flex rb:justify-center rb:h-9 rb:gap-2 rb:pl-2! rb:py-[2px]! rb:relative ${className}`}
    >
      <div className="rb:flex rb:items-center rb:gap-1 rb:mr-1 rb:shrink-0" onClick={onClick}>
        {icon && <div className="rb:mx-auto rb:flex rb:justify-center rb:my-1">{icon}</div>}
        <div className="rb:-mt-0.5 rb:md:mt-0 rb:text-13! rb:leading-4 rb:tracking-tight! rb:overflow-hidden rb:text-ellipsis rb:md:text-10 rb:md:leading-tight rb:text-condensed! rb:px-1">
          {valueLabel}
        </div>
      </div>
      <div className="rb:h-full rb:w-px rb:bg-gray-300! rb:absolute rb:right-7" />
      <div
        className="rb:w-full rb:h-full rb:flex rb:items-center rb:justify-end"
        onClick={(e) => {
          e.stopPropagation();
          onClickRemove();
        }}
      >
        <X className="rb:w-3.5 rb:h-3.5 rb:text-gray-400" />
      </div>
    </Button>
  );
};

export default memo(FilterButttonWithValue);
