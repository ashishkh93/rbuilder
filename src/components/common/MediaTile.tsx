/**
 * MediaTile
 * - Handles corner rounding based on grid index
 * - Handles background layers
 * - Handles image rendering
 */
const MediaTile = ({
  src,
  alt = "Stone image",
  index = 0,
  className = "",
  shouldHaveGradient = false,
  additionalInfoComp,
  imageContainerClass = "",
}: MediaTileProps) => {
  const radiusMap = [
    "rounded-tl-2xl",
    "rounded-tr-2xl",
    "rounded-bl-2xl",
    "rounded-br-2xl",
  ];

  return (
    <div
      className={[
        "relative aspect-square overflow-hidden bg-white",
        radiusMap[index] ?? "",
        className,
      ].join(" ")}
    >
      {/* Inner background layer */}
      <div
        className={`absolute inset-0 overflow-hidden rounded-sm ${imageContainerClass}`}
      >
        {shouldHaveGradient && (
          <>
            {/* Light background */}
            <div className="absolute inset-0 bg-[radial-gradient(85%_95%_at_50%_55%,#ffffff_0%,#ffffff_45%,#f5f5f5_95%,#eeeeee_100%)] hover:scale-100!" />

            {/* Subtle floor depth */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(0,0,0,0.035)_100%)] hover:scale-100!" />
          </>
        )}

        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-contain mix-blend-multiply transition-opacity duration-700
          "
          loading="lazy"
        />
      </div>

      {/* BADGE */}
      {additionalInfoComp && <>{additionalInfoComp}</>}
    </div>
  );
};

export default MediaTile;
