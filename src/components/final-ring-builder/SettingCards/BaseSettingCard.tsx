const BaseSettingCard = ({
  title,
  iconSrc,
  children,
  desc,
  fullWidth,
  Icon,
  descClassName = "rb:mt-10",
}: BaseCardProps) => {
  return (
    <div
      className={`rb:flex rb:flex-col rb:justify-start rb:gap-1 rb:rounded-sm rb:bg-white rb:p-3 ${
        fullWidth ? "rb:col-span-2" : ""
      }`}
    >
      <div className="rb:flex rb:items-center rb:gap-1 rb:text-sm rb:font-medium rb:text-gray-500">
        {Icon ? (
          <>{Icon}</>
        ) : (
          iconSrc && <img src={iconSrc} alt={title} className="rb:w-5 rb:h-5" />
        )}
        <span className="rb:text-11">{title}</span>
      </div>

      {children}

      {desc && (
        <p
          className={`rb:w-full! rb:text-xs rb:text-gray-500 rb:flex rb:flex-1 rb:items-end! ${descClassName}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default BaseSettingCard;
