import { Outlet } from "react-router-dom";

const StonesLayout = () => {
  return (
    <div>
      {/* shared layout UI only */}
      <Outlet />
    </div>
  );
};

export default StonesLayout;
