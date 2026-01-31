import { useEffect } from "react";
import FilterSection from "@/components/engagement/filter/FilterSection";
import EngagementHeader from "../../components/engagement/EngagementHeader";
import ProductsList from "../../components/engagement/ProductsList";
import RingCategoryGrid from "../../components/engagement/RingCategoryGrid";
import { useEngagementSetting } from "../../hooks/useEngagementSetting";

const EngagementRingList = () => {
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
