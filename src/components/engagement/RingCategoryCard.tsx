const RingCategoryCard = ({
  label,
  iconSrc,
  active = false,
  className,
  iconClass,
  labelClass,
  onClick,
}: RingCategoryCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`snap-start flex flex-col items-center gap-3 px-3 py-3 min-w-[110px] rounded-xl cursor-pointer transition-all ${
        active
          ? "border-2 border-black"
          : "border-2 border-transparent hover:bg-gray-100"
      } ${className}`}
    >
      <img src={iconSrc} alt={label} className={`ring-icon ${iconClass}`} />

      <span
        className={`text-xs md:text-sm font-medium text-black text-center ${labelClass}`}
      >
        {label}
      </span>
    </div>
  );
};

export default RingCategoryCard;
