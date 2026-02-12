import { Skeleton } from "@/components/ui/skeleton";
import { CrystalSkeleton } from "./ProductCardSkeleton";

const SingleStoneCardSkeleton = () => {
  return (
    <div className="rb:relative rb:rounded-xl rb:border rb:border-gray-200 rb:overflow-hidden rb:bg-white">
      {/* Image */}
      <div className="rb:relative rb:aspect-square rb:bg-linear-to-br rb:from-[#f1f5f9] rb:via-[#e6edf3] rb:to-[#f8fafc]">
        <CrystalSkeleton className="rb:absolute rb:inset-4 rb:rounded-md" />

        {/* Wishlist icon */}
        <div className="rb:absolute rb:top-3 rb:right-3">
          <CrystalSkeleton className="rb:h-8 rb:w-8 rb:rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="rb:p-4 rb:space-y-3">
        {/* Header */}
        <div className="rb:flex rb:justify-between rb:items-start">
          <div className="rb:space-y-2">
            <CrystalSkeleton className="rb:h-4 rb:w-24" />
            <CrystalSkeleton className="rb:h-3 rb:w-32" />
          </div>
          <CrystalSkeleton className="rb:h-4 rb:w-14" />
        </div>

        {/* Specs */}
        <div className="rb:grid rb:grid-cols-4 rb:border-t rb:pt-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rb:space-y-1 rb:text-center rb:px-1">
              <CrystalSkeleton className="rb:h-4 rb:w-10 rb:mx-auto" />
              <CrystalSkeleton className="rb:h-3 rb:w-12 rb:mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StoneCardSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="rb:grid rb:grid-cols-1 rb:sm:grid-cols-2 rb:md:grid-cols-3 rb:lg:grid-cols-4 rb:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SingleStoneCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default StoneCardSkeleton;
