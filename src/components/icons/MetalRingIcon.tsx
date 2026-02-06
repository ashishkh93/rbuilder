export const MetalRingIcon = ({
  label,
  color,
  width = 40,
  height = 40,
  radius = 15,
}: MetalRingIconProps) => {
  return (
    <svg viewBox="0 0 40 40" width={width} height={height} aria-hidden>
      {/* Ring */}
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="1"
      />

      {/* Center text */}
      {label && (
        <text
          x="20"
          y="20"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fontWeight="500"
          letterSpacing="-0.04em"
          fill={color}
          style={{
            fontFamily: "Proxima Nova Condensed, system-ui, sans-serif",
          }}
        >
          {label}
        </text>
      )}
    </svg>
  );
};
