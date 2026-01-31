import { MEDIA_QUERIES } from "@/lib/utils";
import ProductCard from "./ProductCard";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectHasMoreProducts,
  selectPageInfo,
  selectProductCards,
  selectProductsLoading,
} from "@/store/products/products.selectors";
import ProductCardSkeleton, {
  SingleCardSkeleton,
} from "../common/skeletons/ProductCardSkeleton";
import VirtualizedInfiniteList from "../common/VirtualizedInfiniteList";
import { useEngagementSetting } from "@/hooks/useEngagementSetting";
import { shallowEqual } from "react-redux";
import { useCallback } from "react";

const ProductsList = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.xSmall);
  const products = useAppSelector(selectProductCards);
  const isLoading = useAppSelector(selectProductsLoading);
  const hasMore = useAppSelector(selectHasMoreProducts);
  const pageInfo = useAppSelector(selectPageInfo, shallowEqual);

  const { loadEngagementSettings } = useEngagementSetting();

  const loadMore = useCallback(() => {
    if (!pageInfo?.endCursor) return;

    loadEngagementSettings({
      loadMore: true,
      cursor: pageInfo.endCursor,
    });
  }, [loadEngagementSettings, pageInfo?.endCursor]);

  return (
    <section className="w-full">
      <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <VirtualizedInfiniteList
          data={products}
          isLoading={isLoading}
          hasMore={hasMore}
          loadMore={loadMore}
          initialLoader={<SingleCardSkeleton />}
          footerLoader={<ProductCardSkeleton count={4} />}
          itemContent={(index) => (
            // @ts-ignore
            <ProductCard key={index} {...products[index]} />
          )}
        />
      </div>
    </section>
  );
};

export default ProductsList;
