// scripts/generate-shopify-files.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// --- Helper: always ensure directory exists ---
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// --- Helper: always write (create or overwrite) files ---
function writeFileAlways(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content.trimStart(), "utf-8");
}

// --- Root Shopify theme folders ---
const shopifyRoot = path.resolve('../');
const snippetsDir = path.join(shopifyRoot, "snippets");
const sectionsDir = path.join(shopifyRoot, "sections");
const templatesDir = path.join(shopifyRoot, "templates");
const assetsDir = path.join(shopifyRoot, "assets");

// --- Ensure all folders exist ---
[snippetsDir, sectionsDir, templatesDir, assetsDir].forEach(ensureDir);

// --- FILE CONTENTS ---

// 1️⃣ ring-builder.liquid snippet
const ringBuilderSnippet = `
<div id="site-wrapper">
  <div id="initial-page-loader">
    <div class="pc-filter-page-loader">
      <div class="pc-animated-background">
        <div class="pc-loader_listing_row pc-animated-background">
          <div class="pc-filter_tab_loader">
            <div class="pc-filter_tab_heading pc-listing_bg-masker"></div>
            <div class="pc-filter_tab_section">
              <div class="pc-listing_bg-masker"></div>
              <div class="pc-listing_bg-masker"></div>
              <div class="pc-listing_bg-masker"></div>
              <div class="pc-listing_bg-masker"></div>
            </div>
          </div>
          <div class="pc-loader_filter_col">
            <div class="pc-loader_filter_header pc-listing_bg-masker"></div>
            <div class="pc-loader_filters">
              <div class="pc-loader_filters_head pc-listing_bg-masker"></div>
              <div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
              </div>
            </div>
            <div class="pc-loader_filters">
              <div class="pc-loader_filters_head pc-listing_bg-masker"></div>
              <div class="pc-loader_filter_frcols">
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
              </div>
            </div>
            <div class="pc-loader_filters">
              <div class="pc-loader_filters_head pc-listing_bg-masker"></div>
              <div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
              </div>
            </div>
            <div class="pc-loader_filters">
              <div class="pc-loader_filters_head pc-listing_bg-masker"></div>
              <div class="pc-loader_filter_frcols">
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
              </div>
            </div>
            <div class="pc-loader_filters">
              <div class="pc-loader_filters_head pc-listing_bg-masker"></div>
              <div class="pc-loader_filter_trcols">
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
              </div>
            </div>
            <div class="pc-loader_filters">
              <div class="pc-loader_filters_head pc-listing_bg-masker"></div>
              <div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
              </div>
            </div>
            <div class="pc-loader_filters">
              <div class="pc-loader_filters_head pc-listing_bg-masker"></div>
              <div class="pc-loader_filter_twcols">
                <div class="pc-listing_bg-masker"></div>
                <div class="pc-listing_bg-masker"></div>
              </div>
            </div>
          </div>
          <div class="pc-loader_product_col">
            <div class="pc-loader_product_header">
              <div class="pc-listing_bg-masker"></div>
              <div class="pc-listing_bg-masker"></div>
              <div class="pc-listing_bg-masker"></div>
            </div>
            <div class="pc-loader_product_grid">
              ${Array(9)
    .fill(`<div class="pc-loader_grid_col">
  <div class="pc-loader_grid_img pc-listing_bg-masker"></div>
  <div class="pc-loader_grid_title pc-listing_bg-masker"></div>
  <div class="pc-loader_grid_price pc-listing_bg-masker"></div>
</div>`)
    .join("\n")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main class="pc-main_content">
    <div id="ring-builder-app" style="z-index:1;"></div>
  </main>
</div>

<script type="module" src="{{ 'ring-builder.js' | asset_url }}" defer></script>
<link href="{{ 'ring-builder.css' | asset_url }}" rel="stylesheet">
{% render 'ring-builder-shapes' %}
`;

