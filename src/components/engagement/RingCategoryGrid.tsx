import RingCategoryCard from "./RingCategoryCard";
import { RING_TYPE_ICONS } from "../shared/icons/ringTypeIcon";
import HorizontalScroller from "../common/HorizontalScroller";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/lib/utils";
import { setStyle } from "@/store/filters/filters.slice";
import { selectStyleFilter } from "@/store/filters/filters.selectors";
import { useMemo } from "react";
import { RING_CATEGORIES } from "@/utils/contants";
import { useAppDispatch, useAppSelector } from "@/store";

const RingCategoryGrid = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.tablet);

  const dispatch = useAppDispatch();
  const activeStyle = useAppSelector(selectStyleFilter);

  const cards = useMemo(
    () =>
      RING_CATEGORIES.map((item) => (
        <RingCategoryCard
          key={item.id}
          label={item.label}
          iconSrc={RING_TYPE_ICONS[item.icon as keyof typeof RING_TYPE_ICONS]}
          active={activeStyle === item.id}
          onClick={() =>
            dispatch(setStyle(activeStyle === item.id ? null : item.id))
          }
        />
      )),
    [activeStyle, dispatch]
  );

  return isMobile ? (
    <HorizontalScroller>{cards}</HorizontalScroller>
  ) : (
    <div
      className="flex justify-center! flex-nowrap gap-6 px-12 overflow-x-scroll md:overflow-x-hidden scroll-smooth snap-x snap-mandatory"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {cards}
    </div>
  );
};

export default RingCategoryGrid;
