export function GalleryTile({ index, ct }: { index: number; ct?: string }) {
  const radiusMap = [
    "rb:rounded-tl-2xl",
    "rb:rounded-tr-2xl",
    "rb:rounded-bl-2xl",
    "rb:rounded-br-2xl",
  ];

  return (
    <div
      className={`rb:relative rb:aspect-square rb:overflow-hidden rb:bg-white ${radiusMap[index]}`}
    >
      <div className="rb:absolute rb:inset-0 rb:rounded-sm! rb:overflow-hidden">
        {/* Light background */}
        <div className="rb:absolute rb:inset-0 rb:bg-[radial-gradient(85%_95%_at_50%_55%,#ffffff_0%,#ffffff_45%,#f5f5f5_95%,#eeeeee_100%)] hover:rb:scale-100!" />

        {/* Subtle floor depth */}
        <div className="rb:absolute rb:inset-0 rb:bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(0,0,0,0.035)_100%)] hover:rb:scale-100!" />

        {/* Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/162Q-ER-MQ-WG-spin_0.jpg"
          alt="Ring"
          className="rb:absolute rb:inset-0 rb:w-full rb:h-full rb:object-contain rb:transition-opacity rb:duration-700 rb:opacity-100 group-hover:rb:opacity-0 rb:mix-blend-multiply"
        />
      </div>

      {/* BADGE */}
      {ct && (
        <span className="rb:absolute rb:top-3 rb:left-1/2 rb:-translate-x-1/2 rb:text-xs rb:bg-white rb:px-3 rb:py-1 rb:rounded-full rb:shadow-sm">
          Shown with {ct}
        </span>
      )}
    </div>
  );
}
