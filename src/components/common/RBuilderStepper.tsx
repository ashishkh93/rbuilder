import { COMMON_ICONS } from "../shared/icons/common";
import { useAppSelector } from "@/store";
import {
  selectBuilderCompletedSteps,
  selectBuilderSteps,
  selectCurrentStep,
} from "@/store/builder/builder.selectors";
import {
  buildPayload,
  firstLetterCapitalize,
  getWindowOrigin,
} from "@/utils/common.util";
import { useCallback, useMemo } from "react";
import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/global-config";
import { useAppDispatch } from "@/store";
import { goToStep } from "@/store/builder/builder.slice";
import { shallowEqual } from "react-redux";
import { selectDiamondId } from "@/store/diamonds/diamonds.selectors";
import { selectedSettingDetail } from "@/store/products/products.selectors";

const RBuilderStepper: React.FC<{ forceNavigation?: boolean }> = ({
  forceNavigation = false,
}) => {
  const steps = useAppSelector(selectBuilderSteps, shallowEqual);
  const currentStep = useAppSelector(selectCurrentStep, shallowEqual);
  const completedSteps = useAppSelector(
    selectBuilderCompletedSteps,
    shallowEqual
  );

  const diamondId = useAppSelector(selectDiamondId);
  const selectedSetting = useAppSelector(selectedSettingDetail);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const shouldAbleToNavigateToFinalPage = useMemo(() => {
    return completedSteps[1] && completedSteps[2];
  }, [completedSteps]);

  const encodedPayload = useMemo(
    () =>
      buildPayload(
        diamondId?.toString() || "",
        selectedSetting?.id?.toString() || ""
      ),
    [diamondId, selectedSetting]
  );

  const STEP_ROUTES: Record<BuilderStep, string> = useMemo(
    () => ({
      1: ROUTES.settingsList(forceNavigation),
      2: ROUTES.diamondsList(forceNavigation),
      3: forceNavigation
        ? `${ROUTES.finalRing(encodedPayload || "")}`
        : `${ROUTES.finalRingBuilder}?data=${encodedPayload}`,
    }),
    [encodedPayload, forceNavigation]
  );

  const onClickChange = useCallback(
    (stepId: BuilderStep) => {
      if (stepId === 3 && !shouldAbleToNavigateToFinalPage) return;

      dispatch(goToStep(stepId));

      const targetRoute = STEP_ROUTES[stepId];
      if (!targetRoute) return;

      if (forceNavigation) {
        window.location.href = targetRoute;
      } else {
        navigate(targetRoute, { replace: true });
      }
    },
    [
      dispatch,
      navigate,
      forceNavigation,
      shouldAbleToNavigateToFinalPage,
      STEP_ROUTES,
    ]
  );

  return (
    <div
      className={`rb:flex rb:w-full rb:items-center! rb:m-auto rb:overflow-visible! ${shouldAbleToNavigateToFinalPage ? "rb:cursor-pointer" : ""}`}
    >
      {steps.map((step, index) => {
        const activeStep = step.id === currentStep;
        return (
          <Fragment key={step.id}>
            <div
              className={`rb:relative rb:flex rb:items-center rb:w-full rb:lg:px-8 rb:md:px-4 rb:px-2 rb:py-2 rb:border rb:border-gray-300 rb:transition-colors ${index !== 0 ? "-ml-px" : ""} ${activeStep ? "rb:z-10 rb:border-black! rb:h-17!" : "rb:z-0 rb:h-16!"} ${activeStep ? "rb:bg-white" : "rb:bg-[#f7f7f7]"}
              ${index === 0 ? "rb:rounded-l-md!" : ""}
              ${index === 2 ? "rb:rounded-r-md!" : ""}
              `}
              onClick={() => onClickChange(step.id as BuilderStep)}
              //   style={{
              //     clipPath: isLast
              //       ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              //       : "polygon(0 0, 96% 0, 100% 50%, 96% 100%, 0 100%)",
              //     borderTopLeftRadius: isFirst ? "12px" : undefined,
              //     borderBottomLeftRadius: isFirst ? "12px" : undefined,
              //     borderTopRightRadius: isLast ? "12px" : undefined,
              //     borderBottomRightRadius: isLast ? "12px" : undefined,
              //   }}
            >
              {/* Step Number */}
              <div className="rb:text-2xl rb:md:text-4xl rb:font-light rb:text-black rb:mr-2 rb:sm:mr-3 rb:lg:mr-6">
                {step.id}
              </div>

              {/* Text */}
              <div className="rb:flex rb:flex-1 rb:gap-3 rb:items-center">
                <div className="rb:flex-1 rb:min-w-[55px]">
                  <p className="rb:md:text-xs rb:text-10 rb:text-gray-500 rb:truncate rb:max-w-14! rb:sm:max-w-full!">
                    {step.helper}
                  </p>
                  <p className="rb:md:text-lg rb:text-sm rb:font-semibold rb:uppercase rb:leading-none">
                    {step.title}
                  </p>
                </div>
              </div>

              {index !== steps.length - 1 &&
                (step.meta ? (
                  <div className="rb:flex-1 rb:leading-tight rb:text-xs rb:lg:block rb:hidden">
                    <div className="rb:flex rb:flex-col rb:text-xs rb:text-gray-600">
                      <div className="rb:text-end! rb:truncate rb:md:max-w-32! rb:max-w-20!">
                        {step.meta}
                      </div>
                      <div
                        className="rb:flex rb:items-center rb:gap-3 rb:mt-1 rb:text-gray-600 rb:place-content-end"
                        onClick={() => {
                          onClickChange(step.id as BuilderStep);
                        }}
                      >
                        <span className="rb:underline rb:underline-offset-2 rb:cursor-pointer rb:opacity-50">
                          Change
                        </span>
                        <span>{step.price}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rb:hidden rb:text-end rb:sm:block rb:underline rb:text-10 rb:md:text-xs! rb:text-gray-400">
                    Browse {firstLetterCapitalize(step.title)}
                  </div>
                ))}

              {/* Right Icon Area */}
              <div className="rb:lg:ml-6 rb:ml-2 rb:flex rb:items-center">
                {completedSteps[step.id as BuilderStep] ? (
                  <img src={COMMON_ICONS.completed} alt="completed" />
                ) : (
                  <div className="rb:text-2xl rb:text-black">
                    <img src={step?.icon ?? ""} alt="" />
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default RBuilderStepper;
