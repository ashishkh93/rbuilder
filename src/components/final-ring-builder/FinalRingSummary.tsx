import FinalRingHeader from "./FinalRingHeader";
import ExtrasRow from "./ExtrasRow";
import FInalSummaryItem from "./FInalSummaryItem";
import FinalSummaryItem from "./FInalSummaryItem";
import { COMMON_ICONS } from "../shared/icons/common";
import FinalCheckoutSummary from "./FinalCheckoutSummary";
import { useAppSelector } from "@/store";
import {
  selectedSettingCurrency,
  selectedSettingDetail,
  selectedSettingPrice,
  selectedSettingSubtitle,
  selectedSettingTitle,
} from "@/store/products/products.selectors";
import { GLOBAL_CONFIG, ROUTES } from "@/config/global-config";
import { getShopifyFormatePrice } from "@/utils/common.util";
import {
  selectDiamondCurrencySymbol,
  selectDiamondId,
  selectDiamondPrice,
  selectDiamondShape,
  selectDiamondSubtitle,
} from "@/store/diamonds/diamonds.selectors";
import { useNavigate } from "react-router-dom";
import { CURRENCY_SYMBOLS } from "@/utils/constants";

const FinalRingSummary = () => {
  const navigate = useNavigate();

  // Setting (Ring)
  const { title: settingTitle } = useAppSelector(selectedSettingTitle);
  const { subTtitle: settingSubtitle } = useAppSelector(
    selectedSettingSubtitle
  );
  const price = useAppSelector(selectedSettingPrice);
  const settingCurrencySymbol = useAppSelector(selectedSettingCurrency);

  const { currentUrl: settingCurrentUrl } =
    useAppSelector(selectedSettingDetail) || {};

  // Diamong
  const diamondId = useAppSelector(selectDiamondId);
  const diamondShape = useAppSelector(selectDiamondShape);
  const { subTitle: diamondSubtitle } = useAppSelector(selectDiamondSubtitle);
  const diamondPrice = useAppSelector(selectDiamondPrice);
  const diamondCurrencySymbol = useAppSelector(selectDiamondCurrencySymbol);

  const currencySymbol = GLOBAL_CONFIG.currencySymbol;

  return (
    <section className="rb:w-full rb:lg:max-w-3xl">
      <FinalRingHeader />

      <div className="rb:mt-6 rb:space-y-2">
        {/* Setting */}
        <FinalSummaryItem
          icon={COMMON_ICONS.ring}
          // title="The Sarah"
          title={settingTitle || ""}
          subtitle={settingSubtitle || ""}
          price={`${CURRENCY_SYMBOLS[settingCurrencySymbol as keyof typeof CURRENCY_SYMBOLS] || currencySymbol}${getShopifyFormatePrice(price || 0)}`}
          // originalPrice={`${currencySymbol}${getShopifyFormatePrice(price || 0)}`}
          // discount="25% off"
          onChange={() => navigate(ROUTES.engagementRings)}
          detailsHref={settingCurrentUrl || ""}
        />

        {/* Diamond */}
        <FInalSummaryItem
          icon={COMMON_ICONS.stone}
          title={diamondShape || ""}
          subtitle={diamondSubtitle || ""}
          price={`${diamondCurrencySymbol}${diamondPrice || 0}`}
          // originalPrice={`${currencySymbol}${diamondPrice || 0}`}
          // discount="25% off"
          onChange={() => navigate(ROUTES.defaultDiamondType)}
          detailsHref={ROUTES.diamondDetail(diamondId || "")}
        />

        <ExtrasRow />
      </div>

      <div className="rb:mt-3">
        <FinalCheckoutSummary onAddToBag={() => console.log("Added to bag")} />
      </div>
    </section>
  );
};

export default FinalRingSummary;
