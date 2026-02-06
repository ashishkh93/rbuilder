import { COMMON_ICONS } from "../shared/icons/common";

const SettingSectionHeader = () => {
  return (
    <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-black">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <img src={COMMON_ICONS.setting} alt="" className="w-5 h-5" />
      </span>
      Know your setting
    </h3>
  );
};

export default SettingSectionHeader;
