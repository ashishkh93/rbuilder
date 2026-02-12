import { Award, ExternalLink } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDiamondLab } from "@/store/diamonds/diamonds.selectors";

const CertificationCard = () => {
  const lab = useSelector(selectDiamondLab);

  return (
    <StoneInfoCard
      title="CERTIFICATION"
      icon={
        <Award className="rb:w-3 rb:h-3 md:rb:h-4 md:rb:w-4 rb:text-yellow-500" />
      }
      rightIcon={
        <ExternalLink className="rb:cursor-pointer! rb:w-4 rb:h-4 md:rb:h-5 md:rb:w-5 rb:text-gray-300" />
      }
    >
      <div className="rb:text-xl rb:font-bold">{lab}</div>

      <div className="rb:mt-4 rb:flex rb:items-center rb:gap-1">
        <img
          src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2951961/build/_assets/kzr-icon-igi-crt-GAZVFCK3.svg"
          alt="IGI"
          className="rb:h-11!"
        />
        <span className="rb:font-semibold rb:text-[#937d67] rb:w-full! rb:leading-none">
          LAB DIAMOND
        </span>
      </div>

      <Link
        to={""}
        className="rb:mt-4 rb:text-xs rb:text-black! rb:font-medium rb:underline!"
      >
        View Certificate
      </Link>
    </StoneInfoCard>
  );
};

export default CertificationCard;
