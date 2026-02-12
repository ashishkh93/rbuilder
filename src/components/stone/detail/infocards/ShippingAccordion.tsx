import CustomAccordionItem from "@/components/common/CustomAccordionItem";
import { Truck } from "lucide-react";

const ShippingAccordion = () => {
  return (
    <CustomAccordionItem
      value="shipping"
      title="Shipping"
      icon={<Truck className="rb:h-5 rb:w-5" />}
    >
      <p className="rb:text-xs">
        <strong className="rb:text-gray-700">
          This item is made to order and takes 2–3 weeks to craft.
        </strong>{" "}
        We ship FedEx Priority Overnight, signature required and fully insured.
      </p>
    </CustomAccordionItem>
  );
};

export default ShippingAccordion;
