import CustomAccordionItem from "@/components/common/CustomAccordionItem";
import { RotateCcw } from "lucide-react";

const ReturnPolicyAccordion = () => {
  return (
    <CustomAccordionItem
      value="return-policy"
      title="Return Policy"
      icon={<RotateCcw className="rb:h-5 rb:w-5" />}
    >
      <p className="rb:text-xs">
        Received an item you don't like? <strong>RBUILDER</strong> is proud to
        offer free returns within <strong className="rb:text-gray-700">30 days
        from receiving your item.</strong> Contact our support team to issue a
        return.
      </p>
    </CustomAccordionItem>
  );
};

export default ReturnPolicyAccordion;
