import { VirtuosoGrid } from "react-virtuoso";
import { forwardRef } from "react";

/**
 * IMPORTANT:
 * These components MUST be outside the React component
 * or VirtuosoGrid will remount on every render.
 */
export const virtuosoGridComponents = {
  List: forwardRef<HTMLDivElement, any>(
    ({ style, children, ...props }, ref) => (
      <div ref={ref} {...props} style={style} className="flex flex-wrap w-full">
        {children}
      </div>
    )
  ),

  Item: ({ children, ...props }: any) => <div {...props}>{children}</div>,
};

type VirtualizedInfiniteListProps<T> = {
  data: T[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  // children: (item: T, index: number) => React.ReactNode;
  initialLoader?: React.ReactNode;
  footerLoader?: React.ReactNode;
  itemContent?: (index: number, item: T) => React.ReactNode;
};

const VirtualizedInfiniteGrid = <T,>({
  data,
  isLoading,
  hasMore,
  loadMore,
  children,
  initialLoader,
  footerLoader,
  itemContent,
}: VirtualizedInfiniteListProps<T>) => {
  if (isLoading && data.length === 0) {
    return <>{initialLoader}</>;
  }

  return (
    <VirtuosoGrid
      data={data}
    //   useWindowScroll
      endReached={() => {
        if (!hasMore || isLoading) return;
        loadMore();
      }}
      itemContent={itemContent}
      components={{
        ...virtuosoGridComponents,
        Footer: () =>
          hasMore && isLoading ? (
            <div className="w-full py-6 flex justify-center">
              {footerLoader}
            </div>
          ) : null,
      }}
    />
  );
};

export default VirtualizedInfiniteGrid;
