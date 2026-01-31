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
    <div className="px-4 py-6">
      <div className="flex items-end gap-1 mb-3">
        <span className="font-semibold text-sm">{title}</span>
        <span className="font-semibold text-sm">:</span>
        <span className="text-sm text-gray-500">{value}</span>
      </div>

      <div className="relative">
        <SettingOptionsRenderer
          options={options}
          selectedId={selected}
          handleSelect={onSelect}
          columnsClass="grid-cols-2"
        />
      </div>
    </div>
  );
};

export default MobileFilterSection;
