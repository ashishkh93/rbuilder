import { COMMON_ICONS } from "@/components/shared/icons/common";

const StoneInfoHeader = () => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
        <img src={COMMON_ICONS.stone} alt="diamond" className="w-5 h-5" />
      </div>
      <h2 className="text-[18px]! font-semibold text-black">
        Your Diamond Info
      </h2>
    </div>
  );
};

export default StoneInfoHeader;
