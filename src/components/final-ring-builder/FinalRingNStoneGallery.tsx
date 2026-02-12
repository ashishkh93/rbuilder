import MediaTile from "../common/MediaTile";

const FinalRingNStoneGallery = () => {
  return (
    <div className="rb:space-y-6">
      <div className="rb:grid rb:grid-cols-1 sm:rb:grid-cols-2 rb:gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <MediaTile
            key={i}
            index={i}
            shouldHaveGradient={i === 0 || i === 3}
            src={
              i === 0
                ? "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/391Q-R-YG_0_3x_jpg_a8179999-e189-404b-b899-e8cb5c9b4483.webp?v=1721664449&width=800&height=800&crop=center"
                : i === 3
                  ? "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/4a8b24b56baa4c9299408e594a2fc7ee.jpg?v=1693924878&width=800&height=800&crop=center"
                  : "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp"
            }
            imageContainerClass={'rb:bg-gray-200'}
          />
        ))}
      </div>
    </div>
  );
};

export default FinalRingNStoneGallery;
