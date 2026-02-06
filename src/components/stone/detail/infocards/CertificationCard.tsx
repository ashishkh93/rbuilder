import { Award, ExternalLink } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";
import { Link } from "react-router-dom";

const CertificationCard = () => {
  return (
    <StoneInfoCard
      title="CERTIFICATION"
      icon={<Award className="w-3 h-3 md:h-4 md:w-4 text-yellow-500" />}
      rightIcon={<ExternalLink className="w-4 h-4 md:h-5 md:w-5 text-gray-300" />}
    >
      <div className="text-xl font-bold">IGI</div>

      <div className="mt-4 flex items-center gap-1">
        <img
          src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2951961/build/_assets/kzr-icon-igi-crt-GAZVFCK3.svg"
          alt="IGI"
          className="h-11"
        />
        <span className="font-semibold text-[#937d67] max-w-10 leading-none">LAB DIAMOND</span>
      </div>

      <Link to={""} className="mt-4 text-xs text-black! font-medium underline!">
        View Certificate
      </Link>
    </StoneInfoCard>
  );
};

export default CertificationCard;
