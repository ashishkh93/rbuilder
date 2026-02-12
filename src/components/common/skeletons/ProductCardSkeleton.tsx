import { cn } from "@/lib/utils";

const ProductCardSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="rb:grid rb:grid-cols-1 rb:sm:grid-cols-2 rb:md:grid-cols-3 rb:lg:grid-cols-4 rb:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SingleCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const SingleCardSkeleton = () => {
  return (
    <div className="rb:rounded-2xl rb:bg-white rb:overflow-hidden rb:shadow-xl rb:p-2 rb:w-full!">
      {/* Image skeleton */}
      <div className="rb:relative rb:aspect-4/5 rb:rounded-2xl rb:overflow-hidden">
        <CrystalSkeleton className="rb:absolute rb:inset-0 rb:rounded-2xl" />
      </div>

      {/* Content */}
      <div className="rb:pt-3 rb:px-1 rb:space-y-2">
        {/* Title (2 lines) */}
        <CrystalSkeleton className="rb:h-4 rb:w-full rb:rounded-md" />
        <CrystalSkeleton className="rb:h-4 rb:w-3/4 rb:rounded-md" />

        {/* Price */}
        <CrystalSkeleton className="rb:h-3 rb:w-20 rb:rounded-md" />

        {/* Metal dots */}
        <div className="rb:flex rb:gap-2 rb:mt-2">
          <CrystalSkeleton className="rb:w-4 rb:h-4 rb:rounded-full" />
          <CrystalSkeleton className="rb:w-4 rb:h-4 rb:rounded-full" />
          <CrystalSkeleton className="rb:w-4 rb:h-4 rb:rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const CrystalSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "rb:relative rb:overflow-hidden rb:rounded-xl",
        "rb:bg-linear-to-br rb:from-[#f1f5f9] rb:via-[#e6edf3] rb:to-[#f8fafc]",
        // "bg-linear-to-br from-[#f1f5f9] via-[#e6edf3] to-[#f8fafc]",
        "rb:ring-1 rb:ring-black/5",
        className
      )}
    >
      {/* Shimmer layer */}
      <div
        className="rb:absolute rb:inset-0 rb:-translate-x-full rb:animate-[shimmer_1.6s_infinite] rb:bg-linear-to-r rb:from-transparent rb:via-white/60 rb:to-transparent "
      />
    </div>
  );
};

export default ProductCardSkeleton;
