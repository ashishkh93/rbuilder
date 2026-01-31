import Button from "@/components/shared/button/Buttton";
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
      className={`flex justify-center h-9 gap-2 pl-2! py-[2px]! relative ${className}`}
    >
      <div className="flex items-center gap-1 mr-1 shrink-0" onClick={onClick}>
        {icon && <div className="mx-auto flex justify-center my-1">{icon}</div>}
        <div className="-mt-0.5 md:mt-0 text-13! leading-4 tracking-tight! overflow-hidden text-ellipsis md:text-10 md:leading-tight text-condensed! px-1">
          {valueLabel}
        </div>
      </div>
      <div className="h-full w-px bg-gray-300! absolute right-7" />
      <div
        className="w-full h-full flex items-center justify-end"
        onClick={(e) => {
          e.stopPropagation();
          onClickRemove();
        }}
      >
        <X className="w-3.5 h-3.5 text-gray-400" />
      </div>
    </Button>
  );
};

export default memo(FilterButttonWithValue);
