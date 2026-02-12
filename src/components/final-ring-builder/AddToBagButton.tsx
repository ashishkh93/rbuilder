import { Lock, Plus } from "lucide-react";
import CommonCTA from "../common/CommonCTA";

const AddToBagButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <CommonCTA
      label="Add to Shopping Bag"
      onClick={onClick}
      className="rb:relative rb:flex rb:w-full lg:rb:max-w-xl rb:items-center rb:justify-center rb:gap-3 rb:rounded-full rb:bg-black rb:text-md rb:font-medium rb:text-white rb:transition hover:rb:bg-black/90"
    >
      <Lock className="rb:absolute rb:left-6 rb:h-5 rb:w-5 rb:text-white!" />
      <Plus className="rb:absolute rb:right-6 rb:h-6 rb:w-6 rb:text-white!" color="white" />
    </CommonCTA>
  );
};

export default AddToBagButton;
