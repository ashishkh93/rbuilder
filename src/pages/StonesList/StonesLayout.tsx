import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

const StonesLayout = () => {
  const params = useParams()
  const diamondType = params?.diamondType
  
  useEffect(() => {
    console.log(params, 'params==');
  }, [params])

  return (
    <div>
      {/* shared layout UI only */}
      <Outlet />
    </div>
  );
};

export default StonesLayout;
