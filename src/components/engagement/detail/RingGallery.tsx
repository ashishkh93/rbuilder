import MediaTile from "@/components/common/MediaTile";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/lib/utils";

const RingGallery = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  // const images = Array.from({ length: 6 }).map(
  //   (_, i) =>
  //     "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/162Q-ER-MQ-WG-spin_0.jpg"
  // );

  // if (isMobile) {
  //   return (
  //     <AppCarousel
  //       items={images}
  //       renderItem={(src) => (
  //         <img
  //           src={src}
  //           alt=""
  //           className="rb:h-64 rb:w-full rb:rounded-xl rb:object-cover"
  //         />
  //       )}
  //     />
  //   );
  // }

  return (
    <div className="rb:grid rb:grid-cols-2 rb:gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <MediaTile
          key={i}
          index={i}
          shouldHaveGradient={true}
          src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/162Q-ER-MQ-WG-spin_0.jpg"
          additionalInfoComp={
            <span className="rb:absolute rb:top-3 rb:left-1/2 rb:-translate-x-1/2 rb:text-xs rb:bg-white rb:px-3 rb:py-1 rb:rounded-full rb:shadow-sm">
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