const matchingBandSnippet = `
      {% stylesheet %}
  .custom-matching-box {
    background: #e9e9e9;
    border-radius: 16px;
    padding: 30px;
    margin: 40px auto;
    max-width: 1200px;
  }

  .custom-matching-heading {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 25px;
  }

  .custom-matching-body {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
  }

  .custom-matching-left {
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .custom-matching-img-block {
    text-align: center;
    text-decoration: none;
  }

  .custom-matching-img-block img {
    max-width: 200px;
    border-radius: 8px;
  }

  .custom-matching-img-block p {
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;
  }

  .custom-plus-sign {
    font-size: 32px;
    font-weight: bold;
  }

  .custom-matching-right {
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  }

  .custom-matching-right p {
    margin: 5px 0;
    font-size: 16px;
  }

  .custom-matching-right strong {
    font-size: 18px;
  }

  .custom-matching-total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }

  .custom-total-note {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    text-align: right;
  }

  .custom-matching-btn {
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
    transition: background-color 0.3s ease, opacity 0.3s ease;
  }

  .custom-matching-btn:hover {
    background-color: #909399;
    color: #ffffff;
    opacity: 0.9;
    cursor: pointer;
  }

  .custom-matching-btn-outline {
    border: 2px solid ;
    background: transparent;
    padding: 12px 30px;
    border-radius: 9999px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    .custom-matching-left,
    .custom-matching-right {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .custom-matching-left {
      flex-direction:column;
    }


    .custom-matching-body {
      flex-direction: column;
      align-items: center;
    }

    .custom-matching-total-row {
      justify-content: center;
      gap: 10px;
    }

    .custom-total-note {
      text-align: center;
    }
  }

  .custom-selector-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .custom-selector {
    display: flex;
    flex-direction: column;
    flex: 1 1 45%;
    max-width: 45%;
  }

  .custom-selector label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .custom-selector select {
    padding: 10px 12px;
    border: 1px solid #ccc !important;
    border-radius: 8px;
    font-size: 14px;
    color: #333;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .custom-selector select:focus {
    box-shadow: 0 0 0 3px rgba(114, 81, 74, 0.2);
    outline: none;
  }

  /* Responsive for mobile */
  @media screen and (max-width: 768px) {
    .custom-selector-container {
      flex-direction: column;
      gap: 15px;
    }

    .custom-selector {
      max-width: 100%;
    }
  }
{% endstylesheet %}

{% assign main_sku = product.variants.first.sku | split: '-' | first %}
{% assign matched_product = null %}

{% if collections['womens-wedding-bands'] %}
  {% for product in collections['womens-wedding-bands'].products %}
    {% for variant in product.variants %}
      {% assign variant_base_sku = variant.sku | split: '-' | first %}
      {% if variant_base_sku == main_sku %}
        {% assign matched_product = product %}
        {% break %}
      {% endif %}
    {% endfor %}
    {% if matched_product %}
      {% break %}
    {% endif %}
  {% endfor %}
{% endif %}

{% if matched_product %}
<script type="application/json" id="matching-band-data">
  {{ matched_product | json }}
</script>
 <div id="ring-builder-app-matching-band-with-ring" style="z-index:1;"></div>
  <script type="module" src="{{ 'matching-band-with-ring.js' | asset_url }}" defer></script>
{% endif %}
`

const ringBuilderShapes = `
<style>
      .pc-shape-round-side {
      background: url({{ 'round_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-oval-side {
      background: url({{ 'oval_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-cushion-side {
      background: url({{ 'cushion_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-emerald-side {
      background: url({{ 'emerald_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-princess-side {
      background: url({{ 'princess_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-radiant-side {
      background: url({{ 'radiant_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-pear-side {
      background: url({{ 'pear_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-marquise-side {
      background: url({{ 'marquise_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-asscher-side {
      background: url({{ 'asscher_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-heart-side {
      background: url({{ 'heart_side.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  /* FRONT IMAGES */

  .pc-shape-round-front {
      background: url({{ 'round_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-oval-front {
      background: url({{ 'oval_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-cushion-front {
      background: url({{ 'cushion_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-emerald-front {
      background: url({{ 'emerald_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-princess-front {
      background: url({{ 'princess_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-radiant-front {
      background: url({{ 'radiant_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-pear-front {
      background: url({{ 'pear_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-marquise-front {
      background: url({{ 'marquise_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-asscher-front {
      background: url({{ 'asscher_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }

  .pc-shape-heart-front {
      background: url({{ 'heart_front.png' | asset_url }}) no-repeat center center;
      background-size: contain;
  }
</style>

`

// 2️⃣ ring-builder.liquid section
const ringBuilderSection = `
{% render 'ring-builder' %}

{% schema %}
{
  "name": "Ring Builder",
  "settings": [
    { "type": "text", "id": "title", "label": "Section Title", "default": "Build Your Ring" },
    { "type": "color", "id": "bg_color", "label": "Background Color", "default": "#ffffff" }
  ],
  "presets": [{ "name": "Ring Builder" }]
}
{% endschema %}
`;

