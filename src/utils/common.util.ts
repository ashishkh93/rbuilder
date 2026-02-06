const getBaseUrl = () => {
  const path = window.location.pathname;
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
