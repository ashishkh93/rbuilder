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
          <Route path="engagement-rings" element={<EngagementRingList />} />
          <Route
            path="engagement-rings/products/:id"
            element={<EngagementRingDetail />}
          />
          {/* Engagement Ring End*/}

          {/* Stones Start */}
          <Route path=":diamondType" element={<StonesLayout />}>
            <Route index element={<StonesList />} />
            <Route path=":shape" element={<StonesList />} />
          </Route>

          {/* Diamond Detail */}
          <Route path=":diamondTab/diamonds" element={<StoneDetail />} />

          {/* Stones End */}

          {/* Complete Ring Builder */}
          <Route path="complete-ring-builder" element={<FinalRingBuilder />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
