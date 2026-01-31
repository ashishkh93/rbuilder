import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: BuilderState = {
  currentStep: 1,
  completedSteps: {
    1: true,
    2: false,
    3: false,
  },
  stepData: {
    1: { meta: "The Kamellie", price: 1700 },
    2: {},
    3: {},
  },
  selectedSettingId: "setting_123",
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

    selectSetting(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        price: number;
      }>
    ) {
      state.selectedSettingId = action.payload.id;
      state.stepData[1] = {
        meta: action.payload.name,
        price: action.payload.price,
      };

      state.completedSteps[1] = true;
      state.completedSteps[2] = false;
      state.completedSteps[3] = false;
      state.currentStep = 2;
    },

    selectStone(
      state,
      action: PayloadAction<{
        id: string;
        meta: string;
        price: number;
      }>
    ) {
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
