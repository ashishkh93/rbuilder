import { COMMON_ICONS } from "@/components/shared/icons/common";

const StoneHeader = () => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <h1 className="text-xl lg:text-2xl font-semibold">
        2.09 Carat F VVS2 Radiant Lab Diamond
      </h1>
      <img src={COMMON_ICONS.labgrown} alt="" className="w-15 h-15" />
    </div>
  );
};

export default StoneHeader;
