const FinalSummaryItem = ({
  icon,
  title,
  subtitle,
  price,
  originalPrice,
  discount,
  onChange,
  detailsHref,
}: FinalSummaryItemProps) => {
  return (
    <div className="rounded-lg border border-transparent bg-[#f3f4f6] p-3 transition duration-300">
      <div className="flex h-full w-full items-center justify-between gap-1">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center">
            <div className="h-[75%] w-auto text-black">
              <img src={icon || ""} alt="" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-left">
            <h2 className="mb-0.5 text-[15px]! font-semibold leading-tight text-black md:text-base">
              {title}
            </h2>

            <p className="text-[15px]! leading-tight text-[#404040] md:text-base">
              {subtitle}
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              {onChange && (
                <button
                  onClick={onChange}
                  className="text-11 leading-tight text-gray-500 underline cursor-pointer!"
                >
                  Change
                </button>
              )}

              {onChange && detailsHref && (
                <div className="mt-0.5 max-h-3 w-px self-stretch bg-gray-400 opacity-75" />
              )}

              {detailsHref && (
                <a
                  href={detailsHref}
                  className="text-11 leading-tight text-gray-500! underline! cursor-pointer!"
                >
                  View Details
                </a>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex shrink-0 flex-col gap-0.5 text-right">
          <p className="text-sm flex justify-start font-medium leading-tight text-black md:text-xl">
            {price}
          </p>

          {(originalPrice || discount) && (
            <div className="flex items-center justify-end gap-0.5">
              {originalPrice && (
                <span className="text-sm leading-none text-gray-400 line-through">
                  {originalPrice}
                </span>
              )}

              {discount && (
                <span className="rounded-xs bg-black px-[3px] py-0.5 text-xs leading-none text-white">
                  {discount}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalSummaryItem;
