import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AppSelect } from "@/components/common";
import { BAND_WIDTHS, RING_SIZES } from "@/utils/constants";
import CommonCTA from "@/components/common/CommonCTA";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectBuilderCompletedSteps } from "@/store/builder/builder.selectors";
import { shallowEqual } from "react-redux";
import { getFinalPageUrl } from "@/utils/common.util";
import { ROUTES } from "@/config/global-config";
import { selectDiamondId } from "@/store/diamonds/diamonds.selectors";
import { selectSettingDetail } from "@/store/products/products.slice";
import { cn } from "@/lib/utils";
import { selectedSettingDetail } from "@/store/products/products.selectors";
import { selectSetting } from "@/store/builder/builder.slice";

const parseScriptJSON = <T,>(id: string): T | null => {
  const el = document.getElementById(id);
  if (!el?.textContent) return null;

  try {
    return JSON.parse(el.textContent) as T;
  } catch (err) {
    console.error(`Failed to parse JSON from script#${id}`, err);
    return null;
  }
};

const getVariantIdFromURL = (): number | null => {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant");
  return variant ? Number(variant) : null;
};

const ChooseSettingFeature = () => {
  const [ringSize, setRingSize] = useState<string | undefined>();
  const [bandWidth, setBandWidth] = useState<string | undefined>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [secondShapes, setSecondShapes] = useState<SecondShape[]>([]);
  const [isBand, setIsBand] = useState(false);
  const [errors, setErrors] = useState({ ringSize: false, bandWidth: false });

  const diamondId = useAppSelector(selectDiamondId);
  const selectedSetting = useAppSelector(selectedSettingDetail);

  const dispatch = useAppDispatch();

  const completedSteps = useAppSelector(
    selectBuilderCompletedSteps,
    shallowEqual
  );

  const ringSizeRef = useRef<HTMLSelectElement>(null);
  const bandWidthRef = useRef<HTMLSelectElement>(null);

  const isDiamondSelected = useMemo(() => {
    return completedSteps[2] === true;
  }, [completedSteps]);

  useEffect(() => {
    if (selectedSetting) {
      setRingSize((selectedSetting.ringSize as string) || "");
      setBandWidth((selectedSetting.bandWidth as string) || "");
    }
  }, [selectedSetting]);

  /* -------------------------------
   * Load Shopify data
   * ------------------------------- */
  useEffect(() => {
    const productData = parseScriptJSON<ShopifyProduct>("setting-data");
    const secondShapesData = parseScriptJSON<SecondShape[]>("second-shapes");

    if (productData) setProduct(productData);
    if (secondShapesData) setSecondShapes(secondShapesData);
  }, []);

  useEffect(() => {
    if (!product) return;

    // Normalize and check product type safely
    const type = product?.type?.toLowerCase().trim();

    if (type === "engagement rings" || type === "engagement ring") {
      setIsBand(false);
      const quantitySection = document.querySelector(
        ".product-form__quantity-submit"
      ) as HTMLElement;

      if (quantitySection) {
        quantitySection.style.display = "none";
      }
    } else if (type === "band" || type === "bands" || type.includes("band")) {
      setIsBand(true);
      // default fallback (in case product.type is undefined)
      const quantitySection = document.querySelector(
        ".product-form__quantity-submit"
      ) as HTMLElement;
      if (quantitySection) {
        quantitySection.style.display = "none";
      }
    } else {
      setIsBand(false);
    }
  }, [product]);

  /* -------------------------------
   * Derived variant data
   * ------------------------------- */
  const selectedVariant: Partial<EnrichedVariant> | null = useMemo(() => {
    if (!product || !product.variants.length) return null;

    const variantId = getVariantIdFromURL();

    const baseVariant =
      product.variants.find((v) => v.id === variantId) ?? product.variants[0];

    const validFirstShapes = Array.from(
      new Set(
        product.variants
          .map((v) => v.option2?.toLowerCase())
          .filter(Boolean) as string[]
      )
    );

    const validSecondShapes = Array.from(
      new Set(
        secondShapes
          .map((shape) => Object.values(shape)[0]?.toLowerCase())
          .filter(Boolean) as string[]
      )
    );

    return {
      ...baseVariant,
      tags: product.tags,
      validFirstShapes,
      validSecondShapes,
    };
  }, [product, secondShapes]);

  const addToCartHandler = useCallback(async () => {
    let newErrors = { ringSize: false, bandWidth: false };
    let valid = true;

    // --- Validation ---
    if (!ringSize) {
      newErrors.ringSize = true;
      valid = false;
      ringSizeRef.current?.focus();
    }

    if (!bandWidth) {
      newErrors.bandWidth = true;
      valid = false;
      if (ringSize) bandWidthRef.current?.focus();
    }

    setErrors(newErrors);
    if (!valid) return;

    try {
      // --- Shopify Cart Add Logic ---
      const payload = {
        id: selectedVariant?.id,
        quantity: 1,
        properties: {
          "Band Width": bandWidth,
          "Ring Size": ringSize,
        },
      };

      // @ts-ignore
      const res = await fetch(`${window?.Shopify?.routes.root}cart/add.js`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to add to cart");
      }

      const data = await res.json();

      // ✅ Redirect to cart
      window.location.href = "/cart";
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Something went wrong while adding to cart. Please try again.");
    }
  }, [selectedVariant, ringSize, bandWidth]);

  const settingChooseHandler = useCallback(() => {
    let newErrors = { ringSize: false, bandWidth: false };
    let valid = true;

    // Ring size validation
    if (!ringSize) {
      newErrors.ringSize = true;
      valid = false;
      ringSizeRef.current?.focus();
    }

    // Band width validation
    if (!bandWidth) {
      newErrors.bandWidth = true;
      valid = false;
      if (ringSize) bandWidthRef.current?.focus(); // Focus only if ring size is valid
    }

    setErrors(newErrors);

    if (!valid) return;

    const currentUrl = window.location.href;
    const data = { ...selectedVariant, currentUrl, ringSize, bandWidth };

    // for final ring data
    dispatch(selectSettingDetail(data as EnrichedVariant));

    // for stepper data
    dispatch(
      selectSetting({
        type: "select",
        id: selectedVariant?.id?.toString() || "",
        meta: selectedVariant?.title || "",
        price: Number(selectedVariant?.price),
        nextStep: !isDiamondSelected ? 2 : 3,
      })
    );

    if (!isDiamondSelected) {
      // window.location.href = "/collections/lab-diamonds";
      window.location.href = `${window.location.origin}/collections/${ROUTES.defaultDiamondType}`;
    } else {
      const url = getFinalPageUrl(
        diamondId?.toString() || "",
        selectedVariant?.id?.toString() || ""
      );
      window.location.href = url;
    }
  }, [
    selectedVariant,
    ringSize,
    bandWidth,
    isDiamondSelected,
    diamondId,
    dispatch,
  ]);

  return (
    <div className="rb:grid rb:grid-cols-1 rb:gap-4 rb:mb-4!">
      {/* Ring Size */}
      <div>
        <p className="rb:mb-1 rb:text-sm rb:font-medium">Ring Size</p>
        <AppSelect
          value={ringSize}
          placeholder="Select ring size"
          options={RING_SIZES}
          onChange={setRingSize}
          error={errors.ringSize}
        />
      </div>

      {/* Band Width */}
      <div>
        <p className="rb:mb-1 rb:text-sm rb:font-medium">Band Width</p>
        <AppSelect
          ref={bandWidthRef}
          value={bandWidth}
          placeholder="Select band width"
          options={BAND_WIDTHS}
          onChange={setBandWidth}
          error={errors.bandWidth}
        />
      </div>

      <div className="rb:space-y-3">
        {isBand ? (
          <CommonCTA
            label="Add to Cart"
            onClick={addToCartHandler}
            className={cn(
              "shopify-theme-primary-bg",
              "rb:font-bold!",
              "rb:text-white!"
            )}
          />
        ) : (
          <CommonCTA
            label="Select This Setting"
            onClick={settingChooseHandler}
            // className="rb:font-bold!"
            // className={cn(
            //   "shopify-theme-primary-bg",
            //   "rb:font-bold!",
            //   "rb:text-white!"
            // )}
          />
        )}
      </div>
    </div>
  );
};

export default ChooseSettingFeature;
