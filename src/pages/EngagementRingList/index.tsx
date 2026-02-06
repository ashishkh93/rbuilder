import { lazy, Suspense, useEffect } from "react";
import EngagementHeader from "../../components/engagement/EngagementHeader";
import { useEngagementSetting } from "../../hooks/useEngagementSetting";

const FilterSection = lazy(
  () => import("../../components/engagement/filter/FilterSection")
);
const RingCategoryGrid = lazy(
  () => import("../../components/engagement/RingCategoryGrid")
);
const ProductsList = lazy(
  () => import("../../components/engagement/ProductsList")
);

const EngagementRingList = () => {
  const { loadEngagementSettings } = useEngagementSetting();

  useEffect(() => {
    loadEngagementSettings({ loadMore: false });
  }, [loadEngagementSettings]);

  return (
    <section className="py-2">
      <EngagementHeader />

      <Suspense fallback={null}>
        <RingCategoryGrid />
      </Suspense>
      <hr className="mt-8 mb-4 border-gray-300" />

      <Suspense fallback={null}>
        <FilterSection />
      </Suspense>

      <Suspense fallback={null}>
        <ProductsList />
      </Suspense>
    </section>
  );
};

export default EngagementRingList;
