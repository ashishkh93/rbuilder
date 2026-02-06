import { cn } from "@/lib/utils";

const ProductCardSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SingleCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const SingleCardSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden shadow-xl p-2 w-full!">
      {/* Image skeleton */}
      <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
        <CrystalSkeleton className="absolute inset-0 rounded-2xl" />
      </div>

      {/* Content */}
      <div className="pt-3 px-1 space-y-2">
        {/* Title (2 lines) */}
        <CrystalSkeleton className="h-4 w-full rounded-md" />
        <CrystalSkeleton className="h-4 w-3/4 rounded-md" />

        {/* Price */}
        <CrystalSkeleton className="h-3 w-20 rounded-md" />

        {/* Metal dots */}
        <div className="flex gap-2 mt-2">
          <CrystalSkeleton className="w-4 h-4 rounded-full" />
          <CrystalSkeleton className="w-4 h-4 rounded-full" />
          <CrystalSkeleton className="w-4 h-4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const CrystalSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        "bg-linear-to-br from-[#f1f5f9] via-[#e6edf3] to-[#f8fafc]",
        // "bg-linear-to-br from-[#f1f5f9] via-[#e6edf3] to-[#f8fafc]",
        "ring-1 ring-black/5",
        className
      )}
    >
      {/* Shimmer layer */}
      <div
        className="
          absolute inset-0
          -translate-x-full
          animate-[shimmer_1.6s_infinite]
          bg-linear-to-r
          from-transparent
          via-white/60
          to-transparent
        "
      />
    </div>
  );
};

export default ProductCardSkeleton;
