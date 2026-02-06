import "./App.css";

import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Spinner } from "./components/ui/spinner";

const EngagementRingList = lazy(() => import("./pages/EngagementRingList"));
const EngagementRingDetail = lazy(() => import("./pages/EngagementRingDetail"));
const StonesList = lazy(() => import("./pages/StonesList"));
const StoneDetail = lazy(() => import("./pages/StoneDetail"));
const FinalRingBuilder = lazy(() => import("./pages/FinalRingBuilder"));

function App() {
  return (
    <div id="tw-app-root">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/rings" replace />} />
          {/* Engagement Ring Start*/}
          <Route
            path="rings"
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
            path="rings/:id"
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
          <Route
            path="stones"
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
            path="stones/:id"
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
          />
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
