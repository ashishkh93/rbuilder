import HorizontalScroller from "./HorizontalScroller";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/lib/utils";

const ResponsiveHorizontalGrid = ({
  children,
  className,
}: ResponsiveHorizontalGridProps) => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.tablet);

  if (isMobile) {
    return <HorizontalScroller>{children}</HorizontalScroller>;
  }

  return (
    <div
      className={`flex justify-center flex-nowrap gap-6 px-12 overflow-x-scroll md:overflow-x-hidden scroll-smooth snap-x snap-mandatory ${className ?? ""}`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {children}
    </div>
  );
};

export default ResponsiveHorizontalGrid;
