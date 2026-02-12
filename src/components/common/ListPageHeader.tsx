const ListPageHeader = ({
  headerText,
  subHeaderText,
  className,
  headerClassName,
  subHeaderClassName,
}: ListPageHeaderProps) => {
  return (
    <div className={`rb:text-center rb:mb-8 rb:md:mb-14 ${className}`}>
      <h1
        className={`rb:text-lg rb:md:text-1.5lg! rb:font-semibold rb:tracking-wide rb:text-black ${headerClassName}`}
      >
        {headerText}
      </h1>

      <p
        className={`rb:mt-1 rb:sm:mt-2 rb:md:mt-4 rb:text-gray-500 rb:w-full rb:mx-auto rb:text-xs rb:md:text-base ${subHeaderClassName}`}
      >
        {subHeaderText}
      </p>
    </div>
  );
};

export default ListPageHeader;
