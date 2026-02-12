import {
  selectDiamondCurrencySymbol,
  selectDiamondPrice,
} from "@/store/diamonds/diamonds.selectors";
import { useSelector } from "react-redux";

const StonePrice = () => {
  const diamondCurrencySymbol = useSelector(selectDiamondCurrencySymbol);
  const diamondPrice = useSelector(selectDiamondPrice);
  return (
    <div>
      <div className="rb:text-xl! rb:tracking-tight! rb:font-bold!">
        {diamondCurrencySymbol}
        {diamondPrice}
      </div>
      {/* <div className="rb:text-sm rb:text-gray-400">With setting: $2,310</div> */}
    </div>
  );
};

export default StonePrice;
