import { useEffect, useState } from "react";

const BottomDrawer = ({ open, onClose, children }: BottomDrawerProps) => {
  const [render, setRender] = useState(open);

  // keep mounted while closing animation runs
  useEffect(() => {
    if (open) {
      setRender(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";

      const timer = setTimeout(() => {
        setRender(false);
      }, 300); // MUST match transition duration

      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!render) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          rb:fixed rb:inset-0 rb:z-40 rb:bg-black/40
          rb:transition-opacity rb:duration-300
          ${open ? "rb:opacity-100" : "rb:opacity-0 rb:pointer-events-none"}
        `}
      />

      {/* Drawer */}
      <div
        className={`
          rb:fixed rb:inset-x-0 rb:bottom-0 rb:z-50 rb:bg-white rb:rounded-t-2xl
          rb:transform rb:transition-transform rb:duration-300
          ${open ? "rb:translate-y-0" : "rb:translate-y-full"}
        `}
      >
        {children}
      </div>
    </>
  );
};

export default BottomDrawer;
