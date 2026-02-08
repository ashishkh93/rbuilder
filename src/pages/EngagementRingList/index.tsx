import { Suspense, useEffect } from "react";
import EngagementHeader from "../../components/engagement/EngagementHeader";
import { useEngagementSetting } from "../../hooks/useEngagementSetting";
import FilterSection from "../../components/engagement/filter/FilterSection";
import RingCategoryGrid from "../../components/engagement/RingCategoryGrid";
import ProductsList from "../../components/engagement/ProductsList";


const EngagementRingList = () => {
  // debugger
  const { loadEngagementSettings } = useEngagementSetting();

  useEffect(() => {
    loadEngagementSettings({ loadMore: false });
  }, [loadEngagementSettings]);

  return (
    <section className="py-2">
      <EngagementHeader />
      <RingCategoryGrid />
      <hr className="mt-8 mb-4 border-gray-300" />
      <FilterSection />
      <ProductsList />
    </section>
  );
};

export default EngagementRingList;
