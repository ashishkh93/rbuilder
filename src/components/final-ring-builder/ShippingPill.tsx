import { Truck } from "lucide-react";

const ShippingPill = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-black">
      <Truck className="h-4 w-4" />
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default ShippingPill;
