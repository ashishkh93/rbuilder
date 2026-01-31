import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { COMMON_ICONS } from "@/components/shared/icons/common";

const formatPrice = (price?: number) =>
  typeof price === "number" ? `$${price.toLocaleString()}` : undefined;

export const selectBuilderSteps = createSelector(
  (state: RootState) => state.builder,
  (builder) => {
    const { currentStep, completedSteps, stepData } = builder;

    return [
      {
        id: 1,
        helper: "Select your",
        title: "SETTING",
        icon: COMMON_ICONS.setting,
        meta: stepData?.[1]?.meta,
        price: formatPrice(stepData?.[1]?.price),
        status:
          currentStep === 1
            ? "active"
            : completedSteps[1]
              ? "completed"
              : "upcoming",
      },
      {
        id: 2,
        helper: "Select your",
        title: "STONE",
        icon: COMMON_ICONS.stone,
        meta: stepData?.[2]?.meta,
        price: formatPrice(stepData?.[2]?.price),
        status:
          currentStep === 2
            ? "active"
            : completedSteps[2]
              ? "completed"
              : "upcoming",
      },
      {
        id: 3,
        helper: "Complete your",
        title: "RING",
        icon: COMMON_ICONS.ring,
        meta: stepData?.[3]?.meta,
        price: formatPrice(stepData?.[3]?.price),
        status:
          currentStep === 3
            ? "active"
            : completedSteps[3]
              ? "completed"
              : "upcoming",
      },
    ];
  }
);
