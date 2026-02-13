import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: BuilderState = {
  currentStep: 1,
  completedSteps: {
    1: false,
    2: false,
    3: false,
  },
  stepData: {
    1: {},
    2: {},
    3: {},
  },
  selectedSettingId: null,
  selectedStoneId: null,
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    goToStep(state, action: PayloadAction<BuilderStep>) {
      state.currentStep = action.payload;
    },

    setStepData(
      state,
      action: PayloadAction<{ step: BuilderStep; data: StepData }>
    ) {
      const { step, data } = action.payload;
      state.stepData[step] = {
        ...state.stepData[step],
        ...data,
      };
    },

    selectSetting(state, action: PayloadAction<SelectSettingPayload>) {
      if (action.payload.type === "reset") {
        state.selectedSettingId = null;
        state.stepData[1] = {};
        state.completedSteps[1] = false;
        state.currentStep = 1;
        return;
      }

      state.selectedSettingId = action.payload.id;
      state.stepData[1] = {
        meta: action.payload.meta,
        price: action.payload.price,
      };

      state.completedSteps[1] = true;
      state.currentStep = 2;
    },

    selectStone(state, action: PayloadAction<SelectStonePayload>) {
      if (action.payload.type === "reset") {
        state.selectedStoneId = null;
        state.stepData[2] = {};
        state.completedSteps[2] = false;
        state.currentStep = 2;
        return;
      }

      state.selectedStoneId = action.payload.id;
      state.stepData[2] = {
        meta: action.payload.meta,
        price: action.payload.price,
      };

      state.completedSteps[2] = true;
      state.currentStep = 3;
    },

    resetBuilder() {
      return initialState;
    },
  },
});

export const {
  goToStep,
  setStepData,
  selectSetting,
  selectStone,
  resetBuilder,
} = builderSlice.actions;

export default builderSlice.reducer;
