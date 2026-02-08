// src/hooks/useEngagementSetting.ts
import { useCallback, useMemo, useRef } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectDiamondFilter } from "@/store/filters/filters.selectors";
import { GLOBAL_CONFIG } from "@/config/global-config";
import { shallowEqual } from "react-redux";
import { selectDiamondPageInfo } from "@/store/diamonds/diamonds.selectors";
import {
  receiveDiamonds,
  requestDiamonds,
  setNoDataFound,
} from "@/store/diamonds/diamonds.slice";
import { clarityMarks, colorMarks, cutMarks } from "@/utils/constants";

const DEBOUNCE_DELAY = 300;

export const useDiamonds = () => {
  const dispatch = useAppDispatch();

  const diamondFilter = useAppSelector(selectDiamondFilter, shallowEqual);
  const diamondPageInfo = useAppSelector(selectDiamondPageInfo, shallowEqual);

  /** Refs for debounce & cancel */
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelTokenRef = useRef<ReturnType<
    typeof axios.CancelToken.source
  > | null>(null);

  const getColorField = useCallback(() => {
    const currentColorRange = diamondFilter?.color as [number, number];
    const startIndex = colorMarks.indexOf(currentColorRange[0]?.toString());
    const endIndex = colorMarks.indexOf(currentColorRange[1]?.toString());
    return colorMarks.slice(startIndex, endIndex + 1).join(",");
  }, [diamondFilter?.color]);

  const getClarityField = useCallback(() => {
    const currentColorRange = diamondFilter?.clarity as [number, number];
    const startIndex = clarityMarks.indexOf(currentColorRange[0]?.toString());
    const endIndex = clarityMarks.indexOf(currentColorRange[1]?.toString());
    return clarityMarks.slice(startIndex, endIndex + 1).join(",");
  }, [diamondFilter?.clarity]);

  const getCutField = useCallback(() => {
    const currentcutRange = diamondFilter?.cut as [number, number];
    const startIndex = cutMarks.indexOf(currentcutRange[0]?.toString());
    const endIndex = cutMarks.indexOf(currentcutRange[1]?.toString());
    return cutMarks.slice(startIndex, endIndex + 1).join(",");
  }, [diamondFilter?.cut]);

  /**GraphQL query (pure & memoized) */
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

      if (!!getClarityField()) args.push(`clarity:"${getClarityField()}"`);
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
        args.push(`cut:"${getCutField()}"`);
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
  const loadDiamonds = useCallback(async () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        dispatch(requestDiamonds());
        const query = buildDiamondListQuery({
          pageNumber: diamondPageInfo.page,
          shapes: (diamondFilter.shape as string) || "",
          filters: diamondFilter,
          tab: diamondFilter.type || "",
          colorField: "color",
          colorValue: (getColorField() as string) || "",
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
            headers: {
              "Content-Type": "application/json",
              "X-Shopify-Storefront-Access-Token":
                GLOBAL_CONFIG.storefrontApiAccessToken,
            },
            cancelToken: cancelTokenRef.current?.token,
          }
        );

        console.log(res?.data, res?.status, "actualRes=");
        if (res?.status === 200) {
          const actualRes = res?.data?.data;

          dispatch(
            receiveDiamonds({
              diamonds: actualRes?.diamondData?.diamond,
              pageInfo: {
                dataCount: actualRes?.diamondData?.dataCount,
                diamondsReturned: actualRes?.diamondData?.diamondsReturned,
                page: Number(
                  actualRes?.diamondData?.pageNo || diamondPageInfo.page
                ),
              },
              dataCount: actualRes?.diamondData?.dataCount,
            })
          );
        } else {
          dispatch(setNoDataFound());
        }
      } catch (err) {
        dispatch(setNoDataFound());
        if (!axios.isCancel(err)) {
          console.error("Engagement fetch failed", err);
        }
      }
    }, DEBOUNCE_DELAY);
  }, [dispatch, diamondFilter, diamondPageInfo, buildDiamondListQuery]);

  return useMemo(
    () => ({
      loadDiamonds,
    }),
    [loadDiamonds]
  );
};
