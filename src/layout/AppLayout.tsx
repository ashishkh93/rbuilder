import { Outlet } from "react-router-dom";
import { Breadcrumb } from "../components/common";
import RBuilderStepper from "../components/common/RBuilderStepper";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function AppLayout() {
  return (
    <ScrollToTop>
      <div className="max-w-7xl mx-auto sm:px-6 px-3 sm:py-6 py-3">
        <Breadcrumb
          items={[
            { label: "Homepage", path: "/rings" },
            { label: "Engagement Rings", path: "/rings" },
            { label: "Settings" },
          ]}
        />

        <RBuilderStepper />

        <div className="mt-4 md:mt-10">
          <Outlet />
        </div>
      </div>
    </ScrollToTop>
  );
}
