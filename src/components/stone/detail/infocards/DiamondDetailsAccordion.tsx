import CustomAccordionItem from "@/components/common/CustomAccordionItem";
import { ExternalLink } from "lucide-react";
import { COMMON_ICONS } from "@/components/shared/icons/common";
import { shallowEqual, useSelector } from "react-redux";
import { selectDiamondDetail } from "@/store/diamonds/diamonds.selectors";

const DiamondDetailsAccordion = () => {
  const diamondDetail = useSelector(selectDiamondDetail, shallowEqual);
  return (
    <CustomAccordionItem
      value="diamond-details"
      title="Diamond Details"
      icon={
        <img src={COMMON_ICONS.stone} className="rb:h-6 rb:w-6 rb:mt-0.5" />
      }
    >
      <div className="rb:flex rb:items-start rb:justify-between rb:gap-8 rb:w-full!">
        <div className="rb:grid rb:grid-cols-2 rb:gap-y-2 rb:gap-x-4 rb:text-sm">
          <Spec label="Carat" value={diamondDetail?.caratWeight || "-"} />
          <Spec label="Shape" value={diamondDetail?.shape || "-"} />
          <Spec label="Color" value={diamondDetail?.color || "-"} />
          <Spec label="Clarity" value={diamondDetail?.clarity || "-"} />
          <Spec
            label="L/W (mm)"
            value={`${diamondDetail?.length} / ${diamondDetail?.width}`}
          />
          <Spec label="Ratio" value={diamondDetail?.ratio || "-"} />
        </div>

        {/* Certificate Card */}
        <div className="rb:mt-2 rb:rounded-xl rb:w-[240px]! rb:bg-[#FFF3E5] rb:p-4 rb:text-center">
          <p className="rb:text-xs rb:font-semibold rb:text-[#8A6A4A]">
            LAB DIAMOND
          </p>

          <div className="rb:flex rb:justify-center rb:items-center">
            <img
              src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2960720/build/_assets/kzr-icon-igi-crt-GAZVFCK3.svg"
              alt="LAB"
              className="rb:w-20 rb:h-20"
            />
          </div>

          <button className="rb:inline-flex rb:items-center rb:gap-1 rb:text-10 rb:font-medium rb:text-[#8A6A4A] rb:underline">
            View Certificate
            <ExternalLink className="rb:h-3 rb:w-3" />
          </button>
        </div>
      </div>
    </CustomAccordionItem>
  );
};

const Spec = ({ label, value }: { label: string; value: string }) => (
  <>
    <span className="rb:text-gray-500 rb:text-xs">{label}</span>
    <span className="rb:font-medium rb:text-black rb:text-xs">{value}</span>
  </>
);

export default DiamondDetailsAccordion;
