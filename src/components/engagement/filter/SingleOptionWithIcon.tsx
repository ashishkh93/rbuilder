const SingleOptionWithIcon = ({
  opt,
  handleSelect,
  isActive,
  labelClass,
  iconClass,
}: SingleOptionWithIconProps) => {
  return (
    <button
      key={opt.id}
      type="button"
      onClick={() => handleSelect?.(opt.id)}
      className={`rb:min-w-20.5 rb:shrink-0 rb:p-2 rb:cursor-pointer rb:md:px-1 rb:md:min-w-0 rb:text-center rb:select-none rb:rounded-md rb:border rb:transition-colors rb:bg-customGray-75! rb:hover:bg-customGray-150! rb:md:bg-white! rb:md:hover:bg-customGray-150! ${isActive ? "rb:border-black/60" : "rb:border-gray-300"}`}
    >
      {opt.icon && (
        // <div className={`w-13.5 h-13.5 md:w-9 md:h-9 mx-auto flex justify-center my-1 ${iconClass}`}>
        <div className={`rb:w-9 rb:h-9 rb:mx-auto rb:flex rb:justify-center rb:my-1 ${iconClass}`}>
          {opt.icon}
        </div>
      )}
      <div
        className={`rb:-mt-0.5 rb:md:mt-0 rb:text-xs rb:leading-4 rb:tracking-tight! rb:overflow-hidden rb:text-ellipsis rb:md:text-10 rb:md:leading-tight rb:text-condensed! ${labelClass}`}
      >
        {opt.label}
      </div>
    </button>
  );
};

export default SingleOptionWithIcon;
