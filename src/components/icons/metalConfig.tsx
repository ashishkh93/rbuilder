export const METAL_COLORS = {
  white14k: "#BDBDBD",
  yellow14k: "#C3990D",
  rose14k: "#E16767",

  white18k: "#808080",
  yellow18k: "#C3990D",
  rose18k: "#E16767",

  platinum: "#808080",
} as const;

import { MetalRingIcon } from "./MetalRingIcon";
import { SHAPE_ICONS } from "./shapeIcon";

export const METAL_OPTIONS = [
  {
    id: "white14k",
    label: "White Gold",
    valueLabel: "14K White Gold",
    icon: <MetalRingIcon label="14K" color={METAL_COLORS.white14k} />,
  },
  {
    id: "yellow14k",
    label: "Yellow Gold",
    valueLabel: "14K Yellow Gold",
    icon: <MetalRingIcon label="14K" color={METAL_COLORS.yellow14k} />,
  },
  {
    id: "rose14k",
    label: "Rose Gold",
    valueLabel: "14K Rose Gold",
    icon: <MetalRingIcon label="14K" color={METAL_COLORS.rose14k} />,
  },
  {
    id: "white18k",
    label: "White Gold",
    valueLabel: "18K White Gold",
    icon: <MetalRingIcon label="18K" color={METAL_COLORS.white18k} />,
  },
  {
    id: "yellow18k",
    label: "Yellow Gold",
    valueLabel: "18K Yellow Gold",
    icon: <MetalRingIcon label="18K" color={METAL_COLORS.yellow18k} />,
  },
  {
    id: "rose18k",
    label: "Rose Gold",
    valueLabel: "18K Rose Gold",
    icon: <MetalRingIcon label="18K" color={METAL_COLORS.rose18k} />,
  },
  {
    id: "platinum",
    label: "Platinum",
    valueLabel: "Platinum",
    icon: <MetalRingIcon label="PT" color={METAL_COLORS.platinum} />,
  },
];

export const SHAPE_OPTIONS = [
  {
    id: "round",
    label: "Round",
    icon: <img src={SHAPE_ICONS.round} alt="Round" />,
    iconSrc: SHAPE_ICONS.round,
  },
  {
    id: "oval",
    label: "Oval",
    icon: <img src={SHAPE_ICONS.oval} alt="Oval" />,
    iconSrc: SHAPE_ICONS.oval,
  },
  {
    id: "pear",
    label: "Pear",
    icon: <img src={SHAPE_ICONS.pear} alt="Emerald" />,
    iconSrc: SHAPE_ICONS.pear,
  },
  {
    id: "cushion",
    label: "Cushion",
    icon: <img src={SHAPE_ICONS.cushion} alt="Cushion" />,
    iconSrc: SHAPE_ICONS.cushion,
  },
  {
    id: "emerald",
    label: "Emerald",
    icon: <img src={SHAPE_ICONS.emerald} alt="Emerald" />,
    iconSrc: SHAPE_ICONS.emerald,
  },
  {
    id: "princess",
    label: "Princess",
    icon: <img src={SHAPE_ICONS.princess} alt="Princess" />,
    iconSrc: SHAPE_ICONS.princess,
  },
  {
    id: "marquise",
    label: "Marquise",
    icon: <img src={SHAPE_ICONS.marquise} alt="Marquise" />,
    iconSrc: SHAPE_ICONS.marquise,
  },
  {
    id: "radiant",
    label: "Radiant",
    icon: <img src={SHAPE_ICONS.radiant} alt="Radiant" />,
    iconSrc: SHAPE_ICONS.radiant,
  },
  {
    id: "asscher",
    label: "Asscher",
    icon: <img src={SHAPE_ICONS.asscher} alt="Asscher" />,
    iconSrc: SHAPE_ICONS.asscher,
  },
];

export const getMetalLabel = (id: string) => {
  return METAL_OPTIONS.find((opt) => opt.id === id)?.valueLabel || "";
};

export const getShapeLabel = (id: string) => {
  return SHAPE_OPTIONS.find((opt) => opt.id === id)?.label || "";
};
