import CustomAccordionItem from "@/components/common/CustomAccordionItem";
import { Truck } from "lucide-react";

const ShippingAccordion = () => {
  return (
    <CustomAccordionItem
      value="shipping"
      title="Shipping"
      icon={<Truck className="h-5 w-5" />}
    >
      <p className="text-xs">
        <strong className="text-gray-700">
          This item is made to order and takes 2–3 weeks to craft.
        </strong>{" "}
        We ship FedEx Priority Overnight, signature required and fully insured.
      </p>
    </CustomAccordionItem>
  );
};

export default ShippingAccordion;
