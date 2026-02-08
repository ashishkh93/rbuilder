import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDiamondSingle } from "@/store/filters/filters.slice";

const StonesLayout = () => {
  const params = useParams();
  const diamondType = params?.diamondType;
  const dispatch = useDispatch();

  useEffect(() => {
    if (diamondType)
      dispatch(
        setDiamondSingle({
          key: "type",
          value: diamondType === "lab-diamond" ? "lab" : "natural",
        })
      );
  }, [diamondType]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default StonesLayout;
