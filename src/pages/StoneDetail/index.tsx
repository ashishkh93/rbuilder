import StoneDetailSkeleton from "@/components/common/skeletons/StoneDetailSkeleton";
import StoneGallery from "@/components/stone/detail/StoneGallery";
import StoneSummary from "@/components/stone/detail/summary/StoneSummary";
import { ROUTES } from "@/config/global-config";
import { useDiamonds } from "@/hooks/useDiamonds";
import { useAppSelector } from "@/store";
import { selectDetailLoading } from "@/store/diamonds/diamonds.selectors";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const StoneDetails = () => {
  const { diamondTab } = useParams();
  const [searchParams] = useSearchParams();
  const diamondId = searchParams.get("id");
  const loadingDetail = useAppSelector(selectDetailLoading);

  const { loadDiamondDetail } = useDiamonds();

  useEffect(() => {
    const tab = diamondTab
      ? diamondTab === ROUTES.defauktDiamondType
        ? "lab"
        : "natural"
      : "";
    if (diamondId && tab) {
      loadDiamondDetail(tab, diamondId);
    }
  }, [diamondId, diamondTab]);

  return loadingDetail ? (
    <StoneDetailSkeleton />
  ) : (
    <div className="rb:max-w-[1200px] rb:px-1 rb:py-2">
      <div className="rb:grid rb:grid-cols-1 rb:lg:grid-cols-[1.5fr_1fr] rb:gap-10">
        <div className="rb:relative! rb:lg:sticky! rb:xl:sticky! rb:lg:top-28! rb:self-start!">
          <StoneGallery />
        </div>

        <div className="rb:relative!">
          <StoneSummary />
        </div>
      </div>
    </div>
  );
};

export default StoneDetails;
