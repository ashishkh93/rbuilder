// components/ring/StickyCTA.tsx
const StickyCTA = ({ className, label, ...buttonProps }: StickyCTAProps) => {
  return (
    <div className={`rb:rounded-full ${className}`}>
      <button
        className="rb:w-full rb:py-4 rb:font-medium rb:text-sm rb:cursor-pointer!"
        {...buttonProps}
      >
        {label}
      </button>
    </div>
  );
};

export default StickyCTA;
