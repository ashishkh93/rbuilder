import { COMMON_ICONS } from "../shared/icons/common";
import { useAppSelector } from "@/store";
import { selectBuilderSteps } from "@/store/builder/builder.selectors";
import { firstLetterCapitalize } from "@/utils/common.util";
import { useCallback } from "react";
import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/global-config";

const RBuilderStepper = () => {
  const steps = useAppSelector(selectBuilderSteps);
  const navigate = useNavigate();

  const onClickChange = useCallback((stepId: number) => {
    if (Number(stepId) === 1) {
      navigate(ROUTES.engagementRings);
    } else if (Number(stepId) === 2) {
      navigate(`/${ROUTES.defaultDiamondType}`);
    } else if (Number(stepId) === 3) {
    navigate(ROUTES.finalRingBuilder);
    }
  }, []);

  return (
    <div className="rb:flex rb:w-full rb:m-auto rb:overflow-visible! rb:cursor-pointer">
      {steps.map((step, index) => {
        return (
          <Fragment key={step.id}>
            <div
              className={`rb:relative rb:flex rb:items-center rb:w-full rb:lg:px-8 rb:md:px-4 rb:px-2 rb:py-2 rb:border rb:border-gray-300 rb:transition-colors ${index !== 0 ? "-ml-px" : ""} ${step.status === "active" ? "rb:z-10 rb:border-black!" : "rb:z-0"} ${step.status === "active" ? "rb:bg-white" : "rb:bg-[#f7f7f7]"}`}
              onClick={() => onClickChange(step.id)}
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
                          onClickChange(step.id);
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
                {step.status === "completed" ? (
                  <img src={COMMON_ICONS.completed} alt="completed" />
                ) : (
                  <div className="rb:text-2xl rb:text-black">
                    <img src={step?.icon ?? ""} alt="" />
                    {/* {step?.icon || "◇"} */}
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
