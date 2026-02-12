const PriceBlock = ({ totalPrice, originalPrice }: PriceBlockProps) => {
  return (
    <div className="rb:text-center">
      <p className="rb:text-md rb:text-gray-400">Total Price</p>

      <p className="rb:mt-1 rb:text-3xl rb:font-semibold rb:text-black">
        ${totalPrice.toLocaleString()}
      </p>

      {originalPrice && (
        <p className="rb:mt-1 rb:text-xl rb:text-gray-400 rb:line-through">
          ${originalPrice.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default PriceBlock;
