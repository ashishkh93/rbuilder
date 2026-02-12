import CommonCTA from "@/components/common/CommonCTA";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import { useCallback } from "react";
import { selectStone } from "@/store/builder/builder.slice";
import {
  selectDiamondId,
  selectDiamondPrice,
  selectDiamondTitle,
} from "@/store/diamonds/diamonds.selectors";
import { selectBuilderCompletedSteps } from "@/store/builder/builder.selectors";
import { ROUTES } from "@/config/global-config";

const StoneCTAs = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const diamondPrice = useAppSelector(selectDiamondPrice);
  const diamondId = useAppSelector(selectDiamondId);
  const completedSteps = useAppSelector(selectBuilderCompletedSteps);

  const { title: diamondTitle } = useAppSelector(selectDiamondTitle);

  const ctaHandler = useCallback(() => {
    dispatch(
      selectStone({
        type: "select",
        id: diamondId?.toString() || "",
        meta: diamondTitle,
        price: Number(diamondPrice),
      })
    );

    if (completedSteps[1]) {
      navigate(ROUTES.completeRingBuilder);
    } else {
      navigate(ROUTES.engagementRings);
    }
  }, [dispatch, navigate]);

  return (
    <div className="rb:space-y-3">
      <CommonCTA label="Complete Your Ring" onClick={ctaHandler} />
      {/* <CommonCTA
        label="Set a Meeting"
        className="rb:border rb:text-black"
        onClick={() => {}}
      /> */}
    </div>
  );
};

export default StoneCTAs;
