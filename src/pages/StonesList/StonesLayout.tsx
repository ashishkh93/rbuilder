import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDiamondSingle } from "@/store/filters/filters.slice";
import { ROUTES } from "@/config/global-config";

const StonesLayout = () => {
  const params = useParams();
  const diamondType = params?.diamondType;
  const dispatch = useDispatch();

  useEffect(() => {
    if (diamondType)
      dispatch(
        setDiamondSingle({
          key: "type",
          value: diamondType === ROUTES.defauktDiamondType ? "lab" : "natural",
        })
      );
  }, [diamondType]);

  return (
    <div className="rb:overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default StonesLayout;
