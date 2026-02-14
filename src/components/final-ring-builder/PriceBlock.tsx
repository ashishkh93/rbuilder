import { GLOBAL_CONFIG } from "@/config/global-config";
import { useAppSelector } from "@/store";
import { selectDiamondDetail } from "@/store/diamonds/diamonds.selectors";
import { selectedSettingPrice } from "@/store/products/products.selectors";
import { getShopifyFormatePrice } from "@/utils/common.util";
import { useMemo } from "react";

const PriceBlock = () => {
  const settingPrice = useAppSelector(selectedSettingPrice);
  const selectedDiamond = useAppSelector(selectDiamondDetail);
  const priceKey = GLOBAL_CONFIG.priceKey;
  const discountedPrice = GLOBAL_CONFIG.discountedPrice;
  const currencySymbol = GLOBAL_CONFIG.currencySymbol;

  const finalTotalPrice = useMemo(() => {
    return (
      Number(selectedDiamond?.[priceKey as keyof typeof selectedDiamond] || 0) +
      Number(getShopifyFormatePrice(settingPrice || 0)) -
      Number(discountedPrice || 0)
    );
  }, [selectedDiamond, settingPrice, priceKey, discountedPrice]);

  return (
    <div className="rb:text-center">
      <p className="rb:text-md rb:text-gray-400">Total Price</p>

      <p className="rb:mt-1 rb:text-3xl rb:font-semibold rb:text-black">
        {currencySymbol}
        {finalTotalPrice.toLocaleString()}
      </p>

      {/* {finalTotalPrice && (
        <p className="rb:mt-1 rb:text-xl rb:text-gray-400 rb:line-through">
          {currencySymbol}
          {finalTotalPrice.toLocaleString()}
        </p>
      )} */}
    </div>
  );
};

export default PriceBlock;
