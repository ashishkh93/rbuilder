const StoneImageViewer = ({ index }: { index: number }) => {
  const radiusMap = [
    "rb:rounded-tl-2xl",
    "rb:rounded-tr-2xl",
    "rb:rounded-bl-2xl",
    "rb:rounded-br-2xl",
  ];

  return (
    <div
      className={`rb:relative rb:aspect-square rb:overflow-hidden rb:bg-white ${radiusMap[index]}`}
    >
      <div className="rb:absolute rb:inset-0 rb:rounded-sm! rb:overflow-hidden rb:bg-[#dfe6ec]!">
        {/* Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp"
          alt="Ring"
          className="rb:absolute rb:inset-0 rb:w-full rb:h-full rb:object-contain rb:transition-opacity rb:duration-700 rb:opacity-100 rb:group-hover:opacity-0 rb:mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default StoneImageViewer;
