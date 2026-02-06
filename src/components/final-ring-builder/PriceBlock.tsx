const PriceBlock = ({ totalPrice, originalPrice }: PriceBlockProps) => {
  return (
    <div className="text-center">
      <p className="text-md text-gray-400">Total Price</p>

      <p className="mt-1 text-3xl font-semibold text-black">
        ${totalPrice.toLocaleString()}
      </p>

      {originalPrice && (
        <p className="mt-1 text-xl text-gray-400 line-through">
          ${originalPrice.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default PriceBlock;
