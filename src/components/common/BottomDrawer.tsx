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
          fixed inset-0 z-40 bg-black/40
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl
          transform transition-transform duration-300
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
      >
        {children}
      </div>
    </>
  );
};

export default BottomDrawer;
