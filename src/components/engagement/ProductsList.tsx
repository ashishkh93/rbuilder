import { MEDIA_QUERIES } from "@/lib/utils";
import ProductCard from "./ProductCard";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useAppSelector } from "@/store";
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
import { ROUTES } from "@/config/global-config";

const ProductsList = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.xSmall);
  const products = useAppSelector(selectProductCards, shallowEqual);
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
    <section className="rb:w-full">
      <VirtualizedInfiniteList
        data={products}
        isLoading={isLoading}
        hasMore={hasMore}
        loadMore={loadMore}
        initialLoader={<ProductCardSkeleton count={8} />}
        footerLoader={<ProductCardSkeleton count={1} />}
        listClassName={`rb:grid rb:gap-x-4! rb:gap-y-4! ${
          isMobile
            ? "rb:grid-cols-1"
            : "rb:grid-cols-2 rb:sm:grid-cols-3 rb:xl:grid-cols-4"
        }`}
        itemContent={(index) => (
          // @ts-ignore
          <ProductCard
            key={index}
            {...products[index]}
            onClick={(id) => {
              const product = products.find((p) => p.id === id);
              if (!product) return;

              window.location.href = ROUTES.settingDetail(id);
              // @ts-ignore
              // dispatch(
              //   setStepData({
              //     step: 1,
              //     data: { meta: product.title, price: Number(product.price) },
              //   })
              // );
            }}
          />
        )}
      />
    </section>
  );
};

export default ProductsList;
