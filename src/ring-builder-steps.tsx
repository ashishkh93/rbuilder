import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/theme.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index.ts";
import RingBuildersStepsFeature from "./features/RingBuildersStepsFeature.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { storeBaseUrl } from "./utils/common.util.ts";

createRoot(document.getElementById("r-builder-app-steps")!).render(
  <StrictMode>
    <BrowserRouter basename={storeBaseUrl}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RingBuildersStepsFeature />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
