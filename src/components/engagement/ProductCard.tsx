import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  price,
  primaryImage,
  hoverImage,
  currency,
  badge,
}: ProductCardProps) => {
  return (
    <Link
      to={`/rings/${id}`}
      preventScrollReset={true}
      className="group rounded-2xl bg-white overflow-hidden hover:shadow-gray-200 transition-all duration-500 shadow-xl p-2 cursor-pointer"
    >
      {/* Image area */}
      <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
        {/* Wishlist */}
        {/* <button className="absolute top-3 right-3 z-20 bg-white rounded-full p-1 shadow">
          <Heart className="w-6 h-6 stroke-[1.5]" />
        </button> */}

        {/* Badge */}
        {/* {badge && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-9 w-full! text-center">
            <span className="px-2 py-1 rounded-full text-xs bg-[rgba(242,242,242,0.85)] text-[#404040]">
              {badge}
            </span>
          </div>
        )} */}

        {/* Images */}
        <div className="absolute inset-0 rounded-sm! overflow-hidden">
          {/* Light background */}
          <div className="absolute inset-0 bg-[radial-gradient(85%_95%_at_50%_55%,#ffffff_0%,#ffffff_45%,#f5f5f5_95%,#eeeeee_100%)] hover:scale-100!" />

          {/* Subtle floor depth */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(0,0,0,0.035)_100%)] hover:scale-100!" />

          {/* Image */}
          <img
            src={primaryImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0 mix-blend-multiply"
          />

          <img
            src={hoverImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100 mix-blend-multiply"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-3 px-1">
        <h3 className="text-sm text-black leading-tight line-clamp-2">
          {title}
        </h3>

        <div className="mt-1 text-xs font-medium text-black">
          {currency} {price}
        </div>

        {/* Metal dots */}
        <div className="flex gap-2 mt-2">
          <span className="w-4 h-4 rounded-full bg-gray-300" />
          <span className="w-4 h-4 rounded-full bg-yellow-400 ring-2 ring-white" />
          <span className="w-4 h-4 rounded-full bg-rose-300" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
