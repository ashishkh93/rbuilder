import "./App.css";

import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Spinner } from "./components/ui/spinner";
import StonesLayout from "./pages/StonesList/StonesLayout";

const EngagementRingList = lazy(() => import("./pages/EngagementRingList"));
const EngagementRingDetail = lazy(() => import("./pages/EngagementRingDetail"));
const StonesList = lazy(() => import("./pages/StonesList"));
const StoneDetail = lazy(() => import("./pages/StoneDetail"));
const FinalRingBuilder = lazy(() => import("./pages/FinalRingBuilder"));

function App() {
  useEffect(() => {
    const initLoader = document.getElementById("initial-page-loader");
    if (initLoader) {
      initLoader.style.display = "none";
    }
  }, []);

  const getStoneListComp = () => {
    return (
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <Spinner className="w-8 h-8" />
          </div>
        }
      >
        <StonesList />
      </Suspense>
    );
  };

  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route path="/" element={<EntryPage />} /> */}
          {/* Engagement Ring Start*/}
          <Route
            path="engagement-rings"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center">
                    <Spinner className="w-8 h-8" />
                  </div>
                }
              >
                <EngagementRingList />
              </Suspense>
            }
          />
          <Route
            path="engagement-rings/products/:id"
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center">
                    <Spinner className="w-8 h-8" />
                  </div>
                }
              >
                <EngagementRingDetail />
              </Suspense>
            }
          />
          {/* Engagement Ring End*/}

          {/* Stones Start */}
          <Route path=":diamondType" element={<StonesLayout />}>
            <Route index element={getStoneListComp()} />
            <Route path=":shape" element={getStoneListComp()} />
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
              <Suspense
                fallback={
                  <div className="flex items-center justify-center">
                    <Spinner className="w-8 h-8" />
                  </div>
                }
              >
                <FinalRingBuilder />
              </Suspense>
            }
          />
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
