import { GalleryTile } from "./RingGalleryTile";

const RingGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <GalleryTile key={i} index={i} ct="3 ct" />
      ))}
    </div>
  );
};

export default RingGallery;
