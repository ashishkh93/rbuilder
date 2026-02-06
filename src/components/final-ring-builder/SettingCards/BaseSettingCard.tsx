const BaseSettingCard = ({
  title,
  iconSrc,
  children,
  desc,
  fullWidth,
  Icon,
}: BaseCardProps) => {
  return (
    <div
      className={`flex flex-col justify-start gap-1 rounded-sm bg-white p-3 ${
        fullWidth ? "col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
        {Icon ? (
          <>{Icon}</>
        ) : (
          iconSrc && <img src={iconSrc} alt={title} className="w-5 h-5" />
        )}
        <span className="text-11">{title}</span>
      </div>

      {children}

      {desc && (
        <p className="mt-10 w-full! text-xs text-gray-500 flex flex-1 items-end!">
          {desc}
        </p>
      )}
    </div>
  );
};

export default BaseSettingCard;
