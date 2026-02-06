const CommonCTA = ({
  label,
  className = "bg-black text-white",
  ...props
}: CommonCTAProps) => {
  return (
    <button
      className={`w-full rounded-full py-3 cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default CommonCTA;
