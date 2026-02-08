import { Button } from "@/components/ui/button";
import StoneCardSkeleton from "../../common/skeletons/StoneCardSkeleton";
import VirtualizedInfiniteList from "../../common/VirtualizedInfiniteList";
import StoneCard from "./StoneCard";
import { useAppSelector } from "@/store";
import {
  selectDiamondCards,
  selectHasMoreDiamonds,
  selectLoading,
} from "@/store/diamonds/diamonds.selectors";
import { shallowEqual } from "react-redux";

const StoneGrid = () => {
  const diamonds = useAppSelector(selectDiamondCards, shallowEqual);
  const loading = useAppSelector(selectLoading);
  const hasMore = useAppSelector(selectHasMoreDiamonds);

  console.log(diamonds, "diamonds=");

  return (
    <>
      <section className="w-full">
        <VirtualizedInfiniteList
          data={diamonds}
          isLoading={loading}
          hasMore={hasMore}
          loadMore={() => {}}
          initialLoader={<StoneCardSkeleton count={4} />}
          footerLoader={<StoneCardSkeleton count={1} />}
          listClassName={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
          itemContent={(index) => (
            <StoneCard
              key={diamonds[index].diamondId}
              stone={diamonds?.[index] ?? {}}
            />
          )}
        />
        <div className="flex justify-center mt-6">
          <Button className="w-full md:w-30!">Load More</Button>
        </div>
      </section>
    </>
  );
};

export default StoneGrid;
