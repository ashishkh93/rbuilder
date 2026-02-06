import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const StoneCard = ({ stone }: StoneCardProps) => {
  return (
    <Link
      to={`/stones/${stone.id}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
      viewTransition={true}
    >
      <div className="relative rounded-xl border border-gray-200 overflow-hidden bg-white group">
        {/* Image */}
        <div className="relative aspect-square bg-[#dfe6ec]!">
          <div className="absolute inset-0 rounded-sm! overflow-hidden cursor-pointer">
            {/* Image */}
            <img
              src={stone?.primaryImage || ""}
              alt={`${stone.carat} Carat ${stone.color} ${stone.clarity} ${stone.shape}`}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0 mix-blend-multiply"
            />

            <img
              src={stone?.hoverImage || ""}
              alt={`${stone.carat} Carat ${stone.color} ${stone.clarity} ${stone.shape}`}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100 mix-blend-multiply"
            />
          </div>

          {/* Wishlist */}
          {/* <button className="absolute top-3 right-3 z-10 rounded-full bg-white p-1 shadow">
          <Heart className="w-6 h-6 text-black" />
        </button> */}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-sm font-medium text-black">
                {stone.shape}
              </div>
              <div className="text-xs text-gray-400">
                With setting: ${stone.priceWithSetting.toLocaleString()}
              </div>
            </div>

            <div className="text-sm font-semibold text-black">
              ${stone.price.toLocaleString()}
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-4 border-t pt-3 text-center text-xs">
            <Spec label="carat" value={stone.carat} />
            <Spec label="color" value={stone.color} />
            <Spec label="clarity" value={stone.clarity} />
            <Spec label="ratio" value={stone.ratio} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoneCard;

const Spec = ({ label, value }: { label: string; value: string | number }) => (
  <div className="relative px-1 border-r border-gray-200 last:border-r-0">
    <div className="font-semibold text-black">{value}</div>
    <div className="text-black capitalize text-10">{label}</div>
  </div>
);
