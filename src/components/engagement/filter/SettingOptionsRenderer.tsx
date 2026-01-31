import { useMemo } from "react";
import HorizontalScroller from "@/components/common/HorizontalScroller";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/lib/utils";
import SingleOptionWithIcon from "./SingleOptionWithIcon";

const SettingOptionsRenderer = ({
  options,
  selectedId,
  handleSelect,
  columnsClass,
  labelClass,
}: MetalOptionsProps) => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  const optsRenders = useMemo(() => {
    return options.map((opt) => {
      const isActive = opt.id === selectedId;
      return (
        <SingleOptionWithIcon
          key={opt.id}
          opt={opt}
          handleSelect={handleSelect}
          isActive={isActive}
          labelClass={labelClass}
        />
      );
    });
  }, [options, selectedId, handleSelect]);

  return (
    <div
      className={`md:w-full gap-2 whitespace-nowrap snap-start hiddenScroll overflow-x-auto overflow-y-hidden scroll-smooth p-px md:p-0.5 flex md:grid ${columnsClass} md:justify-center md:snap-center`}
    >
      {isMobile ? (
        <HorizontalScroller className="gap-2! px-6!">
          {optsRenders}
        </HorizontalScroller>
      ) : (
        optsRenders
      )}
    </div>
  );
};

export default SettingOptionsRenderer;
