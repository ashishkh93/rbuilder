import { COMMON_ICONS } from "../shared/icons/common";
import { useAppSelector } from "@/store";
import { selectBuilderSteps } from "@/store/builder/builder.selectors";
import { Fragment } from "react/jsx-runtime";

const RBuilderStepper = () => {
  const steps = useAppSelector(selectBuilderSteps);

  return (
    <div className="flex w-full m-auto overflow-visible!">
      {steps.map((step, index) => {
        return (
          <Fragment key={step.id}>
            <div
              className={`relative flex items-center w-full lg:px-8 md:px-4 px-2 py-2 border border-gray-300 transition-colors ${index !== 0 ? "-ml-px" : ""} ${step.status === "active" ? "z-10 border-black!" : "z-0"} ${step.status === "active" ? "bg-white" : "bg-[#f7f7f7]"}`}
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
              <div className="text-2xl md:text-4xl font-light text-black md:mr-6 mr-2">
                {step.id}
              </div>

              {/* Text */}
              <div className="flex flex-1 gap-3 items-center">
                <div className="flex-1 min-w-[55px]">
                  <p className="md:text-xs text-10 text-gray-500 truncate max-w-10! sm:max-w-full!">
                    {step.helper}
                  </p>
                  <p className="md:text-lg text-sm font-semibold uppercase leading-none">
                    {step.title}
                  </p>
                </div>

                {step.id === 2 && (
                  <p className="underline text-xs text-gray-400">
                    Browse Diamonds
                  </p>
                )}
              </div>

              {step.meta && (
                <div className="flex-1 leading-tight text-xs lg:block hidden">
                  <div className="flex flex-col text-xs text-gray-600">
                    <div className="text-end">{step.meta}</div>
                    <div className="flex items-center gap-3 mt-1 text-gray-600 place-content-end">
                      <span className="underline underline-offset-2 cursor-pointer opacity-50">
                        Change
                      </span>
                      <span>{step.price}</span>
                    </div>
                  </div>
                </div>
              )}

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
