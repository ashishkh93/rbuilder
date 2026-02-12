import { Truck } from "lucide-react";

const ShippingPill = ({ text }: { text: string }) => {
  return (
    <div className="rb:flex rb:items-center rb:gap-2 rb:rounded-full rb:bg-gray-100 rb:px-4 rb:py-2 rb:text-sm rb:text-black">
      <Truck className="rb:h-4 rb:w-4" />
      <span className="rb:text-xs">{text}</span>
    </div>
  );
};

export default ShippingPill;
