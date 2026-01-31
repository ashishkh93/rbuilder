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
      className={`min-w-20.5 shrink-0 p-2 cursor-pointer md:px-1 md:min-w-0 text-center select-none rounded-md border transition-colors bg-customGray-75! hover:bg-customGray-150! md:bg-white! md:hover:bg-customGray-150! ${isActive ? "border-black/60" : "border-gray-300"}`}
    >
      {opt.icon && (
        <div className={`w-13.5 h-13.5 md:w-9 md:h-9 mx-auto flex justify-center my-1 ${iconClass}`}>
          {opt.icon}
        </div>
      )}
      <div
        className={`-mt-0.5 md:mt-0 text-xs leading-4 tracking-tight! overflow-hidden text-ellipsis md:text-10 md:leading-tight text-condensed! ${labelClass}`}
      >
        {opt.label}
      </div>
    </button>
  );
};

export default SingleOptionWithIcon;
