import { COMMON_ICONS } from "../shared/icons/common";

const SettingSectionHeader = () => {
  return (
    <h3 className="rb:mb-2 rb:flex rb:items-center rb:gap-2 rb:text-lg rb:font-semibold rb:text-black">
      <span className="rb:flex rb:h-8 rb:w-8 rb:items-center rb:justify-center rb:rounded-full rb:bg-white">
        <img src={COMMON_ICONS.setting} alt="" className="rb:w-5 rb:h-5" />
      </span>
      Know your setting
    </h3>
  );
};

export default SettingSectionHeader;
