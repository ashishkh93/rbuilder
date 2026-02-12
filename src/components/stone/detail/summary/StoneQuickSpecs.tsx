import { selectDiamondDetail } from "@/store/diamonds/diamonds.selectors";
import { shallowEqual, useSelector } from "react-redux";

const StoneQuickSpecs = () => {
  const diamondDetail = useSelector(selectDiamondDetail, shallowEqual);

  return (
    <div className="rb:rounded-sm rb:border rb:border-gray-200 rb:my-1">
      {/* Top Row */}
      <div className="rb:grid rb:grid-cols-3 rb:divide-x rb:divide-gray-300">
        <SpecCell label="Carat" value={diamondDetail?.caratWeight || ""} />
        <SpecCell label="Color" value={diamondDetail?.color || ""} />
        <SpecCell label="Clarity" value={diamondDetail?.clarity || ""} />
      </div>

      {/* Divider */}
      <div className="rb:h-px rb:bg-gray-300" />

      {/* Bottom Row */}
      <div className="rb:grid rb:grid-cols-2 rb:divide-x rb:divide-gray-300">
        <SpecCell label="Ratio" value={diamondDetail?.ratio || ""} />
        <SpecCell
          label="L/W (mm)"
          value={`${diamondDetail?.length} / ${diamondDetail?.width}` || ""}
        />
      </div>
    </div>
  );
};

const SpecCell = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rb:flex rb:flex-col rb:items-center rb:justify-center rb:py-2">
      <div className="rb:text-lg rb:font-semibold rb:text-black">{value}</div>
      <div className="rb:mt-1 rb:text-xs rb:tracking-wide rb:text-gray-500">
        {label}
      </div>
    </div>
  );
};

export default StoneQuickSpecs;
