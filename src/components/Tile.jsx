function Tile({ imageUrl, title, tag, description }) {
  return (
    <div className="p-5 lg:flex lg:flex-wrap lg:w-2/4">
      {/* Image */}
      <div className="pb-5 lg:pb-0 lg:basis-1/2 cursor-alias">
        <img src={imageUrl} alt="tile_image" />
      </div>
      {/* Body */}
      <div className="lg:basis-1/2 lg:pl-5">
        {/* Title */}
        <p className="font-sans lg:text-2xl hover:underline cursor-alias">
          {title}
        </p>
        {/* Tag */}
        <p className="font-serif text-base">{tag}</p>
        {/* Description */}
        <p className="font-serif lg:pt-10">{description}</p>
      </div>
    </div>
  );
}

export default Tile;
