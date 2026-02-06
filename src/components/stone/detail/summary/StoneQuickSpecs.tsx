const StoneQuickSpecs = () => {
  return (
    <div className="rounded-xl border border-gray-200">
      {/* Top Row */}
      <div className="grid grid-cols-3 divide-x divide-gray-300">
        <SpecCell label="Carat" value="2.09" />
        <SpecCell label="Color" value="F" />
        <SpecCell label="Clarity" value="VVS2" />
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-300" />

      {/* Bottom Row */}
      <div className="grid grid-cols-2 divide-x divide-gray-300">
        <SpecCell label="Ratio" value="1.5" />
        <SpecCell label="L/W (mm)" value="9.31 / 6.21" />
      </div>
    </div>
  );
};

const SpecCell = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="text-lg font-semibold text-black">{value}</div>
      <div className="mt-1 text-xs tracking-wide text-gray-500">{label}</div>
    </div>
  );
};

export default StoneQuickSpecs;
