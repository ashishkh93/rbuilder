import FilterRangeSlider from "@/components/common/FilterRangeSlider";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  setDiamondRange,
  setDiamondSingle,
} from "@/store/filters/filters.slice";
import { ADVANCED_FILTERS, STONE_FILTERS } from "@/utils/constants";
import SectionSeparator from "./SectionSeparator";
import { shallowEqual } from "react-redux";
import { memo, useState } from "react";
import CertificateFilter from "./CertificateFilter";

const StoneFilterComp = () => {
  const dispatch = useAppDispatch();

  const values = useAppSelector((s) => s.filters.diamondFilter, shallowEqual);

  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <>
      <div className="rb:grid rb:grid-cols-1 rb:md:grid-cols-2 rb:xl:grid-cols-3 rb:gap-6">
        {renderFilters(STONE_FILTERS, values, dispatch)}
      </div>

      <SectionSeparator
        open={showAdvanced}
        onToggle={() => setShowAdvanced((v) => !v)}
        label="Advanced Quality Specs"
        className="rb:mt-8! rb:mb-4!"
      />

      <div
        className={`rb:grid rb:transition-all rb:duration-300 rb:ease-in-out ${
          showAdvanced
            ? "rb:grid-rows-[1fr] rb:opacity-100 rb:mt-3"
            : "rb:grid-rows-[0fr] rb:opacity-0 rb:mt-0"
        }`}
      >
        <div className={`${!showAdvanced ? "rb:overflow-hidden" : ""}`}>
          <div className="rb:grid rb:grid-cols-1 rb:md:grid-cols-2 rb:xl:grid-cols-3 rb:gap-6">
            {renderFilters(ADVANCED_FILTERS, values, dispatch)}
            <CertificateFilter
              value={values.lab}
              onChange={(val) =>
                dispatch(
                  setDiamondSingle({
                    key: "lab",
                    value: val,
                  })
                )
              }
            />
          </div>
          <div className="rb:pt-6!">
            <Separator />
          </div>
        </div>
      </div>
    </>
  );
};

const renderFilters = (
  filters: typeof STONE_FILTERS | typeof ADVANCED_FILTERS,
  values: Record<string, any>,
  dispatch: ReturnType<typeof useAppDispatch>
) =>
  filters.map((f) => (
    <FilterRangeSlider
      key={f.key}
      label={f.label}
      value={values[f.key] ?? ""}
      min={f.min}
      max={f.max}
      step={f.step}
      showInputs={f.showInputs}
      marks={f.marks?.map((m, i) => ({ value: i, label: m }))}
      onChange={(val) =>
        f.type === "range"
          ? dispatch(
              setDiamondRange({
                key: f.key as RagneKeys,
                value: val as [number, number],
              })
            )
          : dispatch(
              setDiamondSingle({
                key: f.key as SingleKeys,
                value: val as SliderValue,
              })
            )
      }
    />
  ));

export default memo(StoneFilterComp);
