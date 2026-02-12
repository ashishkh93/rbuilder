import { GLOBAL_CONFIG } from "@/config/global-config";
import { Link, useParams } from "react-router-dom";

const StoneCard = ({ stone }: StoneCardProps) => {
  const { diamondType } = useParams();
  return (
    <Link
      to={`/${diamondType}/diamonds?id=${stone?.diamondId}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
      viewTransition={true}
    >
      <div className="rb:relative rb:rounded-xl rb:border rb:border-gray-200 rb:overflow-hidden rb:bg-white rb:group">
        {/* Image */}
        <div className="rb:relative rb:aspect-square rb:bg-[#dfe6ec]!">
          <div className="rb:absolute rb:inset-0 rb:rounded-sm! rb:overflow-hidden rb:cursor-pointer">
            {/* Image */}
            <img
              src={stone?.diamondImage || ""}
              alt={`${stone?.caratWeight} Carat ${stone?.color} ${stone?.clarity} ${stone?.shape}`}
              className="rb:absolute rb:inset-0 rb:w-full rb:h-full! rb:object-contain rb:transition-opacity rb:duration-700 rb:opacity-100 rb:mix-blend-multiply rb:aspect-285/364!"
              // className="rb:absolute rb:inset-0 rb:w-full rb:h-full! rb:object-contain rb:transition-opacity rb:duration-700 rb:opacity-100 rb:group-hover:opacity-0 rb:mix-blend-multiply rb:aspect-285/364!"
            />

            {/* <img
              src={stone?.diamondVideo || ""}
              alt={`${stone.caratWeight} Carat ${stone.color} ${stone.clarity} ${stone.shape}`}
              className="rb:absolute rb:inset-0 rb:w-full rb:h-full rb:object-contain rb:transition-opacity rb:duration-700 rb:opacity-0 rb:group-hover:opacity-100 rb:mix-blend-multiply"
            /> */}
            {/* <video
              src={stone?.diamondVideo || ""}
              autoPlay
              muted
              loop
              playsInline
              className="rb:absolute rb:inset-0 rb:w-full rb:h-full rb:object-contain rb:transition-opacity rb:duration-700 rb:opacity-0 rb:group-hover:opacity-100"
            /> */}
          </div>

          {/* Wishlist */}
          {/* <button className="rb:absolute rb:top-3 rb:right-3 rb:z-10 rb:rounded-full rb:bg-white rb:p-1 rb:shadow">
          <Heart className="rb:w-6 rb:h-6 rb:text-black" />
        </button> */}
        </div>

        {/* Content */}
        <div className="rb:p-4">
          {/* Header */}
          <div className="rb:flex rb:justify-between rb:items-start rb:mb-2">
            <div>
              <div className="rb:text-sm rb:font-medium rb:text-black">
                {stone.shape}
              </div>
              {/* <div className="rb:text-xs rb:text-gray-400">
                With setting: ${stone.priceWithSetting.toLocaleString()}
              </div> */}
            </div>

            <div className="rb:text-sm rb:font-semibold rb:text-black">
              {stone?.currencySymbol || GLOBAL_CONFIG.currencySymbol}
              {stone?.price?.toLocaleString()}
            </div>
          </div>

          {/* Specs */}
          <div className="rb:grid rb:grid-cols-4 rb:border-t rb:pt-3 rb:text-center rb:text-xs">
            <Spec label="carat" value={stone?.caratWeight || "-"} />
            <Spec label="color" value={stone?.color || "-"} />
            <Spec label="clarity" value={stone?.clarity || "-"} />
            <Spec label="ratio" value={stone?.ratio || "-"} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoneCard;

const Spec = ({ label, value }: { label: string; value: string | number }) => (
  <div className="rb:relative rb:px-1 rb:border-r rb:border-gray-200 rb:last:border-r-0">
    <div className="rb:font-semibold rb:text-black">{value}</div>
    <div className="rb:text-black rb:capitalize rb:text-10">{label}</div>
  </div>
);
