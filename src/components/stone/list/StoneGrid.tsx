import StoneCardSkeleton from "../../common/skeletons/StoneCardSkeleton";
import VirtualizedInfiniteList from "../../common/VirtualizedInfiniteList";
import StoneCard from "./StoneCard";
import { STONES } from "@/utils/constants";

const StoneGrid = () => {
  return (
    <>
      <section className="w-full">
        <VirtualizedInfiniteList
          data={STONES}
          isLoading={false}
          hasMore={false}
          loadMore={() => {}}
          initialLoader={<StoneCardSkeleton count={4} />}
          footerLoader={<StoneCardSkeleton count={1} />}
          listClassName={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
          itemContent={(index) => (
            <StoneCard key={STONES[index].id} stone={STONES[index]} />
          )}
        />
      </section>
    </>
  );
};

export default StoneGrid;
