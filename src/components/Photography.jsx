function Photography() {
  const getImages = () => {
    let content = [];
    let imageurl = "https://source.unsplash.com/featured/";
    for (let i = 0; i < 20; i++) {
      content.push(<img src={imageurl + i} alt="" />);
    }
    return content;
  };

  return (
    <div className="gap-8 columns-1 md:columns-2 lg:columns-3">
      {getImages()}
    </div>
  );
}

export default Photography;
