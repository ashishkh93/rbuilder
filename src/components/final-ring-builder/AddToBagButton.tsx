import { Lock, Plus } from "lucide-react";
import CommonCTA from "../common/CommonCTA";

const AddToBagButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <CommonCTA
      label="Add to Shopping Bag"
      onClick={onClick}
      className="relative flex w-full lg:max-w-xl items-center justify-center gap-3 rounded-full bg-black text-md font-medium text-white transition hover:bg-black/90"
    >
      <Lock className="absolute left-6 h-5 w-5 text-white!" />
      <Plus className="absolute right-6 h-6 w-6 text-white!" color="white" />
    </CommonCTA>
  );
};

export default AddToBagButton;
