// components/ring/ProductHeader.tsx
import { Hand, Mail } from "lucide-react";

const ProductHeader = () => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-semibold">The Kamellie</h1>

        {/* <div className="flex gap-4 text-sm text-gray-600">
          <button className="flex items-center gap-1">
            <Hand size={16} /> Try-On
          </button>
          <button className="flex items-center gap-1">
            <Mail size={16} /> Drop a Hint
          </button>
        </div> */}
      </div>

      <p className="text-xl font-medium">$1,700</p>

      <p className="text-xs text-gray-600 leading-relaxed py-2!">
        Discover The Kamellie, a Keyzar bestseller that epitomizes timeless
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
