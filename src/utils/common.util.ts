const getBaseUrl = () => {
  const path = window.location.pathname;
  if (path.includes("pages")) return `/pages/`;
  if (path.includes("collections")) return `/collections/`;
  return `/`;
};

export const storeBaseUrl = getBaseUrl();
