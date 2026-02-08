// components/ring/RingConfigurator.tsx
import ProductHeader from "./ProductHeader";
import ShapeSelector from "./ShapeSelector";
import MaterialSelector from "./MaterialSelector";
import StyleSelector from "./StyleSelector";
import StickyCTA from "./StickyCTA";
import { useNavigate } from "react-router-dom";

const RingConfigurator = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <ProductHeader />
      <ShapeSelector />
      <MaterialSelector />
      <StyleSelector />
      <div className="flex flex-col gap-2">
        <StickyCTA
          className="bg-black! text-white!"
          label="Add Center Stone"
          onClick={() => {
            navigate("lab-diamond", { viewTransition: true });
          }}
        />
        <StickyCTA
          className="bg-white! text-black! border border-black!"
          label="Buy Settings Only*"
        />
      </div>
    </div>
  );
};

export default RingConfigurator;
