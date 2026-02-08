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

export const useDiamonds = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectFiltersForQuery, shallowEqual);

  /** Refs for debounce & cancel */
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelTokenRef = useRef<ReturnType<
    typeof axios.CancelToken.source
  > | null>(null);

  /** Build GraphQL query (pure & memoized) */
  const buildDiamondQuery = useCallback(
    ({
      pageNumber,
      shapes,
      filters,
      tab,
      colorField,
      colorValue,
      colorFlag,
      minAppliedPrice,
      maxAppliedPrice,
      graphqlSortField,
      currencyCode,
    }: {
      pageNumber: number;
      shapes?: string;
      filters: any;
      tab: string;
      colorField: string;
      colorValue: string;
      colorFlag: string;
      minAppliedPrice: number;
      maxAppliedPrice: number;
      graphqlSortField: string;
      currencyCode: string;
    }) => {
      const args: string[] = [];

      if (pageNumber) args.push(`page:"${pageNumber}"`);
      if (shapes) args.push(`shapes:"${shapes}"`);
      if (colorValue) args.push(`${colorField}:"${colorValue}"`);
      if (colorFlag) args.push(`colorflag:"${colorFlag}"`);

      if (filters?.carat?.length === 2) {
        args.push(`carat:"${filters.carat[0]},${filters.carat[1]}"`);
      }

      if (filters?.clarity) args.push(`clarity:"${filters.clarity}"`);
      if (filters?.symmetry) args.push(`symmetry:"${filters.symmetry}"`);
      if (filters?.polish) args.push(`polish:"${filters.polish}"`);

      if (filters?.table?.length === 2) {
        args.push(
          `table:"${filters.table[0].toFixed(2)},${filters.table[1].toFixed(2)}"`
        );
      }

      if (filters?.depth?.length === 2) {
        args.push(
          `depthPer:"${filters.depth[0].toFixed(2)},${filters.depth[1].toFixed(2)}"`
        );
      }

      if (shapes?.includes("round") && filters?.cut) {
        args.push(`cut:"${filters.cut}"`);
      }

      if (filters?.fluorescence) {
        args.push(`fluoroscence:"${filters.fluorescence}"`);
      }

      if (filters?.lab) args.push(`lab:"${filters.lab}"`);
      if (tab) args.push(`diamondType:"${tab}"`);
      if (filters?.sort_order) args.push(`sortBy:"${filters.sort_order}"`);
      if (graphqlSortField) args.push(`orderBy:"${graphqlSortField}"`);

      args.push(`price:"${minAppliedPrice},${maxAppliedPrice}"`);
      args.push(`currencyFlag:"${currencyCode}"`);

      return `
      {
        diamondData(
          ${args.join("\n")}
        ) {
          dataCount
          diamondsReturned
          pageNo
          diamond {
            diamondId
            shape
            caratWeight
            color
            clarity
            cut
            symmetry
            polish
            deptPerc
            tablePerc
            length
            width
            depth
            ratio
            girdleMin
            girdleMax
            culet
            fancyColor
            flourIntensity
            certificateFile
            lab
            certificateNumber
            stockNumber
            diamondImage
            diamondVideo
            diamondType
            currencyCode
            currencySymbol
          }
        }
      }
    `;
    },
    []
  );

  /** Main loader (stable, reusable) */
  const loadDiamonds = useCallback(
    async ({
      loadMore = false,
      cursor,
      isToSelling = false,
    }: {
      loadMore?: boolean;
      cursor?: string | null;
      isToSelling?: boolean;
    }) => {
      const query = buildDiamondQuery({
        pageNumber: 1,
        shapes: filters.shape || "",
        filters: filters,
        tab: "lab",
        colorField: "color",
        colorValue: "",
        colorFlag: "",
        minAppliedPrice: 0,
        maxAppliedPrice: 1000000,
        graphqlSortField: "",
        currencyCode: "USD",
      });

      const res = await axios.post(
        GLOBAL_CONFIG.productFetchApi,
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

      console.log(res, "res==");
    },
    [dispatch, filters, buildDiamondQuery]
  );

  return useMemo(
    () => ({
      loadDiamonds,
    }),
    [loadDiamonds]
  );
};
