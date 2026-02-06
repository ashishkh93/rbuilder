import { Skeleton } from "@/components/ui/skeleton";

const SingleStoneCardSkeleton = () => {
  return (
    <div className="relative rounded-xl border border-gray-200 overflow-hidden bg-white">
      {/* Image */}
      <div className="relative aspect-square bg-gray-100">
        <Skeleton className="absolute inset-4 rounded-md" />

        {/* Wishlist icon */}
        <div className="absolute top-3 right-3">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>
          <Skeleton className="h-4 w-14" />
        </div>

        {/* Specs */}
        <div className="grid grid-cols-4 border-t pt-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-1 text-center px-1">
              <Skeleton className="h-4 w-10 mx-auto" />
              <Skeleton className="h-3 w-12 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StoneCardSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SingleStoneCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default StoneCardSkeleton;
