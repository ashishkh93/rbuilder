import { COMMON_ICONS } from "../shared/icons/common";

const FinalRingHeader = () => {
  return (
    <div className="rb:flex rb:items-start rb:justify-between">
      <h1 className="rb:text-xl rb:font-semibold rb:leading-tight rb:max-w-[270px] sm:rb:max-w-full! lg:rb:max-w-[300px]">
        The Sarah with a 2.09 Carat F VVS2 Radiant Lab Diamond
      </h1>

      <button className="rb:flex rb:flex-col rb:items-center rb:gap-1 rb:text-sm rb:text-gray-600">
        <img src={COMMON_ICONS.dropAHint} className="rb:w-8" alt="" />
        <span className="rb:text-10">Drop a Hint</span>
      </button>
    </div>
  );
};

export default FinalRingHeader;
