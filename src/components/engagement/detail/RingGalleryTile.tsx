export function GalleryTile({ index, ct }: { index: number; ct?: string }) {
  const radiusMap = [
    "rounded-tl-2xl",
    "rounded-tr-2xl",
    "rounded-bl-2xl",
    "rounded-br-2xl",
  ];

  return (
    <div
      className={`
        relative
        aspect-square
        overflow-hidden
        bg-white
        ${radiusMap[index]}
      `}
    >
      <div className="absolute inset-0 rounded-sm! overflow-hidden">
        {/* Light background */}
        <div className="absolute inset-0 bg-[radial-gradient(85%_95%_at_50%_55%,#ffffff_0%,#ffffff_45%,#f5f5f5_95%,#eeeeee_100%)] hover:scale-100!" />

        {/* Subtle floor depth */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(0,0,0,0.035)_100%)] hover:scale-100!" />

        {/* Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/162Q-ER-MQ-WG-spin_0.jpg"
          alt="Ring"
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0 mix-blend-multiply"
        />
      </div>

      {/* BADGE */}
      {ct && (
        <span className="absolute top-3 left-1/2 -translate-x-1/2 text-xs bg-white px-3 py-1 rounded-full shadow-sm">
          Shown with {ct}
        </span>
      )}
    </div>
  );
}
