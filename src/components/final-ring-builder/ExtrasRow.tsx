import { Star } from "lucide-react";

const ExtrasRow = () => {
  return (
    <div className="rb:flex rb:items-center rb:justify-between rb:rounded-lg rb:bg-gray-100 rb:px-6 rb:py-3">
      <div className="rb:flex rb:items-center rb:gap-1">
        <Star className="rb:h-3 rb:w-3" />
        <p className="rb:text-md! rb:font-semibold">Extras</p>
      </div>

      <button className="rb:text-xs rb:underline rb:text-gray-600">Add Extras</button>
    </div>
  );
};

export default ExtrasRow;
