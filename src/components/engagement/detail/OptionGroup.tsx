// components/ring/OptionGroup.tsx

const OptionGroup = ({ title, subTitle, children }: OptionGroupProps) => {
  return (
    <div className="rb:space-y-3">
      <p className="rb:text-sm rb:font-medium">
        {title}: <span className="rb:text-sm rb:text-gray-500">{subTitle}</span>
      </p>
      <div className="rb:grid rb:grid-cols-3 rb:sm:grid-cols-5 rb:md:grid-cols-6 rb:lg:grid-cols-5 rb:gap-1 rb:md:gap-3">
        {children}
      </div>
    </div>
  );
};

export default OptionGroup;
