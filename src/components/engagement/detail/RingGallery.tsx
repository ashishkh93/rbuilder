import MediaTile from "@/components/common/MediaTile";

const RingGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <MediaTile
          key={i}
          index={i}
          shouldHaveGradient={true}
          src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/162Q-ER-MQ-WG-spin_0.jpg"
          additionalInfoComp={
            <span className="absolute top-3 left-1/2 -translate-x-1/2 text-xs bg-white px-3 py-1 rounded-full shadow-sm">
              Shown with 3 ct
            </span>
          }
          imageContainerClass="bg-white"
        />
      ))}
    </div>
  );
};

export default RingGallery;
