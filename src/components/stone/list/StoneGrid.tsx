import StoneCardSkeleton from "../../common/skeletons/StoneCardSkeleton";
import VirtualizedInfiniteList from "../../common/VirtualizedInfiniteList";
import StoneCard from "./StoneCard";
import { useAppSelector } from "@/store";
import {
  selectDiamondCards,
  selectDiamondPageInfo,
  selectHasMoreDiamonds,
  selectLoading,
} from "@/store/diamonds/diamonds.selectors";
import { shallowEqual } from "react-redux";
import { useDiamonds } from "@/hooks/useDiamonds";
import { useCallback, useEffect } from "react";

const StoneGrid = () => {
  const diamonds = useAppSelector(selectDiamondCards, shallowEqual);
  const loading = useAppSelector(selectLoading);
  const hasMore = useAppSelector(selectHasMoreDiamonds);
  const diamondPageInfo = useAppSelector(selectDiamondPageInfo, shallowEqual);

  const { loadDiamonds } = useDiamonds();

  useEffect(() => {
    loadDiamonds({
      pageNumber: 1,
    });
  }, [loadDiamonds]);

  const loadMore = useCallback(() => {
    loadDiamonds({
      loadMore: true,
      pageNumber: diamondPageInfo.page + 1,
    });
  }, [loadDiamonds, diamondPageInfo.page]);

  return (
    <>
      <section className="rb:w-full">
        <VirtualizedInfiniteList
          data={diamonds}
          isLoading={loading}
          hasMore={hasMore}
          loadMore={loadMore}
          initialLoader={<StoneCardSkeleton count={4} />}
          footerLoader={<StoneCardSkeleton count={1} />}
          listClassName={`rb:grid rb:grid-cols-1 rb:sm:grid-cols-2 rb:md:grid-cols-3 rb:lg:grid-cols-4 rb:gap-4`}
          itemContent={(index) => (
            <StoneCard
              key={diamonds[index].diamondId}
              stone={diamonds?.[index] ?? {}}
            />
          )}
        />
        {/* <div className="rb:flex rb:justify-center rb:mt-6">
          <Button className="rb:w-full rb:md:w-30!" onClick={loadMore}>
            Load More
          </Button>
        </div> */}
      </section>
    </>
  );
};

export default StoneGrid;
