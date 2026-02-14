import { GLOBAL_CONFIG, ROUTES } from "@/config/global-config";

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

export const encode = <T>(value: T): string | null => {
  try {
    const json = JSON.stringify(value);
    const bytes = new TextEncoder().encode(json);
    const binary = String.fromCharCode(...bytes);
    return btoa(binary);
  } catch (error) {
    console.error("Encoding failed:", error);
    return null;
  }
};

export const decode = <T = unknown>(encoded: string): T | null => {
  try {
    const binary = atob(encoded);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    return JSON.parse(json) as T;
  } catch (error) {
    console.error("Decoding failed:", error);
    return null;
  }
};

export const buildPayload = (diamondId: string, settingId: string) => {
  const payload = {
    diamondId,
    settingId,
  };

  return encode(payload);
};

export const getFinalPageUrl = (diamondId: string, settingId: string) => {
  const encodedPayload = buildPayload(diamondId, settingId);
  return `${getWindowOrigin()}/collections/${ROUTES.finalRingBuilder}?data=${encodedPayload}`;
};

export const getShopifyFormatePrice = (price: number | string) => {
  if (!price) return 0;
  return (Number(price) / 100).toFixed(2);
};

export const getWindowOrigin = () => {
  console.log(typeof window, "windowType---");

  if (typeof window === "undefined") return "";
  return window.location.origin;
};
