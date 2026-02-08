import "./App.css";

import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Spinner } from "./components/ui/spinner";
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
          <Route
            path="engagement-rings"
            element={
              <EngagementRingList />
            }
          />
          <Route
            path="engagement-rings/products/:id"
            element={
              <EngagementRingDetail />
            }
          />
          {/* Engagement Ring End*/}

          {/* Stones Start */}
          <Route path=":diamondType" element={<StonesLayout />}>
            <Route index element={<StonesList />} />
            <Route path=":shape" element={<StonesList />} />
          </Route>

          {/* <Route path="lab-diamond" element={getStoneListComp()} />

          <Route path="lab-diamond/:shape" element={getStoneListComp()} /> */}
          {/* <Route
            path=":diamondType"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center">
                    <Spinner className="w-8 h-8" />
                  </div>
                }
              >
                <StonesList />
              </Suspense>
            }
          />
          <Route
            path=":diamondType/:shape"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center">
                    <Spinner className="w-8 h-8" />
                  </div>
                }
              >
                <StoneDetail />
              </Suspense>
            }
          /> */}
          {/* Stones End */}

          {/* Complete Ring Builder */}
          <Route
            path="complete-ring-builder"
            element={
              <FinalRingBuilder />
            }
          />
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
