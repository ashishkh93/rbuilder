const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`rb:flex rb:items-center rb:justify-center rb:gap-2.5 rb:pl-3 rb:pr-2 rb:py-2.5 rb:md:py-1.75 rb:rounded-sm rb:border rb:border-gray-300 rb:transition-colors rb:duration-300 rb:text-black rb:cursor-pointer rb:text-sm rb:leading-none rb:bg-white rb:hover:bg-customGray-75! rb:hover:outline-none! rb:z-10! ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
