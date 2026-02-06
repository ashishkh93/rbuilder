import { VirtuosoGrid } from "react-virtuoso";
import { forwardRef } from "react";

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
        className={context?.listClassName || "flex flex-wrap w-full"}
      >
        {children}
      </div>
    )
  ),

  Item: ({ children, ...props }: any) => (
    <div {...props} className="w-full h-full">
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
    <VirtuosoGrid
      data={data}
      useWindowScroll
      overscan={overscan}
      endReached={() => {
        if (!hasMore || isLoading) return;
        loadMore();
      }}
      itemContent={itemContent}
      context={{ listClassName }}
      components={{
        ...virtuosoGridComponents,
        Footer: () =>
          hasMore && isLoading ? (
            <div className="w-full">{footerLoader}</div>
          ) : null,
      }}
    />
  );
};

export default VirtualizedInfiniteGrid;
