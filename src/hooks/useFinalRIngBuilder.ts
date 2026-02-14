import { useAppDispatch, useAppSelector } from "@/store";
import { selectDiamondType } from "@/store/diamonds/diamonds.selectors";
import { decode } from "@/utils/common.util";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDiamonds } from "./useDiamonds";
import { useEngagementSetting } from "./useEngagementSetting";

export const useFinalRIngBuilder = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const { loadDiamondDetail } = useDiamonds();
  const { loadEngagementDetail } = useEngagementSetting();

  const diamondType = useAppSelector(selectDiamondType) || "lab";

  const { diamondId, settingId } = useMemo(() => {
    const data = searchParams.get("data");

    const decoded = decode<{ diamondId: string; settingId: string }>(
      data || ""
    );

    return { diamondId: decoded?.diamondId, settingId: decoded?.settingId };
  }, [searchParams]);

  useEffect(() => {
    if (diamondId && diamondType) {
      loadDiamondDetail(diamondType, diamondId);
    }
  }, [diamondId, diamondType]);

  useEffect(() => {
    if (settingId) {
      loadEngagementDetail(settingId);
    }
  }, [settingId]);
};
