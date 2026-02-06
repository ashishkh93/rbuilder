import CommonCTA from "@/components/common/CommonCTA";
import { useNavigate } from "react-router-dom";

const StoneCTAs = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-3">
      <CommonCTA
        label="Complete Your Ring"
        onClick={() => navigate("/complete-ring-builder")}
      />
      <CommonCTA
        label="Set a Meeting"
        className="border text-black"
        onClick={() => {}}
      />
    </div>
  );
};

export default StoneCTAs;
