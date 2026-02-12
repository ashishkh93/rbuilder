import { Link } from "react-router-dom";
import { ROUTES } from "../../config/global-config";

const ProductCard = ({
  id,
  title,
  price,
  primaryImage,
  hoverImage,
  currency,
  badge,
  onClick,
}: ProductCardProps) => {
  return (
    <Link
      // to={`/rings/${id}`}
      to={`${ROUTES.engagementRings}/products/${id}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(id);
      }}
      viewTransition={true}
      className="rb:group rb:rounded-2xl rb:bg-white rb:overflow-hidden rb:hover:shadow-gray-200 rb:transition-all rb:duration-500 rb:shadow-xl rb:p-2 rb:cursor-pointer"
    >
      {/* Image area */}
      <div className="rb:relative rb:aspect-4/5 rb:rounded-2xl rb:overflow-hidden">
        {/* Wishlist */}
        {/* <button className="rb:absolute rb:top-3 rb:right-3 rb:z-20 rb:bg-white rb:rounded-full rb:p-1 rb:shadow">
          <Heart className="rb:w-6 rb:h-6 rb:stroke-[1.5]" />
        </button> */}

        {/* Badge */}
        {/* {badge && (
          <div className="rb:absolute rb:top-3 rb:left-1/2 rb:-translate-x-1/2 rb:z-9 rb:w-full! rb:text-center">
            <span className="rb:px-2 rb:py-1 rb:rounded-full rb:text-xs rb:bg-[rgba(242,242,242,0.85)] rb:text-[#404040]">
              {badge}
            </span>
          </div>
        )} */}

        {/* Images */}
        <div className="rb:absolute rb:inset-0 rb:rounded-sm! rb:overflow-hidden">
          {/* Light background */}
          <div className="rb:absolute rb:inset-0 rb:bg-[radial-gradient(85%_95%_at_50%_55%,#ffffff_0%,#ffffff_45%,#f5f5f5_95%,#eeeeee_100%)] rb:hover:scale-100!" />

          {/* Subtle floor depth */}
          <div className="rb:absolute rb:inset-0 rb:bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(0,0,0,0.035)_100%)] rb:hover:scale-100!" />

          {/* Image */}
          <img
            src={primaryImage}
            alt={title}
            className="rb:absolute rb:inset-0 rb:w-full rb:h-full rb:object-contain rb:transition-opacity rb:duration-700 rb:opacity-100 rb:group-hover:opacity-0 rb:mix-blend-multiply"
          />

          <img
            src={hoverImage}
            alt={title}
            className="rb:absolute rb:inset-0 rb:w-full rb:h-full rb:object-contain rb:transition-opacity rb:duration-700 rb:opacity-0 rb:group-hover:opacity-100 rb:mix-blend-multiply"
          />
        </div>
      </div>

      {/* Content */}
      <div className="rb:pt-3 rb:px-1">
        <div className="rb:text-sm rb:text-black rb:leading-tight rb:line-clamp-2">
          {title}
        </div>

        <div className="rb:mt-1 rb:text-xs rb:font-medium rb:text-black">
          {currency} {price}
        </div>

        {/* Metal dots */}
        <div className="rb:flex rb:gap-2 rb:mt-2">
          <span className="rb:w-4 rb:h-4 rb:rounded-full rb:bg-gray-300" />
          <span className="rb:w-4 rb:h-4 rb:rounded-full rb:bg-yellow-400 rb:ring-2 rb:ring-white" />
          <span className="rb:w-4 rb:h-4 rb:rounded-full rb:bg-rose-300" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
