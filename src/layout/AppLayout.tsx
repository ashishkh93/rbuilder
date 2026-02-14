import { Outlet } from "react-router-dom";
import { Breadcrumb } from "../components/common";
import RBuilderStepper from "../components/common/RBuilderStepper";
import ScrollToTop from "@/components/common/ScrollToTop";

import { useBuilderBreadcrumbs } from "@/hooks/useBuilderBreadcrumbs";

export default function AppLayout() {
  const breadcrumbItems = useBuilderBreadcrumbs();

  return (
    <ScrollToTop>
      <div className="rb:max-w-7xl rb:mx-auto rb:sm:px-6 rb:px-3 rb:sm:py-6 rb:py-3">
        <Breadcrumb items={breadcrumbItems} />

        <RBuilderStepper />

        <div className="rb:mt-4 rb:md:mt-8">
          <Outlet />
        </div>
      </div>
    </ScrollToTop>
  );
}
