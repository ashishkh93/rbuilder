// components/ring/StickyCTA.tsx
const StickyCTA = ({ className, label, ...buttonProps }: StickyCTAProps) => {
  return (
    <div className={`rounded-full ${className}`}>
      <button
        className="w-full py-4 font-medium text-sm cursor-pointer!"
        {...buttonProps}
      >
        {label}
      </button>
    </div>
  );
};

export default StickyCTA;
