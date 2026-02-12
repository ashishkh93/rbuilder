const ProductHeader = () => {
  return (
    <div className="rb:space-y-2">
      <div className="rb:flex rb:justify-between rb:items-start">
        <div className="rb:text-2xl rb:font-semibold">The Kamellie</div>

        {/* <div className="rb:flex rb:gap-4 rb:text-sm rb:text-gray-600">
          <button className="rb:flex rb:items-center rb:gap-1">
            <Hand size={16} /> Try-On
          </button>
          <button className="rb:flex rb:items-center rb:gap-1">
            <Mail size={16} /> Drop a Hint
          </button>
        </div> */}
      </div>

      <p className="rb:text-xl rb:font-medium">$1,700</p>

      <p className="rb:text-xs rb:text-gray-600 rb:leading-relaxed rb:py-2!">
        Discover The Kamellie, a RBuilder bestseller that epitomizes timeless
        elegance. This exquisite solitaire engagement ring features a sleek and
        slender band that offers a modern touch while ensuring the center stone
        remains the star. What sets The Kamellie apart is its hidden halo,
        adding a secret sparkle that enhances the ring's brilliance without
        overpowering its classic design. Perfect for those who appreciate the
        subtle sophistication, The Kamellie is a beautiful testament to your
        enduring love.
      </p>
    </div>
  );
};

export default ProductHeader;
