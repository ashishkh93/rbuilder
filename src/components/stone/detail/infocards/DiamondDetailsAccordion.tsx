import CustomAccordionItem from "@/components/common/CustomAccordionItem";
import { ExternalLink } from "lucide-react";
import { COMMON_ICONS } from "@/components/shared/icons/common";

const DiamondDetailsAccordion = () => {
  return (
    <CustomAccordionItem
      value="diamond-details"
      title="Diamond Details"
      icon={<img src={COMMON_ICONS.stone} className="h-6 w-6 mt-0.5" />}
    >
      <div className="flex items-start justify-between gap-8 w-full!">
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <Spec label="Carat" value="2.09" />
          <Spec label="Shape" value="Radiant" />
          <Spec label="Color" value="F" />
          <Spec label="Clarity" value="VVS2" />
          <Spec label="L/W (mm)" value="9.31 / 6.21" />
          <Spec label="Ratio" value="1.5" />
        </div>

        {/* Certificate Card */}
        <div className="mt-6 rounded-xl w-[240px]! bg-[#FFF3E5] p-4 text-center">
          <p className="text-xs font-semibold text-[#8A6A4A]">LAB DIAMOND</p>

          <div className="flex justify-center items-center">
            <img
              src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2960720/build/_assets/kzr-icon-igi-crt-GAZVFCK3.svg"
              alt="LAB"
              className="w-20 h-20"
            />
          </div>

          <button className="inline-flex items-center gap-1 text-10 font-medium text-[#8A6A4A] underline">
            View Certificate
            <ExternalLink className="h-3 w-3" />
          </button>
        </div>
      </div>
    </CustomAccordionItem>
  );
};

const Spec = ({ label, value }: { label: string; value: string }) => (
  <>
    <span className="text-gray-500 text-xs">{label}</span>
    <span className="font-medium text-black text-xs">{value}</span>
  </>
);

export default DiamondDetailsAccordion;
