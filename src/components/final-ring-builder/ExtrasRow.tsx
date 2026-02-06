import { Star } from "lucide-react";

const ExtrasRow = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-100 px-6 py-3">
      <div className="flex items-center gap-1">
        <Star className="h-3 w-3" />
        <p className="text-md! font-semibold">Extras</p>
      </div>

      <button className="text-xs underline text-gray-600">Add Extras</button>
    </div>
  );
};

export default ExtrasRow;
