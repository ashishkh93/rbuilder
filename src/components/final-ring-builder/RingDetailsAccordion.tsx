import CustomAccordionItem from "@/components/common/CustomAccordionItem";
import DetailSection from "./DetailSection";
import { COMMON_ICONS } from "../shared/icons/common";

const RingDetailsAccordion = () => {
  return (
    <CustomAccordionItem
      value="ring-details"
      title="Ring Details"
      icon={<img src={COMMON_ICONS.ring} className="rb:h-6 rb:w-6 rb:mt-0.5" />}
    >
      <div className="rb:space-y-6">
        <DetailSection
          title="Center Stone Details"
          rows={[
            { label: "Size", value: "2.09ct" },
            { label: "Type", value: "Diamond" },
            { label: "Color", value: "F" },
            { label: "Clarity", value: "VVS2" },
            { label: "Shape", value: "Radiant" },
            { label: "L/W (mm)", value: "9.31/6.21" },
            { label: "Ratio", value: "1.5" },
          ]}
        />

        <DetailSection
          title="Setting Details"
          rows={[
            { label: "SKU", value: "405Q-ER-RAD-YG-14" },
            { label: "Width", value: "1.5mm" },
            { label: "Center Stone Shape", value: "Radiant" },
            { label: "Material", value: "14k Yellow Gold" },
            { label: "Style", value: "Solitaire" },
            { label: "Profile", value: "High" },
          ]}
        />

        <DetailSection
          title="Side Stones"
          rows={[
            { label: "Average Color", value: "D–F" },
            { label: "Average Clarity", value: "VVS" },
            { label: "Shape", value: "Round" },
            { label: "Origin", value: "Lab Diamonds" },
            { label: "Approx. Total Carat", value: "0.05ct" },
          ]}
        />
      </div>
    </CustomAccordionItem>
  );
};

export default RingDetailsAccordion;
