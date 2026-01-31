// components/ring/RingConfigurator.tsx
import ProductHeader from "./ProductHeader";
import ShapeSelector from "./ShapeSelector";
import MaterialSelector from "./MaterialSelector";
import StyleSelector from "./StyleSelector";
import StickyCTA from "./StickyCTA";

const RingConfigurator = () => {
  return (
    <div className="space-y-6">
      <ProductHeader />
      <ShapeSelector />
      <MaterialSelector />
      <StyleSelector />
      <div className="flex flex-col gap-2">
        <StickyCTA className="bg-black! text-white!" label="Add Center Stone" />
        <StickyCTA
          className="bg-white! text-black! border border-black!"
          label="Buy Settings Only*"
        />
      </div>
    </div>
  );
};

export default RingConfigurator;
