import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/theme.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import RingBuildersStepsFeature from "./features/RingBuildersStepsFeature.tsx";

createRoot(document.getElementById("r-builder-app-steps")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <RingBuildersStepsFeature />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
