import { useRef, useState } from "react";

type HoverZoomImageProps = {
  src: string;
  zoomScale?: number;
  className?: string;
};

export default function HoverZoomImage({
  src,
  zoomScale = 2,
  className = "",
}: HoverZoomImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [bgPos, setBgPos] = useState("50% 50%");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !active) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setBgPos(`${x}% ${y}%`);
  };

  return (
    // ✅ ROOT PARTICIPATES IN LAYOUT
    <div
      ref={containerRef}
      className={`
        rb:relative
        rb:w-full
        rb:h-full
        rb:overflow-hidden
        ${active ? "rb:cursor-zoom-out" : "rb:cursor-zoom-in"}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((v) => !v)}
    >
      {/* BASE IMAGE LAYER */}
      <img
        src={src}
        alt=""
        draggable={false}
        className={`
          rb:absolute rb:inset-0
          rb:w-full rb:h-full
          rb:object-contain
          rb:transition-opacity rb:duration-300
          ${active ? "rb:opacity-0" : "rb:opacity-100"}
        `}
      />

      {/* ZOOM LAYER */}
      <div
        className="rb:absolute rb:inset-0 rb:bg-no-repeat"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: `${zoomScale * 100}% auto`,
          backgroundPosition: bgPos,
          opacity: active ? 1 : 0,
        }}
      />
    </div>
  );
}
