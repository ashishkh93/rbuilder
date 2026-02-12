const SelectableCard = ({
  label,
  iconSrc,
  active = false,
  className,
  iconClass,
  labelClass,
  onClick,
}: SelectableCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`rb:snap-start rb:flex rb:flex-col rb:items-center rb:gap-3 rb:px-3 rb:py-3 rb:min-w-[110px] rb:rounded-xl rb:cursor-pointer rb:transition-all ${
        active
          ? "rb:border-2 rb:border-black"
          : "rb:border-2 rb:border-transparent rb:hover:bg-gray-100"
      } ${className}`}
    >
      <img src={iconSrc} alt={label} className={`ring-icon ${iconClass}`} />

      <span
        className={`rb:text-xs rb:md:text-sm rb:font-medium rb:text-black rb:text-center ${labelClass}`}
      >
        {label}
      </span>
    </div>
  );
};

export default SelectableCard;
