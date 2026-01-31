import { useEffect, useRef, useState } from "react";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
];

export default function AnimatedSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-72">
      {/* Trigger */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex justify-between items-center rounded-lg border border-gray-300 bg-white! px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-black"
      >
        <span>{selected.label}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute z-10 mt-2 w-full rounded-lg border bg-white! shadow-lg overflow-hidden transition-all duration-300 origin-top ${
          open
            ? "scale-y-100 opacity-100"
            : "scale-y-95 opacity-0 pointer-events-none"
        }`}
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => {
              setSelected(opt);
              setOpen(false);
            }}
            className={`bg-white! w-full px-4 py-3 text-left hover:bg-gray-100! transition ${
              selected.value === opt.value ? "bg-gray-50! font-medium" : ""
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
