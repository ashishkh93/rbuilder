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
import ProductCardSkeleton from "../common/skeletons/ProductCardSkeleton";
import VirtualizedInfiniteList from "../common/VirtualizedInfiniteList";
import { useEngagementSetting } from "@/hooks/useEngagementSetting";
import { shallowEqual } from "react-redux";
import { useCallback } from "react";
import { setStepData } from "@/store/builder/builder.slice";

const ProductsList = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.xSmall);
  const products = useAppSelector(selectProductCards);
  const isLoading = useAppSelector(selectProductsLoading);
  const hasMore = useAppSelector(selectHasMoreProducts);
  const pageInfo = useAppSelector(selectPageInfo, shallowEqual);

  const dispatch = useAppDispatch();

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
      <VirtualizedInfiniteList
        data={products}
        isLoading={isLoading}
        hasMore={hasMore}
        loadMore={loadMore}
        initialLoader={<ProductCardSkeleton count={8} />}
        footerLoader={<ProductCardSkeleton count={1} />}
        listClassName={`grid gap-x-4! gap-y-4! ${
          isMobile ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
        }`}
        itemContent={(index) => (
          // @ts-ignore
          <ProductCard
            key={index}
            {...products[index]}
            onClick={(id) => {
              const product = products.find((p) => p.id === id);
              if (!product) return;
              // @ts-ignore
              dispatch(
                setStepData({
                  step: 1,
                  data: { meta: product.title, price: Number(product.price) },
                })
              );
            }}
          />
        )}
      />
    </section>
  );
};

export default ProductsList;
