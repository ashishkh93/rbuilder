// src/hooks/useEngagementSetting.ts
import { useCallback, useMemo, useRef } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectFiltersForQuery } from "@/store/filters/filters.selectors";
import {
  requestProducts,
  receiveProducts,
} from "@/store/products/products.slice";
import { GLOBAL_CONFIG } from "@/config/global-config";
import { RING_PRODUCTS_GRAPHQL_RESP } from "@/mock/engagement-ring";
import { getFilteredProducts } from "./hook-helper";
import { shallowEqual } from "react-redux";

const DEBOUNCE_DELAY = 400;

export const useEngagementSetting = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectFiltersForQuery, shallowEqual);

  /** Refs for debounce & cancel */
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelTokenRef = useRef<ReturnType<
    typeof axios.CancelToken.source
  > | null>(null);

  /** Build GraphQL query (pure & memoized) */
  const buildQuery = useCallback(
    ({
      itemsPerPage,
      cursor,
      sortKey,
      reverse,
      tags,
    }: {
      itemsPerPage: number;
      cursor?: string | null;
      sortKey: string;
      reverse: boolean;
      tags?: string[];
    }) => {
      const conditions: string[] = [];

      if (tags?.length) {
        conditions.push(`(${tags.map((t) => `tag:'${t}'`).join(" OR ")})`);
      }

      const queryCondition = conditions.length
        ? `query: "${conditions.join(" AND ")}"`
        : "";

      const pagination = cursor ? `after: "${cursor}"` : "";

      return `
        {
          products(
            first: ${itemsPerPage},
            sortKey: ${sortKey},
            reverse: ${reverse},
            ${queryCondition}
            ${pagination}
          ) {
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            edges {
              node {
                id
                handle
                title
                tags
                priceRange {
                  minVariantPrice { amount currencyCode }
                  maxVariantPrice { amount currencyCode }
                }
                images(first: 10) {
                  edges { node { altText id originalSrc transformedSrc url width height } }
                }
                variants(first: 100) {
                  edges {
                    node {
                      id
                      title
                      sku
                      priceV2 { amount currencyCode }
                      selectedOptions { name value }
                      image { src }
                    }
                  }
                }
                metafields(identifiers: [
                    { namespace: "custom", key: "sales_count" }
                ]) {
                    key 
                    namespace
                    type
                    value
                }
              }
            }
          }
        }
      `;
    },
    []
  );

  /** Main loader (stable, reusable) */
  const loadEngagementSettings = useCallback(
    async ({
      loadMore = false,
      cursor,
      isToSelling = false,
    }: {
      loadMore?: boolean;
      cursor?: string | null;
      isToSelling?: boolean;
    }) => {
      // cancel previous request
      cancelTokenRef.current?.cancel();
      cancelTokenRef.current = axios.CancelToken.source();

      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(async () => {
        try {
          dispatch(requestProducts());

          let res: { data: RingProductsResponse };
          if (GLOBAL_CONFIG.shouldAPICall) {
            const query = buildQuery({
              itemsPerPage: 12,
              cursor: loadMore ? cursor : null,
              sortKey: filters.sortKey,
              reverse: filters.reverse,
              tags: [filters.style ?? ""],
            });

            res = await axios.post(
              `https://${GLOBAL_CONFIG.storeDomain}/api/${GLOBAL_CONFIG.apiVersion}/graphql.json`,
              { query },
              {
                headers: {
                  "Content-Type": "application/json",
                  "X-Shopify-Storefront-Access-Token":
                    GLOBAL_CONFIG.storefrontApiAccessToken,
                },
                cancelToken: cancelTokenRef.current?.token,
              }
            );
          } else {
            res = { data: RING_PRODUCTS_GRAPHQL_RESP };
          }

          const data = res?.data;

          const allProducts =
            data?.data?.products?.edges?.map((edge) => edge.node) || [];

          const filteredData = isToSelling
            ? allProducts
            : getFilteredProducts(data, {
                metal: filters.metal,
                shape: filters.shape,
              });

          const products =
            filteredData?.map((node) => {
              const v =
                node?.variants?.edges
                  ?.map((edge) => edge.node)
                  ?.find((variant) => variant.id === node.selectedVariantId) ||
                node?.variants?.edges?.[0]?.node;

              if (!v) return null;

              return {
                handle: node.handle,
                name: node.title,
                tags: node.tags,
                currency: v?.price?.currencyCode || GLOBAL_CONFIG.currencyCode,
                price: v?.price?.amount,
                sku: v?.sku ?? "",
                image: v?.image?.url || node.images.edges[0]?.node?.url,
                hoverImage: node.images.edges[1]?.node?.url,
              };
            }) ?? [];

          dispatch(
            receiveProducts({
              // @ts-ignore
              items: products,
              pageInfo: res?.data?.data?.products?.pageInfo,
              diamondCount: products.length,
              append: loadMore,
            })
          );
        } catch (err) {
          if (!axios.isCancel(err)) {
            console.error("Engagement fetch failed", err);
          }
        }
      }, DEBOUNCE_DELAY);
    },
    [dispatch, filters, buildQuery]
  );

  return useMemo(
    () => ({
      loadEngagementSettings,
    }),
    [loadEngagementSettings]
  );
};