// 3️⃣ collection.ring-builder.json
const ringBuilderTemplate = `
{
  "sections": { "ring-builder": { "type": "ring-builder", "settings": {} } },
  "order": ["ring-builder"]
}
`;

// 4️⃣ custom-liquid.liquid section
const customLiquid = `
<section id="custom-liquid-{{ section.id }}" class="{{ section.settings.wrapper_class }}">
  {{ section.settings.custom_liquid }}
</section>

{% schema %}
{
  "name": "Custom Liquid",
  "settings": [
    { "type": "liquid", "id": "custom_liquid", "label": "Custom Liquid", "info": "Add Liquid, HTML or snippets safely.", "default": "<div>Add your Liquid or HTML here</div>" },
    { "type": "text", "id": "wrapper_class", "label": "Wrapper CSS class", "default": "container" }
  ],
  "presets": [{ "name": "Custom Liquid" }]
}
{% endschema %}
`;

// 5️⃣ back-to-search.liquid snippet
const backToSearch = `
 {% assign first_collection = product.collections.first %}

{% if first_collection.handle == "engagement-rings" %}
  <div id="ring-builder-app-back-to-search" style="z-index:1;"></div>
  <script type="module" src="{{ 'back-to-search.js' | asset_url }}" defer></script>
{% endif %}


`;

// 6️⃣ choose-setting.liquid snippet
const chooseSetting = `
{% assign first_collection = product.collections.first %}

<script type="application/json" id="second-shapes">
 {% assign secondDiamonds = product.metafields.custom.product_second_shape %}
  {{ secondDiamonds }}
</script>
<script type="application/json" id="setting-data">
  {{ product | json }}
</script>
{% if first_collection.handle == 'engagement-rings' or first_collection.handle == 'womens-wedding-bands' %}
  <div id="ring-builder-app-choose-setting" style="z-index:1;"></div>
  <script type="module" src="{{ 'choose-setting.js' | asset_url }}" defer></script>
  <link href="{{ 'ring-builder.css' | asset_url }}" rel="stylesheet">
{% endif %}
`;

// 7️⃣ ring-builder-steps.liquid snippet
const ringBuilderSteps = `
{% assign first_collection = product.collections.first %}

{% if first_collection.handle == "engagement-rings"  %}
<div id="ring-builder-app-ring-builder-steps" style="z-index:1;"></div>
<script type="module" src="{{ 'ring-builder-steps.js' | asset_url }}" defer></script>
<link href="{{ 'ring-builder.css' | asset_url }}" rel="stylesheet">
{% endif %}



`;

// --- WRITE ALL FILES (always overwrite) ---
writeFileAlways(path.join(snippetsDir, "ring-builder.liquid"), ringBuilderSnippet);
writeFileAlways(path.join(snippetsDir, "matching-band-with-ring.liquid"), matchingBandSnippet);
writeFileAlways(path.join(sectionsDir, "ring-builder.liquid"), ringBuilderSection);
writeFileAlways(path.join(templatesDir, "collection.ring-builder.json"), ringBuilderTemplate);
writeFileAlways(path.join(sectionsDir, "custom-liquid.liquid"), customLiquid);
writeFileAlways(path.join(snippetsDir, "back-to-search.liquid"), backToSearch);
writeFileAlways(path.join(snippetsDir, "ring-builder-shapes.liquid"), ringBuilderShapes);
writeFileAlways(path.join(snippetsDir, "choose-setting.liquid"), chooseSetting);
writeFileAlways(path.join(snippetsDir, "ring-builder-steps.liquid"), ringBuilderSteps);


// --- .shopifyignore ---
const ignorePath = path.join(shopifyRoot, ".shopifyignore");
writeFileAlways(ignorePath, "ring-builder/");

// --- Optional: copy React build assets ---
const reactBuildDir = path.join(process.cwd(), "dist");
if (fs.existsSync(reactBuildDir)) {
  fs.readdirSync(reactBuildDir).forEach((file) => {
    const src = path.join(reactBuildDir, file);
    const dest = path.join(assetsDir, file);
    fs.copyFileSync(src, dest);
  });
} else {
  console.warn("⚠️  No React build found in /dist — skipping asset copy.");
}

