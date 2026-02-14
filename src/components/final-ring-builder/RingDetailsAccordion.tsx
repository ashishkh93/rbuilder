import CustomAccordionItem from "@/components/common/CustomAccordionItem";
import DetailSection from "./DetailSection";
import { COMMON_ICONS } from "../shared/icons/common";
import { useAppSelector } from "@/store";
import { selectCenterDiamondDetailForRing } from "@/store/diamonds/diamonds.selectors";
import { useMemo } from "react";
import { selectSettingDetailForFinalPage } from "@/store/products/products.selectors";

const RingDetailsAccordion = () => {
  const centerDiaDetail = useAppSelector(selectCenterDiamondDetailForRing);
  const settingDetail = useAppSelector(selectSettingDetailForFinalPage);

  const centerDiaRows = useMemo(() => {
    const labelMapping: Record<string, string> = {
      size: "Size",
      type: "Type",
      color: "Color",
      clarity: "Clarity",
      shape: "Shape",
      lwRatio: "L/W (mm)",
      ratio: "Ratio",
    };

    return Object.keys(centerDiaDetail).map((key) => {
      return {
        label: labelMapping[key] ?? "",
        value: centerDiaDetail[key as keyof typeof centerDiaDetail] ?? "",
      };
    });
  }, [centerDiaDetail]);

  const settingRows = useMemo(() => {
    const labelMapping: Record<string, string> = {
      sku: "SKU",
      width: "Width",
      centerStoneShape: "Center Stone Shape",
      material: "Material",
      style: "Style",
      profile: "Profile",
    };

    return Object.keys(settingDetail).map((key) => {
      return {
        label: labelMapping[key] ?? "",
        value: settingDetail[key as keyof typeof settingDetail] ?? "",
      };
    });
  }, [settingDetail]);

  return (
    <CustomAccordionItem
      value="ring-details"
      title="Ring Details"
      icon={<img src={COMMON_ICONS.ring} className="rb:h-6 rb:w-6 rb:mt-0.5" />}
    >
      <div className="rb:space-y-6">
        <DetailSection title="Center Stone Details" rows={centerDiaRows} />

        <DetailSection title="Setting Details" rows={settingRows} />

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
