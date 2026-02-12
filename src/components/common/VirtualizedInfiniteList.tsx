import { VirtuosoGrid } from "react-virtuoso";
import { forwardRef } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

/**
 * IMPORTANT:
 * These components MUST be outside the React component
 * or VirtuosoGrid will remount on every render.
 */
export const virtuosoGridComponents = {
  List: forwardRef<HTMLDivElement, any>(
    ({ style, children, context, ...props }, ref) => (
      <div
        ref={ref}
        {...props}
        style={style}
        className={context?.listClassName || "rb:flex rb:flex-wrap rb:w-full"}
      >
        {children}
      </div>
    )
  ),

  Item: ({ children, ...props }: any) => (
    <div {...props} className="rb:w-full rb:h-full">
      {children}
    </div>
  ),
};

const VirtualizedInfiniteGrid = <T,>({
  data,
  isLoading,
  hasMore,
  loadMore,
  initialLoader,
  footerLoader,
  itemContent,
  listClassName,
  overscan = 500,
}: VirtualizedInfiniteListProps<T>) => {
  if (isLoading && data.length === 0) {
    return <>{initialLoader}</>;
  }

  return (
    <>
      <VirtuosoGrid
        data={data}
        useWindowScroll
        overscan={overscan}
        endReached={() => {
          if (!hasMore || isLoading) return;
          // loadMore();
        }}
        itemContent={itemContent}
        context={{ listClassName }}
        components={virtuosoGridComponents}
      />
      {hasMore && (
        <div className="rb:flex rb:justify-center rb:mt-6">
          <Button
            className={`rb:w-full rb:md:w-30! ${isLoading ? "btn-disabled" : "rb:cursor-pointer rb:hover:bg-primary rb:hover:scale-105 rb:transition-all rb:duration-300 rb:ease-in-out"}`}
            onClick={loadMore}
          >
            <span>Load More</span>
            {isLoading && (
              <div className="rb:flex rb:items-center rb:justify-center">
                <Spinner />
              </div>
            )}
          </Button>
        </div>
      )}
    </>
  );
};

export default VirtualizedInfiniteGrid;
