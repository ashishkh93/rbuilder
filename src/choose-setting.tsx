import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/theme.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index.ts";
import ChooseSettingFeature from "./features/ChooseSettingFeature.tsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("r-builder-app-choose-setting")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChooseSettingFeature />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
