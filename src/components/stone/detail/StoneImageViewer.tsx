const StoneImageViewer = ({ index }: { index: number }) => {
  const radiusMap = [
    "rounded-tl-2xl",
    "rounded-tr-2xl",
    "rounded-bl-2xl",
    "rounded-br-2xl",
  ];

  return (
    <div
      className={`relative aspect-square overflow-hidden bg-white ${radiusMap[index]}`}
    >
      <div className="absolute inset-0 rounded-sm! overflow-hidden bg-[#dfe6ec]!">
        {/* Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp"
          alt="Ring"
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0 mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default StoneImageViewer;
