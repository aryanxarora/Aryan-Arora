function Tile({ imageUrl, title, tag, description, repo }) {
  return (
    <div className="p-5 lg:flex lg:flex-wrap lg:w-2/4">
      {/* Image */}
      <div className="pb-5 lg:pb-0 lg:basis-1/2 cursor-alias">
        <img src={imageUrl} alt="tile_image" />
      </div>
      {/* Body */}
      <div className="lg:basis-1/2 lg:pl-5">
        {/* Title */}
        <a href={repo} target="_blank">
          <p className="font-sans lg:text-xl 2xl:text-2xl hover:underline cursor-alias">
            {title}
          </p>
        </a>
        {/* Tag */}
        <p className="font-serif text-base">{tag}</p>
        {/* Description */}
        <p className="font-serif pt-5 lg:pt-10">{description}</p>
      </div>
    </div>
  );
}

export default Tile;
