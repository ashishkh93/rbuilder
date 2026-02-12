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
      className={`rb:flex rb:justify-center rb:flex-nowrap rb:gap-6 rb:px-12 rb:overflow-x-scroll rb:md:overflow-x-hidden rb:scroll-smooth rb:snap-x rb:snap-mandatory ${className ?? ""}`}
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
