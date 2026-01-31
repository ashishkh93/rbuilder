import { ENG_RING } from "../../mock/engagement-ring";

const EngagementHeader = () => {
  return (
    <div className="text-center mb-8 md:mb-14">
      <h1 className="text-lg md:text-1.5lg! font-semibold tracking-wide text-black">
        {ENG_RING.headerText}
      </h1>

      <p className="mt-4 text-gray-500 w-full mx-auto text-xs md:text-base">
        {ENG_RING.subHeaderText}
      </p>
    </div>
  );
};

export default EngagementHeader;
