// src/hooks/useDiamonds.ts
import { useCallback, useMemo, useRef } from "react";
import axios from "axios";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectDiamondFilter } from "@/store/filters/filters.selectors";
import { selectDiamondPageInfo } from "@/store/diamonds/diamonds.selectors";
import {
  receiveDiamondDetail,
  receiveDiamonds,
  requestDiamondDetail,
  requestDiamonds,
  resetDiamondDetail,
  setNoDataFound,
} from "@/store/diamonds/diamonds.slice";
import { GLOBAL_CONFIG } from "@/config/global-config";
import {
  clarityMarks,
  colorMarks,
  cutMarks,
  qualityMarks,
} from "@/utils/constants";
import { graphQLCurrencyFields } from "@/utils/common.util";

const DEBOUNCE_DELAY = 300;

/* ------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------*/

const rangeToCsv = (
  range: [number, number] | undefined,
  marks: string[]
): string => {
  if (!range) return "";

  const [min, max] = range;
  const start = marks.indexOf(String(min));
  const end = marks.indexOf(String(max));

  if (start === -1 || end === -1 || start > end) return "";

  return marks.slice(start, end + 1).join(",");
};

/* ------------------------------------------------------------------
 * Hook
 * ------------------------------------------------------------------*/

export const useDiamonds = () => {
  const dispatch = useAppDispatch();

  const diamondFilter = useAppSelector(selectDiamondFilter, shallowEqual);
  const diamondPageInfo = useAppSelector(selectDiamondPageInfo, shallowEqual);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  /* ------------------------------------------------------------------
   * Derived filter fields (single source of truth)
   * ------------------------------------------------------------------*/

  const colorFieldValue = useMemo(
    () => rangeToCsv(diamondFilter?.color as [number, number], colorMarks),
    [diamondFilter?.color]
  );

  const clarityFieldValue = useMemo(
    () => rangeToCsv(diamondFilter?.clarity as [number, number], clarityMarks),
    [diamondFilter?.clarity]
  );

  const cutFieldValue = useMemo(
    () => rangeToCsv(diamondFilter?.cut as [number, number], cutMarks),
    [diamondFilter?.cut]
  );

  const polishFieldValue = useMemo(
    () => rangeToCsv(diamondFilter?.polish as [number, number], qualityMarks),
    [diamondFilter?.polish]
  );

  const fluorescenceFieldValue = useMemo(
    () =>
      rangeToCsv(diamondFilter?.fluorescence as [number, number], qualityMarks),
    [diamondFilter?.fluorescence]
  );

  const symmetryFieldValue = useMemo(
    () => rangeToCsv(diamondFilter?.symmetry as [number, number], qualityMarks),
    [diamondFilter?.symmetry]
  );

  /* ------------------------------------------------------------------
   * Query Builder (YOUR LOGIC – CLEANLY WIRED)
   * ------------------------------------------------------------------*/

  const buildDiamondListQuery = useCallback(
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

      if (clarityFieldValue) {
        args.push(`clarity:"${clarityFieldValue}"`);
      }

      if (symmetryFieldValue) {
        args.push(`symmetry:"${symmetryFieldValue}"`);
      }

      if (polishFieldValue) {
        args.push(`polish:"${polishFieldValue}"`);
      }

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

      if (shapes?.includes("round") && cutFieldValue) {
        args.push(`cut:"${cutFieldValue}"`);
      }

      if (fluorescenceFieldValue) {
        args.push(`fluoroscence:"${fluorescenceFieldValue}"`);
      }

      if (filters?.lab?.length) {
        args.push(`lab:"${filters?.lab?.join(",")}"`);
      }

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
            finalPriceEur
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
    [clarityFieldValue, cutFieldValue]
  );

  const buildDiamondDetailQuery = useCallback(
    (diamondType: string, diamondId: string) => {
      return `
    {
        diamondById(
        diamondType:"${diamondType}",
        diamondId:"${diamondId}"
      ) {
        diamond {
          diamondId
          shape
          caratWeight
          color
          clarity
          cut
          finalPriceEur
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
          ${graphQLCurrencyFields()}
          lab
          ${GLOBAL_CONFIG.priceKey}
          certificateNumber
          stockNumber
          diamondImage
          diamondVideo
          diamondType
          currencyCode
          currencySymbol
          sellerName
        }
      }
    }`;
    },
    []
  );

  const loadDiamondDetail = useCallback(
    (diamondType: string, diamondId: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (abortRef.current) abortRef.current.abort();
      dispatch(requestDiamondDetail());

      debounceRef.current = setTimeout(async () => {
        abortRef.current = new AbortController();

        try {
          const query = buildDiamondDetailQuery(diamondType, diamondId);

          const res = await axios.post(
            GLOBAL_CONFIG.productFetchApi,
            { query },
            {
              // headers: {
              //   "Content-Type": "application/json",
              //   "X-Shopify-Access-Token":
              //     GLOBAL_CONFIG.storefrontApiAccessToken,
              // },
              signal: abortRef.current.signal,
            }
          );

          dispatch(receiveDiamondDetail(res.data.data.diamondById.diamond));
        } catch (error) {
          dispatch(resetDiamondDetail());
          if (axios.isCancel(error)) {
            console.log("Request canceled");
            return;
          }
        }
      }, DEBOUNCE_DELAY);
    },
    []
  );

  /* ------------------------------------------------------------------
   * Loader
   * ------------------------------------------------------------------*/

  const loadDiamonds = useCallback(
    ({
      pageNumber,
      loadMore = false,
    }: {
      pageNumber: number;
      loadMore?: boolean;
    }) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (abortRef.current) abortRef.current.abort();

      debounceRef.current = setTimeout(async () => {
        dispatch(requestDiamonds());
        abortRef.current = new AbortController();

        try {
          const query = buildDiamondListQuery({
            pageNumber,
            shapes: (diamondFilter.shape as string) || "",
            filters: diamondFilter,
            tab: diamondFilter.type || "",
            colorField: "color",
            colorValue: colorFieldValue,
            colorFlag: "",
            minAppliedPrice: diamondFilter.price[0],
            maxAppliedPrice: diamondFilter.price[1],
            graphqlSortField: "",
            currencyCode: GLOBAL_CONFIG.currencyCode,
          });

          const res = await axios.post(
            GLOBAL_CONFIG.productFetchApi,
            { query },
            {
              // headers: {
              //   "Content-Type": "application/json",
              //   "X-Shopify-Storefront-Access-Token":
              //     GLOBAL_CONFIG.storefrontApiAccessToken,
              // },
              signal: abortRef.current.signal,
            }
          );

          const diamondData = res?.data?.data?.diamondData;

          if (!diamondData) {
            dispatch(setNoDataFound());
            return;
          }

          dispatch(
            receiveDiamonds({
              diamonds: diamondData.diamond,
              pageInfo: {
                dataCount: diamondData.dataCount,
                diamondsReturned: diamondData.diamondsReturned,
                page: Number(diamondData.pageNo || pageNumber),
              },
              dataCount: diamondData.dataCount,
              loadMore,
            })
          );
        } catch (err: any) {
          if (err?.name !== "CanceledError") {
            console.error("Diamond fetch failed", err);
            dispatch(setNoDataFound());
          }
        }
      }, DEBOUNCE_DELAY);
    },
    [dispatch, diamondFilter, colorFieldValue, buildDiamondListQuery]
  );

  return useMemo(
    () => ({
      loadDiamonds,
      loadDiamondDetail,
    }),
    [loadDiamonds, loadDiamondDetail]
  );
};
