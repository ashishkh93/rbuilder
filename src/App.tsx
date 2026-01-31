import "./App.css";
// import "./styles/style.css";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Spinner } from "./components/ui/spinner";

const EngagementRingList = lazy(() => import("./pages/EngagementRingList"));
const EngagementRingDetail = lazy(() => import("./pages/EngagementRingDetail"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route path="/" element={<Home />}> */}
          {/* Engagement Ring */}
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
        </Route>
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
