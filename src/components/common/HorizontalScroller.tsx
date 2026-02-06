import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_AMOUNT = 160;

const HorizontalScroller = ({
  children,
  className = "",
  hideArrowsOn = "xl",
  showArrows = true,
}: HorizontalScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scroll = useCallback((dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  }, []);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  return (
    <div className="relative w-full">
      {/* LEFT */}
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className={`${hideArrowsOn}:hidden absolute left-2 top-0 h-full w-12 z-10
          flex items-center justify-start
          bg-linear-to-r from-white via-white/90 to-transparent`}
        >
          <ChevronLeft className="ml-1" size={20} />
        </button>
      )}

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        className={`flex flex-nowrap gap-2 md:gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory
        ${hideArrowsOn}:flex-wrap
        ${hideArrowsOn}:justify-center
        ${hideArrowsOn}:overflow-visible
        ${className}`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>

      {/* RIGHT */}
      {showArrows && canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className={`${hideArrowsOn}:hidden absolute right-2 top-0 h-full w-12 z-10
          flex items-center justify-end
          bg-linear-to-l from-white via-white/90 to-transparent`}
        >
          <ChevronRight className="mr-1" size={20} />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroller;
