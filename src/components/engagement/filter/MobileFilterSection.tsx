import SettingOptionsRenderer from "./SettingOptionsRenderer";

const MobileFilterSection = ({
  title,
  value,
  options,
  selected,
  onSelect,
}: {
  title: string;
  value: string;
  options: Option[];
  selected: string;
  onSelect: (id: string) => void;
}) => {
  return (
    <div className="rb:px-4 rb:py-6">
      <div className="rb:flex rb:items-end rb:gap-1 rb:mb-3">
        <span className="rb:font-semibold rb:text-sm">{title}</span>
        <span className="rb:font-semibold rb:text-sm">:</span>
        <span className="rb:text-sm rb:text-gray-500">{value}</span>
      </div>

      <div className="rb:relative">
        <SettingOptionsRenderer
          options={options}
          selectedId={selected}
          handleSelect={onSelect}
          columnsClass="rb:grid-cols-2"
        />
      </div>
    </div>
  );
};

export default MobileFilterSection;
