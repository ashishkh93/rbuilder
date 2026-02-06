import FilterRangeSlider from "@/components/common/FilterRangeSlider";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  setDiamondRange,
  setDiamondSingle,
} from "@/store/filters/filters.slice";
import { STONE_FILTERS } from "@/utils/constants";

const StoneFilterComp = () => {
  const dispatch = useAppDispatch();

  const values = useAppSelector((s) => s.filters.diamondFilter);

  console.log(values, "values==");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {STONE_FILTERS.map((f) => (
        <FilterRangeSlider
          key={f.key}
          label={f.label}
          value={values[f.key] || ""}
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
          ticks={f.ticks}
        />
      ))}
    </div>
  );
};

export default StoneFilterComp;
