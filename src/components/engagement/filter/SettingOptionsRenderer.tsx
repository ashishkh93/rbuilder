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
      className={`rb:md:w-full rb:gap-2 rb:whitespace-nowrap rb:snap-start rb:hiddenScroll rb:overflow-x-auto rb:overflow-y-hidden rb:scroll-smooth rb:p-px rb:md:p-0.5 rb:flex rb:md:grid ${columnsClass} rb:md:justify-center rb:md:snap-center`}
    >
      {isMobile ? (
        <HorizontalScroller className="rb:gap-2! rb:px-6!">
          {optsRenders}
        </HorizontalScroller>
      ) : (
        optsRenders
      )}
    </div>
  );
};

export default SettingOptionsRenderer;
