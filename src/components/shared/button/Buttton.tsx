const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-2.5 pl-3 pr-2 py-2.5 md:py-1.75 rounded-sm border border-gray-300 transition-colors duration-300 text-black cursor-pointer text-sm leading-none bg-white! hover:bg-customGray-75! hover:outline-none! z-10! ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
