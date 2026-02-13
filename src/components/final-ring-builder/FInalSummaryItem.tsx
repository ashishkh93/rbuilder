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
    <div className="rb:rounded-lg rb:border rb:border-transparent rb:bg-[#f3f4f6] rb:p-3 rb:transition rb:duration-300">
      <div className="rb:flex rb:h-full rb:w-full rb:items-center rb:justify-between rb:gap-1">
        {/* LEFT */}
        <div className="rb:flex rb:items-center rb:gap-3">
          {/* Icon */}
          <div className="rb:flex rb:h-12 rb:w-12 rb:items-center rb:justify-center">
            <div className="rb:h-[75%] rb:w-auto rb:text-black">
              <img src={icon || ""} alt="" />
            </div>
          </div>

          {/* Text */}
          <div className="rb:flex-1 rb:text-left">
            <p className="rb:mb-0.5 rb:text-[15px]! rb:font-semibold rb:leading-tight rb:text-black md:rb:text-base">
              {title}
            </p>

            <p className="rb:text-[15px]! rb:leading-tight rb:text-[#404040] md:rb:text-base">
              {subtitle}
            </p>

            <div className="rb:mt-1 rb:flex rb:items-center rb:gap-1.5">
              {onChange && (
                <button
                  onClick={onChange}
                  className="rb:text-11 rb:leading-tight rb:text-gray-500 rb:underline rb:cursor-pointer!"
                >
                  Change
                </button>
              )}

              {onChange && detailsHref && (
                <div className="rb:mt-0.5 rb:max-h-3 rb:w-px rb:self-stretch rb:bg-gray-400 rb:opacity-75" />
              )}

              {detailsHref && (
                <a
                  href={detailsHref}
                  className="rb:text-11 rb:leading-tight rb:text-gray-500! rb:underline! rb:cursor-pointer!"
                >
                  View Details
                </a>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rb:flex rb:shrink-0 rb:flex-col rb:gap-0.5 rb:text-right">
          <p className="rb:text-sm rb:flex rb:justify-start rb:font-medium rb:leading-tight rb:text-black md:rb:text-xl">
            {price}
          </p>

          {(originalPrice || discount) && (
            <div className="rb:flex rb:items-center rb:justify-end rb:gap-0.5">
              {originalPrice && (
                <span className="rb:text-sm rb:leading-none rb:text-gray-400 rb:line-through">
                  {originalPrice}
                </span>
              )}

              {discount && (
                <span className="rb:rounded-xs rb:bg-black rb:px-[3px] rb:py-0.5 rb:text-xs rb:leading-none rb:text-white">
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
