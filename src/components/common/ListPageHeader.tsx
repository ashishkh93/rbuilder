const ListPageHeader = ({
  headerText,
  subHeaderText,
  className,
  headerClassName,
  subHeaderClassName,
}: ListPageHeaderProps) => {
  return (
    <div className={`text-center mb-8 md:mb-14 ${className}`}>
      <h1
        className={`text-lg md:text-1.5lg! font-semibold tracking-wide text-black ${headerClassName}`}
      >
        {headerText}
      </h1>

      <p
        className={`mt-1 sm:mt-2 md:mt-4 text-gray-500 w-full mx-auto text-xs md:text-base ${subHeaderClassName}`}
      >
        {subHeaderText}
      </p>
    </div>
  );
};

export default ListPageHeader;
