import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/theme.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import ChooseSettingFeature from "./features/ChooseSettingFeature.tsx";

createRoot(document.getElementById("r-builder-app-choose-setting")!).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <BrowserRouter>
      <Provider store={store}>
        <ChooseSettingFeature ringSize="" bandWidth="" />
      </Provider>
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </StrictMode>
);
