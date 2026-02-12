import { GLOBAL_CONFIG } from "@/config/global-config";

const getBaseUrl = () => {
  const path = window.location.pathname;
  console.log(path, "path==");

  if (path.includes("pages")) return `/pages/`;
  if (path.includes("collections")) return `/collections/`;
  return `/`;
};

export const storeBaseUrl = getBaseUrl();

export const formatPrice = (price: number | string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(price));
};

export const firstLetterCapitalize = (title: string) => {
  if (!title) return "";
  return title.charAt(0).toUpperCase() + title?.toLowerCase()?.slice(1);
};

export const graphQLCurrencyFields = () => {
  var graphQLCurrencyFields: string[] = [];
  GLOBAL_CONFIG.availableCurrencies.split(",").forEach((curCode: string) => {
    graphQLCurrencyFields.push(
      `finalPrice${curCode.charAt(0) + curCode.toLowerCase().slice(1)}`
    );
  });
  return graphQLCurrencyFields.join(" ");
};

export const getDiamondType = (lab: string) => {
  switch (lab) {
    case "lab":
      return "Lab Grown";
    case "white":
      return "Natural";
    case "lab_color":
      return "Coloured Lab Grown";
    default:
      return "";
  }
};

export const getDiamondTitle = (diamond: Diamond, isTitle = false) => {
  if (isTitle) {
    return `${diamond?.caratWeight}CT ${diamond?.shape} Cut ${getDiamondType(
      diamond?.diamondType
    )} Diamond`;
  } else {
    return `${diamond?.caratWeight}CT ${diamond?.shape} Cut ${getDiamondType(diamond?.diamondType)} Diamond`;
  }
};
