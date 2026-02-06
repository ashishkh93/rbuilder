import { COMMON_ICONS } from "../shared/icons/common";

const FinalRingHeader = () => {
  return (
    <div className="flex items-start justify-between">
      <h1 className="text-xl font-semibold leading-tight max-w-[270px] sm:max-w-full! lg:max-w-[300px]">
        The Sarah with a 2.09 Carat F VVS2 Radiant Lab Diamond
      </h1>

      <button className="flex flex-col items-center gap-1 text-sm text-gray-600">
        <img src={COMMON_ICONS.dropAHint} className="w-8" alt="" />
        <span className="text-10">Drop a Hint</span>
      </button>
    </div>
  );
};

export default FinalRingHeader;
