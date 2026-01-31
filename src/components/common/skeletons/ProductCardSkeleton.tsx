import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
        <Skeleton className="absolute inset-0 rounded-2xl" />
      </div>

      {/* Content */}
      <div className="pt-3 px-1 space-y-2">
        {/* Title (2 lines) */}
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-3/4 rounded-md" />

        {/* Price */}
        <Skeleton className="h-3 w-20 rounded-md" />

        {/* Metal dots */}
        <div className="flex gap-2 mt-2">
          <Skeleton className="w-4 h-4 rounded-full" />
          <Skeleton className="w-4 h-4 rounded-full" />
          <Skeleton className="w-4 h-4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
