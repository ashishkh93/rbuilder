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
import { buildPayload } from "@/utils/common.util";
import { selectedSettingDetail } from "@/store/products/products.selectors";

const StoneCTAs = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const diamondPrice = useAppSelector(selectDiamondPrice);
  const diamondId = useAppSelector(selectDiamondId);
  const completedSteps = useAppSelector(selectBuilderCompletedSteps);
  const selectedSetting = useAppSelector(selectedSettingDetail);

  const { title: diamondTitle } = useAppSelector(selectDiamondTitle);

  const ctaHandler = useCallback(() => {
    dispatch(
      selectStone({
        type: "select",
        id: diamondId?.toString() || "",
        meta: diamondTitle,
        price: Number(diamondPrice),
        nextStep: !completedSteps[1] ? 3 : 1,
      })
    );

    if (completedSteps[1]) {
      const encodedPayload = buildPayload(
        diamondId?.toString() || "",
        selectedSetting?.id?.toString() || ""
      );

      navigate(`/${ROUTES.finalRingBuilder}?data=${encodedPayload}`, {
        replace: true,
      });
    } else {
      navigate(`/${ROUTES.engagementRings}`, { replace: true });
    }
  }, [dispatch, navigate, completedSteps, diamondId, selectedSetting]);

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
