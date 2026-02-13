import "./App.css";

import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import StonesLayout from "./pages/StonesList/StonesLayout";
import EngagementRingList from "./pages/EngagementRingList";
import EngagementRingDetail from "./pages/EngagementRingDetail";
import StonesList from "./pages/StonesList";
import StoneDetail from "./pages/StoneDetail";
import FinalRingBuilder from "./pages/FinalRingBuilder";
import { ROUTES } from "./config/global-config";

function App() {
  useEffect(() => {
    const initLoader = document.getElementById("initial-page-loader");
    if (initLoader) {
      initLoader.style.display = "none";
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route path="/" element={<EntryPage />} /> */}
          
          {/* Engagement Ring Start*/}
          <Route path={ROUTES.engagementRings} element={<EngagementRingList />}>
            <Route path=":setting" element={<EngagementRingDetail />} />
          </Route>
          {/* Engagement Ring End*/}

          {/* Stones Start */}
          <Route path={ROUTES.diamondType} element={<StonesLayout />}>
            <Route index element={<StonesList />} />
            <Route path=":shape" element={<StonesList />} />
          </Route>

          {/* Diamond Detail */}
          <Route path=":diamondTab/diamonds" element={<StoneDetail />} />

          {/* Stones End */}

          {/* Complete Ring Builder */}
          <Route path={ROUTES.finalRingBuilder} element={<FinalRingBuilder />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
