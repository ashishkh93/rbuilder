export const RING_CATEGORIES = [
  { id: "solitaire", label: "Solitaire", icon: "solitaire" },
  { id: "pave", label: "Pave", icon: "pave" },
  { id: "halo", label: "Halo", icon: "halo" },
  { id: "nature", label: "Nature", icon: "nature" },
  { id: "hiddenHalo", label: "Hidden Halo", icon: "hiddenHalo", active: true },
  { id: "sideStone", label: "Side Stone", icon: "sideStone" },
  { id: "threeStone", label: "Three Stone", icon: "threeStone" },
  { id: "vintage", label: "Vintage", icon: "vintage" },
];

export const getStyleLabel = (id: string) => {
  return RING_CATEGORIES.find((opt) => opt.id === id)?.label || "";
};
