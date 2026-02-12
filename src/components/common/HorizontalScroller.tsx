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
    <div className="rb:relative rb:w-full">
      {/* LEFT */}
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className={`rb:${hideArrowsOn}:hidden rb:absolute rb:left-2 rb:top-0 rb:h-full rb:w-12 rb:z-10
          rb:flex rb:items-center rb:justify-start
          rb:bg-linear-to-r rb:from-white rb:via-white/90 rb:to-transparent`}
        >
          <ChevronLeft className="rb:ml-1" size={20} />
        </button>
      )}

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        className={`rb:flex rb:flex-nowrap rb:gap-2 rb:md:gap-6 rb:overflow-x-scroll rb:scroll-smooth rb:snap-x rb:snap-mandatory
        rb:${hideArrowsOn}:flex-wrap
        rb:${hideArrowsOn}:justify-center
        rb:${hideArrowsOn}:overflow-visible
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
          className={`rb:${hideArrowsOn}:hidden rb:absolute rb:right-2 rb:top-0 rb:h-full rb:w-12 rb:z-10
          rb:flex rb:items-center rb:justify-end
          rb:bg-linear-to-l rb:from-white rb:via-white/90 rb:to-transparent`}
        >
          <ChevronRight className="rb:mr-1" size={20} />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroller;
