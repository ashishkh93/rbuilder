// components/ring/OptionGroup.tsx

const OptionGroup = ({ title, subTitle, children }: OptionGroupProps) => {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">
        {title}: <span className="text-sm text-gray-500">{subTitle}</span>
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 gap-1 md:gap-3">
        {children}
      </div>
    </div>
  );
};

export default OptionGroup;
