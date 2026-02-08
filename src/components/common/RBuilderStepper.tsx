import { COMMON_ICONS } from "../shared/icons/common";
import { useAppSelector } from "@/store";
import { selectBuilderSteps } from "@/store/builder/builder.selectors";
import { firstLetterCapitalize } from "@/utils/common.util";
import { useCallback } from "react";
import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";

const RBuilderStepper = () => {
  const steps = useAppSelector(selectBuilderSteps);
  const navigate = useNavigate();

  const onClickChange = useCallback((stepId: number) => {
    if (Number(stepId) === 1) {
      navigate("/engagement-rings");
    } else if (Number(stepId) === 2) {
      navigate("/stones");
    } else if (Number(stepId) === 3) {
    navigate("/complete-ring-builder");
    }
  }, []);

  return (
    <div className="flex w-full m-auto overflow-visible!">
      {steps.map((step, index) => {
        return (
          <Fragment key={step.id}>
            <div
              className={`relative flex items-center w-full lg:px-8 md:px-4 px-2 py-2 border border-gray-300 transition-colors ${index !== 0 ? "-ml-px" : ""} ${step.status === "active" ? "z-10 border-black!" : "z-0"} ${step.status === "active" ? "bg-white" : "bg-[#f7f7f7]"}`}
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
              <div className="text-2xl md:text-4xl font-light text-black mr-2 sm:mr-3 lg:mr-6">
                {step.id}
              </div>

              {/* Text */}
              <div className="flex flex-1 gap-3 items-center">
                <div className="flex-1 min-w-[55px]">
                  <p className="md:text-xs text-10 text-gray-500 truncate max-w-14! sm:max-w-full!">
                    {step.helper}
                  </p>
                  <p className="md:text-lg text-sm font-semibold uppercase leading-none">
                    {step.title}
                  </p>
                </div>
              </div>

              {index !== steps.length - 1 &&
                (step.meta ? (
                  <div className="flex-1 leading-tight text-xs lg:block hidden">
                    <div className="flex flex-col text-xs text-gray-600">
                      <div className="text-end! truncate md:max-w-32! max-w-20!">
                        {step.meta}
                      </div>
                      <div
                        className="flex items-center gap-3 mt-1 text-gray-600 place-content-end"
                        onClick={() => {
                          onClickChange(step.id);
                        }}
                      >
                        <span className="underline underline-offset-2 cursor-pointer opacity-50">
                          Change
                        </span>
                        <span>{step.price}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden text-end sm:block underline text-10 md:text-xs! text-gray-400">
                    Browse {firstLetterCapitalize(step.title)}
                  </div>
                ))}

              {/* Right Icon Area */}
              <div className="lg:ml-6 ml-2 flex items-center">
                {step.status === "completed" ? (
                  <img src={COMMON_ICONS.completed} alt="completed" />
                ) : (
                  <div className="text-2xl text-black">
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
