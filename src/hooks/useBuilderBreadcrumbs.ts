import { useMemo } from "react";
import { useAppSelector } from "@/store";
import { selectCurrentStep } from "@/store/builder/builder.selectors";
import { BUILDER_BREADCRUMBS } from "@/utils/constants";
import { useSelector } from "react-redux";
import { selectDiamondTitle } from "@/store/diamonds/diamonds.selectors";
import { useLocation } from "react-router-dom";

export function useBuilderBreadcrumbs() {
  const currentStep = useAppSelector(selectCurrentStep);
  const diamondTitle = useSelector(selectDiamondTitle);
  const location = useLocation();

  const isDiamondDetailPage = useMemo(() => {
    const splittedPath = location.pathname.split("/");
    return splittedPath[splittedPath.length - 1] === "diamonds";
  }, [location.pathname]);

  return useMemo(() => {
    const items =
      BUILDER_BREADCRUMBS[currentStep]?.({
        isDetailsPage: isDiamondDetailPage,
      }) ?? [];

    return items
      .map((item) => ({
        label:
          typeof item.label === "function"
            ? item.label({ title: diamondTitle?.title || "" })
            : item.label,
        path: item.path,
      }))
      .filter((item) => !!item.label);
  }, [currentStep, diamondTitle?.title, isDiamondDetailPage]);
}
