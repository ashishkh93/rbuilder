import { Tooltip } from "react-tooltip";
import { useId } from "react";

const DEFAULT_ICON = (
  <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
    <path
      opacity="0.7"
      d="M9 18C4.03767 18 0 13.963 0 9C0 4.03767 4.03767 0 9 0C13.963 0 18 4.03702 18 9C18 13.963 13.963 18 9 18ZM9 1.29143C4.74925 1.29143 1.29143 4.74925 1.29143 9C1.29143 13.2501 4.74925 16.7086 9 16.7086C13.2501 16.7086 16.7086 13.2508 16.7086 9C16.7086 4.74925 13.2501 1.29143 9 1.29143ZM8.03143 4.80284C8.03143 5.05972 8.13347 5.30608 8.31511 5.48773C8.49676 5.66937 8.74312 5.77142 9 5.77142C9.25688 5.77142 9.50324 5.66937 9.68489 5.48773C9.86653 5.30608 9.96858 5.05972 9.96858 4.80284C9.96858 4.54596 9.86653 4.2996 9.68489 4.11796C9.50324 3.93631 9.25688 3.83427 9 3.83427C8.74312 3.83427 8.49676 3.93631 8.31511 4.11796C8.13347 4.2996 8.03143 4.54596 8.03143 4.80284ZM9 14.1657C8.64357 14.1657 8.35428 13.8771 8.35428 13.52V7.70857C8.35428 7.35213 8.64357 7.06285 9 7.06285C9.35644 7.06285 9.64572 7.35213 9.64572 7.70857V13.52C9.64572 13.8771 9.35644 14.1657 9 14.1657Z"
      fill="var(--color-primary)"
    />
  </svg>
);

type CustomTooltipProps = {
  tooltipContent: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  children?: React.ReactNode;
};

export default function CustomTooltip({
  tooltipContent,
  position = "top",
  children,
}: CustomTooltipProps) {
  const rawId = useId();
  const tooltipId = rawId.replace(/[:]/g, "");

  const anchor = children ?? (
    <span className="inline-flex items-center cursor-help">{DEFAULT_ICON}</span>
  );

  return (
    <>
      <div data-tooltip-id={tooltipId} className="w-full!">{anchor}</div>

      <Tooltip id={tooltipId} place={position}>
        {tooltipContent}
      </Tooltip>
    </>
  );
}
