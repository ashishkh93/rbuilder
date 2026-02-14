import HoverZoomImage from "./HoverZoomImage";

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
  className = "rb:bg-white",
  shouldHaveGradient = false,
  additionalInfoComp,
  imageContainerClass = "",
  isVideo,
}: MediaTileProps) => {
  const radiusMap = [
    "rb:rounded-tl-2xl",
    "rb:rounded-tr-2xl",
    "rb:rounded-bl-2xl",
    "rb:rounded-br-2xl",
  ];

  return (
    <div
      className={[
        "rb:relative rb:aspect-square rb:overflow-hidden rb:bg-white",
        radiusMap[index] ?? "",
        className,
      ].join(" ")}
    >
      {/* Inner background layer */}
      <div
        className={`rb:cursor-pointer! rb:absolute rb:inset-0 rb:overflow-hidden rb:rounded-sm ${imageContainerClass}`}
      >
        {shouldHaveGradient && (
          <>
            {/* Light background */}
            <div className="rb:absolute rb:inset-0 rb:bg-[radial-gradient(85%_95%_at_50%_55%,#ffffff_0%,#ffffff_45%,#f5f5f5_95%,#eeeeee_100%)] rb:hover:scale-100!" />

            {/* Subtle floor depth */}
            <div className="rb:absolute rb:inset-0 rb:bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(0,0,0,0.035)_100%)] rb:hover:scale-100!" />
          </>
        )}

        {!isVideo ? (
          <div className="rb:relative rb:w-full rb:h-full">
            <HoverZoomImage src={src} zoomScale={2} />
          </div>
        ) : (
          // <img
          //   src={src}
          //   alt={alt}
          //   className="rb:absolute rb:inset-0 rb:h-full! rb:w-full! rb:object-contain! rb:mix-blend-multiply rb:transition-opacity rb:duration-700"
          //   loading="lazy"
          // />
          <div className="rb:absolute rb:inset-0 rb:overflow-hidden">
            <iframe
              src={src}
              title={alt}
              allow="autoplay; fullscreen"
              className="rb:absolute rb:top-1/2 rb:left-1/2 rb:w-[500px] rb:h-[500px] rb:-translate-x-1/2 rb:-translate-y-1/2 rb:scale-[1.25] rb:sm:scale-[1] rb:lg:scale-[0.75] rb:border-0"
            />
          </div>
        )}
      </div>

      {/* BADGE */}
      {additionalInfoComp && <>{additionalInfoComp}</>}
    </div>
  );
};

export default MediaTile;
