import { COMMON_ICONS } from "@/components/shared/icons/common";

const StoneInfoHeader = () => {
  return (
    <div className="rb:mb-4 rb:flex rb:items-center rb:gap-2">
      <div className="rb:flex rb:h-8 rb:w-8 rb:items-center rb:justify-center rb:rounded-full rb:bg-white rb:shadow">
        <img src={COMMON_ICONS.stone} alt="diamond" className="rb:w-5 rb:h-5" />
      </div>
      <div className="rb:text-[18px]! rb:font-semibold rb:text-black">
        Your Diamond Info
      </div>
    </div>
  );
};

export default StoneInfoHeader;
