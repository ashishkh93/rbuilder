import { CrystalSkeleton } from "./ProductCardSkeleton";

const StoneDetailSkeleton = () => {
  return (
    <div className="rb:grid rb:grid-cols-1 rb:lg:grid-cols-2 rb:gap-10 rb:mt-8">
      {/* LEFT: Image Gallery */}
      <div className="rb:grid rb:grid-cols-1 rb:sm:grid-cols-2 rb:gap-4">
        {/* Main image */}
        <CrystalSkeleton className="rb:h-[420px] rb:rounded-xl" />

        {/* Side image */}
        <CrystalSkeleton className="rb:h-[420px] rb:rounded-xl" />
      </div>

      {/* RIGHT: Details */}
      <div className="rb:flex rb:flex-col rb:gap-6">
        {/* Title */}
        <CrystalSkeleton className="rb:h-7 rb:w-3/4" />

        {/* Price */}
        <CrystalSkeleton className="rb:h-6 rb:w-32" />

        {/* Quick Specs Skeleton (matches StoneQuickSpecs) */}
        <div className="rb:rounded-sm rb:border rb:border-gray-200">
          {/* Top Row */}
          <div className="rb:grid rb:grid-cols-3 rb:divide-x rb:divide-gray-300">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rb:flex rb:flex-col rb:items-center rb:justify-center rb:py-3 rb:gap-2"
              >
                <CrystalSkeleton className="rb:h-6 rb:w-10" />
                <CrystalSkeleton className="rb:h-3 rb:w-14" />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="rb:h-px rb:bg-gray-300" />

          {/* Bottom Row */}
          <div className="rb:grid rb:grid-cols-2 rb:divide-x rb:divide-gray-300">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="rb:flex rb:flex-col rb:items-center rb:justify-center rb:py-3 rb:gap-2"
              >
                <CrystalSkeleton className="rb:h-4 rb:w-20" />
                <CrystalSkeleton className="rb:h-3 rb:w-16" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <CrystalSkeleton className="rb:h-12 rb:w-full rb:rounded-full" />
        <CrystalSkeleton className="rb:h-12 rb:w-full rb:rounded-full" />

        {/* Trust badges */}
        <div className="rb:grid rb:grid-cols-2 rb:gap-3 rb:mt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <CrystalSkeleton key={i} className="rb:h-4 rb:w-40" />
          ))}
        </div>

        {/* Info card */}
        <div className="rb:bg-white rb:border rb:rounded-xl rb:p-5 rb:mt-4 rb:flex rb:flex-col rb:gap-4">
          <CrystalSkeleton className="rb:h-6 rb:w-48" />
          {Array.from({ length: 4 }).map((_, i) => (
            <CrystalSkeleton key={i} className="rb:h-4 rb:w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoneDetailSkeleton;
