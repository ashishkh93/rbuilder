const CommonCTA = ({
  label,
  className = "rb:bg-black rb:text-white",
  ...props
}: CommonCTAProps) => {
  return (
    <button
      className={`rb:w-full rb:rounded-full rb:py-3 rb:cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default CommonCTA;
